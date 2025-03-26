import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Finlern</title>
        <meta name="description" content="The page you're looking for cannot be found." />
      </Head>
      
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background with aurora colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-30"></div>
        
        {/* Northern Lights animation effect */}
        <div className="absolute top-0 w-full h-64 bg-gradient-to-r from-aurora-blue via-purple-500 to-aurora-purple" 
             style={{ 
               clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)',
               animation: 'aurora 15s ease infinite',
               opacity: 0.5
             }}></div>
        
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-r from-aurora-purple via-blue-400 to-aurora-blue" 
             style={{ 
               clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)',
               animation: 'aurora 10s ease infinite reverse',
               opacity: 0.5,
               animationDelay: '2s'
             }}></div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 text-center">
          <div className="mb-8">
            <div className="mx-auto w-64 h-64 relative mb-6">
              <div className="absolute inset-0 rounded-full bg-white shadow-xl opacity-80"></div>
              <div className="absolute inset-4 rounded-full flex items-center justify-center bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 text-white">
                <span className="text-9xl font-extrabold">404</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! Sivua ei löydy
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            (Page Not Found)
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
            The page you're looking for seems to have wandered off like a 
            student trying to pronounce "Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-aurora-blue to-aurora-purple hover:from-aurora-purple hover:to-aurora-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200">
              Takaisin kotisivulle
              <span className="block ml-2 text-sm">(Back to Home)</span>
            </Link>
            
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200">
              Ota yhteyttä
              <span className="block ml-2 text-sm">(Contact Us)</span>
            </Link>
          </div>
          
          <div className="mt-10 text-gray-500 text-sm">
            <p>Did you try to learn Finnish but ended up here instead?</p>
            <p>Don't worry, finding this page was still easier than mastering Finnish cases!</p>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes aurora {
          0% {
            transform: translateX(-30%) translateY(10%);
          }
          50% {
            transform: translateX(30%) translateY(-10%);
          }
          100% {
            transform: translateX(-30%) translateY(10%);
          }
        }
      `}</style>
    </>
  );
};

export default Custom404; 