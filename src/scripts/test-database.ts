import { sql } from '@vercel/postgres'

async function testDatabase() {
  console.log('🧪 Testing Database Connection...\n')

  try {
    // Test 1: Basic connection
    console.log('1. Testing database connection...')
    const result = await sql`SELECT version()`
    console.log('✅ Database connection successful')
    console.log('   PostgreSQL version:', result.rows[0]?.version?.split(' ')[1] + '\n')

    // Test 2: Check if tables exist
    console.log('2. Checking required tables...')
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('contact_submissions', 'playbook_access')
    `
    
    const existingTables = tables.rows.map(row => row.table_name)
    console.log('   Found tables:', existingTables)

    if (!existingTables.includes('contact_submissions')) {
      console.log('❌ contact_submissions table missing')
      return false
    }
    if (!existingTables.includes('playbook_access')) {
      console.log('❌ playbook_access table missing')
      return false
    }
    console.log('✅ All required tables exist\n')

    // Test 3: Test INSERT operations
    console.log('3. Testing INSERT operations...')
    
    // Test contact submission
    const testContact = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Corp',
      message: 'This is a test message from database test',
      engagementType: 'advisory'
    }

    await sql`
      INSERT INTO contact_submissions (name, email, company, message, engagement_type, submitted_at)
      VALUES (${testContact.name}, ${testContact.email}, ${testContact.company}, 
              ${testContact.message}, ${testContact.engagementType}, NOW())
    `
    console.log('✅ Contact submission INSERT successful')

    // Test playbook access
    await sql`
      INSERT INTO playbook_access (email, accessed_at)
      VALUES (${testContact.email}, NOW())
    `
    console.log('✅ Playbook access INSERT successful\n')

    // Test 4: Test SELECT operations
    console.log('4. Testing SELECT operations...')
    const contactResult = await sql`SELECT * FROM contact_submissions WHERE email = ${testContact.email}`
    const playbookResult = await sql`SELECT * FROM playbook_access WHERE email = ${testContact.email}`

    console.log('   Contact submissions found:', contactResult.rows.length)
    console.log('   Playbook accesses found:', playbookResult.rows.length)
    console.log('✅ SELECT operations successful\n')

    // Cleanup test data
    console.log('5. Cleaning up test data...')
    await sql`DELETE FROM contact_submissions WHERE email = ${testContact.email}`
    await sql`DELETE FROM playbook_access WHERE email = ${testContact.email}`
    console.log('✅ Test data cleaned up\n')

    console.log('🎉 All database tests passed!')
    return true

  } catch (error) {
    console.error('❌ Database test failed:', error)
    return false
  }
}

// Run if called directly
if (require.main === module) {
  testDatabase()
}

export { testDatabase }