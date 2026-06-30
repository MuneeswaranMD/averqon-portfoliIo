"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Tech & Cloud", "AI & Automation", "UX Design", "Business Growth"];

const blogPosts = [
  {
    title: "Scaling PostgreSQL Database for High Write Throughput",
    category: "Tech & Cloud",
    summary: "Learn how we configured connection pooling, index optimizations, and lock-free triggers to scale database write loads to 15,000+ writes/second.",
    date: "June 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Why We Recommend Next.js App Router for Corporate Portals",
    category: "Tech & Cloud",
    summary: "Next.js App Router combines structural page speeds with incremental static regeneration, improving SEO visibility and reducing server hosting bills.",
    date: "June 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Incorporating Vector Search and RAG in Legacy Applications",
    category: "AI & Automation",
    summary: "How retrieval-augmented generation (RAG) and Pinecone vector search allow enterprises to extract insights from legacy PDFs and database documents.",
    date: "May 30, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Heuristic Design: Creating Premium B2B Dashboards",
    category: "UX Design",
    summary: "A breakdown of visual hierarchies, responsive grid structures, and accessibility standards for enterprise SaaS portal designs.",
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Security Frameworks: Achieving HIPAA Compliance",
    category: "Business Growth",
    summary: "Essential technical configurations, data encryption keys, and developer auditing schedules needed to clear corporate healthcare software reviews.",
    date: "April 24, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen" style={{ paddingTop: "96px" }}>
      {/* Header Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Technology &amp; Design <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Technical papers, case studies, and engineering guidelines from the Averqon development and design teams.
          </p>
        </div>
      </section>

      {/* Grid and Filters */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border/80 pb-6">
            <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-background border border-border text-sm rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  layout
                  key={post.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 w-full bg-secondary overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link
                        href="#"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Read Article <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 space-y-2">
              <BookOpen className="h-10 w-10 text-muted-foreground/50 mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">No articles found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search query or filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
