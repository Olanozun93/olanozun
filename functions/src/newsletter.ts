// functions/src/newsletter.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as crypto from "crypto";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Email configuration - Choose one option below

// Option A: SendGrid (Recommended)
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Option B: SMTP (Gmail, Outlook, etc.)
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const newsletterSignup = functions.https.onRequest(async (req, res) => {
  // Enable CORS
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
    const { name, company, email, agreeToTerms } = req.body;

    // Validate input
    if (!name || !email || !agreeToTerms) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store in Firestore
    const db = admin.firestore();
    const subscriberRef = db.collection('newsletterSubscribers').doc(email);

    // Check if already exists
    const existingSub = await subscriberRef.get();
    if (existingSub.exists) {
      const data = existingSub.data();
      if (data?.verified) {
        res.status(400).json({ error: 'Email already subscribed' });
        return;
      }
    }

    await subscriberRef.set({
      name,
      company: company || '',
      email,
      verificationToken,
      verificationExpires,
      verified: false,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
    });

    // Send verification email
    await sendVerificationEmail(email, name, verificationToken);

    res.status(200).json({ 
      success: true, 
      message: 'Verification email sent' 
    });

  } catch (error) {
    console.error('Newsletter signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Email verification function
async function sendVerificationEmail(email: string, name: string, token: string) {
  const verificationLink = `https://yourdomain.com/verify-newsletter?token=${token}&email=${encodeURIComponent(email)}`;

  const mailOptions = {
    from: process.env.FROM_EMAIL || 'newsletter@nozunltd.com',
    to: email,
    subject: 'Confirm Your Newsletter Subscription - Nozun Limited',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Confirm Your Subscription</h2>
        <p>Hello ${name},</p>
        <p>Thank you for subscribing to the Nozun Limited newsletter!</p>
        <p>Please confirm your email address by clicking the link below:</p>
        <p>
          <a href="${verificationLink}" 
             style="background-color: #4F46E5; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 4px; display: inline-block;">
            Confirm Subscription
          </a>
        </p>
        <p>This link will expire in 24 hours.</p>
        <p>If you didn't request this subscription, please ignore this email.</p>
        <br>
        <p>Best regards,<br>The Nozun Limited Team</p>
      </div>
    `,
  };

  // Send using SendGrid or SMTP
  if (process.env.SENDGRID_API_KEY) {
    await sgMail.send(mailOptions);
  } else {
    await transporter.sendMail(mailOptions);
  }
}

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}