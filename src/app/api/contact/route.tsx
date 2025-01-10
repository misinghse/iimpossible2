import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, mobile, email, qualification, attemptedCAT } = await req.json();

    // Validate required fields
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Mobile, or Email." },
        { status: 400 }
      );
    }

    // Validate environment variables
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL } = process.env;

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
      console.error("Missing email configuration in environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: Number(EMAIL_PORT) === 465, // Use SSL for port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Contact Form" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Mobile: ${mobile}
        Email: ${email}
        Highest Qualification: ${qualification || "Not provided"}
        Attempted CAT?: ${attemptedCAT || "Not specified"}
      `,
    });

    // Respond with success
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
