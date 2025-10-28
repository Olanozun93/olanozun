// functions/src/contactForm.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

const sgMail = require('@sendgrid/mail');
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export const contactForm = functions.https.onRequest(async (req, res) => {
  // CORS setup
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, company, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    if (message.length < 10) {
      res.status(400).json({ error: 'Message too short' });
      return;
    }

    // Store in Firestore
    const db = admin.firestore();
    await db.collection('contactSubmissions').add({
      name,
      company: company || '',
      email,
      message,
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
    });

    // Send notification email to admin
    await sendAdminNotification(name, company, email, message);

    // Send confirmation email to user
    await sendUserConfirmation(email, name);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function sendAdminNotification(name: string, company: string, email: string, message: string) {
  const mailOptions = {
    to: process.env.ADMIN_EMAIL || 'admin@nozunltd.com',
    from: process.env.FROM_EMAIL || 'noreply@nozunltd.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #F3F4F6; padding: 15px; border-radius: 4px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <br>
        <p>Submitted: ${new Date().toLocaleString()}</p>
      </div>
    `,
  };

  if (process.env.SENDGRID_API_KEY) {
    await sgMail.send(mailOptions);
  } else {
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    await transporter.sendMail(mailOptions);
  }
}

async function sendUserConfirmation(email: string, name: string) {
  const mailOptions = {
    to: email,
    from: process.env.FROM_EMAIL || 'noreply@nozunltd.com',
    subject: 'Thank You for Contacting Nozun Limited',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Thank You for Your Message</h2>
        <p>Hello ${name},</p>
        <p>We've received your message and will get back to you within 24-48 hours.</p>
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>Our team will review your inquiry</li>
          <li>We'll contact you to discuss your requirements</li>
          <li>We'll provide a timeline and next steps</li>
        </ul>
        <br>
        <p>Best regards,<br>The Nozun Limited Team</p>
      </div>
    `,
  };

  if (process.env.SENDGRID_API_KEY) {
    await sgMail.send(mailOptions);
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}