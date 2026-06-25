"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "Interactive Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900/60 shadow-lg shadow-indigo-950/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 p-[1.5px] shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/45 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-full rounded-[10px] bg-slate-950">
              <Cpu className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            {/* Ambient light underneath */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
            Synqra
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200">
            Sign In
          </button>
          <button className="relative group overflow-hidden rounded-full p-[1.5px] transition-transform duration-300 active:scale-95 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/30">
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 rounded-full animate-spin-slow opacity-90 group-hover:opacity-100" />
            <span className="relative flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-950 text-sm font-semibold text-white group-hover:bg-transparent transition-colors duration-300">
              Launch App
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-slate-900 backdrop-blur-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-[1px] bg-slate-900 w-full" />
          <div className="flex flex-col gap-4">
            <button className="py-3 text-center text-sm font-semibold text-slate-300 hover:text-white border border-slate-800 rounded-xl hover:bg-slate-900 transition-all">
              Sign In
            </button>
            <button className="py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
