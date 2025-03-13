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
      <Head>
        <title>Privacy Policy | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Learn about how Finlern collects, uses, and protects your personal information." />
      </Head>

      {/* Hero Section */}
      <section className="bg-aurora-blue py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-100">
              Last Updated: February 25, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-p:text-gray-700 prose-li:text-gray-700">
            <p className="text-gray-700">
              Welcome to Finlern, an educational chat application designed to facilitate communication and resource sharing among students, teachers, and administrators. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use Finlern. Your privacy is important to us, and we are committed to safeguarding your personal data in compliance with the General Data Protection Regulation (GDPR), the Finnish Data Protection Act, and other applicable laws.
            </p>

            <p className="text-gray-700">
              By using Finlern, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the App.
            </p>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">1. Who We Are</h2>
            <p className="text-gray-700">
              Finlern is developed and operated by Hamid Reza Ghorbani, located at Valkeakoski 37600, Pirkanmaa, Finland. As the data controller, we are responsible for processing your personal data. For questions or concerns about this Privacy Policy or your data, please contact us at:
            </p>
            <ul className="list-disc text-cyan-800 pl-6 mb-6">
              <li>Email: info@finlern.fi</li>
              <li>Address: Valkeakoski 37600, Pirkanmaa, Finland</li>
            </ul>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700">
              We collect the following types of information when you use Finlern:
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">a. Information You Provide</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li><span className="font-medium">Account Information:</span> When you sign up, we collect your email address (used as your unique identifier) and, optionally, your name for your user profile.</li>
              <li><span className="font-medium">Chat Content:</span> Messages you send, including text and uploaded files (e.g., images, documents up to 100 MB), are stored to enable communication within the App.</li>
              <li><span className="font-medium">Uploaded Files:</span> Files you share in chats, such as PDFs or images, are encrypted and stored temporarily before being uploaded to our servers.</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">b. Information Collected Automatically</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li><span className="font-medium">Device Information:</span> We may collect device-specific data, such as your device type, operating system version, and unique device identifiers (e.g., Android ID), to ensure compatibility and troubleshoot issues.</li>
              <li><span className="font-medium">Usage Data:</span> We collect information about how you use Finlern, including timestamps of messages, login/logout times, and file transfer activities, to improve the App's functionality.</li>
              <li><span className="font-medium">FCM Tokens:</span> We generate and store Firebase Cloud Messaging (FCM) tokens to send you notifications about new messages or updates.</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">c. Information Processed via Third-Party Services</h3>
            <p className="text-gray-700">
              Finlern uses Firebase services provided by Google LLC. These services process certain data on our behalf:
            </p>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li><span className="font-medium">Authentication:</span> Firebase Authentication uses your email address to verify your identity and manage logins.</li>
              <li><span className="font-medium">Firestore:</span> Firebase Firestore stores your chat messages, user profiles, and metadata (e.g., file names, timestamps).</li>
              <li><span className="font-medium">Storage:</span> Firebase Storage holds encrypted files you upload, with metadata like file names and encryption keys.</li>
            </ul>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your information for the following purposes, based on legal grounds under the GDPR:
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">a. To Provide and Operate the App (Contractual Necessity, GDPR Art. 6(1)(b))</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li>Authenticate your account and allow login.</li>
              <li>Facilitate chat functionality, including sending and receiving messages and files.</li>
              <li>Store and deliver uploaded files securely (encrypted) to intended recipients.</li>
              <li>Send push notifications about new messages or updates via FCM.</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">b. To Improve and Maintain the App (Legitimate Interest, GDPR Art. 6(1)(f))</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li>Analyze usage patterns to enhance features and performance.</li>
              <li>Troubleshoot technical issues and ensure compatibility with your device.</li>
              <li>Monitor file transfer activities to prevent abuse (e.g., oversized files).</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">c. To Comply with Legal Obligations (Legal Obligation, GDPR Art. 6(1)(c))</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li>Retain data as required by Finnish and EU laws (e.g., for tax or auditing purposes).</li>
              <li>Respond to lawful requests from authorities, such as data subject access requests.</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">d. With Your Consent (Consent, GDPR Art. 6(1)(a))</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li>If we introduce optional features (e.g., analytics), we'll ask for your explicit consent before processing additional data.</li>
            </ul>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">4. Data Retention</h2>
            <ul className="list-disc text-gray-700 pl-6 mb-6">
              <li><span className="font-medium">Account Information:</span> Retained as long as your account is active. If you delete your account, we remove your email and profile data within 30 days, unless required by law to retain it longer.</li>
              <li><span className="font-medium">Chat Content:</span> Messages and files are stored indefinitely unless you or an authorized admin/teacher delete them. Deleted data is removed from our servers within 30 days.</li>
              <li><span className="font-medium">Temporary Files:</span> Encrypted files in transit (e.g., in cache) are deleted immediately after successful upload/download.</li>
              <li><span className="font-medium">Usage Data:</span> Retained for up to 12 months for analytics, then anonymized or deleted.</li>
            </ul>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">5. How We Share Your Information</h2>
            <p className="text-gray-700">
              We do not sell your personal data. We share it only in these cases:
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">a. With Service Providers</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li><span className="font-medium">Google Firebase:</span> Processes data for authentication, storage, and messaging. Google adheres to GDPR via Data Processing Agreements (see Google's <a href="https://firebase.google.com/terms/data-processing-terms" className="text-aurora-blue hover:underline">privacy terms</a>).</li>
              <li><span className="font-medium">Hosting Providers:</span> Our servers may use third-party hosting services in the EU, bound by GDPR-compliant contracts.</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">b. Within the App</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li><span className="font-medium">Chat Participants:</span> Your messages and files are shared with other participants in the chat (e.g., students, teachers).</li>
              <li><span className="font-medium">Admins/Teachers:</span> Authorized admins or teachers (identified by email) may access chats to moderate content or manage groups.</li>
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mt-6 mb-3">c. Legal Requirements</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li>We may disclose data if required by law, such as in response to a court order or regulatory request in Finland or the EU.</li>
            </ul>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">6. Data Security</h2>
            <p className="text-gray-700">
              We take your data security seriously:
            </p>
            <ul className="list-disc text-gray-700 pl-6 mb-6">
              <li><span className="font-medium">Encryption:</span> Files are encrypted using AES-256 with unique keys and initialization vectors (IVs) before upload. Keys and IVs are stored securely in Firebase Storage metadata, accessible only to chat participants.</li>
              <li><span className="font-medium">Authentication:</span> Firebase Authentication uses secure email-based login.</li>
              <li><span className="font-medium">Transmission:</span> Data is transmitted over HTTPS, ensuring end-to-end encryption between your device and our servers.</li>
              <li><span className="font-medium">Access Controls:</span> Only authorized users (chat participants, admins, teachers) can access specific data, enforced by Firebase security rules.</li>
            </ul>

            <p className="text-gray-700">
              Despite these measures, no system is 100% secure. If a breach occurs, we'll notify you and the Finnish Data Protection Ombudsman within 72 hours, as required by GDPR.
            </p>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">7. Your Rights Under GDPR</h2>
            <p className="text-gray-700">
              As an EU resident, you have the following rights:
            </p>
            <ul className="list-disc text-gray-700 pl-6 mb-6">
              <li><span className="font-medium">Access (Art. 15):</span> Request a copy of your personal data.</li>
              <li><span className="font-medium">Rectification (Art. 16):</span> Correct inaccurate data.</li>
              <li><span className="font-medium">Erasure (Art. 17):</span> Request deletion of your data ("right to be forgotten"), subject to legal retention obligations.</li>
              <li><span className="font-medium">Restriction (Art. 18):</span> Limit how we process your data.</li>
              <li><span className="font-medium">Data Portability (Art. 20):</span> Receive your data in a machine-readable format.</li>
              <li><span className="font-medium">Objection (Art. 21):</span> Object to processing based on legitimate interests.</li>
              <li><span className="font-medium">Withdraw Consent (Art. 7):</span> Revoke consent for optional features at any time.</li>
            </ul>

            <p className="text-gray-700">
              To exercise these rights, contact us at info@finlern.fi. We'll respond within one month, extendable to three months for complex requests. If unsatisfied, you may lodge a complaint with the Finnish Data Protection Ombudsman (<a href="https://www.tietosuoja.fi" className="text-aurora-blue hover:underline">www.tietosuoja.fi</a>).
            </p>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700">
              Finlern uses Firebase, hosted by Google, which may process data in the EU or US. Google complies with GDPR through Standard Contractual Clauses (SCCs) and additional safeguards. We ensure all transfers meet EU adequacy standards.
            </p>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              Finlern is intended for educational use and may be used by individuals under 16 (e.g., students). If users are under 16, we process their data only with verifiable parental consent, as required by GDPR (Art. 8). Teachers or admins must ensure consent is obtained where applicable.
            </p>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this policy to reflect changes in our practices or legal requirements. We'll notify you via email or in-app notice at least 30 days before significant changes take effect. The latest version is always available in the App.
            </p>

            <h2 className="text-2xl font-bold text-aurora-blue mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-700">
              For questions, requests, or feedback about this Privacy Policy, please reach out:
            </p>
            <ul className="list-disc text-cyan-800 pl-6 mb-6">
              <li>Email: info@finlern.fi</li>
              <li>Address: Valkeakoski 37600, Pirkanmaa, Finland</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
} 