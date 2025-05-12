import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import ClientOnly from '@/components/ClientOnly'
import SEO from '@/components/SEO'
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
      "https://facebook.com/finlern",
      "https://instagram.com/finlern",
      "https://www.linkedin.com/company/finlern-oy/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+358-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Finnish"]
    }
  };
  
  return (
    <Layout>
      <SEO 
        title="Finnish Language Learning Made Easy"
        description="Learn Finnish language with Finlern's interactive online courses, designed for all levels from beginner to advanced. Join our community and discover Finland's language and culture."
        canonical="https://finlern.com"
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
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
                  <span className="inline-block text-white">Master Finnish with</span> 
                  <span className="relative inline-block mt-2 md:mt-0 group">
                    <span className="relative z-10 bg-gradient-to-r from-aurora-green via-cyan-300 to-aurora-blue bg-clip-text text-transparent transition-all duration-700 cursor-pointer bg-[length:200%_auto] group-hover:bg-luxury-gradient group-hover:bg-[length:200%_auto] group-hover:animate-color-shift">
                      <span className="inline-block origin-left group-hover:origin-center group-hover:scale-110 transition-transform duration-700 ease-in-out pl-4 pr-3">
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500">F</span>
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500 delay-idx-1">i</span>
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500 delay-idx-2">n</span>
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500 delay-idx-3">l</span>
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500 delay-idx-4">e</span>
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500 delay-idx-5">r</span>
                        <span className="inline-block group-hover:tracking-[0.15em] transition-all duration-500 delay-idx-6">n</span>
                      </span>
                    </span>
                    
                    {/* Improved luxurious underline effect */}
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-aurora-green/80 via-cyan-300/80 to-aurora-blue/80 group-hover:from-[#FFD700] group-hover:via-[#E0115F] group-hover:to-[#7851A9] group-hover:h-[4px] -z-10 rounded-full transition-all duration-700"></span>
                    
                    {/* Luxurious glow effect on hover */}
                    <span className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-[#FFD700]/20 via-[#E0115F]/20 to-[#7851A9]/20 transition-opacity duration-700 group-hover:shadow-gold-glow"></span>
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
              The most effective, accessible, and enjoyable way to learn Finnish language, culture, and working life tailored to your profession and needs.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-delay="150"
            >
              {/* Simplified Primary button */}
              <Link href="/classes" className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-aurora-green to-aurora-blue text-white uppercase font-semibold tracking-wide shadow-lg rounded-xl hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center border border-white/10">
                {/* Icon */}
                <span className="relative z-10 flex items-center">
                  <span className="w-5 h-5 mr-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10">Explore Our Courses</span>
                </span>
                
                {/* Simplified shine effect */}
                <span className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </Link>
              
              {/* Simplified Secondary button */}
              <Link href="/contact" className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-aurora-purple to-aurora-violet text-white uppercase font-semibold tracking-wide shadow-lg rounded-xl hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center border border-white/10">
                {/* Icon */}
                <span className="relative z-10 flex items-center">
                  <span className="w-5 h-5 mr-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10">Contact Us</span>
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

      {/* Features Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with sophisticated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-70"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        {/* Enhanced decorative elements with animation */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-aurora-blue/5 rounded-full -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-aurora-green/5 rounded-full translate-y-1/3 -translate-x-1/4 animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-50/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="flex flex-col items-center"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue shadow-sm border border-aurora-blue/10 mb-4">
                Our Advantages
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                Why Choose Finlern?
                {/* Enhanced decorative underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-aurora-blue/40 via-aurora-purple/60 to-aurora-blue/40 rounded-full"></span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-aurora-blue/30 via-aurora-purple to-aurora-blue/30 mx-auto rounded-full mb-6 shadow-sm"></div>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We provide a comprehensive and hands-on Finnish language learning experience that facilitates social integration and improves job opportunities for internationals in Finland.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {/* Enhanced top gradient bar with animation */}
                <div className="h-2 bg-gradient-to-r from-aurora-blue/70 via-aurora-blue to-aurora-blue/70 w-full relative overflow-hidden">
                  <div className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-2000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                
                <div className="p-8 relative overflow-hidden">
                  {/* Enhanced icon container with hover animation */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative">
                    {/* Background layers for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aurora-blue/20 to-aurora-blue/5 group-hover:from-aurora-blue/30 group-hover:to-aurora-blue/10 transition-all duration-300"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white to-blue-50 border border-aurora-blue/10 shadow-inner"></div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-aurora-blue/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Icon with enhanced styling */}
                    <svg className="w-10 h-10 text-aurora-blue relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
                  
                  {/* Enhanced title with hover effect */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center w-full block relative">
                    <span className="relative z-10 group-hover:text-aurora-blue transition-colors duration-300">Weekly Learning Support</span>
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-0.5 bg-aurora-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
                  </h3>
                  
                  {/* Enhanced content with styled container */}
                  <div className="rounded-lg p-4 bg-gradient-to-br from-gray-50 to-white">
                    <p className="text-lg text-gray-700 text-center leading-relaxed">
                      Receive personalized Finnish learning materials every Monday and Thursday to keep your studies structured and consistent.
              </p>
            </div>
                </div>
              </div>
            </ClientOnly>

            {/* Feature 2 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {/* Enhanced top gradient bar with animation */}
                <div className="h-2 bg-gradient-to-r from-aurora-green/70 via-aurora-green to-aurora-green/70 w-full relative overflow-hidden">
                  <div className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-2000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

                <div className="p-8 relative overflow-hidden">
                  {/* Enhanced icon container with hover animation */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative">
                    {/* Background layers for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aurora-green/20 to-aurora-green/5 group-hover:from-aurora-green/30 group-hover:to-aurora-green/10 transition-all duration-300"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white to-green-50 border border-aurora-green/10 shadow-inner"></div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-aurora-green/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Icon with enhanced styling */}
                    <svg className="w-10 h-10 text-aurora-green relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
                  
                  {/* Enhanced title with hover effect */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center w-full block relative">
                    <span className="relative z-10 group-hover:text-aurora-green transition-colors duration-300">Conversation Club Events</span>
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-0.5 bg-aurora-green/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
                  </h3>
                  
                  {/* Enhanced content with styled container */}
                  <div className="rounded-lg p-4 bg-gradient-to-br from-gray-50 to-white">
                    <p className="text-lg text-gray-700 text-center leading-relaxed">
                      Join our weekly social gatherings in public spaces like cafés, parks, and libraries to practice Finnish in real-life settings.
              </p>
            </div>
                </div>
              </div>
            </ClientOnly>

            {/* Feature 3 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* Enhanced top gradient bar with animation */}
                <div className="h-2 bg-gradient-to-r from-aurora-violet/70 via-aurora-violet to-aurora-violet/70 w-full relative overflow-hidden">
                  <div className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-2000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

                <div className="p-8 relative overflow-hidden">
                  {/* Enhanced icon container with hover animation */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative">
                    {/* Background layers for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aurora-violet/20 to-aurora-violet/5 group-hover:from-aurora-violet/30 group-hover:to-aurora-violet/10 transition-all duration-300"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white to-purple-50 border border-aurora-violet/10 shadow-inner"></div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-aurora-violet/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Icon with enhanced styling */}
                    <svg className="w-10 h-10 text-aurora-violet relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Enhanced title with hover effect */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center w-full block relative">
                    <span className="relative z-10 group-hover:text-aurora-violet transition-colors duration-300">Working Life Guidance</span>
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-0.5 bg-aurora-violet/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
                  </h3>
                  
                  {/* Enhanced content with styled container */}
                  <div className="rounded-lg p-4 bg-gradient-to-br from-gray-50 to-white">
                    <p className="text-lg text-gray-700 text-center leading-relaxed">
                      Access specialized events with our partner companies to build professional networks and enhance your career opportunities in Finland.
              </p>
            </div>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white opacity-80"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-aurora-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-aurora-purple/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-aurora-blue/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-aurora-purple/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="flex flex-col items-center"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple shadow-sm border border-aurora-purple/10 mb-4">
                Student Feedback
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                What Our Students Say
                {/* Enhanced decorative underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-aurora-purple/40 via-aurora-blue/60 to-aurora-purple/40 rounded-full"></span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-aurora-purple/30 via-aurora-blue to-aurora-purple/30 mx-auto rounded-full mb-6 shadow-sm"></div>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Hear from our students who have successfully improved their Finnish language skills with Finlern.
            </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {/* Enhanced top gradient bar with animation */}
                <div className="h-2 bg-gradient-to-r from-aurora-blue/70 via-aurora-blue to-aurora-blue/70 w-full relative overflow-hidden">
                  <div className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-2000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                
                <div className="p-8 relative">
                  {/* Enhanced quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-blue/10">
                    <svg className="w-16 h-16 transform group-hover:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Enhanced user profile with shadow and hover effect */}
                  <div className="flex items-center mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-aurora-blue to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-white group-hover:shadow-aurora-blue/30 group-hover:scale-105 transition-all duration-300">
                  M
                </div>
                <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-aurora-blue transition-colors duration-300">Maria K.</h4>
                      <p className="text-base text-gray-700">Beginner Course</p>
                      
                      {/* Added subtle animated underline on hover */}
                      <div className="absolute bottom-0 left-16 right-16 h-px bg-aurora-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
                  
                  {/* Enhanced testimonial quote with better typography */}
                  <div className="mb-6 relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-aurora-blue/50 via-aurora-blue/20 to-aurora-blue/50 rounded-full"></div>
                    <p className="text-lg text-gray-700 italic pl-5 py-1 leading-relaxed">
                      &ldquo;I had tried learning Finnish on my own for months without much progress. After just 8 weeks with Finlern, I can now have basic conversations and understand simple texts. The teachers are amazing!&rdquo;
                    </p>
                  </div>
                  
                  {/* Enhanced star rating with animated hover */}
                  <div className="mt-4 flex items-center">
                    <div className="flex space-x-1 text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 transform group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-300 delay-idx-${i}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">5.0 rating</span>
                  </div>
                  
                  {/* Added corner embellishment */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-aurora-blue/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </ClientOnly>
            
            {/* Testimonial 2 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {/* Enhanced top gradient bar with animation */}
                <div className="h-2 bg-gradient-to-r from-aurora-green/70 via-aurora-green to-aurora-green/70 w-full relative overflow-hidden">
                  <div className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-2000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

                <div className="p-8 relative">
                  {/* Enhanced quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-green/10">
                    <svg className="w-16 h-16 transform group-hover:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Enhanced user profile with shadow and hover effect */}
                  <div className="flex items-center mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-aurora-green to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-white group-hover:shadow-aurora-green/30 group-hover:scale-105 transition-all duration-300">
                  J
                </div>
                <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-aurora-green transition-colors duration-300">John T.</h4>
                      <p className="text-base text-gray-700">Intermediate Course</p>
                      
                      {/* Added subtle animated underline on hover */}
                      <div className="absolute bottom-0 left-16 right-16 h-px bg-aurora-green/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
                  
                  {/* Enhanced testimonial quote with better typography */}
                  <div className="mb-6 relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-aurora-green/50 via-aurora-green/20 to-aurora-green/50 rounded-full"></div>
                    <p className="text-lg text-gray-700 italic pl-5 py-1 leading-relaxed">
                      &ldquo;The cultural aspects integrated into the lessons made learning Finnish so much more interesting. I not only improved my language skills but also gained a deeper understanding of Finland.&rdquo;
                    </p>
                  </div>
                  
                  {/* Enhanced star rating with animated hover */}
                  <div className="mt-4 flex items-center">
                    <div className="flex space-x-1 text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 transform group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-300 delay-idx-${i}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">5.0 rating</span>
                  </div>
                  
                  {/* Added corner embellishment */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-aurora-green/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </ClientOnly>
            
            {/* Testimonial 3 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* Enhanced top gradient bar with animation */}
                <div className="h-2 bg-gradient-to-r from-aurora-violet/70 via-aurora-violet to-aurora-violet/70 w-full relative overflow-hidden">
                  <div className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-2000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

                <div className="p-8 relative overflow-hidden">
                  {/* Enhanced quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-violet/10">
                    <svg className="w-16 h-16 transform group-hover:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Enhanced user profile with shadow and hover effect */}
                  <div className="flex items-center mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-aurora-violet to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-white group-hover:shadow-aurora-violet/30 group-hover:scale-105 transition-all duration-300">
                  S
                </div>
                <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-aurora-violet transition-colors duration-300">Sarah L.</h4>
                      <p className="text-base text-gray-700">Advanced Course</p>
                      
                      {/* Added subtle animated underline on hover */}
                      <div className="absolute bottom-0 left-16 right-16 h-px bg-aurora-violet/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
                  
                  {/* Enhanced testimonial quote with better typography */}
                  <div className="mb-6 relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-aurora-violet/50 via-aurora-violet/20 to-aurora-violet/50 rounded-full"></div>
                    <p className="text-lg text-gray-700 italic pl-5 py-1 leading-relaxed">
                      &ldquo;The advanced course helped me refine my Finnish to a professional level. The teachers are incredibly knowledgeable and supportive. I now use Finnish confidently in my work environment.&rdquo;
                    </p>
                  </div>
                  
                  {/* Enhanced star rating with animated hover */}
                  <div className="mt-4 flex items-center">
                    <div className="flex space-x-1 text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 transform group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-300 delay-idx-${i}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">5.0 rating</span>
                  </div>
                  
                  {/* Added corner embellishment */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-aurora-violet/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Optimized Background with simplified gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-night via-aurora-purple/90 to-aurora-blue/80">
          {/* Simplified atmospheric glow */}
          <div className="absolute inset-0 bg-[conic-gradient(at_80%_20%,rgba(71,167,106,0.12),rgba(62,138,193,0.12),rgba(157,78,221,0.12),rgba(255,97,239,0.15),rgba(71,167,106,0.12))] opacity-50"></div>
          
          {/* Minimal grain texture */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7nKrJ9kjZpwh1jWBpzLWEs2t6+dRBMAH1e0KzGij8gC8JsrLCXQAAAAAElFTkSuQmCC')]"></div>
          
          {/* Simplified grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
          
          {/* Enhanced premium vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(5,2,26,0.5)_100%)]"></div>
        </div>
        
        {/* Single simplified beam animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-[20%] w-[140%] h-[140%] opacity-15">
            <div className="absolute top-1/2 left-0 right-0 h-32 bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-45 transform -translate-y-1/2 animate-beam-slow"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 relative overflow-hidden" data-aos="fade-up" data-aos-duration="800">
              {/* Simplified decorative elements - only keeping essentials */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              
              {/* Simplified corner accents - only top corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
              
              <div className="text-center relative z-10">
                <div className="inline-block mb-4 bg-gradient-to-r from-white/30 to-white/10 px-6 py-2 rounded-full text-white backdrop-blur-sm border border-white/20 shadow-sm">
                  Start Your Journey
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
                  Ready to Start Your Finnish Journey?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join our community of Finnish language learners and take the first step towards fluency.
                </p>
                
                {/* Buttons container - keeping hover animations intact */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  {/* Primary Button - preserved hover animations */}
                  <Link 
                    href="/classes" 
                    className="relative overflow-hidden group/btn inline-flex items-center px-10 py-4 bg-white text-aurora-night rounded-xl font-medium shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(71,167,106,0.3)] transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Enhanced background with gradient overlay */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-green/0 via-aurora-green/10 to-aurora-blue/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                    
                    {/* Inner highlight for depth */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-white/80 to-gray-100"></span>
                    
                    {/* Premium border effect */}
                    <span className="absolute inset-0 rounded-xl border border-white/50 group-hover/btn:border-aurora-green/30 group-hover/btn:shadow-[0_0_15px_rgba(71,167,106,0.3)] transition-all duration-500"></span>
                    
                    {/* Enhanced icon with animated accent */}
                    <span className="relative z-10 mr-3 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue transform group-hover/btn:scale-110 transition-transform duration-500 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    
                    {/* Enhanced text with better typography */}
                    <span className="relative z-10 group-hover:tracking-wider transition-all duration-500 text-aurora-night font-semibold ml-1">Get Started Today</span>
                    
                    {/* Enhanced shine effect on hover */}
                    <span className="absolute inset-0 w-[200%] -translate-x-full group-hover/btn:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  </Link>
                  
                  {/* Secondary action button - preserved hover animations */}
                  <Link 
                    href="/contact" 
                    className="relative overflow-hidden group/btn inline-flex items-center px-10 py-4 bg-transparent text-white rounded-xl font-medium border border-white/30 hover:border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    {/* Background glow on hover */}
                    <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                    
                    {/* Enhanced icon */}
                    <span className="relative z-10 mr-3 flex items-center justify-center w-8 h-8 rounded-full border border-white/40 transform group-hover/btn:scale-110 transition-all duration-500">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    
                    {/* Enhanced text */}
                    <span className="relative z-10 text-white font-semibold tracking-wide">Contact Us</span>
                    
                    {/* Enhanced shine effect on hover */}
                    <span className="absolute inset-0 w-[200%] -translate-x-full group-hover/btn:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 