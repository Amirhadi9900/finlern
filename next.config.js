/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // SEO-friendly URL structure
  trailingSlash: true,
  // Optimize image performance
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
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
  },
  // Redirect old URLs if needed
  async redirects() {
    return [
      // Example: If you changed URLs in the past
      /*
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true, // 308 status code (permanent redirect)
      },
      */
    ]
  },
  // Custom headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig 