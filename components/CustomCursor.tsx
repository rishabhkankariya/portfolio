"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let cursorX = 0, cursorY = 0;
    let targetX = 0, targetY = 0;
    const easing = 0.15;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Hide custom cursor circle on portfolio image hover (avatar-wrapper or portfolio-shadow)
      const isPortfolio = target.closest(".portfolio-shadow, #avatar-wrapper");
      if (isPortfolio) {
        cursor.style.opacity = "0";
        return; // Avoid applying interactive styles if hidden
      } else {
        cursor.style.opacity = "1";
      }

      // 2. Expand custom cursor on interactive elements
      const isInteractive = target.closest(
        'a, button, [data-cursor="hover"], .project-card-shadow, .skill-card-shadow, .button-shadow, .shimmer-button'
      );
      if (isInteractive) {
        cursor.classList.add("w-12", "h-12", "bg-white/20");
        cursor.classList.remove("w-6", "h-6");
      } else {
        cursor.classList.remove("w-12", "h-12", "bg-white/20");
        cursor.classList.add("w-6", "h-6");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const updateCursor = () => {
      cursorX += (targetX - cursorX) * easing;
      cursorY += (targetY - cursorY) * easing;
      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }
      animationId = requestAnimationFrame(updateCursor);
    };
    animationId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,opacity] duration-200 mix-blend-difference bg-transparent hidden lg:block w-6 h-6"
      style={{ left: "-100px", top: "-100px", opacity: 1 }}
    />
  );
}
