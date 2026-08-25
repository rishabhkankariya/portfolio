"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { CandyButton } from "../CandyButton";
import { AsteriskBadge, RotatingStar } from "../GeometricShapes";

export default function Scene03About() {
  return (
    <section
      id="about"
      className="cinematic-scene min-h-screen flex flex-col justify-center relative overflow-hidden my-8"
    >
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Header Tag */}
        <div className="flex items-center justify-between border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="sticker-badge bg-[#F472B6] text-white">
              BACKGROUND & LEADERSHIP
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-[#64748B] dark:text-[#94A3B8] hidden sm:inline">
            ZONE OF ENGINEERING INNOVATORS (ZEN)
          </span>
        </div>

        {/* Playful Geometric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <AsteriskBadge text="DevOps Leadership" color="#FBBF24" />
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight leading-tight">
              Engineering with <br />
              <span className="text-[#8B5CF6] dark:text-[#A78BFA] underline decoration-wavy decoration-[#FBBF24]">
                precision and scale.
              </span>
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-[#1E293B]/80 dark:text-[#94A3B8] font-medium leading-relaxed">
              <p>
                I am a <strong className="text-[#1E293B] dark:text-white font-extrabold">B.Tech Computer Science and Engineering</strong> student at MIT-ADT University and serve as the <strong className="text-[#1E293B] dark:text-white font-extrabold">Technical Secretary</strong> at the Zone of Engineering Innovators (ZEN).
              </p>
              <p>
                My focus lies in cloud-native paradigms: configuring multi-tier AWS deployments, automating continuous delivery through GitHub Actions, containerizing services with Docker, and scaling resilient Kubernetes workloads.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8]">
                I believe modern software infrastructure must be self-healing, cost-efficient, and secure by default.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <CandyButton
                href="#contact"
                variant="primary"
                icon={<FaEnvelope size={11} />}
              >
                Let's Collaborate
              </CandyButton>

              <CandyButton
                href="#capabilities"
                variant="secondary"
                icon={<FaArrowRight size={11} />}
              >
                View Core Disciplines
              </CandyButton>
            </div>
          </div>

          {/* Right Column: Custom Portrait Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="sticker-card w-full max-w-[420px] bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white rounded-3xl shadow-[8px_8px_0px_0px_#1E293B] dark:shadow-[8px_8px_0px_0px_#F8FAFC] relative overflow-hidden p-3 sm:p-4 flex flex-col justify-between group"
            >
              {/* Floating Star in Corner */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <RotatingStar size={28} color="#FBBF24" />
              </div>

              {/* Portrait Image Frame */}
              <div className="relative w-full aspect-[3/3.8] rounded-2xl overflow-hidden border-2 border-[#1E293B] dark:border-white/20 bg-[#FFFDF5] shadow-[inset_0_2px_8px_rgba(30,41,59,0.06)] select-none">
                <Image
                  src="/images/rishabh-about.jpg"
                  alt="Rishabh Kankariya - Cloud & DevOps Architecture"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                />
              </div>

              {/* Bottom Status Bar */}
              <div className="w-full flex items-center justify-between pt-3 px-2 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] border border-[#1E293B] animate-pulse" />
                  <span className="text-xs font-mono font-black text-[#1E293B] dark:text-white uppercase">
                    Rishabh Kankariya
                  </span>
                </div>

                <span className="sticker-badge bg-[#34D399] text-[#1E293B] text-[10px]">
                  OPEN FOR ROLES
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
