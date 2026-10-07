"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCloud,
  FaDocker,
  FaShieldAlt,
  FaBolt,
  FaServer,
  FaTerminal,
  FaCheckCircle,
} from "react-icons/fa";
import { SiKubernetes, SiAmazonwebservices, SiTerraform } from "react-icons/si";

interface LoaderProps {
  children: React.ReactNode;
}

const SYSTEM_LOGS = [
  { threshold: 0, text: ">> [01/04] Initializing Cloud Architecture & Nodes..." },
  { threshold: 28, text: ">> [02/04] Booting Containerized Services & K8s Mesh..." },
  { threshold: 62, text: ">> [03/04] Syncing Telemetry & Interactive Visuals..." },
  { threshold: 90, text: ">> [04/04] All Systems Operational. Launching Experience..." },
];

export default function Loader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeLog, setActiveLog] = useState(SYSTEM_LOGS[0].text);

  // Smooth realistic progress sequence
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2100; // 2.1s premium cinematic duration

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);

      // Nonlinear easing curve for satisfying acceleration & finish
      const eased = Math.round(
        rawProgress < 50
          ? Math.pow(rawProgress / 50, 1.3) * 50
          : 50 + Math.pow((rawProgress - 50) / 50, 0.8) * 50
      );

      const val = Math.min(eased, 100);
      setProgress(val);

      // Update system logs according to thresholds
      for (let i = SYSTEM_LOGS.length - 1; i >= 0; i--) {
        if (val >= SYSTEM_LOGS[i].threshold) {
          setActiveLog(SYSTEM_LOGS[i].text);
          break;
        }
      }

      if (val >= 100) {
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  // Exit trigger when progress hits 100
  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 420);
      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  // Keyboard shortcut (Escape) to bypass loader immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLoading(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nameLetters = "RISHABH KANKARIYA".split("");

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader-curtain"
            initial={{ y: "0%" }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1], // Cinematic page-lift curtain curve
              },
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFDF5] text-[#1E293B] overflow-hidden select-none"
          >
            {/* Background Texture: Dot Grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-70 pointer-events-none" />

            {/* Radiant Ambient Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/20 via-[#F472B6]/15 to-[#FBBF24]/20 blur-3xl pointer-events-none" />

            {/* Corner HUD Telemetry Markers */}
            <div className="absolute top-6 left-6 hidden sm:flex flex-col gap-1 text-[11px] font-mono text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                <span className="font-bold text-[#1E293B]">SYS.CORE // V2.6</span>
              </div>
              <span className="text-[10px] text-[#94A3B8]">HOST: KANKARIYA.PAGES.DEV</span>
            </div>

            <div className="absolute top-6 right-6 hidden sm:flex flex-col items-end gap-1 text-[11px] font-mono text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1E293B]">REGION: AP-SOUTH-1</span>
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              </div>
              <span className="text-[10px] text-[#94A3B8]">LATENCY: 12ms · SECURE TLS</span>
            </div>

            <div className="absolute bottom-8 left-6 hidden sm:flex items-center gap-3 text-[11px] font-mono text-[#64748B]">
              <span className="px-2 py-0.5 rounded bg-white border border-[#1E293B]/20 text-[#1E293B] font-bold">
                PROD
              </span>
              <span>KUBERNETES CLUSTER ACTIVE</span>
            </div>

            <button
              onClick={() => setLoading(false)}
              className="absolute bottom-8 right-6 z-20 text-[10px] font-mono font-bold text-[#64748B] hover:text-[#1E293B] bg-white hover:bg-[#FBBF24] border border-[#1E293B] px-2.5 py-1 rounded shadow-[2px_2px_0px_#1E293B] transition-all cursor-pointer"
            >
              SKIP INTRO [ESC]
            </button>

            {/* Bottom Multi-Layered Neo-Brutalist Border Strips */}
            <div className="absolute bottom-0 inset-x-0 h-3 bg-[#FBBF24] border-t-2 border-[#1E293B]" />
            <div className="absolute bottom-3 inset-x-0 h-2 bg-[#8B5CF6]" />
            <div className="absolute bottom-5 inset-x-0 h-1.5 bg-[#F472B6]" />

            {/* Floating Background Sparkles & Geometric Decorators */}
            <motion.div
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ rotate: { repeat: Infinity, duration: 16, ease: "linear" }, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
              className="absolute top-[18%] left-[12%] hidden lg:block text-[#FBBF24] opacity-80"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ rotate: -360, y: [0, 10, 0] }}
              transition={{ rotate: { repeat: Infinity, duration: 18, ease: "linear" }, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
              className="absolute bottom-[22%] right-[14%] hidden lg:block text-[#F472B6] opacity-80"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </motion.div>

            {/* Central Animated Content — The Main Point of Attraction */}
            <motion.div
              exit={{
                y: -60,
                opacity: 0,
                transition: { duration: 0.35, ease: "easeIn" },
              }}
              className="flex flex-col items-center justify-center z-10 px-4 max-w-xl w-full"
            >
              {/* ═══ 1. HIGH-TECH HOLOGRAPHIC ORBITAL CORE ═══ */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-5 flex items-center justify-center">
                {/* Outer Radar Pulse Aura */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.7, 0.35] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#8B5CF6]/50 bg-[#8B5CF6]/5"
                />

                {/* Outer Gyro Ring with Tech Cardinal Crosshairs */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#1E293B]/20 flex items-center justify-center"
                >
                  {/* Rotating Cardinal Dots */}
                  <span className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#8B5CF6] border border-[#1E293B] shadow-[1px_1px_0px_#1E293B]" />
                  <span className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-[#FBBF24] border border-[#1E293B] shadow-[1px_1px_0px_#1E293B]" />
                  <span className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-[#34D399] border border-[#1E293B] shadow-[1px_1px_0px_#1E293B]" />
                  <span className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-[#F472B6] border border-[#1E293B] shadow-[1px_1px_0px_#1E293B]" />
                </motion.div>

                {/* Counter-Clockwise Dotted Orbital Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-dotted border-[#F472B6]/80"
                />

                {/* Clockwise Segmented Arc Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border-3 border-transparent border-t-[#38BDF8] border-r-[#FBBF24]"
                />

                {/* Floating Orbiting Satellite Badges */}
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 sm:-top-2 sm:right-2 z-20 flex items-center gap-1 bg-white border-2 border-[#1E293B] px-2 py-0.5 rounded-md shadow-[3px_3px_0px_#1E293B] text-[10px] font-mono font-bold text-[#8B5CF6]"
                >
                  <SiKubernetes className="text-[#326ce5] text-xs" />
                  <span>K8s</span>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4], rotate: [2, -2, 2] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.4 }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-1 sm:left-1 z-20 flex items-center gap-1 bg-[#FBBF24] border-2 border-[#1E293B] px-2 py-0.5 rounded-md shadow-[3px_3px_0px_#1E293B] text-[10px] font-mono font-black text-[#1E293B]"
                >
                  <FaCloud className="text-[#1E293B] text-xs" />
                  <span>CLOUD</span>
                </motion.div>

                {/* Dynamic Audio / Telemetry Equalizer Ring Bars */}
                <div className="absolute flex items-center justify-center gap-1 pointer-events-none">
                  {[16, 26, 38, 20, 32, 22, 14].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [h * 0.4, h, h * 0.3],
                        backgroundColor: i % 2 === 0 ? ["#8B5CF6", "#F472B6", "#8B5CF6"] : ["#FBBF24", "#34D399", "#FBBF24"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.9 + i * 0.12,
                        ease: "easeInOut",
                      }}
                      className="w-1 rounded-full opacity-60"
                      style={{ height: h }}
                    />
                  ))}
                </div>

                {/* Central Multi-Faceted Kinetic Core */}
                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    rotate: [0, 90, 180, 270, 360],
                    boxShadow: [
                      "4px 4px 0px #1E293B, 0 0 20px rgba(139,92,246,0.5)",
                      "4px 4px 0px #1E293B, 0 0 35px rgba(244,114,182,0.7)",
                      "4px 4px 0px #1E293B, 0 0 20px rgba(139,92,246,0.5)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.2,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] via-[#F472B6] to-[#FBBF24] border-2 border-[#1E293B] flex items-center justify-center text-white"
                >
                  <FaBolt className="text-xl sm:text-2xl text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]" />
                </motion.div>
              </div>

              {/* ═══ 2. IDENTITY & ROLE HIGHLIGHT ═══ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#1E293B] shadow-[3px_3px_0px_#1E293B] mb-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-[#1E293B]">
                  CLOUD & DEVOPS ARCHITECT
                </span>
              </motion.div>

              {/* Bold Neo-Brutalist Name Display */}
              <div className="flex flex-wrap justify-center gap-[2px] sm:gap-[4px] mt-1 mb-3">
                {nameLetters.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + idx * 0.025,
                      duration: 0.35,
                      ease: [0.34, 1.56, 0.64, 1], // Spring bounce
                    }}
                    className={`text-xl sm:text-3xl font-black tracking-wider font-heading uppercase ${
                      letter === " " ? "w-2 sm:w-3" : "text-[#1E293B] drop-shadow-[2px_2px_0px_#FBBF24]"
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* ═══ 3. TACTILE PROGRESS HUD & METRICS ═══ */}
              <div className="w-full max-w-md mt-2 flex flex-col items-center">
                {/* Large Percentage & Speed Indicator */}
                <div className="w-full flex justify-between items-end mb-2 px-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#64748B]">
                    <FaTerminal className="text-[#8B5CF6] text-xs" />
                    <span className="text-[#8B5CF6] font-black">BOOTING SYSTEM</span>
                  </div>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight">
                      {progress.toString().padStart(3, "0")}
                    </span>
                    <span className="text-xs font-bold text-[#8B5CF6]">%</span>
                  </div>
                </div>

                {/* Tactile High-Definition Progress Bar with Diagonal Striping */}
                <div className="w-full h-5 sm:h-6 rounded-full bg-white border-2 border-[#1E293B] p-0.5 overflow-hidden shadow-[4px_4px_0px_#1E293B] relative">
                  {/* Background Track Grid Dots */}
                  <div className="absolute inset-0 bg-dot-grid opacity-30" />

                  {/* Gradient Progress Fill */}
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#F472B6] via-[#38BDF8] to-[#FBBF24] relative overflow-hidden transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Animated Light Shimmer Beam running across progress */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    />
                  </motion.div>
                </div>

                {/* Realtime Cycling Telemetry Terminal Line */}
                <div className="w-full mt-3 px-3 py-1.5 rounded-lg bg-white/80 border border-[#1E293B]/20 flex items-center justify-between text-[11px] font-mono text-[#475569] shadow-[2px_2px_0px_rgba(30,41,59,0.08)]">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping shrink-0" />
                    <span className="truncate text-[#1E293B] font-semibold">{activeLog}</span>
                  </div>
                  <span className="shrink-0 text-[10px] text-[#94A3B8] ml-2 hidden sm:inline">
                    {progress < 100 ? "COMPUTING..." : "READY"}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content revealed under the lifting curtain */}
      {children}
    </>
  );
}
