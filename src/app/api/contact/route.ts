import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/database'
import { sendEmail } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, engagementType } = body

    // Validation
    if (!name || !email || !message || !engagementType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    await db.saveContactSubmission({
      name,
      email,
      company,
      message,
      engagementType
    })

    // Send notification email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission - ${engagementType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { color: #333; }
                .message-box { background: #f1f3f4; padding: 15px; border-radius: 5px; border-left: 4px solid #ff581b; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Engagement Type:</strong> ${engagementType}</p>
                </div>
                
                <div class="field">
                    <span class="label">Name:</span>
                    <span class="value">${name}</span>
                </div>
                
                <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">${email}</span>
                </div>
                
                ${company ? `
                <div class="field">
                    <span class="label">Company:</span>
                    <span class="value">${company}</span>
                </div>
                ` : ''}
                
                <div class="field">
                    <span class="label">Message:</span>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="field">
                    <span class="label">Submitted At:</span>
                    <span class="value">${new Date().toLocaleString()}</span>
                </div>
            </div>
        </body>
        </html>
      `
    })

    // Send automated confirmation to user
    await sendEmail({
      to: email,
      from: process.env.FROM_EMAIL!,
      subject: 'Thank you for reaching out!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #ff581b, #ff7e50); color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 20px; }
                .content { background: #f8f9fa; padding: 20px; border-radius: 8px; }
                .next-steps { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff581b; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You for Reaching Out!</h1>
                    <p>I've received your message and will get back to you within 24 hours.</p>
                </div>
                
                <div class="content">
                    <h3>Hello ${name},</h3>
                    
                    <p>Thank you for your interest in <strong>${engagementType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>. I'm excited to learn more about your project and how we can work together.</p>
                    
                    <div class="next-steps">
                        <h4>What happens next?</h4>
                        <ul>
                            <li>I'll review your message carefully</li>
                            <li>We'll schedule a discovery call to understand your needs</li>
                            <li>I'll provide a tailored proposal with clear next steps</li>
                        </ul>
                    </div>
                    
                    <p><strong>In the meantime:</strong><br>
                    Feel free to explore my <a href="https://nozun.io/portfolio#toolkit" style="color: #ff581b;">Product Playbook</a> for insights into my product leadership framework.</p>
                    
                    <p>Looking forward to our conversation!</p>
                    
                    <p>Best regards,<br>
                    <strong>Raivis</strong><br>
                    Product Leader & Strategist</p>
                </div>
                
                <div class="footer">
                    <p>Nozun Ltd<br>
                    <a href="mailto:${process.env.ADMIN_EMAIL}" style="color: #666;">${process.env.ADMIN_EMAIL}</a></p>
                </div>
            </div>
        </body>
        </html>
      `
    })

    return NextResponse.json({
      message: 'Message sent successfully!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}