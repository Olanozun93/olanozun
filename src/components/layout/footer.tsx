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

// Newsletter Modal Component (keep your existing)
function NewsletterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // ... your existing newsletter modal code
}

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

// Custom Modal with reduced height and accent scrollbar
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
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Introduction</h3>
        <p className="text-gray-700 mb-4">
          Welcome to Olanozun Maria Raiwe&apos;s website. I respect your privacy and am committed to protecting 
          your personal data. This privacy policy will inform you about how I look after your 
          personal data when you visit my website and tell you about your privacy rights.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Data I Collect</h3>
        <p className="text-gray-700 mb-4">
          I may collect, use, store, and transfer different kinds of personal data about you, including:
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-2">
          <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier</li>
          <li><strong>Contact Data:</strong> Email address, telephone numbers</li>
          <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location</li>
          <li><strong>Usage Data:</strong> Information about how you use my website and services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">How I Use Your Data</h3>
        <p className="text-gray-700 mb-4">
          I will only use your personal data when the law allows me to. Most commonly, I will use your 
          personal data in the following circumstances:
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-2">
          <li>To respond to your inquiries and provide customer support</li>
          <li>To send you marketing communications (where you have requested them)</li>
          <li>To improve my website and services</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Data Security</h3>
        <p className="text-gray-700">
          I have put in place appropriate security measures to prevent your personal data from being 
          accidentally lost, used, or accessed in an unauthorized way. I limit access to your personal 
          data to those who have a genuine business need to know it.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 text-gray-900">Your Legal Rights</h3>
        <p className="text-gray-700 mb-4">
          Under certain circumstances, you have rights under data protection laws in relation to your 
          personal data, including the right to:
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-2">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
      </section>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700 text-sm">
          <strong>Last updated:</strong> December 2024<br/>
          <strong>Contact:</strong> hello@olaraiwe.com
        </p>
      </div>
    </div>
  </div>
)

// Terms of Service Content Component
const TermsOfServiceContent = () => (
  <div className="p-6">
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Terms of Service</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Acceptance of Terms</h3>
        <p className="text-gray-700">
          By accessing and using this website, you accept and agree to be bound by the terms and 
          provision of this agreement. If you do not agree to abide by the above, please do not use this site.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Use License</h3>
        <p className="text-gray-700 mb-4">
          Permission is granted to temporarily view the materials on Olanozun Maria Raiwe&apos;s website for personal, 
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
          and under this license you may not:
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Disclaimer</h3>
        <p className="text-gray-700">
          The materials on Olanozun Maria Raiwe&apos;s website are provided on an &apos;as is&apos; basis. I make no warranties, 
          expressed or implied, and hereby disclaims and negates all other warranties including, without 
          limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
          or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Limitations</h3>
        <p className="text-gray-700">
          In no event shall I or my suppliers be liable for any damages (including, without limitation, 
          damages for loss of data or profit, or due to business interruption) arising out of the use or 
          inability to use the materials on this website.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 text-gray-900">Governing Law</h3>
        <p className="text-gray-700">
          These terms and conditions are governed by and construed in accordance with the laws of the United 
          States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700 text-sm">
          <strong>Last updated:</strong> December 2024
        </p>
      </div>
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

                {/* Newsletter CTA */}
                <div>Get Intouch: raiwe@nozun.io</div>
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
                <span className="text-[#fff] font-medium italic">
                  &ldquo;{currentPrinciple}&rdquo;
                </span>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-[#fff] hover:text-[#e04e17] transition-colors font-medium"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="text-[#fff] hover:text-[#e04e17] transition-colors font-medium"
                >
                  Terms of Service
                </button>
                <span className="text-[#fff] font-medium">© 2024 Olanozun Maria Raiwe</span>
              </div>

              {/* Scroll to Top */}
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
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