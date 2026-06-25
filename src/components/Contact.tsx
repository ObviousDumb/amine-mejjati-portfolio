"use client";

import React, { useState } from "react";
import { Send, Shield, Terminal, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "handshake" | "success" | "error">("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const executeHandshake = async () => {
    setStatus("handshake");
    setConsoleLogs([]);

    const logs = [
      "INITIALIZING SECURE LINK ON PORT 443...",
      "EXCHANGING SECURE CRYPTO HANDSHAKE PACKETS...",
      "CIPHER: ECDHE-RSA-AES256-GCM-SHA384 DETECTED.",
      "ENCRYPTING PAYLOAD PACKETS WITH AES-GCM-256...",
      "DISPATCHING DATA TO ENDPOINT: MA.BERKANE.AMINE...",
      "TRANSMISSION COMPLETE. SECURE CONNECTION CLOSED.",
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setConsoleLogs((prev) => [...prev, logs[i]]);
    }

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Required: Name, Email and Message.");
      return;
    }
    executeHandshake();
  };

  return (
    <div className="space-y-6">
      
      {/* System info header */}
      <div className="flex flex-wrap gap-4 font-mono text-[9px] text-white/40 pb-4 border-b border-white/5">
        <div>
          <span className="text-sky-400">EMAIL:</span>{" "}
          <span className="text-white/80">amine.mejjati@gmail.com</span>
        </div>
        <div>
          <span className="text-sky-400">COORDS:</span>{" "}
          <span className="text-white/80">BERKANE // 34.92° N, 2.32° W</span>
        </div>
      </div>

      <div className="w-full relative p-5 border border-white/5 rounded-lg bg-black/45 min-h-[360px] flex flex-col justify-between">
        
        {/* Form Input fields */}
        {status === "idle" && (
          <form onSubmit={handleSubmit} className="space-y-5 text-left grow flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-2 px-1 font-mono text-[11px] text-white/95 placeholder-white/25 focus:outline-none focus:border-sky-500 transition-all duration-300"
                  placeholder="NAME / ALIAS"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-sky-500 transition-all duration-300 group-focus-within:w-full" />
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-2 px-1 font-mono text-[11px] text-white/95 placeholder-white/25 focus:outline-none focus:border-sky-500 transition-all duration-300"
                  placeholder="SECURE_EMAIL_ADDRESS"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-sky-500 transition-all duration-300 group-focus-within:w-full" />
              </div>
            </div>

            {/* Subject */}
            <div className="relative group">
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white/10 py-2 px-1 font-mono text-[11px] text-white/95 placeholder-white/25 focus:outline-none focus:border-sky-500 transition-all duration-300"
                placeholder="MESSAGE_OBJECTIVE"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-sky-500 transition-all duration-300 group-focus-within:w-full" />
            </div>

            {/* Message */}
            <div className="relative group grow mt-2">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-2 px-1 font-mono text-[11px] text-white/95 placeholder-white/25 focus:outline-none focus:border-sky-500 transition-all duration-300 resize-none min-h-[100px]"
                placeholder="ENTER PAYLOAD BODY..."
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-sky-500 transition-all duration-300 group-focus-within:w-full" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-transparent border border-sky-500/30 hover:border-sky-500 bg-sky-500/5 hover:bg-sky-500 text-white/70 hover:text-black font-mono text-[10px] font-bold tracking-[0.2em] rounded uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              DISPATCH TRANSMISSION
              <Send className="h-3 w-3" />
            </button>
          </form>
        )}

        {/* Handshake Console log UI */}
        {status === "handshake" && (
          <div className="grow flex flex-col justify-between text-left font-mono text-[11px] select-none">
            <div>
              <div className="flex items-center gap-2 text-sky-400 uppercase tracking-widest text-[9px] font-bold mb-3">
                <Terminal className="h-3.5 w-3.5 animate-pulse" />
                ENCRYPTING DATAGRAM PACKETS...
              </div>
              <div className="bg-black/60 border border-white/5 rounded p-4 space-y-1.5 h-56 overflow-y-auto">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="text-white/80 text-[10px] leading-relaxed">
                    <span className="text-sky-400/50 mr-1.5">&gt;&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-sky-500 animate-pulse-slow w-[80%]" />
            </div>
          </div>
        )}

        {/* Success Screen UI */}
        {status === "success" && (
          <div className="grow flex flex-col items-center justify-center text-center font-mono py-8 select-none">
            <CheckCircle2 className="h-12 w-12 text-sky-400 mb-4 animate-bounce" />
            <h3 className="text-sm text-white font-bold tracking-wider mb-2">
              TRANSMISSION SUCCESS
            </h3>
            <p className="text-[10px] text-white/40 max-w-xs leading-relaxed mb-6">
              Datagram payload verified, encrypted, and dispatched to Berkane. The systems architect will decrypt and respond shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-5 py-1.5 border border-white/10 hover:border-sky-500/30 text-white/50 hover:text-sky-400 text-[9px] tracking-widest uppercase transition-all duration-300"
            >
              RESET CONNECTION
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
