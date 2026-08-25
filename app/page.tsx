"use client";

import Loader from "@/components/Loader";
import CinematicZoomSection from "@/components/CinematicZoomSection";
import Scene01Hero from "@/components/cinematic/Scene01Hero";
import Scene02Statement from "@/components/cinematic/Scene02Statement";
import Scene03About from "@/components/cinematic/Scene03About";
import Scene04Capabilities from "@/components/cinematic/Scene04Capabilities";
import Scene05Experience from "@/components/cinematic/Scene05Experience";
import Scene06Projects from "@/components/cinematic/Scene06Projects";
import Scene07Credentials from "@/components/cinematic/Scene07Credentials";
import Scene08Telemetry from "@/components/cinematic/Scene08Telemetry";
import Scene09Contact from "@/components/cinematic/Scene09Contact";

export default function Home() {
  return (
    <Loader>
      <main className="w-full relative">
        {/* 01 — Opening Hero */}
        <CinematicZoomSection isFirst>
          <Scene01Hero />
        </CinematicZoomSection>

        {/* 02 — The Philosophy Statement */}
        <CinematicZoomSection>
          <Scene02Statement />
        </CinematicZoomSection>

        {/* 03 — The Architect & Practice */}
        <CinematicZoomSection>
          <Scene03About />
        </CinematicZoomSection>

        {/* 04 — Core Disciplines */}
        <CinematicZoomSection>
          <Scene04Capabilities />
        </CinematicZoomSection>

        {/* 05 — Roadmap & Tenure */}
        <CinematicZoomSection>
          <Scene05Experience />
        </CinematicZoomSection>

        {/* 06 — Selected Works Showcase */}
        <CinematicZoomSection>
          <Scene06Projects />
        </CinematicZoomSection>

        {/* 07 — Credentials & Tech Matrix */}
        <CinematicZoomSection>
          <Scene07Credentials />
        </CinematicZoomSection>

        {/* 08 — System Telemetry */}
        <CinematicZoomSection>
          <Scene08Telemetry />
        </CinematicZoomSection>

        {/* 09 — Epilogue & Direct Contact */}
        <CinematicZoomSection isLast>
          <Scene09Contact />
        </CinematicZoomSection>
      </main>
    </Loader>
  );
}
