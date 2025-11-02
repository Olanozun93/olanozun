async function testContactAPI() {
  console.log('🧪 Testing Contact API...\n')

  const testData = {
    name: 'API Test User',
    email: 'api-test@example.com',
    company: 'API Test Corp',
    message: 'This is a test message from API test',
    engagementType: 'speaking'
  }

  try {
    console.log('1. Sending POST request to /api/contact...')
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })

    console.log('   Response status:', response.status)
    
    const result = await response.json()
    console.log('   Response data:', result)

    if (response.ok) {
      console.log('✅ Contact API test passed!\n')
      return true
    } else {
      console.log('❌ Contact API test failed:', result.error)
      return false
    }

  } catch (error) {
    console.error('❌ Contact API test failed with error:', error)
    return false
  }
}

// Run if called directly
if (require.main === module) {
  testContactAPI()
}

export { testContactAPI }