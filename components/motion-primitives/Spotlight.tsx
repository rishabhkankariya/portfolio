"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
  fill?: string;
}

export function Spotlight({
  children,
  className = "",
  size = 350,
  color = "rgba(243, 180, 74, 0.15)",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  // Unconditional top-level hook call strictly following Rules of Hooks
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 80%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
        style={{
          background,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}
