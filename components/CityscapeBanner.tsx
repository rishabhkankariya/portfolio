"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CityscapeBanner() {
  return (
    <div className="w-full max-w-full my-6 select-none overflow-hidden rounded-[22px] border border-(--border-color) bg-(--card-background) shadow-sm">
      {/* Top Project Strip Header */}
      <div className="flex items-center justify-between py-2.5 px-4 text-xs sm:text-sm font-mono border-b border-(--border-color) bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <span className="text-amber-500 font-bold">01</span>
          <span className="font-bold text-(--text-color) tracking-wide">Cloud & DevOps Hub</span>
          <span className="text-(--text-muted) hidden sm:inline">— Scalable Architecture & CI/CD Pipelines</span>
        </div>
        <Link href="#projects" className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:underline transition-colors flex items-center gap-1 font-semibold">
          <span>Explore Projects</span>
          <span>↗</span>
        </Link>
      </div>

      {/* Panoramic City Skyline & Animated Walking Character */}
      <div className="relative w-full max-w-full h-32 sm:h-40 md:h-44 bg-(--bg-secondary)/40 overflow-hidden flex items-end">
        {/* Subtle architectural millimeter grid lines in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Ambient Warm Glow */}
        <div className="absolute top-4 left-1/4 w-20 h-20 rounded-full border border-amber-400/20 bg-amber-400/10 blur-md pointer-events-none" />

        {/* Cityscape Skyline SVG */}
        <svg
          className="w-[1400px] min-w-[1000px] h-full text-(--text-color) opacity-40 dark:opacity-30"
          viewBox="0 0 1200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Building 1 */}
          <rect x="20" y="50" width="70" height="110" stroke="currentColor" strokeWidth="1.2" />
          <line x1="35" y1="65" x2="55" y2="65" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="35" y1="85" x2="55" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="35" y1="105" x2="55" y2="105" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

          {/* Tree 1 */}
          <circle cx="110" cy="115" r="14" stroke="currentColor" strokeWidth="1" />
          <line x1="110" y1="129" x2="110" y2="160" stroke="currentColor" strokeWidth="1.2" />

          {/* Building 2 (Tall with antenna) */}
          <rect x="140" y="25" width="85" height="135" stroke="currentColor" strokeWidth="1.2" />
          <line x1="182" y1="5" x2="182" y2="25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="182" cy="5" r="2.5" fill="currentColor" />
          <rect x="155" y="45" width="16" height="18" stroke="currentColor" strokeWidth="0.8" />
          <rect x="185" y="45" width="16" height="18" stroke="currentColor" strokeWidth="0.8" />
          <rect x="155" y="75" width="16" height="18" stroke="currentColor" strokeWidth="0.8" />
          <rect x="185" y="75" width="16" height="18" stroke="currentColor" strokeWidth="0.8" />
          <rect x="155" y="105" width="16" height="18" stroke="currentColor" strokeWidth="0.8" />
          <rect x="185" y="105" width="16" height="18" stroke="currentColor" strokeWidth="0.8" />

          {/* Streetlamp 1 */}
          <line x1="245" y1="90" x2="245" y2="160" stroke="currentColor" strokeWidth="1" />
          <path d="M245 90 Q 252 82 258 90" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="258" cy="91" r="2" fill="#f59e0b" />

          {/* Building 3 (Modern glass house) */}
          <rect x="270" y="65" width="110" height="95" stroke="currentColor" strokeWidth="1.2" />
          <line x1="270" y1="95" x2="380" y2="95" stroke="currentColor" strokeWidth="0.8" />
          <line x1="270" y1="125" x2="380" y2="125" stroke="currentColor" strokeWidth="0.8" />
          <line x1="305" y1="65" x2="305" y2="160" stroke="currentColor" strokeWidth="0.8" />
          <line x1="345" y1="65" x2="345" y2="160" stroke="currentColor" strokeWidth="0.8" />

          {/* Cloud */}
          <path d="M420 40 Q 430 30 445 35 Q 460 30 470 42 Q 475 52 460 52 L 425 52 Q 415 50 420 40 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Building 4 */}
          <rect x="410" y="35" width="75" height="125" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="447" cy="60" r="12" stroke="currentColor" strokeWidth="1" />
          <line x1="447" y1="60" x2="447" y2="54" stroke="currentColor" strokeWidth="1" />
          <line x1="447" y1="60" x2="453" y2="60" stroke="currentColor" strokeWidth="1" />

          {/* Building 5 */}
          <rect x="545" y="70" width="130" height="90" stroke="currentColor" strokeWidth="1.2" />
          <rect x="575" y="45" width="70" height="25" stroke="currentColor" strokeWidth="1.2" />

          {/* Building 6 */}
          <rect x="750" y="30" width="90" height="130" stroke="currentColor" strokeWidth="1.2" />
          <line x1="770" y1="30" x2="770" y2="160" stroke="currentColor" strokeWidth="0.8" />
          <line x1="795" y1="30" x2="795" y2="160" stroke="currentColor" strokeWidth="0.8" />
          <line x1="820" y1="30" x2="820" y2="160" stroke="currentColor" strokeWidth="0.8" />

          {/* Streetlamp 2 & Bench */}
          <line x1="865" y1="95" x2="865" y2="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="865" cy="95" r="2.5" fill="#f59e0b" />
          <rect x="885" y="142" width="22" height="6" stroke="currentColor" strokeWidth="1" />

          {/* Building 7 */}
          <rect x="930" y="55" width="80" height="105" stroke="currentColor" strokeWidth="1.2" />
          <polygon points="930,55 970,30 1010,55" stroke="currentColor" strokeWidth="1.2" fill="none" />

          {/* Ground sidewalk line */}
          <line x1="0" y1="159" x2="1200" y2="159" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Animated Walking Character */}
        <motion.div
          animate={{ x: [-80, 1100] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1 z-10 flex flex-col items-center"
        >
          <svg width="22" height="38" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="5" fill="#f59e0b" />
            <rect x="4" y="13" width="5" height="10" rx="2" fill="#10b981" />
            <rect x="9" y="12" width="6" height="14" rx="2" fill="#0f172a" />
            <motion.line
              x1="10" y1="26" x2="7" y2="40"
              stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"
              animate={{ x2: [5, 12, 5], y2: [40, 38, 40] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="14" y1="26" x2="17" y2="40"
              stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"
              animate={{ x2: [18, 11, 18], y2: [38, 40, 38] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Sleek Minimalist Telemetry Strip */}
      <div className="w-full bg-slate-900 text-slate-100 px-4 py-2 flex items-center justify-between text-xs font-mono font-medium">
        <div className="flex items-center gap-3">
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="w-2 h-2 rounded-full bg-sky-400" />
          </span>
          <span className="tracking-wider text-slate-300">WORKSPACE // CLOUD ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="text-emerald-400 font-bold">LIVE TELEMETRY: ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
