"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Parallax layers for smooth floating geometric shapes
  const shape1Y = useTransform(smoothScroll, [0, 1], ["0px", "400px"]);
  const shape2Y = useTransform(smoothScroll, [0, 1], ["0px", "-450px"]);
  const shape3Y = useTransform(smoothScroll, [0, 1], ["0px", "280px"]);
  const rotate1 = useTransform(smoothScroll, [0, 1], [0, 90]);
  const rotate2 = useTransform(smoothScroll, [0, 1], [0, -90]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden select-none">
      {/* 1. Strict Dot Grid Formation Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 dark:opacity-20" />

      {/* 2. Top-Right Soft Yellow Sun Circle (Clean, No Dark Border) */}
      <motion.div
        style={{ y: shape1Y, rotate: rotate1 }}
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#FDE68A]/60 dark:bg-[#FBBF24]/10"
      />

      {/* 3. Mid-Left Violet Arch Pill (Clean, No Dark Border) */}
      <motion.div
        style={{ y: shape2Y, rotate: rotate2 }}
        className="absolute top-[35%] -left-16 w-60 h-60 rounded-tr-full rounded-br-full bg-[#DDD6FE]/60 dark:bg-[#8B5CF6]/10"
      />

      {/* 4. Bottom-Right Mint Diamond (Clean, No Dark Border) */}
      <motion.div
        style={{ y: shape3Y }}
        className="absolute bottom-24 right-[10%] w-36 h-36 rotate-45 bg-[#A7F3D0]/60 dark:bg-[#34D399]/10 rounded-3xl"
      />

      {/* 5. Mid-Right Pink Soft Pill */}
      <motion.div
        style={{ y: shape1Y }}
        className="absolute top-[65%] -right-10 w-44 h-72 rounded-full bg-[#FBCFE8]/50 dark:bg-[#F472B6]/10 rotate-12"
      />

      {/* 6. Floating Memphis SVG Squiggles & Asterisks */}
      <div className="absolute top-[18%] left-[7%] opacity-60 dark:opacity-30">
        <svg width="56" height="22" viewBox="0 0 60 24" fill="none">
          <path
            d="M2 12C7 4 13 4 18 12C23 20 29 20 34 12C39 4 45 4 50 12C55 20 58 20 58 12"
            stroke="#F472B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute top-[55%] right-[6%] opacity-60 dark:opacity-30">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <path d="M20 0V40M0 20H40M6 6L34 34M6 34L34 6" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute top-[80%] left-[8%] opacity-60 dark:opacity-30">
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
          <path
            d="M2 10C6 2 12 2 16 10C20 18 26 18 30 10C34 2 40 2 44 10C48 18 50 18 50 10"
            stroke="#8B5CF6"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
