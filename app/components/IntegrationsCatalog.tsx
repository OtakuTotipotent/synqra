"use client";

import React, { useState, useMemo } from "react";
import { Search, Mail, MessageSquare, Calendar, Video, FileText, Music, Link2, Sparkles, FolderOpen, Layers } from "lucide-react";

interface IntegrationItem {
  name: string;
  category: "communication" | "productivity" | "workspace" | "media_calls";
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export default function IntegrationsCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const integrations: IntegrationItem[] = [
    {
      name: "Gmail",
      category: "workspace",
      desc: "Draft replies, filter spam, and auto-summarize long threads.",
      icon: <Mail className="w-5 h-5 text-red-400" />,
      color: "border-red-500/20 bg-red-950/10",
    },
    {
      name: "Outlook",
      category: "workspace",
      desc: "De-clutter inbox, sync calendar schedules, and organize tags.",
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/20 bg-blue-950/10",
    },
    {
      name: "WhatsApp",
      category: "communication",
      desc: "Extract task details, flag emergency queries, and draft replies.",
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/20 bg-emerald-950/10",
    },
    {
      name: "Telegram",
      category: "communication",
      desc: "Monitor channels, translate languages, and auto-archive spam.",
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/20 bg-cyan-950/10",
    },
    {
      name: "Slack",
      category: "communication",
      desc: "Synthesize team channels, compile standups, and track mentions.",
      icon: <Layers className="w-5 h-5 text-pink-400" />,
      color: "border-pink-500/20 bg-pink-950/10",
    },
    {
      name: "Discord",
      category: "communication",
      desc: "Filter gaming or community noise, summarize alerts, track tasks.",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-500/20 bg-indigo-950/10",
    },
    {
      name: "TikTok",
      category: "communication",
      desc: "Summarize comments, scrape hot trends, and track direct orders.",
      icon: <Link2 className="w-5 h-5 text-zinc-300" />,
      color: "border-zinc-500/25 bg-zinc-950/10",
    },
    {
      name: "Instagram",
      category: "communication",
      desc: "Manage DMs, draft quick captions, and analyze engagement spikes.",
      icon: <Link2 className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/20 bg-purple-950/10",
    },
    {
      name: "Facebook",
      category: "communication",
      desc: "Parse page alerts, draft announcements, track group inquiries.",
      icon: <Link2 className="w-5 h-5 text-blue-500" />,
      color: "border-blue-600/20 bg-blue-950/10",
    },
    {
      name: "LinkedIn",
      category: "communication",
      desc: "Rewrite connections, track job updates, and draft pitch drafts.",
      icon: <Link2 className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/20 bg-sky-950/10",
    },
    {
      name: "Zoom",
      category: "media_calls",
      desc: "Transcribe meeting audio, list action steps, auto-email notes.",
      icon: <Video className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/20 bg-sky-950/10",
    },
    {
      name: "Google Meet",
      category: "media_calls",
      desc: "Analyze voice chats, write summaries, and catalog calendar follow-ups.",
      icon: <Video className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-500/20 bg-emerald-950/10",
    },
    {
      name: "Google Classroom",
      category: "media_calls",
      desc: "Log homework timelines, track task completions, file grades.",
      icon: <Video className="w-5 h-5 text-teal-400" />,
      color: "border-teal-500/20 bg-teal-950/10",
    },
    {
      name: "Microsoft To-Do",
      category: "productivity",
      desc: "Sync deadlines, add new reminders, and check complete tasks.",
      icon: <Calendar className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/20 bg-blue-950/10",
    },
    {
      name: "Google Keep Notes",
      category: "productivity",
      desc: "Transcribe notes, write outlines, sort logs, index checklist cards.",
      icon: <Calendar className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/20 bg-amber-950/10",
    },
    {
      name: "Google Tasks",
      category: "productivity",
      desc: "Sort items, sync with calendar schedules, check daily milestones.",
      icon: <Calendar className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-500/20 bg-indigo-950/10",
    },
    {
      name: "Google Calendar",
      category: "productivity",
      desc: "Resolve schedule crashes, auto-block slots, send invitations.",
      icon: <Calendar className="w-5 h-5 text-red-400" />,
      color: "border-red-500/20 bg-red-950/10",
    },
    {
      name: "Spotify",
      category: "media_calls",
      desc: "Synchronize study beats, track mood, control play queues.",
      icon: <Music className="w-5 h-5 text-green-400" />,
      color: "border-green-500/20 bg-green-950/10",
    },
    {
      name: "YouTube",
      category: "media_calls",
      desc: "Summarize multi-hour tutorials, list topics, extract code blocks.",
      icon: <Music className="w-5 h-5 text-red-500" />,
      color: "border-red-500/20 bg-red-950/10",
    },
    {
      name: "Google Drive",
      category: "workspace",
      desc: "Search document texts, index files, query data vectors.",
      icon: <FolderOpen className="w-5 h-5 text-yellow-400" />,
      color: "border-yellow-500/20 bg-yellow-950/10",
    },
    {
      name: "OneDrive",
      category: "workspace",
      desc: "Semantic text search across enterprise cloud directories.",
      icon: <FolderOpen className="w-5 h-5 text-blue-500" />,
      color: "border-blue-500/20 bg-blue-950/10",
    },
    {
      name: "Microsoft Office",
      category: "workspace",
      desc: "Summarize Word docs, structure Slides, auto-compile spreadsheets.",
      icon: <FileText className="w-5 h-5 text-orange-500" />,
      color: "border-orange-500/20 bg-orange-950/10",
    },
    {
      name: "Google Sheets",
      category: "workspace",
      desc: "Run data analysis scripts, log finances, update columns.",
      icon: <FileText className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-500/20 bg-emerald-950/10",
    },
    {
      name: "Google Docs",
      category: "workspace",
      desc: "Co-write text documents, summarize pages, check proof errors.",
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      color: "border-blue-500/20 bg-blue-950/10",
    },
    {
      name: "Google Photos",
      category: "workspace",
      desc: "Search descriptions in pictures, index labels, auto-organize albums.",
      icon: <FolderOpen className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-500/20 bg-indigo-950/10",
    },
  ];

  // Filter integrations based on search queries and category filters
  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = [
    { id: "all", name: "All Integrations" },
    { id: "workspace", name: "Workspace & Files" },
    { id: "communication", name: "Communication" },
    { id: "productivity", name: "Productivity" },
    { id: "media_calls", name: "Media & Calls" },
  ];

  return (
    <section id="integrations" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unmatched Interconnectivity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Connects With Your Whole Ecosystem.
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Synqra interfaces directly with the applications you rely on. No manual configs or APIs keys required—securely link in seconds.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2.5 bg-slate-950 p-1 border border-slate-900 rounded-2xl max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search 24+ accounts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-900 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 text-xs text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Catalogue Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredIntegrations.map((item) => (
            <div
              key={item.name}
              className={`glass-panel border-slate-900 hover:border-slate-800 rounded-2xl p-5 flex flex-col gap-4 group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/2 hover:-translate-y-0.5`}
            >
              {/* Header inside integration card */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{item.name}</h3>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    {item.category.replace("_", " & ")}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Fallback empty search results */}
          {filteredIntegrations.length === 0 && (
            <div className="col-span-full text-center py-16 border border-dashed border-slate-900 rounded-3xl">
              <p className="text-slate-500 text-sm">No integrations match your search query.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-3 text-xs text-indigo-400 font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Call to action at bottom of catalogue */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Don't see your system listed? We launch weekly connection nodes.
          </p>
          <a
            href="#"
            className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
          >
            Request custom webhook integrations
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 font-normal">
              ENTERPRISE
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
