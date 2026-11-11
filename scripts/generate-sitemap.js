const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { execSync } = require('child_process');

// Date the page's own source last changed, not the build date. Stamping every
// URL with "today" on every deploy teaches Google to ignore lastmod. If git is
// unavailable (a shallow clone during a Vercel build) the tag is omitted.
function lastModified(relPagePath) {
  try {
    const stamp = execSync(`git log -1 --format=%cs -- "src/pages/${relPagePath}"`, {
      encoding: 'utf8',
      cwd: process.cwd(),
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(stamp) ? stamp : null;
  } catch (err) {
    return null;
  }
}

// Your site URL
const WEBSITE_URL = 'https://finlern.vercel.app';
const PAGES_DIR = path.join(process.cwd(), 'src/pages');

async function generateSitemap() {
  console.log('Generating sitemap...');
  
  // Get all .tsx and .jsx files from the pages directory
  const pagePaths = getAllPages(PAGES_DIR);
  
  // Build URLs from paths relative to the pages dir, normalised to forward
  // slashes so the output is identical on Windows and Linux.
  const EXCLUDED = /(^|\/)(_app|_document|_error|404|500)(\.(tsx|jsx))?$|(^|\/)api\//;

  // These pages carry noindex, so listing them in the sitemap would contradict
  // the robots directive.
  const NOINDEX_PAGES = ['terms', 'cookies', 'privacy-policy'];

  const HOME_URL = `${WEBSITE_URL}/`;

  const pages = pagePaths
    .map((page) => path.relative(PAGES_DIR, page).split(path.sep).join('/'))
    .filter((rel) => !EXCLUDED.test(rel))
    .filter((rel) => !NOINDEX_PAGES.includes(rel.replace(/\.(tsx|jsx)$/, '')))
    .map((rel) => {
      const route = rel
        .replace(/\.(tsx|jsx)$/, '')
        .replace(/(^|\/)index$/, '')
        .replace(/\[([^\]]+)\]/g, 'param');
      // trailingSlash is enabled, so every canonical URL ends with a slash.
      return { url: `${WEBSITE_URL}${route ? `/${route}` : ''}/`, lastmod: lastModified(rel) };
    })
    .sort((a, b) => a.url.localeCompare(b.url));

  // Create sitemap XML
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          ({ url, lastmod }) => `
        <url>
          <loc>${url}</loc>
          ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
          <changefreq>${
            url === HOME_URL ? 'weekly' : 'monthly'
          }</changefreq>
          <priority>${url === HOME_URL ? '1.0' : '0.8'}</priority>
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