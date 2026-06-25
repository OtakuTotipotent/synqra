import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import InteractiveDemo from "./components/InteractiveDemo";
import IntegrationsCatalog from "./components/IntegrationsCatalog";
import Footer from "./components/Footer";
import { Check, ShieldAlert, Zap, Building } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Dynamic Header */}
      <Header />

      <main className="flex-1 bg-slate-950 text-slate-100 selection:bg-indigo-500/35 selection:text-white">
        {/* Hero Section with Interactive Orbital Graph */}
        <Hero />

        {/* Bento Grid Feature List */}
        <BentoGrid />

        {/* Interactive AI playground demo */}
        <InteractiveDemo />

        {/* Filterable integrations catalog showing 24+ services */}
        <IntegrationsCatalog />

        {/* Pricing Tiers Section */}
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/40 border border-indigo-500/20 px-3 py-1 rounded-full">
                Fair & Simple Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
                Flexible Pricing Built For Any Scale.
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Choose the level of automation that fits your workflow. Start free, scale as your digital footprint expands.
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              
              {/* Plan 1: Individual Autopilot */}
              <div className="glass-panel border-slate-900 rounded-3xl p-8 flex flex-col justify-between relative group hover:border-slate-800 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-violet-400" />
                        Autopilot Pro
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">For power users and freelancers.</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-bold uppercase">
                      Popular
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">$15</span>
                    <span className="text-xs text-slate-400">/ user / month</span>
                  </div>

                  <div className="h-[1px] bg-slate-900 w-full" />

                  <ul className="space-y-3.5 text-xs text-slate-350">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>Link up to 10 active integration nodes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>Hourly autonomous email summaries & alert checks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>Smart scheduling & conflict auto-resolutions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>Encrypt drive indexes (up to 15GB files)</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-750 text-white py-3 rounded-xl text-xs font-bold transition-all">
                    Start 14-Day Free Trial
                  </button>
                </div>
              </div>

              {/* Plan 2: Enterprise Workspace */}
              <div className="glass-panel border-indigo-500/20 bg-indigo-950/5 rounded-3xl p-8 flex flex-col justify-between relative group hover:border-indigo-500/35 transition-all duration-300 shadow-xl shadow-indigo-500/2">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full tracking-wider shadow">
                  Enterprise
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-indigo-400" />
                      Neural Workspace
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">For organizations requiring full local sovereignty.</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">$45</span>
                    <span className="text-xs text-slate-400">/ user / month</span>
                  </div>

                  <div className="h-[1px] bg-slate-900 w-full" />

                  <ul className="space-y-3.5 text-xs text-slate-350">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>Unlimited integrations (24+ prebuilt + webhooks)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>Real-time local LLM routing (zero data retention)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>Advanced financial auditing & expense export</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>Local-first indexing & custom vector databases</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-650/10">
                    Deploy Enterprise Stack
                  </button>
                </div>
              </div>

            </div>

            {/* Privacy notice box */}
            <div className="mt-12 max-w-lg mx-auto bg-slate-950 border border-slate-900 rounded-2xl p-4 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                <strong>Local Hosting Support:</strong> Subscriptions can optionally be self-hosted on your own hardware using Docker. Local models bypass commercial API fees. Contact dev support for setup keys.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Dynamic Footer */}
      <Footer />
    </>
  );
}
