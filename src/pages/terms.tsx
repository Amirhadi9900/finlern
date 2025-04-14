import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Link from 'next/link'

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
        <title>Terms of Service | Finlern</title>
        <meta name="description" content="Terms of Service for Finlern - Finnish Language Learning Platform" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Updated header section */}
        <div className="bg-gray-900 relative overflow-hidden">
          {/* Replace SVG pattern with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
               data-aos="fade-up" 
               data-aos-duration="800" 
               data-aos-delay="100"
            >
              Please read these terms carefully before using Finlern's services
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Finlern's website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Finlern provides Finnish language learning services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Online Finnish language courses</li>
                <li>Interactive learning materials</li>
                <li>Practice exercises and assessments</li>
                <li>Progress tracking and certificates</li>
                <li>Community features and discussion forums</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any security breaches</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Course Materials and Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content provided through Finlern's services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Course materials and lessons</li>
                <li>Practice exercises and assessments</li>
                <li>Images, videos, and audio content</li>
                <li>Website design and layout</li>
              </ul>
              <p className="text-gray-700 mb-4">
                is the property of Finlern or its content creators and is protected by copyright laws. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Copy or reproduce any content without permission</li>
                <li>Share your account credentials with others</li>
                <li>Use the content for commercial purposes</li>
                <li>Modify or create derivative works</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All prices are in euros (€) unless otherwise stated</li>
                <li>Payments are processed securely through our payment providers</li>
                <li>Course fees are non-refundable unless required by law</li>
                <li>We reserve the right to modify prices with notice</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct</h2>
              <p className="text-gray-700 mb-4">
                Users must not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate others or provide false information</li>
                <li>Harass, abuse, or harm others</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend your account and access to our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>For violations of these terms</li>
                <li>For suspicious or fraudulent activity</li>
                <li>At our sole discretion, with or without cause</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Finlern shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes through our website or via email.
              </p>
            </section>

            <div className="mt-12 text-center" data-aos="fade-up" data-aos-duration="800">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-aurora-blue to-aurora-purple hover:from-aurora-purple hover:to-aurora-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
} 