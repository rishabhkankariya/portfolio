"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaRocket, FaClock } from "react-icons/fa";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";
import { CountUp } from "./CountUp";

export default function SystemHighlight() {
  const metrics = [
    { label: "Cloud Uptime Target", value: 99.9, suffix: "%", decimals: 1, icon: <FaClock size={20} className="text-amber-500" /> },
    { label: "CI/CD Pipeline Speed", value: 3, prefix: "< ", suffix: " min", decimals: 0, icon: <FaRocket size={20} className="text-emerald-500" /> },
    { label: "Security & TLS Rating", textValue: "A+", icon: <FaShieldAlt size={20} className="text-sky-500" /> },
    { label: "Infrastructure as Code", value: 100, suffix: "% Mod", decimals: 0, icon: <FaServer size={20} className="text-indigo-500" /> },
  ];

  return (
    <section id="system-highlight" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="System Architecture Spotlight"
          subtitle="Production-grade reliability, container orchestration, and automated pipelines"
        />

        <Spotlight className="ui-card p-6 sm:p-10 rounded-[28px] relative overflow-hidden bg-(--card-background) border border-(--border-color) shadow-lg">
          {/* Subtle Ambient Radial Watermark */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Architecture Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Automated Cloud Architecture
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                High-Availability Cloud & Kubernetes Deployments
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Engineered with self-healing Kubernetes clusters, automated rollback strategies on failure, Docker containerization, and Terraform infrastructure-as-code modules for continuous deployment across AWS environments.
              </p>

              <div className="flex flex-wrap gap-2 pt-3">
                {["AWS EC2 & S3", "Kubernetes (EKS)", "Docker Engine", "Terraform", "GitHub Actions CI/CD", "Nginx Reverse Proxy"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/[0.04] dark:bg-white/[0.06] border border-(--border-color) text-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat Counters Grid with Animated CountUp */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-5 rounded-2xl border border-(--border-color) bg-black/[0.02] dark:bg-white/[0.04] backdrop-blur-md flex flex-col justify-between gap-3 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    {m.icon}
                    <span className="text-[10px] font-mono text-slate-500 font-bold">METRIC 0{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 dark:text-white tracking-tight">
                      {m.textValue ? (
                        m.textValue
                      ) : (
                        <CountUp
                          end={m.value!}
                          decimals={m.decimals}
                          prefix={m.prefix}
                          suffix={m.suffix}
                        />
                      )}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                      {m.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
}
