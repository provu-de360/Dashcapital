import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dash Capital",
  description:
    "Get in touch with Dash Capital for mutual fund, insurance, and financial planning support in Kolkata.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Reach out any time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* CONTACT INFO */}
            <div>
              <h2 style={{ marginBottom: 24 }}>Get In Touch</h2>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem" }}>Phone</h3>
                  <p style={{ color: "var(--gray-text)" }}>
                    <a href="tel:+918293172246">+91 82931 72246</a>
                    <br />
                    <a href="tel:+919073184838">+91 90731 84838</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem" }}>Email</h3>
                  <p style={{ color: "var(--gray-text)" }}>
                    <a href="mailto:service@dashcapital.in">
                      service@dashcapital.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem" }}>Address</h3>
                  <p style={{ color: "var(--gray-text)" }}>
                    208/8, Rashbehari Avenue, Gariahat,
                    <br />
                    Kolkata-700029
                  </p>
                </div>
              </div>

              {/* Map placeholder - replace with a real embedded map later */}
              <div className="map-placeholder">Map goes here</div>
            </div>

            {/* CONTACT FORM */}
            <div>
              <h2 style={{ marginBottom: 24 }}>Send Us A Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
