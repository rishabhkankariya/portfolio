"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax layer transformations
  const yBg = useTransform(smoothProgress, [0, 1], ["-18%", "18%"]);
  const scaleBg = useTransform(smoothProgress, [0, 0.5, 1], [1.15, 1, 1.15]);
  const yCard1 = useTransform(smoothProgress, [0, 1], ["60px", "-60px"]);
  const yCard2 = useTransform(smoothProgress, [0, 1], ["100px", "-100px"]);
  const textY = useTransform(smoothProgress, [0, 1], ["30px", "-30px"]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[120vh] sm:min-h-[140vh] flex items-center justify-center overflow-hidden bg-[#070913] text-white py-24 sm:py-36 selection:bg-amber-400 selection:text-black font-sans"
    >
      {/* Background Parallax Image with Deep Gradient Overlays */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560&auto=format&fit=crop"
          alt="Architectural Fluid Waves"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 brightness-[0.75] contrast-[1.1]"
        />
        {/* Layered Vignette & Ambient Mesh Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070913] via-transparent to-[#070913]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070913_90%)]" />
      </motion.div>

      {/* Decorative Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Central Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-mono tracking-wider uppercase mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#f59e0b]" />
          <span>Interactive Scroll Parallax</span>
        </motion.div>

        {/* Big Editorial Headline */}
        <motion.div style={{ y: textY, opacity }} className="max-w-4xl space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] text-white">
            Designed for <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-emerald-400 bg-clip-text text-transparent">motion</span>, engineered for depth.
          </h2>
          <p className="text-base sm:text-xl text-slate-300/90 font-normal max-w-2xl mx-auto leading-relaxed">
            Multi-layered fluid parallax physics that responds organically to the user's scroll speed and direction.
          </p>
        </motion.div>

        {/* Floating Multi-Layer Parallax Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-16 sm:mt-24 items-center">
          {/* Card 1: Left Floating Perspective */}
          <motion.div
            style={{ y: yCard1 }}
            className="group relative rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="relative h-72 sm:h-96 w-full rounded-[22px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Architecture Interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">Architectural Perspective</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">Spatial Geometry</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  ↗
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Right Floating Perspective */}
          <motion.div
            style={{ y: yCard2 }}
            className="group relative rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:mt-12"
          >
            <div className="relative h-72 sm:h-96 w-full rounded-[22px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
                alt="Minimalist Tech Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">Atmospheric Lighting</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">Luminous Depth</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  ↗
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
