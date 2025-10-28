'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/content/portfolio-data'
import { X, ExternalLink, TrendingUp, Users, Rocket, Target, AlertCircle, CheckCircle } from 'lucide-react'

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [accessSuccess, setAccessSuccess] = useState(false)

  // Enhanced email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return 'Email is required'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    
    // Clear error when user starts typing
    if (emailError && newEmail) {
      setEmailError(validateEmail(newEmail))
    }
  }

  const handlePlaybookAccess = async () => {
    // Validate email first
    const validationError = validateEmail(email)
    if (validationError) {
      setEmailError(validationError)
      return
    }

    setEmailError('')
    
    try {
      console.log('Playbook accessed by:', email)
      
      // Replace with your actual Google Drive link
      const googleDriveLink = 'https://drive.google.com/file/d/17Q4XWTP0PnQt54T8y-8q552KbYb2GVl5/view?usp=sharing'
      
      // Open Google Drive in new tab
      window.open(googleDriveLink, '_blank', 'noopener,noreferrer')
      
      // Show success message
      setAccessSuccess(true)
      
      console.log('Playbook access recorded for:', email)
      
      // Reset form after success
      setTimeout(() => {
        setEmail('')
        setAccessSuccess(false)
      }, 5000)
      
    } catch (error) {
      console.error('Access failed:', error)
      setEmailError('Unable to redirect. Please try again.')
    }
  }

  // Handle form submission on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && email && !emailError) {
      handlePlaybookAccess()
    }
  }

  // Validate email on blur
  const handleEmailBlur = () => {
    if (email) {
      setEmailError(validateEmail(email))
    }
  }

  const metrics = [
    { label: 'Cumulative MAU', value: '50M+', icon: Users, color: 'bg-blue-500' },
    { label: 'Team Retention', value: '92%', icon: Users, color: 'bg-green-500' },
    { label: 'Innovation Launches', value: '12', icon: Rocket, color: 'bg-purple-500' },
    { label: 'Trend Prediction', value: '85%', icon: Target, color: 'bg-orange-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        
        {/* Product Impact Scorecard */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Product Impact Scorecard: Data-Driven Performance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${metric.color} flex items-center justify-center text-white`}>
                  <metric.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <h3 className="font-semibold text-gray-700 text-sm">{metric.label}</h3>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <Card 
                key={project.id} 
                className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  project.type === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.type === 'success' ? 'Success Story' : 'Learning Experience'}
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-[#ff581b] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    project.type === 'success' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {project.type === 'success' ? project.metric : project.insight}
                  </span>
                  <Button className="border-[#ff581b] text-[#ff581b] hover:bg-[#ff581b] hover:text-white">
                    {project.type === 'success' ? 'View Case Study' : 'View Lessons Learned'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Playbook Access Section */}
        <section id="toolkit">
          <Card className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Access My Product Playbook
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Get instant access to my battle-tested OKR framework and 3-Year Roadmap Template used by product teams at scale.
            </p>
            
            <div className="space-y-4 max-w-md mx-auto">
              {/* Email Input with Validation */}
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your email to access the playbook
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff581b] focus:border-transparent transition-colors ${
                    emailError ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {emailError && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {emailError}
                  </div>
                )}
              </div>

              {/* Access Button */}
              <Button 
                className="w-full bg-[#ff581b] text-white border-0 hover:bg-[#e04e18] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                onClick={handlePlaybookAccess}
                disabled={!email || !!emailError}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Access the Playbook
              </Button>

              {/* Success Message */}
              {accessSuccess && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Success! Opening playbook...</p>
                    <p className="text-xs text-green-600">The playbook should open in a new tab.</p>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>How it works:</strong> Enter your email and you'll be redirected to Google Drive where you can view or download the playbook.
                </p>
              </div>

              <p className="text-sm text-gray-500">
                You'll also receive occasional product leadership insights (unsubscribe anytime).
              </p>
            </div>
          </Card>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      selectedProject.type === 'success' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedProject.type === 'success' ? 'Success Story' : 'Learning Experience'}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    {selectedProject.fullContent}
                  </p>
                  
                  {selectedProject.type === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                      <strong className="text-green-800">Key Achievement:</strong>{' '}
                      <span className="text-green-700">{selectedProject.metric}</span>
                    </div>
                  )}
                  
                  {selectedProject.type === 'failure' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                      <strong className="text-blue-800">Key Learning:</strong>{' '}
                      <span className="text-blue-700">{selectedProject.insight}</span>
                    </div>
                  )}
                  
                  {selectedProject.technologies && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}