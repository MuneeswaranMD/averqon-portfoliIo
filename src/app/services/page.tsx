"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Cpu,
  Cloud,
  Palette,
  TrendingUp,
  Check,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "High-performance enterprise websites and custom web applications.",
    description: "We design and build secure, fast, and SEO-optimized web systems utilizing cutting-edge frameworks like Next.js, React, and server-side rendering architectures. Our systems are engineered to handle high concurrent traffic while preserving layout consistency.",
    features: [
      "Custom Server-Side Rendered (SSR) & Static Site Generation (SSG)",
      "Next.js App Router & Server Actions architecture",
      "API Integrations & headless CMS configurations",
      "W3C & WCAG AA accessibility standards compliance",
      "Ultra-fast core web vitals optimization (Lighthouse > 95)"
    ]
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Cross-platform mobile products for iOS and Android.",
    description: "Launch native-performing mobile applications using React Native and Flutter. We manage the entire lifecycle from early layout design to deployment in the Apple App Store and Google Play Store.",
    features: [
      "Cross-platform codebase efficiency (React Native / Flutter)",
      "Offline-first synchronization systems",
      "Real-time notifications and device API integrations",
      "Biometric security and keychain authentication",
      "Continuous delivery setup (Fastlane & App Center)"
    ]
  },
  {
    id: "erp",
    icon: Layers,
    title: "ERP Solutions",
    tagline: "Integrated enterprise systems to unify your organization.",
    description: "Streamline operations with fully integrated custom ERP modules. Manage inventory tracking, accounting, HR operations, CRM modules, and automated report generators under a single secure dashboard.",
    features: [
      "Custom inventory, warehousing, and supply chain tracking",
      "Automated financial forecasting & ledger generation",
      "HR portals, payroll scheduling, and performance monitoring",
      "Robust data synchronization with legacy APIs",
      "Granular RBAC (Role-Based Access Control) permissions"
    ]
  },
  {
    id: "saas",
    icon: Database,
    title: "SaaS Development",
    tagline: "Scalable multi-tenant cloud-hosted software products.",
    description: "We help tech startups and companies build modern multi-tenant SaaS architectures from the ground up, incorporating subscription checkout routes, tenant management, and user isolation databases.",
    features: [
      "Multi-tenant database schema isolation models",
      "Subscription plans & Stripe/LemonSqueezy integrations",
      "Comprehensive admin metrics and usage logs",
      "Secure API key management and token tracking",
      "Dynamic theme, white-labeling and domain routing"
    ]
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Solutions",
    tagline: "Unlock automation and insight with custom machine learning.",
    description: "Incorporate generative AI and machine learning models directly into your business. We engineer retrieval-augmented generation (RAG) systems, LLM fine-tuning, and intelligent agents that reduce customer support response times.",
    features: [
      "Generative AI & LLM (OpenAI, Gemini) integrations",
      "Custom RAG architectures with vector databases (Pinecone, pgvector)",
      "Predictive analytical algorithms and sales modeling",
      "NLP text synthesis and automated summarization workflows",
      "AI-driven customer service bots and chat support"
    ]
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Secure cloud infrastructure designed for high availability.",
    description: "Automate your infrastructure provisioning, deployment, and monitoring. We containerize apps with Docker, orchestrate with Kubernetes, and deploy across AWS, GCP, and Azure using Infrastructure as Code.",
    features: [
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Zero-downtime CI/CD build scripts (GitHub Actions, GitLab CI)",
      "Kubernetes (EKS/GKE) and serverless deployments",
      "Comprehensive Grafana, Prometheus, and CloudWatch tracking",
      "Automated database backup schedules and recovery paths"
    ]
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Human-centric designs that prioritize customer conversions.",
    description: "Our design process starts with deep user research. We build wireframes, high-fidelity prototypes, and design systems in Figma that prioritize ease of navigation and corporate identity.",
    features: [
      "User research, persona mapping, and flow diagramming",
      "Interactive high-fidelity wireframes and Figma designs",
      "Comprehensive design systems and component guidelines",
      "Responsive UI layout prototypes across mobile & web",
      "Heuristic evaluations and usability testing loops"
    ]
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Data-driven advertising campaigns focused on conversions.",
    description: "Increase lead acquisition rates with optimized digital campaigns. We handle organic search engine optimization, pay-per-click management, content scheduling, and Conversion Rate Optimization (CRO).",
    features: [
      "Technical SEO Auditing & content planning pipelines",
      "Pay-Per-Click (PPC) setup on Google Ads and LinkedIn",
      "Funnel mapping and Conversion Rate Optimization (CRO)",
      "Comprehensive analytics integration (Google Analytics 4 / GTM)",
      "Automated lead nurturing email triggers"
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ paddingTop: "96px" }}>
      {/* Header Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
          >
            Our Enterprise <span className="gradient-text">Engineering Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            We supply end-to-end technical execution, aligning security compliance, speed, and premium design standards with your corporate roadmap.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 scroll-mt-24 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                    <Icon className="h-5 w-5" />
                    <span>{service.title}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                    {service.tagline}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-1.5 px-5 h-11 text-sm font-semibold text-white bg-primary hover:bg-primary/95 rounded-lg shadow-sm transition-colors"
                    >
                      View Relevant Work
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center justify-center px-5 h-11 text-sm font-semibold text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors border border-border"
                    >
                      Read Case Studies
                    </Link>
                  </div>
                </motion.div>

                {/* Decorative Visual Card Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 w-full max-w-lg lg:max-w-none"
                >
                  <div className="p-8 md:p-12 glass-card rounded-2xl relative overflow-hidden h-72 sm:h-96 flex flex-col justify-between border border-border/80 shadow-md">
                    {/* Background blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      AVERQON TECHNOLOGY STACK
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="text-2xl font-black text-foreground/80 opacity-5">
                        {service.title.toUpperCase()}
                      </div>
                      <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                        Built for Performance & Security
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border/50">
                      <span className="px-2 py-1 rounded bg-secondary font-medium">99.9% Uptime</span>
                      <span className="px-2 py-1 rounded bg-secondary font-medium">GDPR Ready</span>
                      <span className="px-2 py-1 rounded bg-secondary font-medium">ISO 27001 standard</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Callout banner */}
      <section className="bg-secondary/40 border-y border-border py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            See These Capabilities in Practice
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Explore the products, platforms, and measurable outcomes behind our engineering capabilities.
          </p>
          <div className="pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/95 rounded-lg shadow-md transition-colors"
            >
              Explore Project Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
