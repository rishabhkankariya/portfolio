"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface CandyButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "pink" | "yellow" | "mint" | "outline";
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function CandyButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  external = false,
  type = "button",
  disabled = false,
}: CandyButtonProps) {
  // Playful Geometric Color Presets
  const variantStyles = {
    primary:
      "bg-[#8B5CF6] text-white border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC]",
    secondary:
      "bg-white dark:bg-[#1E293B] text-[#1E293B] dark:text-[#F8FAFC] border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC] hover:bg-[#FBBF24] dark:hover:bg-[#FBBF24] hover:text-[#1E293B] dark:hover:text-[#1E293B]",
    pink:
      "bg-[#F472B6] text-white border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC]",
    yellow:
      "bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC]",
    mint:
      "bg-[#34D399] text-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC]",
    outline:
      "bg-transparent text-[#1E293B] dark:text-[#F8FAFC] border-2 border-[#1E293B] dark:border-white hover:bg-[#FBBF24] hover:text-[#1E293B]",
  }[variant];

  const baseStyles =
    "inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-bold text-sm tracking-tight cursor-pointer select-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const content = (
    <motion.div
      whileHover={{ y: -2, x: -2 }}
      whileTap={{ y: 2, x: 2 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      <span className="font-extrabold">{children}</span>
      {icon && (
        <span className="w-6 h-6 rounded-full bg-white text-[#1E293B] border border-[#1E293B]/20 flex items-center justify-center flex-shrink-0 text-xs shadow-2xs">
          {icon}
        </span>
      )}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className="inline-block bg-transparent p-0 border-none">
      {content}
    </button>
  );
}
