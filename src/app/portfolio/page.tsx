"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const categories = ["All", "Web", "Mobile", "AI & ML", "SaaS", "ERP & Cloud"];

const projects = [
  {
    title: "AverLink Logistics",
    category: "ERP & Cloud",
    description: "A NEXT-GEN logistics platform optimizing fleet management with real-time tracking and predictive maintenance.",
    image: "/averlink_logistics.png",
    demoLink: "#",
    tags: ["React", "Node.js", "AWS IoT", "Python"],
  },
  {
    title: "NeoRetail Core",
    category: "Web",
    description: "Multi-tenant e-commerce engine serving 1M+ monthly users with integrated AI-driven inventory forecasting.",
    image: "/neoretail_core.png",
    demoLink: "#",
    tags: ["Next.js", "PostgreSQL", "Redis", "TensorFlow"],
  },
  {
    title: "Pulse Health App",
    category: "Mobile",
    description: "HIPAA-compliant telemedicine suite featuring real-time video consultation and encrypted patient records.",
    image: "/pulse_health.png",
    demoLink: "#",
    tags: ["React Native", "Firebase", "WebRTC", "Go"],
  },
  {
    title: "Sentient Analytics",
    category: "AI & ML",
    description: "Real-time sentiment analysis platform for hedge funds, processing millions of financial news feeds hourly.",
    image: "/sentient_analytics.png",
    demoLink: "#",
    tags: ["PyTorch", "Rust", "Apache Kafka", "Next.js"],
  },
  {
  title: "EduSphere ERP",
  category: "ERP & Cloud",
  description:
    "A comprehensive cloud-based School & College ERP platform featuring admissions, attendance, examinations, fee management, LMS integration, and parent communication.",
  image: "/edusphere_erp.png",
  demoLink: "#",
  tags: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
},
{
  title: "FinGuard Banking Suite",
  category: "SaaS",
  description:
    "A secure digital banking platform with AI-powered fraud detection, real-time payment processing, customer onboarding, and financial analytics dashboards.",
  image: "/finguard_suite.png",
  demoLink: "#",
  tags: ["React", "Node.js", "MongoDB", "AWS"],
},
{
  title: "RetroStylings",
  category: "Web",
  description:
    "A modern fashion e-commerce platform built for a premium shopping experience, featuring secure payments, product management, order tracking, customer accounts, wishlist, and an AI-powered product recommendation system.",
  image: "/retrostylings.png",
  demoLink: "https://retrostylings.com",
  tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
},
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.page}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Selected work</p>
          <h1 className={styles.title}>
            Our Corporate <span className={styles.accent}>Project Portfolio</span>
          </h1>
          <p className={styles.intro}>
            Discover how we collaborate with business leaders to build robust software systems that streamline operations and drive value.
          </p>
        </div>
      </section>

      {/* Grid and Controls */}
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          {/* Controls Panel */}
          <div className={styles.controls}>
            {/* Category tabs */}
            <div className={styles.filters} aria-label="Filter projects by category">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${styles.filter} ${selectedCategory === category ? styles.filterActive : ""}`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className={styles.search}>
              <Search className={styles.searchIcon} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search projects"
              />
            </div>
          </div>

          {/* Grid list */}
          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={styles.card}
                >
                  <div className={styles.media}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      <div className={styles.category}>
                        {project.category}
                      </div>
                      <h3 className={styles.cardTitle}>
                        {project.title}
                      </h3>
                      <p className={styles.description}>
                        {project.description}
                      </p>
                    </div>

                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.cardFooter}>
                      <Link
                        href={`/case-studies`}
                        className={styles.caseLink}
                      >
                        Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className={styles.demoLink}
                        >
                          Demo <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className={styles.empty}>
              <Briefcase className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>No projects found</h3>
              <p className={styles.emptyText}>
                Try adjusting your search query or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case studies banner */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Explore the Work in Depth</h2>
          <p className={styles.ctaText}>
            Read the challenges, engineering decisions, and measurable outcomes behind selected projects.
          </p>
          <Link href="/case-studies" className={styles.ctaButton}>
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
