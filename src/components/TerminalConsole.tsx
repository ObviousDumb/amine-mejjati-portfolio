"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";

interface LogLine {
  text: string;
  type: "input" | "system" | "success" | "error" | "info";
}

export default function TerminalConsole() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogLine[]>([
    { text: "BATCAVE TELEMETRY SYSTEM CONSOLE v1.0.9", type: "system" },
    { text: "DECRYPT DECK DISCONNECTED. SECURE COMMS LINK ACTIVE.", type: "system" },
    { text: "Type 'help' for a list of decrypted mainframe directives.", type: "info" }
  ]);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = inputVal.trim();
    if (!cleanInput) return;

    // Add input to log history
    const newLogs = [...history, { text: cleanInput, type: "input" as const }];
    setHistory(newLogs);
    setInputVal("");

    const cmd = cleanInput.toLowerCase().split(" ")[0];

    if (isDecrypting) {
      setHistory((prev) => [
        ...prev,
        { text: "SYS_ERR: CPU busy decrypting codeblocks. Wait for execution to finish.", type: "error" }
      ]);
      return;
    }

    switch (cmd) {
      case "help":
        setHistory((prev) => [
          ...prev,
          { text: "AVAILABLE MAINFRAME DIRECTIVES:", type: "info" },
          { text: "  help       - Display available decrypted operations.", type: "info" },
          { text: "  status     - Show Wayne Enterprises satellite locks, coordinates, and diagnostics.", type: "info" },
          { text: "  whoami     - Analyze node identity and client metadata.", type: "info" },
          { text: "  decrypt    - Execute neural decrypt algorithm on Batman records.", type: "info" },
          { text: "  clear      - Clear cryptographic terminal logs.", type: "info" }
        ]);
        break;

      case "status":
        setHistory((prev) => [
          ...prev,
          { text: "MAINFRAME STATUS READOUT:", type: "system" },
          { text: "  > HOST: WAYNE_NET_PRIMARY // ONLINE", type: "info" },
          { text: "  > REGION COORDINATES: BERKANE_BASE.MA (34.9224° N, 2.3250° W)", type: "info" },
          { text: "  > SECURITY GRID: 100% INTERNAL INTEGRITY", type: "success" },
          { text: "  > NETWORK THREAT CONTAINMENT: ACTIVE [0 ATTACKS DETECTED]", type: "success" },
          { text: "  > LIQUID CRYOGENIC TEMPERATURE: 42°C [STABLE]", type: "info" }
        ]);
        break;

      case "whoami":
        const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "Mainframe Server Node";
        setHistory((prev) => [
          ...prev,
          { text: "NODE CLASSIFICATION MATRIX:", type: "system" },
          { text: `  > CLIENT_AGENT: ${userAgent.slice(0, 75)}...`, type: "info" },
          { text: "  > THREAT_INDEX: LEVEL_0 [GUEST VISITOR NODE]", type: "info" },
          { text: "  > CAUTION: Unidentified connection is being logged. Stay clear of restricted files.", type: "error" }
        ]);
        break;

      case "decrypt":
        setIsDecrypting(true);
        setHistory((prev) => [...prev, { text: "[~] Booting neural decryption pipeline...", type: "info" }]);
        
        setTimeout(() => {
          setHistory((prev) => [...prev, { text: "[~] Decoding cryptographic matrices [======>    ] 60%", type: "info" }]);
        }, 1000);

        setTimeout(() => {
          setHistory((prev) => [...prev, { text: "[~] Assembling encrypted fragments...", type: "info" }]);
        }, 2000);

        setTimeout(() => {
          const camusQuotes = [
            "In the depth of winter, I finally learned that within me there lay an invincible summer. — Camus",
            "You either die a hero or you live long enough to see yourself become the villain. — Bruce Wayne",
            "It's not who I am underneath, but what I do that defines me. — The Batman",
            "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. — Albert Camus",
            "I think human consciousness is a tragic misstep in evolution. We became too self-aware. — Rust Cohle"
          ];
          const chosen = camusQuotes[Math.floor(Math.random() * camusQuotes.length)];
          setHistory((prev) => [
            ...prev,
            { text: `[+] DECRYPTION SUCCESSFUL:`, type: "success" },
            { text: `  "${chosen}"`, type: "success" }
          ]);
          setIsDecrypting(false);
        }, 3000);
        break;

      case "clear":
        setHistory([]);
        break;

      default:
        setHistory((prev) => [
          ...prev,
          { text: `SYS_ERR: Directive '${cmd}' unrecognized. Type 'help' for correct access commands.`, type: "error" }
        ]);
        break;
    }
  };

  return (
    <div 
      onClick={handleContainerClick}
      className="w-full bg-[#050608]/90 border border-cyan-500/10 hover:border-cyan-500/25 transition-all duration-300 rounded-lg p-4 font-mono text-xs text-white/70 glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.9)] cursor-text select-none flex flex-col relative overflow-hidden"
    >
      {/* Top terminal panel header bar */}
      <div className="flex justify-between items-center border-b border-cyan-500/10 pb-2 mb-3 select-none text-[8px] text-cyan-400/40 uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <Terminal className="h-3.5 w-3.5 text-cyan-400/60" />
          <span>Wayne_Net Terminal Shell</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span>SHELL_INTEGRITY: 100%</span>
        </div>
      </div>

      {/* Output Console History */}
      <div 
        ref={containerRef}
        className="space-y-1.5 h-64 overflow-y-auto pr-1 select-text scrollbar-thin scrollbar-thumb-cyan-500"
      >
        {history.map((log, index) => {
          let textClass = "text-white/60";
          if (log.type === "input") textClass = "text-[#00D9FF] font-bold";
          if (log.type === "system") textClass = "text-amber-400/90 font-bold";
          if (log.type === "success") textClass = "text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.3)] font-bold";
          if (log.type === "error") textClass = "text-rose-500 font-bold";
          if (log.type === "info") textClass = "text-cyan-400/80";

          return (
            <div key={index} className="leading-relaxed whitespace-pre-wrap">
              {log.type === "input" && <span className="text-cyan-500/40 mr-2">&gt;</span>}
              <span className={textClass}>{log.text}</span>
            </div>
          );
        })}

        {isDecrypting && (
          <div className="flex items-center gap-1.5 text-cyan-400/50 italic animate-pulse">
            <span className="h-1 w-3 bg-cyan-400 inline-block animate-bounce" />
            <span>Processing crypt decryption...</span>
          </div>
        )}
      </div>

      {/* Input Prompter */}
      <form onSubmit={handleCommandSubmit} className="mt-3 flex items-center border-t border-cyan-500/10 pt-2 select-none">
        <span className="text-[#00D9FF] font-bold mr-2 select-none font-mono">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={isDecrypting ? "Shell locked..." : "Type directive (e.g. status, decrypt)..."}
          disabled={isDecrypting}
          className="grow bg-transparent border-none outline-none font-mono text-xs text-white placeholder-cyan-500/35 focus:ring-0 w-full"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
