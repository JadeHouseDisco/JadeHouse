import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function sanitize(s: string) {
  return s.replace(/[<>]/g, (m) => (m === "<" ? "&lt;" : "&gt;"));
}

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required" }), { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }

    const safeEmail = sanitize(String(email)).slice(0, 320);
    const safeMessage = sanitize(String(message)).slice(0, 2000);

    const { error } = await resend.emails.send({
      from: "JadeHouse <no-reply@send.jadehouse.casa>", // use a verified domain in Resend
      to: "jadehousedisco@gmail.com",
      subject: "New Message from JadeHouse Website",
      html: `<h1>From: ${safeEmail}</h1><p>${safeMessage}</p>`,
      text: `From: ${safeEmail}\n\n${safeMessage}`,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Internal error" }), { status: 500 });
  }
}
