"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaMinus,
  FaExpand,
  FaCompress,
  FaFolderOpen,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaFileDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaCopy,
  FaArrowRight,
  FaUser,
  FaTerminal,
  FaTrashAlt,
  FaCode,
} from "react-icons/fa";
import {
  processPortfolioQuery,
  ChatMessage,
  QuickActionItem,
  ROOT_QUICK_ACTIONS,
} from "@/lib/portfolioChatService";

function renderActionIcon(iconName: string, size = 12) {
  switch (iconName) {
    case "projects":
      return <FaFolderOpen size={size} />;
    case "skills":
      return <FaTools size={size} />;
    case "experience":
      return <FaBriefcase size={size} />;
    case "contact":
      return <FaEnvelope size={size} />;
    case "resume":
      return <FaFileDownload size={size} />;
    case "user":
      return <FaUser size={size} />;
    case "credentials":
      return <FaGraduationCap size={size} />;
    default:
      return <FaCode size={size} />;
  }
}

export default function AiChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Position state for dragging
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  // Conversation state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      type: "TEXT",
      message:
        "Welcome! I am Rishabh Kankariya's AI Portfolio Assistant. Ask me anything about his cloud architecture, DevOps pipelines, selected projects, or professional background.",
      verified: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [quickActions, setQuickActions] = useState<QuickActionItem[]>(ROOT_QUICK_ACTIONS);
  const [inputVal, setInputVal] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize position to bottom right
  useEffect(() => {
    const updateInitialPos = () => {
      const pad = 20;
      const modalWidth = Math.min(460, window.innerWidth - 32);
      const modalHeight = Math.min(620, window.innerHeight - 100);
      setPos({
        x: Math.max(pad, window.innerWidth - modalWidth - pad),
        y: Math.max(pad, window.innerHeight - modalHeight - pad),
      });
    };
    updateInitialPos();
    window.addEventListener("resize", updateInitialPos);
    return () => window.removeEventListener("resize", updateInitialPos);
  }, []);

  // Listen for global open event (from header or command palette)
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener("open-ai-chatbot", handleOpen);
    return () => window.removeEventListener("open-ai-chatbot", handleOpen);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized, isBusy]);

  // Dragging logic
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMaximized) return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input") || target.closest("a")) return;

    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: pos.x,
      posY: pos.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isMaximized) return;
    const deltaX = e.clientX - dragStartRef.current.mouseX;
    const deltaY = e.clientY - dragStartRef.current.mouseY;

    const modalWidth = modalRef.current?.offsetWidth || 440;
    const modalHeight = modalRef.current?.offsetHeight || 600;

    const maxX = window.innerWidth - modalWidth - 10;
    const maxY = window.innerHeight - modalHeight - 10;

    const newX = Math.min(Math.max(10, dragStartRef.current.posX + deltaX), maxX);
    const newY = Math.min(Math.max(10, dragStartRef.current.posY + deltaY), maxY);

    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Send message
  const sendMessage = async (textToSend: string, actionId?: string) => {
    const query = textToSend.trim();
    if (!query && !actionId) return;

    setInputVal("");
    const userMsg: ChatMessage = {
      id: "usr_" + Date.now(),
      role: "user",
      message: actionId ? `[Action] ${query}` : query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsBusy(true);

    try {
      const history = messages.map((m) => ({ role: m.role, content: m.message }));
      const result = await processPortfolioQuery(query, actionId, history);

      const botMsg: ChatMessage = {
        id: "bot_" + Date.now(),
        role: "bot",
        type: result.type,
        message: result.message,
        data: result.data,
        sources: result.sources,
        verified: result.verified,
        navigationId: result.navigationId,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // Handle navigation event
      if (result.type === "NAVIGATION" && result.data?.path) {
        scrollToSection(result.data.path);
      }

      if (Array.isArray(result.quickActions) && result.quickActions.length > 0) {
        setQuickActions(result.quickActions);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: "bot_err_" + Date.now(),
          role: "bot",
          type: "TEXT",
          message:
            "Could not process your question at this moment. You can browse Rishabh's sections directly or try a quick action below.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsBusy(false);
    }
  };

  const handleQuickActionClick = (action: QuickActionItem) => {
    sendMessage(action.label, action.actionId);
  };

  const scrollToSection = (hash: string) => {
    if (!hash) return;
    if (hash.startsWith("#")) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (hash.endsWith(".pdf")) {
      window.open(hash, "_blank");
    }
  };

  const handleCopyEmail = (email = "rishabhkankariya69@gmail.com") => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome_reset",
        role: "bot",
        type: "TEXT",
        message:
          "Conversation restarted. Ask about Rishabh's cloud architectures, Kubernetes deployments, skills, or career milestones.",
        verified: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setQuickActions(ROOT_QUICK_ACTIONS);
  };

  return (
    <>
      {/* ── Floating Action Launcher Button (Bottom-Right) ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chatbot-fab"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#8B5CF6] text-white border-2 border-[#1E293B] dark:border-white shadow-[4px_4px_0px_0px_#1E293B] dark:shadow-[4px_4px_0px_0px_#F8FAFC] group cursor-pointer transition-all"
            aria-label="Open AI Assistant"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1E293B] text-[#FBBF24] border border-white/20">
              <FaRobot size={17} />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#34D399] border-2 border-[#1E293B] animate-pulse" />
            </div>

            <div className="flex flex-col text-left pr-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FBBF24]">
                Interactive AI
              </span>
              <span className="text-xs font-black tracking-tight leading-tight">
                Ask Rishabh's AI
              </span>
            </div>

            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <FaArrowRight size={10} />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Main Chat Modal (Draggable & Moveable) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: isMaximized ? 0 : pos.x,
              y: isMaximized ? 0 : pos.y,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9999,
              width: isMaximized ? "100vw" : "min(470px, calc(100vw - 24px))",
              height: isMinimized ? "auto" : isMaximized ? "100vh" : "min(640px, calc(100vh - 40px))",
            }}
            className={`flex flex-col bg-[#FFFDF5] dark:bg-[#0F172A] border-2 border-[#1E293B] dark:border-white rounded-2xl overflow-hidden ${
              isMaximized ? "rounded-none" : "shadow-[6px_6px_0px_0px_#1E293B] dark:shadow-[6px_6px_0px_0px_#8B5CF6]"
            } text-[#1E293B] dark:text-[#F8FAFC] select-none transition-shadow`}
          >
            {/* ── Draggable Header ── */}
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className={`flex items-center justify-between px-4 py-3 bg-[#8B5CF6] text-white border-b-2 border-[#1E293B] dark:border-white select-none ${
                isMaximized ? "cursor-default" : "cursor-move"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1E293B] text-[#FBBF24] border border-white/20 flex items-center justify-center shadow-[1px_1px_0px_0px_#1E293B]">
                  <FaRobot size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-black tracking-tight uppercase">
                      Rishabh's Portfolio AI
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold bg-[#34D399] text-[#1E293B] px-1.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E293B] animate-ping" />
                      ONLINE
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-white/80">
                    Cloud & DevOps Architecture Assistant
                  </p>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleResetChat}
                  title="Clear conversation"
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FaTrashAlt size={11} />
                </button>

                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand" : "Minimize"}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FaMinus size={10} />
                </button>

                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  title={isMaximized ? "Restore window" : "Maximize window"}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer hidden sm:flex"
                >
                  {isMaximized ? <FaCompress size={11} /> : <FaExpand size={11} />}
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="w-7 h-7 rounded-lg bg-[#F472B6] hover:bg-[#F43F5E] text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            </div>

            {/* ── Chat Messages Body ── */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-dots text-sm">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 border-2 ${
                          m.role === "user"
                            ? "bg-[#8B5CF6] text-white border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B]"
                            : "bg-[#FFFDF5] dark:bg-[#1E293B] text-[#1E293B] dark:text-[#F8FAFC] border-[#1E293B] dark:border-white shadow-[3px_3px_0px_0px_#1E293B] dark:shadow-[3px_3px_0px_0px_#38BDF8]"
                        }`}
                      >
                        {/* Bot header badge */}
                        {m.role === "bot" && (
                          <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-dashed border-[#1E293B]/20 dark:border-white/20">
                            <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#8B5CF6] dark:text-[#A78BFA]">
                              <FaRobot size={10} />
                              <span>Rishabh AI</span>
                            </span>
                            {m.verified && (
                              <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold bg-[#34D399]/20 text-[#059669] dark:text-[#34D399] px-1.5 py-0.2 rounded">
                                <FaCheck size={8} /> Verified Portfolio Record
                              </span>
                            )}
                          </div>
                        )}

                        <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-wrap">
                          {m.message}
                        </p>

                        {/* Rich Project Cards */}
                        {m.data?.projects && Array.isArray(m.data.projects) && (
                          <div className="mt-2.5 space-y-2 pt-2 border-t border-dashed border-[#1E293B]/20 dark:border-white/20">
                            {m.data.projects.slice(0, 3).map((proj: any) => (
                              <div
                                key={proj.id}
                                className="p-2.5 rounded-xl bg-white dark:bg-[#0F172A] border border-[#1E293B]/30 dark:border-white/30 text-xs space-y-1.5"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-extrabold text-[#1E293B] dark:text-white flex items-center gap-1.5">
                                    <FaFolderOpen className="text-[#8B5CF6]" size={11} />
                                    {proj.name}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FDE68A] text-[#1E293B] font-bold">
                                    {proj.category}
                                  </span>
                                </div>
                                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                                  {proj.description}
                                </p>
                                <div className="flex flex-wrap gap-1 pt-1">
                                  {proj.technologies?.slice(0, 4).map((tech: string) => (
                                    <span
                                      key={tech}
                                      className="text-[9px] font-mono bg-[#8B5CF6]/10 text-[#8B5CF6] dark:text-[#C4B5FD] px-1.5 py-0.5 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center gap-2 pt-1.5">
                                  {proj.liveUrl && (
                                    <a
                                      href={proj.liveUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8B5CF6] hover:underline"
                                    >
                                      <FaExternalLinkAlt size={9} />
                                      <span>Live Demo</span>
                                    </a>
                                  )}
                                  {proj.githubUrl && (
                                    <a
                                      href={proj.githubUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] hover:underline"
                                    >
                                      <FaGithub size={10} />
                                      <span>GitHub</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Rich Skills Table */}
                        {m.data?.categories && Array.isArray(m.data.categories) && (
                          <div className="mt-2.5 space-y-2 pt-2 border-t border-dashed border-[#1E293B]/20 dark:border-white/20">
                            {m.data.categories.slice(0, 4).map((cat: any) => (
                              <div key={cat.name} className="space-y-1">
                                <span className="text-[10px] font-mono font-bold uppercase text-[#8B5CF6] dark:text-[#A78BFA] flex items-center gap-1">
                                  <FaTools size={9} />
                                  {cat.name}
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {cat.skills?.map((s: string) => (
                                    <span
                                      key={s}
                                      className="text-[10px] bg-white dark:bg-[#0F172A] border border-[#1E293B]/20 dark:border-white/20 px-1.5 py-0.5 rounded font-mono font-medium"
                                    >
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Rich Experience Roles */}
                        {m.data?.roles && Array.isArray(m.data.roles) && (
                          <div className="mt-2.5 space-y-2 pt-2 border-t border-dashed border-[#1E293B]/20 dark:border-white/20">
                            {m.data.roles.slice(0, 3).map((r: any) => (
                              <div
                                key={r.company}
                                className="p-2 rounded-xl bg-white dark:bg-[#0F172A] border border-[#1E293B]/20 dark:border-white/20 text-xs space-y-1"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-extrabold flex items-center gap-1 text-[#1E293B] dark:text-white">
                                    <FaBriefcase size={10} className="text-[#38BDF8]" />
                                    {r.role}
                                  </span>
                                  <span className="text-[9px] font-mono text-[#64748B] dark:text-[#94A3B8]">
                                    {r.period}
                                  </span>
                                </div>
                                <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-bold">
                                  {r.company}
                                </p>
                                <p className="text-[11px] text-[#1E293B]/80 dark:text-white/80">
                                  {r.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Rich Contact Card */}
                        {m.data?.email && (
                          <div className="mt-2.5 p-2.5 rounded-xl bg-white dark:bg-[#0F172A] border border-[#1E293B]/20 dark:border-white/20 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-[#1E293B] dark:text-white flex items-center gap-1.5">
                                <FaEnvelope size={11} className="text-[#8B5CF6]" />
                                {m.data.email}
                              </span>
                              <button
                                onClick={() => handleCopyEmail(m.data.email)}
                                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#8B5CF6] text-white flex items-center gap-1 cursor-pointer hover:bg-[#7C3AED]"
                              >
                                {copiedEmail ? <FaCheck size={9} /> : <FaCopy size={9} />}
                                <span>{copiedEmail ? "Copied" : "Copy"}</span>
                              </button>
                            </div>

                            <div className="flex items-center gap-2 pt-1 border-t border-dashed border-[#1E293B]/10 dark:border-white/10">
                              <a
                                href={`mailto:${m.data.email}`}
                                className="px-2 py-1 rounded-lg bg-[#34D399] text-[#1E293B] text-[10px] font-extrabold flex items-center gap-1"
                              >
                                <FaEnvelope size={9} /> Send Email
                              </a>
                              <a
                                href="/Profile (1).pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="px-2 py-1 rounded-lg bg-[#FBBF24] text-[#1E293B] text-[10px] font-extrabold flex items-center gap-1"
                              >
                                <FaFileDownload size={9} /> Resume PDF
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Resume Card */}
                        {m.data?.downloadLabel && (
                          <div className="mt-2.5 p-2 rounded-xl bg-white dark:bg-[#0F172A] border border-[#1E293B]/20 dark:border-white/20 flex items-center justify-between">
                            <span className="text-xs font-bold flex items-center gap-1.5">
                              <FaFileDownload className="text-[#F472B6]" size={12} />
                              <span>{m.data.title || "Resume PDF"}</span>
                            </span>
                            <a
                              href={m.data.url || "/Profile (1).pdf"}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1 rounded-lg bg-[#8B5CF6] text-white text-xs font-bold flex items-center gap-1 hover:bg-[#7C3AED]"
                            >
                              <FaFileDownload size={10} />
                              <span>Download</span>
                            </a>
                          </div>
                        )}

                        {/* Section Navigation Button */}
                        {m.type === "NAVIGATION" && m.data?.path && (
                          <div className="mt-2 pt-1.5 border-t border-dashed border-[#1E293B]/20 dark:border-white/20">
                            <button
                              onClick={() => scrollToSection(m.data.path)}
                              className="w-full py-1.5 px-3 rounded-lg bg-[#FBBF24] text-[#1E293B] text-xs font-black border border-[#1E293B] flex items-center justify-center gap-1.5 hover:translate-y-[-1px] transition-transform cursor-pointer"
                            >
                              <FaArrowRight size={10} />
                              <span>Jump to {m.data.path} on page</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <span className="text-[9px] font-mono text-[#64748B] dark:text-[#94A3B8] mt-1 px-1">
                        {m.timestamp}
                      </span>
                    </div>
                  ))}

                  {/* Busy indicator */}
                  {isBusy && (
                    <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#94A3B8] p-2 bg-white/60 dark:bg-[#1E293B]/60 rounded-xl w-fit border border-[#1E293B]/10 dark:border-white/10">
                      <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
                      <span>Rishabh's AI is compiling answer...</span>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* ── Quick Action Suggestion Chips (Zero Emojis, Pure SVG Icons) ── */}
                <div className="px-3 py-2 bg-[#F8FAFC] dark:bg-[#1E293B]/50 border-t border-[#1E293B]/10 dark:border-white/10 overflow-x-auto flex gap-1.5 scrollbar-none">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickActionClick(action)}
                      disabled={isBusy}
                      className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white dark:bg-[#0F172A] border border-[#1E293B]/30 dark:border-white/30 hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10 text-[#1E293B] dark:text-[#F8FAFC] transition-all cursor-pointer shadow-[1px_1px_0px_0px_#1E293B] dark:shadow-[1px_1px_0px_0px_#8B5CF6]"
                    >
                      <span className="text-[#8B5CF6] dark:text-[#A78BFA]">
                        {renderActionIcon(action.icon, 10)}
                      </span>
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>

                {/* ── Chat Input Box ── */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(inputVal);
                  }}
                  className="p-3 bg-[#FFFDF5] dark:bg-[#0F172A] border-t-2 border-[#1E293B] dark:border-white flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Ask about projects, skills, experience, or contact..."
                      disabled={isBusy}
                      className="w-full pl-3 pr-8 py-2 text-xs sm:text-sm bg-white dark:bg-[#1E293B] border-2 border-[#1E293B] dark:border-white rounded-xl focus:outline-none focus:border-[#8B5CF6] dark:focus:border-[#A78BFA] text-[#1E293B] dark:text-white placeholder-[#64748B] dark:placeholder-[#94A3B8]"
                    />
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-[#94A3B8] pointer-events-none">
                      <FaTerminal size={11} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!inputVal.trim() || isBusy}
                    className="p-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-50 text-white border-2 border-[#1E293B] dark:border-white shadow-[2px_2px_0px_0px_#1E293B] transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer flex items-center justify-center"
                    aria-label="Send Message"
                  >
                    <FaPaperPlane size={13} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
