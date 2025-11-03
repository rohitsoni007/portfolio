import { useParams, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";
import { getPostBySlug, getRelatedPosts, formatDate } from "@/lib/blog";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  const post = getPostBySlug(params.slug!);
  
  if (!post) {
    return [
      { title: "Post Not Found | Blog" },
      { name: "description", content: "The requested blog post could not be found." }
    ];
  }

  return [
    { title: `${post.title} | ${SITE_METADATA.author}` },
    { name: "description", content: post.excerpt },
    { name: "keywords", content: post.tags.join(", ") },
    { name: "author", content: post.author },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:type", content: "article" },
    { property: "article:author", content: post.author },
    { property: "article:published_time", content: post.publishedAt },
    { property: "article:tag", content: post.tags.join(", ") },
  ];
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug!);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Blog */}
      <div className="pt-20 pb-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <MarkdownRenderer content={post.content} />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share this post:</span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const url = window.location.href;
                      const text = `Check out this article: ${post.title}`;
                      if (navigator.share) {
                        navigator.share({ title: post.title, text, url });
                      } else {
                        navigator.clipboard.writeText(`${text} ${url}`);
                      }
                    }}
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{relatedPost.readTime} min</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:underline">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {relatedPost.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all duration-300 text-sm"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}