"use client";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";

export default function Experience() {
  const education = [
    {
      title: "MIT ADT University",
      role: "Bachelor of Technology - BTech, Computer Science",
      period: "August 2025 — June 2028",
      desc: "Focus on cloud computing, DevOps pipelines, containerized deployments, and full-stack system architectures.",
      badge: "Degree",
    },
    {
      title: "Govt. Ujjain Polytechnic College, Ujjain",
      role: "Diploma in Computer Science",
      period: "August 2022 — June 2025",
      desc: "Gained core principles in software development, algorithm design, system programming, and team collaboration.",
      badge: "Diploma",
    },
    {
      title: "Govt. Excellence H.S. School, Madhav Nagar, Ujjain",
      role: "Higher Secondary Science Stream (PCM)",
      period: "April 2020 — March 2022",
      desc: "Focus on Physics, Chemistry, Mathematics, and logical problem solving.",
      badge: "High School",
    },
  ];

  const work = [
    {
      title: "Zone Of Engineering Innovators (ZEN)",
      role: "Technical Secretary",
      period: "February 2026 – Present",
      desc: "Led website management, team task allocation, and data security implementation. Ensured efficient project execution and maintained reliable digital systems.",
      badge: "Leadership",
    },
    {
      title: "CodeAlpha",
      role: "Cloud Computing Intern",
      period: "May 2026 – June 2026",
      desc: "Hands-on cloud deployment, application hosting, and infrastructure. Designed and deployed a cloud-based Smart Bus Pass System and an AI Chatbot Platform using Azure VMs, Linux, Nginx, and Docker.",
      badge: "Internship",
    },
    {
      title: "Thinking Machines",
      role: "Student Trainee",
      period: "August 2024 – October 2025",
      desc: "Built a solid foundation in Core Java and Advanced Java (OOP, exceptions, File I/O, JDBC, servlets). Gained deep understanding of backend architectures and database connectivity.",
      badge: "Training",
    },
    {
      title: "Allsoft Infotech & Multimedia Pvt. Ltd.",
      role: "Web Development Intern",
      period: "November 2024 – January 2025",
      desc: "Developed responsive front-end layouts, crafted clean HTML/CSS/JS components, and improved UX standards.",
      badge: "Internship",
    },
    {
      title: "Manal Softech Pvt Ltd",
      role: "Web Development Intern",
      period: "May 2023 – June 2023",
      desc: "Designed and built structured, mobile-friendly web interfaces using modern web fundamentals.",
      badge: "Internship",
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="Roadmap & Experience"
          subtitle="Academic journey, industry tenures, and engineering leadership"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-(--text-color)">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-xs">
                <FaGraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Education</h3>
            </div>

            <div className="relative border-l border-(--border-color) ml-4 pl-6 sm:pl-8 space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-amber-400 ring-4 ring-(--bg-color) shadow-[0_0_8px_#f59e0b]" />

                  <Spotlight className="ui-card is-interactive p-5 sm:p-6 rounded-[22px] bg-(--card-background)">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                      <h4 className="text-base font-bold text-(--text-color)">{edu.title}</h4>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-white/15 font-semibold">
                        {edu.badge}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2 font-mono">
                      {edu.role} • {edu.period}
                    </div>

                    <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed">
                      {edu.desc}
                    </p>
                  </Spotlight>
                </div>
              ))}
            </div>
          </div>

          {/* Work & Leadership Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-(--text-color)">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-xs">
                <FaBriefcase size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Experience & Roles</h3>
            </div>

            <div className="relative border-l border-(--border-color) ml-4 pl-6 sm:pl-8 space-y-6">
              {work.map((job, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-sky-500 ring-4 ring-(--bg-color) shadow-[0_0_8px_#0284c7]" />

                  <Spotlight className="ui-card is-interactive p-5 sm:p-6 rounded-[22px] bg-(--card-background)">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                      <h4 className="text-base font-bold text-(--text-color)">{job.title}</h4>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-white/15 font-semibold">
                        {job.badge}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2 font-mono">
                      {job.role} • {job.period}
                    </div>

                    <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed">
                      {job.desc}
                    </p>
                  </Spotlight>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
