import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import crypto from 'crypto'

export default function Document() {
  // Generate a new nonce for each request
  const nonce = crypto.randomBytes(16).toString('base64')
  
  // Check if we're in production
  const isProd = process.env.NODE_ENV === 'production'
  
  // Use a more permissive CSP in development, stricter in production
  // For now, temporarily disable CSP inline to fix blank page issue
  const cspContent = isProd 
    ? `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com;
      style-src 'self' 'unsafe-inline' https://unpkg.com;
      img-src 'self' data: https:;
      font-src 'self' data: https:;
      connect-src 'self' https:;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim()
    : `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com;
      style-src 'self' 'unsafe-inline' https://unpkg.com;
      img-src 'self' data: https:;
      font-src 'self' data: https:;
      connect-src 'self' https: localhost:*;
      frame-src 'self';
    `.replace(/\s{2,}/g, ' ').trim()

  // Use CSP header to protect the site, but only after it's working correctly
  const enableCspHeader = false;

  return (
    <Html lang="en">
      <Head nonce={nonce}>
        <meta charSet="utf-8" />
        <meta name="description" content="Finlern - Finnish Language Learning" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        
        {/* iOS Safari compatibility script */}
        <Script 
          id="ios-fixes" 
          strategy="beforeInteractive"
          src="/ios-compatibility.js"
          nonce={nonce}
        />

        {/* Add CSP meta tag */}
        {enableCspHeader && (
          <meta httpEquiv="Content-Security-Policy" content={cspContent} />
        )}
        
        {/* Add other security headers that cannot be set in next.config.js */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        
        {/* Prevent browsers from incorrectly detecting non-scripts as scripts */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        
        {/* Disable browser features that could potentially be security risks */}
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  )
} 