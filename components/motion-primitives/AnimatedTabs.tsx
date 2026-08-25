"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  badge?: string | number;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  tabClassName?: string;
  activePillClassName?: string;
}

export function AnimatedTabs({
  tabs,
  activeTab: controlledActiveTab,
  onChange,
  className = "",
  tabClassName = "",
  activePillClassName = "bg-amber-400 text-black",
}: AnimatedTabsProps) {
  const [internalActive, setInternalActive] = useState(tabs[0]?.id || "");
  const currentActive = controlledActiveTab !== undefined ? controlledActiveTab : internalActive;

  const handleSelect = (id: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActive(id);
    }
    onChange?.(id);
  };

  return (
    <div className={`inline-flex items-center p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 ${className}`}>
      {tabs.map((tab) => {
        const isActive = currentActive === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors z-10 ${
              isActive ? "text-black dark:text-black font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            } ${tabClassName}`}
          >
            {isActive && (
              <motion.div
                layoutId="animatedTabPill"
                className={`absolute inset-0 rounded-full -z-10 shadow-sm ${activePillClassName}`}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/20">
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
