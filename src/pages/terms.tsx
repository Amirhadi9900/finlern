import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function Terms() {
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

  return (
    <Layout>
      <Head>
        <title>Terms of Service | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Terms of Service for Finlern - Learn about our terms and conditions for using our Finnish language learning platform." />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-aurora-night text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern-dark.svg')] opacity-20"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Terms of Service
            </h1>
            <p 
              className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300"
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="100"
            >
              Learn about our terms and conditions for using our Finnish language learning platform.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-6 md:p-8 lg:p-10">
              
              <div className="prose prose-lg max-w-none">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Finlern website and services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
                
                <h2>2. Description of Service</h2>
                <p>
                  Finlern provides Finnish language learning services including online classes, educational resources, 
                  and cultural events. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
                
                <h2>3. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate and complete information. You are responsible 
                  for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
                
                <h2>4. User Conduct</h2>
                <p>
                  You agree not to use our services for any illegal or unauthorized purpose. You must not violate any laws 
                  in your jurisdiction or interfere with the use of our services by others.
                </p>
                
                <h2>5. Payment Terms</h2>
                <p>
                  Payment for our services must be made in accordance with the prices and terms displayed on our website. 
                  All payments are non-refundable unless otherwise specified in our refund policy.
                </p>
                
                <h2>6. Intellectual Property</h2>
                <p>
                  All content on the Finlern website, including text, graphics, logos, images, audio, and video, is the property 
                  of Finlern or its licensors and is protected by copyright and other intellectual property laws.
                </p>
                
                <h2>7. Limitation of Liability</h2>
                <p>
                  Finlern shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                  resulting from your use of or inability to use our services.
                </p>
                
                <h2>8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will provide notice of any significant changes 
                  by posting the new Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                </p>
                
                <h2>9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Finland, without regard to its conflict of law provisions.
                </p>
                
                <h2>10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at info@finlern.fi.
                </p>
                
                <p className="text-sm text-gray-500 mt-10">
                  Last updated: January 2024
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 