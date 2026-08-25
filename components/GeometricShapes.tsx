"use client";

import React from "react";
import { motion } from "framer-motion";

export function SquiggleUnderline({ className = "", color = "#FBBF24" }: { className?: string; color?: string }) {
  return (
    <svg
      className={`w-full h-3 sm:h-4 overflow-visible ${className}`}
      viewBox="0 0 200 16"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8C20 2 30 14 48 8C66 2 76 14 94 8C112 2 122 14 140 8C158 2 168 14 186 8C194 5 198 8 198 8"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RotatingStar({
  size = 32,
  color = "#F472B6",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full drop-shadow-[2px_2px_0px_#1E293B]">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </motion.div>
  );
}

export function AsteriskBadge({
  text,
  color = "#FBBF24",
  textColor = "#1E293B",
  rotate = "-6deg",
  className = "",
}: {
  text: string;
  color?: string;
  textColor?: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border-2 border-[#1E293B] font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1E293B] ${className}`}
      style={{ backgroundColor: color, color: textColor, transform: `rotate(${rotate})` }}
    >
      <span>✦</span>
      <span>{text}</span>
    </div>
  );
}

export function DashedConnector({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-px border-t-2 border-dashed border-[#1E293B]/30 dark:border-white/20 ${className}`} />
  );
}
