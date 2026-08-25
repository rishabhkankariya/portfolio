"use client";

import { useState, useEffect } from "react";
import { BiCopyright } from "react-icons/bi";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-(--border-color) relative bg-(--bg-color) text-xs sm:text-sm text-(--text-muted)">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="flex items-center gap-1.5 font-medium">
          <BiCopyright size={16} />
          <span>{currentYear} Rishabh Kankariya. Designed with modern web standards.</span>
        </p>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>All Systems Operational</span>
        </div>

        {showScrollTop && (
          <button
            className="fixed bottom-6 right-6 w-11 h-11 bg-amber-400 text-[#141413] flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(243,180,74,0.4)] hover:scale-110 active:scale-95 transition-transform z-50 cursor-pointer"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <HiArrowUp size={18} />
          </button>
        )}
      </div>
    </footer>
  );
}
