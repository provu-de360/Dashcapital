"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";

const WORDS = [
  "Investment Easy",
  "Future Secure",
  "Wealth Grow",
  "Retirement Simple",
];

// The main banner shown at the top of the homepage.
export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, 45);
      }
    } else {
      if (currentText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      } else {
        const speed = currentText === "" && currentWordIndex === 0 ? 300 : 90;
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-inner">
        <div className="hero-text">
          {/* Eyebrow Trust Badge */}
          <div className="hero-badge">
            <ShieldCheck size={16} className="hero-badge-icon" />
            <span>AMFI-Registered MFD &bull; IRDA Licensed &bull; Estd. 2003</span>
          </div>

          <h1 className="hero-title">
            Making your{" "}
            <span className="hero-highlight">
              <span className="sr-only">Investment Easy</span>
              <span aria-hidden="true">{currentText || "\u00A0"}</span>
            </span>
            <span className="hero-typewriter-cursor" aria-hidden="true" />
          </h1>

          <p className="hero-desc">
            Best solutions for your financial future — we help you invest in
            the right basket with expert guidance and tailored wealth strategies.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <Link href="/contact" className="btn btn-primary hero-btn-main">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-hero-outline">
              Explore Services
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-list">
            <div className="hero-trust-item">
              <CheckCircle2 size={16} className="hero-trust-icon" />
              <span>20+ Yrs Experience</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={16} className="hero-trust-icon" />
              <span>Tailored Portfolios</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={16} className="hero-trust-icon" />
              <span>Personal Advisory</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="hero-visual">
          <div className="hero-image-card">
            <Image
              src="/images/hero/hero-image.jpg"
              alt="Dash Capital financial planning"
              width={540}
              height={420}
              priority
              className="hero-main-img"
            />

            {/* Floating Glassmorphism Stat Cards */}
            <div className="hero-stat-card hero-stat-top">
              <div className="stat-card-icon stat-icon-green">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="stat-card-val">5,000+</div>
                <div className="stat-card-lbl">Happy Investors</div>
              </div>
            </div>

            <div className="hero-stat-card hero-stat-bottom">
              <div className="stat-card-icon stat-icon-gold">
                <Award size={20} />
              </div>
              <div>
                <div className="stat-card-val">Since 2003</div>
                <div className="stat-card-lbl">Trusted in Kolkata</div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}
