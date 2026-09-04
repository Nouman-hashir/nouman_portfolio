import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  // Split skills into 2 sets for 2 rows
  const row1 = [...SKILLS, ...SKILLS];
  const row2 = [...SKILLS].reverse().concat([...SKILLS].reverse());

  return (
    <section id="skills" className="py-20 bg-slate-950/50 border-y border-slate-800/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-[0.28em] font-bold text-brand-300">
          02 — TECH STACK & EXPERTISE
        </h2>
        <span className="text-xs text-slate-400 font-semibold tracking-wider">FLUTTER • DART • CLEAN ARCHITECTURE</span>
      </div>

      {/* Row 1: Left moving */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee-left flex items-center gap-6">
          {row1.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-full border border-slate-800 bg-slate-900/70 backdrop-blur-md whitespace-nowrap text-base sm:text-xl font-bold tracking-wider uppercase text-slate-200 hover:border-brand-400 hover:bg-brand-500/10 hover:text-white hover:shadow-glow transition-all duration-300"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-400 inline-block shadow-[0_0_8px_rgba(42,168,255,0.9)]" />
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right moving */}
      <div className="flex overflow-hidden py-3 mt-4">
        <div className="animate-marquee-right flex items-center gap-6">
          {row2.map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-full border border-slate-800 bg-slate-900/70 backdrop-blur-md whitespace-nowrap text-base sm:text-xl font-bold tracking-wider uppercase text-slate-200 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
