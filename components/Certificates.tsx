"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const certificates = [
  {
    title: "Thinking Machines E-Coaching",
    desc: "Java and J2EE programming certification course.",
    badge: "Java & J2EE",
    img: "/images/thinking.jpg",
    link: "https://drive.google.com/file/d/156JPFx61TJmEXnEH0qEEfbamS8Hycdzz/view?usp=sharing",
  },
  {
    title: "Manal Softtech Pvt Ltd",
    desc: "Basic HTML5, CSS3, JS, jQuery, Bootstrap programming.",
    badge: "Web Dev",
    img: "/images/manal.jpg",
    link: "https://drive.google.com/file/d/1hZtA6uDwsp2A91cg51OXiWAWXD2rbuGc/view?usp=sharing",
  },
  {
    title: "Programmers Point Ujjain",
    desc: "Comprehensive foundation in C and C++ programming.",
    badge: "C/C++",
    img: "/images/Programmer.jpg",
    link: "https://drive.google.com/file/d/15JEl24wPIXKRYrziA7nnb-nTPet1Ow6W/view?usp=sharing",
  },
  {
    title: "Allsoft Infotech Pvt Ltd",
    desc: "Advanced HTML5, CSS3, JS, and Bootstrap training.",
    badge: "Web Dev",
    img: "/images/all.jpg",
    link: "https://drive.google.com/file/d/1cEu65xtP2JRD9CA3xdmw1kwh-J0NvUjr/view?usp=drive_link",
  },
  {
    title: "UNXT by Unnati Foundation",
    desc: "Soft Skill Development Program and communication training.",
    badge: "Soft Skills",
    img: "/images/unati.jpg",
    link: "https://drive.google.com/file/d/1bzrFaiXsjOe9S1SOKKDdB6sRqTflEOiu/view?usp=sharing",
  },
  {
    title: "DevOps 2-Hour Workshop",
    desc: "Participation Certificate – CoreXTech.",
    badge: "DevOps",
    img: "/images/corextech.png",
    link: "https://drive.google.com/file/d/1Y4Y5-EUqoZHpP14EMLq8ql7F19nh66WX/view?usp=sharing",
  },
  {
    title: "AI For Engineers - 2 days",
    desc: "AI workshop certificate from Outskill.",
    badge: "GenAI",
    img: "/images/GenAi.png",
    link: "https://drive.google.com/file/d/1xWBzRHetCM5WsO9XC9XLnuIzaJ1zdrSz/view?usp=sharing",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[--bg-color]">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          CERTIFICATES.
        </h2>
        <hr className="w-full border-color border-2" />

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group project-card-shadow border-color border-3 rounded-lg overflow-hidden flex flex-col justify-between"
              data-cursor="hover"
            >
              <Link href={cert.link} target="_blank" className="flex flex-col h-full">
                <div className="relative h-48 w-full border-b-2 border-color overflow-hidden bg-(--bg-color)">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-(--bg-color) border-2 border-color rounded-sm text-xs font-mono font-bold px-2 py-0.5 shadow-sm text-(--text-color) cert-badge">
                    {cert.badge}
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-1 leading-tight text-(--text-color)">
                      {cert.title}
                    </h3>
                    <p className="text-xs opacity-75 mt-1 leading-relaxed text-(--text-color)">
                      {cert.desc}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-bold text-(--primary-color) underline group-hover:text-(--accent-pink) transition-colors self-start">
                    View Certificate →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
