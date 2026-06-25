"use client";

import { motion } from "framer-motion";
import { Terminal, ChevronRight, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Decorative scanline overlay local to Hero */}
      <div className="absolute inset-0 bg-repeat opacity-[0.015] pointer-events-none scanlines z-10" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none -z-10" />

      {/* Central lighting bloom (amber glow) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Radar telemetry scan line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent animate-scan pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* System Coordinates & Status Bar */}
        <motion.div
          className="mb-8 flex items-center gap-3 px-4 py-1.5 bg-[#0B0B0C] border border-white/5 rounded-full text-white/50 text-[10px] font-mono tracking-widest uppercase glass-panel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span>LOCATION: 34.9200° N, 2.3200° W // BERKANE, MA</span>
          <span className="h-3 w-[1px] bg-white/10" />
          <span className="text-amber-500">DECRYPTED LEVEL: alpha</span>
        </motion.div>

        {/* Primary Quote */}
        <motion.div
          className="max-w-3xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-xs sm:text-sm font-mono tracking-[0.35em] text-amber-500 uppercase font-semibold">
            &mdash; SYSTEM CORE PHILOSOPHY
          </h2>
        </motion.div>

        {/* Cinematic Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-luxury leading-[1.1] mb-6 select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Silence Builds <br />
          <span className="text-amber-glow font-black">Empires.</span>
        </motion.h1>

        {/* Secondary Description */}
        <motion.p
          className="max-w-xl text-xs sm:text-sm md:text-base font-sans tracking-wide text-white/60 font-light leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          Great systems are invisible until they change everything. Designed by{" "}
          <strong className="text-white font-medium font-serif">Amine Mejjati</strong>, a Concepteur
          Full-Stack Developer crafting high-integrity systems, luxury digital dashboards, and enterprise-grade software architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {/* Main Access Button */}
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-black font-mono text-xs font-bold tracking-[0.2em] rounded uppercase transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] overflow-hidden"
          >
            {/* Hover sliding overlay */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform skew-x-12 -translate-x-full group-hover:animate-scan-once pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              ACCESS ARCHITECTURE
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          {/* Secure Dossier Button */}
          <a
            href="#about"
            className="group px-8 py-3.5 bg-black/40 hover:bg-white/5 border border-white/10 hover:border-amber-500/40 text-white font-mono text-xs font-bold tracking-[0.2em] rounded uppercase transition-all duration-300 glass-panel-glow"
          >
            <span className="flex items-center gap-2 justify-center text-white/70 group-hover:text-amber-500 transition-colors">
              <Lock className="h-3.5 w-3.5" />
              DECRYPT DOSSIER
            </span>
          </a>
        </motion.div>

        {/* Telemetry Footer inside Hero */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 max-w-3xl w-full border-t border-white/5 pt-10 text-left font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        >
          <div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">DESIGN CODE</div>
            <div className="text-xs text-white/80 font-bold tracking-wider">ASTON-PENTHOUSE-26</div>
          </div>
          <div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">ENCRYPTION ENGINE</div>
            <div className="text-xs text-white/80 font-bold tracking-wider">RSA-4096-AES</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">OPERATING REGION</div>
            <div className="text-xs text-white/80 font-bold tracking-wider">BERKANE / N.MOROCCO</div>
          </div>
        </motion.div>
      </div>

      {/* Visual background luxury accents (e.g. coordinates display bottom left, system status bottom right) */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/20 select-none hidden md:block">
        SYS.STATE: SECURE_ALPHA_MODE // VER: 15.2.0
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/20 select-none hidden md:block">
        PENTHOUSE LAB TELEMETRY // INTEL CORE
      </div>
    </section>
  );
}
