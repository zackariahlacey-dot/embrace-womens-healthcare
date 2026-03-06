"use server";

/**
 * After changing .env.local, restart your dev server (Ctrl+C then npm run dev)
 * so Next.js picks up the new environment variables.
 */

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const FROM_EMAIL = "Embrace Women's Healthcare <onboarding@resend.dev>";

export type SubmitContactFormState =
  | { success: true; message?: string }
  | { success: false; error: string };

function adminEmailHtml(firstName: string, email: string, message: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:24px; font-family: system-ui, sans-serif; background-color: #f3f4f6;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <h2 style="margin:0 0 20px; font-size:18px; color:#374151;">New Lead</h2>
    <table style="width:100%; border-collapse:collapse;">
      <tr><td style="padding:10px 0 6px; font-weight:600; color:#6b7280; width:100px;">Name</td><td style="padding:10px 0 6px; color:#111827;">${escapeHtml(firstName)}</td></tr>
      <tr><td style="padding:6px 0; font-weight:600; color:#6b7280;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#D81B60;">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:12px 0 6px; font-weight:600; color:#6b7280; vertical-align:top;">Message</td><td style="padding:12px 0 6px; color:#111827; white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
    </table>
  </div>
</body>
</html>
  `.trim();
}

function confirmationEmailHtml(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:24px; font-family: system-ui, sans-serif; background-color: #fdf2f8;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.08); border-top:4px solid #D81B60;">
    <h2 style="margin:0 0 20px; font-size:20px; color:#D81B60;">Embrace Women&apos;s Healthcare</h2>
    <p style="margin:0 0 16px; color:#374151; line-height:1.6;">Hi ${escapeHtml(firstName)}, thank you for reaching out! Bethany has received your message and will get back to you shortly.</p>
    <p style="margin:0; color:#6b7280; line-height:1.6;">Warmly,<br><strong>The Embrace Team</strong></p>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  return "Something went wrong. Please try again.";
}

export async function submitContactForm(
  _prevState: SubmitContactFormState | null,
  formData: FormData
): Promise<SubmitContactFormState> {
  const firstName = (formData.get("firstName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!firstName || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return {
        success: false,
        error:
          "Missing Supabase config. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local, then restart your terminal (e.g. npm run dev).",
      };
    }
    if (!resendApiKey) {
      return {
        success: false,
        error: "Missing RESEND_API_KEY in .env.local. Add it and restart your terminal.",
      };
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Step A: Database — insert into leads
    const { error: dbError } = await supabase
      .from("leads")
      .insert([{ first_name: firstName, email: email, message: message }]);

    if (dbError) throw new Error("Failed to save to database: " + dbError.message);

    // Step B: Emails — Admin Report + Patient Confirmation
    const resend = new Resend(resendApiKey);

    const { error: adminError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ["zackariahlacey@gmail.com", "bethanycooknp@proton.me"],
      subject: `🚨 New Lead: ${firstName}`,
      html: adminEmailHtml(firstName, email, message),
    });

    if (adminError) {
      console.error("Resend admin email error:", adminError);
    }

    const { error: confirmError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your message - Embrace Women's Healthcare",
      html: confirmationEmailHtml(firstName),
    });

    if (confirmError) {
      console.error("Resend confirmation email error:", confirmError);
      const msg = adminError
        ? "Message saved, but both emails failed to send."
        : "Message saved, but confirmation email failed.";
      return { success: false, error: `${msg} ${confirmError.message || ""}`.trim() };
    }
    if (adminError) {
      return {
        success: false,
        error: `Confirmation sent. Admin email failed: ${adminError.message || "unknown"}`.trim(),
      };
    }

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (err) {
    console.error("submitContactForm error:", err);
    return { success: false, error: getErrorMessage(err) };
  }
}
