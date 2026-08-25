"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Point {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function MagneticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationFrameId: number;
    const points: Point[] = [];
    const spacing = 64; // Calibrated clean spacing
    const mouse = { x: -1000, y: -1000, radius: 85 }; // Gentle, tight interaction radius

    const initPoints = () => {
      points.length = 0;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          points.push({
            baseX: x,
            baseY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            radius: 0.9,
          });
        }
      }
    };

    initPoints();

    const handleResize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      initPoints();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";
      const dotBaseColor = isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(20, 20, 19, 0.04)";
      const dotActiveColor = isDark ? "rgba(243, 180, 74, 0.45)" : "rgba(243, 180, 74, 0.5)";

      // Update and draw points with subtle, gentle spring physics
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          // Very gentle displacement (force = 3 max)
          const force = (1 - dist / mouse.radius) * 3;
          const angle = Math.atan2(dy, dx);
          const targetX = p.baseX + Math.cos(angle) * force;
          const targetY = p.baseY + Math.sin(angle) * force;

          p.vx += (targetX - p.x) * 0.1;
          p.vy += (targetY - p.y) * 0.1;
        } else {
          p.vx += (p.baseX - p.x) * 0.06;
          p.vy += (p.baseY - p.y) * 0.06;
        }

        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        const isNear = dist < mouse.radius;
        const currentRadius = isNear ? p.radius * 1.3 : p.radius;

        ctx.fillStyle = isNear ? dotActiveColor : dotBaseColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none opacity-80"
    />
  );
}
