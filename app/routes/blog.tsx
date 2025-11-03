import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BLOG_CONFIG, BLOG_CATEGORIES, SITE_METADATA } from "@/lib/constants";
import { getAllPosts, getFeaturedPosts, getPostsByTag, formatDate } from "@/lib/blog";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: `${BLOG_CONFIG.title} | ${SITE_METADATA.author}` },
    { name: "description", content: BLOG_CONFIG.description },
    { name: "keywords", content: "blog, web development, MERN stack, React Native, programming, tutorials" },
    { property: "og:title", content: `${BLOG_CONFIG.title} | ${SITE_METADATA.author}` },
    { property: "og:description", content: BLOG_CONFIG.description },
    { property: "og:type", content: "website" },
  ];
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const allPosts = getAllPosts();
  const filteredPosts = selectedCategory === "All" 
    ? allPosts 
    : getPostsByTag(selectedCategory);

  const featuredPosts = getFeaturedPosts();
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            {BLOG_CONFIG.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {BLOG_CONFIG.subtitle}
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {BLOG_CONFIG.description}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {BLOG_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {selectedCategory !== "All" && (
            <h2 className="text-3xl font-bold mb-8 text-center">
              {selectedCategory} Posts
            </h2>
          )}
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No posts found in this category.
              </p>
              <Button onClick={() => setSelectedCategory("All")} variant="outline">
                View All Posts
              </Button>
            </div>
          ) : (
            <div className="grid gap-8">
              {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      <Link to={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            onClick={() => setSelectedCategory(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all duration-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}