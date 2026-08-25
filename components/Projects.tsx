"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";
import { Tilt } from "./motion-primitives/Tilt";
import { ShimmerButton } from "./ShimmerButton";

const projects = [
  {
    name: "Smart Bus Pass System",
    category: "Cloud & DevOps",
    featured: true,
    description:
      "A complete cloud-based digital pass platform featuring secure user authentication, Razorpay payment gateway, automated PDF receipt generation, transactional email dispatch, and an administrative analytics dashboard.",
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
    name: "AI Chatbot Platform",
    category: "AI & Automation",
    featured: false,
    description:
      "An automated intelligent chatbot platform with knowledge base embeddings, semantic search, user sessions, and cloud-hosted API services.",
    icons: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/python.svg",
      "/icons/aws.svg",
      "/icons/docker.svg",
    ],
    github: "https://github.com/rishabhkankariya",
    live: "https://ai-chatbot-system-by-rishabh-kankariya.pages.dev/login",
  },
  {
    name: "ZEN Project Hub",
    category: "Full-Stack",
    featured: false,
    description:
      "Shared engineering code repository, architecture design templates, and workflow collaboration tools for innovators across the Zone Of Engineering Innovators.",
    icons: [
      "/icons/react.svg",
      "/icons/javascript.svg",
      "/icons/mysql.svg",
    ],
    github: "https://github.com/rishabhkankariya/ZEN_Project",
    live: "",
  },
  {
    name: "Company Discovery Engine",
    category: "AI & Automation",
    featured: false,
    description:
      "Automated web crawler, data indexer, and company discovery engine configured with GitHub Actions automated CI/CD testing pipelines.",
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

export default function TechnicalSkills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="Selected Projects & Architectures"
          subtitle="Cloud-native applications, automated DevOps engines, and full-stack solutions"
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "text-slate-950 font-bold"
                  : "text-(--text-muted) hover:text-(--text-color)"
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeProjectPill"
                  className="absolute inset-0 bg-amber-400 rounded-full -z-10 shadow-[0_2px_12px_rgba(245,158,11,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={project.featured && selectedCategory === "All" ? "md:col-span-2" : ""}
              >
                <Tilt rotationFactor={5}>
                  <Spotlight className="ui-card is-interactive p-6 sm:p-8 rounded-[24px] flex flex-col justify-between h-full group border border-(--border-color)">
                    <div>
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-bold text-xl sm:text-2xl text-(--text-color) tracking-tight">
                            {project.name}
                          </h3>
                          {project.featured && (
                            <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-700 dark:text-amber-300">
                              Featured
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-[#C0EB3A] font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-(--text-muted) mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-xs font-bold text-(--text-color) block mb-2 opacity-80 font-mono uppercase tracking-wider">
                          Technologies:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.icons.map((icon, i) => (
                            <div
                              key={i}
                              className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] border border-(--border-color) hover:scale-110 transition-transform shadow-xs"
                            >
                              <Image
                                src={icon}
                                alt="tech stack"
                                width={26}
                                height={26}
                                className="object-contain w-6 h-6 sm:w-6.5 sm:h-6.5"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-(--border-color)">
                      <ShimmerButton
                        href={project.github}
                        variant="secondary"
                        external
                        className="flex-1"
                        icon={<FaGithub size={15} />}
                      >
                        GitHub Repo
                      </ShimmerButton>

                      {project.live && (
                        <ShimmerButton
                          href={project.live}
                          variant="primary"
                          external
                          className="flex-1"
                          icon={<FaExternalLinkAlt size={11} />}
                        >
                          Live Demo
                        </ShimmerButton>
                      )}
                    </div>
                  </Spotlight>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
