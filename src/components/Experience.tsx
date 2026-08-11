import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-[#0C0C0C] px-6 md:px-12 max-w-7xl mx-auto border-t border-accentBorder/30">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs uppercase tracking-widest font-semibold text-mutedText">
          06 — EXPERIENCE & EDUCATION
        </span>
        <div className="h-[1px] flex-1 bg-accentBorder/40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Work Experience */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full border border-sky-400/30 bg-sky-500/10 flex items-center justify-center text-sky-400">
              <Briefcase size={20} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-lightText tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8 pl-4 border-l-2 border-accentBorder/40">
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
                <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-sky-400 group-hover:scale-125 transition-transform" />

                <div className="bg-[#121212] border border-lightText/15 rounded-2xl p-6 sm:p-8 hover:border-lightText/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-lightText">
                      {item.role}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full border border-sky-400/20 bg-sky-500/10">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-mutedText uppercase tracking-wider mb-4">
                    {item.company}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-lightText/80 leading-relaxed">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
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
            <div className="w-10 h-10 rounded-full border border-emerald-400/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-lightText tracking-tight">
              Education
            </h2>
          </div>

          <div className="space-y-8 pl-4 border-l-2 border-accentBorder/40">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-6 group"
              >
                <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

                <div className="bg-[#121212] border border-lightText/15 rounded-2xl p-6 sm:p-8 hover:border-lightText/30 transition-all">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 mb-3">
                    <Calendar size={12} />
                    {edu.period}
                  </span>

                  <h3 className="text-xl font-bold uppercase text-lightText mb-1">
                    {edu.institution}
                  </h3>

                  <p className="text-sm text-mutedText">
                    {edu.degree}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
