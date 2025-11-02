import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  from?: string
  subject: string
  html: string
  text?: string
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEmail(options: EmailOptions) {
  try {
    const mailOptions = {
      from: options.from || process.env.FROM_EMAIL,
      to: options.to,
      replyTo: process.env.REPLY_TO_EMAIL,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ''),
    }

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
  } else {
    console.log('SMTP server is ready to take messages')
  }
})