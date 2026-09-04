import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#FFFFFF] text-slate-900 rounded-[3rem] md:rounded-[4.5rem] my-8 py-24 md:py-28 px-6 md:px-12 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-brand-600 block mb-3">
              04 — SERVICES & EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-950">
              WHAT I DELIVER
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base leading-relaxed">
            From initial wireframes to production deployment on Google Play and App Store, I engineer complete Flutter solutions tailored for scale.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="divide-y divide-slate-200">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="py-10 md:py-12 group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 flex items-center justify-between">
                  <span className="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-brand-600 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-300 md:hidden">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-950 group-hover:text-brand-600 group-hover:translate-x-2 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-slate-600 text-base leading-relaxed group-hover:text-slate-900 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-1 hidden md:flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
