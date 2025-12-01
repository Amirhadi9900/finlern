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
const DEFAULT_TWITTER_HANDLE = '@Finlern';
const DEFAULT_KEYWORDS = [
  'Finlern',
  'Finnish life',
  'Finnish language mastery',
  'Finnish cultural integration',
  'Finnish relocation service',
  'Consulting services in Finland',
  'Relocation services in Finland',
  'Online Finnish courses',
  'Budget-friendly Finnish courses',
  'Relocation partner in Finland',
  'Complete integration support',
  'Language proficiency',
  'Cultural immersion',
  'Workplace etiquette',
  'Professional networking',
  'Learning Finnish',
  'Mastering Finnish',
  'Online English courses',
  'English courses in Finland',
];

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/finlern.png',
  ogImageAlt,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = DEFAULT_TWITTER_HANDLE,
  keywords,
  structuredData,
  noindex = false,
  robots,
}) => {
  const siteTitle = `${title} | ${SITE_NAME}`;
  const url = canonical || DEFAULT_URL;
  const keywordContent = keywords
    ? Array.isArray(keywords)
      ? keywords.join(', ')
      : keywords
    : DEFAULT_KEYWORDS.join(', ');
  const robotsContent = robots ?? (noindex ? 'noindex, nofollow' : 'index, follow');
  const imageAlt = ogImageAlt || `${SITE_NAME} featured image`;
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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
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
