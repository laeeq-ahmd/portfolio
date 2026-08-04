import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ─── Option A: Resend ─────────────────────────────────────────────────────
    // Uncomment and add RESEND_API_KEY to .env.local to use Resend:
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <onboarding@resend.dev>",
    //   to: "your-email@example.com",
    //   subject: `Mission Control — New message from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    // ─── Option B: Formspree fallback ─────────────────────────────────────────
    // Uncomment and set FORMSPREE_ENDPOINT in .env.local:
    //
    // const res = await fetch(process.env.FORMSPREE_ENDPOINT!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, message }),
    // });
    // if (!res.ok) throw new Error("Formspree error");

    // For now, log and return success (no external service configured yet)
    console.log("[Contact]", { name, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
