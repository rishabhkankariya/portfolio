"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFileDownload,
  FaShieldAlt,
  FaInfinity,
  FaExpandArrowsAlt,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { CandyButton } from "../CandyButton";
import { RotatingStar } from "../GeometricShapes";
import CloudArchitectureDiagram from "./CloudArchitectureDiagram";

export default function Scene01Hero() {
  return (
    <section
      id="hero"
      className="cinematic-scene relative w-full pt-14 sm:pt-16 pb-8 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Soft Borderless Background Geometric Decorators */}
      <div className="absolute top-[18%] left-2 sm:left-6 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[#FDE68A]/60 dark:bg-[#FBBF24]/10 -z-10 pointer-events-none" />
      <div className="absolute top-14 right-12 hidden lg:block pointer-events-none -z-10">
        <RotatingStar size={36} color="#F472B6" />
      </div>

      {/* 2. Centerpiece: Asymmetrical Editorial Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center z-10">
        {/* Left Column: Badges, Display Typography, Description & Value Matrix */}
        <div className="lg:col-span-6 flex flex-col items-start gap-3 relative">
          {/* Section Badge with Clearance */}
          <div className="flex items-center gap-2.5">
            <span className="sticker-badge bg-[#FBBF24] text-[#1E293B] text-[11px] py-0.5 px-3">
              <span className="w-2 h-2 rounded-full bg-[#1E293B] animate-ping" />
              <span>SYSTEM ARCHITECTURE</span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
            className="relative"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-black text-[#1E293B] dark:text-white uppercase tracking-tight leading-[1.06]">
              <span>CLOUD</span> <br />
              <span className="text-[#8B5CF6] dark:text-[#A78BFA]">ARCHITECTURE</span> <br />
              <span className="text-[#34D399] dark:text-[#4ADE80]">BUILT FOR SCALE</span> <br />
              <span className="text-[#8B5CF6] dark:text-[#A78BFA]">& RELIABILITY</span>
            </h1>
          </motion.div>

          <div className="w-12 h-0.5 border-t-2 border-dashed border-[#1E293B]/30 dark:border-white/20" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 }}
            className="text-xs sm:text-sm text-[#1E293B]/80 dark:text-[#94A3B8] max-w-xl font-medium leading-relaxed"
          >
            Designed a modern, secure, and scalable cloud infrastructure on AWS using containerized microservices, managed databases, and CI/CD automation to ensure high availability and performance.
          </motion.p>

          {/* 4 Feature Badges (2x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-2 w-full max-w-lg"
          >
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
              <div className="w-5 h-5 rounded-lg bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center font-bold">
                <FaExpandArrowsAlt size={9} />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1E293B] dark:text-white">
                Scalable & Elastic
              </span>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
              <div className="w-5 h-5 rounded-lg bg-[#34D399]/20 text-[#10B981] flex items-center justify-center font-bold">
                <FaShieldAlt size={9} />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1E293B] dark:text-white">
                Secure by Design
              </span>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
              <div className="w-5 h-5 rounded-lg bg-[#FBBF24]/20 text-[#D97706] flex items-center justify-center font-bold">
                <FaServer size={9} />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1E293B] dark:text-white">
                Highly Available
              </span>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
              <div className="w-5 h-5 rounded-lg bg-[#38BDF8]/20 text-[#0284C7] flex items-center justify-center font-bold">
                <FaInfinity size={9} />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1E293B] dark:text-white">
                Automated Deployments
              </span>
            </div>
          </motion.div>

          {/* Built For The Future Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.25 }}
            className="w-full max-w-lg p-2 rounded-xl border-2 border-dashed border-[#1E293B]/30 dark:border-white/20 bg-white/70 dark:bg-[#1E293B]/70"
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-4 h-4 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center text-[9px] font-black">
                ★
              </span>
              <span className="text-[11px] font-mono font-black text-[#1E293B] dark:text-white">
                Built for the future.
              </span>
            </div>
            <p className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8]">
              This architecture empowers continuous delivery, observability, and effortless scaling.
            </p>
          </motion.div>

          {/* Candy Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
            className="pt-1 flex flex-wrap items-center gap-3"
          >
            <CandyButton
              href="#projects"
              variant="primary"
              icon={<FaArrowRight size={10} />}
            >
              Explore Selected Works
            </CandyButton>

            <CandyButton
              href="/Profile (1).pdf"
              variant="secondary"
              external
              icon={<FaFileDownload size={10} />}
            >
              Download Resume
            </CandyButton>
          </motion.div>
        </div>

        {/* Right Column: Full Interactive Cloud Architecture Topology Sticker Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
          className="lg:col-span-6 w-full flex flex-col items-center lg:items-end"
        >
          {/* Architecture Badge */}
          <div className="w-full max-w-[450px] flex justify-end mb-2">
            <span className="sticker-badge bg-[#38BDF8] text-[#1E293B] text-xs py-1 px-3">
              <FaCloud size={11} />
              <span>AWS & K8S PRODUCTION</span>
            </span>
          </div>

          <div className="relative w-full max-w-[450px] rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] p-3.5 sm:p-4 shadow-[6px_6px_0px_0px_#1E293B] dark:shadow-[6px_6px_0px_0px_#F8FAFC] overflow-hidden bg-dot-grid">
            <CloudArchitectureDiagram />
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Status Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-6xl mx-auto flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-[#1E293B] dark:text-[#94A3B8] pt-4 mt-4 border-t-2 border-dashed border-[#1E293B]/20 dark:border-white/10"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399] border border-[#1E293B] animate-pulse" />
          <span className="tracking-widest uppercase">
            ALL SYSTEMS DEPLOYED & OPERATIONAL
          </span>
        </div>

        <div className="hidden sm:block tracking-wider uppercase">
          PRODUCTION ARCHITECTURE ✦ AWS & DEVOPS
        </div>
      </motion.div>
    </section>
  );
}
