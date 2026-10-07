"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheck, FaCopy, FaSpinner, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CandyButton } from "../CandyButton";
import { RotatingStar, SquiggleUnderline } from "../GeometricShapes";

const socials = [
  {
    name: "GitHub",
    handle: "@rishabhkankariya",
    url: "https://github.com/rishabhkankariya",
    icon: <FaGithub size={22} />,
    color: "#FBBF24",
    textColor: "#1E293B",
  },
  {
    name: "LinkedIn",
    handle: "/in/rishabh-kankariya",
    url: "https://www.linkedin.com/in/rishabh-kankariya-939a34257",
    icon: <FaLinkedin size={22} />,
    color: "#38BDF8",
    textColor: "#1E293B",
  },
  {
    name: "Twitter / X",
    handle: "@rishabhkankariya",
    url: "https://x.com/rishabhkankariya",
    icon: <FaXTwitter size={20} />,
    color: "#F472B6",
    textColor: "#FFFFFF",
  },
  {
    name: "Direct Email",
    handle: "rishabhkankariya69",
    url: "mailto:rishabhkankariya53@gmail.com",
    icon: <FaEnvelope size={20} />,
    color: "#8B5CF6",
    textColor: "#FFFFFF",
  },
];

export default function Scene09Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rishabhkankariya53@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfIehg2p2gG0-7cNuoa2lSbZnUANmEy6kaXDdF6UQHBaKiqCQ/formResponse";
      const formPayload = new URLSearchParams();
      formPayload.append("emailAddress", email);
      formPayload.append("entry.154236407", name);
      formPayload.append("entry.648505000", message);

      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(),
      });

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Form error:", err);
      window.location.href = `mailto:rishabhkankariya53@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="cinematic-scene min-h-screen flex flex-col justify-between relative overflow-hidden pt-16 pb-8"
    >
      {/* Soft Geometric Violet & Amber Accent */}
      <div className="absolute bottom-10 -right-16 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#EDE9FE]/60 dark:bg-[#8B5CF6]/10 -z-10 pointer-events-none" />
      <div className="w-full max-w-6xl mx-auto space-y-12 my-auto">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-dashed border-[#1E293B]/20 dark:border-white/10 pb-6">
          <div>
            <span className="sticker-badge bg-[#F472B6] text-white mb-3">
              GET IN TOUCH
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight">
              Ready to build?
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#1E293B]/70 dark:text-[#94A3B8] max-w-md font-medium">
            Open for cloud engineering roles, DevOps automation, open-source initiatives, and technical collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-6 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[5px_5px_0px_0px_#1E293B] dark:shadow-[5px_5px_0px_0px_#F8FAFC] flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBBF24] border-2 border-[#1E293B] text-[#1E293B] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#1E293B]">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8]">
                      EMAIL ADDRESS
                    </div>
                    <div className="text-sm font-black text-[#1E293B] dark:text-white break-all font-mono">
                      rishabhkankariya53@gmail.com
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="p-2.5 px-3 rounded-full bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC] hover:bg-[#FBBF24] text-xs flex items-center gap-1.5 text-[#1E293B] dark:text-white cursor-pointer font-bold"
                  title="Copy email"
                >
                  {copiedEmail ? <FaCheck className="text-[#34D399]" size={12} /> : <FaCopy size={12} />}
                  <span className="font-mono text-[11px]">{copiedEmail ? "Copied!" : "Copy"}</span>
                </motion.button>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[5px_5px_0px_0px_#1E293B] dark:shadow-[5px_5px_0px_0px_#F8FAFC] flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#34D399] border-2 border-[#1E293B] text-[#1E293B] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#1E293B]">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8]">
                    CURRENT BASE
                  </div>
                  <div className="text-sm font-black text-[#1E293B] dark:text-white">
                    Ujjain, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((s, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, rotate: idx % 2 === 0 ? -1.5 : 1.5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                >
                  <Link
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC] hover:bg-[#FFFDF5] flex flex-col items-center justify-center text-center gap-3 group transition-all"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl border-2 border-[#1E293B] flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]"
                      style={{ backgroundColor: s.color, color: s.textColor }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <span className="text-xs font-black text-[#1E293B] dark:text-white block group-hover:text-[#8B5CF6] transition-colors">
                        {s.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] block truncate max-w-[120px]">
                        {s.handle}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Playful Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border-2 border-[#1E293B] dark:border-white bg-white dark:bg-[#1E293B] shadow-[8px_8px_0px_0px_#1E293B] dark:shadow-[8px_8px_0px_0px_#F8FAFC] space-y-6">
              <div>
                <h4 className="text-2xl font-black text-[#1E293B] dark:text-white tracking-tight">
                  Direct Inquiries
                </h4>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1 font-medium">
                  Sent directly to Google Form endpoints for immediate review.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-[#34D399]/20 border-2 border-[#1E293B] text-[#1E293B] text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#1E293B]">
                  <FaCheck className="flex-shrink-0 text-[#1E293B] text-base" />
                  <span>Your message has been sent successfully. Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-[#1E293B] dark:text-white uppercase tracking-wider">
                      FULL NAME <span className="text-[#F472B6]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rishabh Kankariya"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white focus:shadow-[4px_4px_0px_0px_#8B5CF6] focus:outline-none text-sm text-[#1E293B] dark:text-white placeholder:text-[#94A3B8] transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-[#1E293B] dark:text-white uppercase tracking-wider">
                      EMAIL ADDRESS <span className="text-[#F472B6]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white focus:shadow-[4px_4px_0px_0px_#8B5CF6] focus:outline-none text-sm text-[#1E293B] dark:text-white placeholder:text-[#94A3B8] transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black text-[#1E293B] dark:text-white uppercase tracking-wider">
                    YOUR MESSAGE <span className="text-[#F472B6]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, questions, or collaboration..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white focus:shadow-[4px_4px_0px_0px_#8B5CF6] focus:outline-none text-sm text-[#1E293B] dark:text-white placeholder:text-[#94A3B8] transition-all font-medium resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <CandyButton
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <FaSpinner className="animate-spin" /> : <FaPaperPlane size={11} />}
                  >
                    {isSubmitting ? "Transmitting..." : "Transmit Message"}
                  </CandyButton>

                  <span className="text-xs font-mono font-bold text-[#64748B] dark:text-[#94A3B8]">
                    STATUS: ALL SYSTEMS OPERATIONAL ✦
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Playful Geometric Footer */}
      <footer className="w-full max-w-6xl mx-auto pt-16 border-t-2 border-dashed border-[#1E293B]/20 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#64748B] dark:text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] border border-[#1E293B] animate-pulse" />
          <span>© 2026 RISHABH KANKARIYA. PLAYFUL GEOMETRIC.</span>
        </div>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] dark:shadow-[2px_2px_0px_0px_#F8FAFC] hover:bg-[#FBBF24] hover:text-[#1E293B] text-[#1E293B] dark:text-white transition-colors cursor-pointer"
        >
          <span>RETURN TO TOP</span>
          <FaArrowUp size={11} />
        </motion.button>
      </footer>
    </section>
  );
}
