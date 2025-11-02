import { sql } from '@vercel/postgres'

async function setupDatabase() {
  try {
    // Create contact_submissions table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        message TEXT NOT NULL,
        engagement_type VARCHAR(100) NOT NULL,
        submitted_at TIMESTAMP DEFAULT NOW()
      )
    `
    console.log('✅ contact_submissions table created/verified')

    // Create playbook_access table
    await sql`
      CREATE TABLE IF NOT EXISTS playbook_access (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        accessed_at TIMESTAMP DEFAULT NOW()
      )
    `
    console.log('✅ playbook_access table created/verified')

    // Create indexes for better performance
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email)`
    await sql`CREATE INDEX IF NOT EXISTS idx_playbook_access_email ON playbook_access(email)`
    
    console.log('✅ Database setup completed successfully')
  } catch (error) {
    console.error('❌ Database setup failed:', error)
  }
}

setupDatabase()