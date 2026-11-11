import React from 'react';
import Head from 'next/head';

type StructuredData = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  keywords?: string[] | string;
  structuredData?: StructuredData | StructuredData[];
  noindex?: boolean;
  robots?: string;
}

const SITE_NAME = 'Finlern';
const DEFAULT_URL = 'https://finlern.vercel.app';
const DEFAULT_KEYWORDS = [
  'Finlern',
  'Relocation support Finland',
  'International students in Finland',
  'Finnish residence permit support',
  'Kela and tax registration Finland',
  'Finnish language courses Finland',
  'English language courses Finland',
  'Violin lessons Finland',
  'Integration services Finland',
  'Settling in Finland',
];

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/finlern-og.png',
  ogImageAlt,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite,
  keywords,
  structuredData,
  noindex = false,
  robots,
}) => {
  const siteTitle = `${title} | ${SITE_NAME}`;
  const url = canonical || DEFAULT_URL;
  // Social crawlers refuse relative image URLs, so resolve against the page origin.
  let origin = DEFAULT_URL;
  try {
    origin = new URL(url).origin;
  } catch {
    origin = DEFAULT_URL;
  }
  const absoluteImage = /^https?:\/\//.test(ogImage) ? ogImage : `${origin}${ogImage}`;
  const keywordContent = keywords
    ? Array.isArray(keywords)
      ? keywords.join(', ')
      : keywords
    : DEFAULT_KEYWORDS.join(', ');
  const robotsContent = robots ?? (noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
  const imageAlt = ogImageAlt || 'Finlern logo';
  const schemaList = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={imageAlt} />
      {/* Every social image on this site is 1200x630; a page that passes a
          different ogImage must supply a same-sized asset. */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_FI" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      
      {/* Structured Data / Schema.org */}
      {schemaList.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default SEO; 
