const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// Your site URL
const WEBSITE_URL = 'https://finlern.com';
const PAGES_DIR = path.join(process.cwd(), 'src/pages');

async function generateSitemap() {
  console.log('Generating sitemap...');
  
  // Get all .tsx and .jsx files from the pages directory
  const pagePaths = getAllPages(PAGES_DIR);
  
  // Filter out pages that shouldn't be in sitemap
  const pages = pagePaths
    .filter(page => {
      // Filter out pages that shouldn't be in the sitemap
      return !(
        page.includes('_app') ||
        page.includes('_document') ||
        page.includes('api/') ||
        page.includes('404') ||
        page.includes('500')
      );
    })
    .map(page => {
      // Convert file paths to URLs
      const path = page
        .replace(PAGES_DIR, '')
        .replace(/\.(tsx|jsx)$/, '')
        .replace(/\/index$/, '/')
        .replace(/\[([^\]]+)\]/g, 'param'); // Replace dynamic routes with placeholders
      
      return `${WEBSITE_URL}${path}`;
    });

  // Create sitemap XML
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${
            url === WEBSITE_URL ? 'weekly' : 'monthly'
          }</changefreq>
          <priority>${url === WEBSITE_URL ? '1.0' : '0.8'}</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `;

  // Format the XML
  const formattedSitemap = await prettier.format(sitemap, {
    parser: 'html',
    printWidth: 100,
  });

  // Write sitemap to public directory
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    formattedSitemap
  );

  console.log('Sitemap generated!');
}

// Helper function to recursively get all pages
function getAllPages(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = getAllPages(filepath, filelist);
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
        filelist.push(filepath);
      }
    }
  });
  return filelist;
}

generateSitemap()
  .then(() => {
    console.log('Sitemap generation completed successfully!');
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
  }); 