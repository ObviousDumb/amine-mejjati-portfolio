"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint } from "lucide-react";

export default function DossierCard() {
  return (
    <div className="dossier-book flex items-center justify-center gap-2 max-w-sm sm:max-w-md w-full mx-auto py-10 select-none">
      
      {/* LEFT PAGE - Single Photo */}
      <div className="dossier-page-left w-1/2 aspect-[3/4] bg-[#05070a] border border-cyan-500/10 rounded-l-lg p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        
        {/* Spotlight bloom local to card */}
        <div className="absolute -left-10 -top-10 w-24 h-24 rounded-full bg-cyan-500/5 blur-xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex justify-between items-center text-[7px] font-mono text-cyan-400/30 uppercase tracking-widest border-b border-cyan-500/10 pb-2">
          <span>Dossier: Alpha</span>
          <span className="text-[#00D9FF] flex items-center gap-0.5 font-bold drop-shadow-[0_0_5px_rgba(0,217,255,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
            ONLINE
          </span>
        </div>

        {/* Main Photo container */}
        <div className="grow flex flex-col items-center justify-center my-3 relative overflow-hidden rounded border border-cyan-500/15 bg-black/60 aspect-[4/5] w-full">
          {/* Scan line overlaying the image */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent shadow-[0_0_8px_rgba(0,217,255,0.5)] animate-scan pointer-events-none z-20" />
          
          <img
            src="/IMG_2525.JPG"
            alt="Amine Mejjati Profile"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 pointer-events-auto"
          />

          {/* Tactical border frame overlay */}
          <div className="absolute inset-0 border border-cyan-500/15 pointer-events-none z-10" />
        </div>

        {/* Bottom Footer details */}
        <div className="font-mono text-[7px] text-white/40 space-y-0.5 border-t border-cyan-500/10 pt-2">
          <div className="flex justify-between">
            <span>SUBJECT:</span>
            <span className="text-cyan-400 font-bold">AMINE_MEJJATI</span>
          </div>
          <div className="flex justify-between">
            <span>ALIGNMENT:</span>
            <span className="text-white/80">TACTICAL_SYS</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE - System Encryption Matrix */}
      <div className="dossier-page-right w-1/2 aspect-[3/4] bg-[#05070a] border border-cyan-500/10 rounded-r-lg p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        
        {/* Spotlight bloom */}
        <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-cyan-500/5 blur-xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex justify-between items-center text-[7px] font-mono text-cyan-400/30 uppercase tracking-widest border-b border-cyan-500/10 pb-2">
          <span>Decrypted logs</span>
          <span className="text-emerald-400 flex items-center gap-0.5 font-bold drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]">
            <Shield className="h-2 w-2" />
            SECURE
          </span>
        </div>

        {/* Fingerprint / Data readout details */}
        <div className="grow flex flex-col justify-center items-center my-2 space-y-3">
          {/* Animated fingerprint icon block */}
          <div className="relative h-14 w-14 flex items-center justify-center bg-black/70 border border-cyan-500/20 rounded-lg">
            <Fingerprint className="h-8 w-8 text-[#00D9FF] drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]" />
            <motion.div
              className="absolute inset-x-0 h-[1.5px] bg-[#00D9FF]/70 shadow-[0_0_10px_rgba(0,217,255,0.7)]"
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Diagnostic Console code blocks */}
          <div className="w-full text-left font-mono text-[7px] text-white/55 bg-black/60 border border-cyan-500/10 p-2 rounded leading-tight space-y-1">
            <div className="flex justify-between text-[6px] text-cyan-400/30 uppercase border-b border-cyan-500/10 pb-1">
              <span>Telemetry Matrix</span>
              <span>AES-256</span>
            </div>
            <div className="flex justify-between">
              <span>&gt; sys_integrity:</span>
              <span className="text-[#00D9FF] font-bold drop-shadow-[0_0_4px_rgba(0,217,255,0.3)]">100%</span>
            </div>
            <div className="flex justify-between text-white/40">
              <span>&gt; dec_signature:</span>
              <span>A5_4F_8B</span>
            </div>
            <div className="flex justify-between">
              <span>&gt; region_code:</span>
              <span className="text-white/80">MA.BERKANE</span>
            </div>
          </div>
        </div>

        {/* Bottom details */}
        <div className="font-mono text-[7px] text-white/40 space-y-0.5 border-t border-cyan-500/10 pt-2">
          <div className="flex justify-between">
            <span>OPERATIONAL:</span>
            <span className="text-emerald-400 font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.4)]">TRUE</span>
          </div>
          <div className="flex justify-between">
            <span>TELEMETRY:</span>
            <span className="text-[#00D9FF] font-bold">ESTABLISHED</span>
          </div>
        </div>
      </div>

    </div>
  );
}
