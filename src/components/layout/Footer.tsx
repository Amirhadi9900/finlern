import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SocialFlipRow from './SocialFlipRow'
import { SOCIAL_CHANNELS } from './socialChannels'

const Footer: React.FC = () => {
  // Use state to store the year
  const [currentYear, setCurrentYear] = useState('');
  
  // Calculate the year on the client side only
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-aurora-night to-[#080322] text-white overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Northern lights effect */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-aurora-blue/5 via-aurora-purple/10 to-aurora-green/5 animate-gradient-y"></div>
        
        {/* Animated star field */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px] opacity-5"></div>
          <div className="absolute top-2 left-2 w-full h-full bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
          <div className="absolute top-1 left-1 w-full h-full bg-[radial-gradient(#84E1A9_1px,transparent_1px)] [background-size:25px_25px] opacity-5"></div>
        </div>
        
        {/* Subtle moving aurora wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-96 opacity-10 aurora-wave-bg"
        ></div>
        
        {/* SVG wave definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="wave-path" clipPathUnits="objectBoundingBox">
              <path d="M0,0.5 C0.2,0.45 0.4,0.55 0.6,0.5 C0.8,0.45 1,0.5 1,0.5 L1,1 L0,1 Z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      
      {/* Glowing gradient top border with animated shimmer */}
      <div className="relative">
        <div className="h-0.5 w-full bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green"></div>
        <div className="h-0.5 absolute top-0 left-0 right-0 overflow-hidden">
          <div className="h-0.5 w-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shine"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* More organized grid with even spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 md:gap-8">
          {/* Logo and Description - Expanded column */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <Link href="/" className="inline-flex items-center mb-6 transition-all duration-500 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-xl p-1 bg-gradient-to-br from-aurora-blue/20 via-aurora-purple/20 to-aurora-green/20 shadow-lg group-hover:shadow-aurora-blue/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="overflow-hidden rounded-lg bg-aurora-night p-3">
                <Image 
                  src="/images/finlern.png" 
                  alt="Finlern Logo" 
                  width={800} 
                  height={280} 
                    className="h-20 md:h-24 w-auto filter drop-shadow-lg"
                    onError={(e) => {
                      // Set fallback image if the logo fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/800x280?text=Finlern";
                      target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
              </div>
              
              {/* Beautiful Finlern text */}
              <div className="ml-4 relative">
                {/* Main text with solid color for better contrast */}
                <h2 className="relative text-3xl md:text-4xl font-bold tracking-wider z-10">
                  <span className="text-[#00E5FF]">Finlern</span>
                </h2>
                
                {/* Animated glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-aurora-blue/0 via-aurora-purple/10 to-aurora-green/0 rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
              </div>
            </Link>
            
            <div className="relative">
              <p className="text-base text-white mt-4 leading-relaxed bg-aurora-night/60 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-inner shadow-aurora-purple/5">
                <span className="block text-xl font-semibold mb-3 text-white bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-violet">Our Mission</span>
                We support you to build your success in Finland by bridging the gap between global talent and Finnish opportunities.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-aurora-blue/50 rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-aurora-violet/50 rounded-br-lg"></div>
            </div>
          </div>

          {/* Quick Links - With enhanced styling */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-8 relative inline-block">
              <span className="text-white">Explore</span>
              <span className="absolute -bottom-2 left-0 w-12 h-1 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple"></span>
              <span className="absolute -bottom-2 left-0 w-24 h-1 rounded-full bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green opacity-50 blur-sm"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="group flex items-center py-2 transition-all duration-300">
                  <div className="flex items-center overflow-hidden">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mr-0 group-hover:w-5 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    <span className="text-white group-hover:text-aurora-blue-light font-medium transition-colors duration-300">Home</span>
                  </div>
                  <span className="ml-auto transform translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-aurora-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/classes" className="group flex items-center py-2 transition-all duration-300">
                  <div className="flex items-center overflow-hidden">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mr-0 group-hover:w-5 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    <span className="text-white group-hover:text-aurora-blue-light font-medium transition-colors duration-300">Our Courses</span>
                  </div>
                  <span className="ml-auto transform translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-aurora-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="group flex items-center py-2 transition-all duration-300">
                  <div className="flex items-center overflow-hidden">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mr-0 group-hover:w-5 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    <span className="text-white group-hover:text-aurora-blue-light font-medium transition-colors duration-300">Events</span>
                  </div>
                  <span className="ml-auto transform translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-aurora-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="group flex items-center py-2 transition-all duration-300">
                  <div className="flex items-center overflow-hidden">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mr-0 group-hover:w-5 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    <span className="text-white group-hover:text-aurora-blue-light font-medium transition-colors duration-300">Our Story</span>
                  </div>
                  <span className="ml-auto transform translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-aurora-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center py-2 transition-all duration-300">
                  <div className="flex items-center overflow-hidden">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mr-0 group-hover:w-5 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    <span className="text-white group-hover:text-aurora-blue-light font-medium transition-colors duration-300">Contact</span>
                  </div>
                  <span className="ml-auto transform translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-aurora-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section - Enhanced with glass morphism effect */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-8 relative inline-block">
              <span className="text-white">Connect</span>
              <span className="absolute -bottom-2 left-0 w-12 h-1 rounded-full bg-gradient-to-r from-aurora-green to-aurora-blue"></span>
              <span className="absolute -bottom-2 left-0 w-24 h-1 rounded-full bg-gradient-to-r from-aurora-green via-aurora-blue to-aurora-purple opacity-50 blur-sm"></span>
            </h3>
            
            <div className="space-y-5">
              {/* Glass morphism card for email with improved contrast */}
              <div className="group relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300 border border-white/10 shadow-lg hover:shadow-aurora-blue/10 hover:border-aurora-blue/20 bg-aurora-night/40">
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/10 to-aurora-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-5 relative z-10 flex items-center">
                  <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-aurora-blue/20 to-aurora-purple/20 group-hover:from-aurora-blue/30 group-hover:to-aurora-purple/30 transition-all duration-300">
                    <svg className="h-6 w-6 text-aurora-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-200 font-medium">Email Us</p>
                    <a href="mailto:info@finlern.fi" className="text-white hover:text-aurora-blue-light transition-colors duration-300 font-medium">info@finlern.fi</a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              
              {/* Glass morphism card for phone with improved contrast */}
              <div className="group relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300 border border-white/10 shadow-lg hover:shadow-aurora-green/10 hover:border-aurora-green/20 bg-aurora-night/40">
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-green/10 to-aurora-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-5 relative z-10 flex items-center">
                  <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-aurora-green/20 to-aurora-blue/20 group-hover:from-aurora-green/30 group-hover:to-aurora-blue/30 transition-all duration-300">
                    <svg className="h-6 w-6 text-aurora-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200 font-medium">Call Us</p>
                    <a href="tel:+358417567339" className="text-white hover:text-aurora-green-light transition-colors duration-300 font-medium">+358 41 756 7339</a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-green to-aurora-blue opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
            
            {/* Social media links */}
            <div className="mt-8 -ml-3">
              <SocialFlipRow channels={SOCIAL_CHANNELS} tone="onDark" />
            </div>
          </div>
        </div>

        {/* Enhanced copyright section with better legal links and improved contrast */}
        <div className="mt-16 pt-8 relative">
          {/* Gradient divider with animation */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green opacity-30"></div>
            <div className="h-px w-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-white">
                © {currentYear} Finlern. All rights reserved.
                <span className="ml-2 inline-flex items-center">
                  Made with 
                  <span className="relative inline-block mx-1 text-aurora-pink">
                    <span className="absolute inset-0 text-aurora-pink animate-pulse opacity-70 blur-sm">❤</span>
                    ❤
                  </span>
            in Finland
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
              {/* Legal links with hover effects and better contrast */}
              <Link href="/terms" className="group relative px-1 py-1">
                <span className="relative z-10 text-sm text-white group-hover:text-aurora-blue-light transition-colors duration-300">Terms</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <Link href="/privacy-policy" className="group relative px-1 py-1">
                <span className="relative z-10 text-sm text-white group-hover:text-aurora-blue-light transition-colors duration-300">Privacy</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
              <Link href="/cookies" className="group relative px-1 py-1">
                <span className="relative z-10 text-sm text-white group-hover:text-aurora-blue-light transition-colors duration-300">Cookies</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
              <Link href="/contact" className="group relative px-1 py-1">
                <span className="relative z-10 text-sm text-white group-hover:text-aurora-blue-light transition-colors duration-300">Contact</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-blue to-aurora-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 