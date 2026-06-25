"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Terminal, Activity, Zap } from "lucide-react";

interface StatItem {
  icon: any;
  label: string;
  targetValue: number;
  suffix: string;
  decimals?: number;
  subtext: string;
}

const STATS_DATA: StatItem[] = [
  {
    icon: Layers,
    label: "SYSTEMS DEPLOYED",
    targetValue: 24,
    suffix: "+",
    subtext: "Enterprise modules & web architectures active.",
  },
  {
    icon: Terminal,
    label: "CODE VOLUME",
    targetValue: 140,
    suffix: "k+",
    subtext: "Production-ready lines of clean, secure code.",
  },
  {
    icon: Activity,
    label: "UPTIME RATING",
    targetValue: 99.98,
    suffix: "%",
    decimals: 2,
    subtext: "Architected for high availability & low latency.",
  },
  {
    icon: Zap,
    label: "DEEP FOCUS HOURS",
    targetValue: 4800,
    suffix: "+",
    subtext: "Invested in system design, research & refactoring.",
  },
];

function CountUpItem({ icon: Icon, label, targetValue, suffix, decimals = 0, subtext }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = targetValue;
    const duration = 1500; // ms
    const incrementTime = 30; // ms
    const steps = Math.ceil(duration / incrementTime);
    const stepSize = (end - start) / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      start += stepSize;
      
      if (stepCount >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue, decimals]);

  return (
    <div
      ref={ref}
      className="p-6 border border-white/5 bg-[#0B0B0C] rounded-lg glass-panel flex flex-col justify-between items-start text-left"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 flex items-center justify-center bg-amber-500/5 border border-amber-500/10 rounded text-amber-500">
          <Icon className="h-4 w-4" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase font-bold">
          {label}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-4xl sm:text-5xl font-serif font-black text-luxury tracking-tight">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-serif font-black text-amber-500">
          {suffix}
        </span>
      </div>

      <p className="text-xs text-white/50 leading-relaxed font-light">
        {subtext}
      </p>

      {/* Subtle border bottom glow accent */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent mt-6" />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 px-6 bg-brand-matte border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <CountUpItem key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
