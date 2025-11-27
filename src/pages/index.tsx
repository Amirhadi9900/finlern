import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import ClientOnly from '@/components/ClientOnly'
import SEO from '@/components/SEO'
import EventCarousel from '@/components/events/EventCarousel'
import styles from '../styles/heroEffects.module.css'

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function Home() {
  // Reference for animated text elements
  const counterRefs = useRef([]);
  // Reference for the stats section
  const statsRef = useRef<HTMLElement>(null);
  
  // Initialize animations on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Trigger scroll animations
      const cleanup = window.scrollAnimations?.init();
      
      // Clean up animations when component unmounts
      return () => {
        if (cleanup && typeof cleanup === 'function') {
          cleanup();
        } else if (window.scrollAnimations?.cleanup) {
          window.scrollAnimations.cleanup();
        }
      };
    }
  }, []);

  // Handle scroll down click
  const handleScrollDown = () => {
    if (statsRef.current) {
      statsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Schema.org structured data for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Finlern",
    "url": "https://finlern.com",
    "logo": "https://finlern.com/images/finlern.png",
    "description": "Learn Finnish language with Finlern's interactive online courses, designed for all levels from beginner to advanced. Join our community and discover Finland's language and culture.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Helsinki",
      "addressRegion": "Uusimaa",
      "addressCountry": "Finland"
    },
    "sameAs": [
      "https://www.facebook.com/people/Finlern/61578171630486/",
      "https://www.instagram.com/finlern",
      "https://www.linkedin.com/company/finlern-oy/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+358417567339",
      "email": "info@finlern.fi",
      "contactType": "customer service",
      "availableLanguage": ["English", "Finnish"]
    }
  };
  
  return (
    <Layout>
      <SEO 
        title="Finnish Language Learning Made Easy"
        description="Learn Finnish language with Finlern's interactive online courses, designed for all levels from beginner to advanced. Join our community and discover Finland's language and culture."
        canonical="https://finlern.vercel.app/"
        ogImage="/images/finlern.png"
        structuredData={homePageSchema}
      />

      {/* Hero Section - Enhanced with Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Optimized Background with reduced complexity */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-night via-aurora-purple/90 to-aurora-blue/80">
          {/* Simplified atmospheric glow with reduced opacity */}
          <div className="absolute inset-0 bg-[conic-gradient(at_80%_20%,rgba(71,167,106,0.1),rgba(62,138,193,0.1),rgba(157,78,221,0.1),rgba(255,97,239,0.15),rgba(71,167,106,0.1))] opacity-50"></div>
          
          {/* Simplified lighting effects */}
          <div 
            aria-hidden="true"
            className={`absolute inset-0 ${styles.combinedGradients}`}
          ></div>
          
          {/* Single simplified floating orb */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-[15%] left-[15%] w-[40vw] max-w-[400px] aspect-square rounded-full bg-gradient-to-br from-aurora-blue/20 via-aurora-purple/10 to-transparent blur-[60px] ${styles.animateFloat}`}></div>
          </div>
          
          {/* Simplified grid overlay */}
          <div 
            aria-hidden="true"
            className={`absolute inset-0 ${styles.elegantGrid}`}
          ></div>
          
          {/* Dramatic vignette */}
          <div 
            aria-hidden="true"
            className={`absolute inset-0 ${styles.dramaticVignette}`}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ClientOnly fallback={
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Master Finnish with <span className="text-aurora-green">Finlern</span>
            </h1>
            }>
              <div className="mb-8" data-aos="fade-up" data-aos-duration="600">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-white/90 mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                  Tervetuloa Finlerniin
                </h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
                  <span className="text-white whitespace-nowrap">Master Finnish Life with</span>
                  <span className="block mt-3">
                    <span 
                      className="inline-block font-black text-4xl md:text-5xl lg:text-6xl finlern-hero-text"
                      data-text="Finlern"
                    >
                      Finlern
                    </span>
                  </span>
                </h1>
                {/* Simplified decorative divider */}
                <div className="w-32 h-px mx-auto mt-8 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
              </div>
            </ClientOnly>
            <p 
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-delay="100"
              className="text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto text-blue-50/90"
            >
              Your trusted partner for Finnish language mastery, cultural integration, and flawless relocation!
            </p>
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-delay="150"
            >
              {/* Simplified Primary button */}
              <Link href="/classes" className="relative overflow-hidden group w-full sm:w-80 px-8 py-4 bg-gradient-to-r from-aurora-green to-aurora-blue text-white uppercase font-semibold tracking-wide shadow-lg rounded-xl hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center border border-white/10">
                {/* Icon */}
                <span className="relative z-10 flex items-center">
                  <span className="w-5 h-5 mr-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10 whitespace-nowrap">Explore Our Courses</span>
                </span>
                
                {/* Simplified shine effect */}
                <span className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </Link>
              
              {/* Simplified Secondary button */}
              <Link href="/contact" className="relative overflow-hidden group w-full sm:w-80 px-8 py-4 bg-gradient-to-r from-aurora-purple to-aurora-violet text-white uppercase font-semibold tracking-wide shadow-lg rounded-xl hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center border border-white/10">
                {/* Icon */}
                <span className="relative z-10 flex items-center">
                  <span className="w-5 h-5 mr-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10 whitespace-nowrap">Contact Us</span>
                </span>
                
                {/* Simplified shine effect */}
                <span className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Simplified scroll indicator */}
        <ClientOnly>
          <div 
            onClick={handleScrollDown}
            className="absolute bottom-4 w-full flex justify-center items-center cursor-pointer z-10 mt-8"
            aria-label="Scroll to stats section"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleScrollDown();
              }
            }}
            data-aos="fade-up" 
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <div className="group relative flex flex-col items-center">
              <div className="relative w-6 h-10 rounded-full border-2 border-white/70 group-hover:border-white transition-colors duration-300">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
              </div>
            </div>
          </div>
        </ClientOnly>
      </section>

      {/* Stats Section - Enhanced */}
      <section ref={statsRef} className="py-16 md:py-20 relative overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-30"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* New: Added subtle flowing curve for visual interest */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-aurora-blue/5 -mb-20 mr-20 blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {/* Stat 1 - Enhanced */}
              <div 
                className="p-6 text-center relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {/* New decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/5 to-aurora-blue/10 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-aurora-blue/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aurora-blue/30 to-transparent"></div>
                
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-blue mb-2">20+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-blue mb-2 relative group-hover:scale-110 transition-transform duration-300" data-target="20">
                        20
                      </h3>
                      <span className="text-2xl font-bold text-aurora-blue">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium relative">
                    Students Taught
                    {/* New underline effect */}
                    <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-aurora-blue/30 group-hover:left-0 group-hover:right-0 transition-all duration-300"></span>
                  </p>
                </div>
              </div>
              
              {/* Stat 2 - Enhanced */}
              <div 
                className="p-6 text-center relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {/* New decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-green/5 to-aurora-green/10 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-aurora-green/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aurora-green/30 to-transparent"></div>
                
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-green mb-2">3+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-green mb-2 relative group-hover:scale-110 transition-transform duration-300" data-target="3">
                        3
                      </h3>
                      <span className="text-2xl font-bold text-aurora-green">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium relative">
                    Expert Teachers
                    {/* New underline effect */}
                    <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-aurora-green/30 group-hover:left-0 group-hover:right-0 transition-all duration-300"></span>
                  </p>
                </div>
              </div>
              
              {/* Stat 3 - Enhanced */}
              <div 
                className="p-6 text-center relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {/* New decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-violet/5 to-aurora-violet/10 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-aurora-violet/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aurora-violet/30 to-transparent"></div>
                
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-violet mb-2">5+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-violet mb-2 relative group-hover:scale-110 transition-transform duration-300" data-target="5">
                        5
                      </h3>
                      <span className="text-2xl font-bold text-aurora-violet">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium relative">
                    Courses Offered
                    {/* New underline effect */}
                    <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-aurora-violet/30 group-hover:left-0 group-hover:right-0 transition-all duration-300"></span>
                  </p>
                </div>
              </div>
              
              {/* Stat 4 - Enhanced */}
              <div 
                className="p-6 text-center relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* New decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/5 to-aurora-purple/10 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-aurora-purple/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aurora-purple/30 to-transparent"></div>
                
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-purple mb-2">98%</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-purple mb-2 relative group-hover:scale-110 transition-transform duration-300" data-target="98">
                        98
                      </h3>
                      <span className="text-2xl font-bold text-aurora-purple">%</span>
            </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium relative">
                    Success Rate
                    {/* New underline effect */}
                    <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-aurora-purple/30 group-hover:left-0 group-hover:right-0 transition-all duration-300"></span>
                  </p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Services Section - New */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-aurora-night/95 via-aurora-purple/90 to-aurora-blue/85">
        {/* Professional Background Effects */}
        <div className="absolute inset-0 bg-[conic-gradient(at_70%_30%,rgba(71,167,106,0.1),rgba(62,138,193,0.1),rgba(157,78,221,0.1),rgba(255,97,239,0.15),rgba(71,167,106,0.1))] opacity-60"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-aurora-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aurora-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-aurora-night/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-aurora-green to-aurora-blue px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Beyond Language Learning
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Your Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-blue">Relocation Partner</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aurora-green to-aurora-blue mx-auto rounded-full mb-6" data-aos="fade-up" data-aos-delay="150"></div>
            <p 
              className="text-xl text-blue-50/90 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Finlern transcends traditional language education by offering comprehensive relocation services for international professionals and students. We bridge the gap between global talent and Finnish opportunities, providing continuous support for integration into Finnish society and workplace culture.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* For International Professionals */}
            <div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aurora-green/20 to-aurora-blue/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-aurora-green transition-colors duration-300">For International Professionals</h3>
                  <p className="text-blue-100/80 leading-relaxed">From mastering professional Finnish to understanding workplace dynamics, we provide end-to-end support for skilled professionals seeking to establish successful careers in Finland.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional Finnish language mastery
                </div>
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Workplace culture integration
                </div>
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional networking opportunities
                </div>
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Career development guidance
                </div>
              </div>
            </div>

            {/* For Finnish Employers */}
            <div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aurora-blue/20 to-aurora-purple/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-aurora-blue transition-colors duration-300">For Finnish Employers</h3>
                  <p className="text-blue-100/80 leading-relaxed">We connect you with qualified international talent while providing comprehensive onboarding and cultural integration services for your new employees.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  International talent recruitment
                </div>
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Employee onboarding support
                </div>
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Cultural integration programs
                </div>
                <div className="flex items-center text-blue-100/70">
                  <svg className="w-5 h-5 text-aurora-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Long-term retention strategies
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table Section - New */}
          <div className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-blue">Services</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-aurora-green to-aurora-blue mx-auto rounded-full mb-12"></div>

            {/* Individual Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-12 h-12 rounded-full bg-aurora-green/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9l2.592-2.592a1 1 0 01.684-.948H19a2 2 0 012 2v10a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L13.5 15l-2.592 2.592a1 1 0 01-.684.948H5a2 2 0 01-2-2V5z"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Accommodation & Housing</h4>
                <p className="text-blue-100/70">Assistance with finding and securing housing.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-12 h-12 rounded-full bg-aurora-blue/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">School Enrollment for Children</h4>
                <p className="text-blue-100/70">Guidance on choosing schools and documentation.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-12 h-12 rounded-full bg-aurora-purple/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Administrative & Gov. Affairs</h4>
                <p className="text-blue-100/70">Help with Social Security, Kela, permits, etc.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-12 h-12 rounded-full bg-aurora-violet/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v6a2 2 0 002 2h14a2 2 0 002-2v-6M3 10V4a2 2 0 012-2h14a2 2 0 012 2v6M3 10h18M7 15h1m4 0h1"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Car Purchase & Registration</h4>
                <p className="text-blue-100/70">Advice and assistance for buying and registering a car.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="500">
                <div className="w-12 h-12 rounded-full bg-aurora-green/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10a4 4 0 00-8 0v4a4 4 0 008 0v-4z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Translation & Interpreter Services</h4>
                <p className="text-blue-100/70">Finnish language support for various needs.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="w-12 h-12 rounded-full bg-aurora-blue/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Residential & Social Integration</h4>
                <p className="text-blue-100/70">Support for integrating into Finnish society and daily life.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="700">
                <div className="w-12 h-12 rounded-full bg-aurora-purple/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Special Residency Solutions</h4>
                <p className="text-blue-100/70">Consultation for families with varied Social Security status.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="800">
                <div className="w-12 h-12 rounded-full bg-aurora-green/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Phone Consultation & Support (20 min)</h4>
                <p className="text-blue-100/70">Comprehensive consultation regarding all legal procedures for moving to Finland.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="900">
                <div className="w-12 h-12 rounded-full bg-aurora-blue/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Airport Transfer & Transportation</h4>
                <p className="text-blue-100/70">Pick-up from airport and other transportation needs.</p>
              </div>
            </div>

            {/* Package Offers */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-aurora-green/10 to-aurora-blue/10 border border-white/20 rounded-2xl p-8 shadow-xl relative overflow-hidden group" data-aos="fade-up" data-aos-delay="1000">
                <div className="absolute inset-0 bg-[conic-gradient(at_top_right,rgba(71,167,106,0.1),rgba(62,138,193,0.05),transparent_60%)] opacity-50"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h4 className="text-3xl font-bold text-white mb-4">Single Person Package</h4>
                  <p className="text-blue-100/80 mb-6 flex-grow">All essential services for individuals moving to Finland, offering comprehensive support for a smooth transition.</p>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-xl text-white/70 ml-2">all services included</span>
                  </div>
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-green/30 transform hover:scale-105">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-aurora-purple/10 to-aurora-violet/10 border border-white/20 rounded-2xl p-8 shadow-xl relative overflow-hidden group" data-aos="fade-up" data-aos-delay="1100">
                <div className="absolute inset-0 bg-[conic-gradient(at_top_right,rgba(157,78,221,0.1),rgba(255,97,239,0.05),transparent_60%)] opacity-50"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h4 className="text-3xl font-bold text-white mb-4">Family Package</h4>
                  <p className="text-blue-100/80 mb-6 flex-grow">A complete solution for families relocating to Finland, ensuring every member's needs are met with expert assistance.</p>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-xl text-white/70 ml-2">all services included</span>
                  </div>
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-aurora-purple to-aurora-violet text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30 transform hover:scale-105">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Integration Support */}
          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 text-center"
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue mx-auto mb-6 flex items-center justify-center shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Complete Integration Support</h3>
              <p className="text-xl text-blue-100/90 leading-relaxed mb-8">
                Language proficiency, cultural immersion, workplace etiquette, and professional networking all in one place! We ensure you don't just relocate to Finland, <span className="text-aurora-green font-semibold">you blossom here</span>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-aurora-green mb-2">95%</div>
                  <p className="text-sm text-blue-100/70">Success Rate</p>
                </div>
                
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-aurora-purple mb-2">3+</div>
                  <p className="text-sm text-blue-100/70">Partner Companies</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-aurora-green mb-2">24/7</div>
                  <p className="text-sm text-blue-100/70">Support Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="1300" data-aos-duration="800">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-green/30 transform hover:scale-105 group">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start Your Finnish Journey
              </Link>
              <Link href="/our-story" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:scale-105 group backdrop-blur-sm">
                <svg className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn About Our Mission
              </Link>
            </div>
            <p className="text-sm text-blue-100/60 mt-4">
              Professional relocation services • Complete cultural integration • Proven success rate
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Stunning Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-green-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aurora-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-aurora-purple/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-aurora-purple to-aurora-blue px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Advantages
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green">
                Finlern?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green mx-auto rounded-full mb-6"></div>
            <p 
              className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              We provide a comprehensive and hands-on Finnish language learning experience that facilitates social integration and improves job opportunities for internationals in Finland.
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 - Enhanced Design */}
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue/20 to-aurora-green/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Enhanced Icon Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-aurora-blue/10 to-aurora-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <svg className="w-10 h-10 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                    </div>
                    {/* Glow background for icon */}
                    <div className="absolute inset-0 bg-aurora-blue/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Enhanced Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-aurora-blue transition-colors duration-300">
                  Weekly Learning Support
                </h3>
                
                {/* Enhanced Content Container */}
                <div className="bg-gradient-to-br from-gray-50/80 to-white rounded-2xl p-6 flex-grow flex items-center">
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Receive personalized Finnish learning materials every Monday and Thursday to keep your studies structured and consistent.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Enhanced Design */}
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              {/* Featured Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-aurora-green to-aurora-blue text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  ⭐ Most Popular
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col mt-4">
                {/* Enhanced Icon Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-aurora-green/10 to-aurora-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <svg className="w-10 h-10 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                    </div>
                    {/* Glow background for icon */}
                    <div className="absolute inset-0 bg-aurora-green/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Enhanced Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-aurora-green transition-colors duration-300">
                  Conversation Club Events
                </h3>
                
                {/* Enhanced Content Container */}
                <div className="bg-gradient-to-br from-gray-50/80 to-white rounded-2xl p-6 flex-grow flex items-center">
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Join our weekly social gatherings in public spaces like cafés, parks, and libraries to practice Finnish in real-life settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Enhanced Design */}
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-violet/20 to-aurora-purple/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Enhanced Icon Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-aurora-violet/10 to-aurora-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <svg className="w-10 h-10 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                    </div>
                    {/* Glow background for icon */}
                    <div className="absolute inset-0 bg-aurora-violet/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Enhanced Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-aurora-violet transition-colors duration-300">
                  Working Life Guidance
                </h3>
                
                {/* Enhanced Content Container */}
                <div className="bg-gradient-to-br from-gray-50/80 to-white rounded-2xl p-6 flex-grow flex items-center">
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Access specialized events with our partner companies to build professional networks and enhance your career opportunities in Finland.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Carousel */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <EventCarousel 
              images={[
                '/images/events/IMG_0098.png',
                '/images/events/IMG_2147.png',
                '/images/events/IMG_2207.png',
                '/images/events/IMG_2211.png',
                '/images/events/IMG_2221.png',
                '/images/events/IMG_3053.png',
                '/images/events/IMG_4759.png',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Professional Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-aurora-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-aurora-purple/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Main CTA Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Decorative header bar */}
              <div className="h-2 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"></div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
                  <div className="inline-block mb-4 bg-gradient-to-r from-aurora-blue to-aurora-green px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                    Start Your Finnish Journey Today
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-green">Master Finnish?</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-green mx-auto rounded-full mb-6"></div>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join our community of Finnish language learners and take the first step towards fluency.
            </p>
                </div>

                {/* Learning Paths Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="group" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-blue/5 to-aurora-blue/10 rounded-2xl p-6 h-full border border-aurora-blue/10 group-hover:shadow-lg group-hover:shadow-aurora-blue/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Beginner to Advanced</h3>
                          <p className="text-gray-600">Complete learning path from basic to fluent Finnish</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Structured curriculum
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Weekly progress tracking
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Personalized materials
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-green/5 to-aurora-green/10 rounded-2xl p-6 h-full border border-aurora-green/10 group-hover:shadow-lg group-hover:shadow-aurora-green/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Social Learning</h3>
                          <p className="text-gray-600">Practice with native speakers in real-world settings</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Conversation clubs
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Cultural immersion
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Native speaker sessions
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-purple/5 to-aurora-purple/10 rounded-2xl p-6 h-full border border-aurora-purple/10 group-hover:shadow-lg group-hover:shadow-aurora-purple/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Career Support</h3>
                          <p className="text-gray-600">Professional Finnish for work opportunities</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Business Finnish
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Job interview prep
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Networking events
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">98%</div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-green mb-1">2 Years</div>
                    <p className="text-sm text-gray-600">Average Progress</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-purple mb-1">20+</div>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>

                  <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">15+ Years</div>
                    <p className="text-sm text-gray-600">Teaching Excellence</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/classes" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Start Learning Today
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-aurora-blue text-aurora-blue rounded-xl font-medium transition-all duration-300 hover:bg-aurora-blue/5 hover:shadow-lg transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Schedule Consultation
            </Link>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Free consultation available • Flexible scheduling • Proven results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 