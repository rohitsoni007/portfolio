import { writeFileSync } from "fs";
import { join } from "path";

// Get the current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

// Sitemap content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rohitsoni.dev/</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rohitsoni.dev/#about</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rohitsoni.dev/#projects</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rohitsoni.dev/#contact</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

// Write sitemap to public directory
const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(sitemapPath, sitemapContent);

console.log("Sitemap generated successfully at:", sitemapPath);

// Robots.txt content
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://rohitsoni.dev/sitemap.xml`;

// Write robots.txt to public directory
const robotsPath = join(process.cwd(), "public", "robots.txt");
writeFileSync(robotsPath, robotsContent);

console.log("Robots.txt generated successfully at:", robotsPath);
