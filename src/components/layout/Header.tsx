import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Define nav links outside the component
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Our Classes' },
  { href: '/events', label: 'Events' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

// Aurora colors for the logo text animation
const AURORA_COLORS = [
  'from-pink-500 via-purple-500 to-indigo-500',
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-emerald-500 via-teal-500 to-blue-500',
  'from-blue-500 via-cyan-500 to-emerald-500'
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  // Handle scroll - memoize the handler
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return
    setIsScrolled(window.scrollY > 10)
  }, [])

  // Set up scroll listener
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Check if a link is active
  const isLinkActive = (href: string) => router.pathname === href

  // Mobile nav button style function
  const getNavButtonStyle = (href: string) => {
    const isActive = isLinkActive(href)
    return `px-2 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-r from-aurora-blue/20 to-aurora-purple/20 text-aurora-blue font-semibold' 
        : 'text-gray-700 hover:text-aurora-blue'
    }`
  }

  return (
    <header 
      className={`sticky top-0 z-50 ${ // Keep z-index high
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-amber-50 py-1.5'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Flex container for mobile navigation and logo */}
        <div className="flex justify-between items-center">
          {/* Left side navigation buttons */}
          <div className="flex space-x-1 items-center lg:hidden">
            <Link href="/classes" className={getNavButtonStyle('/classes')}>
              Classes
            </Link>
            <Link href="/events" className={getNavButtonStyle('/events')}>
              Events
            </Link>
          </div>
          
          {/* Logo */}
          <Link href="/" className="flex items-center relative group">
            <div className="overflow-hidden">
              <Image 
                src="/images/finlern.png" 
                alt="Finlern Logo" 
                width={1600} 
                height={560} 
                className={`w-auto transition-all duration-300 ease-in-out group-hover:scale-105 ${
                  isScrolled ? 'h-14' : 'h-16'
                } max-w-[130px]`}
                priority
              />
            </div>
            {/* Finlern text hidden on mobile */}
            <div className="ml-3 relative overflow-hidden hidden lg:block">
              <span className="absolute top-0 left-0 font-bold text-2xl md:text-3xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
                Finlern
              </span>
              <span className="absolute top-0 left-0 font-bold text-2xl md:text-3xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-y opacity-50 mix-blend-multiply">
                Finlern
              </span>
              <span className="absolute inset-0 w-[120%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-25 -translate-x-full animate-shine"></span>
              <span className="invisible font-bold text-2xl md:text-3xl tracking-wider">Finlern</span>
            </div>
          </Link>

          {/* Right side navigation buttons */}
          <div className="flex space-x-1 items-center lg:hidden">
            <Link href="/our-story" className={getNavButtonStyle('/our-story')}>
              Our Story
            </Link>
            <Link href="/contact" className={getNavButtonStyle('/contact')}>
              Contact
            </Link>
          </div>

          {/* Desktop Navigation - only visible on large screens */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-3">
              {NAV_LINKS.map((link) => {
                const isActive = router.pathname === link.href
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`relative px-5 py-3 text-base font-medium rounded-lg transition-all duration-300 group overflow-hidden flex items-center justify-center ${
                        isActive 
                          ? 'bg-gradient-to-r from-aurora-blue/10 to-aurora-purple/10 text-aurora-blue font-semibold shadow-sm' 
                          : 'text-gray-700 hover:text-aurora-blue hover:bg-gradient-to-r hover:from-aurora-blue/5 hover:to-aurora-purple/5'
                      }`}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-blue/10 via-aurora-purple/10 to-aurora-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green rounded-full transition-all duration-300 ease-out group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                      <span className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                        isActive ? 'shadow-inner-glow opacity-40' : 'opacity-0 group-hover:opacity-20'
                      }`}></span>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link 
              href="/classes" 
              className="ml-8 bg-gradient-to-r from-aurora-blue via-aurora-purple to-blue-600 text-white font-medium py-2.5 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Start Learning
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header