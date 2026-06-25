"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MessageSquare, Shield, CheckCircle, Terminal, Play } from "lucide-react";

interface PromptDemo {
  id: string;
  title: string;
  shortDesc: string;
  promptText: string;
  responseHTML: React.ReactNode;
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<string>("alerts");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const demos: PromptDemo[] = [
    {
      id: "alerts",
      title: "Omni-Alert Summarizer",
      shortDesc: "Compress unread threads into a unified brief.",
      promptText: "/summarize source=slack,whatsapp,gmail limit=unread",
      responseHTML: (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-violet-400 text-xs font-bold font-mono">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>SYNTHESIS COMPLETE - 14 ACCOUNTS SCAN COMPLETED</span>
          </div>
          
          <div className="space-y-2.5">
            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">CRITICAL URGENT (Slack & Gmail)</span>
              </div>
              <p className="text-xs text-slate-200">
                Sarah requested approval on <code className="text-violet-300 font-mono">spec_draft_v3.pdf</code> before 10 AM. Client contract requires execution today.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">ACTION NEEDED (WhatsApp)</span>
              </div>
              <p className="text-xs text-slate-200">
                Team chat discussing dinner. Auto-suggested responses generated. Needs input on availability for 7:30 PM.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">UPDATES (YouTube & Spotify)</span>
              </div>
              <p className="text-xs text-slate-200">
                3 new developer streams summary compiled. Created 2-hour chill-beats queue for focus work.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "finance",
      title: "Autopilot Budget Analyst",
      shortDesc: "Extract receipts and track subscription spikes.",
      promptText: "/finance analyze_expenses date=june_2026",
      responseHTML: (
        <div className="space-y-4 animate-fade-in font-mono text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>FINANCIAL AUDIT COMPLETE</span>
          </div>

          <div className="border border-slate-850 rounded-xl p-3.5 bg-slate-900/50 space-y-3">
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-400">Total SaaS Outflow:</span>
              <span className="text-white font-bold">$384.50</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] text-rose-400">
                <span>⚠️ AWS Cloud Spike:</span>
                <span>+$87.20 (vs May)</span>
              </div>
              <div className="flex justify-between text-[11px] text-amber-400">
                <span>⚠️ Duplicate Sub:</span>
                <span>Copilot & Cursor both active</span>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-400">
                <span>💡 Action Item:</span>
                <span>Auto-decelerate dev sandbox</span>
              </div>
            </div>
            
            <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-400 text-[10px]">
              <span>Report logged in:</span>
              <span className="text-slate-200 underline">Google Sheets /Finance</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "calendar",
      title: "Calendar Coordinator",
      shortDesc: "Handle calendar de-conflicts and set reminders.",
      promptText: "/schedule resolve_conflicts date=tomorrow",
      responseHTML: (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>2 CALENDAR CONFLICTS AUTO-RESOLVED</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
              <div className="text-slate-400 text-[10px] mb-1 font-bold">1:00 PM COLLISION</div>
              <p className="text-slate-200">
                Moved <span className="text-cyan-300">Design Alignment</span> to 4:00 PM. System detected Sarah is free & auto-sent Google Meet invitation update.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
              <div className="text-slate-400 text-[10px] mb-1 font-bold">SMART ACTION LOGGED</div>
              <p className="text-slate-200">
                Created Microsoft To-Do task: <span className="text-cyan-300">"Prepare pitch slides for Client Call"</span>. Auto-blocked 9:00 AM - 10:30 AM as focus time on Google Calendar.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "documents",
      title: "Document Searcher",
      shortDesc: "Retrieve data across Drive & OneDrive files.",
      promptText: "/search query=\"NDA termination notice clauses\" source=drive,onedrive",
      responseHTML: (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>1 FILE MATCH FOUND IN DRIVE</span>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>PATH: Google Drive /Contracts/Synqra_NDA.pdf</span>
              <span className="text-amber-400 uppercase font-bold">SECTION 12.3</span>
            </div>
            <p className="text-xs text-slate-200 italic leading-relaxed bg-slate-950 p-2.5 rounded-lg border border-slate-900">
              "...Either party may terminate this Agreement at any time with or without cause by giving thirty (30) days prior written notice to the other party..."
            </p>
            <div className="text-[10px] font-mono text-slate-400 pt-1">
              <strong>Synqra Agent Summary:</strong> Terminating this contract requires a 30-day prior written notice.
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentDemo = demos.find((d) => d.id === activeTab) || demos[0];

  useEffect(() => {
    // Simulate terminal typing effect
    setIsTyping(true);
    setTypedText("");
    let index = 0;
    const targetText = currentDemo.promptText;
    
    const interval = setInterval(() => {
      if (index < targetText.length) {
        setTypedText(targetText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section id="demo" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4 animate-float">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive playground</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            See the Autonomous Core <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              In Action Real-Time.
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Interact with our simulated console. Select an agent operation below to witness how the neural pipeline aggregates details from your connected workspaces.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Prompt triggers */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {demos.map((demo) => {
              const isActive = demo.id === activeTab;
              return (
                <button
                  key={demo.id}
                  onClick={() => {
                    if (!isTyping) setActiveTab(demo.id);
                  }}
                  disabled={isTyping}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900 border-indigo-500/30 shadow-lg shadow-indigo-500/5 scale-[1.02]"
                      : "bg-slate-950/60 border-slate-900 hover:border-slate-800 hover:bg-slate-900/30"
                  } ${isTyping ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
                >
                  {/* Indicator Line */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-violet-500 to-indigo-500 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  
                  <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                    {demo.title}
                    {isActive && <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {demo.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Simulated Interactive Dashboard */}
          <div className="lg:col-span-8 glass-panel rounded-3xl overflow-hidden border border-slate-900 flex flex-col min-h-[400px]">
            {/* Header bar of Dashboard */}
            <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-900 font-mono text-xs">
              <div className="flex items-center gap-2.5">
                {/* Window buttons */}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-violet-400" />
                  synqra-sandbox-cli
                </span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-850 px-3 py-1 rounded-full text-indigo-400 font-bold uppercase tracking-wider text-[9px]">
                <Shield className="w-3 h-3 text-emerald-400" />
                LOCAL ENGINE ON
              </div>
            </div>

            {/* Dashboard Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-slate-950/60 font-sans">
              
              {/* Message Feed */}
              <div className="space-y-6">
                
                {/* Input Prompt message */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-slate-300 font-mono">
                    U:
                  </div>
                  <div className="flex-1 bg-slate-900/40 border border-slate-900 rounded-xl px-4 py-2.5">
                    <div className="font-mono text-xs text-slate-300 flex items-center">
                      <span className="text-indigo-400 mr-2">$</span>
                      {typedText}
                      {isTyping && <span className="w-1.5 h-4 bg-violet-400 animate-pulse ml-0.5" />}
                    </div>
                  </div>
                </div>

                {/* Simulated Thinking phase */}
                {isTyping && (
                  <div className="flex items-center gap-3 pl-12 text-slate-500 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
                    <span>Analyzing integrations database, compiling vectors...</span>
                  </div>
                )}

                {/* Output Response card */}
                {!isTyping && (
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      {currentDemo.responseHTML}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Quick-Tip bar */}
              <div className="mt-8 border-t border-slate-900/60 pt-4 flex items-center justify-between text-[11px] text-slate-500">
                <span>Secure local tunnel established</span>
                <span className="flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-slate-600" />
                  Type "/help" for system variables
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
