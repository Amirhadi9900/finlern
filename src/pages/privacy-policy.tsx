import React, { useEffect } from 'react'
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
        noindex
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-aurora-night to-aurora-purple overflow-hidden pt-20">
        {/* Replace the image background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up" data-aos-duration="800">
              Privacy Policy
            </h1>
            <p className="text-lg text-aurora-snow/80" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Last updated: November 27, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to Finlern, a comprehensive educational and integration services platform based in Finland. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (finlern.vercel.app) or use our services including Finnish language courses, English courses, violin lessons, cultural integration programs, relocation assistance, and professional networking events. We are committed to protecting your privacy and ensuring full compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR), the Finnish Data Protection Act (1050/2018), the Finnish Act on the Protection of Privacy in Electronic Communications (917/2014), and all applicable Finnish and EU privacy laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this privacy policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of this policy. If you do not agree with these terms, please discontinue use of our services immediately.
              </p>
            </div>

            {/* Data Controller Information */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Data Controller Information
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The data controller for your personal data is:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Finlern</strong></p>
                  <p>Registered Office: Tietotie 1, Häme University of Applied Sciences</p>
                  <p>Valkeakoski 37600</p>
                  <p>Pirkanmaa, Finland</p>
                  <p>Email: <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple transition-colors">info@finlern.fi</a></p>
                  <p>Website: <a href="https://finlern.vercel.app/" className="text-aurora-blue hover:text-aurora-purple transition-colors">https://finlern.vercel.app/</a></p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Finlern is registered with the Finnish Data Protection Authority (Tietosuojavaltuutetun toimisto) and maintains full compliance with GDPR, Finnish Data Protection Act (1050/2018), and all applicable Finnish and EU data protection regulations. We implement industry-standard security measures and conduct regular compliance audits to safeguard your personal information.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Full name, contact information, and demographic details</li>
                    <li>Email address and phone number</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Communication preferences and language settings</li>
                    <li>Educational background, qualifications, and learning history</li>
                    <li>Language proficiency levels and learning goals</li>
                    <li>Course enrollment, attendance records, and progress tracking data</li>
                    <li>Assessment results, certificates, and educational achievements</li>
                    <li>Relocation assistance data (residency status, integration needs, employment goals)</li>
                    <li>Professional networking information and career objectives</li>
                    <li>Event participation records and community engagement data</li>
                    <li>Identity verification documents (when required by Finnish regulations)</li>
            </ul>
                </div>

                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Technical & Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and device identifiers</li>
                    <li>Browser type, version, and language settings</li>
                    <li>Operating system and device type</li>
                    <li>Pages visited, navigation paths, and referral sources</li>
                    <li>Time spent on website and interaction timestamps</li>
                    <li>Learning progress, completion rates, and assessment results</li>
                    <li>Interaction with learning materials and course content</li>
                    <li>Communication logs with teachers and support staff</li>
                    <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
                    <li>Session data and authentication logs</li>
                    <li>Error reports and technical diagnostics</li>
            </ul>
                </div>
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Legal Basis for Processing
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We process your personal data based on the following legal grounds under GDPR Article 6 and Finnish Data Protection Act:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Contract performance (Article 6(1)(b))</strong> - To provide educational services, language courses, violin lessons, relocation assistance, professional networking events, and all contracted services</li>
                  <li><strong>Legal obligation (Article 6(1)(c))</strong> - To comply with Finnish educational regulations, tax laws (accounting records retention), labor laws, and regulatory reporting requirements</li>
                  <li><strong>Legitimate interests (Article 6(1)(f))</strong> - For service improvement, platform security, fraud prevention, business analytics, quality assurance, and customer support optimization</li>
                  <li><strong>Consent (Article 6(1)(a))</strong> - For marketing communications, promotional emails, optional analytics, social media integration, and non-essential features (you may withdraw consent at any time)</li>
                  <li><strong>Vital interests (Article 6(1)(d))</strong> - In emergency situations affecting health or safety of data subjects</li>
            </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Primary Uses</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Deliver and maintain our comprehensive educational services (Finnish courses, English courses, violin lessons)</li>
                    <li>Provide cultural integration support and relocation assistance services</li>
                    <li>Organize and manage professional networking events and conversation clubs</li>
                    <li>Process payments securely and maintain financial records per Finnish accounting laws</li>
                    <li>Send essential updates about enrolled courses, scheduled events, and service changes</li>
                    <li>Respond to inquiries, support requests, and provide customer assistance</li>
                    <li>Track, report, and communicate your learning progress and achievement milestones</li>
                    <li>Issue certificates, diplomas, and official educational documentation</li>
                    <li>Facilitate teacher-student communication and learning support</li>
                    <li>Manage account access, authentication, and platform security</li>
            </ul>
                </div>

                <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                  <h3 className="text-xl font-semibold text-aurora-blue mb-4">Secondary Uses</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Continuously improve our website, learning platform, and user experience</li>
                    <li>Analyze usage patterns, engagement metrics, and service effectiveness</li>
                    <li>Prevent fraud, unauthorized access, cyberattacks, and ensure robust platform security</li>
                    <li>Comply with Finnish educational, tax, accounting, and regulatory requirements</li>
                    <li>Generate anonymized statistics and aggregated reports for internal analysis</li>
                    <li>Conduct pedagogical research on learning effectiveness and student outcomes</li>
                    <li>Develop new courses, services, and integration programs tailored to user needs</li>
                    <li>Send marketing communications (with consent) about new courses and events</li>
                    <li>Evaluate teacher performance and maintain educational quality standards</li>
                    <li>Facilitate community building and professional networking opportunities</li>
            </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Information Sharing
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>We do not sell, rent, or trade your personal information to third parties under any circumstances.</strong> We may share your information only in the following limited situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Service Providers & Processors:</strong> Trusted third-party vendors who assist in operations (hosting, email delivery, analytics, customer support) under strict data processing agreements compliant with GDPR Article 28</li>
                  <li><strong>Payment Processors:</strong> Secure, PCI-DSS compliant payment service providers for transaction processing (we do not store full payment card details)</li>
                  <li><strong>Cloud Infrastructure:</strong> Google Firebase and Vercel for hosting, database management, and authentication services (with Standard Contractual Clauses for data transfers)</li>
                  <li><strong>Legal Authorities:</strong> Finnish law enforcement, courts, regulatory bodies, or tax authorities when legally required by court order, subpoena, or applicable Finnish/EU law</li>
                  <li><strong>Educational Partners:</strong> Accredited educational institutions or certification bodies (with your explicit consent) for credential verification or program partnerships</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred (you will be notified and can exercise your rights under GDPR)</li>
                  <li><strong>Emergency Situations:</strong> When necessary to protect vital interests, safety, or prevent illegal activities</li>
            </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All third-party data processors are contractually obligated to implement appropriate technical and organizational security measures and to process data only as instructed by Finlern.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Data Security
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement comprehensive, military-grade security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Encryption:</strong> TLS/SSL encryption for data in transit, AES-256 encryption for sensitive data at rest</li>
                  <li><strong>Access Controls:</strong> Role-based access control (RBAC), multi-factor authentication (MFA), and principle of least privilege</li>
                  <li><strong>Security Audits:</strong> Regular penetration testing, vulnerability assessments, and code security reviews</li>
                  <li><strong>Secure Infrastructure:</strong> Firewalls, intrusion detection systems (IDS), DDoS protection, and rate limiting</li>
                  <li><strong>Data Integrity:</strong> Input validation, sanitization, CSRF protection, and SQL injection prevention</li>
                  <li><strong>Authentication Security:</strong> Secure JWT token management, session expiration, and timing-attack resistant comparisons</li>
                  <li><strong>Bot Protection:</strong> Multi-layer honeypot system, CAPTCHA, and behavioral analysis for form submissions</li>
                  <li><strong>Monitoring:</strong> Real-time security monitoring, audit logging, and incident response procedures</li>
                  <li><strong>Staff Training:</strong> Regular security awareness training for all employees and contractors</li>
                  <li><strong>Backup & Recovery:</strong> Encrypted backups, disaster recovery plans, and business continuity procedures</li>
            </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  In the event of a data breach affecting your personal information, we will notify you and the Finnish Data Protection Authority within 72 hours as required by GDPR Article 33.
                </p>
              </div>
            </div>

            {/* Your Rights Under GDPR */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Your Rights Under GDPR
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a data subject under GDPR, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Right to access (Article 15)</strong> - Request a copy of all personal data we hold about you, including processing purposes and data recipients</li>
                  <li><strong>Right to rectification (Article 16)</strong> - Request correction of inaccurate or incomplete personal data</li>
                  <li><strong>Right to erasure/"Right to be forgotten" (Article 17)</strong> - Request deletion of your data when no longer necessary, consent withdrawn, or unlawfully processed (subject to legal retention obligations)</li>
                  <li><strong>Right to restrict processing (Article 18)</strong> - Request temporary limitation on how we use your data while verifying accuracy or addressing objections</li>
                  <li><strong>Right to data portability (Article 20)</strong> - Receive your data in a structured, commonly used, machine-readable format (CSV, JSON) and transfer it to another service provider</li>
                  <li><strong>Right to object (Article 21)</strong> - Object to processing based on legitimate interests or for direct marketing purposes (we will cease processing unless compelling legitimate grounds exist)</li>
                  <li><strong>Right to withdraw consent (Article 7(3))</strong> - Revoke consent at any time for consent-based processing (does not affect lawfulness of prior processing)</li>
                  <li><strong>Right not to be subject to automated decision-making (Article 22)</strong> - Request human review of decisions made solely by automated processing with legal or significant effects</li>
            </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple transition-colors">info@finlern.fi</a> with "GDPR Data Subject Request" in the subject line. We will respond within <strong>one month</strong> as required by GDPR Article 12(3), or within two months for complex requests (we will inform you of any extension). We may require identity verification to process your request. <strong>Exercising your rights is free of charge</strong>, unless requests are manifestly unfounded or excessive.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  If you are not satisfied with our response or believe we have violated your data protection rights, you have the right to lodge a complaint with the <strong>Finnish Data Protection Authority (Tietosuojavaltuutetun toimisto)</strong> at <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:text-aurora-purple transition-colors">tietosuoja.fi</a>, or with the supervisory authority in your EU member state.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Data Retention
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Account Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Retained for the duration of your account activity plus 30 days. Upon account deletion request, we remove your email and profile data within <strong>30 days</strong>, unless Finnish accounting laws (Kirjanpitolaki 1336/1997) or tax regulations require longer retention (up to 6 years for transaction-related data).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Educational Records</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Course completion records, certificates, diplomas, assessment results, and official educational documentation are retained for <strong>50 years</strong> as mandated by Finnish educational regulations and the Archives Act (Arkistolaki 831/1994). This ensures lifelong access to your credentials for employment, further education, or immigration purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Financial Records</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Payment transaction data, invoices, receipts, and financial records are retained for <strong>6 years</strong> as required by the Finnish Accounting Act (Kirjanpitolaki 1336/1997) and Tax Administration regulations. Payment card details are never stored; only transaction references are kept.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Usage & Technical Data</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Website analytics, log files, IP addresses, and usage patterns are retained for up to <strong>12 months</strong> for security monitoring and service improvement, then anonymized, aggregated, or permanently deleted in accordance with GDPR data minimization principles and Finnish data protection guidelines.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aurora-blue mb-3">Marketing & Communication Data</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you have consented to marketing communications, we retain your preferences until you withdraw consent or your account is inactive for <strong>3 years</strong>. You may unsubscribe at any time via email footer links or by contacting info@finlern.fi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                International Data Transfers
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finlern primarily processes data within the European Economic Area (EEA). However, some service providers (Google Firebase for authentication/database, Vercel for hosting) may process data in the United States or other third countries. We ensure full compliance with GDPR Chapter V requirements for international data transfers through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Standard Contractual Clauses (SCCs):</strong> EU Commission-approved SCCs (Decision 2021/914) for all transfers to third countries, including the US</li>
                  <li><strong>EU-US Data Privacy Framework:</strong> Partnering with providers certified under the EU-US Data Privacy Framework (DPF) where applicable</li>
                  <li><strong>Additional Safeguards:</strong> Encryption, pseudonymization, access controls, and contractual obligations beyond SCCs as required by CJEU Schrems II ruling</li>
                  <li><strong>Transfer Impact Assessments (TIAs):</strong> Regular evaluation of third countries' legal frameworks and surveillance laws affecting data protection</li>
                  <li><strong>Data Localization Preferences:</strong> Prioritizing EEA-based processing and storage where technically feasible</li>
                  <li><strong>Vendor Due Diligence:</strong> Ongoing assessment of third-party processors' compliance with GDPR and Finnish data protection laws</li>
                  <li><strong>Transparency:</strong> Maintaining updated records of cross-border data transfers as required by Finnish Data Protection Act Section 30</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You have the right to obtain information about the safeguards we have in place for international transfers by contacting info@finlern.fi.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Children's Privacy
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finlern provides educational services to learners of all ages, including children and teenagers. We take children's privacy extremely seriously and comply with GDPR Article 8, the Finnish Data Protection Act, and the Finnish Act on the Protection of Privacy in Electronic Communications regarding children's data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Age Verification:</strong> We process personal data of users under 16 years old only with verifiable parental or legal guardian consent</li>
                  <li><strong>Parental Consent:</strong> Parents/guardians must provide explicit consent via signed enrollment forms or verified electronic consent mechanisms</li>
                  <li><strong>Consent Validation:</strong> Teachers, administrators, and staff are trained to verify proper consent is obtained before processing minors' data</li>
                  <li><strong>Enhanced Safeguards:</strong> We implement additional technical and organizational security measures for children's personal information</li>
                  <li><strong>Transparent Communication:</strong> We provide age-appropriate, clear information about data processing to both children and parents/guardians</li>
                  <li><strong>Limited Collection:</strong> We collect only the minimum necessary data for educational purposes and do not use children's data for marketing</li>
                  <li><strong>Parental Rights:</strong> Parents/guardians can exercise all GDPR rights on behalf of their children, including access, rectification, and erasure requests</li>
                  <li><strong>No Third-Party Sharing:</strong> Children's data is never shared with third parties for commercial purposes</li>
            </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  If you believe we have inadvertently collected personal data from a child without proper consent, please contact us immediately at info@finlern.fi, and we will take prompt action to delete such information.
                </p>
              </div>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
                Changes to This Privacy Policy
              </h2>
              <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to update this Privacy Policy to reflect changes in our data processing practices, legal requirements, or service offerings. Any modifications will fully comply with GDPR, Finnish Data Protection Act (1050/2018), and all applicable Finnish and EU privacy regulations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Notification Process:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>For <strong>material changes</strong> affecting your rights or how we process personal data, we will notify you via email at least <strong>30 days</strong> before the changes take effect</li>
                  <li>We will display a prominent notice on our website homepage and within the platform</li>
                  <li>The "Last updated" date at the top of this policy will always reflect the most recent revision</li>
                  <li>Continued use of our services after the effective date constitutes acceptance of the updated policy</li>
                  <li>If you disagree with changes, you may terminate your account and request data deletion before the effective date</li>
            </ul>
                <p className="text-gray-700 leading-relaxed">
                  We recommend reviewing this Privacy Policy periodically to stay informed about how we protect your personal information. Previous versions of this policy are available upon request at info@finlern.fi.
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
                    Tietotie 1, Häme University of Applied Sciences<br />
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