"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";
import { Tilt } from "./motion-primitives/Tilt";

const certificates = [
  {
    title: "Thinking Machines E-Coaching",
    desc: "Java and J2EE programming certification course covering core architectures and JDBC.",
    badge: "Java & J2EE",
    img: "/images/thinking.jpg",
    link: "https://drive.google.com/file/d/156JPFx61TJmEXnEH0qEEfbamS8Hycdzz/view?usp=sharing",
  },
  {
    title: "Manal Softtech Pvt Ltd",
    desc: "Comprehensive HTML5, CSS3, JS, jQuery, and Bootstrap development training.",
    badge: "Web Dev",
    img: "/images/manal.jpg",
    link: "https://drive.google.com/file/d/1hZtA6uDwsp2A91cg51OXiWAWXD2rbuGc/view?usp=sharing",
  },
  {
    title: "Programmers Point Ujjain",
    desc: "Solid foundation in C and C++ programming, OOP, and data structures.",
    badge: "C/C++",
    img: "/images/Programmer.jpg",
    link: "https://drive.google.com/file/d/15JEl24wPIXKRYrziA7nnb-nTPet1Ow6W/view?usp=sharing",
  },
  {
    title: "Allsoft Infotech Pvt Ltd",
    desc: "Advanced web layout implementation and front-end interface engineering.",
    badge: "Web Dev",
    img: "/images/all.jpg",
    link: "https://drive.google.com/file/d/1cEu65xtP2JRD9CA3xdmw1kwh-J0NvUjr/view?usp=drive_link",
  },
  {
    title: "UNXT by Unnati Foundation",
    desc: "Soft Skill Development Program and professional workplace communication.",
    badge: "Soft Skills",
    img: "/images/unati.jpg",
    link: "https://drive.google.com/file/d/1bzrFaiXsjOe9S1SOKKDdB6sRqTflEOiu/view?usp=sharing",
  },
  {
    title: "DevOps 2-Hour Workshop",
    desc: "Hands-on participation certificate in modern DevOps tooling from CoreXTech.",
    badge: "DevOps",
    img: "/images/corextech.png",
    link: "https://drive.google.com/file/d/1Y4Y5-EUqoZHpP14EMLq8ql7F19nh66WX/view?usp=sharing",
  },
  {
    title: "AI For Engineers - 2 days",
    desc: "Generative AI and modern AI engineering workshop from Outskill.",
    badge: "GenAI",
    img: "/images/GenAi.png",
    link: "https://drive.google.com/file/d/1xWBzRHetCM5WsO9XC9XLnuIzaJ1zdrSz/view?usp=sharing",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="Certificates & Credentials"
          subtitle="Verified training credentials, specialized courseware, and workshop honors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <Tilt key={index} rotationFactor={5}>
              <Spotlight className="ui-card is-interactive overflow-hidden rounded-[24px] flex flex-col justify-between h-full group border border-(--border-color) bg-(--card-background) shadow-sm">
                <Link href={cert.link} target="_blank" className="flex flex-col h-full">
                  {/* Image Container with Hover Zoom */}
                  <div className="relative h-48 w-full border-b border-(--border-color) overflow-hidden bg-slate-900">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-extrabold rounded-full text-[11px] px-3.5 py-1 shadow-md">
                      {cert.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base mb-2 leading-snug text-slate-950 dark:text-white group-hover:text-amber-500 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {cert.desc}
                      </p>
                    </div>

                    <span className="mt-5 text-xs font-bold self-start text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>View Credential</span>
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
