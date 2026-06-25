"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionSectionProps {
  category: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionSection({
  category,
  title,
  children,
  defaultOpen = false,
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border border-cyan-500/10 hover:border-cyan-500/35 bg-[#05070a] rounded-lg overflow-hidden glass-panel mb-4 hover:shadow-[0_0_18px_rgba(0,217,255,0.06)] transition-all duration-500">
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-cyan-500/[0.015] cursor-pointer group"
      >
        <div className="flex flex-col gap-1 select-none">
          <span className="font-mono text-[9px] text-[#00D9FF]/80 font-bold uppercase tracking-[0.2em] drop-shadow-[0_0_4px_rgba(0,217,255,0.15)]">
            {category}
          </span>
          <span className="font-serif font-black text-sm sm:text-base text-white tracking-wide group-hover:text-[#00D9FF] transition-colors duration-300">
            {title}
          </span>
        </div>

        {/* Chevron Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/40 group-hover:text-[#00D9FF] transition-colors shrink-0 ml-4"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      {/* Expandable panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.3 } }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
            }}
            className="overflow-hidden border-t border-cyan-500/10 bg-black/40"
          >
            <div className="px-6 py-6 border-b border-cyan-500/[0.02]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
