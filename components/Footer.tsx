import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company info */}
          <div>
            <div className="footer-logo">
              <Image
                src="/images/logo/logo-white.svg"
                alt="Dash Capital logo"
                width={160}
                height={44}
              />
            </div>
            <p>
              We are AMFI-registered mutual fund distributors (MFD) and IRDA
              broking license holders, committed to empowering customers with
              diverse financial solutions since 2003.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/dashcapitalkolkata"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/dashcapitalkolkata"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Investment links */}
          <div>
            <h4>Investments</h4>
            <ul>
              <li>
                <Link href="/services/mutual-fund">Mutual Fund</Link>
              </li>
              <li>
                <Link href="/services/fixed-deposit">Fixed Deposit</Link>
              </li>
              <li>
                <Link href="/services/home-loans">Home Loans</Link>
              </li>
              <li>
                <Link href="/services/bonds">Bonds</Link>
              </li>
              <li>
                <Link href="/services/loan-against-securities">
                  Loan Against Securities
                </Link>
              </li>
            </ul>
          </div>

          {/* Protection links */}
          <div>
            <h4>Protection</h4>
            <ul>
              <li>
                <Link href="/services/general-insurance">
                  General Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/life-insurance">Life Insurance</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+918293172246">
                  <Phone size={14} style={{ display: "inline", marginRight: 8 }} />
                  +91 82931 72246
                </a>
              </li>
              <li>
                <a href="mailto:service@dashcapital.in">
                  <Mail size={14} style={{ display: "inline", marginRight: 8 }} />
                  service@dashcapital.in
                </a>
              </li>
              <li>
                <MapPin size={14} style={{ display: "inline", marginRight: 8 }} />
                208/8, Rashbehari Avenue, Gariahat, Kolkata-700029
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Dash Capital. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/">Terms &amp; Conditions</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
