"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaCloud, FaTerminal, FaCode, FaCheckCircle, FaUpload } from "react-icons/fa";

interface HeroShowcaseCardProps {
  imageSrc?: string;
  imageAlt?: string;
  badgeLeft?: string;
  badgeRight?: string;
}

export default function Interactive3DFusionCore({
  imageSrc,
  imageAlt = "DevOps & Cloud Architecture Showcase",
  badgeLeft = "SYSTEM ARCHITECTURE",
  badgeRight = "AWS & K8S",
}: HeroShowcaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for 3D sticker card gyro effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/4.2] flex items-center justify-center perspective-[1200px] select-none mx-auto"
    >
      {/* Main Sticker Card Shell with 3D Spatial Transform */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-[32px] border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] p-6 sm:p-7 flex flex-col justify-between shadow-[8px_8px_0px_0px_#1E293B] dark:shadow-[8px_8px_0px_0px_#F8FAFC] group overflow-hidden transition-all duration-300"
      >
        {/* 1. Header Badges */}
        <div className="flex items-center justify-between z-20 gap-2">
          <span className="sticker-badge bg-[#FBBF24] text-[#1E293B] text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#1E293B] animate-pulse" />
            <span>{badgeLeft}</span>
          </span>

          <span className="sticker-badge bg-[#38BDF8] text-[#1E293B] text-[11px]">
            <FaCloud size={12} />
            <span>{badgeRight}</span>
          </span>
        </div>

        {/* 2. Center Image Showcase / Dropzone Frame */}
        <div
          className="relative w-full h-[62%] rounded-2xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white/30 p-4 flex flex-col items-center justify-center my-auto overflow-hidden shadow-[inset_0_2px_8px_rgba(30,41,59,0.06)] bg-dot-grid"
          style={{ transform: "translateZ(25px)" }}
        >
          {imageSrc ? (
            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/15 border-2 border-dashed border-[#8B5CF6] flex items-center justify-center text-[#8B5CF6] mb-3 shadow-[3px_3px_0px_0px_#8B5CF6]">
                <FaUpload size={22} className="animate-bounce" />
              </div>
              <span className="text-sm font-black text-[#1E293B] dark:text-white uppercase tracking-wider block">
                Ready for New Asset
              </span>
              <p className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8] mt-1 max-w-[200px]">
                Drop or share your image to replace this frame
              </p>
            </div>
          )}
        </div>

        {/* 3. Bottom Tactile Telemetry HUD Tiles */}
        <div
          className="grid grid-cols-2 gap-3 z-20 pt-2 border-t-2 border-dashed border-[#1E293B]/20 dark:border-white/10"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Status Tile */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
            <div className="w-7 h-7 rounded-lg bg-[#34D399] border border-[#1E293B] flex items-center justify-center text-[#1E293B] text-xs font-black shadow-2xs">
              <FaCheckCircle size={12} />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-[#64748B] dark:text-[#94A3B8] uppercase leading-none mb-1">
                Infrastructure
              </div>
              <div className="text-xs font-black text-[#1E293B] dark:text-white leading-none">
                Production-Ready
              </div>
            </div>
          </div>

          {/* Pipeline Tile */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
            <div className="w-7 h-7 rounded-lg bg-[#F472B6] border border-[#1E293B] flex items-center justify-center text-white text-xs font-black shadow-2xs">
              <FaTerminal size={11} />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-[#64748B] dark:text-[#94A3B8] uppercase leading-none mb-1">
                Automation
              </div>
              <div className="text-xs font-black text-[#1E293B] dark:text-white leading-none">
                CI/CD GitOps
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
