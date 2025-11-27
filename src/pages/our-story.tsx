import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import SEO from '@/components/SEO'

const storyKeywords = [
  'Finnish life partner',
  'Finnish cultural integration',
  'Relocation partner in Finland',
  'Complete integration support',
  'Workplace etiquette Finland',
  'Professional networking Finland',
  'Finnish relocation service',
  'Consulting services in Finland',
]

const storyServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Finlern Relocation & Integration Partner',
  serviceType: [
    'Finnish language mastery',
    'Relocation consulting',
    'Cultural immersion programs',
    'Workplace etiquette coaching',
  ],
  provider: {
    '@type': 'Organization',
    name: 'Finlern',
    url: 'https://finlern.vercel.app/',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Finland',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Complete Integration Support',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Accommodation & Housing',
        description: 'Guided housing search and onboarding services for newcomers.',
      },
      {
        '@type': 'Offer',
        name: 'School Enrollment Support',
        description: 'Advisory services for selecting and registering children in Finnish schools.',
      },
      {
        '@type': 'Offer',
        name: 'Working Life Guidance',
        description: 'Career mentoring, networking, and professional Finnish language training.',
      },
    ],
  },
}

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

// Define team member detailed info type
interface TeamMemberDetail {
  id: string;
  name: string;
  bio: string;
  linkedin?: string; // Optional LinkedIn profile URL
}

export default function OurStory() {
  // State to track which team member popup is open
  const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null);
  
  // Reference for the "Our Beginning" section
  const beginningRef = useRef<HTMLDivElement>(null);

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

  // Function to scroll to Our Beginning section
  const scrollToBeginning = () => {
    if (beginningRef.current) {
      beginningRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Detailed information about team members
  const teamMembersDetails: TeamMemberDetail[] = [
    {
      id: "reeta",
      name: "Reeta",
      bio: "With over 20 years of experience in language teaching, Reeta brings a deep understanding of effective, student-centered learning to Finlern's online Finnish language courses. Her innovative methods and dedication to practical, real-life language use are key to the success of our programs. We are proud to have Reeta as part of our team through a valuable collaboration with NPE Kulplan Oy, whose partnership helps us ensure high-quality teaching for every learner."
    },
    {
      id: "amirhadi",
      name: "Amirhadi Borjian",
      bio: "Amirhadi Borjian is a talented software developer at Finlern, where he mixes superb technical skills with a knack for collaboration. His problem solving prowess and proactive attitude shine through in how he refines Finlern's digital tools, making them intuitive and efficient for users. Curious and creative, Amirhadi's ideas push the company forward in the fast-evolving education tech world. His teamwork and fresh perspective play a remarkable role in boosting Finlern's growth and keeping users happy.",
      linkedin: "https://www.linkedin.com/in/amirhadi-borjian-yazdi-software-developer/"
    },
    {
      id: "hamid",
      name: "Hamid Reza Ghorbani",
      bio: "Hamid Reza Ghorbani is the creative force behind Finlern Oy. Armed with a degree in International Business, he's a pro at sales, team-leading, and connecting people. Through Finlern, he's building smart, impactful learning solutions and dreaming big—think skill-boosting courses beyond just languages. He's also hosted a ton of events in Finland to sharpen speaking skills and celebrate different cultures. Oh, and when he's not running the show, he's a mean classical violinist!",
      linkedin: "https://www.linkedin.com/in/hamid-reza-ghorbani-salesassistant"
    },
    {
      id: "saghar",
      name: "Saghar Kazemi",
      bio: "Saghar Kazemi is an architect with over 15 years of designing and building under her belt. Right now, she's studying International Business at HAMK in Finland. At Finlern, she's rocking the marketing team with her design and graphic art skills. Her architecture chops, creative spark, and business smarts make her a genius at mixing stunning visuals with clever marketing ideas.",
      linkedin: "https://linkedin.com/in/saghar-kazemi-6b7516177"
    },
    {
      id: "soodabeh",
      name: "Soodabeh Sadeghi Mihan",
      bio: "Soodabeh Sadeghi Mihan brings over 23 years of event-planning and communication magic to the table. With a Teaching Diploma and a Bachelor's in Translation Studies from Iran National Public University, she kicked off as an English teacher in Tehran before spending 18 years at Ivan Sepid Art Gallery, organizing exhibitions and cultural gigs that linked artists and communities. Now at HAMK studying International Business and working at Finlern, she's all about running cross-cultural events and global networks. She's obsessed with using language and culture to bring people together.",
      linkedin: "https://www.linkedin.com/in/soodabeh-sadeghi-mihan-9273852b4"
    }
  ];

  const teamButtonClasses =
    "mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group";

  // Function to open a team member's popup
  const openTeamMemberPopup = (memberId: string) => {
    setActiveTeamMember(memberId);
    // Prevent body scrolling when popup is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  // Function to close the popup
  const closeTeamMemberPopup = () => {
    setActiveTeamMember(null);
    // Re-enable body scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };

  // Get the active team member details
  const getActiveMemberDetails = () => {
    return teamMembersDetails.find(member => member.id === activeTeamMember);
  };

  return (
    <Layout>
      <SEO
        title="Our Story"
        description="Get to know Finlern’s mission to deliver Finnish language mastery, relocation consulting, cultural immersion, and professional networking for internationals in Finland."
        canonical="https://finlern.vercel.app/our-story"
        keywords={storyKeywords}
        structuredData={storyServiceSchema}
      />

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background with Aurora Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-aurora-night">
          {/* Animated floating shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-aurora-green/15 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-aurora-blue/20 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          {/* Mesh overlay */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-white font-medium" data-aos="fade-up" data-aos-duration="800">
              Our Journey
            </div>
            <h1 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Story
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              How Finlern was born and our mission to share the beauty of the Finnish language and culture with the world.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex justify-center"
            >
              <button 
                onClick={scrollToBeginning}
                className="px-8 py-3 bg-white text-aurora-blue rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
              >
                <span>Read Our Story</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beginning - Enhanced Further */}
      <section ref={beginningRef} className="py-24 md:py-32 relative">
        {/* Clean, minimal background */}
        <div className="absolute inset-0 bg-white"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Content Side - Left */}
              <div className="order-2 lg:order-1" data-aos="fade-up" data-aos-duration="1000">
                {/* Badge */}
                <div className="inline-flex items-center mb-8">
                  <div className="w-2 h-2 bg-aurora-blue rounded-full mr-3"></div>
                  <span className="text-sm font-medium tracking-wider uppercase text-gray-600 letterspacing-widest">Where We Started</span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-[0.9]">
                  Our <span className="font-bold bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-blue bg-clip-text text-transparent">Beginning</span>
                </h2>
                
                {/* Elegant divider */}
                <div className="flex items-center mb-10">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-aurora-blue to-aurora-purple"></div>
                  <div className="w-2 h-2 bg-aurora-blue rounded-full mx-4"></div>
                  <div className="w-8 h-[1px] bg-gradient-to-r from-aurora-purple to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-gray-700 font-light">
                    Finlern Oy was founded in 2024 by Hamid Reza Ghorbani. Finlern is more than just a language school! It's a labor of love, built from passion, dedication, and the belief that language can change lives.
                  </p>
                  
                  <p className="text-xl leading-relaxed text-gray-700 font-light">
                    Our journey started with a dream: to help you find your place in Finland through the power of language. We poured our hearts into Finlern, crafting it with care, patience, and the deep desire 
                    to make learning Finnish not just easier, but truly meaningful. Every lesson, every interaction, and every student's progress fills us with pride because we know that we are not just teaching words;
                    we are opening doors to new opportunities, friendships, and a brighter future.
                  </p>
                  
                  {/* Quote Block */}
                  <div className="relative my-12">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full"></div>
                    <div className="pl-8">
                      <p className="text-xl leading-relaxed text-gray-700 font-light italic">
                      The love we have given to Finlern is the same love that Finlern now gives to every student. We understand the struggles, the small victories, and the joy of finally expressing yourself in a new language.
                      That's why we don't just teach; we support, encourage, and walk alongside our students in their journey.
                    </p>
                  </div>
                  </div>
                  
                  <p className="text-xl leading-relaxed text-gray-700 font-light">
                    At Finlern, you're not just learning Finnish. You're becoming part of a story. A story filled with growth, belonging, and endless possibilities.
                  </p>
            </div>
              </div>
              
              {/* Visual Side - Right */}
              <div className="order-1 lg:order-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="relative max-w-lg mx-auto lg:max-w-none">
                  
                  {/* Main Image Container */}
                  <div className="relative group">
                    {/* Image */}
                    <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
                        <Image 
                          src="/images/our-story-founder.jpg" 
                          alt="Finlern Founder" 
                        width={800} 
                        height={1000} 
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                          style={{ objectFit: 'cover' }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/placeholder-avatar.png";
                            target.onerror = null;
                          }}
                        />
                      </div>
                      
                    {/* Floating Info Card */}
                    <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-sm">
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Our Founder's Vision</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Hamid's innovative approach to Finnish language education forms the foundation of Finlern's methodology.
                        </p>
                        
                      {/* Author */}
                      <div className="flex items-center pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">HG</span>
                          </div>
                          <div>
                          <p className="font-semibold text-gray-900 text-sm">Hamid Reza Ghorbani</p>
                          <p className="text-aurora-blue text-xs">Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                  
                    {/* Minimal decorative elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-aurora-blue/20 rounded-full"></div>
                    <div className="absolute top-1/3 -right-4 w-6 h-6 bg-aurora-purple/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Centered Call-to-action */}
              <div className="order-3 col-span-1 lg:col-span-2 mt-12 flex justify-center">
                <div className="w-full max-w-3xl p-8 bg-gradient-to-r from-aurora-blue/5 via-aurora-purple/5 to-aurora-blue/5 rounded-2xl border border-aurora-blue/10 text-center shadow-lg/30 group">
                  <p className="text-2xl font-bold text-aurora-blue leading-relaxed soft-blink-text lux-hover-text inline-block">
                    Welcome to Finlern... Your new beginning!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
        {/* Background with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-green/10 text-aurora-green">
                What Drives Us
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Our Mission
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-green to-aurora-blue mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-xl text-gray-700 leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              We believe that language learning should be accessible, engaging, and effective for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Mission Card 1 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-blue/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-blue/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Accessible Learning</h3>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  We make Finnish language education accessible to everyone, regardless of location or background.
                </p>
              </div>
            </div>

            {/* Mission Card 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-green/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-green/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Community-Focused</h3>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  We foster a supportive community where learners can practice and grow together.
                </p>
              </div>
            </div>

            {/* Mission Card 3 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-purple/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-purple/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Innovative Methods</h3>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  We continuously develop innovative teaching methods that make learning Finnish enjoyable and effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple">
                The People Behind Finlern
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Meet Our Team
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-purple to-aurora-blue mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Let's meet the people who make Finlern possible!  
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Team Member 1 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
              <div className="p-8 text-center flex flex-col flex-1">
                <div className="relative w-40 h-40 mx-auto mb-6 group">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/30 to-aurora-purple/30 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-all duration-700"></div>
                  
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white p-1">
                    <div className="absolute inset-0 rounded-full border-2 border-aurora-blue/50 animate-[spin_20s_linear_infinite_reverse]">
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-aurora-blue rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/placeholder-avatar.png"
                      alt="Reeta"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-avatar.png";
                        target.onerror = null;
                      }}
                    />
                    
                    {/* Overlay shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reeta</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 text-purple-900 rounded-full text-sm font-medium inline-block mb-4 border border-aurora-green/10">
                Head Teacher
              </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                With 20+ years of language teaching experience, Reeta's innovative approach to Finnish language education forms the foundation of Finlern's online courses.
                </p>
                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => openTeamMemberPopup('reeta')}
                    className={teamButtonClasses}
                    aria-label="Learn more about Reeta"
                  >
                    <span className="flex items-center justify-center">
                      <span>Here you can know me better!</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8 text-center flex flex-col flex-1">
                <div className="relative w-40 h-40 mx-auto mb-6 group">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-green/30 to-aurora-blue/30 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-all duration-700"></div>
                  
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white p-1">
                    <div className="absolute inset-0 rounded-full border-2 border-aurora-green/50 animate-[spin_25s_linear_infinite]">
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-aurora-green rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/Hamidreza-Ghorbani.png"
                      alt="Hamid Reza Ghorbani"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-avatar.png";
                        target.onerror = null;
                      }}
                    />
                    
                    {/* Overlay shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hamid Reza Ghorbani</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 text-purple-900 rounded-full text-sm font-medium inline-block mb-4 border border-aurora-green/10">
                  CEO & Founder
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                Hamid Reza Ghorbani is the founder and leader of Finlern Oy, where he leverages his leadership and management skills to ensure the organization operates smoothly.
              </p>
              <div className="mt-auto pt-6">
                <button 
                  onClick={() => openTeamMemberPopup('hamid')}
                  className={teamButtonClasses}
                  aria-label="Learn more about Hamid Reza Ghorbani"
                >
                  <span className="flex items-center justify-center">
                    <span>Here you can know me better!</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
            
            {/* Team Member 3 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8 text-center flex flex-col flex-1">
                <div className="relative w-40 h-40 mx-auto mb-6 group">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-green/30 to-aurora-blue/30 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-all duration-700"></div>
                  
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white p-1">
                    <div className="absolute inset-0 rounded-full border-2 border-aurora-green/50 animate-[spin_25s_linear_infinite]">
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-aurora-green rounded-full transform -translate-x-1/2"></div>
        </div>
          </div>

                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/Amirhadi-Borjian.png"
                      alt="Amirhadi Borjian"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-avatar.png";
                        target.onerror = null;
                      }}
                    />
                    
                    {/* Overlay shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amirhadi Borjian</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 text-purple-900 rounded-full text-sm font-medium inline-block mb-4 border border-aurora-green/10">
                  ICT & Co-founder
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Amirhadi is a dedicated ICT specialist who fosters and maintains the strong presence of Finlern in the digital world, especially this website! <br /> :) <br />          
                </p>
                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => openTeamMemberPopup('amirhadi')}
                    className={teamButtonClasses}
                    aria-label="Learn more about Amirhadi Borjian"
                  >
                    <span className="flex items-center justify-center">
                      <span>Here you can know me better!</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 4 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-night w-full"></div>
              <div className="p-8 text-center flex flex-col flex-1">
                <div className="relative w-40 h-40 mx-auto mb-6 group">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/30 to-aurora-blue/30 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-all duration-700"></div>
                  
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white p-1">
                    <div className="absolute inset-0 rounded-full border-2 border-aurora-purple/50 animate-[spin_30s_linear_infinite_reverse]">
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-aurora-purple rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/Saghar-Kazemi.jpg"
                      alt="Saghar Kazemi"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-avatar.png";
                        target.onerror = null;
                      }}
                    />
                    
                    {/* Overlay shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Saghar Kazemi</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-purple/20 to-aurora-blue/20 text-purple-900 rounded-full text-sm font-medium inline-block mb-4 border border-aurora-purple/10">
                  Graphic Designer & Social Media Specialist
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Saghar is an experienced graphic designer and social media specialist who designs all the glamorous visual content for Finlern on different social media platforms.
                </p>
                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => openTeamMemberPopup('saghar')}
                    className={teamButtonClasses}
                    aria-label="Learn more about Saghar Kazemi"
                  >
                    <span className="flex items-center justify-center">
                      <span>Here you can know me better!</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 5 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-teal to-aurora-green w-full"></div>
              <div className="p-8 text-center flex flex-col flex-1">
                <div className="relative w-40 h-40 mx-auto mb-6 group">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-teal/30 to-aurora-green/30 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-all duration-700"></div>
                  
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white p-1">
                    <div className="absolute inset-0 rounded-full border-2 border-aurora-teal/50 animate-[spin_28s_linear_infinite]">
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-aurora-teal rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/Sudabeh-Sadeghi-Mihan.JPG"
                      alt="Soodabeh Sadeghi Mihan"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-avatar.png";
                        target.onerror = null;
                      }}
                    />
                    
                    {/* Overlay shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Soodabeh Sadeghi Mihan</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-teal/20 to-aurora-green/20 text-purple-900 rounded-full text-sm font-medium inline-block mb-4 border border-aurora-teal/10">
                  Event Organizer & Communication Specialist
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Soodabeh is a professional event organizer and communication specialist who organizes all the events and keeps the communication lines open between Finlern and its students.
                </p>
                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => openTeamMemberPopup('soodabeh')}
                    className={teamButtonClasses}
                    aria-label="Learn more about Soodabeh Sadeghi Mihan"
                  >
                    <span className="flex items-center justify-center">
                      <span>Here you can know me better!</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Canvas Section - ELEGANT VERSION */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Simple Static Background Effects */}
        <div className="absolute inset-0">
          {/* Static gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20"></div>
          
          {/* Static grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <style jsx>{`
          :root {
            --aurora-blue: #3E8AC1;
            --aurora-purple: #6650a4;
            --aurora-green: #47A76A;
            --aurora-night: #05021A;
            --finnish-blue: #002F6C;
          }
          
          .bmc-container {
            max-width: 1500px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.1);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .bmc-container:hover {
            transform: translateY(-5px);
            box-shadow: 
              0 35px 60px -15px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.2),
              0 20px 40px rgba(147, 51, 234, 0.3);
          }
          
          .bmc-header {
            background: linear-gradient(135deg, rgba(147, 51, 234, 0.9) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(16, 185, 129, 0.9) 100%);
            padding: 60px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .bmc-header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          
          .bmc-header h1 {
            color: white;
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
            letter-spacing: -0.5px;
          }
          
          .bmc-header .subtitle {
            color: rgba(255, 255, 255, 0.95);
            font-size: 20px;
            font-weight: 500;
            position: relative;
            z-index: 1;
          }
          
          .flag {
            font-size: 42px;
            display: inline-block;
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
          }
          
          .canvas-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 60px;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(10px);
            position: relative;
          }
          
          .canvas-grid::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 0%, rgba(147, 51, 234, 0.1) 100%);
            pointer-events: none;
          }
          
          .canvas-box {
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 32px;
            min-height: 260px;
            position: relative;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          }
          
          .canvas-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--aurora-blue), var(--aurora-purple), var(--aurora-green));
            opacity: 0;
            transition: opacity 0.2s ease;
          }
          
          .canvas-box:hover {
            transform: translateY(-5px);
            box-shadow: 
              0 25px 60px rgba(147, 51, 234, 0.3),
              inset 0 0 0 1px rgba(255, 255, 255, 0.8);
            border-color: rgba(147, 51, 234, 0.5);
            background: rgba(255, 255, 255, 0.98);
          }
          
          .canvas-box:hover::before {
            opacity: 1;
          }
          
          .canvas-box .icon {
            font-size: 48px;
            margin-bottom: 20px;
            display: inline-block;
            filter: drop-shadow(0 5px 10px rgba(147, 51, 234, 0.2));
            position: relative;
            z-index: 2;
            transition: transform 0.2s ease;
          }
          
          .canvas-box:hover .icon {
            transform: scale(1.1);
            filter: drop-shadow(0 10px 20px rgba(147, 51, 234, 0.3));
          }
          
          .canvas-box h3 {
            color: #1e293b;
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px solid transparent;
            padding-bottom: 12px;
            background: linear-gradient(135deg, #9333ea, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
          }
          
          .canvas-box h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #9333ea, #3b82f6, #10b981);
            border-radius: 2px;
          }
          
          .canvas-box p {
            color: #334155;
            font-size: 15px;
            line-height: 1.9;
            font-weight: 500;
            position: relative;
            z-index: 1;
          }
          
          .canvas-box:hover p {
            color: #1e293b;
            transition: color 0.3s ease;
          }
          
          .canvas-box strong {
            color: #1e293b;
            font-weight: 700;
          }
          
          .highlight {
            background: linear-gradient(120deg, #fbbf24, #f59e0b);
            padding: 8px 16px;
            border-radius: 12px;
            font-weight: 700;
            color: #1e293b;
            border: 2px solid #fbbf24;
            box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
            display: inline-block;
            position: relative;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          
          .highlight:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(251, 191, 36, 0.4);
          }
          
          .spectacular-title {
            text-shadow: 2px 2px 10px rgba(147, 51, 234, 0.3);
            background: linear-gradient(135deg, #fff, #e0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glowing-divider {
            box-shadow: 0 2px 10px rgba(147, 51, 234, 0.3);
          }
          
          .bmc-footer {
            background: linear-gradient(135deg, rgba(147, 51, 234, 0.95) 0%, rgba(59, 130, 246, 0.95) 50%, rgba(16, 185, 129, 0.95) 100%);
            padding: 50px 40px;
            text-align: center;
            color: white;
            font-size: 24px;
            font-weight: 700;
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);
          }
          
          .footer-icons {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 20px;
            font-size: 40px;
          }
          
          .footer-icon {
            display: inline-block;
            filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
            cursor: pointer;
            transition: transform 0.2s ease;
          }
          
          .footer-icon:hover {
            transform: scale(1.2);
            filter: drop-shadow(0 10px 20px rgba(255, 255, 255, 0.3));
          }
          
          .decorative-corner {
            position: absolute;
            font-size: 28px;
            opacity: 0.1;
            transition: opacity 0.2s ease;
          }
          
          .canvas-box:hover .decorative-corner {
            opacity: 0.3;
          }
          
          .top-left { top: 8px; left: 8px; }
          .top-right { top: 8px; right: 8px; }
          .bottom-left { bottom: 8px; left: 8px; }
          .bottom-right { bottom: 8px; right: 8px; }
          
          @media (max-width: 768px) {
            .canvas-grid {
              grid-template-columns: 1fr;
              padding: 20px;
            }
            
            .bmc-header h1 {
              font-size: 28px;
            }
            
            .bmc-header .subtitle {
              font-size: 16px;
            }
            
            .flag {
              font-size: 32px;
            }
          }
        `}</style>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Section Header - SPECTACULAR */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6" data-aos="fade-up">
              <span className="px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white backdrop-blur-sm border border-white/20">
                Our Strategic Framework
              </span>
            </div>
            <h2 
              className="spectacular-title text-4xl md:text-6xl font-bold text-white mb-6"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Business Model Canvas
            </h2>
            <div 
              className="glowing-divider w-32 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              ✨ Empowering integration through education and culture ✨
            </p>
          </div>

          <div className="bmc-container" data-aos="fade-up" data-aos-delay="300">
            <div className="bmc-header">
              <h1>
                <span className="flag">🇫🇮</span> Finlern Oy – Business Model Canvas 2025 <span className="flag">🌍</span>
              </h1>
            </div>
          
          <div className="canvas-grid">
            {/* Row 1 */}
            <div className="canvas-box">
              <span className="decorative-corner top-left">🤝</span>
              <span className="decorative-corner bottom-right">💱</span>
              <div className="icon">🤝</div>
              <h3>Key Partners</h3>
              <p>
                🏛️ <strong>Municipalities</strong><br />
                🏢 <strong>Real Estates</strong><br />
                🎭 <strong>Cultural Centers</strong><br />
                🎓 <strong>HAMK University</strong><br />
                🌐 <strong>Social Media Influencers</strong><br />
                🔧 <strong>NPE Oy</strong>
              </p>
            </div>
            
            <div className="canvas-box">
              <span className="decorative-corner top-left">🧭</span>
              <span className="decorative-corner bottom-right">🎯</span>
              <div className="icon">🧭</div>
              <h3>Key Activities</h3>
              <p>
                📚 <strong>Language Education</strong><br />
                🧩 <strong>Integration Consulting</strong><br />
                🎪 <strong>Cultural & Educational Events</strong><br />
                🏡 <strong>Relocation Services</strong><br />
                💼 <strong>Professional Networking</strong><br />
                🎨 <strong>Community Building</strong><br />
                💸 <strong>Startup Funding</strong>
              </p>
            </div>
            
            <div className="canvas-box">
              <span className="decorative-corner top-left">💎</span>
              <span className="decorative-corner bottom-right">⭐</span>
              <div className="icon">💎</div>
              <h3>Value Propositions</h3>
              <p>
                <span className="highlight">🎯 One-Stop Multicultural Solution</span><br /><br />
                Combining language learning, cultural immersion, and community integration for newcomers to Finland.<br /><br />
                ✅ <strong>Comprehensive Support</strong><br />
                ✅ <strong>Expert Guidance</strong><br />
                ✅ <strong>Community Connection</strong>
              </p>
            </div>
            
            {/* Row 2 */}
            <div className="canvas-box">
              <span className="decorative-corner top-left">💬</span>
              <span className="decorative-corner bottom-right">❤️</span>
              <div className="icon">💬</div>
              <h3>Customer Relationships</h3>
              <p>
                👥 <strong>Personalized Support</strong><br />
                🌟 <strong>Community Engagement</strong><br />
                🔍 <strong>Transparent Communication</strong><br />
                🗣️ <strong>Multilingual Service</strong><br />
                💻 <strong>Online + In-Person Consulting</strong><br />
                📞 <strong>24/7 Availability</strong>
              </p>
            </div>
            
            <div className="canvas-box">
              <span className="decorative-corner top-left">🌍</span>
              <span className="decorative-corner bottom-right">👥</span>
              <div className="icon">🌍</div>
              <h3>Customer Segments</h3>
              <p>
                🎯 <strong>International experts and students in Pirkanmaa and Kanta-Häme (Tampere, Valkeakoski, Hämeenlinna, Riihimäki, Lahti, Lappeenranta, Forssa, Jyväskylä, Espoo, Helsinki, Vantaa)</strong>
              </p>
            </div>
            
            <div className="canvas-box">
              <span className="decorative-corner top-left">📣</span>
              <span className="decorative-corner bottom-right">🚀</span>
              <div className="icon">📣</div>
              <h3>Channels</h3>
              <p>
                🌐 <strong>Website (finlern.vercel.app)</strong><br />
                📱 <strong>Finlern Mobile App</strong><br />
                📱 <strong>Social Media Platforms</strong><br />
                🤝 <strong>Strategic Partnerships</strong><br />
                🎪 <strong>Community Events</strong><br />
                💬 <strong>Word-of-Mouth & Referrals</strong>
              </p>
            </div>
            
            {/* Row 3 */}
            <div className="canvas-box">
              <span className="decorative-corner top-left">🧑‍🏫</span>
              <span className="decorative-corner bottom-right">🎓</span>
              <div className="icon">🧑‍🏫</div>
              <h3>Key Resources</h3>
              <p>
                👨‍🏫 <strong>Qualified Teachers</strong><br />
                🧠 <strong>Expert Consultants</strong><br />
                📱 <strong>Finlern App Platform</strong><br />
                🌐 <strong>Website & Digital Tools</strong><br />
                🎨 <strong>Brand & Reputation</strong><br />
                🤝 <strong>Partner Network</strong>
              </p>
            </div>
            
            <div className="canvas-box">
              <span className="decorative-corner top-left">💰</span>
              <span className="decorative-corner bottom-right">📊</span>
              <div className="icon">💰</div>
              <h3>Cost Structure</h3>
              <p>
                💵 <strong>Staff Salaries</strong><br />
                💻 <strong>App & Web Maintenance</strong><br />
                📢 <strong>Marketing & Advertising</strong><br />
                🏢 <strong>Administration</strong><br />
                🎪 <strong>Events & Workshops</strong><br />
                ⚖️ <strong>Legal & Accounting</strong><br />
                🏠 <strong>Office & Operations</strong>
              </p>
            </div>
            
            <div className="canvas-box">
              <span className="decorative-corner top-left">💼</span>
              <span className="decorative-corner bottom-right">💵</span>
              <div className="icon">💼</div>
              <h3>Revenue Streams</h3>
              <p>
                <span className="highlight">👑 VIP Packages (€899–€1,249)</span><br />
                📚 <strong>Language Courses</strong><br />
                🎯 <strong>Individual Services</strong><br />
                🤝 <strong>B2B Partnerships</strong><br />
                🎓 <strong>Workshops & Events</strong><br />
              </p>
            </div>
          </div>
          
          <div className="bmc-footer">
            <div className="footer-icons">
              <span className="footer-icon">🎓</span>
              <span className="footer-icon">💡</span>
              <span className="footer-icon">🤝</span>
            </div>
            <div>Empowering Integration Through Education & Culture</div>
            <div className="mt-4 text-base opacity-95">
              🌟 Building Bridges • Creating Communities • Transforming Lives 🌟
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Team Member Popup */}
      {activeTeamMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
              aria-hidden="true"
              onClick={closeTeamMemberPopup}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="relative">
                {/* Close button */}
                <button 
                  onClick={closeTeamMemberPopup}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
                  aria-label="Close popup"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal content */}
                <div className="relative">
                  {/* Decorative header */}
                  <div className="h-3 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-night w-full"></div>
                  
                  {/* Content */}
                  <div className="px-8 py-10">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-gradient-to-r from-aurora-blue to-aurora-purple bg-clip-text text-transparent">{getActiveMemberDetails()?.name}</span>
                        <span className="ml-3 h-px flex-grow bg-gradient-to-r from-aurora-blue/30 to-transparent"></span>
                      </h3>
                      
                      {/* Bio with decorative elements */}
                      <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-aurora-blue/5 rounded-full blur-xl -z-10"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-aurora-purple/5 rounded-full blur-xl -z-10"></div>
                        
                        <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-100 relative">
                          <span className="absolute -top-2 left-4 bg-aurora-blue/20 w-8 h-8 rounded-full blur-md"></span>
                          <span className="absolute -bottom-2 right-4 bg-aurora-purple/20 w-6 h-6 rounded-full blur-md"></span>
                          
                          <div className="relative z-10">
                            <p className="text-lg text-gray-700 leading-relaxed">
                              {getActiveMemberDetails()?.bio}
                            </p>
                            
                            {/* LinkedIn Profile Link */}
                            {getActiveMemberDetails()?.linkedin && (
                              <div className="mt-8 flex justify-center">
                                <a 
                                  href={getActiveMemberDetails()?.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200 hover:border-[#0a66c2] transition-all duration-300 hover:shadow-lg"
                                  aria-label={`Visit ${getActiveMemberDetails()?.name}'s LinkedIn profile`}
                                >
                                  <span className="text-gray-800 font-medium group-hover:text-[#0a66c2] transition-colors duration-300">Connect on</span>
                                  <span className="flex items-center">
                                    <svg className="w-5 h-5 fill-[#0a66c2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>
                                    <span className="ml-1 font-semibold text-[#0a66c2]">LinkedIn</span>
                                  </span>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer with decorative elements */}
                    <div className="flex justify-center mt-8">
                      <div className="relative">
                        <button
                          onClick={closeTeamMemberPopup}
                          className="px-6 py-3 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          Close
                        </button>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
} 