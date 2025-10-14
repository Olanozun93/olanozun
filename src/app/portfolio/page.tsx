'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/content/portfolio-data'
import { X, Download, TrendingUp, Users, Rocket, Target } from 'lucide-react'

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null)
  const [email, setEmail] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const handleToolkitDownload = async () => {
    if (!email) {
      alert('Please enter your email to download the toolkit')
      return
    }

    // Basic email validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address')
      return
    }

    setIsDownloading(true)
    
    try {
      // Optional: Save email to your database/newsletter first
      console.log('Toolkit requested by:', email)
      
      // Download the file
      const link = document.createElement('a')
      link.href = '/downloads/ai-prompt-product-playbook.pdf'
      link.setAttribute('download', 'AI-Prompt-Product-Playbook.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Optional: Track download analytics
      console.log('Toolkit downloaded by:', email)
      
      // Reset form
      setEmail('')
      
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
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
      <div className="container-custom py-20">
        
        {/* Product Impact Scorecard */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">
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
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <Card 
                key={project.id} 
                hover 
                className="p-6 cursor-pointer transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  project.type === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {project.type === 'success' ? 'Success Story' : 'Learning Experience'}
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    project.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {project.type === 'success' ? project.metric : project.insight}
                  </span>
                  <Button variant="accent-outline" className="w-full">
                    {project.type === 'success' ? 'View Case Study' : 'View Lessons Learned'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Toolkit Teaser */}
        <section>
          <Card className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
              Download My Product Toolkit
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Access my battle-tested OKR framework and 3-Year Roadmap Template used by product teams at scale.
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Button 
                variant="primary" 
                className="w-full"
                onClick={handleToolkitDownload}
                disabled={isDownloading || !email}
              >
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? 'Downloading...' : 'Get the Toolkit'}
              </Button>
              <p className="text-sm text-gray-500">
                You'll receive the toolkit and occasional product leadership insights.
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
                        : 'bg-red-100 text-red-800'
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
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                      <strong className="text-red-800">Key Learning:</strong>{' '}
                      <span className="text-red-700">{selectedProject.insight}</span>
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