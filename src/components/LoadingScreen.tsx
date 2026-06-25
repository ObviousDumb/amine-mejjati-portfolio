"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "SECURE CONNECTION ESTABLISHED // PORT 8080",
  "DECRYPTING SECURITY DOSSIER: AMINE MEJJATI...",
  "LOADING CORE MODULES [FRONTEND / BACKEND / DB]...",
  "STABILIZING CRYO FLUIDICS...",
  "RENDERING PENTHOUSE LAB TELEMETRY...",
  "SYNCHRONIZING BERKANE COORDINATES...",
  "SYSTEM ARCHITECTURE: SECURE. ONLINE.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4; // Fast and dynamic increment
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Sync logs with progress ranges
    const targetIndex = Math.min(
      Math.floor((progress / 100) * BOOT_LOGS.length),
      BOOT_LOGS.length - 1
    );
    if (targetIndex > logIndex) {
      setLogIndex(targetIndex);
    }

    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsDone(true);
        const completeTimer = setTimeout(onComplete, 800); // Allow exit transition to complete
        return () => clearTimeout(completeTimer);
      }, 600);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, logIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] p-6 font-mono select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle noise and scanlines background */}
          <div className="absolute inset-0 bg-repeat opacity-[0.015] pointer-events-none scanlines" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />

          {/* Central Logo Indicator */}
          <div className="relative mb-12 flex items-center justify-center">
            {/* outer luxury rings */}
            <motion.div
              className="absolute h-24 w-24 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,217,255,0.05)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-20 w-20 rounded-full border border-dashed border-cyan-400/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-950/40 via-cyan-900/10 to-transparent border border-cyan-500/20 flex items-center justify-center">
              <span className="text-[#00D9FF] font-serif text-2xl font-bold tracking-widest drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]">AM</span>
            </div>
            {/* pulse ring */}
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-cyan-500/10"
              animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Telemetry Readouts */}
          <div className="w-full max-w-lg mb-8 flex flex-col text-left">
            <div className="text-[10px] text-cyan-400/50 uppercase tracking-widest mb-2 flex justify-between">
              <span>Security Terminal : Online</span>
              <span>v1.0.0-SECURE</span>
            </div>
            
            <div className="bg-[#050608] border border-cyan-500/10 rounded p-4 h-36 flex flex-col justify-end overflow-hidden glass-panel">
              {BOOT_LOGS.slice(0, logIndex + 1).map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xs ${
                    index === logIndex ? "text-[#00D9FF] drop-shadow-[0_0_8px_rgba(0,217,255,0.4)] font-bold" : "text-white/30"
                  } font-mono mb-1 leading-relaxed`}
                >
                  <span className="text-cyan-500/40 mr-2">&gt;</span>
                  {log}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bar and numeric readout */}
          <div className="w-full max-w-lg">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs uppercase tracking-widest text-white/50">SYSTEM INITIALIZATION</span>
              <span className="text-lg font-bold text-[#00D9FF] tracking-wider drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]">{progress}%</span>
            </div>
            {/* outer bar */}
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              {/* inner progress */}
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
