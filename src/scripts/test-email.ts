import { sendEmail } from '@/lib/email-service'

async function testEmail() {
  console.log('🧪 Testing Email Service...\n')

  // Check environment variables
  console.log('1. Checking environment variables...')
  const requiredVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'ADMIN_EMAIL', 'FROM_EMAIL']
  const missingVars = requiredVars.filter(varName => !process.env[varName])
  
  if (missingVars.length > 0) {
    console.log('❌ Missing environment variables:', missingVars)
    return false
  }
  console.log('✅ All environment variables present')
  console.log('   SMTP_HOST:', process.env.SMTP_HOST)
  console.log('   SMTP_USER:', process.env.SMTP_USER)
  console.log('   ADMIN_EMAIL:', process.env.ADMIN_EMAIL + '\n')

  try {
    // Test 2: Send test email
    console.log('2. Sending test email...')
    
    const testEmailData = {
      to: process.env.ADMIN_EMAIL!,
      subject: 'Test Email from Local Development',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #f8f9fa; padding: 20px; border-radius: 8px; }
                .success { color: green; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✅ Email Test Successful</h1>
                    <p>This is a test email sent from your local development environment.</p>
                </div>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Environment:</strong> Local Development</p>
                <p class="success">If you're reading this, your email service is working correctly!</p>
            </div>
        </body>
        </html>
      `
    }

    const result = await sendEmail(testEmailData)
    console.log('✅ Test email sent successfully!')
    console.log('   Message ID:', result.messageId + '\n')

    console.log('🎉 Email service test passed!')
    console.log('   Check your inbox at:', process.env.ADMIN_EMAIL)
    return true

  } catch (error) {
    console.error('❌ Email test failed:', error)
    return false
  }
}

// Run if called directly
if (require.main === module) {
  testEmail()
}

export { testEmail }