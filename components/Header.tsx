"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaRobot } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PRACTICE", href: "#capabilities" },
    { label: "WORK", href: "#projects" },
    { label: "ROADMAP", href: "#experience" },
    { label: "CONTACT", href: "#contact", isContact: true },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="fixed top-2.5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      >
        <div className="w-full max-w-3xl flex items-center justify-between px-4 py-1.5 rounded-full bg-[#FFFDF5] dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[3px_3px_0px_0px_#1E293B] dark:shadow-[3px_3px_0px_0px_#F8FAFC] pointer-events-auto transition-all">
          {/* Brand Monogram Sticker Pill */}
          <Link href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-[#8B5CF6] border-2 border-[#1E293B] flex items-center justify-center text-white text-xs font-black shadow-[2px_2px_0px_0px_#1E293B] group-hover:rotate-12 transition-transform">
              RK
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#1E293B] dark:text-white group-hover:text-[#8B5CF6] transition-colors">
                Rishabh Kankariya
              </span>
              <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] font-bold hidden sm:inline">
                DevOps & Cloud Engineer
              </span>
            </div>
          </Link>

          {/* Playful Geometric Navigation Pills */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-extrabold tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 border-2 ${
                  item.isContact
                    ? "bg-[#FBBF24] text-[#1E293B] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#1E293B]"
                    : "border-transparent text-[#1E293B] dark:text-[#F8FAFC] hover:border-[#1E293B] dark:hover:border-white hover:bg-[#F472B6]/15 hover:shadow-[2px_2px_0px_0px_#1E293B] dark:hover:shadow-[2px_2px_0px_0px_#F8FAFC]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Quick Actions (AI Assistant + Theme Switcher + Mobile Menu) */}
          <div className="flex items-center gap-2">
            {/* AI Assistant Pill Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent("open-ai-chatbot"))}
              className="px-2.5 py-1 rounded-full bg-[#8B5CF6] text-white font-black text-[11px] flex items-center gap-1.5 border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC] cursor-pointer hover:bg-[#7C3AED] transition-colors"
              title="Open AI Chatbot Assistant"
            >
              <FaRobot size={11} className="text-[#FBBF24]" />
              <span className="hidden sm:inline">AI ASSISTANT</span>
            </motion.button>

            {/* Playful Theme Switcher Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-[#FBBF24] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC] text-[#1E293B] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun size={13} /> : <FaMoon size={12} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white dark:bg-[#334155] text-[#1E293B] dark:text-white border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <FaTimes size={13} /> : <FaBars size={13} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Playful Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#FFFDF5] dark:bg-[#1E293B] border-3 border-[#1E293B] dark:border-white rounded-3xl p-6 shadow-[8px_8px_0px_0px_#1E293B] dark:shadow-[8px_8px_0px_0px_#F8FAFC] flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-3 font-extrabold text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[3px_3px_0px_0px_#1E293B] text-[#1E293B] dark:text-white hover:bg-[#FBBF24] hover:text-[#1E293B] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t-2 border-dashed border-[#1E293B]/20 flex items-center justify-between text-xs font-mono font-bold">
              <span>RK.DEV // 2026</span>
              <span className="text-[#8B5CF6]">PLAYFUL GEOMETRIC</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
