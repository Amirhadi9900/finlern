// Animation utilities for FinLern website - Performance Optimized Version

// Optimization: Use passive event listeners for touch and scroll events
let passiveSupported = false;
try {
  window.addEventListener("test", null, 
    Object.defineProperty({}, "passive", { 
      get: function() { passiveSupported = true; return true; } 
    })
  );
} catch(e) {}

// Optimization: Defer animation initialization and use requestIdleCallback when available
function deferInit(fn) {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(fn, { timeout: 2000 });
  } else if ('requestAnimationFrame' in window) {
    window.requestAnimationFrame(() => {
      setTimeout(fn, 100);
    });
  } else {
    setTimeout(fn, 200);
  }
}

// Optimization: Quickly detect device performance level
function detectPerformanceLevel() {
  let performanceLevel = 0; // 0 = low, 1 = medium, 2 = high
  
  // Check for mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                  (window.innerWidth <= 768);
  
  // Use navigator.deviceMemory if available (Chrome)
  if ('deviceMemory' in navigator) {
    if (navigator.deviceMemory <= 2) performanceLevel = 0;
    else if (navigator.deviceMemory <= 4) performanceLevel = 1;
    else performanceLevel = 2;
  } 
  // Fallback to screen size as a rough heuristic
  else {
    if (window.innerWidth <= 768) performanceLevel = 0;
    else if (window.innerWidth <= 1366) performanceLevel = 1;
    else performanceLevel = 2;
  }
  
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    performanceLevel = Math.min(performanceLevel, 1);
  }
  
  return {
    performanceLevel,
    isMobile
  };
}

// Only run animations in browser environment
(function() {
  // Check if we're in a browser environment and avoid errors
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Force content visibility first - ensure all content is visible even if animations fail
  try {
    const ensureContentVisible = () => {
      // Make sure any hidden elements (waiting for animation) are displayed
      const animatedElements = document.querySelectorAll('.fade-in, .scroll-reveal');
      if (animatedElements) {
        Array.from(animatedElements).forEach(el => {
          if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
          }
        });
      }
    };
    
    // Set a safety timeout to ensure content is visible regardless of animation status
    setTimeout(ensureContentVisible, 1200); // Reduced timeout for faster visibility
  } catch (e) {
    console.warn("Error ensuring content visibility:", e);
  }

  // Enhanced device and browser detection
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isIOSSafari = isIOS && isSafari;
  const isAndroid = /android/i.test(userAgent);
  const isOldAndroid = /Android [4-6]\./.test(userAgent);
  const isMobile = isIOS || isAndroid || window.innerWidth < 768;
  
  // Enhanced performance detection
  const isLowEndDevice = isOldAndroid || 
                         (typeof navigator.deviceMemory !== 'undefined' && navigator.deviceMemory < 4) || 
                         (typeof navigator.hardwareConcurrency !== 'undefined' && navigator.hardwareConcurrency < 4);
  
  // Check if the browser supports prefers-reduced-motion
  const prefersReducedMotion = typeof window.matchMedia === 'function' && 
                               window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                        
  // For Android devices or when reduced motion is preferred, use a simpler animation approach
  const useSimpleAnimations = isAndroid || isLowEndDevice || prefersReducedMotion;
  
  // Reduce animation complexity based on device capability
  let animationReductionLevel = 0;
  
  if (prefersReducedMotion) {
    animationReductionLevel = 3; // Minimal animations when user prefers reduced motion
  } else if (isLowEndDevice || isOldAndroid) {
    animationReductionLevel = 2; // Use minimal animations on low-end devices
  } else if (isMobile) {
    animationReductionLevel = 1; // Use medium animations on mobile devices
  }
  
  // Store all observers for cleanup
  let observers = [];
  // Track all timeouts for proper cleanup
  let timeoutIds = [];
  // Track all animation frames for proper cleanup
  let animationFrameIds = [];
  // Track if counters have been animated already during this session
  let countersAnimated = false;

  // Check if IntersectionObserver is supported
  const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

  // Safely schedule timeout with tracking
  function safeTimeout(callback, delay) {
    // Scale delay based on device capability
    if (animationReductionLevel > 0) {
      // Reduce animation delays on lower-end devices for faster perceived performance
      delay = Math.floor(delay / (1 + animationReductionLevel * 0.5));
      delay = Math.max(delay, 16); // Ensure minimum delay for stability
    }
    
    try {
      const id = setTimeout(callback, delay);
      timeoutIds.push(id);
      return id;
    } catch (e) {
      console.warn("Error in safeTimeout:", e);
      // Call directly as fallback
      try {
        callback();
      } catch (innerError) {
        console.warn("Error in callback:", innerError);
      }
      return null;
    }
  }

  // Safely request animation frame with tracking
  function safeAnimationFrame(callback) {
    // For Android or low-end devices, use timeouts instead of requestAnimationFrame
    if (useSimpleAnimations || animationReductionLevel >= 2) {
      return safeTimeout(callback, 32); // Approx. 30fps instead of 60fps
    }
    
    try {
      const id = requestAnimationFrame(callback);
      animationFrameIds.push(id);
      return id;
    } catch (e) {
      console.warn("Error in requestAnimationFrame:", e);
      // Use timeout as fallback
      return safeTimeout(callback, 16);
    }
  }

  // Wait for document to be fully loaded and ensure DOM is ready
  const initWhenReady = () => {
    // Safeguard for all browsers
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          // Reduced delay for faster initialization
          safeTimeout(initAnimations, 100);
        });
      } else {
        // If DOMContentLoaded already fired, initialize faster
        safeTimeout(initAnimations, 50);
      }
    } catch (err) {
      console.error('Error in animation initialization:', err);
    }
  };

  // Reduced initialization delay for faster perceived performance
  safeTimeout(initWhenReady, 200);

  // Complete cleanup function to prevent memory leaks
  function cleanup() {
    try {
      // Disconnect all observers
      observers.forEach(observer => {
        if (observer && typeof observer.disconnect === 'function') {
          try {
            observer.disconnect();
          } catch (e) {
            console.warn('Error disconnecting observer:', e);
          }
        }
      });
      observers = [];

      // Clear all timeouts
      timeoutIds.forEach(id => {
        clearTimeout(id);
      });
      timeoutIds = [];

      // Cancel all animation frames
      animationFrameIds.forEach(id => {
        cancelAnimationFrame(id);
      });
      animationFrameIds = [];

      // Remove event listeners we've added
      try {
        if (scrollHandler) {
          document.removeEventListener('scroll', scrollHandler, { passive: true });
        }
      } catch (e) {
        // Ignore errors here
      }
    } catch (e) {
      console.warn("Error in cleanup:", e);
    }
  }

  // Store counter animation state in session storage to persist during navigation
  function setCounterAnimated(value) {
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('countersAnimated', value ? 'true' : 'false');
      }
      countersAnimated = value;
    } catch (e) {
      console.warn('Error accessing sessionStorage:', e);
      countersAnimated = value;
    }
  }

  function getCounterAnimated() {
    try {
      if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem('countersAnimated') === 'true';
      }
      return countersAnimated;
    } catch (e) {
      console.warn('Error accessing sessionStorage:', e);
      return countersAnimated;
    }
  }

  // Scroll event handler - declared at top level for proper cleanup
  let scrollHandler = null;
  
  // Helper function to apply hardware acceleration classes
  function applyHardwareAcceleration(elements) {
    if (!elements || !elements.length) return;
    
    Array.from(elements).forEach(el => {
      if (el && el.classList && typeof el.classList.add === 'function') {
        try {
          el.classList.add('hw-accelerated');
          
          // Apply optimized styles for hardware acceleration
          if (el.style) {
            el.style.willChange = 'transform';
            el.style.transform = 'translateZ(0)';
            el.style.backfaceVisibility = 'hidden';
          }
        } catch (e) {
          // Ignore errors
        }
      }
    });
  }

  function initAnimations() {
    // Check if document is loaded
    if (document.readyState !== 'complete') {
      window.addEventListener('load', () => deferInit(initAnimationsCore));
      return () => {};
    } else {
      return deferInit(initAnimationsCore);
    }
  }

  function initAnimationsCore() {
    const { performanceLevel, isMobile } = detectPerformanceLevel();
    
    // Use performanceLevel to adjust animation complexity
    const animationReductionLevel = 2 - performanceLevel; // 0 = full, 1 = medium, 2 = minimal
    
    // Clean up any existing observers first
    cleanup();
    
    // Check if counters have been animated in this session
    countersAnimated = getCounterAnimated();
    
    // Set final counter values if already animated
    if (countersAnimated) {
      setFinalCounterValues();
    }
    
    try {
      // Optimize the Hero section first for perceived performance
      const optimizeHeroSection = () => {
        // Apply hardware acceleration to hero elements
        const heroSection = document.querySelector('section');
        if (heroSection) {
          // Apply fixed background for better performance
          const heroBackground = heroSection.querySelector('div[class*="bg-gradient-to-br"]');
          if (heroBackground) {
            applyHardwareAcceleration([heroBackground]);
          }
          
          // Apply optimizations to animated elements in the hero
          const heroAnimatedElements = heroSection.querySelectorAll('[class*="animate-"]');
          applyHardwareAcceleration(heroAnimatedElements);
          
          // Reduce blur intensity on mobile/low-end devices
          if (animationReductionLevel >= 1) {
            const blurredElements = heroSection.querySelectorAll('.blur-3xl, .blur-2xl');
            blurredElements.forEach(el => {
              try {
                if (el.classList.contains('blur-3xl')) {
                  el.classList.remove('blur-3xl');
                  el.classList.add('blur-xl');
                } else if (el.classList.contains('blur-2xl')) {
                  el.classList.remove('blur-2xl');
                  el.classList.add('blur-lg');
                }
              } catch (e) {
                // Ignore errors
              }
            });
          }
        }
      };
      
      // Optimize hero section immediately
      optimizeHeroSection();
      
      // For Android or when reduced motion is preferred, use a much simpler approach
      if (useSimpleAnimations || animationReductionLevel >= 2) {
        // Make all elements visible immediately for fast loading perception
        const allAnimatedElements = document.querySelectorAll('.fade-in, .scroll-reveal, [class*="animate-"]');
        if (allAnimatedElements) {
          Array.from(allAnimatedElements).forEach(el => {
            if (el && el.classList) {
              // Add appear class to fade-in elements
              if (el.classList.contains('fade-in')) {
                el.classList.add('appear');
              }
              
              // Add revealed class to scroll-reveal elements
              if (el.classList.contains('scroll-reveal')) {
                el.classList.add('revealed');
              }
              
              // Ensure all animated elements are visible
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }
          });
        }
        
        // Set final counter values immediately
        setFinalCounterValues();
        
        // Apply minimal hardware acceleration for essential animations
        const essentialAnimations = document.querySelectorAll('.animate-float, .animate-float-delayed, .animate-float-slow');
        applyHardwareAcceleration(essentialAnimations);
        
        return; // Skip the rest of the animations for low-end devices
      }
      
      // Standard animation path for better devices
      // Add hardware acceleration to all animated elements
      applyHardwareAcceleration(document.querySelectorAll('[class*="animate-"]'));
      
      // On lower-end devices, reduce animation complexity
      if (animationReductionLevel >= 1) {
        // Find and optimize heavy blur effects
        const heavyBlurs = document.querySelectorAll('.blur-3xl, .blur-2xl');
        heavyBlurs.forEach(el => {
          try {
            if (el.classList.contains('blur-3xl')) {
              el.classList.remove('blur-3xl');
              el.classList.add('blur-xl');
            } else if (el.classList.contains('blur-2xl')) {
              el.classList.remove('blur-2xl');
              el.classList.add('blur-lg');
            }
          } catch (e) {
            // Ignore errors
          }
        });
      }
    
      // Implement fade-in animations with optimized thresholds
      try {
        const fadeElements = document.querySelectorAll('.fade-in');
        applyHardwareAcceleration(fadeElements);
  
        if (fadeElements.length > 0 && hasIntersectionObserver) {
          // Adjust threshold based on device capability
          const fadeThreshold = animationReductionLevel >= 2 ? 0.01 : 
                               (animationReductionLevel === 1 ? 0.05 : 0.1);
          
          const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                try {
                  entry.target.classList.add('appear');
                  
                  // Unobserve faster on lower-end devices
                  const unobserveDelay = animationReductionLevel >= 2 ? 0 : 
                                        (animationReductionLevel === 1 ? 500 : 800);
                  
                  if (unobserveDelay === 0) {
                    fadeObserver.unobserve(entry.target);
                  } else {
                    safeTimeout(() => {
                      fadeObserver.unobserve(entry.target);
                    }, unobserveDelay);
                  }
                } catch (e) {
                  console.warn('Error in fade animation:', e);
                  fadeObserver.unobserve(entry.target);
                }
              }
            });
          }, {
            threshold: fadeThreshold,
            rootMargin: '0px 0px -50px 0px'
          });
  
          fadeElements.forEach(element => {
            try {
              fadeObserver.observe(element);
            } catch (e) {
              console.warn('Error observing fade element:', e);
              element.classList.add('appear');
            }
          });
          
          observers.push(fadeObserver);
        } else {
          // Fallback: make elements visible immediately
          fadeElements.forEach(el => {
            if (el) el.classList.add('appear');
          });
        }

        // Handle scroll-reveal animations with optimized processing
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        applyHardwareAcceleration(scrollRevealElements);
      
        if (scrollRevealElements.length > 0 && hasIntersectionObserver) {
          // Adjust threshold based on device capability
          const scrollThreshold = animationReductionLevel >= 2 ? 0.01 : 
                                 (animationReductionLevel === 1 ? 0.05 : 0.1);
          
          const scrollRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                try {
                  entry.target.classList.add('revealed');
                  scrollRevealObserver.unobserve(entry.target);
                } catch (e) {
                  console.warn('Error in scroll reveal:', e);
                }
              }
            });
          }, {
            threshold: scrollThreshold,
            rootMargin: '0px 0px -50px 0px'
          });
          
          // Process elements in batches for smoother loading
          const batchSize = isMobile ? 5 : 10;
          let processed = 0;
          
          const processBatch = () => {
            const end = Math.min(processed + batchSize, scrollRevealElements.length);
            
            for (let i = processed; i < end; i++) {
              const element = scrollRevealElements[i];
              try {
                // Add initial styles
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                // Apply delay if specified (but limit delay on low-end devices)
                const delay = element.getAttribute('data-delay');
                if (delay) {
                  const maxDelay = animationReductionLevel >= 2 ? 300 : 
                                  (animationReductionLevel === 1 ? 500 : 800);
                  element.style.transitionDelay = Math.min(parseInt(delay), maxDelay) + 'ms';
                }
                
                // Add the element to the observer
                scrollRevealObserver.observe(element);
              } catch (e) {
                console.warn('Error setting up scroll reveal element:', e);
                if (element) {
                  element.style.opacity = '1';
                  element.style.transform = 'translateY(0)';
                }
              }
            }
            
            processed = end;
            
            if (processed < scrollRevealElements.length) {
              safeTimeout(processBatch, 50);
            }
          };
          
          // Start processing the batches
          processBatch();
          
          observers.push(scrollRevealObserver);
        } else {
          // Fallback: make elements visible immediately
          scrollRevealElements.forEach(el => {
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }
          });
        }

        // Simplified counter animations for better performance
        const counters = document.querySelectorAll('.counter');
        
        if (counters.length > 0 && !countersAnimated) {
          // Immediate counter animation for mobile/low-end devices
          if (isMobile || animationReductionLevel >= 1) {
            setFinalCounterValues();
            return;
          }
          
          // Use IntersectionObserver for counter animations on higher-end devices
          if (hasIntersectionObserver) {
            const counterObserver = new IntersectionObserver((entries) => {
              if (entries.some(entry => entry.isIntersecting)) {
                try {
                  counters.forEach(counter => {
                    const targetText = counter.getAttribute('data-target') || '0';
                    const hasPercentage = targetText.includes('%');
                    const target = parseInt(targetText.replace('%', ''));
                    
                    // Start at a value closer to the target for faster perception
                    let start = animationReductionLevel >= 1 ? Math.floor(target * 0.5) : 0;
                    let current = start;
                    
                    // Accelerated animation duration based on device
                    const duration = animationReductionLevel >= 1 ? 800 : 1200;
                    const fps = animationReductionLevel >= 1 ? 20 : 30;
                    const interval = 1000 / fps;
                    
                    // More efficient simple counter animation
                    const incrementValue = () => {
                      const remaining = target - current;
                      // Accelerate towards the end for smoother finish
                      const increment = Math.max(1, Math.ceil(remaining / 10));
                      
                      current = Math.min(current + increment, target);
                      counter.textContent = current.toString() + (hasPercentage ? '%' : '');
                      
                      if (current < target) {
                        safeTimeout(incrementValue, interval);
                      } else {
                        // Mark as completed
                        setCounterAnimated(true);
                      }
                    };
                    
                    // Start the animation
                    safeTimeout(incrementValue, 100);
                  });
                  
                  // Unobserve after animation starts
                  counterObserver.disconnect();
                } catch (e) {
                  console.warn('Error in counter animation:', e);
                  // Fallback
                  setFinalCounterValues();
                }
              }
            }, {
              threshold: 0.1,
              rootMargin: '0px 0px -20% 0px'
            });
            
            // Observe the first counter's parent
            if (counters[0] && counters[0].parentElement) {
              counterObserver.observe(counters[0].parentElement);
              observers.push(counterObserver);
            } else {
              // Fallback
              setFinalCounterValues();
            }
          } else {
            // Fallback for browsers without IntersectionObserver
            setFinalCounterValues();
          }
        } else if (counters.length > 0 && countersAnimated) {
          // If already animated, just set final values
          setFinalCounterValues();
        }
      } catch (e) {
        console.warn('Error setting up animations:', e);
        // Ensure everything is visible even if there's an error
        ensureAllVisible();
      }
    } catch (e) {
      console.error('Error initializing animations:', e);
      // Ensure content visibility on error
      ensureAllVisible();
    }
  }
  
  // Helper to ensure all content is visible
  function ensureAllVisible() {
    try {
      const elements = document.querySelectorAll('.fade-in, .scroll-reveal');
      elements.forEach(el => {
        if (el.classList.contains('fade-in')) {
          el.classList.add('appear');
        }
        if (el.classList.contains('scroll-reveal')) {
          el.classList.add('revealed');
        }
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
      
      // Set final counter values
      setFinalCounterValues();
    } catch (e) {
      console.warn('Error ensuring all visible:', e);
    }
  }

  // Helper function to set counters to their final values without animation
  function setFinalCounterValues() {
    try {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const targetText = counter.getAttribute('data-target') || '0';
        const hasPercentage = targetText.includes('%');
        const target = parseInt(targetText.replace('%', ''));
        counter.textContent = target.toString() + (hasPercentage ? '%' : '');
      });
      // Mark as animated
      setCounterAnimated(true);
    } catch (e) {
      console.warn('Error setting final counter values:', e);
    }
  }

  // Expose the init and cleanup functions to the window for external use
  window.scrollAnimations = {
    init: initAnimations,
    cleanup: cleanup
  };
})(); 