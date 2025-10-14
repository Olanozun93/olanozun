'use client'

import { useState, useRef, useEffect } from 'react'

const navigationItems = [
  { name: 'ABOUT', href: '/about' },
  { name: 'BLOGS', href: '/blog' },
  { name: 'PORTFOLIO', href: '/portfolio' },
]

const resourcesItems = [
  { name: 'Product Playbook', href: '/blog?filter=playbook' },
  { name: 'Case Studies', href: '/portfolio' },
  { name: 'Tech Insights', href: '/blog?filter=tech' },
  { name: 'Speaking Engagements', href: '/contact?type=speaking' },
]

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsResourcesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false)
    }, 200) // Small delay to allow moving to dropdown
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false)
    }, 200)
  }

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            <span className="text-[#060708]">Olanozun</span>
            <span className="text-[#ff581b]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#060708] font-medium uppercase text-sm"
              >
                {item.name}
              </a>
            ))}
            
            {/* Resources Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-600 hover:text-[#060708] font-medium uppercase text-sm">
                <span>RESOURCES</span>
                <span className={`transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {resourcesItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#060708] font-medium text-sm transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
             <a 
                href="/contact" 
                className="bg-[#ff581b] text-white px-6 py-2 rounded-lg hover:bg-[#e04e17] font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Let's Talk
              </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#060708]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-[#060708] font-medium uppercase text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Resources in Mobile */}
              <div className="pt-2">
                <div className="text-gray-600 font-medium uppercase text-sm mb-2 py-2">
                  RESOURCES
                </div>
                <div className="pl-4 space-y-2">
                  {resourcesItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-500 hover:text-[#060708] text-sm py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
               <a 
                  href="/contact" 
                  className="block bg-[#ff581b] text-white px-6 py-3 rounded-lg hover:bg-[#e04e17] font-medium text-center mt-4 shadow-sm hover:shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}