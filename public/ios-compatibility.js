/**
 * iOS Safari Compatibility Fixes - FinLern
 * 
 * This script addresses common issues with iOS Safari, including:
 * - Memory leaks and event cleanup
 * - Animation performance
 * - Scroll handling
 * - Error reporting
 * - Touch event handling
 */

(function() {
  // Only run in browser
  if (typeof window === 'undefined') return;
  
  // Detect iOS Safari
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOSSafari = isIOS && isSafari;
  
  if (!isIOSSafari) return; // Only apply these fixes for iOS Safari
  
  console.log("iOS Safari compatibility mode activated");
  
  // Fix 1: Error Logging
  window.onerror = function(message, source, lineno, colno, error) {
    console.error("iOS Safari Error:", { message, source, lineno, colno, stack: error?.stack });
    
    // Optional: Show visible error message for debugging
    // Uncomment for testing only
    /*
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:rgba(255,0,0,0.8);color:white;padding:10px;z-index:9999;font-size:12px;max-height:50%;overflow:auto;';
    errorDiv.textContent = `Error: ${message} at ${source} (${lineno}:${colno})`;
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }, 10000);
    */
    
    return false; // Let the error propagate
  };
  
  // Fix 2: Passive Event Listeners for better scrolling
  const supportsPassive = (function() {
    let result = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function() { result = true; return true; }
      });
      window.addEventListener('testPassive', null, opts);
      window.removeEventListener('testPassive', null, opts);
    } catch (e) {}
    return result;
  })();
  
  const passiveConfig = supportsPassive ? { passive: true } : false;
  document.addEventListener('touchstart', function(){}, passiveConfig);
  document.addEventListener('touchmove', function(){}, passiveConfig);
  document.addEventListener('scroll', function(){}, passiveConfig);
  
  // Fix 3: Safari-specific CSS fixes
  const safariCSS = document.createElement('style');
  safariCSS.textContent = `
    /* Fix for sticky position */
    .sticky, [data-sticky-container], .is-sticky {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    
    /* Fix for flexbox rendering */
    .flex, [class*="flex-"], [class*="flex:"] {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    
    /* Fix for transitions */
    [class*="transition"], [class*="animate-"] {
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }
    
    /* Fix for scroll behavior */
    html, body {
      -webkit-overflow-scrolling: touch;
    }
  `;
  document.head.appendChild(safariCSS);
  
  // Fix 4: Memory leak prevention - track and clean up intervals
  const originalSetInterval = window.setInterval;
  const originalClearInterval = window.clearInterval;
  const intervals = new Set();
  
  window.setInterval = function() {
    const id = originalSetInterval.apply(this, arguments);
    intervals.add(id);
    return id;
  };
  
  window.clearInterval = function(id) {
    originalClearInterval.call(this, id);
    intervals.delete(id);
  };
  
  // Clean up intervals on page unload
  window.addEventListener('pagehide', function() {
    intervals.forEach(id => {
      originalClearInterval.call(window, id);
    });
    intervals.clear();
  });
  
  // Fix 5: Safari Viewport Height Fix (for 100vh issues)
  function fixIOSViewportHeight() {
    if (!isIOSSafari) return;
    
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
  }
  
  fixIOSViewportHeight();
  
  // Fix 6: Disable complex animations
  // Find any heavy animations and simplify them
  document.querySelectorAll('.parallax, [data-parallax], .particle-background').forEach(el => {
    el.classList.add('ios-disabled-animation');
    // Remove intensive animation classes
    el.style.transform = 'none';
    el.style.transition = 'opacity 0.3s ease';
  });
  
  // Fix 7: Optimize scrolling
  const scrollListener = function() {
    // Debounce scroll events
    if (window.scrollTimeout) return;
    
    window.scrollTimeout = setTimeout(function() {
      window.scrollTimeout = null;
    }, 10);
  };
  
  document.addEventListener('scroll', scrollListener, passiveConfig);
  
  // Fix 8: Handle WebKit animation bugs
  window.addEventListener('load', function() {
    // Force repaint on load
    document.body.style.display = 'none';
    void document.body.offsetHeight; // Force reflow
    document.body.style.display = '';
    
    // Add class to enable CSS targeting specifically for fixes
    document.documentElement.classList.add('ios-safari');
  });
  
  // Fix 9: Ensure proper cleanup on page transitions
  window.addEventListener('pagehide', function() {
    // Clean up any animation frames
    if (window.pendingAnimationFrame) {
      cancelAnimationFrame(window.pendingAnimationFrame);
    }
    
    // Force any remaining AOS animations to complete
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.removeAttribute('data-aos');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  });
  
  console.log("iOS Safari compatibility mode loaded successfully");
})(); 