import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command line arguments
const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('❌ Please provide a blog post title');
  console.log('Usage: npm run create-post "Your Blog Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

// Create blog post template
const template = `---
title: "${title}"
excerpt: "Brief description of your blog post..."
author: "Rohit Soni"
publishedAt: "${new Date().toISOString().split('T')[0]}"
readTime: 5
tags: ["Tag1", "Tag2", "Tag3"]
featured: false
image: "optional-image.jpg"
---

# ${title}

Write your blog post content here using Markdown syntax.

## Introduction

Start with an engaging introduction that hooks your readers.

## Main Content

Add your main content sections here.

### Subsection

You can use various markdown features:

- **Bold text**
- *Italic text*
- \`inline code\`
- [Links](https://example.com)

### Code Examples

\`\`\`javascript
// Add code examples
function example() {
  console.log('Hello, World!');
}
\`\`\`

### Lists

1. Numbered lists
2. Are also supported
3. Like this

## Conclusion

Wrap up your post with a strong conclusion.
`;

// Ensure content/blog directory exists
const contentDir = path.join(path.dirname(__dirname), 'content', 'blog');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Create the blog post file
const filePath = path.join(contentDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`❌ Blog post with slug "${slug}" already exists`);
  process.exit(1);
}

fs.writeFileSync(filePath, template);

console.log(`✅ Blog post created successfully!`);
console.log(`📝 File: content/blog/${slug}.md`);
console.log(`🔗 URL: /blog/${slug}`);
console.log(`\n📋 Next steps:`);
console.log(`1. Edit the frontmatter (title, excerpt, tags, etc.)`);
console.log(`2. Write your content using Markdown`);
console.log(`3. Set featured: true if you want it highlighted`);
console.log(`4. The post will automatically appear on your blog!`);