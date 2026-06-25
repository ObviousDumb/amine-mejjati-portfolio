"use client";

import { ShieldAlert } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    href: "https://github.com/aminemj",
    label: "GitHub"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://linkedin.com/in/amine-mejjati",
    label: "LinkedIn"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    href: "https://instagram.com/amine_mejjati",
    label: "Instagram"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        <path d="M12 4v12a3 3 0 1 1-3-3" />
      </svg>
    ),
    href: "https://tiktok.com/@amine_mejjati",
    label: "TikTok"
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        <path d="M18.8 4.2c-1.5-.7-3.1-1.2-4.8-1.4l-.2.5c-1.2-.2-2.4-.2-3.6 0l-.2-.5c-1.7.2-3.3.7-4.8 1.4-3 4.5-3.8 8.8-2.6 13 2 1.5 3.9 2.4 5.9 3l1.4-1.7c-.7-.2-1.3-.5-1.9-.9l.4-.3c2.9 1.3 6.1 1.3 9 0l.4.3c-.6.4-1.2.7-1.9.9l1.4 1.7c2-.6 3.9-1.5 5.9-3 1.2-4.2.4-8.5-2.6-13Z" />
      </svg>
    ),
    href: "https://discord.com/users/amine_mejjati",
    label: "Discord"
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-matte border-t border-[#00D9FF]/10 py-12 px-6 overflow-hidden">
      {/* Subtle bottom grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Brand logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-serif font-black text-white text-base tracking-widest uppercase">
              Amine Mejjati
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 bg-[#00D9FF]/5 border border-[#00D9FF]/20 text-[#00D9FF] rounded shadow-[0_0_8px_rgba(0,217,255,0.1)]">
              L3 SECURE
            </span>
          </div>
          <p className="text-[10px] font-mono text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} // ALL SYSTEMS RESERVED. SILENCE BUILDS EMPIRES.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center border border-white/5 hover:border-[#00D9FF]/40 bg-[#040507] hover:bg-[#00D9FF]/5 text-white/40 hover:text-[#00D9FF] hover:shadow-[0_0_10px_rgba(0,217,255,0.2)] rounded transition-all duration-300 shadow-sm"
                aria-label={social.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        {/* Right: Security Status Signal */}
        <div className="flex items-center gap-6 font-mono text-[10px] text-white/40">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_8px_rgba(0,217,255,0.6)]" />
            <span className="text-cyan-400 font-bold drop-shadow-[0_0_4px_rgba(0,217,255,0.2)]">DATAGRAPH STATUS: ONLINE</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-1.5 uppercase text-white/30">
            <ShieldAlert className="h-3 w-3 text-cyan-500/40" />
            SSL HARDENED
          </div>
        </div>

      </div>
    </footer>
  );
}
