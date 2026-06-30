"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "0 24px",
        textAlign: "center",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <p
          className="eyebrow"
          style={{ marginBottom: 24 }}
        >
          Error 404
        </p>
        <h1
          className="display-section"
          style={{ marginBottom: 16 }}
        >
          Page not found
        </h1>
        <p
          className="body-text"
          style={{ marginBottom: 40 }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-outline">
          Return to homepage
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
