"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaChartLine,
} from "react-icons/fa";
import { SiAmazonroute53, SiAmazons3, SiRedis } from "react-icons/si";

export default function CloudArchitectureDiagram() {
  return (
    <div className="relative w-full h-full p-2 sm:p-3 flex flex-col items-center justify-between text-[#1E293B] dark:text-white select-none gap-2">
      {/* 1. Top Tier: Users */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B] z-10"
      >
        <FaUsers size={12} />
        <span className="text-xs font-mono font-bold">Users</span>
      </motion.div>

      {/* Down Arrow connector */}
      <div className="h-2.5 w-0.5 border-l-2 border-dashed border-[#8B5CF6]/50" />

      {/* 2. Route 53 DNS Tier */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] z-10"
      >
        <div className="w-5 h-5 rounded-md bg-[#8B5CF6]/15 border border-[#8B5CF6] flex items-center justify-center text-[#8B5CF6]">
          <SiAmazonroute53 size={11} />
        </div>
        <span className="text-xs font-mono font-bold">Route 53</span>
      </motion.div>

      {/* Down Arrow connector */}
      <div className="h-2.5 w-0.5 border-l-2 border-dashed border-[#8B5CF6]/50" />

      {/* 3. CloudFront CDN Tier */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] z-10"
      >
        <div className="w-5 h-5 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8] flex items-center justify-center text-[#38BDF8]">
          <FaGlobe size={11} />
        </div>
        <span className="text-xs font-mono font-bold">CloudFront (CDN)</span>
      </motion.div>

      {/* Down Arrow connector */}
      <div className="h-2.5 w-0.5 border-l-2 border-dashed border-[#8B5CF6]/50" />

      {/* 4. Application Load Balancer */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] z-10"
      >
        <div className="w-5 h-5 rounded-md bg-[#F472B6]/15 border border-[#F472B6] flex items-center justify-center text-[#F472B6]">
          <FaLayerGroup size={11} />
        </div>
        <span className="text-xs font-mono font-bold">Application Load Balancer</span>
      </motion.div>

      {/* Forking connector line */}
      <div className="w-3/4 h-2 border-t-2 border-l-2 border-r-2 border-dashed border-[#8B5CF6]/40 rounded-t-sm" />

      {/* 5. Compute Tier: ECS Frontend & Backend */}
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm z-10">
        {/* Backend Service */}
        <motion.div
          whileHover={{ y: -1 }}
          className="p-2.5 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#FBBF24] shadow-[2px_2px_0px_0px_#FBBF24] flex flex-col gap-1.5"
        >
          <div className="text-[10px] sm:text-xs font-mono font-black text-[#1E293B] dark:text-white flex items-center justify-between">
            <span>ECS (Backend)</span>
            <FaServer size={10} className="text-[#FBBF24]" />
          </div>
          <div className="flex gap-1 justify-center">
            <span className="px-1.5 py-0.5 rounded bg-[#FBBF24]/20 border border-[#FBBF24] text-[9px] font-mono font-bold">api-1</span>
            <span className="px-1.5 py-0.5 rounded bg-[#FBBF24]/20 border border-[#FBBF24] text-[9px] font-mono font-bold">api-2</span>
            <span className="px-1.5 py-0.5 rounded bg-[#FBBF24]/20 border border-[#FBBF24] text-[9px] font-mono font-bold">api-3</span>
          </div>
        </motion.div>

        {/* Frontend Service */}
        <motion.div
          whileHover={{ y: -1 }}
          className="p-2.5 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#38BDF8] shadow-[2px_2px_0px_0px_#38BDF8] flex flex-col gap-1.5"
        >
          <div className="text-[10px] sm:text-xs font-mono font-black text-[#1E293B] dark:text-white flex items-center justify-between">
            <span>ECS (Frontend)</span>
            <FaGlobe size={10} className="text-[#38BDF8]" />
          </div>
          <div className="flex gap-1 justify-center">
            <span className="px-1.5 py-0.5 rounded bg-[#38BDF8]/20 border border-[#38BDF8] text-[9px] font-mono font-bold">web-1</span>
            <span className="px-1.5 py-0.5 rounded bg-[#38BDF8]/20 border border-[#38BDF8] text-[9px] font-mono font-bold">web-2</span>
            <span className="px-1.5 py-0.5 rounded bg-[#38BDF8]/20 border border-[#38BDF8] text-[9px] font-mono font-bold">web-3</span>
          </div>
        </motion.div>
      </div>

      {/* Down connector line */}
      <div className="h-2 w-0.5 border-l-2 border-dashed border-[#8B5CF6]/40" />

      {/* 6. Managed Data Tier: RDS, ElastiCache & S3 */}
      <div className="w-full max-w-sm p-2 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] flex items-center justify-between gap-1.5 z-10">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#1E293B] dark:text-white">
          <FaDatabase className="text-[#38BDF8]" size={11} />
          <span>RDS</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#1E293B] dark:text-white">
          <SiRedis className="text-[#EF4444]" size={11} />
          <span>ElastiCache</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#1E293B] dark:text-white">
          <SiAmazons3 className="text-[#34D399]" size={11} />
          <span>S3 Bucket</span>
        </div>
      </div>

      {/* Down connector line */}
      <div className="h-2 w-0.5 border-l-2 border-dashed border-[#8B5CF6]/40" />

      {/* 7. Bottom Monitoring Tier: CloudWatch */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-2 px-3.5 py-1 rounded-xl bg-[#8B5CF6]/15 border-2 border-[#8B5CF6] text-[#8B5CF6] dark:text-[#A78BFA] shadow-[2px_2px_0px_0px_#8B5CF6] z-10"
      >
        <FaChartLine size={12} />
        <span className="text-xs font-mono font-black">CloudWatch (Monitoring & Logs)</span>
      </motion.div>
    </div>
  );
}
