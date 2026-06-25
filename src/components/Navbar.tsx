"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Terminal, Shield, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", href: "#hero" },
  { label: "Dossier", href: "#about" },
  { label: "Telemetry", href: "#skills" },
  { label: "Modules", href: "#projects" },
  { label: "Logs", href: "#experience" },
  { label: "Secure Channel", href: "#contact" },
];

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track page scroll to toggle background solidness
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set real-time digital clock in UTC/Local format
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds} GMT+1`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-amber-500/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 flex items-center justify-center border border-amber-500/30 rounded-lg bg-black overflow-hidden transition-all duration-300 group-hover:border-amber-500/80">
              <span className="text-amber-500 font-serif font-black tracking-widest text-lg z-10 transition-transform duration-300 group-hover:scale-110">
                AM
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
                A. MEJJATI
              </span>
              <span className="text-[9px] font-mono tracking-widest text-amber-500/60 uppercase">
                SECURE ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-mono tracking-widest text-white/50 hover:text-amber-500 transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Command Telemetry (Clock & Security Badge) */}
          <div className="hidden lg:flex items-center gap-4 text-right">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold tracking-wider text-amber-500 flex items-center gap-1.5 justify-end">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                SYSTEM RUNNING
              </span>
              <span className="text-xs font-mono tracking-widest text-white/60">
                {time || "00:00:00 GMT+1"}
              </span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-mono tracking-widest uppercase">
              <Shield className="h-3 w-3" />
              AES-256
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-amber-500 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent scroll-progress shadow-[0_0_10px_rgba(245,158,11,0.5)]"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Drawer Menu */}
      <motion.div
        className={`fixed inset-0 z-30 bg-[#050505] flex flex-col justify-center p-8 border-l border-amber-500/10 md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle scanline background for drawer */}
        <div className="absolute inset-0 bg-repeat opacity-[0.01] pointer-events-none scanlines" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />

        <div className="flex flex-col gap-6 items-start">
          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-mono tracking-widest text-white/60 hover:text-amber-500 transition-colors duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : 20 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-amber-500/40 mr-3">0{index + 1}.</span>
              {item.label}
            </motion.a>
          ))}
          <div className="w-full h-[1px] bg-white/5 my-4" />
          <div className="flex flex-col text-left gap-2 text-xs font-mono text-white/40">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
              SYSTEM COMMAND CENTER
            </span>
            <span>BERKANE, MA / {time || "00:00:00 GMT+1"}</span>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] uppercase text-amber-500/80">
              <Terminal className="h-3 w-3" /> SECURE ROOT ENVIRONMENT
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
