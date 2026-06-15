"use client";

import React from "react";

export default function OrbitsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden opacity-50 dark:opacity-75">
      {/* Concentric circular lines */}
      <svg
        className="absolute w-[200vw] h-[200vw] -top-[50vw] -left-[50vw] md:-top-[25vw] md:-left-[25vw] lg:w-[150vw] lg:h-[150vw] opacity-75"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="500" r="150" stroke="rgba(121, 40, 202, 0.04)" strokeWidth="1" />
        <circle cx="500" cy="500" r="250" stroke="rgba(121, 40, 202, 0.06)" strokeWidth="1" />
        <circle cx="500" cy="500" r="350" stroke="rgba(121, 40, 202, 0.08)" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="500" cy="500" r="450" stroke="rgba(121, 40, 202, 0.1)" strokeWidth="1.5" />
        <circle cx="500" cy="500" r="550" stroke="rgba(121, 40, 202, 0.08)" strokeWidth="1" />
        <circle cx="500" cy="500" r="650" stroke="rgba(121, 40, 202, 0.06)" strokeWidth="1" strokeDasharray="10 5" />
        <circle cx="500" cy="500" r="750" stroke="rgba(121, 40, 202, 0.04)" strokeWidth="1" />
        <circle cx="500" cy="500" r="850" stroke="rgba(121, 40, 202, 0.02)" strokeWidth="1.5" />
      </svg>

      {/* Retro-futuristic scanning lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(121,40,202,0.012)_1px,transparent_1px)] bg-[size:100%_6px]" />
    </div>
  );
}
