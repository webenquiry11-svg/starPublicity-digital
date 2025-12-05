const Contact = require('../models/contact');
const nodemailer = require('nodemailer');

// @desc    Submit a new contact enquiry & Send Email
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
    try {
        // 1. Destructure phone from the request body
        const { name, email, phone, message } = req.body;

        // 2. Validation (Message is required, Phone is optional)
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please fill in required fields (Name, Email, Message)' });
        }

        // 3. Save to MongoDB
        const newContact = await Contact.create({
            name,
            email,
            phone: phone || "Not Provided", // Save phone if it exists
            message
        });

        // 4. Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS
            }
        });

        // 5. Define Email Options (HTML Template)
        const mailOptions = {
            from: `"Star Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `New Lead: ${name}`, 
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
                    <h2 style="color: #2a7394; margin-top: 0;">New Contact Enquiry</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}" style="color: #2a7394; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                ${phone ? `<a href="tel:${phone}" style="color: #2a7394; text-decoration: none; font-weight: bold;">${phone}</a>` : '<span style="color: #999;">Not Provided</span>'}
                            </td>
                        </tr>
                    </table>
                    
                    <p style="margin-top: 20px;"><strong>Message:</strong></p>
                    <div style="background: #f4f8fa; padding: 15px; border-left: 4px solid #2a7394; border-radius: 4px; color: #333;">
                        ${message}
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
                        Received via Star Publicity Website
                    </div>
                </div>
            `
        };

        // 6. Send Email
        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully!',
            data: newContact
        });

    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { submitContactForm };