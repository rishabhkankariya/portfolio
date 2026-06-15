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
        const diff = Math.random() > 0.4 ? 3 : 2;
        return Math.min(prev + diff, 100);
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 400);
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
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08070e] text-white overflow-hidden"
        >
          {/* Scanlines Background Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none" />

          {/* Futuristic Concentric Orbits Loader */}
          <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
            {/* Center Core dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-4 h-4 rounded-full bg-(--primary-color) shadow-[0_0_15px_var(--primary-color)]"
            />
            
            {/* Inner Ring (Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute w-16 h-16 rounded-full border-2 border-dashed border-(--primary-color) opacity-60"
            />

            {/* Middle Ring (Counter-Clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute w-24 h-24 rounded-full border border-dotted border-(--accent-pink) opacity-40"
            />

            {/* Outer Glow Ring (Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border border-solid border-purple-500/20 border-t-purple-500/80 shadow-[0_0_20px_rgba(121,40,202,0.1)]"
            />
          </div>

          {/* Staggered Name Reveal */}
          <div className="flex gap-[2px] mt-2">
            {nameLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.04,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={`text-xl sm:text-2xl font-bold tracking-widest font-mono ${
                  letter === " " ? "w-3" : "text-(--primary-color)"
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-3 text-xs tracking-[0.2em] uppercase font-mono opacity-60 text-gray-400"
          >
            Cloud & DevOps Explorer
          </motion.p>

          {/* Progress Bar Container */}
          <div className="mt-12 w-48 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-(--primary-color) to-(--accent-pink) transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percentage Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="mt-2 text-xs font-mono tracking-widest text-gray-500"
          >
            {progress}%
          </motion.span>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full min-h-screen"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
