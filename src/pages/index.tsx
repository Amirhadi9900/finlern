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
          <div className="absolute inset-0 bg-[conic-gradient(at_80%_20%,rgba(71,167,106,0.15),rgba(62,138,193,0.15),rgba(157,78,221,0.15),rgba(255,97,239,0.2),rgba(71,167,106,0.15))] opacity-60"></div>
          
          {/* Rich lighting effects - Simplified to one element */}
          <div 
            aria-hidden="true"
            className={`absolute inset-0 ${styles.combinedGradients}`}
          ></div>
          
          {/* Reduced and simplified flowing curves */}
          <div aria-hidden="true" className="absolute h-[120%] w-[120%] -top-[10%] -left-[10%] opacity-10">
            <div className="absolute top-[15%] left-[20%] w-[70%] h-[60%] rounded-[100%/70%] border border-white/5 rotate-[30deg]"></div>
          </div>
          
          {/* Shimmer effect - Simplified by removing textures */}
          
          {/* Simplified floating orbs - Reduced count and size */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            {/* Primary signature orb - Reduced blur */}
            <div className={`absolute top-[15%] left-[15%] w-[40vw] max-w-[500px] aspect-square rounded-full bg-gradient-to-br from-aurora-blue/25 via-aurora-purple/15 to-transparent blur-[80px] ${styles.animateFloat}`}>
            </div>
            
            {/* Reduced to one secondary orb */}
            <div className={`absolute bottom-[20%] right-[10%] w-[25vw] max-w-[400px] aspect-square rounded-full bg-gradient-to-tl from-aurora-purple/20 via-aurora-violet/15 to-transparent blur-[70px] ${styles.animateFloatDelayed}`}></div>
          </div>
          
          {/* Light accents - Removed to improve performance */}
          
          {/* Light sweep animation - Simplified */}
          <div aria-hidden="true" className="absolute inset-0 opacity-10">
            <div className={`absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[15deg] ${styles.animateSweepSlow}`}></div>
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
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-white [text-shadow:0_2px_10px_rgba(255,255,255,0.25)]">Master Finnish with</span> 
                  <span className="relative inline-block mt-2 md:mt-0">
                    <span className="relative z-10 bg-gradient-to-r from-aurora-green via-cyan-300 to-aurora-blue bg-clip-text text-transparent
                          transition-all duration-500 will-change-transform [text-shadow:0_0_20px_rgba(71,167,106,0.4)]">
                      Finlern
                      
                      {/* Enhanced shimmer effect */}
                      <span className="absolute inset-0 w-[300%] -translate-x-[100%] animate-[shimmer_6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 blur-sm"></span>
                      
                      {/* Added luxurious glow effect */}
                      <span className="absolute -z-10 inset-0 blur-md bg-gradient-to-r from-aurora-green/20 via-aurora-blue/20 to-aurora-green/20 opacity-70"></span>
                    </span>
                    
                    {/* Enhanced underline effect */}
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-aurora-green/90 via-cyan-300/90 to-aurora-blue/90 -z-10 rounded-full blur-[2px]"></span>
                    
                    {/* Added luxurious second underline for depth */}
                    <span className="absolute -bottom-2 left-5 right-5 h-[2px] bg-gradient-to-r from-aurora-blue/50 via-aurora-green/50 to-aurora-blue/50 -z-10 rounded-full blur-[3px]"></span>
                    
                    {/* Added subtle mirror reflection */}
                    <span className="absolute -bottom-5 left-0 right-0 h-3 bg-gradient-to-b from-white/20 to-transparent -z-10 rounded-full blur-sm opacity-30 scale-x-90"></span>
                  </span>
                </h1>
                {/* Enhanced decorative divider */}
                <div className="w-32 h-[2px] mx-auto mt-8 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent [box-shadow:0_0_8px_rgba(255,255,255,0.5)]"></div>
              </div>
            </ClientOnly>
            <p 
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-delay="100"
              className="text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto [text-shadow:0_1px_5px_rgba(0,0,0,0.15)] font-light text-blue-50/90 [letter-spacing:0.02em]"
            >
              The most effective, accessible, and enjoyable way to learn Finnish language, culture, and working life tailored to your profession and needs.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-delay="150"
            >
              {/* Enhanced Primary button */}
              <Link href="/classes" className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-aurora-green via-aurora-blue to-aurora-violet text-white uppercase font-semibold tracking-wide shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(71,167,106,0.5)] flex items-center justify-center border border-white/10">
                {/* Enhanced background effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-violet opacity-0 group-hover:opacity-90 transition-all duration-300"></span>
                
                {/* Added subtle inner glow */}
                <span className="absolute inset-[1px] rounded-lg bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></span>
                
                {/* Icon */}
                <span className="relative z-10 flex items-center">
                  <span className="w-5 h-5 mr-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-cyan-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10 transition-all duration-300 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.3)] group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)]">Explore Our Classes</span>
                </span>
                
                {/* Enhanced shine effect */}
                <span className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              </Link>
              
              {/* Enhanced Secondary button */}
              <Link href="/contact" className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-aurora-green via-aurora-blue to-aurora-violet text-white uppercase font-semibold tracking-wide shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(157,78,221,0.5)] flex items-center justify-center border border-white/10">
                {/* Enhanced background effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-violet via-aurora-purple to-aurora-blue opacity-0 group-hover:opacity-90 transition-all duration-300"></span>
                
                {/* Added subtle inner glow */}
                <span className="absolute inset-[1px] rounded-lg bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></span>
                
                {/* Icon */}
                <span className="relative z-10 flex items-center">
                  <span className="w-5 h-5 mr-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-cyan-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10 transition-all duration-300 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.3)] group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)]">Contact Us</span>
                </span>
                
                {/* Enhanced shine effect */}
                <span className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced floating scroll indicator */}
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
              <div className="relative w-6 h-10 rounded-full border-2 border-white/70 group-hover:border-white transition-colors duration-300 [box-shadow:0_0_10px_rgba(255,255,255,0.15)]">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-scroll [box-shadow:0_0_5px_rgba(255,255,255,0.5)]"></div>
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
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {/* Stat 1 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="absolute inset-0 bg-aurora-blue/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-blue mb-2">20+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-blue mb-2" data-target="20">20</h3>
                      <span className="text-2xl font-bold text-aurora-blue">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Students Taught</p>
                </div>
              </div>
              
              {/* Stat 2 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="absolute inset-0 bg-aurora-green/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-green mb-2">3+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-green mb-2" data-target="3">3</h3>
                      <span className="text-2xl font-bold text-aurora-green">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Expert Teachers</p>
                </div>
              </div>
              
              {/* Stat 3 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="absolute inset-0 bg-aurora-violet/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-violet mb-2">5+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-violet mb-2" data-target="5">5</h3>
                      <span className="text-2xl font-bold text-aurora-violet">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Courses Offered</p>
                </div>
              </div>
              
              {/* Stat 4 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="absolute inset-0 bg-aurora-purple/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-purple mb-2">98%</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-purple mb-2" data-target="98">98</h3>
                      <span className="text-2xl font-bold text-aurora-purple">%</span>
            </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Success Rate</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced Beginning */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with sophisticated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-70"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-aurora-blue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-aurora-green/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up" data-aos-duration="800">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue">
                Our Advantages
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Why Choose Finlern?
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
            >
              We provide a comprehensive and hands-on Finnish language learning experience that facilitates social integration and improves job opportunities for internationals in Finland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-blue/70 w-full"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-aurora-blue/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Weekly Learning Support</h3>
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Receive personalized Finnish learning materials every Monday and Thursday to keep your studies structured and consistent.
              </p>
            </div>
              </div>
            </ClientOnly>

            {/* Feature 2 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-green/70 w-full"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-aurora-green/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cafe Lingua Events</h3>
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Join our weekly social gatherings in public spaces like cafés and libraries to practice Finnish in real-life settings.
              </p>
            </div>
              </div>
            </ClientOnly>

            {/* Feature 3 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-violet to-aurora-violet/70 w-full"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-aurora-violet/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Working Life Guidance</h3>
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Access specialized events with our partner companies to build professional networks and enhance your career opportunities in Finland.
              </p>
            </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with sophisticated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white opacity-80"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-aurora-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-aurora-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up" data-aos-duration="800">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple">
                Student Feedback
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
            >
              What Our Students Say
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-purple to-aurora-blue mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Hear from our students who have successfully improved their Finnish language skills with Finlern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-blue/70 w-full"></div>
                <div className="p-8 relative">
                  {/* Quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-blue/10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-aurora-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  M
                </div>
                <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">Maria K.</h4>
                      <p className="text-base text-gray-700">Beginner Course</p>
                </div>
              </div>
                  
                  <p className="text-lg text-gray-700 italic border-l-4 border-aurora-blue/30 pl-4 py-2 mb-6 leading-relaxed">
                    &ldquo;I had tried learning Finnish on my own for months without much progress. After just 8 weeks with Finlern, I can now have basic conversations and understand simple texts. The teachers are amazing!&rdquo;
              </p>
                  
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
              </div>
            </ClientOnly>
            
            {/* Testimonial 2 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-green/70 w-full"></div>
                <div className="p-8 relative">
                  {/* Quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-green/10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
            </div>

                  <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-aurora-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  J
                </div>
                <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">John T.</h4>
                      <p className="text-base text-gray-700">Intermediate Course</p>
                </div>
              </div>
                  
                  <p className="text-lg text-gray-700 italic border-l-4 border-aurora-green/30 pl-4 py-2 mb-6 leading-relaxed">
                    &ldquo;The cultural aspects integrated into the lessons made learning Finnish so much more interesting. I not only improved my language skills but also gained a deeper understanding of Finland.&rdquo;
              </p>
                  
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
              </div>
            </ClientOnly>
            
            {/* Testimonial 3 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-violet to-aurora-violet/70 w-full"></div>
                <div className="p-8 relative">
                  {/* Quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-violet/10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
            </div>

                  <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-aurora-violet rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  S
                </div>
                <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">Sarah L.</h4>
                      <p className="text-base text-gray-700">Advanced Course</p>
                </div>
              </div>
                  
                  <p className="text-lg text-gray-700 italic border-l-4 border-aurora-violet/30 pl-4 py-2 mb-6 leading-relaxed">
                    &ldquo;The advanced course helped me refine my Finnish to a professional level. The teachers are incredibly knowledgeable and supportive. I now use Finnish confidently in my work environment.&rdquo;
              </p>
                  
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Luxury Background with Premium Aurora Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-night via-aurora-purple/90 to-aurora-blue/80">
          {/* Premium atmospheric glow */}
          <div className="absolute inset-0 bg-[conic-gradient(at_80%_20%,rgba(71,167,106,0.15),rgba(62,138,193,0.15),rgba(157,78,221,0.15),rgba(255,97,239,0.2),rgba(71,167,106,0.15))] opacity-70"></div>
          
          {/* Sophisticated lighting effects */}
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_25%,rgba(71,167,106,0.3)_0%,transparent_45%)]"></div>
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_80%_60%,rgba(157,78,221,0.35)_0%,transparent_45%)]"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_100%,rgba(62,138,193,0.25)_0%,transparent_40%)]"></div>
          
          {/* Luxury floating orbs */}
          <div className="absolute top-[15%] left-[15%] w-[30vw] max-w-[500px] aspect-square rounded-full bg-gradient-to-br from-aurora-blue/25 via-aurora-purple/15 to-transparent blur-[80px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[25vw] max-w-[400px] aspect-square rounded-full bg-gradient-to-tl from-aurora-purple/20 via-aurora-violet/15 to-transparent blur-[70px] animate-float-delayed"></div>
          
          {/* Optimized shimmer and grain texture */}
          {/* Premium grain texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7nKrJ9kjZpwh1jWBpzLWEs2t6+dRBMAH1e0KzGij8gC8JsrLCXQAAAAAElFTkSuQmCC')]"></div>
          
          {/* Elegant grid overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] scale-y-[1.2] origin-top"></div>
          
          {/* Light rays */}
          <div className="absolute top-0 left-[35%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-60 blur-[0.5px]"></div>
          <div className="absolute top-0 right-[45%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-white/25 to-transparent opacity-50 blur-[0.5px]"></div>
          
          {/* Dynamic light sweep */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[15deg] animate-sweep-slow"></div>
          </div>
          
          {/* Premium vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(5,2,26,0.5)_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20" data-aos="fade-up" data-aos-duration="800">
              <div className="text-center">
                <div className="inline-block mb-4 bg-gradient-to-r from-white/30 to-white/10 px-6 py-2 rounded-full text-white backdrop-blur-sm border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  Start Your Journey
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
                  Ready to Start Your Finnish Journey?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our community of Finnish language learners and take the first step towards fluency.
            </p>
                
                {/* Luxury Primary Button */}
                <Link 
                  href="/classes" 
                  className="relative overflow-hidden group inline-flex items-center px-12 py-5 bg-white text-aurora-night rounded-xl font-medium shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(71,167,106,0.3)] transition-all duration-500 hover:-translate-y-1"
                  data-aos="fade-up" 
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  {/* Elegant background glow effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-green/30 via-aurora-blue/30 to-aurora-violet/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  
                  {/* Inner highlight */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent via-white/10 to-white/5"></span>
                  
                  {/* Premium border glow */}
                  <span className="absolute inset-0 rounded-xl border border-white/50 group-hover:border-white/80 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-700"></span>
                  
                  {/* Icon with gold accent */}
                  <span className="relative z-10 mr-2 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-aurora-green to-aurora-blue text-white transform group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  
                  {/* Text with hover animation */}
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-500 text-aurora-night font-semibold ml-1">Get Started Today</span>
                  
                  {/* Subtle shine effect on hover */}
                  <span className="absolute inset-0 w-[200%] -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 