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
      className="relative w-[88vw] sm:w-[580px] md:w-[680px] lg:w-[740px] shrink-0 bg-[#121212] border border-lightText/20 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group/card hover:border-sky-400/50 transition-colors duration-300"
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border border-lightText/30 flex items-center justify-center text-xs font-bold text-lightText bg-white/5">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
              {project.category}
            </span>
          </div>

          {/* Live Link Button */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-lightText/60 text-lightText text-[11px] sm:text-xs font-semibold uppercase tracking-wider hover:bg-lightText hover:text-black transition-all duration-300"
            >
              <span>LIVE PROJECT</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-lightText/30 text-lightText/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider hover:border-lightText hover:text-lightText transition-all duration-300"
            >
              <span>VIEW DETAILS</span>
              <Eye size={13} />
            </button>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-lightText mb-2 sm:mb-3">
          {project.title}
        </h3>

        <p className="text-mutedText text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3 leading-relaxed mb-3 sm:mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-lightText/15 bg-lightText/5 text-[10px] sm:text-[11px] text-lightText/80 font-medium uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Image Container */}
      <div
        onClick={() => onSelect(project)}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-lightText/15 bg-black/50 cursor-pointer group h-[180px] sm:h-[230px] md:h-[270px] lg:h-[300px] w-full"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
          <span className="text-xs uppercase tracking-widest text-lightText font-semibold flex items-center gap-2">
            Click to view project details →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
