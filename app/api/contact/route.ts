import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "your_email@example.com",
      subject: `Mission Control — New message from ${name}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("[Contact] Email sent successfully", { id: data?.id });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
