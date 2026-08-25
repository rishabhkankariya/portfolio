"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    desc: "Certified in OCI Core Architecture, Cloud Security, Networking, IAM Governance, and Autonomous Cloud Services. (ID: 103138957OCI25FNDCFA)",
    badge: "Oracle OCI",
    img: "/images/oracle-oci.png",
    link: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7675937&trackId=OCI25FNDCFA&key=e052811990480d8f75fc852074c87eaa29e49524",
    color: "#FBBF24",
  },
  {
    title: "Introduction to Generative AI — Google Cloud",
    desc: "Mastery in Generative AI Fundamentals, Large Language Models (LLMs), Machine Learning Concepts, AI Applications, and Responsible AI Principles.",
    badge: "Google Cloud",
    img: "/images/google-genai.png",
    link: "https://www.cloudskillsboost.google/",
    color: "#38BDF8",
  },
  {
    title: "Internal Smart India Hackathon 2025",
    desc: "Certificate of Active Participation awarded to Team PathKeepers (Rishabh Kankariya) for engineering innovative solutions at MIT-ADT University.",
    badge: "SIH 2025",
    img: "/images/smartindiahackathon.png",
    link: "/images/smartindiahackathon.png",
    color: "#34D399",
  },
  {
    title: "Cloud Computing Workshop — Techfest IIT Bombay",
    desc: "Hands-on participation certificate in Cloud Computing infrastructure, virtualization, and distributed systems conducted by Techfest, IIT Bombay.",
    badge: "IIT Bombay",
    img: "/images/techfest-iitb.png",
    link: "/images/techfest-iitb.png",
    color: "#8B5CF6",
  },
  {
    title: "GFG Python Skill Up — GeeksforGeeks",
    desc: "Mastered core Python programming, data structures, and Database Management Systems (DBMS) connectivity. (ID: 541430a8cc58ed86b9951f8ece5f5e95)",
    badge: "GeeksforGeeks",
    img: "/images/gfg-python.png",
    link: "https://www.geeksforgeeks.org/certificate/541430a8cc58ed86b9951f8ece5f5e95",
    color: "#34D399",
  },
  {
    title: "Thinking Machines E-Coaching",
    desc: "Java and J2EE programming certification course covering core architectures, OOP patterns, and JDBC.",
    badge: "Java & J2EE",
    img: "/images/thinking.jpg",
    link: "https://drive.google.com/file/d/156JPFx61TJmEXnEH0qEEfbamS8Hycdzz/view?usp=sharing",
    color: "#FBBF24",
  },
  {
    title: "DevOps Workshop — CoreXTech",
    desc: "Hands-on participation certificate in modern DevOps tooling from CoreXTech.",
    badge: "DevOps",
    img: "/images/corextech.png",
    link: "https://drive.google.com/file/d/1Y4Y5-EUqoZHpP14EMLq8ql7F19nh66WX/view?usp=sharing",
    color: "#FBBF24",
  },
  {
    title: "AI For Engineers — Outskill",
    desc: "Generative AI and modern AI engineering workshop from Outskill.",
    badge: "GenAI",
    img: "/images/GenAi.png",
    link: "https://drive.google.com/file/d/1xWBzRHetCM5WsO9XC9XLnuIzaJ1zdrSz/view?usp=sharing",
    color: "#8B5CF6",
  },
  {
    title: "Manal Softtech Pvt Ltd",
    desc: "Comprehensive HTML5, CSS3, JS, jQuery, and Bootstrap development training.",
    badge: "Web Dev",
    img: "/images/manal.jpg",
    link: "https://drive.google.com/file/d/1hZtA6uDwsp2A91cg51OXiWAWXD2rbuGc/view?usp=sharing",
    color: "#38BDF8",
  },
  {
    title: "Programmers Point Ujjain",
    desc: "Solid foundation in C and C++ programming, OOP, and data structures.",
    badge: "C/C++",
    img: "/images/Programmer.jpg",
    link: "https://drive.google.com/file/d/15JEl24wPIXKRYrziA7nnb-nTPet1Ow6W/view?usp=sharing",
    color: "#8B5CF6",
  },
  {
    title: "Allsoft Infotech Pvt Ltd",
    desc: "Advanced web layout implementation and front-end interface engineering.",
    badge: "Web Dev",
    img: "/images/all.jpg",
    link: "https://drive.google.com/file/d/1cEu65xtP2JRD9CA3xdmw1kwh-J0NvUjr/view?usp=drive_link",
    color: "#F472B6",
  },
  {
    title: "UNXT by Unnati Foundation",
    desc: "Soft Skill Development Program and professional workplace communication.",
    badge: "Soft Skills",
    img: "/images/unati.jpg",
    link: "https://drive.google.com/file/d/1bzrFaiXsjOe9S1SOKKDdB6sRqTflEOiu/view?usp=sharing",
    color: "#34D399",
  },
];

const techStack = [
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
  { name: "Terraform", icon: "/icons/terraform.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },
  { name: "ArgoCD", icon: "/icons/argocd.svg" },
  { name: "Grafana", icon: "/icons/grafana.svg" },
  { name: "Prometheus", icon: "/icons/prometheus.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Golang", icon: "/icons/golang.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Jenkins", icon: "/icons/jenkins.svg" },
];

export default function Scene07Credentials() {
  return (
    <section
      id="credentials"
      className="cinematic-scene min-h-screen flex flex-col justify-center relative overflow-hidden my-8"
    >
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-6">
          <div>
            <span className="sticker-badge bg-[#34D399] text-[#1E293B] mb-3">
              CREDENTIALS & CAPABILITIES
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight">
              Certificates & Matrix
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#1E293B]/70 dark:text-[#94A3B8] max-w-md font-medium">
            Verified industry certifications, academic courseware honors, and full technology tooling matrix.
          </p>
        </div>

        {/* Certificates Grid with Large, Clearly Visible Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="sticker-card overflow-hidden rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[6px_6px_0px_0px_#1E293B] dark:shadow-[6px_6px_0px_0px_#F8FAFC] flex flex-col justify-between h-full group"
            >
              <Link href={cert.link} target="_blank" className="flex flex-col h-full">
                {/* Large, Clearly Visible Certificate Frame */}
                <div className="relative h-56 sm:h-60 w-full border-b-2 border-[#1E293B] dark:border-white/20 overflow-hidden bg-[#FFFDF5] dark:bg-[#0F172A] p-2.5 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xs">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                    />
                  </div>

                  <div
                    className="absolute top-4 right-4 border-2 border-[#1E293B] text-[#1E293B] font-black rounded-full text-xs px-3 py-0.5 shadow-[2px_2px_0px_0px_#1E293B]"
                    style={{ backgroundColor: cert.color }}
                  >
                    ★ {cert.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-lg font-black text-[#1E293B] dark:text-white mb-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E293B]/70 dark:text-[#94A3B8] font-medium leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-dashed border-[#1E293B]/15 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#8B5CF6] dark:text-[#A78BFA]">
                    <span>VIEW CREDENTIAL</span>
                    <span className="text-base font-black">↗</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Complete Technology Matrix Pill Cloud */}
        <div className="space-y-4 pt-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8] font-black block">
            Complete Technology & Tooling Matrix
          </span>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -2, rotate: 2 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white text-xs font-mono font-bold text-[#1E293B] dark:text-white shadow-[3px_3px_0px_0px_#1E293B] dark:shadow-[3px_3px_0px_0px_#F8FAFC] hover:bg-[#FBBF24] hover:text-[#1E293B] transition-colors"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <span className="font-extrabold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
