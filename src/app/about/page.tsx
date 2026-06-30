"use client";

import { motion } from "framer-motion";
import { Award, Shield, Users, Lightbulb, HeartHandshake } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Enterprise Trust",
    description: "We enforce strict security protocols, HIPAA/GDPR readiness, and full data isolation in every system we deploy."
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description: "We don't settle for 'good enough'. Our codebases are strictly typed, modular, and optimized for speed."
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We actively prototype with emerging models, cloud features, and design tools to give clients a competitive edge."
  },
  {
    icon: Users,
    title: "Client-Centricity",
    description: "We pair direct engineering communication with transparent roadmaps to ensure your business goals are met."
  }
];

const milestones = [
  { year: "2025", title: "Averqon Founded", details: "Established to deliver focused product engineering across web, SaaS, and business platforms." },
  { year: "2025", title: "Enterprise ERP Delivery", details: "Expanded the portfolio with integrated warehouse, HR, and ledger solutions for logistics teams." },
  { year: "2026", title: "Multi-disciplinary Engineering", details: "Brought cloud architecture, AI engineering, design, and quality assurance into one delivery practice." },
  { year: "2026", title: "AI & ML Portfolio Expansion", details: "Added generative AI workflows, retrieval systems, and vector search to the portfolio." }
];

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ paddingTop: "96px" }}>
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            About <span className="gradient-text">Averqon</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We are a highly specialized software engineering partner, helping modern enterprises architect, build, and deploy high-availability digital solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest">Our Mission</h2>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Bridging the Gap Between Complex Architecture and Sleek Interfaces
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              At Averqon, we believe software should be both extremely powerful and exceptionally easy to use. We combine secure cloud infrastructure, robust APIs, and modern frontends to create digital platforms that users love and databases that scale.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We operate as a direct extension of your technology team, avoiding layered agency structures to ensure clear communication, rapid prototyping, and clean, maintainable code.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="p-8 md:p-12 bg-secondary/30 border border-border rounded-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="text-sm font-bold text-primary flex items-center gap-2">
                <HeartHandshake className="h-5 w-5" /> Our Commitments
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">Lighthouse scores exceeding 95 in all categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">100% test coverage on critical api modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">Direct communication with senior engineers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 px-4 bg-secondary/20 border-y border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest">Our Culture</h2>
            <h3 className="text-3xl font-extrabold text-foreground">Our Core Corporate Values</h3>
            <p className="text-sm text-muted-foreground">
              These principles guide how we structure code, interact with clients, and manage deployment cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card border border-border p-6 rounded-xl space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest">Our Journey</h2>
            <h3 className="text-3xl font-extrabold text-foreground">Evolution of Averqon</h3>
            <p className="text-sm text-muted-foreground">
              A brief timeline of our growth, technological focus, and milestones.
            </p>
          </div>

          <div className="relative border-l border-border pl-8 ml-4 space-y-10">
            {milestones.map((milestone, i) => (
              <motion.div
                key={`${milestone.year}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Bullet */}
                <span className="absolute -left-[45px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-background border-2 border-primary shadow-sm font-bold text-xs text-primary">
                  {milestone.year.substring(2)}
                </span>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    {milestone.title} ({milestone.year})
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {milestone.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary text-background py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">See How Averqon Delivers</h2>
          <p className="text-sm md:text-base text-background/80 max-w-lg mx-auto font-medium">
            Explore the challenges, systems, and results that define our approach to product engineering.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 h-12 text-sm font-semibold text-primary bg-background hover:bg-background/95 rounded-lg shadow-md transition-colors"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
