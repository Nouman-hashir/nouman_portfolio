import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  // Split skills into 2 sets for 2 rows
  const row1 = [...SKILLS, ...SKILLS];
  const row2 = [...SKILLS].reverse().concat([...SKILLS].reverse());

  return (
    <section id="skills" className="py-20 bg-[#0C0C0C] border-y border-accentBorder/30 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-mutedText">
          02 — TECH STACK & EXPERTISE
        </h2>
        <span className="text-xs text-mutedText/60">FLUTTER • DART • AI</span>
      </div>

      {/* Row 1: Left moving */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee-left flex items-center gap-6">
          {row1.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-6 px-6 py-4 rounded-full border border-lightText/15 bg-lightText/5 whitespace-nowrap text-lg sm:text-2xl font-bold tracking-wider uppercase text-lightText/90 hover:border-sky-400/50 hover:bg-sky-500/10 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
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
              className="flex items-center gap-6 px-6 py-4 rounded-full border border-lightText/15 bg-lightText/5 whitespace-nowrap text-lg sm:text-2xl font-bold tracking-wider uppercase text-lightText/90 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
