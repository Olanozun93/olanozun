'use client'

import { useState } from 'react'
import { Linkedin, Twitter, Github, ArrowUp } from 'lucide-react'
import { Modal } from '@/components/ui/modal'

const operatingPrinciples = [
  "Radical Candor is a Feature",
  "Data Beats Opinions", 
  "Build with, not for",
  "Scale through simplicity"
]

const footerSections = [
  {
    title: "Navigate",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Blogs", href: "/blog" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Product Playbook", href: "/blog?filter=playbook" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Tech Insights", href: "/blog?filter=tech" },
      { name: "Speaking", href: "/contact?type=speaking" },
    ]
  }
]

// Scroll to Top Button Component
function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToTop}
      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>
  )
}

// Newsletter Modal Component
function NewsletterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address')
      return
    }
    
    // Here you would typically send the data to your backend
    console.log('Newsletter signup:', formData)
    setIsSubmitted(true)
    
    // Close modal and scroll to top after 2 seconds
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setFormData({ name: '', email: '' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto shadow-2xl">
        {isSubmitted ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">You've been added to our newsletter list.</p>
            <p className="text-gray-500 text-sm mt-2">Redirecting you back...</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Join My Newsletter</h3>
              <p className="text-gray-600">Get insights on product strategy, AI ethics, and platform scaling.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff581b] focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff581b] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ff581b] text-white py-3 rounded-lg font-semibold hover:bg-[#e04e17] transition-colors"
              >
                Subscribe Now
              </button>
            </form>
            
            <button
              onClick={onClose}
              className="w-full mt-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Maybe later
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// Custom Modal for Privacy Policy and Terms of Service
const CustomModal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[60vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            ← Back
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="text-gray-500 hover:text-gray-700">✕</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

// Privacy Policy Content Component
const PrivacyPolicyContent = () => (
  <div className="p-6">
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Privacy Policy</h2>
      
      {/* ... your existing privacy policy content ... */}
      
    </div>
  </div>
)

// Terms of Service Content Component
const TermsOfServiceContent = () => (
  <div className="p-6">
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Terms of Service</h2>
      
      {/* ... your existing terms of service content ... */}
      
    </div>
  </div>
)

export default function Footer() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const currentPrinciple = operatingPrinciples[0]

  return (
    <>
      <footer className="bg-[#060708] text-white">
        <div className="container-custom py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-4xl font-bold mb-6">
                  <span className="text-white">Olanozun</span>
                  <span className="text-[#ff581b]">.</span>
                </div>
                
                <p className="text-gray-300 mb-8 max-w-2xl text-lg leading-relaxed">
                  Transforming complex data into intuitive, high-growth consumer products. 
                  Product Leader specializing in strategic leadership, product growth, and platform scaling.
                </p>
                
                {/* Social Icons */}
                <div className="flex space-x-6 mb-8">
                  <a 
                    href="https://linkedin.com/in/olaraiwe" 
                    className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-xl"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/olaraiwe" 
                    className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-xl"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://github.com/olaraiwe" 
                    className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-xl"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                {/* Newsletter CTA - Original Style */}
                <button
                  onClick={() => setIsNewsletterOpen(true)}
                  className="text-[#ff581b] hover:text-[#e04e17] transition-colors font-semibold text-xl underline underline-offset-4 hover:scale-105 transform transition-transform"
                >
                  Join my newsletter for exclusive insights →
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center md:justify-items-start">
                {footerSections.map((section) => (
                  <div key={section.title} className="text-center md:text-left">
                    <h3 className="font-semibold text-white mb-6 text-xl border-b border-gray-600 pb-2 inline-block">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href} 
                            className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 text-lg"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Operating Principle & Bottom Bar - SINGLE LINE */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Single line with operating principle and legal links */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-lg">
                <span className="text-[#ff581b] font-medium italic">
                  &ldquo;{currentPrinciple}&rdquo;
                </span>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-[#ff581b] hover:text-[#e04e17] transition-colors font-medium"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="text-[#ff581b] hover:text-[#e04e17] transition-colors font-medium"
                >
                  Terms of Service
                </button>
                <span className="text-[#ff581b] font-medium">© 2024 Olanozun Maria Raiwe</span>
              </div>

              {/* Scroll to Top */}
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
      
      <CustomModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)}
      >
        <PrivacyPolicyContent />
      </CustomModal>
      
      <CustomModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)}
      >
        <TermsOfServiceContent />
      </CustomModal>
    </>
  )
}