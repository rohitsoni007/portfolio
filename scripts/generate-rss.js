import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple frontmatter parser
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const [, frontmatterStr, markdownContent] = match;
  const frontmatter = {};
  
  // Parse YAML-like frontmatter
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => 
          item.trim().replace(/^["']|["']$/g, '')
        );
      }
      
      // Parse booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Parse numbers
      if (!isNaN(Number(value)) && value !== '') {
        value = Number(value);
      }
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: markdownContent };
}

// Get blog posts from markdown files
function getBlogPostsFromMarkdown() {
  const contentDir = path.join(path.dirname(__dirname), 'content', 'blog');
  
  if (!fs.existsSync(contentDir)) {
    console.warn('Blog content directory not found:', contentDir);
    return [];
  }
  
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter } = parseFrontmatter(fileContent);
    
    const id = file.replace('.md', '');
    
    return {
      id,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      author: frontmatter.author || 'Unknown',
      publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
      readTime: frontmatter.readTime || 5,
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false
    };
  });
  
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Import the RSS generation function
// Note: This is a simplified version since we can't directly import TS files in Node.js
// In a real scenario, you'd compile the TS files first or use ts-node

const SITE_METADATA = {
  title: "MERN, MEAN & React Native Developer | Portfolio",
  description: "Full-stack MERN MEAN developer specializing in React Native mobile apps, Node.js backends, and modern web development. View my portfolio and projects.",
  author: "Rohit Soni"
};

const BLOG_CONFIG = {
  title: "Blog",
  description: "Sharing insights from my journey as a full-stack developer, covering MERN stack, React Native, and modern web development practices."
};

function generateRSSFeed() {
  const posts = getBlogPostsFromMarkdown().slice(0, 10);
  const baseUrl = "https://rohitsoni007.github.io/portfolio";
  
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

function generateSitemap() {
  const posts = getBlogPostsFromMarkdown();
  const baseUrl = "https://rohitsoni007.github.io/portfolio";
  
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

// Generate blog data first (to ensure we have the latest posts)
console.log('📝 Generating blog data...');
const posts = getBlogPostsFromMarkdown();

// Generate RSS feed
const rssContent = generateRSSFeed();
const sitemapContent = generateSitemap();

// Ensure build/client directory exists
const buildDir = path.join(path.dirname(__dirname), 'build', 'client');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Write RSS feed
fs.writeFileSync(path.join(buildDir, 'rss.xml'), rssContent);
console.log('✅ RSS feed generated at build/client/rss.xml');

// Write sitemap
fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemapContent);
console.log('✅ Sitemap generated at build/client/sitemap.xml');