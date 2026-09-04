import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative w-[88vw] sm:w-[580px] md:w-[680px] lg:w-[740px] shrink-0 bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-7 md:p-8 shadow-card flex flex-col justify-between overflow-hidden group/card hover:border-brand-400/60 hover:shadow-glow transition-all duration-300"
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 bg-slate-800/60">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-300 font-bold">
              {project.category}
            </span>
          </div>

          {/* Live Link Button */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-brand-500/40 bg-brand-500/10 text-brand-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider hover:bg-brand-500 hover:text-slate-950 hover:shadow-glow transition-all duration-300"
            >
              <span>LIVE PROJECT</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-200 text-[11px] sm:text-xs font-semibold uppercase tracking-wider hover:border-brand-400/60 hover:text-brand-300 hover:bg-slate-800 transition-all duration-300"
            >
              <span>VIEW DETAILS</span>
              <Eye size={13} />
            </button>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2 sm:mb-3 group-hover/card:text-brand-200 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3 leading-relaxed mb-3 sm:mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-slate-800 bg-slate-800/50 text-[10px] sm:text-[11px] text-slate-300 font-medium uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Image Container */}
      <div
        onClick={() => onSelect(project)}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 cursor-pointer group h-[180px] sm:h-[230px] md:h-[270px] lg:h-[300px] w-full"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
          <span className="text-xs uppercase tracking-widest text-brand-300 font-semibold flex items-center gap-2">
            Click to view project details →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
