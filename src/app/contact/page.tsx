'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, MessageSquare, Calendar, Users, Mic } from 'lucide-react'

const engagementTypes = [
  {
    id: 'advisory',
    title: 'Advisory & Consulting',
    description: 'Strategic guidance for corporate and executive leadership',
    icon: Users,
    target: 'Corporate/Executive'
  },
  {
    id: 'speaking',
    title: 'Speaking & Keynote',
    description: 'Engaging talks for events, conferences, and media',
    icon: Mic,
    target: 'Events/Media'
  },
  {
    id: 'mentorship',
    title: 'Mentorship & Office Hours',
    description: 'One-on-one guidance for aspiring product managers',
    icon: Calendar,
    target: 'Aspiring PMs'
  }
]

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState('advisory')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    // Show loading state
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        engagementType: selectedType
      }),
    })

    const result = await response.json()

    if (response.ok) {
      // Success handling
      alert(result.message) // Or use a toast notification
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })
      setSelectedType('advisory')
    } else {
      // Error handling
      alert(result.error || 'Something went wrong. Please try again.')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Network error. Please check your connection and try again.')
  }
}

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Let's Create Something Amazing Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to scale your vision? Choose how you'd like to engage and let's start the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Engagement Types */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6">How would you like to engage?</h2>
                <div className="space-y-4">
                  {engagementTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedType === type.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <type.icon className={`w-6 h-6 mb-2 ${
                        selectedType === type.id ? 'text-white' : 'text-gray-600'
                      }`} />
                      <h3 className="font-semibold mb-1">{type.title}</h3>
                      <p className={`text-sm ${
                        selectedType === type.id ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        {type.description}
                      </p>
                      <span className={`text-xs mt-2 inline-block px-2 py-1 rounded ${
                        selectedType === type.id 
                          ? 'bg-white text-black' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {type.target}
                      </span>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold">
                    {engagementTypes.find(t => t.id === selectedType)?.title}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell me about your project or needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={`What would you like to achieve? Any specific challenges you're facing?`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    I typically respond within 24 hours. Looking forward to connecting!
                  </p>
                </form>
              </Card>

              {/* Additional Info */}
              <Card className="p-6 mt-8 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• I'll review your message and respond personally</li>
                      <li>• We'll schedule a discovery call to understand your needs</li>
                      <li>• I'll provide a tailored proposal with clear next steps</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}