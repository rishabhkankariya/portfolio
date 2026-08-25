"use client";

import Image from "next/image";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { ShimmerButton } from "./ShimmerButton";
import CityscapeBanner from "./CityscapeBanner";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="portfolio" className="flex flex-col justify-center pt-8 sm:pt-12 pb-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full relative space-y-8"
      >
        {/* Top Hero Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full max-w-full">
          {/* Left Column: Simple, Punchy Display Headline */}
          <div className="lg:col-span-7 min-w-0 flex flex-col gap-4">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-slate-900 dark:text-amber-300 border border-amber-500/40 text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
                <span>Open for Opportunities</span>
              </div>

              {/* High-Contrast Stack Badge with Crisp Colors */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-xs font-mono font-bold border border-slate-300 dark:border-slate-700 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_6px_#0284c7]"></span>
                <span>AWS • Kubernetes • Terraform • Docker</span>
              </div>
            </motion.div>

            {/* Simple, Straightforward Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-[1.15] tracking-tight text-slate-950 dark:text-white break-words"
            >
              Hi, I'm Rishabh. <br />
              <span className="text-amber-500">I build cloud infrastructure</span> & DevOps pipelines.
            </motion.h1>
          </div>

          {/* Right Column: Clear, Straightforward Description & Shimmer Actions */}
          <div className="lg:col-span-5 min-w-0 flex flex-col gap-5 lg:pt-2">
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
            >
              Passionate about automating CI/CD pipelines, container orchestration with Kubernetes, and deploying scalable architectures on AWS.
            </motion.p>

            {/* Glassmorphic Shimmer Buttons with Shining Lights */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <ShimmerButton
                href="#projects"
                variant="primary"
                icon={<FaArrowRight size={11} />}
              >
                View selected work
              </ShimmerButton>

              <ShimmerButton
                href="#about"
                variant="secondary"
              >
                About me ↗
              </ShimmerButton>

              <ShimmerButton
                href="/Profile (1).pdf"
                variant="secondary"
                external
                icon={<FaFileDownload size={12} className="text-amber-400" />}
              >
                Resume
              </ShimmerButton>
            </motion.div>

            {/* Profile Avatar Card */}
            <motion.div variants={itemVariants} className="pt-1 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-md flex-shrink-0">
                <Image
                  src="/images/profile_image.png"
                  alt="Rishabh Kankariya"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="font-bold text-sm text-slate-900 dark:text-white">Rishabh Kankariya</div>
                <div className="text-slate-600 dark:text-slate-400 mt-0.5 font-medium">B.Tech CSE • Cloud & DevOps Engineer • India</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skyline Banner */}
        <motion.div variants={itemVariants}>
          <CityscapeBanner />
        </motion.div>
      </motion.div>
    </section>
  );
}
