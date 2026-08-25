"use client";

import { motion } from "framer-motion";

export default function OrbitsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Millimeter Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,20,14,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,20,14,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Subtle Warm Top Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Rotating Architectural Orbit Rings */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        className="absolute w-[180vw] h-[180vw] -top-[40vw] -left-[40vw] lg:w-[130vw] lg:h-[130vw] opacity-40 dark:opacity-30 origin-center"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="500" r="200" stroke="rgba(243, 180, 74, 0.12)" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="500" cy="500" r="380" stroke="rgba(0, 92, 46, 0.1)" strokeWidth="1" />
        <circle cx="500" cy="500" r="560" stroke="rgba(243, 180, 74, 0.08)" strokeWidth="1.2" strokeDasharray="12 6" />
        <circle cx="500" cy="500" r="740" stroke="rgba(0, 92, 46, 0.06)" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}
