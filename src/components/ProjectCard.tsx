import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onSelect,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const isLast = index === totalCards - 1;

  return (
    <div className={`flex items-start justify-center sticky top-0 ${isLast ? 'min-h-[75vh] pt-2 pb-4' : 'h-screen pt-2 pb-6'}`}>
      <motion.div
        style={{
          scale,
          top: `calc(100px + ${index * 16}px)`,
        }}
        className="relative w-full max-w-6xl bg-[#121212] border border-lightText/20 rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col justify-between"
      >
        {/* Top Header Row */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border border-lightText/30 flex items-center justify-center text-xs font-bold text-lightText">
                0{index + 1}
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
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-lightText text-lightText text-xs font-semibold uppercase tracking-wider hover:bg-lightText/10 transition-all duration-300"
              >
                LIVE PROJECT
                <ExternalLink size={14} />
              </a>
            ) : (
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-lightText/30 text-lightText/80 text-xs font-semibold uppercase tracking-wider hover:border-lightText hover:text-lightText transition-all duration-300"
              >
                VIEW DETAILS
                <Eye size={14} />
              </button>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-lightText mb-3">
            {project.title}
          </h3>

          <p className="text-mutedText text-sm sm:text-base max-w-2xl leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-lightText/15 bg-lightText/5 text-[11px] text-lightText/80 font-medium uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Image Container */}
        <div
          onClick={() => onSelect(project)}
          className="relative rounded-2xl overflow-hidden border border-lightText/15 bg-black/50 cursor-pointer group h-[220px] sm:h-[280px] md:h-[340px] w-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-xs uppercase tracking-widest text-lightText font-semibold flex items-center gap-2">
              Click to view project details →
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
