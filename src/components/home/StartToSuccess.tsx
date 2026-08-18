"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function AnimatedCounter({ target, suffix = "", duration = 1600, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic easing function for smooth slowing down at the end
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [trigger, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StartToSuccess() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Reset count animation when scrolled out of view
          setIsInView(false);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      targetNumber: 15,
      suffix: "",
      label: "Expert Trainer",
      icon: (
        <svg className="w-12 h-12 stroke-[#ea580c] fill-none" viewBox="0 0 48 48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="6" />
          <path d="M8 38c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M26 14h14v16H26" />
          <path d="M33 30v8M29 38h8" />
        </svg>
      ),
    },
    {
      targetNumber: 12,
      suffix: "",
      label: "Programs",
      icon: (
        <svg className="w-12 h-12 stroke-[#ea580c] fill-none" viewBox="0 0 48 48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="22" height="16" rx="2" />
          <path d="M4 26h30" />
          <rect x="22" y="18" width="18" height="14" rx="2" />
          <path d="M18 32h26" />
        </svg>
      ),
    },
    {
      targetNumber: 200,
      suffix: "+",
      label: "Students",
      icon: (
        <svg className="w-12 h-12 fill-[#ea580c]" viewBox="0 0 48 48">
          <path d="M24 10L4 20l20 10 16-8v10h4V20L24 10z" />
          <path d="M12 25.5V33c0 4.5 5.4 8 12 8s12-3.5 12-8v-7.5l-12 6-12-6z" />
        </svg>
      ),
    },
    {
      targetNumber: 312,
      suffix: "",
      label: "Course Videos",
      icon: (
        <svg className="w-12 h-12 stroke-[#ea580c] fill-none" viewBox="0 0 48 48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="12" width="32" height="24" rx="3" />
          <path d="M8 20h32M16 12l-4 8M24 12l-4 8M32 12l-4 8" />
          <polygon points="21,25 29,29 21,33" fill="#ea580c" stroke="none" />
        </svg>
      ),
    },
    {
      targetNumber: 45,
      suffix: "",
      label: "Live Classes",
      icon: (
        <svg className="w-12 h-12 stroke-[#ea580c] fill-none" viewBox="0 0 48 48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="18" width="22" height="18" rx="2" />
          <circle cx="14" cy="12" r="5" />
          <circle cx="24" cy="12" r="5" />
          <path d="M30 23l10-6v18l-10-6v-6z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#f0f6fc] py-16 sm:py-20 border-y border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Title with Permanently Locked Underline */}
          <div className="space-y-2 text-center lg:text-left shrink-0">
            <span className="text-[13px] font-black uppercase tracking-widest text-[#ea580c] block">
              START TO SUCCESS
            </span>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1d37] tracking-tight leading-tight">
              <div>Achieve Your Goals</div>
              <div className="pt-0.5">
                <span>with </span>
                <span className="relative inline-block">
                  <span>Advance Bim</span>
                  {/* Curved orange brush underline permanently locked to Advance Bim */}
                  <svg
                    className="w-full h-3.5 sm:h-4 text-[#ea580c] absolute -bottom-2 left-0"
                    viewBox="0 0 160 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10C45 2 115 2 157 11"
                      stroke="#ea580c"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right: 5 Animated Recounting Stats Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-10 w-full justify-items-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2.5 group">
                <div className="transition-transform group-hover:scale-115 duration-200">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0a1d37] leading-none min-w-[3ch]">
                  <AnimatedCounter
                    target={stat.targetNumber}
                    suffix={stat.suffix}
                    trigger={isInView}
                  />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
