import Link from "next/link";
import { Home, Compass, Phone, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16 md:py-20 px-5 bg-light">
      <div className="max-w-[600px] w-full mx-auto">
        <div className="bg-white border border-border-ui rounded-2xl p-8 sm:p-12 text-center shadow-card">
          <div className="w-16 h-16 rounded-full inline-flex items-center justify-center mb-4 bg-secondary/15 text-secondary">
            <AlertCircle size={40} />
          </div>

          <div className="inline-block bg-secondary/15 text-secondary text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4 font-heading">
            404 Error
          </div>

          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">
            Page Not Found
          </h1>

          <p className="text-gray-text text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track with your financial journey.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm sm:text-base bg-secondary text-white hover:bg-secondary-dark hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm sm:text-base bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all"
            >
              <Compass size={16} />
              <span>Explore Services</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-border-ui text-sm text-gray-text">
            <span>Need assistance? </span>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-secondary inline-flex items-center gap-1 transition-colors"
            >
              <Phone size={13} />
              <span>Contact our team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
