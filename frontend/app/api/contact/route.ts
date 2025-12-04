import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // --- SMTP Configuration ---
    // Note: Storing credentials directly in the code is not recommended for security.
    // It's better to use environment variables.
    const smtpConfig = {
      host: 'your_smtp_host', // e.g., 'smtp.example.com'
      port: 587, // e.g., 587 for TLS, 465 for SSL
      user: 'your_server_email@example.com',
      pass: 'your_email_password',
    };

    // Create a transporter object using your server's SMTP transport
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.port === 465, // true for 465, false for other ports
      auth: { user: smtpConfig.user, pass: smtpConfig.pass },
    });

    // Set up email data
    const mailOptions = {
      from: `"Star Publicity" <${smtpConfig.user}>`, // sender address
      to: smtpConfig.user, // list of receivers (your server mail)
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`, // Subject line
      text: `
        You have received a new inquiry from your website contact form.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}