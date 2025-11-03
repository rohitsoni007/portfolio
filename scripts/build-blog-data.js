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
    const { frontmatter, content } = parseFrontmatter(fileContent);
    
    const id = file.replace('.md', '');
    
    return {
      id,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      content,
      author: frontmatter.author || 'Unknown',
      publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
      readTime: frontmatter.readTime || 5,
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false,
      image: frontmatter.image || undefined
    };
  });
  
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Generate blog data file
function generateBlogData() {
  const posts = getBlogPostsFromMarkdown();
  
  const blogDataContent = `// Auto-generated blog data - DO NOT EDIT MANUALLY
// Generated at: ${new Date().toISOString()}

import type { BlogPost } from './constants';

export const BLOG_POSTS_DATA: BlogPost[] = ${JSON.stringify(posts, null, 2)};
`;

  const outputPath = path.join(path.dirname(__dirname), 'app', 'lib', 'blog-data.ts');
  fs.writeFileSync(outputPath, blogDataContent);
  
  console.log(`✅ Blog data generated: ${posts.length} posts`);
  console.log(`📝 File: app/lib/blog-data.ts`);
  
  return posts;
}

// Run the generation
generateBlogData();

export { generateBlogData, getBlogPostsFromMarkdown };