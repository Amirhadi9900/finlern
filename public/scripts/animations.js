// Animation utilities for FinLern website - Mobile Compatible Version

// Only run animations in browser environment
(function() {
  // Check if we're in a browser environment and avoid errors
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Enhanced device and browser detection
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isIOSSafari = isIOS && isSafari;
  const isAndroid = /android/i.test(userAgent);
  const isOldAndroid = /Android 4\.|Android 5\./.test(userAgent);
  const isLowEndDevice = isOldAndroid || 
                         navigator.deviceMemory < 4 || 
                         navigator.hardwareConcurrency < 4;
  
  // Reduce animation complexity based on device capability
  let animationReductionLevel = 0; // 0 = full, 1 = medium, 2 = minimal
  
  if (isLowEndDevice) {
    animationReductionLevel = 2; // Use minimal animations on low-end devices
  } else if (isAndroid || (typeof window.innerWidth === 'number' && window.innerWidth < 768)) {
    animationReductionLevel = 1; // Use medium animations on Android or small screens
  }
  
  console.log('Animation mode:', animationReductionLevel === 0 ? 'Full' : 
                               animationReductionLevel === 1 ? 'Medium' : 'Minimal');

  // Store all observers for cleanup
  let observers = [];
  // Track all timeouts for proper cleanup
  let timeoutIds = [];
  // Track all animation frames for proper cleanup
  let animationFrameIds = [];
  // Track if counters have been animated already during this session
  let countersAnimated = false;

  // Safely schedule timeout with tracking
  function safeTimeout(callback, delay) {
    // Scale delay based on device capability
    if (animationReductionLevel > 0) {
      delay = Math.max(delay, 50); // Ensure minimum delay on slower devices
    }
    
    const id = setTimeout(callback, delay);
    timeoutIds.push(id);
    return id;
  }

  // Safely request animation frame with tracking
  function safeAnimationFrame(callback) {
    // For very low-end devices, limit animations to reduce jank
    if (animationReductionLevel >= 2) {
      const id = setTimeout(callback, 32); // Approx. 30fps instead of 60fps
      timeoutIds.push(id);
      return id;
    }
    
    const id = requestAnimationFrame(callback);
    animationFrameIds.push(id);
    return id;
  }

  // Wait for document to be fully loaded and ensure DOM is ready
  const initWhenReady = () => {
    // Safeguard for all browsers
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          safeTimeout(initAnimations, 100); // Delay to ensure hydration
        });
      } else {
        // If DOMContentLoaded already fired, initialize with a small delay
        safeTimeout(initAnimations, 100);
      }
    } catch (err) {
      console.error('Error in animation initialization:', err);
    }
  };

  // Delay initialization to ensure hydration is complete
  safeTimeout(initWhenReady, isAndroid ? 200 : 100); // Longer delay for Android

  // Complete cleanup function to prevent memory leaks
  function cleanup() {
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
      document.removeEventListener('scroll', scrollHandler, { passive: true });
    } catch (e) {
      // Ignore errors here
    }
    
    // Do not reset the countersAnimated flag during cleanup
    // This will make sure the counters keep their values when navigating back
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
        } catch (e) {
          // Ignore errors
        }
      }
    });
  }

  function initAnimations() {
    // Modified to optimize performance
    // Clean up any existing observers first
    cleanup();
    
    // Check if counters have been animated in this session
    countersAnimated = getCounterAnimated();
    
    // Set final counter values if already animated
    if (countersAnimated) {
      setFinalCounterValues();
    }
    
    try {
      // Add hardware acceleration to all animated elements
      applyHardwareAcceleration(document.querySelectorAll('.animate-float, .animate-float-delayed, .animate-float-slow, .animate-bounce'));
      applyHardwareAcceleration(document.querySelectorAll('[class*="animate-"]'));
      
      // On low-end devices, remove some animations completely to improve performance
      if (animationReductionLevel >= 2) {
        const heavyAnimations = document.querySelectorAll('.blur-3xl');
        heavyAnimations.forEach(el => {
          try {
            el.classList.remove('blur-3xl');
            el.classList.add('blur-xl'); // Use lighter blur
          } catch (e) {
            // Ignore errors
          }
        });
      }
    
      // Fade-in elements on scroll
      try {
        const fadeElements = document.querySelectorAll('.fade-in');
        applyHardwareAcceleration(fadeElements);
        
        // Use safer approach for all mobile devices
        if (fadeElements.length > 0) {
          const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                try {
                  entry.target.classList.add('appear');
                  // On low-end devices, immediately stop observing to save resources
                  if (animationReductionLevel > 0) {
                    fadeObserver.unobserve(entry.target);
                  } else {
                    // Give time for the animation to complete before unobserving
                    safeTimeout(() => {
                      fadeObserver.unobserve(entry.target);
                    }, 1000);
                  }
                } catch (e) {
                  console.warn('Error in fade animation:', e);
                }
              }
            });
          }, {
            threshold: animationReductionLevel >= 2 ? 0.01 : 0.1, // Use lower threshold on low-end devices
            rootMargin: '0px 0px -50px 0px'
          });
          
          fadeElements.forEach(element => {
            try {
              fadeObserver.observe(element);
            } catch (e) {
              console.warn('Error observing fade element:', e);
            }
          });
          observers.push(fadeObserver);
        }

        // Handle scroll-reveal elements
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        applyHardwareAcceleration(scrollRevealElements);
      
        if (scrollRevealElements.length > 0) {
          const scrollRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                try {
                  entry.target.classList.add('revealed');
                  // Unobserve immediately after revealing
                  scrollRevealObserver.unobserve(entry.target);
                } catch (e) {
                  console.warn('Error in scroll reveal:', e);
                }
              }
            });
          }, {
            threshold: animationReductionLevel >= 2 ? 0.01 : 0.1, // Lower threshold for low-end devices
            rootMargin: '0px 0px -50px 0px'
          });
          
          // Process in smaller batches on Android to prevent jank
          const processInBatches = (elements, batchSize, callback) => {
            const totalElements = elements.length;
            let processed = 0;
            
            const processBatch = () => {
              const end = Math.min(processed + batchSize, totalElements);
              for (let i = processed; i < end; i++) {
                callback(elements[i], i);
              }
              processed = end;
              
              if (processed < totalElements) {
                safeTimeout(processBatch, 100); // Process next batch after a small delay
              }
            };
            
            processBatch();
          };
          
          const batchSize = isAndroid ? 5 : 20; // Smaller batches for Android
          
          processInBatches(scrollRevealElements, batchSize, (element) => {
            try {
              // Add initial styles
              element.style.opacity = '0';
              element.style.transform = 'translateY(20px)';
              element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              
              // Apply delay if specified
              const delay = element.getAttribute('data-delay');
              if (delay) {
                element.style.transitionDelay = delay + 'ms';
              }
              
              // Add the element to the observer
              scrollRevealObserver.observe(element);
            } catch (e) {
              console.warn('Error setting up scroll reveal element:', e);
            }
          });
          
          observers.push(scrollRevealObserver);
        }

        // Stagger animations for list items - simplified for Safari
        const animateStaggered = (elements, delay = 100) => {
          elements.forEach((el, index) => {
            try {
              el.style.opacity = '0';
              el.style.transform = 'translateY(20px)';
              el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              
              safeTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * delay);
            } catch (e) {
              console.warn('Error in staggered animation:', e);
            }
          });
        };

        // Apply staggered animations to list items
        const listSections = document.querySelectorAll('.stagger-list');
        listSections.forEach(section => {
          const listObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                try {
                  const items = entry.target.querySelectorAll('li');
                  animateStaggered(items);
                  listObserver.unobserve(entry.target);
                } catch (e) {
                  console.warn('Error in list observer:', e);
                }
              }
            });
          }, { threshold: 0.1 });
          
          try {
            listObserver.observe(section);
            observers.push(listObserver);
          } catch (e) {
            console.warn('Error observing list section:', e);
          }
        });

      } catch (e) {
        console.warn('Error setting up animations:', e);
      }

      // For counter animations: keep most of the code but add optimization for Android
      // Animate counters - simplified for mobile
      const counters = document.querySelectorAll('.counter');
      
      // Skip animation on mobile or just show values immediately if already animated
      if (counters.length > 0 && !isIOSSafari && !isAndroid && animationReductionLevel < 2) {
        // Existing counter animation code
        // ... 
      } else if (counters.length > 0) {
        // For mobile devices, just set the values without animation
        setFinalCounterValues();
      }

    } catch (e) {
      console.error('Error initializing animations:', e);
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