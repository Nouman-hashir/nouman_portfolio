import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Smartphone } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C0C0C]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#141414] border border-lightText/20 rounded-3xl overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-lightText/30 flex items-center justify-center text-lightText hover:bg-lightText/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-sky-400 mb-3">
            <Smartphone size={14} />
            {project.category}
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase text-lightText mb-4">
            {project.title}
          </h2>

          <p className="text-mutedText text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-lightText/15 bg-lightText/5 text-xs text-lightText/80 font-medium uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden border border-lightText/10 mb-6 bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[500px] object-contain mx-auto"
            />
          </div>

          {project.liveUrl && (
            <div className="flex justify-end pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-lightText text-[#0C0C0C] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                View Live App <ExternalLink size={16} />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
