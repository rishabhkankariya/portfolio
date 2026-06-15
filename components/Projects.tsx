"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Smart Bus Pass System",
    description:
      "A cloud-based digital pass system featuring secure pass management, payment integration, automated PDF receipt generation, email notifications, and an admin analytics dashboard.",
    icons: [
      "@icons/react.svg",
      "@icons/javascript.svg",
      "@icons/mysql.svg",
      "@icons/aws.svg",
      "@icons/docker.svg",
    ],
    github: "https://github.com/rishabhkankariya/bus-pass-system",
    live: "https://smart-bus-pass-system.pages.dev/",
  },
  {
    name: "AI Chatbot Platform",
    description:
      "An automated chatbot platform featuring user authentication, knowledge base management, semantic search capabilities, and cloud-hosted API services.",
    icons: [
      "@icons/react.svg",
      "@icons/javascript.svg",
      "@icons/python.svg",
      "@icons/aws.svg",
      "@icons/docker.svg",
    ],
    github: "https://github.com/rishabhkankariya",
    live: "https://ai-chatbot-system-by-rishabh-kankariya.pages.dev/login",
  },
  {
    name: "ZEN Project Hub",
    description:
      "Shared code collaboration, system architecture templates, and script repository for engineering innovators across the Zone Of Engineering Innovators.",
    icons: [
      "@icons/react.svg",
      "@icons/javascript.svg",
      "@icons/mysql.svg",
    ],
    github: "https://github.com/rishabhkankariya/ZEN_Project",
    live: "",
  },
  {
    name: "Company Discovery Engine",
    description:
      "Automated web crawler, indexing parser, and pipeline discovery engine configured with GitHub Actions automated testing.",
    icons: [
      "@icons/javascript.svg",
      "@icons/mysql.svg",
      "@icons/github.svg",
    ],
    github: "https://github.com/adityarajlonkar09-commits/CDE",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[--bg-color]">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          PROJECTS.
        </h2>
        <hr className="w-full border-color border-2" />

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group project-card-shadow border-color border-3 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-200 hover:bg-(--base-color)"
            >
              <div>
                <h3 className="tagline-font font-light text-xl sm:text-2xl mb-2 sm:mb-3 text-(--text-color) group-hover:text-white transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 md:mb-8 leading-relaxed text-(--text-color) group-hover:text-white transition-colors duration-200">
                  <span className="font-bold underline text-(--primary-color) group-hover:text-white transition-colors duration-200">OVERVIEW:</span>{" "}
                  {project.description}
                </p>

                <h3 className="font-bold mb-2 sm:mb-3 underline text-sm sm:text-base text-(--text-color) group-hover:text-white transition-colors duration-200">
                  TOOLS:{" "}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.icons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon.replace("@icons", "/icons")}
                      alt="tech icon"
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group-hover:text-white group-hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 border-color rounded-md text-sm sm:text-md font-semibold text-(--text-color)"
                >
                  <span>GitHub</span>
                  <FaGithub size={18} />
                </Link>

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 shimmer-button flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-md font-semibold text-(--text-color)"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Live Link <FaExternalLinkAlt size={14} />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
