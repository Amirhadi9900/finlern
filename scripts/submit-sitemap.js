const https = require('https');
const fs = require('fs');
const path = require('path');

// Your site's domain (change this to your actual domain)
const DOMAIN = 'finlern.com';

// URLs for submitting sitemaps to search engines
const SEARCH_ENGINES = [
  // Google
  {
    name: 'Google',
    url: `https://www.google.com/ping?sitemap=https://${DOMAIN}/sitemap.xml`,
  },
  // Bing
  {
    name: 'Bing',
    url: `https://www.bing.com/ping?sitemap=https://${DOMAIN}/sitemap.xml`,
  },
];

/**
 * Submit sitemap to each search engine
 */
async function submitSitemap() {
  // First check if sitemap exists
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('Sitemap not found. Please generate it first with "npm run generate-sitemap"');
    process.exit(1);
  }
  
  console.log('Starting sitemap submission...');
  
  // Submit to each search engine
  for (const engine of SEARCH_ENGINES) {
    console.log(`Submitting to ${engine.name}...`);
    try {
      await pingSearchEngine(engine.url, engine.name);
      console.log(`✅ Successfully submitted to ${engine.name}`);
    } catch (error) {
      console.error(`❌ Failed to submit to ${engine.name}:`, error.message);
    }
  }
  
  console.log('Sitemap submission process completed.');
}

/**
 * Send a ping to search engine
 */
function pingSearchEngine(url, engineName) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const { statusCode } = res;
      
      if (statusCode !== 200) {
        reject(new Error(`Request failed with status code ${statusCode}`));
        return;
      }
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Run the submission
submitSitemap()
  .then(() => {
    console.log('All done! Sitemaps have been submitted to search engines.');
  })
  .catch((error) => {
    console.error('An error occurred during submission:', error);
    process.exit(1);
  }); 