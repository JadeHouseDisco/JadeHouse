import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"), // 5 submissions/min per IP
});

export async function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url);
  if (pathname === "/api/sendEmail" && req.method === "POST") {
    const ip = req.ip ?? req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    const { success } = await limiter.limit(`send:${ip}`);
    if (!success) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
        status: 429,
        headers: { "content-type": "application/json" },
      });
    }
  }
  return NextResponse.next();
}
export const config = { matcher: ["/api/sendEmail"] };
