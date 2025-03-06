import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Define nav links outside the component to prevent recreation on each render
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Our Classes' },
  { href: '/events', label: 'Events' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  // Handle scroll - memoize the handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, [])

  // Set up scroll listener
  useEffect(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Check initial scroll position
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleRouteChange = () => {
      setIsMenuOpen(false)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Lock scroll when menu is open
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-40 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-amber-50 py-1.5'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10 group">
            <div className="overflow-hidden">
              <Image 
                src="/images/finlern.png" 
                alt="Finlern Logo" 
                width={1600} 
                height={560} 
                className={`w-auto transition-all duration-300 ease-in-out group-hover:scale-105 ${
                  isScrolled ? 'h-16' : 'h-16'
                }`}
                style={{ maxWidth: '200px' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = router.pathname === link.href
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`relative px-5 py-3 text-base font-medium rounded-md transition-all duration-300 group inline-flex items-center ${
                        isActive 
                          ? 'text-aurora-blue font-semibold' 
                          : 'text-gray-700 hover:text-aurora-blue'
                      }`}
                    >
                      {/* Animated underline effect */}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-aurora-blue rounded-full transition-all duration-300 ease-out group-hover:w-4/5 w-0" style={{ 
                        width: isActive ? '80%' : '0%' 
                      }}></span>
                      
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            
            {/* Call to Action Button */}
            <Link 
              href="/classes" 
              className="ml-8 bg-aurora-blue hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Learning
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="lg:hidden z-50 p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 bg-gray-700 top-2 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Modal Approach */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Image 
              src="/images/finlern.png" 
              alt="Finlern Logo" 
              width={800} 
              height={280} 
              className="h-16 w-auto" 
              priority
            />
            <button 
              className="p-2 text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 mt-4">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <li key={link.href} className="border-b border-gray-100 pb-3">
                    <Link 
                      href={link.href}
                      className={`block text-xl font-medium transition-colors duration-300 ${
                        isActive 
                          ? 'text-aurora-blue font-semibold' 
                          : 'text-gray-700 hover:text-aurora-blue'
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link 
              href="/classes" 
              className="block w-full bg-aurora-blue hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md text-center transition-all duration-300"
              onClick={toggleMenu}
            >
              Start Learning
            </Link>
            
            <div className="mt-8 flex items-center justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-aurora-blue transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-aurora-blue transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>© 2025 Finlern. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header