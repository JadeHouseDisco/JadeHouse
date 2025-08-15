import sendgrid from "@sendgrid/mail";

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required" }), { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error("SENDGRID_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service is not configured" }),
        { status: 500 }
      );
    }

    sendgrid.setApiKey(apiKey);

    await sendgrid.send({
      to: "HYUNWOO001@e.ntu.edu.sg",
      from: "alexlee2459@gmail.com",
      subject: `New Message from JadeHouse`,
      html: `<h1>From: ${email}</h1><p>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}