"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Perspective particle parameters
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
    }> = [];
    const particleCount = 75;
    let mouseX = 0, mouseY = 0;
    let easeMouseX = 0, easeMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.15;
      mouseY = (e.clientY - height / 2) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Populate background particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 200,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number;

    const drawBg = () => {
      ctx.clearRect(0, 0, width, height);

      const isLightTheme = theme === "light";
      // We will match the premium purple-magenta theme dots:
      // Light theme uses a dark purple; Dark theme uses glowing white/violet dots.
      const dotColor = isLightTheme ? "121, 40, 202" : "255, 255, 255"; 

      // Smooth ease mouse coordinates
      easeMouseX += (mouseX - easeMouseX) * 0.05;
      easeMouseY += (mouseY - easeMouseY) * 0.05;

      particles.forEach((p) => {
        // Simulate moving closer in 3D
        p.z -= p.speed;
        if (p.z <= 0) p.z = 1000;

        // Rotate/skew coordinates based on mouse
        const rotatedX = p.x - easeMouseX * (p.z / 100);
        const rotatedY = p.y - easeMouseY * (p.z / 100);

        // Project 3D -> 2D
        const scale = 500 / p.z;
        const screenX = width / 2 + rotatedX * scale;
        const screenY = height / 2 + rotatedY * scale;

        // Draw particle if within bounds
        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          const opacity = Math.min((1 - p.z / 1000) * 0.6, 0.45);
          ctx.fillStyle = `rgba(${dotColor}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(drawBg);
    };

    drawBg();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
