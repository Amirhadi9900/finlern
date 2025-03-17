import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/finlern.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
}) => {
  const site = 'Finlern';
  const siteTitle = `${title} | ${site}`;
  const url = canonical || 'https://finlern.com';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={site} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Structured Data / Schema.org */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="Finlern, Finnish Language, Learning Finnish, Finnish Courses, Finnish Classes, Finland, Language Learning" />
      <meta name="author" content="Finlern" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO; 