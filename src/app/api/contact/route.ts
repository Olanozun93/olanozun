import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, engagementType } = body;

    // Validate required fields
    if (!name || !email || !message || !engagementType) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message, and engagementType are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically integrate with:
    // - Email service (Nodemailer, Resend, etc.)
    // - CRM (HubSpot, Salesforce)
    // - Database (to store submissions)
    
    console.log('Contact form submission received:', {
      name,
      email,
      company: company || 'Not provided',
      engagementType,
      message,
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for')
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Add CORS headers if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}