import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const MAX_EMAIL_LENGTH = 320;
const MAX_MESSAGE_LENGTH = 2_000;
const DEFAULT_ORIGINS = ["https://jadehouse.casa", "https://www.jadehouse.casa"];
const DISPOSABLE_DOMAINS = new Set([
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "trashmail.com",
]);

interface ContactPayload {
  email?: unknown;
  message?: unknown;
  cf_token?: unknown;
  website?: unknown;
}

interface TurnstileResponse {
  success?: boolean;
  hostname?: string;
}

const responseHeaders = { "Cache-Control": "no-store" };

function json(errorOrMessage: { error: string } | { message: string }, status: number) {
  return NextResponse.json(errorOrMessage, { status, headers: responseHeaders });
}

function allowedOrigins() {
  const configured = process.env.CONTACT_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  const origins = new Set(configured?.length ? configured : DEFAULT_ORIGINS);
  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
    origins.add("http://127.0.0.1:3000");
  }
  return origins;
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const candidate = req.headers.get("x-real-ip")?.trim() || forwarded || "unknown";
  return /^[a-f\d:.]{1,64}$/i.test(candidate) ? candidate : "unknown";
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  };
  return value.replace(/[&<>'"]/g, (character) => entities[character]);
}

function isValidEmail(email: string) {
  return (
    email.length <= MAX_EMAIL_LENGTH &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    !DISPOSABLE_DOMAINS.has(email.split("@").at(-1)?.toLowerCase() ?? "")
  );
}

async function parsePayload(req: NextRequest): Promise<ContactPayload | null> {
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return null;
  }

  const contentLength = Number(req.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) return null;

  const body = await req.text();
  if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) return null;

  try {
    const parsed: unknown = JSON.parse(body);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as ContactPayload)
      : null;
  } catch {
    return null;
  }
}

async function verifyTurnstile(token: string, ip: string, validOrigins: Set<string>) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "unknown") body.set("remoteip", ip);

  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    },
  );

  if (!turnstileResponse.ok) return false;
  const result = (await turnstileResponse.json()) as TurnstileResponse;
  if (!result.success) return false;

  if (process.env.NODE_ENV === "production") {
    const allowedHostnames = new Set(
      Array.from(validOrigins).map((origin) => new URL(origin).hostname),
    );
    return Boolean(result.hostname && allowedHostnames.has(result.hostname));
  }

  return true;
}

function createRateLimiters() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const redis = new Redis({ url, token });
  return {
    burst: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "1 m"),
      prefix: "contact:burst",
    }),
    dailyIp: new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(5, "1 d"),
      prefix: "contact:daily-ip",
    }),
    dailyGlobal: new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(50, "1 d"),
      prefix: "contact:daily-global",
    }),
  };
}

export async function POST(req: NextRequest) {
  try {
    const validOrigins = allowedOrigins();
    const origin = req.headers.get("origin");
    if (!origin || !validOrigins.has(origin)) {
      return json({ error: "Invalid origin" }, 403);
    }

    const payload = await parsePayload(req);
    if (!payload) return json({ error: "Invalid request" }, 400);

    const { email, message, cf_token: turnstileToken, website } = payload;
    if (typeof website === "string" && website.trim()) {
      return json({ message: "Email sent" }, 200);
    }

    if (
      typeof email !== "string" ||
      typeof message !== "string" ||
      typeof turnstileToken !== "string"
    ) {
      return json({ error: "Missing fields" }, 400);
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedMessage = message.trim();
    if (!isValidEmail(normalizedEmail)) {
      return json({ error: "Invalid email" }, 400);
    }
    if (!normalizedMessage || normalizedMessage.length > MAX_MESSAGE_LENGTH) {
      return json({ error: "Message must be between 1 and 2000 characters" }, 400);
    }
    if (!turnstileToken || turnstileToken.length > 4_096) {
      return json({ error: "Invalid verification token" }, 400);
    }

    const resendKey = process.env.RESEND_API_KEY;
    const limiters = createRateLimiters();
    if (!resendKey || !process.env.TURNSTILE_SECRET_KEY || !limiters) {
      console.error("Contact form services are not fully configured");
      return json({ error: "Contact form is temporarily unavailable" }, 503);
    }

    const ip = getClientIp(req);
    const burst = await limiters.burst.limit(ip);
    if (!burst.success) {
      return json({ error: "Too many requests. Please try again later." }, 429);
    }

    if (!(await verifyTurnstile(turnstileToken, ip, validOrigins))) {
      return json({ error: "Bot check failed" }, 403);
    }

    const [dailyIp, dailyGlobal] = await Promise.all([
      limiters.dailyIp.limit(ip),
      limiters.dailyGlobal.limit("all"),
    ]);
    if (!dailyIp.success || !dailyGlobal.success) {
      return json({ error: "Daily contact limit reached. Please try again tomorrow." }, 429);
    }

    const safeEmail = escapeHtml(normalizedEmail);
    const safeMessage = escapeHtml(normalizedMessage).replace(/\r?\n/g, "<br />");
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "JadeHouse <no-reply@send.jadehouse.casa>",
        to: ["jadehousedisco@gmail.com"],
        subject: "New Message from JadeHouse",
        html: `<h1>From: ${safeEmail}</h1><p>${safeMessage}</p>`,
        text: `From: ${normalizedEmail}\n\n${normalizedMessage}`,
        reply_to: normalizedEmail,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected a contact email", resendResponse.status);
      return json({ error: "Failed to send message" }, 502);
    }

    return json({ message: "Email sent" }, 200);
  } catch (error) {
    console.error("Contact form request failed", error);
    return json({ error: "Contact form is temporarily unavailable" }, 500);
  }
}
