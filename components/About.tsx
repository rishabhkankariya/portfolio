import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaCode, FaPaintBrush, FaLaptopCode, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="flex items-center">
      <div className="max-w-6xl w-full mx-4 sm:mx-6 md:mx-8 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-3 sm:mb-4 tracking-wider">
          ABOUT.
        </h2>
        <hr className="w-full border-color border-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 sm:mt-12 md:mt-16 items-center">
          <div>
            <div className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed sm:leading-relaxed mb-6 sm:mb-8 tracking-wide space-y-4 sm:space-y-6">
              <p>
                I am a B.Tech Computer Science and Engineering student at MIT-ADT University and serve as the Technical Secretary at the Zone of Engineering Innovators (ZEN).
              </p>

              <p>
                Currently, I am exploring and building DevOps pipelines, containerized applications, cloud architectures (AWS), and automation scripts with Terraform, Docker, and Kubernetes.
              </p>

              <p>
                I focus on deploying scalable solutions, automating configurations, and learning modern cloud technologies. I am always open to collaborations, internships, and open-source contributions.
              </p>
            </div>
            <Link
              href="#connect"
              className="shimmer-button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold uppercase tracking-wider inline-flex gap-2 items-center justify-center w-full sm:w-auto text-(--text-color) mb-8 md:mb-0"
            >
              <span className="relative z-10">LET'S CONNECT</span>
              <FaEnvelope size={20} className="sm:w-6 sm:h-6 relative z-10" />
            </Link>
          </div>
          <div className="flex justify-center items-center w-full max-w-md mx-auto md:max-w-none">
            <div className="relative w-full aspect-square md:w-[28rem] md:h-[28rem] p-4 bg-transparent border-color border-4 rounded-lg">
              <Image
                src="/images/developer.svg"
                alt="Developer Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>

        {/* Services / What I'm Doing Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 tracking-wide text-(--primary-color)">
            WHAT I'M DOING
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="skill-card-shadow rounded-lg border-color border-3 p-6 flex gap-4 items-start transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-(--base-color) group" data-cursor="hover">
              <div className="text-(--primary-color) group-hover:text-white flex-shrink-0 mt-1 transition-colors duration-200">
                <FaCode size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-(--text-color) group-hover:text-white transition-colors duration-200">Web Development</h4>
                <p className="text-sm opacity-80 leading-relaxed text-(--text-color) group-hover:text-white transition-colors duration-200">Creating fast, responsive, and clean websites with modern tech.</p>
              </div>
            </div>

            <div className="skill-card-shadow rounded-lg border-color border-3 p-6 flex gap-4 items-start transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-(--base-color) group" data-cursor="hover">
              <div className="text-(--primary-color) group-hover:text-white flex-shrink-0 mt-1 transition-colors duration-200">
                <FaPaintBrush size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-(--text-color) group-hover:text-white transition-colors duration-200">UI/UX Design</h4>
                <p className="text-sm opacity-80 leading-relaxed text-(--text-color) group-hover:text-white transition-colors duration-200">Designing simple, sleek, and user-focused interfaces.</p>
              </div>
            </div>

            <div className="skill-card-shadow rounded-lg border-color border-3 p-6 flex gap-4 items-start transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-(--base-color) group" data-cursor="hover">
              <div className="text-(--primary-color) group-hover:text-white flex-shrink-0 mt-1 transition-colors duration-200">
                <FaLaptopCode size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-(--text-color) group-hover:text-white transition-colors duration-200">Software Development</h4>
                <p className="text-sm opacity-80 leading-relaxed text-(--text-color) group-hover:text-white transition-colors duration-200">Building smart solutions with clean and scalable code.</p>
              </div>
            </div>

            <div className="skill-card-shadow rounded-lg border-color border-3 p-6 flex gap-4 items-start transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-(--base-color) group" data-cursor="hover">
              <div className="text-(--primary-color) group-hover:text-white flex-shrink-0 mt-1 transition-colors duration-200">
                <FaTools size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-(--text-color) group-hover:text-white transition-colors duration-200">DevOps Enthusiast</h4>
                <p className="text-sm opacity-80 leading-relaxed text-(--text-color) group-hover:text-white transition-colors duration-200">Exploring cloud, automation, and CI/CD with a passion for scalable systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
