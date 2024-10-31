// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.liam-haller.com' });
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/projects', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.7 },
    { url: '/contact', changefreq: 'yearly', priority: 0.5 },
    // Add more pages if needed
  ];

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then((data) => data.toString());
  writeFileSync('static/sitemap.xml', sitemapXML);  // Saves to the static folder
}

generateSitemap();
