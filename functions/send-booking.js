const nodemailer = require("nodemailer");

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      organization = "",
      eventType = "",
      eventDate = "",
      location = "",
      budget = "",
      audienceSize = "",
      message = "",
    } = data;

    if (!firstName || !lastName || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Please fill in first name, last name, email, and message.",
        }),
      };
    }

    console.log("ENV CHECK", {
  ZOHO_HOST: process.env.ZOHO_HOST,
  ZOHO_PORT: process.env.ZOHO_PORT,
  ZOHO_USER: process.env.ZOHO_USER,
  FORM_TO: process.env.FORM_TO,
  HAS_ZOHO_PASS: !!process.env.ZOHO_PASS,
});

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_HOST,
      port: Number(process.env.ZOHO_PORT || 465),
      secure: Number(process.env.ZOHO_PORT || 465) === 465,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const fullName = `${firstName} ${lastName}`.trim();

    const textBody = `
New booking inquiry received

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Organization: ${organization}
Event Type: ${eventType}
Event Date: ${eventDate}
Location: ${location}
Budget: ${budget}
Audience Size: ${audienceSize}

Message:
${message}
`.trim();

    const htmlBody = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #1f2a30;">
        <h2 style="margin-bottom: 16px;">New booking inquiry received</h2>

        <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
          <tr><td style="padding: 8px; font-weight: 700;">Name</td><td style="padding: 8px;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Email</td><td style="padding: 8px;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Phone</td><td style="padding: 8px;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Organization</td><td style="padding: 8px;">${escapeHtml(organization)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Event Type</td><td style="padding: 8px;">${escapeHtml(eventType)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Event Date</td><td style="padding: 8px;">${escapeHtml(eventDate)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Location</td><td style="padding: 8px;">${escapeHtml(location)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Budget</td><td style="padding: 8px;">${escapeHtml(budget)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Audience Size</td><td style="padding: 8px;">${escapeHtml(audienceSize)}</td></tr>
        </table>

        <div style="margin-top: 20px;">
          <div style="font-weight: 700; margin-bottom: 8px;">Message</div>
          <div style="padding: 12px; background: #f6f6f2; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `Ida Byrd Hill Website <${process.env.ZOHO_USER}>`,
      to: process.env.FORM_TO,
      cc: process.env.FORM_CC || undefined,
      replyTo: email,
      subject: `New Ida Byrd Hill booking inquiry — ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Inquiry sent successfully." }),
    };
  } catch (error) {
  console.error("Email send error:", error);
  console.error("Error message:", error.message);
  console.error("Error stack:", error.stack);

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: "There was a problem sending the inquiry.",
    }),
  };
}
};