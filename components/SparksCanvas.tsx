"use client";

import React, { useRef, useEffect } from "react";

interface SparksCanvasProps {
  children: React.ReactNode;
}

export default function SparksCanvas({ children }: SparksCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match the wrapper with extra spacing around it
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width + 100;
      canvas.height = rect.height + 100;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const sparkParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      alpha: number;
      life: number;
    }> = [];

    // Accent glow gradient color palette: cyan, violet, pink/magenta, amber, blue
    const sparkColors = ["#50e3c2", "#7928ca", "#ff0080", "#f9cb28", "#007cf0"];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      
      // Calculate coordinates relative to canvas positioned absolute at top-[-50px] left-[-50px]
      const x = e.clientX - rect.left + 50;
      const y = e.clientY - rect.top + 50;

      // Spawn sparks
      if (Math.random() < 0.45) {
        for (let i = 0; i < 3; i++) {
          sparkParticles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4 - 1.2, // general upward drift
            color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
            size: Math.random() * 4 + 2,
            alpha: 1,
            life: 0.02 + Math.random() * 0.03,
          });
        }
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const animateSparks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = sparkParticles.length - 1; i >= 0; i--) {
        const p = sparkParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.life;

        if (p.alpha <= 0) {
          sparkParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        
        // Draw glowing spark
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animateSparks);
    };

    animateSparks();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full group">
      {/* Sparks Canvas layered on top of the wrapper */}
      <canvas
        ref={canvasRef}
        className="absolute -top-[50px] -left-[50px] pointer-events-none z-10 w-[calc(100%+100px)] h-[calc(100%+100px)] hidden md:block"
      />
      {children}
    </div>
  );
}
