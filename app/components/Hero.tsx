"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, MessageSquare, Mail, Calendar, Video, FileText, Music, Play, Layers } from "lucide-react";

// Service details for the interactive visualization
interface ServiceNode {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  summary: string;
  x: number; // percentage from center
  y: number; // percentage from center
}

export default function Hero() {
  const [activeService, setActiveService] = useState<string>("default");

  const services: ServiceNode[] = [
    {
      id: "gmail",
      name: "Gmail",
      color: "from-red-500 to-rose-600",
      icon: <Mail className="w-5 h-5 text-white" />,
      summary: "Sorts newsletters, drafts context-aware replies, and extracts action items from long threads.",
      x: 0,
      y: -95,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      color: "from-emerald-500 to-green-600",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      summary: "Filters group chat clutter, summarizes missed messages, and drafts instant responses.",
      x: 75,
      y: -60,
    },
    {
      id: "calendar",
      name: "Calendar",
      color: "from-blue-500 to-indigo-600",
      icon: <Calendar className="w-5 h-5 text-white" />,
      summary: "De-conflicts meetings, blocks focus hours, and schedules events via simple natural language.",
      x: 95,
      y: 15,
    },
    {
      id: "slack",
      name: "Slack",
      color: "from-pink-500 to-purple-600",
      icon: <Layers className="w-5 h-5 text-white" />,
      summary: "Monitors channels, highlights critical action items, and generates standup summaries.",
      x: 55,
      y: 80,
    },
    {
      id: "spotify",
      name: "Spotify",
      color: "from-green-400 to-emerald-500",
      icon: <Music className="w-5 h-5 text-white" />,
      summary: "Analyzes listening habits, suggests focus playlists based on workflow, and tracks study hours.",
      x: -55,
      y: 80,
    },
    {
      id: "youtube",
      name: "YouTube",
      color: "from-red-600 to-orange-600",
      icon: <Play className="w-5 h-5 text-white bg-transparent" />,
      summary: "Summarizes multi-hour tech tutorials, lists key lessons, and extracts step-by-step guides.",
      x: -95,
      y: 15,
    },
    {
      id: "drive",
      name: "Google Drive",
      color: "from-amber-500 to-yellow-600",
      icon: <FileText className="w-5 h-5 text-white" />,
      summary: "Indexes PDFs & sheets, answers natural language questions on your files, and cleans up folders.",
      x: -75,
      y: -60,
    },
  ];

  const getServiceInfo = () => {
    if (activeService === "default") {
      return {
        title: "Synqra Neural Core",
        desc: "Hover over any node in the orbital grid to simulate an autonomous integration workflow.",
        color: "text-violet-400 border-violet-500/20 shadow-violet-500/10",
      };
    }
    const node = services.find((s) => s.id === activeService);
    if (!node) return { title: "", desc: "", color: "" };
    return {
      title: node.name,
      desc: node.summary,
      color: `text-white border-indigo-500/30 shadow-indigo-500/20`,
    };
  };

  const activeNode = services.find((s) => s.id === activeService);

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-slate-950 flex items-center">
      {/* Background Gradients & Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Decorative gradient border top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column - Hero Text */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-indigo-500/25 bg-indigo-950/20 text-indigo-300 animate-float">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">
              Synqra Autonomous Beta is Live
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Your Entire Digital Life. <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Autonomous & Connected.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Synqra acts as the central brain for your workspace. By integrating with Gmail, Slack, WhatsApp, Drive, Spotify, and 20+ other apps, it compiles insights, sets smart reminders, drafts budgets, and automates tasks with absolute security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1.5px] shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 active:scale-95 transition-all">
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 rounded-full" />
              <span className="relative block px-8 py-4 rounded-full bg-slate-950 text-base font-bold text-white group-hover:bg-transparent transition-colors duration-300">
                Get Started Free
              </span>
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel glass-panel-hover text-base font-bold text-slate-200 hover:text-white transition-all active:scale-95">
              <span>Request Custom Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Core integrations quick preview list */}
          <div className="pt-6 border-t border-slate-900/60 max-w-lg mx-auto lg:mx-0">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Trusted connectivity across your stack
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 opacity-40 hover:opacity-75 transition-opacity duration-300">
              <span className="text-sm font-bold text-slate-300">Google Workspace</span>
              <span className="text-sm font-bold text-slate-300">Slack</span>
              <span className="text-sm font-bold text-slate-300">WhatsApp</span>
              <span className="text-sm font-bold text-slate-300">Microsoft 365</span>
              <span className="text-sm font-bold text-slate-300">Spotify</span>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive SVG Ecosystem Orbital Map */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[480px]">
          <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            
            {/* Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-slate-900/40 pointer-events-none scale-100" />
            <div className="absolute inset-0 rounded-full border border-dashed border-slate-800/40 pointer-events-none scale-75" />
            <div className="absolute inset-0 rounded-full border border-slate-950/20 pointer-events-none scale-50" />

            {/* Glowing lines dynamically connecting active node to core */}
            {activeService !== "default" && activeNode && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <linearGradient id="laser-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Connection line */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${50 + activeNode.x / 2}%`}
                  y2={`${50 + activeNode.y / 2}%`}
                  stroke="url(#laser-grad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                {/* Glowing endpoint ring */}
                <circle
                  cx={`${50 + activeNode.x / 2}%`}
                  cy={`${50 + activeNode.y / 2}%`}
                  r="24"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1.5"
                  className="animate-ping opacity-35"
                />
              </svg>
            )}

            {/* Central AI Neural Core */}
            <div 
              className={`absolute z-10 w-44 h-44 md:w-52 md:h-52 rounded-full p-[2px] transition-all duration-500 shadow-2xl bg-gradient-to-tr ${
                activeService === "default" 
                  ? "from-violet-600/30 to-indigo-600/30" 
                  : "from-indigo-500/60 to-purple-600/60"
              }`}
            >
              <div 
                className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-5 relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setActiveService("default")}
              >
                {/* Ambient glow inside */}
                <div className={`absolute inset-0 bg-radial-gradient from-violet-600/10 via-transparent to-transparent opacity-60 pointer-events-none transition-all duration-500 ${
                  activeService !== "default" ? "scale-125 bg-violet-600/20" : ""
                }`} />

                {/* Pulsing visual core */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/20 transition-all duration-300 ${
                  activeService !== "default" ? "scale-110 shadow-violet-500/50" : "animate-float"
                }`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                {/* Core Title */}
                <h3 className="mt-3 text-xs md:text-sm font-extrabold tracking-wide uppercase text-white truncate max-w-full">
                  {getServiceInfo().title}
                </h3>

                {/* Core Description */}
                <p className="mt-1 text-[10px] md:text-xs text-slate-400 font-medium leading-relaxed max-w-full line-clamp-3">
                  {getServiceInfo().desc}
                </p>
              </div>
            </div>

            {/* Floating Service Nodes */}
            {services.map((service) => {
              const isSelected = activeService === service.id;
              
              return (
                <div
                  key={service.id}
                  className="absolute z-20 transition-transform duration-300"
                  style={{
                    transform: `translate(${service.x * 1.8}px, ${service.y * 1.8}px)`,
                  }}
                >
                  <button
                    onMouseEnter={() => setActiveService(service.id)}
                    onMouseLeave={() => setActiveService("default")}
                    className={`relative w-12 h-12 rounded-full p-[1px] shadow-lg flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? "scale-115 shadow-indigo-500/35 border-transparent" 
                        : "hover:scale-110 shadow-slate-950/80 border border-slate-800"
                    } bg-slate-900/90 backdrop-blur-md`}
                    aria-label={`View integration for ${service.name}`}
                  >
                    {/* Node Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-tr ${service.color} transition-opacity duration-300 -z-10 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    
                    {/* Icon container */}
                    <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isSelected ? "bg-transparent" : "bg-slate-950"
                    }`}>
                      <div className={`transition-transform duration-300 ${isSelected ? "scale-110 text-white" : "text-slate-400 group-hover:text-white"}`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Miniature Glow ring */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full border border-indigo-400 animate-ping opacity-30" />
                    )}

                    {/* Service Name Label */}
                    <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wider text-slate-500 transition-colors duration-300 ${
                      isSelected ? "text-indigo-400" : ""
                    }`}>
                      {service.name}
                    </span>
                  </button>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
