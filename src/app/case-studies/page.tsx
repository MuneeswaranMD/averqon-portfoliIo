"use client";

import { useState, useEffect, Suspense } from "react";
import { Quote, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const caseStudies = [
  {
    id: "averlink-logistics",
    title: "AverLink Logistics",
    category: "ERP & Cloud",
    client: "Meridian Global",
    summary: "How we architected a next-gen logistics platform optimizing fleet management with real-time tracking and predictive maintenance.",
    problem: "Meridian Global faced transit coordination gaps, manual dispatch inefficiencies, and high vehicle failure rates. The lack of live tracking led to massive shipping delays and inventory unpredictability.",
    solution: "We designed an end-to-end fleet tracking portal integrating AWS IoT Core for streaming device parameters, combined with a React-based dispatcher interface and a predictive maintenance module powered by Python analytics.",
    process: [
      { phase: "IoT Stream Ingestion", details: "Built highly resilient MQTT broker endpoints with AWS IoT to stream location data every 10 seconds." },
      { phase: "Predictive Health Models", details: "Trained telemetry classification models to detect starter motor and alternator failures before they occur." },
      { phase: "Real-time Dispatch Layout", details: "Engineered a map-centric dispatcher dashboard using React and Node.js for tracking and dynamic route reassignment." }
    ],
    results: [
      { label: "Fleet Efficiency", value: "+38%" },
      { label: "Maintenance Costs", value: "-45%" },
      { label: "ETA Accuracy Rate", value: "99.2%" }
    ],
    technologies: ["React", "Node.js", "AWS IoT", "Python", "PostgreSQL", "Docker"],
    feedback: "Averqon didn't just build a product; they architected a solution that redefined our operational efficiency. Their depth in AI integration is truly industry-leading.",
    author: "Eleanor Thorne",
    role: "CTO at Meridian Global"
  },
  {
    id: "neobank",
    title: "NeoRetail Core",
    category: "Web & SaaS",
    client: "ZenDesk Systems",
    summary: "Engineering a multi-tenant e-commerce engine serving 1M+ monthly users with integrated AI-driven inventory forecasting.",
    problem: "ZenDesk's retail partners suffered from system slowdowns during high-traffic events, and poor stock allocation planning led to regular inventory stockouts during peak holiday quarters.",
    solution: "We built a modular, headless e-commerce architecture utilizing Next.js for incremental static regeneration and a secure PostgreSQL/Redis database setup. We integrated a TensorFlow microservice that forecasts regional product demand.",
    process: [
      { phase: "Database Normalization", details: "Partitioned multi-tenant client databases to prevent cross-tenant data leaks and improve query performance." },
      { phase: "TensorFlow Forecasting", details: "Constructed deep learning demand models using historical order logs, temperature trends, and regional shopping patterns." },
      { phase: "High-Throughput Caching", details: "Structured a Redis cluster to serve product detail payloads under 15ms, handling peak concurrency." }
    ],
    results: [
      { label: "Monthly Active Users", value: "1M+" },
      { label: "Checkout Response", value: "<150ms" },
      { label: "Stockout Reduction", value: "85%" }
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis", "TensorFlow", "Kubernetes", "Tailwind"],
    feedback: "The technical rigour and project management from the Averqon team are exceptional. They delivered a high-availability legacy migration 3 weeks ahead of schedule.",
    author: "David Matsumo",
    role: "VP of Engineering, ZenDesk"
  },
  {
    id: "pulse-health",
    title: "Pulse Health App",
    category: "Mobile",
    client: "Ark Technologies",
    summary: "Designing a HIPAA-compliant telemedicine suite featuring real-time video consultation and encrypted patient records.",
    problem: "Ark Technologies needed to deliver a highly secure telemedicine portal. Achieving low-latency peer-to-peer video streaming alongside rigid HIPAA compliance was a significant technical blocker.",
    solution: "We engineered a dual-platform React Native mobile app connected to a Go microservices backend. We set up encrypted WebRTC streams for consultations and stored healthcare records using AWS KMS keychains.",
    process: [
      { phase: "HIPAA Security Audit", details: "Configured end-to-end data encryption in transit and at rest, and set up comprehensive access auditing." },
      { phase: "P2P WebRTC Optimization", details: "Structured custom STUN/TURN server routes to ensure connection stability even on cellular networks." },
      { phase: "Go Backend Execution", details: "Built a high-performance Go API layer to handle real-time medical scheduling and message synchronization." }
    ],
    results: [
      { label: "Consultation Latency", value: "<180ms" },
      { label: "Compliance Score", value: "100%" },
      { label: "Monthly Sessions", value: "40K+" }
    ],
    technologies: ["React Native", "Firebase", "WebRTC", "Go", "TypeScript", "Docker"],
    feedback: "Averqon is the ultimate partner for scaling startups. Their UI/UX vision combined with robust backend engineering gave us the edge we needed in a crowded market.",
    author: "Clarissa Vance",
    role: "Founder of Ark Technologies"
  },
  {
    id: "sentient-analytics",
    title: "Sentient Analytics",
    category: "AI & ML",
    client: "Alpha Hedge Capital",
    summary: "Developing a real-time sentiment analysis platform for hedge funds, processing millions of financial news feeds hourly.",
    problem: "Alpha Hedge required instant sentiment classification of market feeds to automate trade alerts. Parsing millions of news feeds, SEC filings, and transcripts manually was slow and inefficient.",
    solution: "We constructed a PyTorch NLP text classification system deployed on high-performance GPUs, fed by an Apache Kafka message ingestion stream, and monitored via a Next.js real-time analytics dashboard.",
    process: [
      { phase: "Kafka Stream Routing", details: "Configured a high-throughput Apache Kafka bus capable of processing over 10,000 news articles per second." },
      { phase: "PyTorch Model Tuning", details: "Optimized a financial BERT classifier to analyze news sentiment, achieving high precision classification." },
      { phase: "Rust Parser Engine", details: "Created a lightning-fast Rust text parser to clean and tokenize raw unstructured text files before model inference." }
    ],
    results: [
      { label: "Feeds Processed/Hr", value: "5M+" },
      { label: "Sentiment Precision", value: "94.2%" },
      { label: "Inference Latency", value: "<25ms" }
    ],
    technologies: ["PyTorch", "Rust", "Apache Kafka", "Next.js", "PostgreSQL", "Docker"],
    feedback: "The speed and precision of Sentient Analytics' classification model completely revolutionized our alert framework. We process feeds in real time with high accuracy.",
    author: "Robert Vance",
    role: "Managing Director, Alpha Hedge Capital"
  }
];

function CaseStudiesContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);

  useEffect(() => {
    if (idParam && caseStudies.some((c) => c.id === idParam)) {
      setActiveStudy(idParam);
    }
  }, [idParam]);

  const currentStudy = caseStudies.find((c) => c.id === activeStudy)!;

  return (
    <div className="flex flex-col w-full min-h-screen" style={{ paddingTop: "96px" }}>
      {/* Hero Header */}
      <section className="bg-secondary/30 py-16 md:py-24 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Corporate <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            In-depth analysis of how we solve complex structural problems, optimize processes, and deliver measurable return on investment.
          </p>
        </div>
      </section>

      {/* Selector and Study Detail */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 flex flex-col gap-2.5">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-3 mb-2">
              Select Case Study
            </h3>
            {caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveStudy(study.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeStudy === study.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                {study.title}
                <span className="block text-[10px] opacity-80 mt-0.5 font-normal">
                  {study.client}
                </span>
              </button>
            ))}
          </div>

          {/* Main Content Pane */}
          <div className="lg:col-span-3 space-y-10 bg-card border border-border p-6 md:p-10 rounded-2xl">
            {/* Header info */}
            <div className="border-b border-border/80 pb-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primary/10 text-primary uppercase tracking-wider">
                  {currentStudy.category}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Client: {currentStudy.client}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                {currentStudy.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                &ldquo;{currentStudy.summary}&rdquo;
              </p>
            </div>

            {/* Metrics block */}
            <div className="grid grid-cols-3 gap-4">
              {currentStudy.results.map((result) => (
                <div key={result.label} className="p-4 bg-secondary/30 border border-border rounded-xl text-center space-y-1">
                  <div className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                    {result.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem & Solution Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-1.5 text-destructive">
                  <Zap className="h-4 w-4" /> The Challenge
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentStudy.problem}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-1.5 text-primary">
                  <ShieldCheck className="h-4 w-4" /> The Solution
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentStudy.solution}
                </p>
              </div>
            </div>

            {/* The Process Timeline */}
            <div className="space-y-4 pt-4 border-t border-border/50">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-primary" /> Engineering Execution
              </h4>
              <div className="relative border-l border-border pl-6 ml-3 space-y-6">
                {currentStudy.process.map((step, i) => (
                  <div key={step.phase} className="relative">
                    <span className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-foreground">
                      Phase {i + 1}: {step.phase}
                    </h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {currentStudy.feedback && (
              <div className="p-6 bg-secondary/20 border border-border/80 rounded-xl space-y-4">
                <div className="flex gap-1.5 text-primary">
                  <Quote className="h-6 w-6 opacity-40 fill-primary" />
                </div>
                <blockquote className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed">
                  &ldquo;{currentStudy.feedback}&rdquo;
                </blockquote>
                <div className="text-xs">
                  <cite className="not-italic font-bold text-foreground">{currentStudy.author}</cite>
                  <span className="text-muted-foreground block text-[10px] mt-0.5">{currentStudy.role}</span>
                </div>
              </div>
            )}

            {/* Tech tag list */}
            <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">
                Tech Stack:
              </span>
              {currentStudy.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2.5 py-1 rounded bg-secondary text-muted-foreground font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Banner */}
      <section className="bg-secondary/40 border-t border-border py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore More Delivered Work
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Browse the wider portfolio across web, mobile, cloud, ERP, SaaS, and AI products.
          </p>
          <div className="pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/95 rounded-lg shadow-md transition-colors"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <Suspense fallback={<div className="flex w-full min-h-screen items-center justify-center text-muted-foreground">Loading Case Studies...</div>}>
      <CaseStudiesContent />
    </Suspense>
  );
}
