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
  webpack: (config, { webpack }) => {
    // Reduce unnecessary processing during development
    config.optimization.runtimeChunk = false;
    
    // Optimize CSS loading
    if (process.env.NODE_ENV === 'production') {
      // Optimize production builds
      config.optimization.minimize = true;
    }
    
    // Fix punycode deprecation warning
    config.resolve.alias = {
      ...config.resolve.alias,
      punycode: 'punycode/'
    };
    
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
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'production'
              ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline' https://unpkg.com; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
              : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline' https://unpkg.com; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https: localhost:*; frame-src 'self';"
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig 