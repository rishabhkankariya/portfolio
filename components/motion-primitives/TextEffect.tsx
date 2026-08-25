"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type PerType = "word" | "char" | "line";
type PresetType = "blur" | "fade" | "scale" | "slide";

interface TextEffectProps {
  children: string;
  per?: PerType;
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  speedReveal?: number;
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const presetVariants: Record<PresetType, Variants> = {
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

export function TextEffect({
  children,
  per = "word",
  as: Component = "span",
  variants,
  className = "",
  preset = "blur",
  delay = 0,
  speedReveal = 0.05,
}: TextEffectProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speedReveal,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = variants?.item || presetVariants[preset];

  const segments =
    per === "char"
      ? children.split("")
      : per === "word"
      ? children.split(" ")
      : [children];

  const MotionComponent = motion[Component as keyof typeof motion] as any || motion.span;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={variants?.container || containerVariants}
      className={`inline-block ${className}`}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block whitespace-pre"
        >
          {segment}
          {per === "word" && i < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
