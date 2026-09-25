"use client";

import { useEffect, useRef, useState } from "react";

import { Users, BarChart3, Trophy, Calendar } from "lucide-react";

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  startCounting: boolean;
  duration?: number;
  delayIndex?: number;
}

function StatCard({
  end,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  icon,
  startCounting,
  duration = 2000,
  delayIndex = 0,
}: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic: fast start, smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * end);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, startCounting]);

  const delayStyles = [
    "transition-delay-[50ms]",
    "transition-delay-[150ms]",
    "transition-delay-[250ms]",
    "transition-delay-[350ms]",
  ];

  return (
    <div
      className={`relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-secondary/60 hover:shadow-[0_24px_50px_rgba(0,0,0,0.45),0_0_30px_rgba(201,147,46,0.2)] group flex flex-col items-center justify-between text-center overflow-hidden ${
        delayStyles[delayIndex] || ""
      } ${startCounting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Top Accent Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon Badge */}
      <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/20 text-secondary flex items-center justify-center mb-5 shadow-[0_4px_16px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
        {icon}
      </div>

      {/* Primary Counter Number */}
      <div className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-secondary bg-gradient-to-br from-[#fef08a] via-[#fde68a] to-[#c9932e] bg-clip-text text-transparent mb-2 tabular-nums tracking-tight font-heading leading-tight group-hover:scale-105 transition-transform duration-300">
        {prefix}{(startCounting ? count : end).toLocaleString()}{suffix}
      </div>

      {/* Label */}
      <div>
        <p className="text-white text-base font-bold font-heading tracking-wide">{label}</p>
        {sublabel && (
          <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-wider mt-1">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[linear-gradient(180deg,#07192f_0%,#0b2545_50%,#07192f_100%)] text-white relative overflow-hidden py-16 md:py-20 border-y border-white/10">
      {/* Background Ambient Gaussian Glows */}
      <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none -top-24 left-1/3" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -bottom-20 right-10" />

      {/* Architectural Crossed-Lines Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          <StatCard
            end={1000}
            suffix="+"
            label="Investors"
            sublabel="Satisfied Clients"
            icon={<Users size={26} className="stroke-[2.2]" />}
            startCounting={inView}
            duration={2000}
            delayIndex={0}
          />
          <StatCard
            end={100}
            suffix="+"
            label="Instruments"
            sublabel="Diversified Assets"
            icon={<BarChart3 size={26} className="stroke-[2.2]" />}
            startCounting={inView}
            duration={1800}
            delayIndex={1}
          />
          <StatCard
            end={100}
            suffix="+"
            label="Awards"
            sublabel="Industry Honors"
            icon={<Trophy size={26} className="stroke-[2.2]" />}
            startCounting={inView}
            duration={1800}
            delayIndex={2}
          />
          <StatCard
            end={21}
            suffix=" Years"
            label="Of Experience"
            sublabel="Since 2003"
            icon={<Calendar size={26} className="stroke-[2.2]" />}
            startCounting={inView}
            duration={1600}
            delayIndex={3}
          />
        </div>
      </div>
    </section>
  );
}
