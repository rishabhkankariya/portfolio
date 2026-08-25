"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  direction?: "left" | "right";
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 24,
  duration = 25,
  direction = "left",
  className = "",
}: InfiniteSliderProps) {
  return (
    <div className={`overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
        className="flex w-max items-center"
        style={{ gap: `${gap}px` }}
      >
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
