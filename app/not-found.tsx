import Link from "next/link";
import { Home, Compass, Phone, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section not-found-section">
      <div className="container not-found-container">
        <div className="not-found-card">
          <div className="not-found-icon-wrap">
            <AlertCircle size={40} className="not-found-icon" />
          </div>

          <div className="not-found-badge">404 Error</div>

          <h1 className="not-found-title">Page Not Found</h1>

          <p className="not-found-desc">
            The page you are looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track with your financial journey.
          </p>

          <div className="not-found-actions">
            <Link href="/" className="btn btn-primary not-found-btn">
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
            <Link href="/services" className="btn btn-outline not-found-btn">
              <Compass size={16} />
              <span>Explore Services</span>
            </Link>
          </div>

          <div className="not-found-help">
            <span>Need assistance? </span>
            <Link href="/contact" className="not-found-help-link">
              <Phone size={13} />
              <span>Contact our team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
