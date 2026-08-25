"use client";

import React from "react";
import { CandyButton, CandyButtonProps } from "./CandyButton";

export interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "pink" | "yellow" | "mint" | "darkGlass";
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export function ShimmerButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  external = false,
  type = "button",
}: ShimmerButtonProps) {
  const candyVariant =
    variant === "secondary" || variant === "darkGlass" ? "secondary" : "primary";

  return (
    <CandyButton
      href={href}
      onClick={onClick}
      variant={candyVariant}
      className={className}
      icon={icon}
      external={external}
      type={type}
    >
      {children}
    </CandyButton>
  );
}
