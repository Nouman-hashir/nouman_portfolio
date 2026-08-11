import React, { useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] text-lightText rounded-t-[3rem] md:rounded-t-[4.5rem] pt-14 pb-0 px-6 md:px-12 border-t border-accentBorder/40"
    >
      <div className="max-w-6xl mx-auto mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-mutedText block mb-3">
            05 — PORTFOLIO & CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight heading-gradient">
            FEATURED PROJECTS
          </h2>
        </div>
        <p className="text-mutedText max-w-md text-base leading-relaxed">
          Explore production iOS & Android applications built with Flutter, clean architecture, real-time WebSockets, and AI integrations.
        </p>
      </div>

      {/* Sticky Stacking Cards */}
      <div className="relative">
        {PROJECTS.map((project, index) => {
          const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.04;
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
              range={[index * (1 / PROJECTS.length), 1]}
              targetScale={targetScale}
              onSelect={(p) => setSelectedProject(p)}
            />
          );
        })}
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
