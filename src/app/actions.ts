"use server";

/**
 * After changing .env.local, restart your dev server (Ctrl+C then npm run dev)
 * so Next.js picks up the new environment variables.
 */

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const FROM_PATIENT = "Embrace Women's Healthcare <hello@embracewomenshealthcare.com>";
const FROM_ADMIN = "Website Leads <hello@embracewomenshealthcare.com>";

export type SubmitContactFormState =
  | { success: true; message?: string }
  | { success: false; error: string };

function adminEmailHtml(firstName: string, email: string, message: string): string {
  const safeName = escapeHtml(firstName);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:24px;">
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; text-align: center;">
    <h2 style="color: #db2777; margin-bottom: 20px;">New Website Lead</h2>
    <p style="font-size: 16px; margin: 5px 0;"><strong>Name:</strong> ${safeName}</p>
    <p style="font-size: 16px; margin: 5px 0;"><strong>Email:</strong> ${safeEmail}</p>
    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 25px; text-align: left;">
      <p style="font-size: 14px; color: #6b7280; margin-top: 0; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
      <p style="white-space: pre-wrap; margin: 0; font-size: 16px; line-height: 1.6;">${safeMessage}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function confirmationEmailHtml(firstName: string): string {
  const safeName = escapeHtml(firstName);
  const logoUrl = "https://www.embracewomenshealthcare.com/embracelogo.png";
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:24px;">
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #374151; text-align: center; border: 1px solid #f3f4f6; border-radius: 12px;">
    <img src="${logoUrl}" alt="Embrace Women's Healthcare" style="height: 50px; width: auto; display: block; margin: 0 auto 20px auto;" />
    <h2 style="color: #db2777; font-size: 24px; font-weight: 300; margin-bottom: 20px;">Thank You for Reaching Out</h2>
    <p style="font-size: 16px; line-height: 1.6;">Hi ${safeName},</p>
    <p style="font-size: 16px; line-height: 1.6;">We have received your message. Beth will be with you shortly to help you with your needs and answer any questions you may have.</p>
    <p style="font-size: 16px; line-height: 1.6;">If you have any immediate questions, feel free to reply directly to this email.</p>
    <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
      <p style="font-size: 14px; color: #9ca3af; margin-bottom: 4px;">Warmly,</p>
      <p style="font-size: 18px; font-weight: bold; color: #db2777; margin-top: 0; margin-bottom: 2px;">Bethany Cook</p>
      <p style="font-size: 14px; color: #374151; margin-top: 0; font-weight: 500;">WHNP-BC, CNM</p>
      <p style="font-size: 12px; color: #9ca3af; margin-top: 5px;">Embrace Women's Healthcare</p>
    </div>
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
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return {
        success: false,
        error: "Missing Supabase configuration. Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.",
      };
    }
    if (!resendApiKey) {
      return {
        success: false,
        error: "Missing RESEND_API_KEY in environment variables.",
      };
    }

    // Step A: Database — insert into leads
    const { error: dbError } = await supabase
      .from("leads")
      .insert([{ first_name: firstName, email: email, message: message }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      throw new Error(`Failed to save to database: ${dbError.message}`);
    }

    // Step B: Emails — Admin notification + Patient confirmation (both must succeed)
    const resend = new Resend(resendApiKey);

    const replyTo = "bethanycooknp@proton.me";

    const [adminResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from: FROM_ADMIN,
        to: ["zackariahlacey@gmail.com", "bethanycooknp@proton.me"],
        replyTo,
        subject: `New Website Lead: ${firstName}`,
        html: adminEmailHtml(firstName, email, message),
      }),
      resend.emails.send({
        from: FROM_PATIENT,
        to: email,
        replyTo,
        subject: "Thank you for reaching out to Embrace Women's Healthcare",
        html: confirmationEmailHtml(firstName),
      }),
    ]);

    const adminError = adminResult.error;
    const confirmError = confirmResult.error;

    if (adminError) console.error("Resend admin email error:", adminError);
    if (confirmError) console.error("Resend confirmation email error:", confirmError);

    if (confirmError) {
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
