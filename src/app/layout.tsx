import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amine Mejjati | Concepteur Full-Stack Developer",
  description: "Private Headquarters of Amine Mejjati. Concepteur Full-Stack Developer & Systems Architect based in Berkane, Morocco. Silence builds empires.",
  keywords: ["Amine Mejjati", "Full-Stack Developer", "Concepteur", "Software Architect", "Berkane", "Morocco", "Next.js 15", "Premium Portfolio"],
  authors: [{ name: "Amine Mejjati" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-transparent text-[#EDEDED] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-[#00D9FF]">
        {children}
      </body>
    </html>
  );
}
