import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/lib/navigation";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  intent: string;
  message: string;
  company?: string;
}

function buildAutoReplyHtml(payload: ContactPayload) {
  const { name, email, phone, intent, message, company } = payload;

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0; padding:0; background-color:#000000; font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px; background-color:#0a0a0a; border:1px solid #262626; border-radius:16px; overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 24px 32px; border-bottom:1px solid #262626;">
                <p style="margin:0; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#ffffff99;">They Will Know You</p>
                <h1 style="margin:12px 0 0 0; font-size:22px; line-height:1.3; color:#ffffff; font-weight:700;">We've received your inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 16px 0; font-size:14px; line-height:1.6; color:#ffffffcc;">Hi ${escapeHtml(name)},</p>
                <p style="margin:0 0 24px 0; font-size:14px; line-height:1.6; color:#ffffffcc;">
                  Thank you for reaching out. Our team has received your message and will get back to you within
                  <strong style="color:#ffffff;">24 business hours</strong>.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0d; border:1px solid #262626; border-radius:12px;">
                  <tr>
                    <td style="padding:20px 24px;">
                      <p style="margin:0 0 12px 0; font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:#ffffff66;">Submission Summary</p>
                      ${summaryRow("Name", name)}
                      ${summaryRow("Email", email)}
                      ${phone ? summaryRow("Phone", phone) : ""}
                      ${company ? summaryRow("Company", company) : ""}
                      ${summaryRow("Interested In", intent)}
                      <div style="margin-top:12px; padding-top:12px; border-top:1px solid #262626;">
                        <p style="margin:0 0 4px 0; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#ffffff66;">Message</p>
                        <p style="margin:0; font-size:13px; line-height:1.6; color:#ffffffcc; white-space:pre-wrap;">${escapeHtml(message)}</p>
                      </div>
                    </td>
                  </tr>
                </table>
                <p style="margin:24px 0 0 0; font-size:13px; line-height:1.6; color:#ffffff66;">
                  If anything above looks incorrect, just reply to this email and let us know.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px; border-top:1px solid #262626;">
                <p style="margin:0; font-size:12px; color:#ffffff4d;">They Will Know You &mdash; ${escapeHtml(CONTACT_INFO.address)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildTeamNotificationHtml(payload: ContactPayload) {
  const { name, email, phone, intent, message, company } = payload;

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0; padding:0; background-color:#000000; font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px; background-color:#0a0a0a; border:1px solid #262626; border-radius:16px; overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 24px 32px; border-bottom:1px solid #262626;">
                <p style="margin:0; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#ffffff99;">They Will Know You</p>
                <h1 style="margin:12px 0 0 0; font-size:22px; line-height:1.3; color:#ffffff; font-weight:700;">New website lead</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0d; border:1px solid #262626; border-radius:12px;">
                  <tr>
                    <td style="padding:20px 24px;">
                      ${summaryRow("Name", name)}
                      ${summaryRow("Email", email)}
                      ${phone ? summaryRow("Phone", phone) : ""}
                      ${company ? summaryRow("Company", company) : ""}
                      ${summaryRow("Interested In", intent)}
                      <div style="margin-top:12px; padding-top:12px; border-top:1px solid #262626;">
                        <p style="margin:0 0 4px 0; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#ffffff66;">Message</p>
                        <p style="margin:0; font-size:13px; line-height:1.6; color:#ffffffcc; white-space:pre-wrap;">${escapeHtml(message)}</p>
                      </div>
                    </td>
                  </tr>
                </table>
                <p style="margin:24px 0 0 0; font-size:13px; line-height:1.6; color:#ffffff66;">
                  Reply directly to this email to respond to ${escapeHtml(name)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function summaryRow(label: string, value: string) {
  return `<p style="margin:0 0 8px 0; font-size:13px; line-height:1.6; color:#ffffffcc;"><span style="color:#ffffff66;">${escapeHtml(label)}:</span> ${escapeHtml(value)}</p>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, intent, message, company } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set — cannot deliver the lead.");
    return NextResponse.json(
      { success: false, message: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);
  const contactPayload: ContactPayload = { name, email, phone, intent, message, company };

  try {
    await resend.emails.send({
      from: "They Will Know You <hello@theywillknowyou.com>",
      to: CONTACT_INFO.email,
      replyTo: email,
      subject: `New Lead: ${name} — theywillknowyou.com`,
      html: buildTeamNotificationHtml(contactPayload),
    });
  } catch (error) {
    console.error("Failed to notify the team of a new lead:", error);
    return NextResponse.json(
      { success: false, message: "Failed to deliver your message. Please try again." },
      { status: 502 },
    );
  }

  try {
    await resend.emails.send({
      from: "They Will Know You <hello@theywillknowyou.com>",
      to: email,
      replyTo: CONTACT_INFO.email,
      subject: "We've received your inquiry — They Will Know You",
      html: buildAutoReplyHtml(contactPayload),
    });
  } catch (error) {
    console.error("Failed to send Resend auto-reply email:", error);
  }

  return NextResponse.json({ success: true });
}
