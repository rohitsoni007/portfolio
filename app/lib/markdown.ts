import type { BlogPost } from './constants';
import { BLOG_POSTS_DATA } from './blog-data';

// Get all blog posts
export function getBlogPostsFromMarkdown(): BlogPost[] {
  return BLOG_POSTS_DATA;
}

// Get a single blog post by slug
export function getBlogPostFromMarkdown(slug: string): BlogPost | null {
  return BLOG_POSTS_DATA.find(post => post.id === slug) || null;
}