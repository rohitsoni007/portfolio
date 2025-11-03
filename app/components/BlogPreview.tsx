import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getFeaturedPosts, formatDate } from "@/lib/blog";

export const BlogPreview = () => {
  const featuredPosts = getFeaturedPosts().slice(0, 2); // Show only 2 featured posts

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Latest from the Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{post.readTime} min read</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  <Link to={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all duration-300 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="gradient-primary hover:glow-primary transition-all duration-300">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};