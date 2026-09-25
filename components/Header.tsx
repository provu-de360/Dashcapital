"use client";

import { useState, useEffect, useRef } from "react";
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
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  useEffect(() => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const investmentServices = services.filter((s) => s.category === "Investment");
  const protectionServices = services.filter((s) => s.category === "Protection");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_8px_30px_rgba(11,37,69,0.08)] border-b border-secondary/25"
          : "bg-white/95 backdrop-blur-md border-b border-border-ui"
      }`}
    >
      {/* Top Animated Trust & Contact Bar */}
      <div className="bg-[#081d36] text-slate-400 text-xs py-1.5 border-b border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="absolute w-full h-full rounded-full bg-emerald-500 animate-live-pulse" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[#f7d58b] font-semibold">AMFI-Registered MFD</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 hidden sm:inline">IRDA Broking License Holder</span>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+918293172246"
              className="inline-flex items-center gap-1.5 text-white font-medium hover:text-secondary hover:-translate-y-0.5 transition-all text-xs"
            >
              <Phone size={13} />
              <span>+91 82931 72246</span>
            </a>
          </div>
        </div>
      </div>

      {/* Brand Top Border Gradient Shimmer */}
      <div className="h-[2px] w-full bg-[linear-gradient(90deg,#0b2545_0%,#c9932e_30%,#10b981_50%,#c9932e_70%,#0b2545_100%)] bg-[length:200%_100%] animate-brand-sweep" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-[1.02]">
          <Image
            src="/images/logo/Dash-Capital-Logo.png"
            alt="Dash Capital logo"
            width={180}
            height={48}
            priority
            className="h-[42px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className={`relative font-medium text-[0.98rem] py-2 transition-colors duration-200 block ${
                  pathname === "/"
                    ? "text-primary font-semibold after:w-full"
                    : "text-dark hover:text-primary after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-secondary after:to-[#dfa539] after:rounded-full after:transition-all after:duration-300`}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`relative font-medium text-[0.98rem] py-2 transition-colors duration-200 block ${
                  pathname === "/about"
                    ? "text-primary font-semibold after:w-full"
                    : "text-dark hover:text-primary after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-secondary after:to-[#dfa539] after:rounded-full after:transition-all after:duration-300`}
              >
                <span>About</span>
              </Link>
            </li>

            {/* Product Distribution Dropdown */}
            <li
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                className={`relative flex items-center gap-1.5 font-medium text-[0.98rem] py-2 transition-colors duration-200 cursor-pointer ${
                  pathname.startsWith("/services") || desktopDropdownOpen
                    ? "text-primary font-semibold after:w-full"
                    : "text-dark hover:text-primary after:w-0 hover:after:w-full group-hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-secondary after:to-[#dfa539] after:rounded-full after:transition-all after:duration-300`}
                aria-haspopup="true"
                aria-expanded={desktopDropdownOpen}
              >
                <span>Product Distribution</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    desktopDropdownOpen
                      ? "rotate-180 text-secondary"
                      : "group-hover:rotate-180 group-hover:text-secondary text-gray-500"
                  }`}
                />
              </button>

              {/* Seamless Zero-Gap Hover Bridge & Animated Dropdown Panel */}
              <div
                className={`absolute top-full -left-6 pt-3 min-w-[530px] z-50 transition-all duration-200 ease-out ${
                  desktopDropdownOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto"
                }`}
              >
                <div className="relative bg-white rounded-2xl border border-border-ui shadow-elevated p-6 grid grid-cols-2 gap-6 overflow-hidden">
                  {/* Decorative Brand Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary via-[#dfa539] to-secondary" />

                  {/* Investment Column */}
                  <div>
                    <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                      <TrendingUp size={15} className="w-5 h-5 p-0.5 rounded bg-secondary/15 text-secondary flex-shrink-0" />
                      <span className="text-xs font-bold font-heading uppercase tracking-wider text-primary">
                        Investment
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {investmentServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="dropdown-link"
                        >
                          <span>{service.title}</span>
                          <ArrowRight size={13} className="dropdown-link-arrow" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Protection Column */}
                  <div>
                    <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                      <ShieldCheck size={15} className="w-5 h-5 p-0.5 rounded bg-primary/10 text-primary flex-shrink-0" />
                      <span className="text-xs font-bold font-heading uppercase tracking-wider text-primary">
                        Protection
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {protectionServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="dropdown-link"
                        >
                          <span>{service.title}</span>
                          <ArrowRight size={13} className="dropdown-link-arrow" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/contact"
                className={`relative font-medium text-[0.98rem] py-2 transition-colors duration-200 block ${
                  pathname === "/contact"
                    ? "text-primary font-semibold after:w-full"
                    : "text-dark hover:text-primary after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-secondary after:to-[#dfa539] after:rounded-full after:transition-all after:duration-300`}
              >
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`relative font-medium text-[0.98rem] py-2 transition-colors duration-200 block ${
                  pathname.startsWith("/blog")
                    ? "text-primary font-semibold after:w-full"
                    : "text-dark hover:text-primary after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-secondary after:to-[#dfa539] after:rounded-full after:transition-all after:duration-300`}
              >
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call-to-action button, desktop only */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[0.92rem] text-white bg-gradient-to-br from-secondary to-[#dfa539] shadow-[0_4px_14px_rgba(201,147,46,0.3)] border border-white/20 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(201,147,46,0.45)] transition-all duration-200 group"
          >
            <span>Get Started</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Hamburger button, mobile only */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-lg text-primary hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-border-ui px-5 py-4 shadow-lg transition-all"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-1">
            <li>
              <Link
                href="/"
                className={`block py-3 text-base font-medium border-b border-slate-100 ${
                  pathname === "/" ? "text-primary font-semibold" : "text-dark hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-3 text-base font-medium border-b border-slate-100 ${
                  pathname === "/about" ? "text-primary font-semibold" : "text-dark hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Expandable Product Distribution menu */}
            <li>
              <button
                className="w-full flex justify-between items-center py-3 text-base font-medium text-dark border-b border-slate-100"
                onClick={() => setMobileDropdownOpen((open) => !open)}
                aria-expanded={mobileDropdownOpen}
              >
                <span>Product Distribution</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileDropdownOpen ? "rotate-180 text-secondary" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen && (
                <div className="pl-4 py-2 bg-slate-50 rounded-lg my-1.5 space-y-1">
                  <p className="text-[0.74rem] font-bold uppercase tracking-wider text-secondary pt-2 pb-1 font-heading">
                    Investment
                  </p>
                  {investmentServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block py-2 text-sm text-slate-700 hover:text-primary font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <p className="text-[0.74rem] font-bold uppercase tracking-wider text-secondary pt-3 pb-1 font-heading">
                    Protection
                  </p>
                  {protectionServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block py-2 text-sm text-slate-700 hover:text-primary font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                href="/contact"
                className={`block py-3 text-base font-medium border-b border-slate-100 ${
                  pathname === "/contact" ? "text-primary font-semibold" : "text-dark hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-3 text-base font-medium border-b border-slate-100 ${
                  pathname.startsWith("/blog") ? "text-primary font-semibold" : "text-dark hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className="pt-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-br from-secondary to-[#dfa539] shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
