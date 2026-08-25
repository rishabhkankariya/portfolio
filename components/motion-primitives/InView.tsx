"use client";

import React, { useRef } from "react";
import { motion, useInView, Variant, Transition } from "framer-motion";

interface InViewProps {
  children: React.ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: {
    once?: boolean;
    margin?: any;
    amount?: "some" | "all" | number;
  };
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

export function InView({
  children,
  variants = defaultVariants,
  transition = defaultTransition,
  viewOptions = { once: true, margin: "-40px" },
  className = "",
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
