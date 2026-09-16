"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaSun, FaMoon, FaFileDownload, FaGithub, FaEnvelope, FaCode, FaGraduationCap, FaCertificate, FaTools, FaHome, FaRobot } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  const actions = [
    {
      id: "ai-assistant",
      title: "Ask Rishabh's AI Assistant",
      icon: <FaRobot size={15} className="text-[#8B5CF6]" />,
      category: "AI & Actions",
      run: () => {
        window.dispatchEvent(new CustomEvent("open-ai-chatbot"));
        setIsOpen(false);
      },
    },
    {
      id: "hero",
      title: "Go to Home / Hero",
      icon: <FaHome size={15} />,
      category: "Navigation",
      run: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "about",
      title: "Go to About Me",
      icon: <FaCode size={15} />,
      category: "Navigation",
      run: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "capabilities",
      title: "Go to Core Disciplines",
      icon: <FaTools size={15} />,
      category: "Navigation",
      run: () => {
        document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "projects",
      title: "Go to Selected Works",
      icon: <FaCode size={15} />,
      category: "Navigation",
      run: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "experience",
      title: "Go to Roadmap & Experience",
      icon: <FaGraduationCap size={15} />,
      category: "Navigation",
      run: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "credentials",
      title: "Go to Certificates",
      icon: <FaCertificate size={15} />,
      category: "Navigation",
      run: () => {
        document.getElementById("credentials")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "theme",
      title: "Toggle Light / Dark Mode",
      icon: theme === "dark" ? <FaSun size={15} /> : <FaMoon size={15} />,
      category: "Actions",
      run: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "resume",
      title: "Download Resume (PDF)",
      icon: <FaFileDownload size={15} />,
      category: "Actions",
      run: () => {
        window.open("/Profile (1).pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "github",
      title: "View GitHub Profile",
      icon: <FaGithub size={15} />,
      category: "Social",
      run: () => {
        window.open("https://github.com/rishabhkankariya", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "email",
      title: "Copy Email Address",
      icon: <FaEnvelope size={15} />,
      category: "Actions",
      run: () => {
        navigator.clipboard.writeText("rishabhkankariya69@gmail.com");
        alert("Email copied to clipboard!");
        setIsOpen(false);
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#1E293B]/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="relative w-full max-w-xl p-0 overflow-hidden shadow-[8px_8px_0px_0px_#1E293B] bg-[#FFFDF5] dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white rounded-3xl z-10"
          >
            {/* Input Bar */}
            <div className="p-4 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10">
              <div className="flex items-center px-4 py-3 gap-3 rounded-full bg-white dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B]">
                <FaSearch size={16} className="text-[#8B5CF6] flex-shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find projects, tools & commands..."
                  className="w-full bg-transparent border-none outline-none text-sm sm:text-base font-bold text-[#1E293B] dark:text-white placeholder:text-[#94A3B8]"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-[#64748B] hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Action List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-1.5">
              {filtered.length > 0 ? (
                filtered.map((act) => (
                  <button
                    key={act.id}
                    onClick={act.run}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-[#FBBF24] hover:text-[#1E293B] border-2 border-transparent hover:border-[#1E293B] text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 text-[#1E293B] dark:text-white group-hover:text-[#1E293B]">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-[#0F172A] border border-[#1E293B]/30 flex items-center justify-center text-[#8B5CF6] group-hover:bg-[#1E293B] group-hover:text-[#FBBF24] transition-colors">
                        {act.icon}
                      </div>
                      <span className="text-sm font-extrabold">{act.title}</span>
                    </div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#1E293B]/30 text-[#1E293B] dark:text-[#94A3B8] font-mono font-bold">
                      {act.category}
                    </span>
                  </button>
                ))
              ) : (
                <div className="py-8 text-center text-sm font-bold text-[#64748B]">
                  No commands found matching "{query}"
                </div>
              )}
            </div>

            {/* Footer status bar */}
            <div className="px-5 py-2.5 border-t-2 border-dashed border-[#1E293B]/20 dark:border-white/10 bg-white/50 dark:bg-black/20 flex items-center justify-between text-xs font-mono font-bold text-[#64748B] dark:text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34D399] border border-[#1E293B] animate-pulse" />
                <span>COMMAND PALETTE</span>
              </span>
              <span className="text-[11px]">ESC to close • Click to jump</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
