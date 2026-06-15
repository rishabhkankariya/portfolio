"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import TechnicalSkills from "@/components/Projects";
import Tools from "@/components/Skills";
import Contact from "@/components/Contact";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Loader>
      <div className="app-container flex flex-col ">
        <Header />

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto border-r-2 border-l-2"
        >
          <motion.div variants={itemVariants}>
            <Hero />
          </motion.div>
          <motion.div variants={itemVariants}>
            <About />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Experience />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Certificates />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechnicalSkills />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Tools />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Contact />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LetsConnect />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Footer />
          </motion.div>
        </motion.main>
      </div>
    </Loader>
  );
}
