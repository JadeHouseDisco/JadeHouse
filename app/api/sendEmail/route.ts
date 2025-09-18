import { NextRequest } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

const kv = Redis.fromEnv();
const DAILY_LIMIT = 50;          // global cap per day
const PER_IP_DAILY_LIMIT = 5;    // per-IP cap per day  <-- NEW

function secondsUntilMidnightLocal() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(23, 59, 59, 999);
  return Math.max(1, Math.ceil((midnight.getTime() - now.getTime()) / 1000));
}

const resend = new Resend(process.env.RESEND_API_KEY!);

function sanitize(s: string) {
  return String(s).replace(/[<>]/g, (m) => (m === "<" ? "&lt;" : "&gt;"));
}
function isDisposable(email: string) {
  return /@(mailinator\.com|guerrillamail\.com|10minutemail\.com|trashmail\.com)$/i.test(email);
}
async function verifyTurnstile(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY!;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ secret, response: token, remoteip: ip ?? undefined }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin") || "";
    if (!/https?:\/\/(www\.)?jadehouse\.casa$/i.test(origin)) {
      return new Response(JSON.stringify({ error: "Invalid origin" }), { status: 403 });
    }

    const { email, message, cf_token, website } = await req.json();

    if (website) {
      return new Response(JSON.stringify({ error: "Bot detected" }), { status: 400 });
    }
    if (!email || !message || !cf_token) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }
    if (isDisposable(email)) {
      return new Response(JSON.stringify({ error: "Disposable email blocked" }), { status: 400 });
    }
    if (String(message).length > 2000) {
      return new Response(JSON.stringify({ error: "Message too long" }), { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? null;
    const human = await verifyTurnstile(cf_token, ip);
    if (!human) {
      return new Response(JSON.stringify({ error: "Bot check failed" }), { status: 403 });
    }

    // -------- Quotas (pre-checks) --------
    const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const dayKey = `contact:global:${date}`;
    const usedGlobal = (await kv.get<number>(dayKey)) ?? 0;
    if (usedGlobal >= DAILY_LIMIT) {
      return new Response(JSON.stringify({ error: "Daily quota reached" }), { status: 429 });
    }

    const ipKey = `contact:ip:${ip ?? "unknown"}:${date}`;   // <-- NEW
    const usedIp = (await kv.get<number>(ipKey)) ?? 0;       // <-- NEW
    if (usedIp >= PER_IP_DAILY_LIMIT) {                      // <-- NEW
      return new Response(JSON.stringify({ error: "Per-IP daily limit reached" }), { status: 429 });
    }
    // -------------------------------------

    const safeEmail = sanitize(email).slice(0, 320);
    const safeMessage = sanitize(message).slice(0, 2000);

    const { error } = await resend.emails.send({
      from: "JadeHouse <no-reply@send.jadehouse.casa>",
      to: "jadehousedisco@gmail.com",
      subject: "New Message from JadeHouse",
      html: `<h1>From: ${safeEmail}</h1><p>${safeMessage}</p>`,
      text: `From: ${safeEmail}\n\n${safeMessage}`,
      replyTo: safeEmail,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    // -------- Quotas (post-increments) --------
    const ttl = secondsUntilMidnightLocal();

    const newGlobal = await kv.incr(dayKey);
    if (newGlobal === 1) await kv.expire(dayKey, ttl);

    const newIp = await kv.incr(ipKey);              // <-- NEW
    if (newIp === 1) await kv.expire(ipKey, ttl);    // <-- NEW
    // ------------------------------------------

    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Internal error" }), { status: 500 });
  }
}
