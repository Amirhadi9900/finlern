import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
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
      bio: "With over 20 years of experience in language teaching, Reeta brings a deep understanding of effective, student-centered learning to Finlern’s online Finnish language courses. Her innovative methods and dedication to practical, real-life language use are key to the success of our programs. We are proud to have Sanna as part of our team through a valuable collaboration with NPE Kulplan Oy, whose partnership helps us ensure high-quality teaching for every learner."
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
      bio: "Hamid Reza Gorbani is the creative force behind Finlern Oy. Armed with a degree in International Business, he's a pro at sales, team-leading, and connecting people. Through Finlern, he's building smart, impactful learning solutions and dreaming big—think skill-boosting courses beyond just languages. He's also hosted a ton of events in Finland to sharpen speaking skills and celebrate different cultures. Oh, and when he's not running the show, he's a mean classical violinist!",
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
      <Head>
        <title>Our Story | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Learn about Finlern's journey and mission to make learning Finnish accessible, engaging and effective for everyone." />
      </Head>

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
              How Finlern was born and our mission to share the beauty of the Finnish language
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
                  
                  {/* Call-to-action statement */}
                  <div className="mt-12 p-8 bg-gradient-to-r from-aurora-blue/5 via-aurora-purple/5 to-aurora-blue/5 rounded-2xl border border-aurora-blue/10">
                    <p className="text-2xl font-bold text-aurora-blue leading-relaxed">
                    Welcome to Finlern... your new beginning!!
              </p>
                  </div>
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
              <div className="p-8 text-center">
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
                      src="/images/"
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
                <button 
                  onClick={() => openTeamMemberPopup('reeta')}
                  className="mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
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

            {/* Team Member 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8 text-center">
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
                Hamid Reza Gorbani is the founder and leader of Finlern Oy, where he leverages his leadership and management skills to ensure the organization operates smoothly.
              </p>
              <button 
                onClick={() => openTeamMemberPopup('hamid')}
                className="mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
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
            
            {/* Team Member 3 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8 text-center">
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
                  Amirhadi is a dedicated ICT specialist who fosters and maintains the strong presence of Finlern in the digital world.
                </p>
                <button 
                  onClick={() => openTeamMemberPopup('amirhadi')}
                  className="mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
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

            {/* Team Member 4 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-night w-full"></div>
              <div className="p-8 text-center">
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
                <button 
                  onClick={() => openTeamMemberPopup('saghar')}
                  className="mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-purple to-aurora-blue text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
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

            {/* Team Member 5 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-teal to-aurora-green w-full"></div>
              <div className="p-8 text-center">
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
                <button 
                  onClick={() => openTeamMemberPopup('soodabeh')}
                  className="mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-teal to-aurora-green text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
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

      {/* Call to Action - Enhanced */}
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
                    Join Our Community Today
                </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-green">Start Learning?</span>
                </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-green mx-auto rounded-full mb-6"></div>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Join our community of Finnish language learners and discover the joy of learning Finnish with our passionate team.
                  </p>
                </div>

                {/* Team Highlights Grid */}
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
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Expert Teaching</h3>
                          <p className="text-gray-600">Experienced educators passionate about Finnish language</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Qualified instructors
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Years of experience
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Proven methods
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-green/5 to-aurora-green/10 rounded-2xl p-6 h-full border border-aurora-green/10 group-hover:shadow-lg group-hover:shadow-aurora-green/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Passionate Mission</h3>
                          <p className="text-gray-600">Dedicated to helping you succeed in Finland</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Student-centered approach
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Cultural integration
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Community support
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-purple/5 to-aurora-purple/10 rounded-2xl p-6 h-full border border-aurora-purple/10 group-hover:shadow-lg group-hover:shadow-aurora-purple/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Your Success</h3>
                          <p className="text-gray-600">Committed to your Finnish language journey</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Personal support
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Flexible learning
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Real results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">3</div>
                    <p className="text-sm text-gray-600">Expert Teachers</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-green mb-1">15+</div>
                    <p className="text-sm text-gray-600">Years Combined</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-purple mb-1">20+</div>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>

                  <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">100%</div>
                    <p className="text-sm text-gray-600">Passion</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/classes" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                      Explore Our Courses
                  </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-aurora-blue text-aurora-blue rounded-xl font-medium transition-all duration-300 hover:bg-aurora-blue/5 hover:shadow-lg transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                      Get In Touch
                  </Link>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Meet our team • Learn our story • Start your journey
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