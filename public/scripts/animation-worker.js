// Animation Worker - Offloads heavy calculations from main thread

// Respond to messages from the main thread
self.onmessage = function(e) {
  const { action, data } = e.data;
  
  switch(action) {
    case 'calculateCounterAnimation':
      // Handle counter animation calculations
      const { target, duration, startTime } = data;
      const result = calculateCounterAnimation(target, duration, startTime);
      self.postMessage({ action: 'counterResult', result });
      break;
    
    case 'calculateGradientAnimation':
      // Compute gradient animation steps (heavy calculation)
      const { colors, steps } = data;
      const gradientSteps = calculateGradientSteps(colors, steps);
      self.postMessage({ action: 'gradientResult', gradientSteps });
      break;
      
    default:
      self.postMessage({ error: 'Unknown action' });
  }
};

// Calculate counter animation values - offloaded from main thread
function calculateCounterAnimation(target, duration, startTime) {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  
  // Calculate progress (0 to 1)
  const progress = Math.min(elapsedTime / duration, 1);
  
  // Apply easing function (easeOutQuad) for smoother visual effect
  const easedProgress = 1 - (1 - progress) * (1 - progress);
  
  // Calculate current value
  const current = Math.ceil(target * easedProgress);
  
  return {
    current,
    done: progress >= 1,
    target
  };
}

// Calculate gradient animation steps - offloaded from main thread
function calculateGradientSteps(colors, steps) {
  // Convert hex colors to RGB
  const rgbColors = colors.map(hexToRgb);
  
  // Generate interpolated colors
  const gradientArray = [];
  
  for (let i = 0; i < steps; i++) {
    const ratio = i / (steps - 1);
    const interpolatedColor = interpolateColors(rgbColors, ratio);
    gradientArray.push(rgbToHex(interpolatedColor));
  }
  
  return gradientArray;
}

// Helper: Convert hex color to RGB
function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return { r, g, b };
}

// Helper: Convert RGB to hex
function rgbToHex({ r, g, b }) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Helper: Interpolate between colors
function interpolateColors(colors, ratio) {
  // For 2 colors or simple case
  if (colors.length === 2) {
    const color1 = colors[0];
    const color2 = colors[1];
    
    return {
      r: Math.round(color1.r + (color2.r - color1.r) * ratio),
      g: Math.round(color1.g + (color2.g - color1.g) * ratio),
      b: Math.round(color1.b + (color2.b - color1.b) * ratio)
    };
  }
  
  // For multiple colors (more complex gradients)
  const segments = colors.length - 1;
  const segment = Math.min(Math.floor(ratio * segments), segments - 1);
  const segmentRatio = (ratio - segment / segments) * segments;
  
  return interpolateColors(
    [colors[segment], colors[segment + 1]], 
    segmentRatio
  );
} 