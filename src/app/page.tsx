"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, ShieldCheck } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleSkyline from "@/components/ParticleSkyline";
import Spotlight from "@/components/Spotlight";
import DossierCard from "@/components/DossierCard";
import AccordionSection from "@/components/AccordionSection";
import Footer from "@/components/Footer";

// ===================================================
// BATCOMPUTER TELEMETRY DATA CONFIGURATION (EDITABLE)
// ===================================================

const PERSONALITY_TRAITS = [
  { name: "TACTICAL MIND", value: "85% INTROVERTED", sub: "Thrives in solitary deep focus, exploring complex theoretical systems." },
  { name: "SYSTEM ENERGY", value: "78% INTUITIVE", sub: "Prone to pattern recognition and abstract conceptualization." },
  { name: "LOGICAL NATURE", value: "90% THINKING", sub: "Prioritizes objective truth and logical consistency over convenience." },
  { name: "EXECUTION TACTICS", value: "82% PROSPECTING (TURBULENT)", sub: "Highly adaptable, constantly scanning for cognitive improvements." },
];

const FICTIONAL_CHARACTERS = [
  { name: "Francis Underwood", source: "House of Cards", image: "/francis_underwood.jpg", trait: "Lethal pragmatism, strategic mastermind, and an absolute understanding of power dynamics and control." },
  { name: "Rustin Cohle", source: "True Detective", image: "/rustin_cohle.jpg", trait: "Deeply philosophical pessimist, brilliant investigator, and a mind that rejects comfort for raw truth." },
  { name: "Tyrion Lannister", source: "Game of Thrones", image: "/tyrion_lannister.webp", trait: "Intellectual survivalist who weaponizes wit, extensive reading, and strategic intuition to navigate a treacherous world." },
  { name: "The Batman", source: "Christian Bale / Dark Knight", image: "/christian_bale.webp", trait: "Peak physical and mental fortitude, using shadows and technology to bring order to chaos." },
];

const FAVORITE_QUOTES = [
  { text: "You either die a hero or you live long enough to see yourself become the villain.", source: "Harvey Dent // The Dark Knight" },
  { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", source: "Albert Camus // The Rebel" },
  { text: "I think human consciousness is a tragic misstep in evolution. We became too self-aware.", source: "Rustin Cohle // True Detective" },
];

const SOCIAL_LINKS = [
  { label: "LINKEDIN // ACCESS_CHANNEL", href: "https://www.linkedin.com/in/amine-mejjati" },
  { label: "GITHUB // COMPILE_REGISTER", href: "https://github.com/ObviousDumb" },
  { label: "INSTAGRAM // INTEL_FEED", href: "https://www.instagram.com/amine__mejjati/" },
  { label: "TIKTOK // SIGNAL_EMITTER", href: "https://www.tiktok.com/@the_batman2077?_r=1&_t=ZS-97UXy7cyuKw" },
  { label: "DISCORD // SECURE_COMMS", href: "obvious_dump" },
];

// Custom inline SVG icons for social deck
const SOCIAL_ICONS = {
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  GitHub: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  TikTok: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      <path d="M12 4v12a3 3 0 1 1-3-3" />
    </svg>
  ),
  Discord: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M18.8 4.2c-1.5-.7-3.1-1.2-4.8-1.4l-.2.5c-1.2-.2-2.4-.2-3.6 0l-.2-.5c-1.7.2-3.3.7-4.8 1.4-3 4.5-3.8 8.8-2.6 13 2 1.5 3.9 2.4 5.9 3l1.4-1.7c-.7-.2-1.3-.5-1.9-.9l.4-.3c2.9 1.3 6.1 1.3 9 0l.4.3c-.6.4-1.2.7-1.9.9l1.4 1.7c2-.6 3.9-1.5 5.9-3 1.2-4.2.4-8.5-2.6-13Z" />
    </svg>
  ),
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAiJustification, setShowAiJustification] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  useEffect(() => {
    // Log visit securely without spamming or triggering on localhost
    if (typeof window !== "undefined") {
      const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const hasTracked = sessionStorage.getItem("hasTrackedVisit");
      
      if (!isLocalhost && !hasTracked) {
        fetch("/api/visit", { method: "POST" })
          .then(() => sessionStorage.setItem("hasTrackedVisit", "true"))
          .catch((err) => console.error("Error logging visit:", err));
      }
    }
  }, []);

  return (
    <>
      {/* Cinematic Loading Boot sequence */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main content with entry transition */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen flex flex-col w-full overflow-hidden bg-black"
          >
            {/* Interactive backdrop layers */}
            <ParticleSkyline />
            <Spotlight />

            {/* Header / Digital Clock */}
            <header className="w-full py-6 px-6 max-w-2xl mx-auto flex justify-between items-center z-10 border-b border-cyan-500/10">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_6px_rgba(0,217,255,0.8)]" />
                <span className="font-mono text-[9px] tracking-widest text-cyan-400/35 uppercase">
                  HOST: WAYNE_NET_PRIMARY // SECURE_CONNECTED
                </span>
              </div>
              <div className="font-mono text-[9px] tracking-widest text-[#00D9FF]/70 drop-shadow-[0_0_4px_rgba(0,217,255,0.3)] font-bold">
                BATCAVE_NET // CRYPTO_STATUS: OMNI
              </div>
            </header>

            {/* Central Link Hub Container */}
            <main className="flex-1 w-full max-w-2xl mx-auto px-6 pt-8 pb-20 z-10 text-center flex flex-col items-center">
              
              {/* 3D Folded Dossier Card */}
              <DossierCard />

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap gap-2.5 justify-center items-center max-w-md mt-4 mb-8 font-mono text-[10px]">
                <div className="px-3 py-1 bg-[#00D9FF]/5 border border-[#00D9FF]/15 text-cyan-300/80 rounded-full hover:border-[#00D9FF]/50 hover:text-[#00D9FF] hover:shadow-[0_0_8px_rgba(0,217,255,0.25)] transition-all duration-300">
                  Wayne Enterprises R&D
                </div>
                <div className="px-3 py-1 bg-[#00D9FF]/5 border border-[#00D9FF]/15 text-cyan-300/80 rounded-full hover:border-[#00D9FF]/50 hover:text-[#00D9FF] hover:shadow-[0_0_8px_rgba(0,217,255,0.25)] transition-all duration-300">
                  INTP-T — The Logician
                </div>
                <div className="px-3 py-1 bg-[#00D9FF]/5 border border-[#00D9FF]/15 text-cyan-300/80 rounded-full hover:border-[#00D9FF]/50 hover:text-[#00D9FF] hover:shadow-[0_0_8px_rgba(0,217,255,0.25)] transition-all duration-300">
                  Berkane Base, MA
                </div>
              </div>

              {/* System Quote */}
              <blockquote className="max-w-md mb-12 font-serif text-sm sm:text-base italic text-white/90 tracking-wide leading-relaxed">
                "The road to power is paved with hypocrisy"
              </blockquote>

              {/* Centered Wide Link Deck */}
              <div className="w-full flex flex-col gap-3.5 mb-16">
                {SOCIAL_LINKS.map((link, idx) => {
                  let Icon = SOCIAL_ICONS.LinkedIn;
                  if (link.label.includes("GITHUB")) Icon = SOCIAL_ICONS.GitHub;
                  if (link.label.includes("INSTAGRAM")) Icon = SOCIAL_ICONS.Instagram;
                  if (link.label.includes("TIKTOK")) Icon = SOCIAL_ICONS.TikTok;
                  if (link.label.includes("DISCORD")) Icon = SOCIAL_ICONS.Discord;

                  const isDiscord = link.label.includes("DISCORD");

                  const handleDiscordClick = (e: React.MouseEvent) => {
                    if (isDiscord) {
                      e.preventDefault();
                      navigator.clipboard.writeText(link.href);
                      setCopiedDiscord(true);
                      setTimeout(() => setCopiedDiscord(false), 2500);
                    }
                  };

                  return (
                    <a
                      key={idx}
                      href={isDiscord ? "#" : link.href}
                      onClick={handleDiscordClick}
                      target={isDiscord ? undefined : "_blank"}
                      rel={isDiscord ? undefined : "noopener noreferrer"}
                      className="link-hub-btn group w-full px-6 py-4 rounded-lg flex items-center justify-between text-white/70 hover:text-white cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="h-4.5 w-4.5 text-cyan-400 group-hover:text-[#00D9FF] transition-colors duration-300" />
                        <span className="font-mono text-xs tracking-wider uppercase font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                          {isDiscord && copiedDiscord ? "COPIED DISCORD HANDLE" : link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-cyan-500/30 group-hover:text-[#00D9FF] transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>

              {/* Scroll / Explore anchor indicator */}
              <div className="flex flex-col items-center gap-3 w-full mb-12 select-none">
                <span className="font-mono text-[9px] text-cyan-400/40 uppercase tracking-[0.2em] drop-shadow-[0_0_3px_rgba(0,217,255,0.2)] font-bold">
                  DECRYPT DATABANKS BELOW
                </span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent" />
              </div>

              {/* BATCOMPUTER ACCORDION DATABANKS */}
              <div className="w-full text-left space-y-4">
                
                {/* 1. AI Perspective */}
                <AccordionSection category="AI Perspective // ChatGPT Description" title="Who am I to ChatGPT?">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* BoJack Horseman Avatar */}
                    <div className="h-16 w-16 shrink-0 rounded-full bg-black/60 border border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 grid-bg opacity-25" />
                      <img
                        src="/bojack.webp"
                        alt="BoJack Horseman"
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute bottom-0 inset-x-0 h-3.5 bg-cyan-500/10 border-t border-cyan-500/20 text-[5px] font-mono text-[#00D9FF]/70 text-center flex items-center justify-center uppercase z-10">
                        SYS_ID: BOJACK
                      </div>
                    </div>

                    <div className="grow space-y-4 text-left">
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                        "Telemetry indicates a profile reminiscent of BoJack Horseman: highly analytical, deeply introspective, yet carrying a cynical self-awareness. A turbulent thinker who dissects his own flaws with brutal honesty, hiding existential inquiry behind a shield of detachment."
                      </p>
                      
                      <button
                        onClick={() => setShowAiJustification(!showAiJustification)}
                        className="px-4 py-2 bg-black/80 border border-cyan-500/20 hover:border-cyan-400 text-[9px] font-mono text-cyan-400/70 hover:text-[#00D9FF] uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,217,255,0.15)]"
                      >
                        {showAiJustification ? "COLLAPSE CLASSIFIED" : "DECRYPT SYSTEM JUSTIFICATION"}
                      </button>

                      <AnimatePresence>
                        {showAiJustification && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-black/40 border border-cyan-500/15 p-4 rounded text-xs font-mono text-white/50 space-y-2 mt-2 leading-relaxed"
                          >
                            <div className="text-[10px] text-cyan-400 font-bold border-b border-cyan-500/15 pb-1 mb-2 uppercase">
                              &gt;&gt; BOJACK HORSEMAN CLASSIFICATION DATA
                            </div>
                            <p>
                              Subject displays distinct INTP-T parameters. Like Horseman, there is a constant friction between high cognitive insight and turbulent self-doubt. Deploys dry, cynical humor as cognitive armor, utilizing a razor-sharp mind to evaluate the absurdity of external systems while remaining solitary in the shadows.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </AccordionSection>

                {/* 2. Personality */}
                <AccordionSection category="Personality // Threat Index" title="INTP-T &mdash; The Logician Profile">
                  <div className="space-y-6">
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                      Logicians pride themselves on their unique perspective and vigorous intellect. They love to analyze logical systems, find patterns, and seek the underlying principles behind everything.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PERSONALITY_TRAITS.map((trait, idx) => (
                        <div key={idx} className="p-4 bg-[#050608]/85 border border-cyan-500/10 hover:border-cyan-500/30 rounded-lg flex flex-col justify-between hover:shadow-[0_0_10px_rgba(0,217,255,0.05)] transition-all duration-300">
                          <span className="font-mono text-[9px] text-cyan-400/80 font-bold uppercase tracking-wider mb-1">
                            {trait.name}
                          </span>
                          <span className="font-serif font-black text-base text-white tracking-wide mb-1">
                            {trait.value}
                          </span>
                          <span className="text-[10px] text-white/40 font-light">
                            {trait.sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionSection>

                {/* 3. Fiction */}
                <AccordionSection category="Fiction // Psychological Mirror" title="My Favorite Characters">
                  <div className="space-y-4">
                    {FICTIONAL_CHARACTERS.map((char, idx) => (
                      <div key={idx} className="p-4 bg-[#050608]/80 border border-cyan-500/10 hover:border-cyan-500/25 rounded-lg flex items-center gap-4 transition-all duration-300">
                        {char.image ? (
                          <div className="h-16 w-12 shrink-0 relative overflow-hidden rounded border border-cyan-500/20 bg-black/40 aspect-[3/4]">
                            <img
                              src={char.image}
                              alt={char.name}
                              className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 border border-cyan-500/10 pointer-events-none" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 shrink-0 flex items-center justify-center bg-cyan-500/5 border border-cyan-500/20 rounded text-cyan-400/70">
                            <ShieldCheck className="h-4 w-4" />
                          </div>
                        )}
                        <div className="text-left grow">
                          <div className="flex items-baseline gap-2">
                            <h4 className="font-serif font-bold text-sm text-white">{char.name}</h4>
                            <span className="font-mono text-[8px] text-cyan-400/50 uppercase tracking-widest">({char.source})</span>
                          </div>
                          <p className="text-xs text-white/50 leading-relaxed font-light mt-1">
                            {char.trait}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                {/* 4. Mindset */}
                <AccordionSection category="Mindset // Code of Conduct" title="My Favorite Quotes">
                  <div className="space-y-4">
                    {FAVORITE_QUOTES.map((quote, idx) => (
                      <div key={idx} className="p-4.5 bg-[#050608]/80 border border-cyan-500/10 rounded-lg border-l-2 border-l-cyan-400">
                        <p className="text-xs sm:text-sm text-white/80 italic font-serif leading-relaxed mb-2">
                          "{quote.text}"
                        </p>
                        <div className="font-mono text-[8px] text-cyan-400/40 uppercase tracking-widest text-right">
                          &mdash; {quote.source}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

              </div>
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
