"use client";

import { HiArrowDown } from "react-icons/hi";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="portfolio" className="flex items-center justify-center">
      <div className="px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-20 md:pb-24 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wider">
              HI! I'M RISHABH KANKARIYA
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl default-font font-bold -mt-2">
              <span className="text-(--primary-color)">|</span>Cloud & DevOps
              Explorer
            </h2>

            <div className="mt-2 md:mt-4">
              <p className="text-lg sm:text-xl md:text-2xl text-(--primary-color) tagline-font uppercase tracking-widest">
                SPECIALIZED IN
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                Automating pipelines, building cloud architectures, container orchestration, and full-stack development.
              </p>
            </div>

            <Link
              href="https://github.com/rishabhkankariya"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-button mt-4 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-md font-semibold uppercase tracking-wider flex items-center gap-2 w-fit text-(--text-color)"
            >
              <FaFileDownload size={20} className="relative z-10" />
              <span className="relative z-10">DOWNLOAD RESUME</span>
            </Link>
          </div>

          <div className="flex justify-center items-center order-first md:order-last">
            {/* img-fx-wrapper: all effects scoped here only */}
            <div className="img-fx-wrapper img-fx-glass-border w-64 sm:w-72 md:w-80 lg:w-[24rem] h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg border-4 border-[rgba(121,40,202,0.5)]">
              {/* Radial glow behind image */}
              <div className="img-fx-glow" />
              {/* Wireframe rings */}
              <div className="img-fx-ring" />
              <div className="img-fx-ring" />
              <div className="img-fx-ring" />
              {/* Actual image — CRT scanlines + grid grid are ::before/::after on wrapper */}
              <div className="img-fx-inner portfolio-shadow">
                <Image
                  className="w-full h-full object-cover"
                  src={"/images/profile_image.png"}
                  alt={"Profile Image"}
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute card-shadow rounded-md border-color border-2 p-2 right-1/2 -bottom-4 animate-bounce cursor-pointer hidden md:block">
          <HiArrowDown size={32} />
        </div>
      </div>
    </section>
  );
}
