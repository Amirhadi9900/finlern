/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['@/components']
  },
  // Disable file size measurement during builds
  webpack: (config) => {
    // Reduce unnecessary processing during development
    config.optimization.runtimeChunk = false;
    
    // Optimize CSS loading
    if (process.env.NODE_ENV === 'production') {
      // Optimize production builds
      config.optimization.minimize = true;
    }
    
    return config;
  },
  // Add support for using Web Worker for heavy tasks
  transpilePackages: [],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

module.exports = nextConfig 