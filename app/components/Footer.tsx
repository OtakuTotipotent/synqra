"use client";

import React from "react";
import { Cpu, MessageSquare, Sparkles } from "lucide-react";

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Links and Newsletter Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900/60">
          
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Synqra</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The autonomous digital brain connecting Gmail, WhatsApp, Slack, Spotify, and your favorite apps. Summarize workflows, budget expenses, and automate reminders.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Discord"><MessageSquare className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub"><GithubIcon /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Input Box */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              Subscribe to Neural Briefs
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Get weekly updates on new AI agents, workflow templates, and system nodes. Zero spam, unsubscribe anytime.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-indigo-500/10 active:scale-98 transition-all"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Legal and Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <span>&copy; {new Date().getFullYear()} Synqra Technologies Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-350 transition-colors">GDPR & HIPAA Compliant</a>
            <a href="#" className="hover:text-slate-350 transition-colors">System Status: Operational</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
