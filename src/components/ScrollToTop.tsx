import React, { useState, useEffect } from 'react'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (typeof window === 'undefined') return
    
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    window.addEventListener('scroll', toggleVisibility)
    
    // Check initial scroll position on mount
    toggleVisibility()
    
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    // Make sure the button is fixed and has a high z-index to be visible on all devices
    <div className={`scroll-to-top-btn ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="group bg-gradient-to-r from-aurora-blue to-aurora-purple p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform"
        aria-label="Scroll to top"
      >
        {/* Arrow up icon */}
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
        </div>
      </button>
    </div>
  )
}

export default ScrollToTop 