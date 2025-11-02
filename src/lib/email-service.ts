import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  from?: string
  subject: string
  html: string
  text?: string
}

// Debug: Log environment variables (remove in production)
console.log('SMTP Configuration:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  from: process.env.FROM_EMAIL
})

// Create transporter with proper error handling
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.nozun.io', // Fallback to your actual host
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'noreply@nozun.io', // Fallback
    pass: process.env.SMTP_PASSWORD || '@W3lc0m3H0m3', // Fallback
  },
})

export async function sendEmail(options: EmailOptions) {
  try {
    const mailOptions = {
      from: options.from || process.env.FROM_EMAIL || 'noreply@nozun.io',
      to: options.to,
      replyTo: process.env.REPLY_TO_EMAIL || 'raiwe@nozun.io',
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ''),
    }

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    })

    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)
    return result
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}

// Verify transporter on startup
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP connection error:', error)
    console.error('SMTP Config used:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER
    })
  } else {
    console.log('SMTP server is ready to take messages')
    console.log('Connected to:', process.env.SMTP_HOST)
  }
})