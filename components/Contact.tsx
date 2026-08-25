"use client";

import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheck, FaCopy, FaExternalLinkAlt, FaSpinner } from "react-icons/fa";
import KineticHeading from "./KineticHeading";
import { Spotlight } from "./motion-primitives/Spotlight";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rishabhkankariya69@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct POST to Google Form formResponse endpoint with exact entry IDs
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
      console.error("Form submit error:", err);
      // Fallback: trigger mailto if offline
      window.location.href = `mailto:rishabhkankariya69@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(message)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-18 border-b border-(--border-color)">
      <div className="w-full">
        <KineticHeading
          title="Contact & Collaboration"
          subtitle="Get in touch for cloud architecture, DevOps automation, or technical opportunities"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location & Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <Spotlight className="ui-card p-5 rounded-[22px] border border-(--border-color) flex items-center justify-between gap-3 bg-(--card-background)">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(245,158,11,0.35)]">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted)">Email Address</div>
                    <div className="text-sm font-bold text-(--text-color) break-all">
                      rishabhkankariya69@gmail.com
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-amber-400 hover:text-slate-950 transition-all text-xs flex items-center gap-1.5 text-(--text-muted) cursor-pointer font-semibold shadow-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-500" size={13} /> : <FaCopy size={13} />}
                  <span className="font-mono text-[11px]">{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </Spotlight>

              <Spotlight className="ui-card p-5 rounded-[22px] border border-(--border-color) flex items-center gap-4 bg-(--card-background)">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(16,185,129,0.35)]">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted)">Location</div>
                  <div className="text-sm font-bold text-(--text-color)">
                    Ujjain, Madhya Pradesh, India
                  </div>
                </div>
              </Spotlight>
            </div>

            {/* Interactive Map Card */}
            <div className="ui-card overflow-hidden w-full h-64 sm:h-72 rounded-[22px] border border-(--border-color) relative group shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49747.66911691488!2d75.75602046494713!3d23.16907220262882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2sUjjain%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1750142568651!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Column: Contact Form connected to Google Forms */}
          <div className="lg:col-span-7">
            <Spotlight className="ui-card p-6 sm:p-8 rounded-[24px] border border-(--border-color) shadow-lg space-y-6 bg-(--card-background)">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold text-(--text-color) tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-(--text-muted) mt-0.5">
                    Messages are directly submitted to Google Forms
                  </p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfIehg2p2gG0-7cNuoa2lSbZnUANmEy6kaXDdF6UQHBaKiqCQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Open in Google Forms</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
                  <FaCheck className="flex-shrink-0 text-emerald-500 text-base" />
                  <span>Your message has been sent successfully to Google Forms! Thank you for reaching out.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-(--text-color) font-mono">
                      FULL NAME <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rishabh Kankariya"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-(--border-color) focus:border-amber-400 focus:outline-none text-sm text-(--text-color) placeholder:text-(--text-muted)/50 transition-colors shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-(--text-color) font-mono">
                      EMAIL ADDRESS <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-(--border-color) focus:border-amber-400 focus:outline-none text-sm text-(--text-color) placeholder:text-(--text-muted)/50 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-(--text-color) font-mono">
                    YOUR MESSAGE <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, questions, or collaboration..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-(--border-color) focus:border-amber-400 focus:outline-none text-sm text-(--text-color) placeholder:text-(--text-muted)/50 transition-colors resize-y shadow-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide overflow-hidden transition-all duration-300 select-none cursor-pointer bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 border border-amber-300/80 shadow-[0_6px_20px_-4px_rgba(245,158,11,0.5),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:shadow-[0_8px_28px_-2px_rgba(245,158,11,0.7)] disabled:opacity-50"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" size={13} />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane size={12} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-3 text-(--text-muted) text-xs font-medium">
                    <span>Direct profiles:</span>
                    <a
                      href="https://github.com/rishabhkankariya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#181717] text-white hover:scale-110 transition-all shadow-sm"
                      title="GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rishabh-kankariya-939a34257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#0A66C2] text-white hover:scale-110 transition-all shadow-sm"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  </div>
                </div>
              </form>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
