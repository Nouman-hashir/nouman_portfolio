import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Typewriter } from './Typewriter';
import { ArrowDownRight, Smartphone, Sparkles, Cpu, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 md:px-8 max-w-[90rem] mx-auto overflow-hidden"
    >
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content & Typewriter */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Top Banner Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 text-xs font-medium uppercase tracking-widest text-sky-300 backdrop-blur-md shadow-sm">
              <Sparkles size={14} className="text-sky-300" />
              {PERSONAL_INFO.title}
            </span>
            <span className="text-xs text-mutedText uppercase tracking-wider hidden sm:inline-block">
              • {PERSONAL_INFO.location}
            </span>
          </motion.div>

          {/* Large Hero Title & Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black uppercase tracking-tight heading-gradient block leading-tight">
              HI, I'M
            </span>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black uppercase tracking-tight heading-gradient leading-tight min-h-[1.2em]">
              <Typewriter
                words={[
                  "NOUMAN HASHIR",
                  "APP DEVELOPER",
                  "FLUTTER DEVELOPER",
                ]}
              />
            </div>
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-lightText/85 max-w-xl mb-8"
          >
            Engineers high-performance, cross-platform mobile applications for <span className="text-sky-300 font-semibold">iOS & Android</span> using <span className="text-white font-semibold">Flutter</span>, clean architecture, real-time WebSockets, and <span className="text-emerald-300 font-semibold">AI integration</span>.
          </motion.p>

          {/* Action Buttons & Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-lightText text-lightText text-xs font-semibold uppercase tracking-widest hover:bg-lightText hover:text-[#0C0C0C] transition-all duration-300 shadow-xl group"
            >
              Contact Me
              <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-lightText/20 text-lightText/80 text-xs font-semibold uppercase tracking-widest hover:border-lightText/50 hover:text-lightText hover:bg-lightText/5 transition-all"
            >
              View Projects
            </a>
          </motion.div>

          {/* Quick Highlight Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-accentBorder/30 max-w-lg"
          >
            <div>
              <span className="text-xl sm:text-2xl font-black text-lightText block">50K+</span>
              <span className="text-[11px] text-mutedText uppercase tracking-wider">App Downloads</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-sky-300 block">100%</span>
              <span className="text-[11px] text-mutedText uppercase tracking-wider">Flutter Focus</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 block">iOS & Android</span>
              <span className="text-[11px] text-mutedText uppercase tracking-wider">Cross-Platform</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Direct Unwrapped Image with Floating Orbiting Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center py-4">
            {/* Direct Avatar Image */}
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="w-full max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-700"
            />

            {/* Orbiting Floating Glass Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 left-0 backdrop-blur-xl bg-[#0C0C0C]/90 border border-sky-400/30 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-lightText shadow-2xl z-20"
            >
              <Smartphone size={16} className="text-sky-400" />
              <span>Flutter & Dart</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 -right-4 backdrop-blur-xl bg-[#0C0C0C]/90 border border-emerald-400/30 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-lightText shadow-2xl z-20"
            >
              <Cpu size={16} className="text-emerald-400" />
              <span>AI Integration</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 left-6 backdrop-blur-xl bg-[#0C0C0C]/90 border border-amber-400/30 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-lightText shadow-2xl z-20"
            >
              <Zap size={16} className="text-amber-400" />
              <span>WebSockets & APIs</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Footer Meta Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="pt-8 border-t border-accentBorder/30 flex flex-wrap items-center justify-between gap-4 text-xs text-mutedText"
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Smartphone size={14} className="text-sky-400" /> Cross-Platform Specialist
          </span>
          <span>• Telemedicine • E-Commerce • Logistics</span>
        </div>
        <div>
          Scroll to explore ↓
        </div>
      </motion.div>
    </section>
  );
};
