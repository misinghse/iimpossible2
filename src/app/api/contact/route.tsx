import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const {
      name,
      mobile,
      email,
      qualification,
      attemptedCAT,
      preferredDate,
      preferredTime,
      preference
    } = await req.json();

    // ✅ Validate required fields
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Mobile, or Email." },
        { status: 400 }
      );
    }

    // ✅ Validate Preferred Date and Time
    if (preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
      return NextResponse.json(
        { error: "Invalid Preferred Date format. Use YYYY-MM-DD." },
        { status: 400 }
      );
    }

    if (preferredTime && !/^\d{2}:\d{2}$/.test(preferredTime)) {
      return NextResponse.json(
        { error: "Invalid Preferred Time format. Use HH:MM (24-hour format)." },
        { status: 400 }
      );
    }

    // ✅ Validate environment variables
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL } = process.env;

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
      console.error("Missing email configuration in environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // ✅ Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: Number(EMAIL_PORT) === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // ✅ Construct Email Content Including All Fields
    const emailContent = `
📋 New Contact Form Submission

👤 Name: ${name}
📱 Mobile: ${mobile}
📧 Email: ${email}
🎓 Highest Qualification: ${qualification || "Not provided"}
❓ Attempted CAT?: ${attemptedCAT || "Not specified"}
📅 Preferred Date: ${preferredDate || "Not provided"}
⏰ Preferred Time: ${preferredTime || "Not provided"}
🎯 Selected Preference: ${preference || "Not selected"}
    `;

    // ✅ Send the email
    await transporter.sendMail({
      from: `"IIM Possible Contact Form" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: emailContent,
    });

    return NextResponse.json(
      { message: "Your query has been submitted successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", (error as Error)?.message || error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
