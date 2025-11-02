import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/database'
import { sendEmail } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Save to database
    await db.savePlaybookAccess({ email })

    // Send playbook access email to user
    await sendEmail({
      to: email,
      from: process.env.FROM_EMAIL!,
      subject: 'Your Product Playbook Access',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #ff581b, #ff7e50); color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 20px; }
                .content { background: #f8f9fa; padding: 20px; border-radius: 8px; }
                .button { display: inline-block; background: #ff581b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 15px 0; }
                .resources { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff581b; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Your Product Playbook is Ready!</h1>
                    <p>Access my battle-tested product leadership frameworks</p>
                </div>
                
                <div class="content">
                    <h3>Welcome to the Product Playbook!</h3>
                    
                    <p>Thank you for your interest in my product leadership frameworks. I've curated these resources based on years of experience scaling products to millions of users.</p>
                    
                    <div style="text-align: center;">
                        <a href="https://drive.google.com/file/d/17Q4XWTP0PnQt54T8y-8q552KbYb2GVl5/view?usp=sharing" class="button" target="_blank">
                            Access Your Playbook
                        </a>
                    </div>
                    
                    <div class="resources">
                        <h4>What's included:</h4>
                        <ul>
                            <li><strong>OKR Framework:</strong> Strategic goal-setting template used by product teams at scale</li>
                            <li><strong>3-Year Roadmap Template:</strong> Long-term product vision and planning framework</li>
                            <li><strong>Product Metrics Dashboard:</strong> Key performance indicators for product success</li>
                            <li><strong>Team Collaboration Guide:</strong> Best practices for cross-functional alignment</li>
                        </ul>
                    </div>
                    
                    <p><strong>Pro Tip:</strong> These templates are designed to be customized for your specific context. Feel free to adapt them to your organization's needs.</p>
                    
                    <p>If you have any questions about implementing these frameworks or want to discuss product strategy, don't hesitate to <a href="https://nozun.io/contact" style="color: #ff581b;">reach out</a>.</p>
                    
                    <p>Happy building!</p>
                    
                    <p>Best regards,<br>
                    <strong>Raivis</strong><br>
                    Product Leader & Strategist</p>
                </div>
                
                <div class="footer">
                    <p>Nozun Ltd<br>
                    <a href="mailto:${process.env.ADMIN_EMAIL}" style="color: #666;">${process.env.ADMIN_EMAIL}</a></p>
                    <p><small>You're receiving this email because you requested access to the Product Playbook.</small></p>
                </div>
            </div>
        </body>
        </html>
      `
    })

    // Optional: Notify admin about new playbook access
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: 'New Playbook Access',
      html: `
        <p><strong>New playbook access:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Playbook access granted! Check your email.'
    })

  } catch (error) {
    console.error('Playbook access error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }

}