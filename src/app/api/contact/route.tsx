import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, mobile, email, qualification, attemptedCAT } = await req.json();
    if (!name || !mobile || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_PORT ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.ADMIN_EMAIL
    ) {
      console.error("Missing email configuration in environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status:500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Highest Qualification: ${qualification}
Attempted CAT?: ${attemptedCAT}
      `,
    });

    return NextResponse.json({ message: "Your query has been submitted successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("Contact form error:", error.message || error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
