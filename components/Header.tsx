"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { services } from "@/data/services";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const investmentServices = services.filter((s) => s.category === "Investment");
  const protectionServices = services.filter((s) => s.category === "Protection");

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      {/* Top Animated Trust & Contact Bar */}
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <div className="header-topbar-left">
            <span className="live-dot-wrap">
              <span className="live-dot-pulse"></span>
              <span className="live-dot"></span>
            </span>
            <span className="topbar-tag">AMFI-Registered MFD</span>
            <span className="topbar-divider">•</span>
            <span className="topbar-text">IRDA Broking License Holder</span>
          </div>
          <div className="header-topbar-right">
            <a href="tel:+918293172246" className="topbar-phone">
              <Phone size={13} />
              <span>+91 82931 72246</span>
            </a>
          </div>
        </div>
      </div>

      {/* Brand Top Border Gradient Shimmer */}
      <div className="header-gradient-bar"></div>

      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="logo-wrap">
          <Image
            src="/images/logo/Dash-Capital-Logo.png"
            alt="Dash Capital logo"
            width={180}
            height={48}
            priority
            className="header-logo-img"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "nav-link-active" : ""}`}
              >
                <span>About</span>
              </Link>
            </li>

            {/* Product Distribution dropdown */}
            <li className="dropdown">
              <button
                className={`dropdown-trigger ${
                  pathname.startsWith("/services") ? "nav-link-active" : ""
                }`}
                aria-haspopup="true"
              >
                <span>Product Distribution</span>
                <ChevronDown size={15} className="dropdown-chevron" />
              </button>

              <div className="dropdown-panel">
                <div className="dropdown-col">
                  <div className="dropdown-group-header">
                    <TrendingUp size={15} className="dropdown-col-icon icon-gold" />
                    <span className="dropdown-group-title">Investment</span>
                  </div>
                  <div className="dropdown-links-list">
                    {investmentServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="dropdown-item"
                      >
                        <span className="dropdown-item-title">{service.title}</span>
                        <ArrowRight size={13} className="dropdown-item-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="dropdown-col">
                  <div className="dropdown-group-header">
                    <ShieldCheck size={15} className="dropdown-col-icon icon-blue" />
                    <span className="dropdown-group-title">Protection</span>
                  </div>
                  <div className="dropdown-links-list">
                    {protectionServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="dropdown-item"
                      >
                        <span className="dropdown-item-title">{service.title}</span>
                        <ArrowRight size={13} className="dropdown-item-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/contact"
                className={`nav-link ${pathname === "/contact" ? "nav-link-active" : ""}`}
              >
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`nav-link ${pathname.startsWith("/blog") ? "nav-link-active" : ""}`}
              >
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call-to-action button, desktop only */}
        <div className="nav-cta-wrap">
          <Link href="/contact" className="header-cta-btn">
            <span>Get Started</span>
            <ArrowRight size={16} className="cta-arrow" />
          </Link>
        </div>

        {/* Hamburger button, mobile only */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        className="nav-mobile"
        data-open={mobileMenuOpen}
        aria-label="Mobile navigation"
      >
        <ul className="nav-list">
          <li>
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${pathname === "/about" ? "nav-link-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>

          {/* Expandable Product Distribution menu */}
          <li>
            <button
              className="mobile-dropdown-trigger"
              onClick={() => setMobileDropdownOpen((open) => !open)}
              aria-expanded={mobileDropdownOpen}
            >
              <span>Product Distribution</span>
              <ChevronDown
                size={16}
                className={`mobile-chevron ${mobileDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className="mobile-submenu" data-open={mobileDropdownOpen}>
              <p className="mobile-submenu-title">Investment</p>
              {investmentServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
              <p className="mobile-submenu-title">Protection</p>
              {protectionServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link
              href="/contact"
              className={`nav-link ${pathname === "/contact" ? "nav-link-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`nav-link ${pathname.startsWith("/blog") ? "nav-link-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="mobile-cta-item">
            <Link
              href="/contact"
              className="header-cta-btn mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
