"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

const projects = [
  {
    num: "01",
    name: "Smart Bus Pass System",
    category: "Cloud & DevOps",
    featured: true,
    shadowColor: "shadow-[8px_8px_0px_0px_#F472B6]",
    description:
      "A complete cloud-native digital pass platform deployed on Azure, Nginx, and SSL with secure session authentication, Razorpay gateway, automated PDF receipts, and admin metric dashboards.",
    icons: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/mysql.svg",
      "/icons/aws.svg",
      "/icons/docker.svg",
    ],
    github: "https://github.com/rishabhkankariya/bus-pass-system",
    live: "https://smart-bus-pass-system.pages.dev/",
  },
  {
    num: "02",
    name: "AI Chatbot Platform",
    category: "AI & Automation",
    featured: false,
    shadowColor: "shadow-[6px_6px_0px_0px_#8B5CF6]",
    description:
      "Built and deployed a login-enabled AI chatbot platform with secure cloud hosting, knowledge base embeddings, user session persistence, and database integration.",
    icons: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/python.svg",
      "/icons/aws.svg",
      "/icons/docker.svg",
    ],
    github: "https://github.com/rishabhkankariya",
    live: "https://ai-chatbot-system-by-rishabhkankariya.pages.dev/",
  },
  {
    num: "03",
    name: "Student-Institute Portal",
    category: "Full-Stack",
    featured: false,
    shadowColor: "shadow-[6px_6px_0px_0px_#34D399]",
    description:
      "Full-stack student-institute portal featuring registration management, document verification, admin approval workflows, and interactive dashboards built with PHP, MySQL, and JavaScript.",
    icons: [
      "/icons/javascript.svg",
      "/icons/mysql.svg",
      "/icons/react.svg",
    ],
    github: "https://github.com/rishabhkankariya",
    live: "https://ekitabhghar-project.onrender.com/",
  },
  {
    num: "04",
    name: "Personal Portfolio Website",
    category: "Full-Stack",
    featured: false,
    shadowColor: "shadow-[6px_6px_0px_0px_#38BDF8]",
    description:
      "Designed and deployed a responsive personal portfolio with Tailwind CSS, micro-interactions, dark mode toggle, and zero-latency custom cursor tracking.",
    icons: [
      "/icons/react.svg",
      "/icons/typescript.svg",
      "/icons/nextjs.svg",
    ],
    github: "https://github.com/rishabhkankariya",
    live: "https://rishabhkankariya.pages.dev/",
  },
  {
    num: "05",
    name: "ZEN Project Hub",
    category: "Full-Stack",
    featured: false,
    shadowColor: "shadow-[6px_6px_0px_0px_#FBBF24]",
    description:
      "Shared engineering repository, cloud architecture design templates, and workflow collaboration utilities built for innovators across the Zone Of Engineering Innovators.",
    icons: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/mysql.svg",
    ],
    github: "https://github.com/rishabhkankariya/ZEN_Project",
    live: "",
  },
  {
    num: "06",
    name: "Company Discovery Engine",
    category: "AI & Automation",
    featured: false,
    shadowColor: "shadow-[6px_6px_0px_0px_#F472B6]",
    description:
      "Automated web crawler, structured data indexer, and discovery engine configured with automated GitHub Actions CI/CD pipelines.",
    icons: [
      "/icons/javascript.svg",
      "/icons/mysql.svg",
      "/icons/github.svg",
    ],
    github: "https://github.com/adityarajlonkar09-commits/CDE",
    live: "",
  },
];

const categories = ["All", "Cloud & DevOps", "AI & Automation", "Full-Stack"];

export default function Scene06Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="cinematic-scene min-h-screen flex flex-col justify-center relative overflow-hidden my-8"
    >
      {/* Soft Geometric Pink Accent */}
      <div className="absolute top-12 -right-16 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#FCE7F3]/60 dark:bg-[#F472B6]/10 -z-10 pointer-events-none" />
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* Scene Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-6">
          <div>
            <span className="sticker-badge bg-[#F472B6] text-white mb-3">
              FEATURED WORKS // CASE STUDIES
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight">
              Selected Works
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 border-2 border-[#1E293B] dark:border-white cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FBBF24] text-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B] translate-x-[-1px] translate-y-[-1px]"
                    : "bg-white dark:bg-[#1E293B] text-[#1E293B] dark:text-white hover:bg-[#F472B6]/20 shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`sticker-card p-6 sm:p-7 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] ${project.shadowColor} dark:shadow-[6px_6px_0px_0px_#F8FAFC] flex flex-col justify-between h-full group`}
              >
                <div>
                  {/* Card Top Pill & Index */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-black text-[#8B5CF6] dark:text-[#A78BFA] px-2.5 py-1 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]">
                      {project.num}
                    </span>

                    <span className="text-xs font-mono font-bold text-[#1E293B] dark:text-white px-3 py-1 rounded-full bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl sm:text-2xl font-black text-[#1E293B] dark:text-white mb-3 group-hover:text-[#8B5CF6] transition-colors leading-snug">
                    {project.name}
                  </h4>

                  {/* Project Description */}
                  <p className="text-sm text-[#1E293B]/75 dark:text-[#94A3B8] font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Icons */}
                  <div className="flex items-center gap-2 mb-6 pt-4 border-t-2 border-dashed border-[#1E293B]/15 dark:border-white/10 flex-wrap">
                    {project.icons.map((icon, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-lg bg-[#FFFDF5] dark:bg-[#0F172A] border border-[#1E293B]/40 dark:border-white/30 flex items-center justify-center p-1"
                      >
                        <Image
                          src={icon}
                          alt="tech icon"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex-1 py-2 px-3 rounded-xl bg-[#8B5CF6] text-white text-xs font-mono font-black border-2 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center gap-2 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E293B] transition-all"
                      >
                        <span>LIVE DEMO</span>
                        <FaExternalLinkAlt size={10} />
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className={`py-2 px-3 rounded-xl bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white text-xs font-mono font-black border-2 border-[#1E293B] dark:border-white shadow-[3px_3px_0px_0px_#1E293B] dark:shadow-[3px_3px_0px_0px_#F8FAFC] flex items-center justify-center gap-2 hover:bg-[#FBBF24] hover:text-[#1E293B] transition-all ${
                          !project.live ? "w-full" : ""
                        }`}
                      >
                        <FaGithub size={13} />
                        <span>CODE</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
