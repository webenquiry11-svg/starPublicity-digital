import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Name, email, and message are required.' }, { status: 400 });
    }

    // 🚨 WARNING: Hardcoding credentials is not secure.
    // It's highly recommended to use environment variables instead.
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email provider's service name
        auth: {
            user: 'your-email@gmail.com', // ⚠️  REPLACE with your email address
            pass: 'your-app-password',    // ⚠️  REPLACE with your app password
        },
    });

    const mailOptions = {
        from: `"Star Publicity Form" <your-email@gmail.com>`,
        to: 'sales@starpublicity.org',
        subject: phone ? 'New Quick Enquiry' : 'New Message from Contact Form',
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #333;">New Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                <h3 style="margin-top: 20px;">Message:</h3>
                <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}