"use client";

import React from "react";
import { motion } from "framer-motion";

export function HaikeiMeshGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
      {/* Top Right Organic Blob */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent blur-[120px]"
      />

      {/* Middle Left Teal/Emerald Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-[#C0EB3A]/10 to-transparent blur-[140px]"
      />

      {/* Bottom Center Sky/Cyan Blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-sky-500/15 via-indigo-500/10 to-transparent blur-[140px]"
      />
    </div>
  );
}

export function HaikeiWaveDivider({ flipped = false }: { flipped?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none opacity-25 dark:opacity-15 my-4 ${flipped ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 sm:h-12 text-(--text-color)"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
