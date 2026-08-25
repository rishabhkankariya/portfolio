"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  children: React.ReactNode;
}

export default function Loader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.random() > 0.4 ? 4 : 2;
        return Math.min(prev + diff, 100);
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const nameLetters = "RISHABH KANKARIYA".split("");

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, y: -20 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFDF5] text-[#1E293B] overflow-hidden"
        >
          {/* Strict Dot Grid Texture */}
          <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

          {/* Playful Geometric Concentric Loader */}
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            {/* Center Core dot */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 180, 270, 360] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-8 h-8 rounded-xl bg-[#8B5CF6] border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]"
            />

            {/* Inner Ring (Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute w-16 h-16 rounded-full border-3 border-dashed border-[#FBBF24]"
            />

            {/* Middle Ring (Counter-Clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-24 h-24 rounded-full border-2 border-dotted border-[#F472B6]"
            />

            {/* Outer Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border-2 border-solid border-[#34D399]/40 border-t-[#34D399]"
            />
          </div>

          {/* Staggered Name Reveal */}
          <div className="flex gap-[3px] mt-2">
            {nameLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.03,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className={`text-xl sm:text-2xl font-black tracking-widest font-mono ${
                  letter === " " ? "w-3" : "text-[#1E293B]"
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tactile Hard Shadow Progress Bar */}
          <div className="w-56 sm:w-72 mt-6">
            <div className="w-full h-4 rounded-full bg-white border-2 border-[#1E293B] p-0.5 overflow-hidden shadow-[3px_3px_0px_0px_#1E293B]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#F472B6] to-[#FBBF24] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono font-black text-[#64748B] mt-2 uppercase tracking-wider">
              <span>INITIALIZING SYSTEM</span>
              <span className="text-[#8B5CF6]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}
