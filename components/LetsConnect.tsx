"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";
import { Tilt } from "./motion-primitives/Tilt";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@rishabhkankariya",
    description: "Explore Repos & Code",
    url: "https://github.com/rishabhkankariya",
    icon: <FaGithub size={26} className="text-white" />,
    badgeBg: "bg-[#181717] text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)]",
    cardGlow: "rgba(148, 163, 184, 0.2)",
    accentText: "text-slate-900 dark:text-slate-200",
  },
  {
    name: "LinkedIn",
    handle: "/in/rishabh-kankariya",
    description: "Professional Network",
    url: "https://www.linkedin.com/in/rishabh-kankariya-939a34257",
    icon: <FaLinkedin size={26} className="text-white" />,
    badgeBg: "bg-[#0A66C2] text-white shadow-[0_4px_16px_rgba(10,102,194,0.4)]",
    cardGlow: "rgba(10, 102, 194, 0.25)",
    accentText: "text-[#0A66C2]",
  },
  {
    name: "Twitter / X",
    handle: "@rishabhkankariya",
    description: "Engineering Updates",
    url: "https://x.com/rishabhkankariya",
    icon: <FaXTwitter size={24} className="text-white" />,
    badgeBg: "bg-[#000000] text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)]",
    cardGlow: "rgba(56, 189, 248, 0.2)",
    accentText: "text-slate-900 dark:text-slate-200",
  },
  {
    name: "Email",
    handle: "rishabhkankariya53@gmail.com",
    description: "Direct Project Inquiry",
    url: "mailto:rishabhkankariya53@gmail.com",
    icon: <FaEnvelope size={24} className="text-white" />,
    badgeBg: "bg-gradient-to-br from-[#EA4335] to-[#F59E0B] text-white shadow-[0_4px_16px_rgba(245,158,11,0.4)]",
    cardGlow: "rgba(245, 158, 11, 0.25)",
    accentText: "text-amber-600 dark:text-amber-400",
  },
];

export default function LetsConnect() {
  return (
    <section id="connect" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full flex flex-col items-center">
        <KineticHeading
          title="Let's Connect"
          subtitle="Open for cloud engineering roles, collaborations, and open-source software development"
          className="w-full flex flex-col items-center text-center"
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <Tilt key={index} rotationFactor={6}>
              <Spotlight
                color={social.cardGlow}
                className="ui-card is-interactive rounded-[24px] h-full group border border-(--border-color) bg-(--card-background) shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Top Glass Highlight Rim */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 flex flex-col items-center justify-between text-center h-full gap-5"
                >
                  {/* High-Contrast Shining Icon Container */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${social.badgeBg} flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}
                  >
                    {social.icon}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-lg font-bold text-(--text-color) tracking-tight">
                      {social.name}
                    </span>
                    <span className="text-xs text-(--text-muted) font-mono break-all">
                      {social.handle}
                    </span>
                    <span className={`text-xs font-bold mt-1 ${social.accentText} flex items-center justify-center gap-1 group-hover:gap-2 transition-all`}>
                      <span>{social.description}</span>
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              </Spotlight>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
