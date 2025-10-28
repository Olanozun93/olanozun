import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Save to your database, CRM, or email service
    console.log('Playbook access:', { email, timestamp: new Date().toISOString() });
    
    // Optional: Send to Google Analytics, CRM, etc.
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Playbook access tracking error:', error);
    return NextResponse.json({ success: true }); // Don't block access on error
  }
}