"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const workRoles = [
  {
    title: "CodeAlpha",
    role: "Cloud Computing Intern",
    period: "May 2026 – Jun 2026",
    desc: "Worked hands-on with cloud deployment workflows on Linux and Microsoft Azure configuring Nginx, Cloudflare, and SSL. Took Smart Bus Pass System and AI Chatbot Platform from build to live production hosting.",
    tag: "Cloud Intern",
    color: "#38BDF8",
  },
  {
    title: "Zone Of Engineering Innovators (ZEN)",
    role: "Technical Secretary",
    period: "Feb 2026 – Present",
    desc: "Spearheaded technical workflows, campus-wide engineering initiatives, and student infrastructure development.",
    tag: "Leadership",
    color: "#FBBF24",
  },
  {
    title: "Techfest, IIT Bombay",
    role: "Campus Ambassador",
    period: "Jun 2026 – Present",
    desc: "Representing Asia's largest science and technology festival, driving technical engagements and student outreach.",
    tag: "Ambassador",
    color: "#F472B6",
  },
  {
    title: "Thinking Machines E-Learning Center",
    role: "Java Trainee",
    period: "Aug 2024 – Oct 2025",
    desc: "Trained in Core and Advanced Java (OOP, JDBC, servlets, file I/O) and built backend mini-projects with database connectivity.",
    tag: "Trainee",
    color: "#8B5CF6",
  },
  {
    title: "Allsoft Infotech & Multimedia Pvt. Ltd.",
    role: "Front-End Development Intern",
    period: "Nov 2024 – Jan 2025",
    desc: "Built and debugged responsive, cross-browser web layouts with HTML/CSS, aligning front-end code with backend systems.",
    tag: "Internship",
    color: "#34D399",
  },
  {
    title: "Manal Softech Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Mar 2023 – Jun 2023",
    desc: "Built responsive websites with HTML, CSS, and JavaScript, and collaborated on backend integration and cross-browser testing.",
    tag: "Internship",
    color: "#FBBF24",
  },
  {
    title: "Programmers Point Software Training Institute",
    role: "Student Trainee",
    period: "Sep 2022 – Mar 2023",
    desc: "Built strong foundations in C and C++ pointers, memory management, and OOP through hands-on problem-solving.",
    tag: "Training",
    color: "#8B5CF6",
  },
];

const educationHistory = [
  {
    title: "MIT ADT University, Pune",
    degree: "B. Tech, Computer Science Engineering (Cloud Computing)",
    period: "Aug 2025 – Jun 2028 (Expected)",
    desc: "Maintaining CGPA: 8.70. Specializing in Cloud Computing, DevOps Automation, Microservices Architectures, and Linux Systems.",
    tag: "CGPA: 8.70",
  },
  {
    title: "Govt. Polytechnic College, Ujjain",
    degree: "Diploma, Computer Science Engineering",
    period: "Aug 2022 – Jun 2025",
    desc: "Completed with CGPA: 7.94. Built deep core competence in data structures, DBMS, computer networks, and operating systems.",
    tag: "CGPA: 7.94",
  },
];

export default function Scene05Experience() {
  return (
    <section
      id="experience"
      className="cinematic-scene min-h-screen flex flex-col justify-center relative overflow-hidden my-8"
    >
      {/* Soft Geometric Amber Pill Accent */}
      <div className="absolute bottom-10 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FEF3C7]/60 dark:bg-[#FBBF24]/10 -z-10 pointer-events-none" />
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-6">
          <div>
            <span className="sticker-badge bg-[#FBBF24] text-[#1E293B] mb-3">
              ROADMAP & EXPERIENCE
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight">
              Engineering Tenure
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#1E293B]/70 dark:text-[#94A3B8] max-w-md font-medium">
            Chronological progression across industry internships, organizational leadership, and academic degrees.
          </p>
        </div>

        {/* Dual Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Roles & Leadership Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] flex items-center justify-center shadow-[3px_3px_0px_0px_#1E293B]">
                <FaBriefcase size={18} />
              </div>
              <h4 className="text-2xl font-black text-[#1E293B] dark:text-white">Experience & Roles</h4>
            </div>

            <div className="relative border-l-4 border-dashed border-[#1E293B]/30 dark:border-white/20 ml-5 pl-6 sm:pl-8 space-y-6">
              {workRoles.map((job, idx) => (
                <div key={idx} className="relative group">
                  {/* Geometric Node Shape */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-6 w-5 h-5 rounded-full bg-[#FBBF24] border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]" />

                  <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 450, damping: 20 }}
                    className="p-6 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[5px_5px_0px_0px_#1E293B] dark:shadow-[5px_5px_0px_0px_#F8FAFC]"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h5 className="text-lg font-black text-[#1E293B] dark:text-white">
                        {job.title}
                      </h5>
                      <span
                        className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]"
                        style={{ backgroundColor: job.color, color: "#1E293B" }}
                      >
                        {job.tag}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#8B5CF6] dark:text-[#A78BFA] font-bold mb-3">
                      {job.role} • {job.period}
                    </div>

                    <p className="text-sm text-[#1E293B]/80 dark:text-[#94A3B8] font-medium leading-relaxed">
                      {job.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Journey Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#8B5CF6] text-white border-2 border-[#1E293B] flex items-center justify-center shadow-[3px_3px_0px_0px_#1E293B]">
                <FaGraduationCap size={20} />
              </div>
              <h4 className="text-2xl font-black text-[#1E293B] dark:text-white">Academic Journey</h4>
            </div>

            <div className="relative border-l-4 border-dashed border-[#1E293B]/30 dark:border-white/20 ml-5 pl-6 sm:pl-8 space-y-6">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Geometric Diamond Node Shape */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-6 w-5 h-5 rotate-45 bg-[#8B5CF6] border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]" />

                  <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 450, damping: 20 }}
                    className="p-6 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[5px_5px_0px_0px_#1E293B] dark:shadow-[5px_5px_0px_0px_#F8FAFC]"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h5 className="text-base sm:text-lg font-black text-[#1E293B] dark:text-white">
                        {edu.title}
                      </h5>
                      <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-[#34D399] text-[#1E293B] border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]">
                        {edu.tag}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#38BDF8] dark:text-[#60A5FA] font-bold mb-3">
                      {edu.degree}
                    </div>

                    <div className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8] font-bold mb-3">
                      {edu.period}
                    </div>

                    <p className="text-sm text-[#1E293B]/80 dark:text-[#94A3B8] font-medium leading-relaxed">
                      {edu.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
