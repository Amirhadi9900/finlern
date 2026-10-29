'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DesktopNav from './DesktopNav'
import SocialFlipRow from './SocialFlipRow'
import { SOCIAL_CHANNELS } from './socialChannels'

// Navigation links configuration
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Our Courses' },
  { href: '/events', label: 'Events' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Handle scroll detection
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return
    setIsScrolled(window.scrollY > 20)
  }, [])

  // Set up scroll listener
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [router.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Check if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    }
    return router.pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-2 bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-white/20'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative group flex items-center gap-3 z-10"
            >
              {/* Logo Image */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/finlern.png"
                  alt="Finlern Logo"
                  width={140}
                  height={49}
                  className={`w-auto transition-all duration-500 ease-out group-hover:scale-105 ${
                    isScrolled ? 'h-10 sm:h-11' : 'h-11 sm:h-12'
                  }`}
                  priority
                />
              </div>

              {/* Logo Text - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:block relative">
                <span
                  className={`font-bold tracking-tight transition-all duration-500 ${
                    isScrolled
                      ? 'text-xl bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x'
                      : 'text-2xl text-amber-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
                  }`}
                >
                  Finlern
                </span>
                {/* Subtle underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-200 to-aurora-green group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav tone={isScrolled ? 'onLight' : 'onDark'} activePath={router.pathname} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 z-10 ${
                isMobileMenuOpen
                  ? 'bg-white/10'
                  : isScrolled
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-amber-50/10 hover:bg-amber-50/20'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                {/* Hamburger lines that animate to X */}
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                    isMobileMenuOpen
                      ? 'rotate-45 translate-y-[7px] bg-white'
                      : isScrolled
                        ? 'bg-gray-700'
                        : 'bg-amber-50'
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-0 scale-0'
                      : isScrolled
                        ? 'bg-gray-700'
                        : 'bg-amber-50'
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                    isMobileMenuOpen
                      ? '-rotate-45 -translate-y-[7px] bg-white'
                      : isScrolled
                        ? 'bg-gray-700'
                        : 'bg-amber-50'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-aurora-night/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-aurora-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-aurora-green/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center px-6 transition-all duration-500 delay-100 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
          }`}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-2 w-full max-w-sm">
            {NAV_LINKS.map((link, index) => {
              const isActive = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group relative w-full py-4 px-6 text-center rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 backdrop-blur-sm'
                      : 'hover:bg-white/5'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-green rounded-full" />
                  )}

                  <span
                    className={`text-xl font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Hover arrow */}
                  <svg
                    className={`absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                      isActive
                        ? 'opacity-100 text-aurora-green'
                        : 'opacity-0 group-hover:opacity-100 text-white/50 translate-x-2 group-hover:translate-x-0'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 w-full max-w-sm">
            <Link
              href="/classes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex items-center justify-center gap-3 w-full py-4 px-8 text-lg font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green bg-[length:200%_100%] animate-gradient-x" />

              {/* Glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />

              {/* Button content */}
              <span className="relative z-10">Start Learning Today</span>
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-12">
            <SocialFlipRow channels={SOCIAL_CHANNELS} tone="onDark" />
          </div>

          {/* Contact info */}
          <p className="mt-6 text-white/30 text-sm">
            info@finlern.fi • +358 41 756 7339
          </p>
        </div>
      </div>

    </>
  )
}

export default Header
