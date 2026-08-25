"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaDocker, FaCodeBranch, FaLaptopCode } from "react-icons/fa";
import { AsteriskBadge, RotatingStar } from "../GeometricShapes";

const disciplines = [
  {
    num: "01",
    title: "Cloud Infrastructure",
    desc: "Designing highly available, scalable AWS environments with Terraform IaC, VPC networking, security policies, and S3/EC2 optimization.",
    icon: <FaCloud size={22} className="text-[#1E293B]" />,
    iconBg: "bg-[#FBBF24]",
    popShadow: "shadow-[6px_6px_0px_0px_#8B5CF6]",
    borderColor: "border-[#1E293B] dark:border-white",
    stack: ["AWS EC2", "VPC & IAM", "Terraform", "S3 Storage"],
  },
  {
    num: "02",
    title: "Container Orchestration",
    desc: "Containerizing microservices with lightweight Docker images and orchestrating workloads using self-healing Kubernetes clusters.",
    icon: <FaDocker size={22} className="text-white" />,
    iconBg: "bg-[#38BDF8]",
    popShadow: "shadow-[6px_6px_0px_0px_#38BDF8]",
    borderColor: "border-[#1E293B] dark:border-white",
    stack: ["Kubernetes", "Docker", "Nginx", "Linux Services"],
  },
  {
    num: "03",
    title: "CI/CD & Automation",
    desc: "Constructing robust automated delivery pipelines with GitHub Actions, testing harnesses, automated container publishing, and zero-downtime rollouts.",
    icon: <FaCodeBranch size={20} className="text-[#1E293B]" />,
    iconBg: "bg-[#34D399]",
    popShadow: "shadow-[6px_6px_0px_0px_#34D399]",
    borderColor: "border-[#1E293B] dark:border-white",
    stack: ["GitHub Actions", "ArgoCD", "Automated Testing", "Bash"],
  },
  {
    num: "04",
    title: "Modern Full-Stack Systems",
    desc: "Developing fast, responsive client applications and robust REST APIs with Next.js, React, TypeScript, and relational MySQL data models.",
    icon: <FaLaptopCode size={22} className="text-white" />,
    iconBg: "bg-[#F472B6]",
    popShadow: "shadow-[6px_6px_0px_0px_#F472B6]",
    borderColor: "border-[#1E293B] dark:border-white",
    stack: ["React", "Next.js", "TypeScript", "MySQL & APIs"],
  },
];

export default function Scene04Capabilities() {
  return (
    <section
      id="capabilities"
      className="cinematic-scene min-h-screen flex flex-col justify-center relative overflow-hidden my-12"
    >
      {/* Decorative Rotating Star & Soft Geometric Accent */}
      <div className="absolute top-10 -left-20 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#BAE6FD]/45 dark:bg-[#38BDF8]/10 -z-10 pointer-events-none" />
      <div className="absolute top-16 right-10 hidden lg:block pointer-events-none opacity-80">
        <RotatingStar size={40} color="#8B5CF6" />
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-6">
          <div>
            <span className="sticker-badge bg-[#8B5CF6] text-white mb-3">
              TECHNICAL PILLARS // PLAYFUL GRID
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight">
              Core Disciplines
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#1E293B]/70 dark:text-[#94A3B8] max-w-md font-medium">
            Four specialized technical disciplines driving scalable, self-healing cloud architectures.
          </p>
        </div>

        {/* 4 Pillars Grid with Tactile Hard Shadow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, rotate: idx % 2 === 0 ? -1 : 1, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`p-7 sm:p-9 rounded-3xl border-2 ${item.borderColor} bg-white dark:bg-[#1E293B] ${item.popShadow} flex flex-col justify-between h-full group relative overflow-hidden`}
            >
              {/* Corner Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-13 h-13 rounded-2xl ${item.iconBg} border-2 border-[#1E293B] flex items-center justify-center shadow-[3px_3px_0px_0px_#1E293B] group-hover:rotate-6 transition-transform`}>
                  {item.icon}
                </div>
                <span className="text-3xl font-mono font-black text-[#1E293B]/30 dark:text-white/30 group-hover:text-[#1E293B] dark:group-hover:text-white transition-colors">
                  {item.num}
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-black text-[#1E293B] dark:text-white mb-3 tracking-tight">
                  {item.title}
                </h4>

                <p className="text-sm sm:text-base text-[#1E293B]/80 dark:text-[#94A3B8] font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[#1E293B]/15 dark:border-white/10">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white text-[#1E293B] dark:text-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
