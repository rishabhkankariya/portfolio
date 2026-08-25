"use client";

import Image from "next/image";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";
import { Tilt } from "./motion-primitives/Tilt";

const skillCategories = [
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
      { name: "Terraform", icon: "/icons/terraform.svg" },
      { name: "Linux", icon: "/icons/linux.svg" },
      { name: "ArgoCD", icon: "/icons/argocd.svg" },
      { name: "Grafana", icon: "/icons/grafana.svg" },
      { name: "Prometheus", icon: "/icons/prometheus.svg" },
    ],
  },
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Golang", icon: "/icons/golang.svg" },
    ],
  },
  {
    category: "Databases & Tooling",
    skills: [
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "Bash", icon: "/icons/bash.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
      { name: "Jenkins", icon: "/icons/jenkins.svg" },
    ],
  },
];

export default function Tools() {
  return (
    <section id="skills" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="Skills & Technologies"
          subtitle="Cloud infrastructure, container tooling, programming languages, and CI/CD pipelines"
        />

        <div className="space-y-10">
          {skillCategories.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
                <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-800 dark:text-slate-200 font-bold">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                {group.skills.map((tool, i) => (
                  <Tilt key={i} rotationFactor={5}>
                    <Spotlight
                      className="ui-card is-interactive p-5 rounded-[22px] flex flex-col items-center justify-center gap-3 group border border-(--border-color) bg-(--card-background) shadow-xs"
                    >
                      <div className="w-12 h-12 relative flex items-center justify-center p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/5 dark:border-white/5 group-hover:scale-115 transition-transform duration-300 shadow-2xs">
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={36}
                          height={36}
                          className="object-contain max-h-full max-w-full"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-amber-500 transition-colors">
                        {tool.name}
                      </span>
                    </Spotlight>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
