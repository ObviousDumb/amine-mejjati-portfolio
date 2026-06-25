"use client";

import { motion } from "framer-motion";
import { Calendar, Target } from "lucide-react";

const TIMELINE = [
  {
    period: "JAN 2024 &mdash; PRESENT",
    role: "Lead Concepteur Full-Stack",
    company: "Private Systems Lab / Stealth Venture",
    focus: "Distributed Engines, Edge Databases, Security Protocols",
    description: [
      "Spearheaded transition to modular Next.js 15 App Routers and edge-optimized serverless handlers, reducing overall data transit overhead by 30%.",
      "Designed and deployed zero-trust OAuth 2.0 authentication protocols combined with secure AES-256 encrypted fields in user databases.",
      "Optimized PostgreSQL database performance using indexing clusters and replica pooling, boosting write throughput by 2.5x.",
    ],
  },
  {
    period: "JUN 2022 &mdash; DEC 2023",
    role: "Senior Full-Stack Developer",
    company: "Luxury Digital Solutions Firm",
    focus: "Premium Interfaces, Canvas Telemetry, State Architecture",
    description: [
      "Architected premium e-commerce configurations for high-end brands, utilizing canvas-based rendering pipelines and custom micro-interactions.",
      "Engineered real-time data visualizers and dashboard command grids using WebSockets and TypeScript, decreasing event latency below 50ms.",
      "Mentored junior engineers on frontend modularization, component design systems, and SEO/performance optimization standards.",
    ],
  },
  {
    period: "SEP 2020 &mdash; MAY 2022",
    role: "Full-Stack Developer",
    company: "Independent Tech Lab",
    focus: "REST Engines, Database Hardening, Automation Scripts",
    description: [
      "Built and maintained core backend APIs handling over 5M daily telemetry records using Express, Node.js, and Redis caching layers.",
      "Automated infrastructure testing and deployment channels using GitHub Actions and Docker, reducing build delivery times by 40%.",
      "Designed secure database schemas and audit logs to track real-time telemetry changes, complying with high-integrity security protocols.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="relative border-l border-white/10 ml-4 pl-6 space-y-6">
      {TIMELINE.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          {/* Timeline Bullet Connector */}
          <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-black flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />

          {/* Card Container */}
          <div className="p-5 border border-white/5 rounded-lg bg-black/45 text-left">
            
            {/* Inline Date badge */}
            <div className="flex items-center gap-1.5 font-mono text-[8px] text-amber-500/80 font-bold tracking-widest mb-2">
              <Calendar className="h-3 w-3 text-amber-500/50" />
              <span dangerouslySetInnerHTML={{ __html: item.period }} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <div>
                <h3 className="font-serif font-bold text-sm text-white tracking-wide">
                  {item.role}
                </h3>
                <p className="font-mono text-[10px] text-white/40 mt-0.5">
                  {item.company}
                </p>
              </div>
              
              <span className="self-start sm:self-center px-1.5 py-0.5 bg-amber-500/5 border border-amber-500/10 rounded font-mono text-[8px] text-amber-500 tracking-wider uppercase">
                COMPLETED
              </span>
            </div>

            <div className="font-mono text-[8px] text-white/30 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Target className="h-2.5 w-2.5 text-amber-500/60" />
              FOCUS: {item.focus}
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 text-xs text-white/55 font-light leading-relaxed">
              {item.description.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="flex items-start gap-2">
                  <span className="h-1 w-1 rounded-full bg-amber-500/40 shrink-0 mt-1.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      ))}
    </div>
  );
}
