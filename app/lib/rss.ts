import { getAllPosts } from "./blog";
import { SITE_METADATA, BLOG_CONFIG } from "./constants";

export function generateRSSFeed(): string {
  const posts = getAllPosts().slice(0, 10); // Latest 10 posts
  const baseUrl = "https://rohitsoni007.github.io/portfolio"; // Update with your actual domain
  
  const rssItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.id}</link>
      <guid>${baseUrl}/blog/${post.id}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author}</author>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${BLOG_CONFIG.title} | ${SITE_METADATA.author}]]></title>
    <description><![CDATA[${BLOG_CONFIG.description}]]></description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <managingEditor>${SITE_METADATA.author}</managingEditor>
    <webMaster>${SITE_METADATA.author}</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>React Router Blog</generator>
    ${rssItems}
  </channel>
</rss>`;
}

export function generateSitemap(): string {
  const posts = getAllPosts();
  const baseUrl = "https://rohitsoni007.github.io/portfolio"; // Update with your actual domain
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/resume', priority: '0.8', changefreq: 'monthly' },
  ];
  
  const blogPages = posts.map(post => ({
    url: `/blog/${post.id}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.publishedAt
  }));
  
  const allPages = [...staticPages, ...blogPages];
  
  const urlEntries = allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries}
</urlset>`;
}