"use client";

import React from "react";
import { MessageSquare, Calendar, ShieldCheck, DollarSign, Search, Music, Sparkles } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Visual Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4 animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Enterprise-Grade Features. <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Tailored For Your Daily Workflows.
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Empower your day-to-day operations with advanced AI agents that run silently, organize documents, compile data, and keep your communication channels in perfect sync.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Omni-Channel Intelligence (Col Span 2) */}
          <div className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            {/* Absolute Glow Background */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-violet-600/10 blur-3xl group-hover:bg-violet-600/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center mb-6 text-violet-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cross-Channel Message Synthesis</h3>
              <p className="text-slate-400 text-sm max-w-xl mb-6">
                Synqra acts as a central listener for your Slack, Discord, Outlook, WhatsApp, and Telegram accounts. It filters spam, extracts crucial tasks, and presents a single unified daily briefing of what actually needs your attention.
              </p>
            </div>

            {/* Simulated UI Visualizer */}
            <div className="w-full bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 font-mono text-xs text-slate-300 mt-4 shadow-2xl relative">
              <div className="absolute top-2 right-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-slate-500 font-bold uppercase">Synthesizing...</span>
              </div>
              
              <div className="flex items-start gap-2.5 border-b border-slate-900 pb-2">
                <span className="px-1.5 py-0.5 rounded bg-pink-900/30 text-pink-400 text-[10px] font-bold">Slack</span>
                <span className="text-slate-500">Sarah:</span>
                <span className="truncate">"Can we finalize the product specs by tomorrow morning?"</span>
              </div>

              <div className="flex items-start gap-2.5 border-b border-slate-900 pb-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-900/30 text-emerald-400 text-[10px] font-bold">WhatsApp</span>
                <span className="text-slate-500">David:</span>
                <span className="truncate">"Don't forget the budget needs to be uploaded to sheets today!"</span>
              </div>

              <div className="flex items-center gap-2 bg-indigo-950/20 border border-indigo-500/20 rounded-lg p-2.5 text-indigo-200">
                <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>
                  <strong>AI Daily Briefing:</strong> Finalize specs (due tomorrow) & Upload budget to Google Sheets (due today).
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Financial Autopilot (Col Span 1) */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-600/10 blur-3xl group-hover:bg-emerald-600/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6 text-emerald-400">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Expenses & Budgets</h3>
              <p className="text-slate-400 text-sm mb-6">
                Parse subscription renewals, purchase invoices, and TikTok Shop or Amazon orders. Synqra compiles everything into neat spreadsheets and signals monthly overspending risk.
              </p>
            </div>

            {/* Financial Visual Mockup */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 font-mono text-xs text-slate-300 mt-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="text-slate-500 font-bold uppercase">Budget Tracker</span>
                <span className="text-emerald-400 font-bold">$1,240.00 / Mo</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span>SaaS Apps</span>
                    <span className="text-slate-400">75%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span>Cloud Servers</span>
                    <span className="text-slate-400">45%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Autonomous Calendar Scheduling (Col Span 1) */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-600/10 blur-3xl group-hover:bg-cyan-600/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-6 text-cyan-400">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Calendar Scheduler</h3>
              <p className="text-slate-400 text-sm mb-6">
                Synqra integrates with Google Calendar and Outlook to automatically block out focus hours and settle meeting time conflicts.
              </p>
            </div>

            {/* Calendar UI Mockup */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex flex-col gap-2.5 font-mono text-xs text-slate-300 mt-4">
              <div className="flex justify-between text-[10px] text-slate-500 font-bold border-b border-slate-900 pb-1.5">
                <span>THURSDAY, JUNE 25</span>
                <span className="text-cyan-400">AUTO-OPTIMIZED</span>
              </div>
              <div className="relative border-l-2 border-slate-800 pl-3 py-0.5">
                <div className="text-[10px] text-slate-500">10:00 AM - 11:00 AM</div>
                <div className="font-bold text-white">Weekly Review (Meet)</div>
              </div>
              <div className="relative border-l-2 border-indigo-500 pl-3 py-0.5 bg-indigo-950/20 rounded-r-lg">
                <div className="text-[10px] text-indigo-400">1:00 PM - 3:00 PM</div>
                <div className="font-bold text-white">Focus Time Blocked</div>
              </div>
            </div>
          </div>

          {/* Card 4: Document Brain (Col Span 2) */}
          <div className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-amber-600/10 blur-3xl group-hover:bg-amber-600/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-6 text-amber-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multi-Drive Semantic Search</h3>
              <p className="text-slate-400 text-sm max-w-xl mb-6">
                Query PDFs, slides, spreadsheets, photos, and Word docs in Google Drive and OneDrive using simple English prompts. Synqra builds an encrypted index to locate exact data points without opening single files.
              </p>
            </div>

            {/* Document search input visualization */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 font-mono text-xs text-slate-300 mt-4">
              <div className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2">
                <Search className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span className="text-slate-300">"Check contract details for company NDA validity"</span>
              </div>
              <div className="flex gap-2 items-start bg-amber-950/20 border border-amber-500/20 rounded-lg p-2.5 text-amber-200">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Found inside NDA_Sign_2026.pdf:</strong> The NDA signed with Synqra is valid until December 31, 2029 (Section 8.1).
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Media Sync (Col Span 1) */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-rose-600/10 blur-3xl group-hover:bg-rose-600/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center mb-6 text-rose-400">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Media & Video Summaries</h3>
              <p className="text-slate-400 text-sm mb-6">
                Parse incoming podcasts, YouTube videos, and social updates from TikTok or Instagram. Extract transcripts, summarize chapters, and auto-sync tracks to work habits.
              </p>
            </div>

            {/* Video Summarization mockup */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs text-slate-300 mt-4">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold border-b border-slate-900 pb-1.5">
                <span>YOUTUBE VIDEO SUMMARY</span>
                <span className="text-rose-400">45 MIN VIDEO</span>
              </div>
              <div className="text-white font-bold leading-tight line-clamp-1">AI Agent Design Patterns (2026)</div>
              <ul className="list-disc pl-4 space-y-1.5 text-[10px] text-slate-400 mt-1">
                <li>02:30 — Tools invocation mechanisms</li>
                <li>15:10 — Context engineering limits</li>
                <li>32:45 — Multi-agent consensus logic</li>
              </ul>
            </div>
          </div>

          {/* Card 6: Privacy Shield & Security (Col Span 2) */}
          <div className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-indigo-600/10 blur-3xl group-hover:bg-indigo-600/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mb-6 text-indigo-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Privacy & Local Model Routing</h3>
              <p className="text-slate-400 text-sm max-w-xl mb-6">
                Your data is strictly yours. Synqra routes processing locally using Ollama/LM Studio or utilizes end-to-end encrypted tunnels for commercial APIs. We operate under zero data-retention policies.
              </p>
            </div>

            {/* Cryptographic encryption status line */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex items-center justify-between font-mono text-xs text-slate-300 mt-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">Data Shield Active</div>
                  <div className="text-[10px] text-slate-500">AES-256 GCM Local Database Encryption</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400">
                ZERO-LOG TUNNEL
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
