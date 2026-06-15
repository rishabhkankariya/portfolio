"use client";

import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const education = [
    {
      title: "MIT ADT University",
      period: "August 2025 — June 2028",
      desc: "Bachelor of Technology - BTech, Computer Science. Focus on cloud computing, DevOps pipelines, containerized deployments, and full-stack system architectures.",
    },
    {
      title: "Govt. Ujjain Polytechnic College, Ujjain",
      period: "August 2022 — June 2025",
      desc: "Diploma in Computer Science. Gained core principles in software development, algorithm design, system programming, and team collaboration.",
    },
    {
      title: "Govt. Excellence H.S. School, Madhav Nagar, Ujjain",
      period: "April 2020 — March 2022",
      desc: "10th / Higher Secondary Science Stream. Focus on Physics, Chemistry, Mathematics, and logical problem solving.",
    },
  ];

  const work = [
    {
      title: "Technical Secretary – Zone Of Engineering Innovators",
      period: "February 2026 – Present · 5 months",
      desc: "Led website management, team task allocation, and data security implementation. Ensured efficient project execution and maintained reliable, secure digital systems for club operations.",
    },
    {
      title: "Student Member – IEEE Student Branch",
      period: "February 2026 – Present · 5 months",
      desc: "Contributing to event execution, technology-driven initiatives, and cross-functional team collaborations to promote computer science events.",
    },
    {
      title: "Cloud Computing Intern – CodeAlpha",
      period: "May 2026 – June 2026 · 2 months",
      desc: "Gained hands-on experience in cloud deployment, application hosting, and infrastructure. Designed and deployed a cloud-based Smart Bus Pass System and an AI Chatbot Platform. Worked with Azure VMs, Linux, Nginx, Cloudflare, SSL certificates, and database setups.",
    },
    {
      title: "Student Trainee – Thinking Machines",
      period: "August 2024 – October 2025 · 1 year 3 months",
      desc: "Focused on building a strong foundation in Core Java and Advanced Java (OOP, exceptions, File I/O, JDBC, servlets). Gained understanding of backend architectures, database connectivity, and clean code standards.",
    },
    {
      title: "Web Development Intern – Allsoft Infotech & Multimedia Pvt. Ltd.",
      period: "November 2024 – January 2025 · 3 months",
      desc: "Worked on front-end layouts, crafting clean and responsive HTML/CSS pages, and refining user experience to align with web standards and design thinking.",
    },
    {
      title: "Web Development Intern – Manal Softech Pvt Ltd",
      period: "May 2023 – June 2023 · 2 months",
      desc: "Designed and built responsive web interfaces using HTML, CSS, and JavaScript. Focused on structured layouts and user-friendly layouts.",
    },
    {
      title: "Student Trainee – Programmers Point Software Training Institute",
      period: "September 2022 – March 2023 · 7 months",
      desc: "Built a solid understanding of C and C++, progressing from basic syntax to arrays, pointers, OOP, and memory management.",
    },
  ];

  return (
    <section id="experience" className="bg-[--bg-color]">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          ROADMAP.
        </h2>
        <hr className="w-full border-color border-2 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-(--primary-color)">
              <FaGraduationCap size={28} />
              <h3 className="text-2xl font-bold tracking-wide">EDUCATION</h3>
            </div>
            
            <div className="relative border-l-3 border-(--primary-color) ml-4 pl-8 space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <span className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-3 border-(--primary-color) bg-(--bg-color)" />
                  <h4 className="text-xl font-bold mb-1 text-(--text-color)">{edu.title}</h4>
                  <span className="inline-block text-xs font-mono font-bold text-(--primary-color) border border-(--primary-color) px-2 py-0.5 rounded-sm mb-3">
                    {edu.period}
                  </span>
                  <p className="text-sm opacity-80 leading-relaxed text-(--text-color)">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-(--primary-color)">
              <FaBriefcase size={24} />
              <h3 className="text-2xl font-bold tracking-wide">EXPERIENCE</h3>
            </div>

            <div className="relative border-l-3 border-(--primary-color) ml-4 pl-8 space-y-12">
              {work.map((job, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <span className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-3 border-(--primary-color) bg-(--bg-color)" />
                  <h4 className="text-xl font-bold mb-1 text-(--text-color)">{job.title}</h4>
                  <span className="inline-block text-xs font-mono font-bold text-(--primary-color) border border-(--primary-color) px-2 py-0.5 rounded-sm mb-3">
                    {job.period}
                  </span>
                  <p className="text-sm opacity-80 leading-relaxed text-(--text-color)">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
