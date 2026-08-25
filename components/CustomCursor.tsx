"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Instant 0-latency live mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      container.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .is-interactive, .candy-btn");
      setIsHovered(!!interactive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform", transform: "translate3d(-100px, -100px, 0)" }}
    >
      {/* Outer White Geometric Ring with 2px Dark Border & Hard Shadow */}
      <div
        className={`rounded-full border-2 border-[#1E293B] dark:border-white transition-all duration-150 flex items-center justify-center ${
          isClicked
            ? "w-6 h-6 bg-[#FBBF24] scale-90"
            : isHovered
            ? "w-10 h-10 bg-[#FBBF24]/30 scale-110 shadow-[3px_3px_0px_0px_#1E293B]"
            : "w-7 h-7 bg-white dark:bg-[#1E293B] shadow-[2px_2px_0px_0px_rgba(30,41,59,0.3)]"
        }`}
      >
        {/* Inner Purple/Violet Center Dot */}
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered ? "w-3.5 h-3.5 bg-[#F472B6]" : "w-2.5 h-2.5 bg-[#8B5CF6]"
          }`}
        />
      </div>
    </div>
  );
}
