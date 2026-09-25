import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[radial-gradient(ellipse_90%_70%_at_15%_25%,rgba(201,147,46,0.14)_0%,transparent_60%),radial-gradient(ellipse_80%_70%_at_85%_75%,rgba(37,99,235,0.18)_0%,transparent_60%),linear-gradient(180deg,#06152b_0%,#040e1d_100%)] text-[#cfd7e2] pt-16 md:pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Soft atmospheric ambient glow orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none -top-32 -left-20 animate-pulse-glow-1" />
      <div className="absolute w-[460px] h-[460px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none -bottom-28 -right-20 animate-pulse-glow-2" />

      {/* Elegant crossed-lines geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_50%,transparent_100%)]" />

      {/* Top ambient gold accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-14">
          {/* Company info */}
          <div className="lg:col-span-3 space-y-5">
            <div className="mb-4">
              <Image
                src="/images/logo/logo-white.svg"
                alt="Dash Capital logo"
                width={170}
                height={46}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              We are AMFI-registered mutual fund distributors (MFD) and IRDA
              broking license holders, committed to empowering customers with
              diverse financial solutions since 2003.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/dashcapitalkolkata"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.08] hover:bg-secondary border border-white/10 hover:border-secondary flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(201,147,46,0.35)]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/dashcapitalkolkata"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.08] hover:bg-secondary border border-white/10 hover:border-secondary flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(201,147,46,0.35)]"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Investment links */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              style={{ color: "#ffffff" }}
              className="!text-white font-semibold font-heading text-base tracking-wide underline underline-offset-8 decoration-secondary decoration-2"
            >
              Investments
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300 pt-1">
              <li>
                <Link href="/services/mutual-fund" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Mutual Fund</span>
                </Link>
              </li>
              <li>
                <Link href="/services/fixed-deposit" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Fixed Deposit</span>
                </Link>
              </li>
              <li>
                <Link href="/services/home-loans" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Home Loans</span>
                </Link>
              </li>
              <li>
                <Link href="/services/bonds" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Bonds</span>
                </Link>
              </li>
              <li>
                <Link href="/services/loan-against-securities" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Loan Against Securities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Goal Achievement Plan links */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              style={{ color: "#ffffff" }}
              className="!text-white font-semibold font-heading text-base tracking-wide underline underline-offset-8 decoration-secondary decoration-2 whitespace-nowrap"
            >
              Goal Achievement Plan
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 pt-1">
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Retirement Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Child Higher Education Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Child Marriage Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Tours &amp; Travels</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Land &amp; Buildings</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Mid Term Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Short Term Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Long Term Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 text-secondary">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span className="font-semibold">Many more</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Protection links */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              style={{ color: "#ffffff" }}
              className="!text-white font-semibold font-heading text-base tracking-wide underline underline-offset-8 decoration-secondary decoration-2"
            >
              Protection
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300 pt-1">
              <li>
                <Link href="/services/general-insurance" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>General Insurance</span>
                </Link>
              </li>
              <li>
                <Link href="/services/life-insurance" className="hover:text-secondary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span className="text-secondary/60 text-xs">&rsaquo;</span>
                  <span>Life Insurance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info with glass cards */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              style={{ color: "#ffffff" }}
              className="!text-white font-semibold font-heading text-base tracking-wide underline underline-offset-8 decoration-secondary decoration-2"
            >
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="tel:+918293172246"
                  className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-secondary/40 transition-all duration-200 hover:text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/15 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="font-medium">+91 82931 72246</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@dashcapital.in"
                  className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-secondary/40 transition-all duration-200 hover:text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/15 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span className="font-medium truncate">service@dashcapital.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <span className="leading-relaxed text-xs sm:text-sm">208/8, Rashbehari Avenue, Gariahat, Kolkata-700029</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400 text-center md:text-left">
          <p>&copy; {year} Dash Capital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-secondary transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
