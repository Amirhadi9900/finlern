import React, { useEffect, useState } from 'react'
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

  // Detailed information about team members
  const teamMembersDetails: TeamMemberDetail[] = [
    {
      id: "sanna",
      name: "Sanna Alavillamo",
      bio: ""
    },
    {
      id: "amirhadi",
      name: "Amirhadi Borjian",
      bio: "Amirhadi Borjian is a talented software developer at Finlern, where he mixes superb technical skills with a knack for collaboration. His problem-solving prowess and proactive attitude shine through in how he refines Finlern’s digital tools, making them intuitive and efficient for users. Curious and creative, Amirhadi’s ideas push the company forward in the fast-evolving education tech world. His teamwork and fresh perspective play a remarkable role in boosting Finlern’s growth and keeping users happy.",
      linkedin: "https://linkedin.com/in/amirhadi-borjian-yazdi-5108431a1"
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
          </div>
        </div>
      </section>

      {/* Our Beginning - Enhanced Further */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-50"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-aurora-blue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-aurora-green/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-aurora-blue/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-aurora-purple/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-aurora-green/20 rounded-full"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7" data-aos="fade-up" data-aos-duration="800">
                <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue border border-aurora-blue/20">
                  Where We Started
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Our <span className="relative inline-block">
                    Beginning
                    <span className="absolute bottom-2 left-0 right-0 h-3 bg-aurora-blue/10 -z-10 transform -skew-x-6"></span>
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-full mb-8"></div>
                
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Finlern was founded in 2024 by Hamid Reza Ghorbani. Finlern Oy is more than just a language school—it's a labor of love, built from passion, dedication, and the belief that language can change lives.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our journey started with a dream: to help you find your place in Finland through the power of language. We poured our hearts into Finlern, crafting it with care, patience, and the deep desire 
                    to make learning Finnish not just easier, but truly meaningful. Every lesson, every interaction, and every student's progress fills us with pride because we know that we are not just teaching words;
                    we are opening doors to new opportunities, friendships, and a brighter future.
                  </p>
                  <div className="pl-5 border-l-4 border-aurora-blue/50 py-2">
                    <p className="text-lg leading-relaxed">
                      The love we have given to Finlern is the same love that Finlern now gives to every student. We understand the struggles, the small victories, and the joy of finally expressing yourself in a new language.
                      That's why we don't just teach—we support, encourage, and walk alongside our students in their journey.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">
                    At Finlern, you're not just learning Finnish. You're becoming part of a story—one filled with growth, belonging, and endless possibilities.
                  </p>
                  <p className="text-xl font-bold text-aurora-blue mt-8 px-6 py-4 bg-aurora-blue/5 rounded-lg border-l-4 border-aurora-blue inline-block">
                    Welcome to Finlern. Welcome to your new beginning!
              </p>
            </div>
              </div>
              
              {/* Founder's Vision - Enhanced Further */}
              <div className="lg:col-span-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-aurora-blue/10 rounded-full blur-xl -z-10"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-aurora-purple/10 rounded-full blur-xl -z-10"></div>
                  
                  {/* Card container */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl border border-gray-100">
                    {/* Main content */}
                    <div className="relative">
                      {/* Image without overlays */}
                      <div className="w-full h-80 relative overflow-hidden">
                        <Image 
                          src="/images/our-story-founder.jpg" 
                          alt="Finlern Founder" 
                          width={1080} 
                          height={1080} 
                          className="w-full h-full object-cover object-center"
                          style={{ objectFit: 'cover' }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/placeholder-avatar.png";
                            target.onerror = null;
                          }}
                        />
                      </div>
                      
                      {/* Content box */}
                      <div className="bg-white p-8 relative">
                        <div className="absolute -top-16 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20">
                          <svg className="w-8 h-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                          <span className="bg-gradient-to-r from-aurora-blue to-aurora-purple bg-clip-text text-transparent">Our Founder's Vision</span>
                          <span className="ml-2 h-px flex-grow bg-gradient-to-r from-aurora-blue/30 to-transparent"></span>
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed mt-3 border-l-4 border-aurora-blue/20 pl-4 py-2">
                          Hamid's innovative approach to Finnish language education forms the foundation of Finlern's methodology.
                        </p>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
                          <div className="w-12 h-12 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-4">
                            <span className="text-aurora-blue font-bold">HG</span>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Hamid Reza Ghorbani</p>
                            <p className="text-aurora-blue/80 text-sm">Founder & CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-aurora-blue/30 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-aurora-purple/30 rounded-full"></div>
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
              className="text-xl text-gray-700"
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
                <p className="text-gray-700 text-center">
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
                <p className="text-gray-700 text-center">
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
                <p className="text-gray-700 text-center">
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
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Our dedicated team of native Finnish teachers combines linguistic expertise with a passion for teaching.
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
                      src="/images/Sanna-Alavillamo.jpg"
                      alt="Sanna Alavillamo"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sanna Alavillamo</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 text-aurora-teal rounded-full text-sm font-medium inline-block mb-4 border border-aurora-green/10">
                Head Teacher
              </div>
                <p className="text-gray-700">
                With 20+ years of language teaching experience, Sanna's innovative approach to Finnish language education forms the foundation of Finlern's online courses.
                </p>
                <button 
                  onClick={() => openTeamMemberPopup('sanna')}
                  className="mt-6 px-4 py-2.5 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="Learn more about Sanna Alavillamo"
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
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 text-aurora-teal rounded-full text-sm font-medium inline-block mb-4 border border-aurora-green/10">
                  CEO & Founder
                </div>
                <p className="text-gray-700">
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
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 text-aurora-teal rounded-full text-sm font-medium inline-block mb-4 border border-aurora-green/10">
                  ICT & Co-founder
                </div>
                <p className="text-gray-700">
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
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-purple/20 to-aurora-blue/20 text-aurora-teal rounded-full text-sm font-medium inline-block mb-4 border border-aurora-purple/10">
                  Graphic Designer & Social Media Specialist
                </div>
                <p className="text-gray-700">
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
                <div className="px-3 py-1 bg-gradient-to-r from-aurora-teal/20 to-aurora-green/20 text-aurora-teal rounded-full text-sm font-medium inline-block mb-4 border border-aurora-teal/10">
                  Event Organizer & Communication Specialist
                </div>
                <p className="text-gray-700">
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
        {/* Background with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-aurora-night">
          {/* Aurora-like effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 right-0 h-40 bg-aurora-green/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-aurora-purple/20 blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-xl border border-white/20" data-aos="fade-up">
              <div className="text-center">
                <div className="inline-block mb-4 bg-white/20 px-4 py-1 rounded-full text-white/90 backdrop-blur-sm">
                  Join Our Community
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Start Your Finnish Journey Today
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join our community of Finnish language learners and discover the joy of learning Finnish with Finlern.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
                  <Link href="/classes" className="px-8 py-4 bg-white text-aurora-blue rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Explore Our Classes</span>
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Contact Us</span>
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