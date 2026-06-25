"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Cpu, ShieldAlert, Award, Compass, HardDrive } from "lucide-react";

const TABS = [
  { id: "summary", label: "01 // EXECUTIVE SUMMARY" },
  { id: "strategy", label: "02 // OPERATIONAL METHOD" },
  { id: "logs", label: "03 // PRIVATE LOGS" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("summary");

  const tabContents = {
    summary: (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h4 className="text-lg font-serif font-bold text-white tracking-wide">
          SYSTEM ARCHITECT & FULL-STACK DEVELOPER
        </h4>
        <p className="text-sm text-white/60 leading-relaxed font-light">
          Operating from Berkane, Morocco, I specialize in engineering secure, high-availability,
          and premium digital assets. I bridge the gap between complex backend architectures and
          immaculate, pixel-perfect frontend experiences.
        </p>
        <p className="text-sm text-white/60 leading-relaxed font-light">
          My designs borrow heavily from the philosophy of high-end automotive brands and modern minimalist architecture:
          heavy contours, structural integrity, zero fluff, and extreme performance.
        </p>
        
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5 font-mono text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-white/30 uppercase tracking-widest text-[9px]">DESIGNATION</span>
            <span className="text-white/80 font-semibold">Concepteur Full-Stack</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/30 uppercase tracking-widest text-[9px]">LOCATION</span>
            <span className="text-white/80 font-semibold">Berkane, Morocco</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/30 uppercase tracking-widest text-[9px]">CURRENT STATUS</span>
            <span className="text-amber-500 font-semibold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              STEALTH MODE
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/30 uppercase tracking-widest text-[9px]">OPERATIONAL DEPTH</span>
            <span className="text-white/80 font-semibold">L3 Architecture Level</span>
          </div>
        </div>
      </motion.div>
    ),
    strategy: (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h4 className="text-lg font-serif font-bold text-white tracking-wide">
          SYSTEM DEVELOPMENT PARADIGMS
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center bg-amber-500/5 border border-amber-500/20 rounded text-amber-500">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
                Monolithic Precision
              </h5>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Constructing highly cohesive modules that eliminate networking overhead while retaining complete service isolation.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center bg-amber-500/5 border border-amber-500/20 rounded text-amber-500">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
                Zero-Trust Data Layers
              </h5>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Securing data flow at rest and in transit. Standardizing on end-to-end telemetry and validation filters.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center bg-amber-500/5 border border-amber-500/20 rounded text-amber-500">
              <HardDrive className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
                High-Availability Compute
              </h5>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Utilizing state-of-the-art edge execution, database replica pools, and aggressive caching matrices.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center bg-amber-500/5 border border-amber-500/20 rounded text-amber-500">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
                Performance Telemetry
              </h5>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Every millisecond of latency is a defect. Striving for 99th percentile response times below 50ms.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    ),
    logs: (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h4 className="text-lg font-serif font-bold text-white tracking-wide">
          PERSONAL CONFIGURATIONS & PHILOSOPHY
        </h4>
        <p className="text-sm text-white/60 leading-relaxed font-light">
          Outside of software design, I observe design layouts in luxury supercars, aerospace cockpits,
          and modern brutalist architecture. I believe digital interfaces should be as solid and
          compelling as physical assets.
        </p>
        <div className="bg-[#121214] border border-white/5 p-4 rounded text-xs font-mono text-white/60 space-y-2">
          <div className="flex justify-between">
            <span className="text-amber-500">&gt; favorite_hardware:</span>
            <span>Intel Core i9 // RTX 4090 // Custom Loop</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-500">&gt; key_influences:</span>
            <span>Aston Martin Vulcan // Porsche 911 Targa // Mies van der Rohe</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-500">&gt; active_research:</span>
            <span>Next-gen WebAssembly // Embedded Rust // Real-time Edge Networks</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-500">&gt; encryption:</span>
            <span>GPG signed // Key fingerprint verified</span>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <section id="about" className="relative py-28 px-6 bg-brand-matte overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-1/3 w-[350px] h-[350px] rounded-full bg-amber-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dossier Title and Decryption Interface */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded text-amber-500 text-[10px] font-mono tracking-widest uppercase mb-4">
              <User className="h-3.5 w-3.5" />
              IDENTIFICATION RECORD
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-luxury mb-4">
              Amine Mejjati
            </h2>
            <p className="text-xs font-mono tracking-widest text-amber-500 uppercase mb-8">
              CONCEPTEUR FULL-STACK DEVELOPER
            </p>

            {/* Tab Selectors */}
            <div className="w-full flex flex-col gap-3 font-mono">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-5 py-4 border text-xs tracking-wider transition-all duration-300 flex justify-between items-center ${
                      isActive
                        ? "bg-amber-500/5 border-amber-500/60 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.05)]"
                        : "bg-[#0B0B0C] border-white/5 text-white/40 hover:text-white hover:border-white/10"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="h-1.5 w-1.5 rounded-full bg-amber-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Dossier Details Viewer */}
          <div className="lg:col-span-7">
            <div className="relative p-8 md:p-10 border border-white/5 rounded-xl glass-panel-glow text-left min-h-[380px] flex flex-col justify-between">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500/40 rounded-tl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500/40 rounded-tr" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500/40 rounded-bl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500/40 rounded-br" />

              {/* Status Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-6 mb-6">
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                  CLASSIFIED INFORMATION // ACCESS GRANTED
                </span>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-amber-500">
                  <Award className="h-3 w-3" />
                  AUTHENTIC
                </div>
              </div>

              {/* Tab Display Area */}
              <div className="grow">
                <AnimatePresence mode="wait">
                  {tabContents[activeTab as keyof typeof tabContents]}
                </AnimatePresence>
              </div>

              {/* Status Footer */}
              <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[9px] font-mono text-white/30">
                <span>SECURITY CLEARANCE REQUIRED FOR TRANSMISSION</span>
                <span>PACKET: DEC_01_A</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
