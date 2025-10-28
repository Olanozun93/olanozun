import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get the file path
    const filePath = path.join(process.cwd(), 'public', 'downloads', 'ai-prompt-product-playbook.pdf');
    
    // Read the file
    const fileBuffer = await fs.readFile(filePath);
    
    // Create response with file
    const response = new NextResponse(fileBuffer);
    
    // Set headers for download
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Content-Disposition', 'attachment; filename="AI-Prompt-Product-Playbook.pdf"');
    response.headers.set('Content-Length', fileBuffer.length.toString());
    
    return response;
    
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}