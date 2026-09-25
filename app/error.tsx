"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="section error-section">
      <div className="container error-container">
        <div className="error-card">
          <div className="error-icon-wrap">
            <AlertTriangle size={36} className="error-icon" />
          </div>

          <span className="eyebrow" style={{ color: "#ef4444" }}>
            Application Error
          </span>

          <h1 className="error-title">Something went wrong</h1>

          <p className="error-desc">
            We encountered an unexpected issue while loading this page. You can
            try reloading or return to the homepage.
          </p>

          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="error-debug-box">
              <code>{error.message}</code>
            </div>
          )}

          <div className="error-actions">
            <button onClick={() => reset()} className="btn btn-primary error-btn">
              <RotateCcw size={16} />
              <span>Try Again</span>
            </button>
            <Link href="/" className="btn btn-outline error-btn">
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
