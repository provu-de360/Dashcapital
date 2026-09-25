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
    <section className="min-h-[70vh] flex items-center justify-center py-16 md:py-20 px-5 bg-light">
      <div className="max-w-[600px] w-full mx-auto">
        <div className="bg-white border border-border-ui rounded-2xl p-8 sm:p-12 text-center shadow-card">
          <div className="w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 bg-red-500/10 text-red-500">
            <AlertTriangle size={36} />
          </div>

          <span className="text-red-500 uppercase tracking-widest font-semibold text-xs sm:text-sm mb-2 block font-heading">
            Application Error
          </span>

          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">
            Something went wrong
          </h1>

          <p className="text-gray-text text-sm sm:text-base leading-relaxed mb-6">
            We encountered an unexpected issue while loading this page. You can
            try reloading or return to the homepage.
          </p>

          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-left mb-6 text-xs sm:text-sm text-rose-600 overflow-x-auto">
              <code>{error.message}</code>
            </div>
          )}

          <div className="flex flex-wrap gap-3.5 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm sm:text-base bg-secondary text-white hover:bg-secondary-dark hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
            >
              <RotateCcw size={16} />
              <span>Try Again</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm sm:text-base bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
