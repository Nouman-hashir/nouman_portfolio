import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Typewriter } from './Typewriter';
import { ArrowDownRight, Smartphone, Cpu, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 md:px-8 max-w-[90rem] mx-auto overflow-hidden"
    >
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-35 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_50%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      {/* Software Engineer Background Code Watermarks */}
      <div className="absolute top-24 left-6 hidden xl:block font-mono text-[11px] text-slate-500/30 select-none pointer-events-none leading-5 tracking-wide -z-10">
        <p className="text-brand-300/30">&gt; git status: branch main [synced]</p>
        <p>&gt; flutter pub get: 0 warnings</p>
        <p>&gt; dart build --target=production</p>
        <p className="text-slate-400/30">&gt; test: 48 passed, 0 failed [100%]</p>
      </div>

      <div className="absolute top-24 right-8 hidden xl:block font-mono text-[11px] text-brand-300/25 select-none pointer-events-none leading-5 tracking-tight -z-10 text-right">
        <p className="text-slate-400/30">// mobile_app_engine.dart</p>
        <p>void main() =&gt; runApp(const MobileApp());</p>
        <p>class MobileApp extends StatelessWidget &#123;</p>
        <p className="pr-3">Widget build(BuildContext ctx) &#123;</p>
        <p className="pr-6 text-brand-400/30">return MaterialApp(</p>
        <p className="pr-8">theme: AppTheme.dark,</p>
        <p className="pr-6">);</p>
        <p className="pr-3">&#125;</p>
        <p>&#125;</p>
      </div>

      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content & Typewriter */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Top Banner Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-slate-900/70 text-xs font-semibold uppercase tracking-widest text-slate-200 backdrop-blur-xl shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance & product roles
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full">
              <span className="text-brand-300 font-bold">FLUTTER</span> • DART 3.x
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider hidden sm:inline-block">
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
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black uppercase tracking-tight text-white block leading-tight">
              HI, I'M
            </span>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black uppercase tracking-tight text-gradient leading-tight min-h-[1.2em]">
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
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-300 max-w-xl mb-8"
          >
            Flutter Engineer building polished, scalable applications for <span className="text-brand-300 font-semibold">iOS & Android</span> with <span className="text-white font-bold">Clean Architecture</span>, real-time WebSockets, and <span className="text-brand-300 font-semibold">AI integration</span>.
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
              className="button-primary text-xs uppercase tracking-widest font-bold group"
            >
              Contact Me
              <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="button-secondary text-xs uppercase tracking-widest font-semibold"
            >
              View Projects
            </a>
          </motion.div>

          {/* Quick Highlight Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 max-w-lg"
          >
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block">50K+</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">App Downloads</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-brand-300 block">100%</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Flutter Focus</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-brand-300 block">iOS & Android</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Cross-Platform</span>
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
            {/* Direct Avatar Image - Clean Circular Framing without extra shade */}
            <div className="relative rounded-full overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full max-h-[440px] aspect-square object-cover rounded-full hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Orbiting Floating Glass Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 left-0 backdrop-blur-xl bg-slate-900/85 border border-brand-500/40 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-slate-200 shadow-card z-20 hover:border-brand-400 transition-colors"
            >
              <Smartphone size={16} className="text-brand-400" />
              <span>Flutter & Dart</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 -right-4 backdrop-blur-xl bg-slate-900/85 border border-brand-500/40 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-slate-200 shadow-card z-20 hover:border-brand-400 transition-colors"
            >
              <Cpu size={16} className="text-brand-300" />
              <span>AI Integration</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 left-6 backdrop-blur-xl bg-slate-900/85 border border-brand-400/40 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-slate-200 shadow-card z-20 hover:border-brand-300 transition-colors"
            >
              <Zap size={16} className="text-brand-300" />
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
        className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400"
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Smartphone size={14} className="text-brand-400" /> Cross-Platform Specialist
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
