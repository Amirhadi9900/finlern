import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  // Use state to store the year
  const [currentYear, setCurrentYear] = useState('');
  
  // Calculate the year on the client side only
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-aurora-night text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden rounded-md">
                <Image 
                  src="/images/finlern.png" 
                  alt="Finlern Logo" 
                  width={800} 
                  height={280} 
                  className="h-24 w-auto"
                  onError={(e) => {
                    // Set fallback image if the logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/800x280?text=Finlern";
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Finlern is dedicated to making Finnish language learning accessible, 
              engaging, and effective for everyone.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-aurora-blue"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-aurora-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-aurora-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Our Classes
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-aurora-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-aurora-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-aurora-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-aurora-blue"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="mr-3 p-2 bg-aurora-night border border-aurora-blue/30 rounded-md group-hover:bg-aurora-blue/10 transition-colors duration-300">
                  <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:info@finlern.fi" className="text-gray-300 hover:text-white transition-colors duration-300">info@finlern.fi</a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="mr-3 p-2 bg-aurora-night border border-aurora-blue/30 rounded-md group-hover:bg-aurora-blue/10 transition-colors duration-300">
                  <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a href="tel:+3580123456789" className="text-gray-300 hover:text-white transition-colors duration-300">+358 41 756 7339</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Finlern. All rights reserved. Made with 
            <span className="text-red-500 mx-1">❤</span>
            in Finland
          </p>
          <div className="mt-4 text-xs text-gray-500 flex justify-center space-x-6">
            <Link href="/terms" className="hover:text-gray-300 transition-colors duration-300">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-gray-300 transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 