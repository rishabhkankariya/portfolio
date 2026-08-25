"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy, FaCheck, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const terminalTabs = [
  {
    id: "docker",
    label: "Docker & AWS",
    icon: <FaDocker size={15} />,
    command: "docker build -t rishabh/cloud-pass-system:v1.2 . && aws ecr get-login-password | docker login",
    output: [
      "[+] Building 4.8s (12/12) FINISHED",
      " => [internal] load build definition from Dockerfile",
      " => => transferring dockerfile: 521B",
      " => [stage-1 1/4] FROM node:20-alpine AS builder",
      " => [stage-1 2/4] COPY package*.json ./ && RUN npm ci --quiet",
      " => [stage-1 3/4] COPY . . && RUN npm run build",
      " => [stage-1 4/4] EXPOSE 8080",
      " => SUCCESS: Image tagged as rishabh/cloud-pass-system:v1.2",
      " => AWS ECR Authentication Successful. Pushed container image to us-east-1.",
    ],
  },
  {
    id: "k8s",
    label: "Kubernetes & Terraform",
    icon: <SiKubernetes size={15} />,
    command: "terraform apply -auto-approve && kubectl get pods -n production",
    output: [
      "aws_vpc.primary_vpc: Refreshing state... [id=vpc-0a82f3]",
      "aws_eks_cluster.prod_cluster: Creating...",
      "aws_eks_cluster.prod_cluster: Still creating... [30s elapsed]",
      "Apply complete! Resources: 14 added, 0 changed, 0 destroyed.",
      "",
      "NAME                                READY   STATUS    RESTARTS   AGE",
      "cloud-pass-deploy-7d98c-x9k2p      1/1     Running   0          12s",
      "ai-chatbot-system-5f67b-m4n8q      1/1     Running   0          8s",
    ],
  },
  {
    id: "cicd",
    label: "CI/CD & Automation",
    icon: <SiTerraform size={15} />,
    command: "git push origin main && gh workflow run deploy-pipeline.yml",
    output: [
      "Enumerating objects: 14, done.",
      "Writing objects: 100% (14/14), 4.2 KiB | 4.2 MiB/s, done.",
      "To github.com:rishabhkankariya/bus-pass-system.git",
      "   e8f2a1b..9c4d2e0  main -> main",
      "",
      "✓ Triggered workflow 'Deploy Cloud Architecture' (#142)",
      "✓ Step 1: Lint & Unit Tests [PASSED]",
      "✓ Step 2: Docker Image Build & Push [PASSED]",
      "✓ Step 3: Cloudflare Pages Deployment [SUCCESS]",
    ],
  },
];

export default function DevOpsTerminal() {
  const [activeTab, setActiveTab] = useState("docker");
  const [copied, setCopied] = useState(false);

  const currentTabData = terminalTabs.find((t) => t.id === activeTab) || terminalTabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTabData.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-[22px] overflow-hidden bg-[#060814] text-slate-100 font-mono border border-white/10 shadow-2xl backdrop-blur-2xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0a0f26]/90 border-b border-white/10 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
            cloud-ops ~ bash
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10">
          {terminalTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors z-10 ${
                activeTab === tab.id
                  ? "text-[#141413] font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="terminalActiveTab"
                  className="absolute inset-0 bg-amber-400 rounded-lg -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Quick Copy Command */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 px-2.5 py-1 rounded-md transition-colors bg-white/5 hover:bg-white/10 border border-white/10"
          title="Copy command"
        >
          {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
          <span className="font-sans hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-6 min-h-[210px] text-xs sm:text-sm space-y-3 leading-relaxed bg-[#060814]">
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-amber-400">⚡ rishabh@cloud-ops:~$</span>
          <span className="text-white font-mono break-all">{currentTabData.command}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-1.5 text-slate-300 font-mono"
          >
            {currentTabData.output.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.includes("SUCCESS") || line.includes("PASSED")
                    ? "text-emerald-400 font-semibold"
                    : line.includes("Building") || line.includes("Creating") || line.includes("Apply complete")
                    ? "text-amber-300 font-medium"
                    : line.includes("aws_") || line.includes("NAME")
                    ? "text-sky-300"
                    : "text-slate-300"
                }
              >
                {line}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
