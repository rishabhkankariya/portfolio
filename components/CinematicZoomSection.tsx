"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface CinematicZoomSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function CinematicZoomSection({
  children,
  id,
  className = "",
  isFirst = false,
  isLast = false,
}: CinematicZoomSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isFirst
      ? ["start start", "end start"]
      : isLast
      ? ["start end", "end end"]
      : ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Cinematic Zoom-In & Depth Scroll Transforms
  // Entrance: zooms in from 0.92 -> 1, opacity 0 -> 1
  // Exit: zooms out / pushes forward 1 -> 1.06, opacity 1 -> 0
  const scale = useTransform(
    smoothProgress,
    isFirst
      ? [0, 0.7, 1]
      : isLast
      ? [0, 0.35, 1]
      : [0, 0.2, 0.8, 1],
    isFirst
      ? [1, 1, 1.05]
      : isLast
      ? [0.93, 1, 1]
      : [0.93, 1, 1, 1.05]
  );

  const opacity = useTransform(
    smoothProgress,
    isFirst
      ? [0, 0.65, 1]
      : isLast
      ? [0, 0.25, 1]
      : [0, 0.2, 0.82, 1],
    isFirst
      ? [1, 1, 0]
      : isLast
      ? [0, 1, 1]
      : [0, 1, 1, 0]
  );

  const y = useTransform(
    smoothProgress,
    isFirst
      ? [0, 1]
      : isLast
      ? [0, 1]
      : [0, 0.2, 0.8, 1],
    isFirst
      ? ["0px", "-40px"]
      : isLast
      ? ["40px", "0px"]
      : ["50px", "0px", "0px", "-40px"]
  );

  return (
    <div ref={containerRef} id={id} className={`relative w-full ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          y,
          transformOrigin: "center center",
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
