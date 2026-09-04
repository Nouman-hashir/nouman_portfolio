import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 w-full bg-slate-950/60 py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs uppercase tracking-[0.28em] font-bold text-brand-300">
            06 — EXPERIENCE & EDUCATION
          </span>
          <div className="h-[1px] flex-1 bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border border-brand-500/30 bg-brand-500/10 flex items-center justify-center text-brand-300 shadow-glow shrink-0">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white tracking-wide leading-normal py-1">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-slate-800">
              {EXPERIENCE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-6 group"
                >
                  {/* Glowing Dot */}
                  <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand-400 shadow-[0_0_10px_rgba(42,168,255,0.8)] group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-900/75 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-brand-400/50 hover:shadow-card transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
                        {item.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-brand-300 uppercase tracking-wider mb-4">
                      {item.company}
                    </p>

                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] shrink-0">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white tracking-wide leading-normal py-1">
                Education
              </h2>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-slate-800">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative pl-6 group"
                >
                  <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-900/75 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 hover:shadow-card transition-all">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-3">
                      <Calendar size={12} />
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-bold uppercase text-white mb-1">
                      {edu.institution}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {edu.degree}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
