async function testPlaybookAPI() {
  console.log('🧪 Testing Playbook API...\n')

  const testData = {
    email: 'playbook-test@example.com'
  }

  try {
    console.log('1. Sending POST request to /api/playbook...')
    
    const response = await fetch('http://localhost:3000/api/playbook', {
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
      console.log('✅ Playbook API test passed!\n')
      return true
    } else {
      console.log('❌ Playbook API test failed:', result.error)
      return false
    }

  } catch (error) {
    console.error('❌ Playbook API test failed with error:', error)
    return false
  }
}

// Run if called directly
if (require.main === module) {
  testPlaybookAPI()
}

export { testPlaybookAPI }