"use client";

import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  startCounting: boolean;
  duration?: number;
}

function StatCard({
  end,
  suffix = "",
  prefix = "",
  label,
  startCounting,
  duration = 2000,
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

  return (
    <div className="stat-item">
      <p className="stat-number">
        <span className="sr-only">
          {prefix}{end}{suffix}
        </span>
        <span aria-hidden="true">
          {prefix}{startCounting ? count : end}{suffix}
        </span>
      </p>
      <p className="stat-label">{label}</p>
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
    <section ref={sectionRef} className={`stats ${inView ? "in-view" : ""}`}>
      <div className="container stats-grid">
        <StatCard
          end={5000}
          suffix="+"
          label="Investors"
          startCounting={inView}
          duration={2200}
        />
        <StatCard
          end={100}
          suffix="+"
          label="Instruments"
          startCounting={inView}
          duration={1800}
        />
        <StatCard
          end={10}
          suffix="+"
          label="Awards"
          startCounting={inView}
          duration={1500}
        />
        <StatCard
          end={21}
          suffix=" Years"
          label="Of Experience"
          startCounting={inView}
          duration={1600}
        />
      </div>
    </section>
  );
}
