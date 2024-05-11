import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required" }), { status: 400 });
    }

    await sendgrid.send({
      to: "HYUNWOO001@e.ntu.edu.sg",
      from: "alexlee2459@gmail.com",
      subject: `New Message from JadeHouse`,
      html: `<h1>From: ${email}</h1><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ error: "" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}