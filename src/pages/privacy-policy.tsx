import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import SEO from '@/components/SEO'

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function PrivacyPolicy() {
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
      <SEO 
        title="Privacy Policy | Finlern"
        description="Learn about how Finlern collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        canonical="https://finlern.vercel.app/privacy-policy"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-aurora-night to-aurora-purple overflow-hidden">
        {/* Replace the image background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-aurora-snow/80">
              Last updated: March 26, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to Finlern, an educational platform based in Finland. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR), the Finnish Data Protection Act (1050/2018), and other applicable Finnish and EU privacy laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this privacy policy carefully. By accessing or using our website, you agree to be bound by the terms and conditions of this policy.
              </p>
            </div>

            {/* Data Controller Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Data Controller Information
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The data controller for your personal data is:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>Finlern</p>
                  <p>Valkeakoski 37600</p>
                  <p>Pirkanmaa, Finland</p>
                  <p>Email: info@finlern.fi</p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We are registered with the Finnish Data Protection Authority (Tietosuojavaltuutetun toimisto) and comply with all applicable Finnish and EU data protection laws.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Payment information</li>
                    <li>Communication preferences</li>
                    <li>Educational background and progress</li>
                    <li>Language learning preferences and goals</li>
                    <li>Course enrollment and attendance records</li>
                  </ul>
                </div>

                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Time spent on website</li>
                    <li>Learning progress and assessment results</li>
                    <li>Interaction with learning materials</li>
                    <li>Communication logs with teachers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Legal Basis for Processing
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We process your personal data based on the following legal grounds under GDPR Article 6:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Contract performance (Article 6(1)(b)) - For providing our educational services</li>
                  <li>Legal obligation (Article 6(1)(c)) - To comply with Finnish educational and tax laws</li>
                  <li>Legitimate interests (Article 6(1)(f)) - For improving our services and preventing fraud</li>
                  <li>Consent (Article 6(1)(a)) - For marketing communications and optional features</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Primary Uses</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Provide and maintain our educational services</li>
                    <li>Process your payments and maintain financial records</li>
                    <li>Send you important updates about courses and services</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Track and report your learning progress</li>
                    <li>Issue certificates and educational documentation</li>
                  </ul>
                </div>

                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Secondary Uses</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Improve our website and learning platform</li>
                    <li>Analyze usage patterns for service enhancement</li>
                    <li>Prevent fraud and ensure platform security</li>
                    <li>Comply with Finnish educational regulations</li>
                    <li>Generate anonymous statistics for reporting</li>
                    <li>Conduct research on learning effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Information Sharing
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Data Security
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage and transmission</li>
                </ul>
              </div>
            </div>

            {/* Your Rights Under GDPR */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Your Rights Under GDPR
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a data subject under GDPR, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Right to access (Article 15) - Request a copy of your personal data</li>
                  <li>Right to rectification (Article 16) - Correct inaccurate data</li>
                  <li>Right to erasure (Article 17) - Request deletion of your data</li>
                  <li>Right to restrict processing (Article 18) - Limit how we use your data</li>
                  <li>Right to data portability (Article 20) - Receive your data in a machine-readable format</li>
                  <li>Right to object (Article 21) - Object to processing based on legitimate interests</li>
                  <li>Right to withdraw consent (Article 7) - Revoke consent at any time</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at info@finlern.fi. We will respond within one month, as required by GDPR. If you are not satisfied with our response, you have the right to lodge a complaint with the Finnish Data Protection Authority (Tietosuojavaltuutetun toimisto).
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Data Retention
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Account Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Retained as long as your account is active. If you delete your account, we remove your email and profile data within 30 days, unless required by Finnish law to retain it longer (e.g., for tax purposes).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Educational Records</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Course completion records, certificates, and educational documentation are retained for 50 years as required by Finnish educational regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Financial Records</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Payment information and financial records are retained for 6 years as required by Finnish accounting laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Usage Data</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Retained for up to 12 months for analytics, then anonymized or deleted in accordance with Finnish data protection guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                International Data Transfers
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finlern uses Firebase, hosted by Google, which may process data in the EU or US. We ensure compliance with GDPR requirements for international data transfers through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Standard Contractual Clauses (SCCs) for transfers to third countries</li>
                  <li>Additional safeguards as required by Finnish data protection laws</li>
                  <li>Regular assessment of third-party data processors</li>
                  <li>Implementation of appropriate security measures</li>
                </ul>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Children's Privacy
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finlern is intended for educational use and may be used by individuals under 16. We comply with GDPR Article 8 and Finnish data protection laws regarding children's data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>We process data of users under 16 only with verifiable parental consent</li>
                  <li>Teachers or admins must ensure proper consent is obtained</li>
                  <li>We implement additional safeguards for children's data</li>
                  <li>We provide clear information about data processing to both children and parents</li>
                </ul>
              </div>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Changes to This Privacy Policy
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy to reflect changes in our practices or legal requirements. We'll notify you via email at least 30 days before significant changes take effect. Any changes will comply with Finnish data protection laws and GDPR requirements.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-aurora-blue/10 to-aurora-purple/10 rounded-lg p-8 border border-aurora-blue/20">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple transition-colors duration-300">
                    info@finlern.fi
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">
                    Valkeakoski 37600, Pirkanmaa, Finland
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 mb-2">
                    For data protection inquiries, you can also contact the Finnish Data Protection Authority:
                  </p>
                  <a 
                    href="https://tietosuoja.fi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-aurora-blue hover:text-aurora-purple transition-colors duration-300"
                  >
                    Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 