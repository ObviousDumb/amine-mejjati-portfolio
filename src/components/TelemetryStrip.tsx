"use client";

import { useEffect, useState } from "react";
import { Activity, ShieldAlert, Cpu, Database } from "lucide-react";

export default function TelemetryStrip() {
  const [ping, setPing] = useState(12);
  const [cpuTemp, setCpuTemp] = useState(42);
  const [memLoad, setMemLoad] = useState(42.4);
  const [cryptHash, setCryptHash] = useState("0x8F_B2_C4");

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time fluctuations
      setPing((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 10 && next <= 18 ? next : prev;
      });

      setCpuTemp((prev) => {
        const delta = Math.random() > 0.6 ? 1 : -1;
        const next = prev + delta;
        return next >= 39 && next <= 45 ? next : prev;
      });

      setMemLoad((prev) => {
        const delta = (Math.random() - 0.5) * 0.1;
        const next = parseFloat((prev + delta).toFixed(1));
        return next >= 41.0 && next <= 44.5 ? next : prev;
      });

      // Generate random high-tech hash segment
      const hexChars = "0123456789ABCDEF";
      let randomSegment = "0x";
      for (let i = 0; i < 3; i++) {
        randomSegment += hexChars[Math.floor(Math.random() * 16)];
        randomSegment += hexChars[Math.floor(Math.random() * 16)];
        if (i < 2) randomSegment += "_";
      }
      setCryptHash(randomSegment);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[9px] mb-8 select-none">
      
      {/* 1. Mainframe Ping */}
      <div className="p-3 bg-[#050608]/75 border border-cyan-500/10 rounded-lg flex flex-col justify-between items-start glass-panel hover:border-cyan-500/25 transition-all duration-300">
        <div className="flex items-center justify-between w-full text-cyan-400/40 uppercase tracking-wider mb-2">
          <span>Ping Latency</span>
          <Activity className="h-3 w-3 text-cyan-400/60" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold text-white drop-shadow-[0_0_5px_rgba(0,217,255,0.3)]">{ping}</span>
          <span className="text-[7px] text-[#00D9FF]">MS</span>
        </div>
        <div className="w-full h-[1.5px] bg-cyan-950/45 rounded-full overflow-hidden mt-2 relative">
          <div 
            className="h-full bg-cyan-500 transition-all duration-700" 
            style={{ width: `${(ping / 20) * 100}%` }}
          />
        </div>
      </div>

      {/* 2. CPU Core Temp */}
      <div className="p-3 bg-[#050608]/75 border border-cyan-500/10 rounded-lg flex flex-col justify-between items-start glass-panel hover:border-cyan-500/25 transition-all duration-300">
        <div className="flex items-center justify-between w-full text-cyan-400/40 uppercase tracking-wider mb-2">
          <span>Core Temp</span>
          <Cpu className="h-3 w-3 text-cyan-400/60" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold text-white drop-shadow-[0_0_5px_rgba(0,217,255,0.3)]">{cpuTemp}</span>
          <span className="text-[7px] text-[#00D9FF]">°C</span>
        </div>
        <div className="w-full h-[1.5px] bg-cyan-950/45 rounded-full overflow-hidden mt-2 relative">
          <div 
            className="h-full bg-cyan-500 transition-all duration-700" 
            style={{ width: `${(cpuTemp / 60) * 100}%` }}
          />
        </div>
      </div>

      {/* 3. Memory Allocation */}
      <div className="p-3 bg-[#050608]/75 border border-cyan-500/10 rounded-lg flex flex-col justify-between items-start glass-panel hover:border-cyan-500/25 transition-all duration-300">
        <div className="flex items-center justify-between w-full text-cyan-400/40 uppercase tracking-wider mb-2">
          <span>Memory Load</span>
          <Database className="h-3 w-3 text-cyan-400/60" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold text-white drop-shadow-[0_0_5px_rgba(0,217,255,0.3)]">{memLoad}</span>
          <span className="text-[7px] text-[#00D9FF]">%</span>
        </div>
        <div className="w-full h-[1.5px] bg-cyan-950/45 rounded-full overflow-hidden mt-2 relative">
          <div 
            className="h-full bg-cyan-500 transition-all duration-700" 
            style={{ width: `${(memLoad / 100) * 100}%` }}
          />
        </div>
      </div>

      {/* 4. Active Encryption */}
      <div className="p-3 bg-[#050608]/75 border border-cyan-500/10 rounded-lg flex flex-col justify-between items-start glass-panel hover:border-cyan-500/25 transition-all duration-300">
        <div className="flex items-center justify-between w-full text-cyan-400/40 uppercase tracking-wider mb-2">
          <span>Crypto Signature</span>
          <ShieldAlert className="h-3 w-3 text-cyan-400/60" />
        </div>
        <span className="text-[10px] font-bold text-[#00D9FF] drop-shadow-[0_0_5px_rgba(0,217,255,0.3)] select-all truncate w-full">
          {cryptHash}
        </span>
        <span className="text-[6px] text-cyan-500/30 uppercase tracking-widest mt-2">
          AES_256_ACTIVE
        </span>
      </div>

    </div>
  );
}
