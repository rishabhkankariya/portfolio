"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { SquiggleUnderline, RotatingStar } from "../GeometricShapes";

export default function Scene02Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  const opacity = useTransform(smoothProgress, [0.1, 0.45, 0.85], [0.4, 1, 0.4]);
  const scale = useTransform(smoothProgress, [0.1, 0.5, 0.9], [0.95, 1.02, 0.95]);
  const y = useTransform(smoothProgress, [0.1, 0.9], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="cinematic-scene min-h-[85vh] flex flex-col justify-center items-center text-center relative overflow-hidden my-8"
    >
      {/* Decorative Rotating Geometric Star */}
      <div className="absolute top-12 left-1/4 hidden sm:block pointer-events-none opacity-80">
        <RotatingStar size={36} color="#8B5CF6" />
      </div>
      <div className="absolute bottom-12 right-1/4 hidden sm:block pointer-events-none opacity-80">
        <RotatingStar size={32} color="#FBBF24" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div style={{ opacity, scale, y }} className="flex flex-col items-center gap-6">
          {/* Statement Sticker Badge */}
          <div className="sticker-badge bg-[#F472B6] text-white">
            <FaCode size={13} />
            <span>CODE IS A DESIGN MATERIAL</span>
          </div>

          {/* Statement Headline with Playful Highlights */}
          <h2 className="statement-headline text-[#1E293B] dark:text-white uppercase max-w-4xl font-black tracking-tight">
            Cloud systems should be <br />
            <span className="inline-block px-3 py-0.5 my-1 bg-[#8B5CF6] text-white rounded-xl border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] rotate-[-1.5deg]">
              invisible,
            </span>{" "}
            <span className="inline-block px-3 py-0.5 my-1 bg-[#FBBF24] text-[#1E293B] rounded-xl border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] rotate-[1.5deg]">
              automated,
            </span>{" "}
            <br />
            and{" "}
            <span className="relative inline-block text-[#34D399] dark:text-[#4ADE80]">
              unbreakable.
              <div className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 w-full">
                <SquiggleUnderline color="#F472B6" />
              </div>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B]/80 dark:text-[#94A3B8] max-w-2xl font-medium leading-relaxed mt-2">
            Every architecture is an engineering commitment to zero-downtime, continuous feedback loops, and infrastructure defined purely as code.
          </p>

          {/* Memphis Decorative Separator */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-12 h-1 bg-[#1E293B] dark:bg-white rounded-full" />
            <div className="w-3 h-3 rounded-full bg-[#F472B6] border-2 border-[#1E293B] dark:border-white" />
            <div className="w-3 h-3 rotate-45 bg-[#FBBF24] border-2 border-[#1E293B] dark:border-white" />
            <div className="w-3 h-3 rounded-full bg-[#34D399] border-2 border-[#1E293B] dark:border-white" />
            <div className="w-12 h-1 bg-[#1E293B] dark:bg-white rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
