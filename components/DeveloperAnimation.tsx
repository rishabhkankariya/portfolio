"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperAnimation() {
  return (
    <div className="relative w-full h-full min-h-[260px] flex items-center justify-center p-2 select-none">
      {/* Ambient Glow */}
      <div className="absolute w-48 h-48 rounded-full bg-amber-400/10 dark:bg-amber-400/15 blur-2xl pointer-events-none" />

      {/* Main Crisp Vector SVG */}
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full max-h-[320px] drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floating UI Code Card 1 (Top Left) */}
        <motion.g
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="50" y="30" width="110" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="65" cy="42" r="3.5" fill="#ef4444" />
          <circle cx="76" cy="42" r="3.5" fill="#f59e0b" />
          <circle cx="87" cy="42" r="3.5" fill="#10b981" />
          <rect x="62" y="54" width="60" height="4" rx="2" fill="#38bdf8" fillOpacity="0.7" />
          <rect x="62" y="63" width="80" height="4" rx="2" fill="#94a3b8" fillOpacity="0.5" />
          <rect x="62" y="72" width="45" height="4" rx="2" fill="#f59e0b" fillOpacity="0.7" />
          <rect x="62" y="81" width="70" height="4" rx="2" fill="#10b981" fillOpacity="0.7" />
        </motion.g>

        {/* Floating UI Code Card 2 (Top Center/Right) */}
        <motion.g
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="180" y="20" width="90" height="50" rx="8" fill="#0f172a" stroke="#f3b44a" strokeWidth="1.5" strokeOpacity="0.5" />
          <rect x="192" y="32" width="40" height="4" rx="2" fill="#f3b44a" />
          <rect x="192" y="42" width="65" height="4" rx="2" fill="#38bdf8" fillOpacity="0.6" />
          <rect x="192" y="52" width="50" height="4" rx="2" fill="#94a3b8" fillOpacity="0.4" />
        </motion.g>

        {/* Rotating Gear 1 */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ originX: "320px", originY: "55px" }}
        >
          <path
            d="M320 40 L322 45 L327 43 L328 48 L333 48 L332 53 L336 56 L333 60 L336 65 L331 66 L330 71 L325 69 L323 74 L319 71 L315 74 L314 69 L309 69 L310 64 L306 61 L309 56 L306 52 L311 51 L312 46 L317 48 Z"
            fill="#64748b"
            opacity="0.8"
          />
          <circle cx="320" cy="57" r="6" fill="#0f172a" />
        </motion.g>

        {/* Rotating Gear 2 (Smaller, counter-clockwise) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "348px", originY: "82px" }}
        >
          <circle cx="348" cy="82" r="10" stroke="#f3b44a" strokeWidth="2" strokeDasharray="4 2" opacity="0.9" />
          <circle cx="348" cy="82" r="3.5" fill="#f3b44a" />
        </motion.g>

        {/* Ergonomic Desk */}
        <rect x="60" y="225" width="280" height="12" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        {/* Desk Legs */}
        <line x1="85" y1="237" x2="85" y2="330" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <line x1="315" y1="237" x2="315" y2="330" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <line x1="70" y1="330" x2="100" y2="330" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <line x1="300" y1="330" x2="330" y2="330" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />

        {/* Server Tower (Right of Desk) */}
        <rect x="275" y="245" width="55" height="85" rx="5" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
        <rect x="282" y="255" width="41" height="4" rx="2" fill="#0f172a" />
        <rect x="282" y="265" width="41" height="4" rx="2" fill="#0f172a" />
        <rect x="282" y="275" width="41" height="4" rx="2" fill="#0f172a" />
        <motion.circle
          cx="287" cy="300" r="3"
          fill="#10b981"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.circle
          cx="297" cy="300" r="3"
          fill="#f3b44a"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        />

        {/* Secondary Monitor (Left) */}
        <rect x="90" y="150" width="70" height="55" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
        <rect x="95" y="155" width="60" height="45" rx="2" fill="#1e293b" />
        <line x1="100" y1="165" x2="135" y2="165" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="173" x2="145" y2="173" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="181" x2="125" y2="181" stroke="#f3b44a" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="189" x2="140" y2="189" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        {/* Monitor Stand */}
        <rect x="120" y="205" width="10" height="20" fill="#334155" />
        <ellipse cx="125" cy="225" rx="16" ry="3" fill="#1e293b" />

        {/* Office Chair */}
        <path d="M175 190 Q175 170 195 170 Q215 170 215 190 L215 260 L175 260 Z" fill="#334155" />
        <line x1="195" y1="260" x2="195" y2="310" stroke="#1e293b" strokeWidth="8" />
        <line x1="170" y1="310" x2="220" y2="310" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
        <circle cx="170" cy="315" r="3" fill="#0f172a" />
        <circle cx="195" cy="315" r="3" fill="#0f172a" />
        <circle cx="220" cy="315" r="3" fill="#0f172a" />

        {/* Developer Character */}
        {/* Legs & Pants */}
        <path d="M185 245 L180 300 L205 300 L215 245 Z" fill="#1e293b" />
        <path d="M205 245 L225 295 L245 295 L230 245 Z" fill="#0f172a" />
        {/* Shoes */}
        <ellipse cx="195" cy="303" rx="14" ry="5" fill="#f97316" />
        <ellipse cx="238" cy="298" rx="14" ry="5" fill="#f97316" />

        {/* Torso & Orange Sweatshirt */}
        <rect x="180" y="155" width="42" height="60" rx="8" fill="#f97316" />
        <line x1="180" y1="185" x2="222" y2="185" stroke="#ea580c" strokeWidth="2" />

        {/* Head, Face & Hair */}
        <circle cx="201" cy="130" r="15" fill="#fed7aa" />
        {/* Hair */}
        <path d="M188 126 C188 115 196 112 208 112 C216 112 218 118 217 125 C213 123 205 123 198 128 Z" fill="#1e293b" />
        <circle cx="196" cy="130" r="2" fill="#1e293b" />
        <path d="M192 136 Q 197 140 202 136" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Arms & Typing Hands on Laptop */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M185 170 L210 205 L235 205" stroke="#f97316" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="236" cy="205" r="5" fill="#fed7aa" />
        </motion.g>

        {/* Laptop on Desk */}
        <polygon points="215,225 265,225 260,205 220,205" fill="#334155" />
        <polygon points="220,205 260,205 255,175 225,175" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
        {/* Glowing Apple / Tech Logo */}
        <circle cx="240" cy="190" r="3" fill="#f3b44a" opacity="0.9" />
        {/* Laptop Screen Glow Beam */}
        <polygon points="225,175 255,175 265,215 215,215" fill="url(#screenGlow)" opacity="0.3" />

        {/* Potted Plant (Left) */}
        <rect x="55" y="270" width="22" height="28" rx="3" fill="#334155" />
        <motion.path
          d="M66 270 Q50 245 40 250 Q55 260 66 270 Z"
          fill="#10b981"
          animate={{ rotate: [-2, 3, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "66px", originY: "270px" }}
        />
        <motion.path
          d="M66 270 Q75 235 85 240 Q75 255 66 270 Z"
          fill="#22c55e"
          animate={{ rotate: [3, -2, 3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "66px", originY: "270px" }}
        />
        <motion.path
          d="M66 270 Q66 230 60 235 Q62 250 66 270 Z"
          fill="#4ade80"
          animate={{ rotate: [-1, 2, -1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "66px", originY: "270px" }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
