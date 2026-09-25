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
    <section className="relative text-white overflow-hidden py-10 sm:py-14 md:py-18 lg:py-24 min-h-[calc(100vh-115px)] lg:min-h-[720px] flex items-center bg-[radial-gradient(circle_at_20%_25%,rgba(201,147,46,0.18)_0%,transparent_50%),radial-gradient(circle_at_80%_65%,rgba(37,99,235,0.22)_0%,transparent_55%),linear-gradient(135deg,#06152b_0%,#0b2545_45%,#0d315d_75%,#071933_100%)]">
      {/* Ambient Gaussian Blur Orbs */}
      <div className="absolute rounded-full blur-[110px] pointer-events-none z-[1] w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-secondary/25 to-[#eab308]/15 -top-16 -left-10 animate-pulse-glow-1" />
      <div className="absolute rounded-full blur-[130px] pointer-events-none z-[1] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tl from-blue-500/25 via-indigo-600/20 to-transparent -bottom-24 -right-16 animate-pulse-glow-2" />
      <div className="absolute rounded-full blur-[90px] pointer-events-none z-[1] w-60 sm:w-72 h-60 sm:h-72 bg-sky-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Elegant crossed-lines geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-[1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 relative z-[2] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center py-2 sm:py-4">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Eyebrow Trust Badge - Frosted Glass */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 backdrop-blur-xl text-[#f7d58b] px-3 sm:px-4 py-1.5 rounded-full text-[0.72rem] sm:text-xs md:text-[0.82rem] font-semibold tracking-wide mb-4 sm:mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 animate-hero-badge max-w-full">
            <ShieldCheck size={15} className="text-secondary flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">AMFI-Registered MFD &bull; IRDA Licensed &bull; Estd. 2003</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3.1rem] 2xl:text-[3.4rem] font-bold font-heading leading-tight mb-4 sm:mb-5 tracking-tight animate-hero-title flex flex-wrap items-center justify-center lg:justify-start gap-x-2 sm:gap-x-2.5 md:gap-x-3">
            <span className="inline-block bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)] flex-shrink-0">
              Making your
            </span>
            <span className="inline-flex items-center align-baseline flex-shrink-0">
              <span className="inline-block bg-gradient-to-r from-[#e5b352] via-[#fef08a] to-[#c9932e] bg-clip-text text-transparent animate-gold-shimmer bg-[length:300%_300%] font-extrabold drop-shadow-[0_2px_16px_rgba(201,147,46,0.35)] min-w-[150px] sm:min-w-[220px] md:min-w-[280px] lg:min-w-[340px] xl:min-w-[380px] text-left">
                <span className="sr-only">Investment Easy</span>
                <span aria-hidden="true">{currentText || "\u00A0"}</span>
              </span>
              <span className="inline-block w-[2.5px] sm:w-[3px] h-[0.9em] bg-gradient-to-b from-[#fde68a] to-secondary ml-1 align-[-0.05em] rounded-sm shadow-[0_0_12px_rgba(253,230,138,0.9)] animate-cursor-blink flex-shrink-0" aria-hidden="true" />
            </span>
          </h1>

          <p className="text-[#d1d9e4] text-[0.92rem] sm:text-base md:text-lg lg:text-[1.05rem] xl:text-[1.12rem] leading-relaxed mb-6 sm:mb-7 lg:mb-8 animate-hero-desc max-w-2xl mx-auto lg:mx-0">
            Best solutions for your financial future — we help you invest in
            the right basket with expert guidance and tailored wealth strategies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-7 sm:mb-8 animate-hero-cta w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-secondary via-[#dfa539] to-[#c9932e] text-white px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-[0_8px_28px_rgba(201,147,46,0.4)] border border-white/20 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(201,147,46,0.55)] transition-all duration-200 group"
            >
              <span>Get Started</span>
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/[0.08] border border-white/25 backdrop-blur-xl shadow-[0_4px_18px_rgba(0,0,0,0.2)] hover:bg-white/[0.18] hover:border-white/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Highlights - Frosted Pill Container */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 md:gap-6 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-[0.76rem] sm:text-xs md:text-sm text-[#cbd5e1] animate-hero-trust shadow-[0_4px_16px_rgba(0,0,0,0.18)] max-w-full">
            <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0" />
              <span>21+ Years Experience</span>
            </div>
            <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0" />
              <span>Tailored Portfolios</span>
            </div>
            <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0" />
              <span>Personal Advisory</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-5 xl:col-span-5 relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[560px] mx-auto lg:ml-auto lg:mr-0 mt-6 sm:mt-8 lg:mt-0 px-2 sm:px-0">
          {/* Main Card Frame with Deep Frosted Glass & Ambient Outer Glow */}
          <div className="relative rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-br from-white/[0.18] via-white/[0.06] to-white/[0.02] border border-white/25 backdrop-blur-2xl shadow-[0_30px_70px_rgba(6,21,43,0.65),0_0_45px_rgba(201,147,46,0.15)] ring-1 ring-white/10">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/60 shadow-inner">
              <Image
                src="/images/hero/hero-image1.png"
                alt="Dash Capital financial planning"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 560px"
                className="w-full h-full object-cover"
              />

              {/* Subtle inner glass gradient overlay to soften image integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06152b]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Stat Card - Happy Investors */}
            <div className="absolute -top-2.5 -left-2.5 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 flex items-center gap-2.5 sm:gap-3 bg-[#081d38]/85 hover:bg-[#081d38]/95 backdrop-blur-xl border border-white/25 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45),0_0_20px_rgba(16,185,129,0.15)] z-[3] animate-float-1 transition-all duration-300">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center bg-emerald-500/20 text-emerald-400 border border-emerald-400/35 shadow-sm flex-shrink-0">
                <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight font-heading">
                  1,000+
                </div>
                <div className="text-slate-300 text-[0.62rem] sm:text-[0.68rem] md:text-[0.74rem] font-semibold uppercase tracking-wider">
                  Happy Investors
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Stat Card - Since 2003 */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 md:-bottom-5 md:-right-4 flex items-center gap-2.5 sm:gap-3 bg-[#081d38]/85 hover:bg-[#081d38]/95 backdrop-blur-xl border border-white/25 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45),0_0_20px_rgba(201,147,46,0.18)] z-[3] animate-float-2 transition-all duration-300">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center bg-secondary/25 text-[#fde68a] border border-secondary/45 shadow-sm flex-shrink-0">
                <Award size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight font-heading">
                  Since 2003
                </div>
                <div className="text-slate-300 text-[0.62rem] sm:text-[0.68rem] md:text-[0.74rem] font-semibold uppercase tracking-wider">
                  Trusted in Kolkata
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
