import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [maxScroll, setMaxScroll] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate exact scroll distance needed for the cards to transition from left to right
  const updateScrollBounds = () => {
    if (trackRef.current) {
      const scrollWidth = trackRef.current.scrollWidth;
      const clientWidth = window.innerWidth;
      const padding = window.innerWidth < 640 ? 40 : 100;
      const diff = Math.max(0, scrollWidth - clientWidth + padding);
      setMaxScroll(diff);
    }
  };

  useEffect(() => {
    updateScrollBounds();
    const handleResize = () => updateScrollBounds();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(updateScrollBounds, 100);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, maxScroll ? -maxScroll : -(PROJECTS.length - 1) * 720]
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(
      PROJECTS.length - 1,
      Math.floor(latest * PROJECTS.length)
    );
    setActiveIndex(idx);
  });

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(PROJECTS.length - 1, index));
    const containerTop = containerRef.current.offsetTop;
    const totalScrollHeight = containerRef.current.offsetHeight - window.innerHeight;
    const scrollTarget = containerTop + (clampedIndex / (PROJECTS.length - 1)) * totalScrollHeight;

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#030712] text-white rounded-t-[3rem] md:rounded-t-[4.5rem] border-t border-slate-800/80"
      style={{ height: `${PROJECTS.length * 80}vh` }}
    >
      {/* Sticky horizontal viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-8 sm:pt-10 pb-6 px-4 sm:px-8 md:px-12">
        {/* Top Header Row */}
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 shrink-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.28em] font-bold text-brand-300">
                05 — PORTFOLIO & CASE STUDIES
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/30">
                <Sparkles size={10} />
                Horizontal Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6">
            <p className="hidden lg:block text-slate-400 text-xs sm:text-sm max-w-xs leading-relaxed">
              Scroll down to slide through projects, or use arrows to jump between them.
            </p>

            {/* Project counter & arrow navigation */}
            <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-full px-4 py-2 shadow-card">
              <span className="font-mono text-xs sm:text-sm text-brand-300 font-bold">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-slate-600">/</span>
              <span className="font-mono text-xs sm:text-sm text-slate-400">
                {String(PROJECTS.length).padStart(2, '0')}
              </span>

              <div className="w-[1px] h-4 bg-slate-800 mx-1" />

              <button
                onClick={() => scrollToCard(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollToCard(activeIndex + 1)}
                disabled={activeIndex === PROJECTS.length - 1}
                aria-label="Next project"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Center: Horizontal Project Cards Track */}
        <div className="my-auto w-full overflow-visible py-4 sm:py-6">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-6 sm:gap-8 w-max pl-2 sm:pl-6 md:pl-10"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                totalCards={PROJECTS.length}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar: Progress line & clickable step dots */}
        <div className="max-w-7xl w-full mx-auto shrink-0 pt-2 z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Clickable indicator dots */}
            <div className="flex items-center gap-2 sm:gap-3">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => scrollToCard(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? 'w-8 bg-brand-400 shadow-glow'
                      : 'w-2 bg-slate-800 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to project ${idx + 1}: ${proj.title}`}
                />
              ))}
            </div>

            {/* Direction indicator */}
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-mono hidden sm:inline-block">
              Scroll or navigate →
            </span>
          </div>

          {/* Glowing continuous progress track */}
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
