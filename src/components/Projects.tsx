"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Cpu, ExternalLink, ShieldCheck } from "lucide-react";

const PROJECTS = [
  {
    classCode: "PROJECT CLASS: ALPHA-01",
    title: "Aegis Command Gateway",
    encryption: "SHA-512 / AES-256",
    coreModule: "Distributed API Engine",
    description: "A high-performance reverse proxy and routing gateway executing telemetry operations at sub-15ms latencies. Engineered to handle large-scale concurrent requests with zero packet loss.",
    metrics: [
      { label: "Daily Volume", value: "50M+ requests" },
      { label: "Performance Index", value: "99.98% Uptime" },
      { label: "Avg Latency", value: "11.2ms" },
    ],
    tech: ["Next.js", "Node.js", "Redis", "Docker", "Rust Wasm"],
    icon: Cpu,
  },
  {
    classCode: "PROJECT CLASS: BETA-04",
    title: "Vesper Luxury Configurator",
    encryption: "TLS 1.3 / Strict-CSP",
    coreModule: "WebGL Render Matrix",
    description: "A premium digital showroom engineered for a bespoke Swiss watch maker, utilizing Custom Canvas renderers and WebGL shaders for fluid, real-time 3D watch telemetry and assembly customization.",
    metrics: [
      { label: "Active Nodes", value: "2M+ interactions" },
      { label: "Rendering Speed", value: "60 FPS Fluid" },
      { label: "VRAM Budget", value: "Sub-45MB" },
    ],
    tech: ["React 19", "Tailwind v4", "WebGL", "Framer Motion", "Three.js"],
    icon: Terminal,
  },
  {
    classCode: "PROJECT CLASS: GAMMA-09",
    title: "Apex Telemetry Engine",
    encryption: "Curve25519 / E2E",
    coreModule: "WebSocket Event Pipeline",
    description: "Real-time telemetry monitoring suite designed for a private logistics firm, tracking asset locations, fuel telemetry, and driver analytics in milliseconds.",
    metrics: [
      { label: "Monitored Assets", value: "12,000 units" },
      { label: "Transmission Lag", value: "< 5.0ms" },
      { label: "Event Throughput", value: "25k / sec" },
    ],
    tech: ["TypeScript", "Go / WebSockets", "PostgreSQL", "AWS ECS", "Kafka"],
    icon: ShieldCheck,
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      {PROJECTS.map((project, idx) => {
        const Icon = project.icon;

        return (
          <div
            key={idx}
            className="relative flex flex-col justify-between p-5 border border-white/5 rounded-lg bg-black/45 h-full"
          >
            {/* Accent Top Bar */}
            <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-4">
              <span className="font-mono text-[8px] text-amber-500/80 font-bold tracking-widest">
                {project.classCode}
              </span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 border border-white/5 rounded font-mono text-[7px] text-white/40">
                <ShieldAlert className="h-2 w-2 text-amber-500" />
                {project.encryption}
              </div>
            </div>

            {/* Project Meta Info */}
            <div className="grow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 shrink-0 flex items-center justify-center bg-amber-500/5 border border-amber-500/10 rounded-lg text-amber-500">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-white tracking-wide leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[8px] text-white/35 uppercase tracking-widest mt-0.5">
                    MOD: {project.coreModule}
                  </p>
                </div>
              </div>

              <p className="text-xs text-white/55 leading-relaxed font-light mb-4">
                {project.description}
              </p>

              {/* Telemetry specs grid */}
              <div className="space-y-1.5 mb-4 font-mono">
                {project.metrics.map((metric, metricIdx) => (
                  <div
                    key={metricIdx}
                    className="flex justify-between items-center py-1 px-2 bg-[#0B0B0C] border border-white/[0.03] rounded text-[9px]"
                  >
                    <span className="text-white/40">{metric.label}:</span>
                    <span className="text-amber-500 font-bold tracking-wider">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags & CTA Link */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-1.5 py-0.5 bg-white/5 rounded font-mono text-[7px] text-white/60 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-1.5 py-1.5 border border-white/5 hover:border-amber-500/40 bg-[#0B0B0C] hover:bg-amber-500/5 text-white/50 hover:text-amber-500 font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded"
              >
                REQUEST BLUEPRINTS
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

          </div>
        );
      })}
    </div>
  );
}
