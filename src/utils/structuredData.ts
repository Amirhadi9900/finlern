type StructuredData = Record<string, unknown>;

export const SITE_URL = 'https://finlern.vercel.app';
export const ORG_ID = `${SITE_URL}/#organization`;

// Teaching happens online; only the Conversation Club meets in person, in the
// Pirkanmaa cities below. LocalBusiness markup would imply a walk-in office.
export const organizationSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EducationalOrganization'],
  '@id': ORG_ID,
  name: 'Finlern',
  legalName: 'Finlern Oy',
  // Every value below is stated on our-story.tsx, so the entity Google builds
  // from the JSON-LD matches the page it can already read.
  foundingDate: '2024',
  founder: { '@type': 'Person', name: 'Hamid Reza Ghorbani' },
  slogan: 'Empowering integration through education and culture',
  knowsLanguage: ['English', 'Finnish', 'Kurdish', 'Persian'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/finlern-logo-512.png`,
  description:
    'Relocation support for international students and professionals in Finland — accommodation, residency and Kela paperwork — plus Finnish and English language courses and violin lessons.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tietotie 1, Häme University of Applied Sciences',
    addressLocality: 'Valkeakoski',
    postalCode: '37630',
    addressRegion: 'Pirkanmaa',
    addressCountry: 'FI',
  },
  // Every day except Sunday, per the CEO's confirmed working schedule.
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '00:00',
      closes: '23:59',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/people/Finlern/61578171630486/',
    'https://www.instagram.com/finlernoy/',
    'https://www.linkedin.com/company/finlern-oy/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+358417567339',
    email: 'info@finlern.fi',
    availableLanguage: ['English', 'Finnish', 'Kurdish', 'Persian'],
  },
};

// Cities where Finlern offers relocation services, as listed on /contact/.
const areaServedSchema: StructuredData[] = [
  'Helsinki',
  'Espoo',
  'Vantaa',
  'Tampere',
  'Valkeakoski',
  'Hämeenlinna',
  'Forssa',
  'Lahti',
  'Lappeenranta',
  'Riihimäki',
  'Jyväskylä',
].map((name) => ({ '@type': 'City', name }));

// Lets every page point at the single organization entity declared on the home
// page instead of re-declaring an Organization with the same name.
export const providerRef: StructuredData = { '@id': ORG_ID };

// A WebSite entity ties the site-wide brand to the organization, which matters
// more on a platform subdomain than on a owned domain.
export const webSiteSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Finlern',
  inLanguage: 'en-FI',
  publisher: providerRef,
};

const RELOCATION_SERVICES = [
  'Accommodation & Housing',
  'School Enrollment for Children',
  'Special Residency Solutions',
  'Administrative & Government Affairs (Kela, tax card, bank account, permits)',
  'Car Purchase & Registration',
  'Translation & Interpreter Services',
  'Residential & Social Integration Support',
  'Airport Transfer & Transportation Services',
  'Phone Consultation & Support',
];

export const relocationServiceSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#relocation-service`,
  name: 'Relocation & Integration Support in Finland',
  serviceType: 'Relocation support for international students, families and employees',
  description:
    'End-to-end support for moving to and settling in Finland: housing search, school enrollment, residency permits, Kela and tax registration, bank accounts, car registration, translation and social integration.',
  provider: providerRef,
  areaServed: areaServedSchema,
  audience: {
    '@type': 'Audience',
    audienceType: 'International students, families and skilled workers relocating to Finland',
  },
  offers: {
    '@type': 'Offer',
    name: 'Free 20-minute consultation',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/contact/`,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Relocation services',
    itemListElement: RELOCATION_SERVICES.map((name) => ({
      '@type': 'Offer',
      name,
    })),
  },
};
