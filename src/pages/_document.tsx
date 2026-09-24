import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* iOS Safari compatibility script */}
        <Script
          id="ios-fixes"
          strategy="beforeInteractive"
          src="/ios-compatibility.js"
        />

        {/*
          Security headers (CSP, X-Frame-Options, Strict-Transport-Security,
          Permissions-Policy, etc.) are set via HTTP response headers in
          next.config.js. They are intentionally NOT duplicated as <meta> tags:
          frame-ancestors and X-Frame-Options are ignored in <meta>, and a second
          CSP would only intersect with the header CSP and cause divergence.
        */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
