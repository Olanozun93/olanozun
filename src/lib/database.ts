import { sql } from '@vercel/postgres'

export const db = {
  async saveContactSubmission(data: {
    name: string
    email: string
    company?: string
    message: string
    engagementType: string
  }) {
    await sql`
      INSERT INTO contact_submissions (name, email, company, message, engagement_type, submitted_at)
      VALUES (${data.name}, ${data.email}, ${data.company}, ${data.message}, ${data.engagementType}, NOW())
    `
  },

  async savePlaybookAccess(data: {
    email: string
  }) {
    await sql`
      INSERT INTO playbook_access (email, accessed_at)
      VALUES (${data.email}, NOW())
    `
  },

  async findUserByEmail(email: string) {
    const { rows } = await sql`
      (SELECT email, name, company, submitted_at as timestamp, 'contact' as source 
       FROM contact_submissions WHERE email = ${email})
      UNION ALL
      (SELECT email, NULL as name, NULL as company, accessed_at as timestamp, 'playbook' as source 
       FROM playbook_access WHERE email = ${email})
      ORDER BY timestamp DESC
      LIMIT 1
    `
    return { exists: rows.length > 0, data: rows[0] }
  }
}