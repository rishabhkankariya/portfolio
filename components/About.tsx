"use client";

import Image from "next/image";
import { FaEnvelope, FaCode, FaPaintBrush, FaLaptopCode, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import KineticHeading from "./KineticHeading";
import { Tilt } from "./motion-primitives/Tilt";
import { Spotlight } from "./motion-primitives/Spotlight";
import { ShimmerButton } from "./ShimmerButton";

export default function About() {
  const pillars = [
    {
      title: "Web & Full-Stack",
      desc: "Architecting fast, responsive web applications with Next.js, React, and TypeScript.",
      icon: <FaCode size={20} className="text-white" />,
      badgeBg: "bg-gradient-to-br from-amber-500 to-amber-600 shadow-[0_4px_14px_rgba(245,158,11,0.35)]",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Crafting modern, accessible interfaces with cohesive tokens and fluid micro-animations.",
      icon: <FaPaintBrush size={18} className="text-white" />,
      badgeBg: "bg-gradient-to-br from-sky-500 to-blue-600 shadow-[0_4px_14px_rgba(14,165,233,0.35)]",
      tags: ["Figma", "Design Tokens", "Glassmorphism", "Motion"],
    },
    {
      title: "Software Engineering",
      desc: "Writing modular, scalable backend logic, REST APIs, and database structures.",
      icon: <FaLaptopCode size={20} className="text-white" />,
      badgeBg: "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_4px_14px_rgba(99,102,241,0.35)]",
      tags: ["Java", "Python", "MySQL", "System Design"],
    },
    {
      title: "DevOps & Cloud",
      desc: "Automating CI/CD deployment pipelines, container orchestration, and IaC on AWS.",
      icon: <FaTools size={18} className="text-white" />,
      badgeBg: "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_4px_14px_rgba(16,185,129,0.35)]",
      tags: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="About & Engineering Practice"
          subtitle="Academic foundation, technical leadership, and core engineering focus"
        />

        {/* Bento Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7">
            <Spotlight className="h-full rounded-[26px] p-7 sm:p-9 bg-(--card-background) border border-(--border-color) shadow-sm flex flex-col justify-between">
              <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  I am a <strong className="text-slate-950 dark:text-white font-bold">B.Tech Computer Science and Engineering</strong> student at MIT-ADT University and serve as the <strong className="text-slate-950 dark:text-white font-bold">Technical Secretary</strong> at the Zone of Engineering Innovators (ZEN).
                </p>
                <p>
                  My engineering practice focuses on designing scalable cloud architectures on AWS, automating multi-stage CI/CD pipelines, containerizing applications with Docker & Kubernetes, and building robust software systems.
                </p>
                <p className="text-sm sm:text-base">
                  I love turning complex infrastructure requirements into clean, automated, self-healing systems that run seamlessly in production.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-3.5">
                <ShimmerButton
                  href="#contact"
                  variant="primary"
                  icon={<FaEnvelope size={13} />}
                >
                  Let's Connect
                </ShimmerButton>

                <ShimmerButton
                  href="#experience"
                  variant="secondary"
                >
                  View Timeline ↗
                </ShimmerButton>
              </div>
            </Spotlight>
          </div>

          {/* 3D Floating Transparent Asset Showcase (No Dark Box Background) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <Tilt rotationFactor={6} className="w-full h-full">
              <Spotlight className="ui-card p-6 sm:p-8 w-full h-full relative overflow-hidden rounded-[26px] shadow-lg group border border-(--border-color) bg-(--card-background) flex flex-col items-center justify-between min-h-[340px]">
                {/* Ambient Soft Glow Behind Transparent Asset */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-sky-400/5 to-transparent pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

                {/* Floating Tech Chips around transparent image */}
                <div className="w-full flex items-center justify-between z-10">
                  <motion.span
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-xs"
                  >
                    ☁️ AWS Cloud
                  </motion.span>
                  <motion.span
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                    className="px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-xs"
                  >
                    ⚡ CI/CD Automation
                  </motion.span>
                </div>

                {/* Transparent Cutout Illustration with Gentle Floating Motion */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-56 h-56 sm:w-64 sm:h-64 my-2 flex items-center justify-center z-10"
                >
                  <Image
                    src="/images/Devops.png"
                    alt="DevOps & Cloud Engineering Architecture"
                    width={260}
                    height={260}
                    className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </motion.div>

                {/* Glassmorphic Telemetry Footer Pill */}
                <div className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-(--border-color) text-xs font-mono text-slate-900 dark:text-slate-100 z-10 shadow-xs">
                  <span className="flex items-center gap-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                    <span>Cloud Architecture</span>
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">K8s • Docker</span>
                </div>
              </Spotlight>
            </Tilt>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-950 dark:text-white tracking-tight">
            Core Practice & Focus Areas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <Spotlight key={idx} className="ui-card is-interactive p-6 sm:p-7 rounded-[24px] flex flex-col justify-between h-full group border border-(--border-color) bg-(--card-background)">
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.badgeBg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-slate-950 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-(--border-color)">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
