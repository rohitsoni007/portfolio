import { type BlogPost } from "./constants";
import { getBlogPostsFromMarkdown, getBlogPostFromMarkdown } from "./markdown";

/**
 * Get all blog posts sorted by publish date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  return getBlogPostsFromMarkdown();
}

/**
 * Get a blog post by its slug/id
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPostFromMarkdown(slug) || undefined;
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getBlogPostsFromMarkdown();
  return allPosts.filter(post => post.featured);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getBlogPostsFromMarkdown();
  return allPosts.filter(post => post.tags.includes(tag));
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getBlogPostsFromMarkdown();
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .sort((a, b) => {
      // Sort by number of shared tags, then by publish date
      const aSharedTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bSharedTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      
      if (aSharedTags !== bSharedTags) {
        return bSharedTags - aSharedTags;
      }
      
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allPosts = getBlogPostsFromMarkdown();
  const tags = new Set<string>();
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Calculate estimated reading time based on content length
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Search posts by title, excerpt, or content
 */
export function searchPosts(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase();
  const allPosts = getBlogPostsFromMarkdown();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}