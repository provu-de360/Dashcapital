import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, PhoneCall } from "lucide-react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

export default function CTA({ title, description, buttonText, buttonHref }: Props) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
      <div className="relative rounded-3xl overflow-hidden py-14 md:py-20 px-6 sm:px-12 md:px-16 text-center text-white bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(201,147,46,0.3)_0%,transparent_60%),radial-gradient(ellipse_70%_70%_at_80%_80%,rgba(37,99,235,0.35)_0%,transparent_65%),linear-gradient(135deg,#06152b_0%,#0b2545_45%,#0f3565_80%,#081c38_100%)] border border-white/15 shadow-[0_24px_70px_rgba(11,37,69,0.3)]">
        {/* Soft atmospheric ambient glow orbs */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-secondary/25 blur-[120px] pointer-events-none -top-24 -left-20 animate-pulse-glow-1" />
        <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/25 blur-[120px] pointer-events-none -bottom-24 -right-16 animate-pulse-glow-2" />

        {/* Elegant crossed-lines geometric grid overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

        {/* Glowing border highlight on top edge */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xl text-[#f7d58b] px-4 py-1.5 rounded-full text-xs sm:text-[0.82rem] font-semibold tracking-wide mb-6 shadow-sm">
            <Sparkles size={14} className="text-secondary flex-shrink-0" />
            <span>Start Your Wealth Journey Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-5 leading-tight tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            {title ? (
              <span className="text-white drop-shadow-sm">{title}</span>
            ) : (
              <>
                <span className="text-white drop-shadow-sm">Created by professionals.</span> <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#ffd875] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent font-black drop-shadow-[0_2px_12px_rgba(245,158,11,0.3)]">
                  For professionals.
                </span>
              </>
            )}
          </h2>

          <p className="text-white/95 text-base sm:text-lg md:text-xl mb-9 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href={buttonHref}
              className="w-full sm:w-[220px] h-[54px] rounded-xl font-semibold tracking-wide bg-gradient-to-r from-secondary via-[#d49f37] to-secondary-dark text-white hover:shadow-[0_12px_32px_rgba(201,147,46,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group shadow-md inline-flex items-center justify-center gap-2.5 px-6"
            >
              <span>{buttonText}</span>
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
            </Link>

            <a
              href="tel:+918293172246"
              className="w-full sm:w-[220px] h-[54px] rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group inline-flex items-center justify-center gap-2.5 px-6 shadow-sm"
            >
              <PhoneCall size={16} className="text-secondary flex-shrink-0" />
              <span>+91 82931 72246</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-8 pt-7 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-secondary flex-shrink-0" />
              <span>AMFI &amp; IRDA Licensed</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div>Over 21 Years of Advisory</div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div>1,000+ Satisfied Families</div>
          </div>
        </div>
      </div>
    </div>
  );
}
