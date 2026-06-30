"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-root" role="contentinfo">
      {/* Main two-column block */}
      <div className="footer-main">
        {/* Left col: CTA */}
        <div className="footer-col">
          <p className="footer-col-label">Explore the portfolio</p>
          <h2 className="footer-headline">
            Selected work, built for real business outcomes
          </h2>
          <Link href="/portfolio" className="btn-filled" id="footer-cta" prefetch={false}>
            View projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Social icons */}
          <div className="footer-social">
            <a href="https://linkedin.com/company/averqon" target="_blank" rel="noopener noreferrer" aria-label="Averqon on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com/averqon" target="_blank" rel="noopener noreferrer" aria-label="Averqon on X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.919l4.256 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://github.com/averqon" target="_blank" rel="noopener noreferrer" aria-label="Averqon on GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right col: portfolio summary */}
        <div className="footer-col">
          <p className="footer-col-label">Portfolio highlights</p>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Capabilities</span>
            <span className="footer-contact-value">Web, mobile, cloud &amp; AI</span>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Focus</span>
            <span className="footer-contact-value">Scalable products and business platforms</span>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Evidence</span>
            <a
              href="/case-studies"
              className="footer-contact-value"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Case studies and measurable outcomes
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Insights</span>
            <a
              href="/blog"
              className="footer-contact-value"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Engineering notes and design thinking
            </a>
          </div>
        </div>
      </div>

      {/* Legal row */}
      <div className="container-site">
        <div className="footer-legal">
          <span className="footer-legal-text">
            &copy; {new Date().getFullYear()} Averqon Portfolio. All rights reserved.
          </span>
          <ul className="footer-legal-links">
            <li><Link href="/privacy" prefetch={false}>Privacy Policy</Link></li>
            <li><Link href="/terms" prefetch={false}>Terms of Service</Link></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
