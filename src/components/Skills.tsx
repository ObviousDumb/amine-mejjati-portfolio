"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Cloud } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Backend & Systems",
    icon: Cpu,
    metric: "94% Stability Index",
    percentage: 94,
    skills: [
      { name: "Node.js / Express", level: "Expert" },
      { name: "TypeScript", level: "Native" },
      { name: "PostgreSQL & Prisma", level: "Optimized" },
      { name: "REST / GraphQL APIs", level: "High Integrity" },
      { name: "Redis Caching Layers", level: "Sub-1ms" },
      { name: "Microservices", level: "Distributed" },
    ],
  },
  {
    title: "Frontend & Interfaces",
    icon: Terminal,
    metric: "98% Visual Fidelity",
    percentage: 98,
    skills: [
      { name: "Next.js 15 / React 19", level: "Core Stack" },
      { name: "Tailwind CSS v4", level: "Expert" },
      { name: "Framer Motion", level: "Cinematic" },
      { name: "HTML5 Canvas / WebGL", level: "Custom Render" },
      { name: "UI Micro-Interactions", level: "Premium" },
      { name: "Responsive Layouts", level: "Fluid" },
    ],
  },
  {
    title: "Security & Hardening",
    icon: Shield,
    metric: "92% Integrity",
    percentage: 92,
    skills: [
      { name: "AES-256 / RSA Enc.", level: "Standard" },
      { name: "OAuth 2.0 / JWT Auth", level: "Hardened" },
      { name: "CORS / CSP Policies", level: "Strict" },
      { name: "Rate Limiting & Firewalls", level: "Active" },
      { name: "API Gateway Security", level: "Secure" },
      { name: "Database Encryption", level: "RSA-4096" },
    ],
  },
  {
    title: "Cloud & Devops",
    icon: Cloud,
    metric: "90% Delivery Speed",
    percentage: 90,
    skills: [
      { name: "AWS Services", level: "Enterprise" },
      { name: "Docker Containers", level: "Immutable" },
      { name: "GitHub Actions CI/CD", level: "Automated" },
      { name: "Vercel / Netlify Deploy", level: "Edge Hosting" },
      { name: "Nginx Reverse Proxy", level: "Configured" },
      { name: "Linux Bash Scripting", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {SKILL_CATEGORIES.map((category, catIdx) => {
        const Icon = category.icon;
        
        // SVG circular calculations
        const radius = 28;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (category.percentage / 100) * circumference;

        return (
          <div
            key={catIdx}
            className="relative p-5 border border-white/5 rounded-lg bg-black/45 flex flex-col justify-between overflow-hidden"
          >
            {/* Card Header: Category + Dial */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center bg-amber-500/5 border border-amber-500/10 rounded-lg text-amber-500">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xs text-white tracking-wide">
                    {category.title}
                  </h3>
                  <p className="font-mono text-[8px] text-amber-500/70 tracking-wider">
                    {category.metric}
                  </p>
                </div>
              </div>

              {/* Telemetry Dial (SVG Ring) */}
              <div className="relative h-14 w-14 flex items-center justify-center scale-90">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    className="stroke-white/5 fill-none"
                    strokeWidth="2.5"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r={radius}
                    className="stroke-amber-500 fill-none"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute text-[10px] font-mono font-bold text-white/90">
                  {category.percentage}%
                </div>
              </div>
            </div>

            {/* Skills Specs */}
            <div className="grid grid-cols-1 gap-2 pt-4 border-t border-white/5">
              {category.skills.slice(0, 4).map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="flex items-center justify-between p-1.5 bg-[#0B0B0C] border border-white/[0.03] rounded font-mono text-[9px]"
                >
                  <div className="flex items-center gap-1.5 text-white/60">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {skill.name}
                  </div>
                  <span className="text-amber-500/80 font-bold tracking-widest text-[8px] uppercase">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
