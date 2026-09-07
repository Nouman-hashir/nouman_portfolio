import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectPreviewWindow } from './ProjectPreviewWindow';
import { ProjectModal } from './ProjectModal';
import { ChevronLeft, ChevronRight, ExternalLink, Eye, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate horizontal scroll translation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(PROJECTS.length - 1) * windowWidth]
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(
      PROJECTS.length - 1,
      Math.max(0, Math.round(latest * (PROJECTS.length - 1)))
    );
    setActiveIndex(idx);
  });

  const goToProject = (index: number) => {
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, index));
    setActiveIndex(clamped);

    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const totalScrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const target = containerTop + (clamped / (PROJECTS.length - 1)) * totalScrollHeight;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      }
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToProject(activeIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToProject(activeIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#030712] text-white border-t border-slate-800/80"
      style={{ height: `${PROJECTS.length * 100}vh` }}
    >
      {/* Sticky Full-Viewport Showcase */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-6">
        {/* Top Section Header */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between gap-4 shrink-0 pb-2 z-10 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-cyan-400">
              05 — FEATURED PROJECTS
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Sparkles size={10} />
              Horizontal Showcase
            </span>
          </div>

          {/* Navigation Controls: Arrows and Counter */}
          <div className="flex items-center gap-3">
            {/* Project Quick Jump Indicator */}
            <div className="hidden md:flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => goToProject(idx)}
                  className={`text-xs font-mono px-2 py-0.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label={`Jump to project ${idx + 1}`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            {/* Next / Previous Arrows */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 rounded-full p-1 shadow-card">
              <button
                onClick={() => goToProject(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => goToProject(activeIndex + 1)}
                disabled={activeIndex === PROJECTS.length - 1}
                aria-label="Next project"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Center: Horizontal Projects Moving Track */}
        <div className="my-auto w-full overflow-hidden py-4">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center will-change-transform"
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                style={{ width: `${windowWidth}px` }}
                className="shrink-0 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
              >
                <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
                    {/* 01 / 06 Counter */}
                    <div className="font-mono text-sm sm:text-base tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                      <span className="text-white font-semibold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-cyan-400 font-bold">/</span>
                      <span className="text-cyan-400 font-semibold">
                        {String(PROJECTS.length).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>

                    {/* Uppercase Cyan Subtitle / Category */}
                    <div className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-5">
                      {project.subtitle || project.category.toUpperCase().replace('/', '·')}
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-7">
                      {project.description}
                    </p>

                    {/* Pill Tags */}
                    <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8">
                      {(project.tags || project.tech).map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-slate-800/90 bg-slate-900/50 text-slate-300 text-xs sm:text-sm font-medium hover:border-slate-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-glow"
                        >
                          <span>Live Project</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider hover:border-cyan-400/50 hover:text-white transition-all"
                      >
                        <span>View Details</span>
                        <Eye size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Browser Preview Window with Real Project Image */}
                  <div className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center">
                    <ProjectPreviewWindow
                      project={project}
                      onSelect={(p) => setSelectedProject(p)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar: Progress line & clickable step indicator */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 shrink-0 pt-2 z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Step navigation pills */}
            <div className="flex items-center gap-2">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => goToProject(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? 'w-10 bg-cyan-400 shadow-glow'
                      : 'w-2 bg-slate-800 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to project ${idx + 1}: ${proj.title}`}
                />
              ))}
            </div>

            {/* Direction helper */}
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-mono hidden sm:inline-block">
              Scroll down to slide horizontally ({String(activeIndex + 1).padStart(2, '0')}/{String(PROJECTS.length).padStart(2, '0')}) →
            </span>
          </div>

          {/* Continuous progress track */}
          <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden mt-3">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="w-full h-full bg-gradient-to-r from-cyan-400 via-brand-400 to-brand-500 origin-left"
            />
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
