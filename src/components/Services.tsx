import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0F172A] rounded-t-[3rem] md:rounded-t-[4.5rem] pt-24 pb-28 px-6 md:px-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 block mb-3">
              04 — SERVICES & EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight heading-gradient-dark">
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
                  <span className="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-slate-900 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 md:hidden">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-1 hidden md:flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110 transition-all duration-300">
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
