"use client";

import React from "react";
import { motion } from "framer-motion";

interface KineticHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function KineticHeading({
  title,
  subtitle,
  badge,
  className = "",
}: KineticHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 sm:mb-10 ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-slate-900 dark:text-amber-300 border border-amber-500/30 text-xs font-mono font-bold mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed font-medium">
          {subtitle}
        </p>
      )}

      <div className="w-12 h-1 bg-amber-500 rounded-full mt-3.5 origin-left shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
    </motion.div>
  );
}
