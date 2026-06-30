"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, CheckCircle2, Users, Heart } from "lucide-react";

const openPositions = [
  {
    title: "Senior Full Stack Engineer (Next.js & Node.js)",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-Time",
    description: "Looking for an expert React/Next.js engineer to build enterprise client portals, real-time dashboards, and secure serverless APIs.",
    requirements: [
      "5+ years of experience with React, Next.js, and TypeScript",
      "Deep understanding of SQL databases (PostgreSQL) and ORMs (Prisma)",
      "Experience setting up REST/GraphQL APIs and Server Actions"
    ]
  },
  {
    title: "Cloud Infrastructure Architect (AWS / Kubernetes)",
    department: "DevOps & Infrastructure",
    location: "Hybrid (New York, NY)",
    type: "Full-Time",
    description: "Join us to orchestrate container deployments, optimize database configurations, and set up secure production CI/CD pipelines.",
    requirements: [
      "4+ years of cloud architecture experience (AWS/GCP preferred)",
      "Strong skills in Docker containerization and Kubernetes orchestration",
      "Experience with Infrastructure as Code (Terraform)"
    ]
  },
  {
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    description: "Design premium design systems, high-fidelity mockups, and client dashboards. Collaborate directly with engineers.",
    requirements: [
      "3+ years of experience in product design for B2B/SaaS web apps",
      "Mastery of Figma, component libraries, and interactive prototyping",
      "Strong understanding of responsive layouts and accessibility standards"
    ]
  }
];

export default function Careers() {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ paddingTop: "96px" }}>
      {/* Header Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Join the <span className="gradient-text">Averqon Team</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We are looking for senior engineers, designers, and systems architects who take pride in writing clean code and crafting exceptional products.
          </p>
        </div>
      </section>

      {/* Perks and Culture */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card border border-border rounded-xl space-y-4 text-center">
            <div className="p-3 bg-primary/10 text-primary w-fit mx-auto rounded-lg">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">Talented Team</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Work alongside senior builders. We avoid unnecessary bureaucracy to let you focus on technical design.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl space-y-4 text-center">
            <div className="p-3 bg-primary/10 text-primary w-fit mx-auto rounded-lg">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">Premium Benefits</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Enjoy competitive compensation packages, health insurance, remote setups, and dedicated learning budgets.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl space-y-4 text-center">
            <div className="p-3 bg-primary/10 text-primary w-fit mx-auto rounded-lg">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">Flexible Work</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We focus on deliverables and milestones, not screen time. Choose remote or hybrid workspace models.
            </p>
          </div>
        </div>
      </section>

      {/* Positions list */}
      <section className="py-16 px-4 bg-secondary/20 border-t border-border">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest">Open Positions</h2>
            <h3 className="text-3xl font-extrabold text-foreground">Find Your Next Role</h3>
            <p className="text-sm text-muted-foreground">
              Review the roles and disciplines that contribute to the work featured across this portfolio.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border p-6 sm:p-8 rounded-xl space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                        {job.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{job.title}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <a
                    href={`mailto:careers@averqon.com?subject=Application: ${job.title}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 h-10 text-sm font-semibold text-white bg-primary hover:bg-primary/95 rounded-lg transition-colors cursor-pointer"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="border-t border-border/50 pt-4 space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-foreground uppercase tracking-wider">Requirements:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {job.requirements.map((req) => (
                        <div key={req} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
