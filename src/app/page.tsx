"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =============================================
   DATA
   ============================================= */

const services = [
  { label: "Web Development",  img: "/service_web.png",    hoverImg: "/work_logistics.png" },
  { label: "Branding",         img: "/insight_brand.png",  hoverImg: "/insight_design.png" },
  { label: "Automation",       img: "/work_retail.png",    hoverImg: "/service_ai.png"     },
  { label: "SaaS",             img: "/insight_saas.png",   hoverImg: "/work_health.png"    },
  { label: "Marketing",        img: "/insight_design.png", hoverImg: "/insight_ai.png"     },
  { label: "AI Integration",   img: "/service_ai.png",     hoverImg: "/service_web.png"    },
];

const projects = [
  {
    client: "AverLink Logistics",
    title: "Enterprise ERP & Real-time Fleet Dashboard",
    tag: "ERP · Cloud · React",
    img: "/work_logistics.png",
  },
  {
    client: "NeoRetail Core",
    title: "Scalable SaaS Commerce Platform",
    tag: "SaaS · Next.js · PostgreSQL",
    img: "/work_retail.png",
  },
  {
    client: "Pulse Health",
    title: "Cross-platform Patient Monitoring App",
    tag: "Mobile · Firebase · WebRTC",
    img: "/work_health.png",
  },
];

const insights = [
  {
    category: "AI & Automation",
    title: "How LLM Agents Are Reshaping Enterprise Workflows in 2025",
    date: "June 2025",
    img: "/insight_ai.png",
    href: "/blog",
  },
  {
    category: "Design Systems",
    title: "The Case for Zero-Radius: Why Brutalist Web Design Converts",
    date: "May 2025",
    img: "/insight_design.png",
    href: "/blog",
  },
  {
    category: "SaaS Engineering",
    title: "Architecting Multi-tenant SaaS on Next.js App Router",
    date: "April 2025",
    img: "/insight_saas.png",
    href: "/blog",
  },
  {
    category: "Branding",
    title: "Brand Identity Principles That Scale Across Digital Touch-points",
    date: "March 2025",
    img: "/insight_brand.png",
    href: "/blog",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "99%",  label: "Client Satisfaction" },
  { value: "50+",  label: "Engineering Experts" },
  { value: "8+",   label: "Years of Growth" },
];

/* =============================================
   SCROLL REVEAL HOOK
   ============================================= */

function useFadeUp(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* =============================================
   PAGE COMPONENT
   ============================================= */

const getCaseStudyId = (client: string) => {
  const map: Record<string, string> = {
    "AverLink Logistics": "averlink-logistics",
    "NeoRetail Core": "neobank",
    "Pulse Health": "pulse-health",
  };
  return map[client] || "";
};

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Fade-up refs
  const heroRef    = useRef<HTMLDivElement>(null);
  const whatRef    = useFadeUp();
  const workRef    = useFadeUp();
  const statsRef   = useFadeUp();
  const insightRef = useFadeUp();

  // Hero chars type-in complete state (immediate)
  useEffect(() => {
    const el = heroRef.current;
    if (el) { setTimeout(() => el.classList.add("visible"), 100); }
  }, []);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Averqon",
            "url": "https://averqon.com",
            "description": "A portfolio of web, mobile, cloud and AI products delivered by Averqon.",
          }),
        }}
      />

      {/* ═══════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════ */}
      <section className="hero-section" id="hero">
        <div className="container-site" style={{ width: "100%", paddingBottom: 0 }}>
          <div
            ref={heroRef}
            className="fade-up"
            style={{ maxWidth: 900, paddingTop: 80 }}
          >
            <p className="eyebrow" style={{ marginBottom: 32 }}>
              Product Engineering Portfolio
            </p>
            <h1 className="display-hero" style={{ marginBottom: 36 }}>
              Digital products built for{" "}
              <span className="lime-mark">real business</span>{" "}
              outcomes
            </h1>
            <p className="body-lg" style={{ maxWidth: 520, marginBottom: 48 }}>
              Explore selected web, mobile, cloud, ERP, SaaS, and AI work—along with the decisions and results behind each build.
            </p>
            <Link href="/portfolio" className="btn-outline" id="hero-cta">
              Explore our work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Corner video card */}
        <div className="hero-video-card">
          <video autoPlay muted loop playsInline aria-hidden="true">
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <span className="hero-video-label">AVERQON / STUDIO</span>
        </div>

        {/* Bottom hairline */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 1, background: "var(--color-border)"
        }} />
      </section>

      {/* ═══════════════════════════════════════
          2. WHAT WE DO
          ═══════════════════════════════════════ */}
      <section className="services-section" id="services">
        <div className="container-site" style={{ paddingTop: 80, paddingBottom: 0 }}>
          <div ref={whatRef} className="fade-up" style={{ marginBottom: 48 }}>
            <p className="eyebrow" style={{ color: "#666", marginBottom: 16 }}>
              What we do
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#0A0A0A",
              lineHeight: 1.1,
            }}>
              Capabilities built for scale
            </h2>
          </div>
        </div>

        {/* Service pills */}
        <div className="container-site" style={{ paddingTop: 0 }}>
          <div className="services-label-row">
            {services.map((s) => (
              <button
                key={s.label}
                className={`service-pill${activeService === s.label ? " active" : ""}`}
                onMouseEnter={() => setActiveService(s.label)}
                onMouseLeave={() => setActiveService(null)}
                onClick={() => setActiveService(activeService === s.label ? null : s.label)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service cards grid */}
        <div className="service-cards-grid" style={{ marginTop: 1 }}>
          {services.map((s) => (
            <div key={s.label} className="service-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img}       alt={s.label} className="service-card-img default-img" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.hoverImg} alt=""         className="service-card-img hover-img"   aria-hidden="true" />
              <div className="service-card-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. STATS
          ═══════════════════════════════════════ */}
      <section style={{ background: "var(--color-bg)" }}>
        <div ref={statsRef} className="fade-up stats-row container-site" style={{ padding: 0 }}>
          {stats.map((s) => (
            <div key={s.label} className="stat-cell">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. OUR WORK
          ═══════════════════════════════════════ */}
      <section className="work-section" id="work">
        <div className="container-site">
          <div ref={workRef} className="fade-up" style={{ marginBottom: 60 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Our Work</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
              <h2 className="display-section" style={{ maxWidth: 500 }}>
                Selected case studies
              </h2>
              <Link href="/portfolio" className="btn-outline" style={{ padding: "10px 24px" }}>
                View all work
              </Link>
            </div>
          </div>

          <div className="work-grid">
            {projects.map((p) => (
              <Link key={p.client} href={getCaseStudyId(p.client) ? `/case-studies?id=${getCaseStudyId(p.client)}` : "/case-studies"} className="work-card" style={{ display: "flex", flexDirection: "column" }}>
                <div className="work-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} />
                  {/* Video crossfade placeholder — replace src with actual clip */}
                  <video muted loop playsInline aria-hidden="true"
                    onMouseEnter={(e) => {
                      const v = e.currentTarget as HTMLVideoElement;
                      const p = v.play();
                      if (p !== undefined) p.catch(() => {/* interrupted by pause — safe to ignore */});
                    }}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget as HTMLVideoElement;
                      v.pause();
                      v.currentTime = 0;
                    }}
                  >
                    <source src="/placeholder-loop.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="work-card-meta">
                  <div className="work-card-client">{p.client}</div>
                  <div className="work-card-title">{p.title}</div>
                  <div className="work-card-tag">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. INSIGHTS
          ═══════════════════════════════════════ */}
      <section className="insights-section" id="insights">
        <div className="container-site">
          <div ref={insightRef} className="fade-up">
            <p className="eyebrow" style={{ marginBottom: 16 }}>Insights</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
              <h2 className="display-section" style={{ maxWidth: 440 }}>
                Thinking out loud
              </h2>
              <Link href="/blog" className="btn-outline" style={{ padding: "10px 24px" }}>
                All articles
              </Link>
            </div>
          </div>

          <div className="insights-grid">
            {insights.map((a) => (
              <Link key={a.title} href={a.href} className="insight-card">
                <div className="insight-card-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.title} />
                </div>
                <div className="insight-card-body">
                  <div className="insight-card-cat">{a.category}</div>
                  <div className="insight-card-title">{a.title}</div>
                  <div className="insight-card-date">{a.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
