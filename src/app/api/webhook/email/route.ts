/**
 * Resend Inbound Webhook — forwards received emails to Gmail.
 *
 * Configure in Resend: Webhooks → Add → Event "email.received" → Endpoint URL:
 *   https://www.embracewomenshealthcare.com/api/webhook/email
 *
 * Optional: set RESEND_WEBHOOK_SECRET in .env (and Vercel) to verify webhook signatures.
 * Requires RESEND_API_KEY for forwarding.
 */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const FORWARD_TO = "zackariahlacey@gmail.com";
const FROM_EMAIL = "Website Leads <hello@embracewomenshealthcare.com>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const apiKey = process.env.RESEND_API_KEY;
    const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return new NextResponse("Server configuration error", { status: 500 });
    }

    const resend = new Resend(apiKey);

    let result: { type: string; data: { email_id: string; subject?: string; from?: string } };
    if (webhookSecret) {
      const id = req.headers.get("svix-id");
      const timestamp = req.headers.get("svix-timestamp");
      const signature = req.headers.get("svix-signature");
      if (!id || !timestamp || !signature) {
        return new NextResponse("Missing webhook headers", { status: 400 });
      }
      result = resend.webhooks.verify({
        payload,
        headers: { id, timestamp, signature },
        webhookSecret,
      }) as typeof result;
    } else {
      result = JSON.parse(payload) as typeof result;
    }

    if (result.type !== "email.received") {
      return NextResponse.json({ message: "Event ignored" }, { status: 200 });
    }

    const emailId = result.data?.email_id;
    if (!emailId) {
      return new NextResponse("Missing email_id", { status: 400 });
    }

    const { data: email, error: emailError } = await resend.emails.receiving.get(emailId);
    if (emailError || !email) {
      console.error("Failed to fetch received email:", emailError);
      return new NextResponse("Failed to fetch email content", { status: 500 });
    }

    const subject = (result.data?.subject ?? (email as { subject?: string }).subject ?? "No subject").trim();
    const from = (result.data?.from ?? (email as { from?: string }).from ?? "Unknown").trim();
    const bodyText = (email as { text?: string }).text ?? "";
    const bodyHtml = (email as { html?: string }).html ?? "";

    const forwardHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #333;">
  <h2 style="color: #db2777;">Forwarded Inbound Email</h2>
  <p><strong>From:</strong> ${escapeHtml(from)}</p>
  <p><strong>Original subject:</strong> ${escapeHtml(subject)}</p>
  <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
  <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
    ${bodyHtml ? (bodyHtml as string) : `<pre style="white-space: pre-wrap; margin: 0;">${escapeHtml(bodyText)}</pre>`}
  </div>
</body>
</html>
    `.trim();

    const forwardText = `Forwarded Inbound Email\n\nFrom: ${from}\nSubject: ${subject}\n\n--- Message ---\n\n${bodyText || "(no plain text body)"}`;

    // Store in Supabase
    try {
      // Extract name and email from "Name <email@example.com>"
      let namePart = from;
      let emailPart = from;
      const match = from.match(/(.*)<(.*)>/);
      if (match) {
        namePart = match[1].trim();
        emailPart = match[2].trim();
      }

      await supabase
        .from("leads")
        .insert([{
          first_name: namePart,
          email: emailPart,
          message: `[Subject: ${subject}]\n\n${bodyText || "(no body)"}`
        }]);
    } catch (dbErr) {
      console.error("Failed to store inbound email in Supabase:", dbErr);
      // We don't fail the whole request because the forwarding is arguably more important
    }

    const { error: sendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [FORWARD_TO],
      subject: `[Forwarded] ${subject}`,
      html: forwardHtml,
      text: forwardText,
    });

    if (sendError) {
      console.error("Failed to forward email:", sendError);
      return new NextResponse(`Forward failed: ${sendError.message}`, { status: 500 });
    }

    return NextResponse.json({ message: "Email forwarded successfully" });
  } catch (err) {
    console.error("Inbound webhook error:", err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
