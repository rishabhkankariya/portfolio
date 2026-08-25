"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaRocket, FaClock, FaTachometerAlt } from "react-icons/fa";
import { CountUp } from "../CountUp";
import { AsteriskBadge } from "../GeometricShapes";

export default function Scene08Telemetry() {
  const metrics = [
    {
      label: "High Availability SLA",
      sublabel: "Self-healing pod replicas & health checks",
      value: 99.9,
      suffix: "%",
      decimals: 1,
      icon: <FaClock size={20} />,
      color: "#FBBF24",
    },
    {
      label: "CI/CD Pipeline Speed",
      sublabel: "Automated test, build & container publish",
      value: 3,
      prefix: "< ",
      suffix: " min",
      decimals: 0,
      icon: <FaRocket size={20} />,
      color: "#34D399",
    },
    {
      label: "Security & TLS Grade",
      sublabel: "IAM least-privilege & hardened reverse proxy",
      textValue: "A+",
      icon: <FaShieldAlt size={20} />,
      color: "#38BDF8",
    },
    {
      label: "Declarative IaC Coverage",
      sublabel: "Version-controlled Terraform state sync",
      value: 100,
      suffix: "%",
      decimals: 0,
      icon: <FaServer size={20} />,
      color: "#F472B6",
    },
  ];

  return (
    <section
      id="telemetry"
      className="cinematic-scene min-h-screen flex flex-col justify-center relative overflow-hidden my-12"
    >
      {/* Soft Geometric Mint Accent */}
      <div className="absolute top-1/3 -left-16 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#D1FAE5]/60 dark:bg-[#34D399]/10 -z-10 pointer-events-none" />
      <div className="w-full max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-6">
          <div>
            <span className="sticker-badge bg-[#38BDF8] text-[#1E293B] mb-3">
              <FaTachometerAlt />
              CLOUD RELIABILITY // PRODUCTION STANDARDS
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight">
              Infrastructure Benchmarks
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#1E293B]/70 dark:text-[#94A3B8] max-w-md font-medium">
            Engineering metrics for automated continuous delivery, self-healing container workloads, and high-availability cloud deployments.
          </p>
        </div>

        {/* Telemetry Bento Shell with Playful Hard Shadow */}
        <div className="p-8 sm:p-12 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[8px_8px_0px_0px_#1E293B] dark:shadow-[8px_8px_0px_0px_#F8FAFC] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Cluster Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#34D399] border border-[#1E293B] animate-ping" />
                <span className="sticker-badge bg-[#34D399] text-[#1E293B] text-xs">
                  GITOPS & CLOUD ARCHITECTURE BENCHMARK
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1E293B] dark:text-white tracking-tight leading-snug">
                Multi-Tier Cloud Architecture & GitOps CI/CD Delivery
              </h4>

              <p className="text-sm sm:text-base text-[#1E293B]/80 dark:text-[#94A3B8] font-medium leading-relaxed">
                Architected with declarative Terraform infrastructure modules, multi-stage Docker containerization, automated GitHub Actions testing harnesses, Nginx reverse proxy load-balancing, and Prometheus-driven health telemetry for zero-downtime operations.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "AWS EC2 & S3 Infrastructure",
                  "Kubernetes & EKS Pods",
                  "Docker Multi-Stage Builds",
                  "Terraform Declarative IaC",
                  "GitHub Actions CI/CD",
                  "Nginx Reverse Proxy & TLS",
                  "Prometheus & Grafana Health",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white text-[#1E293B] dark:text-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: 4 Tactile Stat Counter Modules */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, rotate: idx % 2 === 0 ? -1.5 : 1.5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className="p-5 rounded-2xl border-2 border-[#1E293B] dark:border-white bg-[#FFFDF5] dark:bg-[#0F172A] shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC] flex flex-col justify-between gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl border-2 border-[#1E293B] text-[#1E293B] flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.icon}
                    </div>
                    <span className="text-xs font-mono font-black text-[#1E293B]/40 dark:text-white/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#1E293B] dark:text-white tracking-tight">
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
                    <div className="text-xs font-mono font-bold text-[#1E293B] dark:text-white mt-1">
                      {m.label}
                    </div>
                    <div className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] mt-0.5 leading-tight">
                      {m.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
