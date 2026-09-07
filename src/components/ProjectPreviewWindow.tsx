import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { ExternalLink, Eye, Sparkles, Smartphone, Layers } from 'lucide-react';

interface ProjectPreviewWindowProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectPreviewWindow: React.FC<ProjectPreviewWindowProps> = ({
  project,
  onSelect,
}) => {
  // Default to 'screenshot' as requested by the user
  const [viewMode, setViewMode] = useState<'screenshot' | 'illustrative'>('screenshot');

  const domain = project.previewUrl || (project.liveUrl ? new URL(project.liveUrl).hostname : `app.${project.id}.io`);
  const metricTitle = project.metricTitle || 'AI Insights';

  return (
    <div className="w-full relative group">
      {/* Outer Browser Window Frame */}
      <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-800/90 bg-[#060b13] shadow-2xl overflow-hidden transition-all duration-500 hover:border-slate-700/80">
        {/* Top Browser Chrome Bar */}
        <div className="h-12 px-4 sm:px-6 bg-[#09101d] border-b border-slate-800/80 flex items-center justify-between gap-4">
          {/* Left Window Control Dots */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 group-hover:bg-rose-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 group-hover:bg-amber-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 group-hover:bg-emerald-500/80 transition-colors" />
          </div>

          {/* Center Address Bar */}
          <div className="flex-1 max-w-xs sm:max-w-sm mx-auto">
            <div className="w-full bg-[#050a12]/90 border border-slate-800/80 rounded-full py-1 px-4 text-center font-mono text-[11px] sm:text-xs text-slate-400 truncate shadow-inner flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="truncate">{domain}</span>
            </div>
          </div>

          {/* Right Mode Toggle / Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setViewMode(viewMode === 'screenshot' ? 'illustrative' : 'screenshot')}
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-cyan-300 font-semibold px-2.5 py-1 rounded-full border border-slate-800 hover:border-slate-700 transition-colors bg-slate-900/60"
              title="Toggle preview style"
            >
              {viewMode === 'screenshot' ? (
                <>
                  <Smartphone size={11} className="text-cyan-400" />
                  <span>PROJECT IMAGE</span>
                </>
              ) : (
                <>
                  <Sparkles size={11} className="text-cyan-400" />
                  <span>ILLUSTRATIVE UI</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Browser Content Canvas */}
        <div className="relative min-h-[340px] sm:min-h-[400px] md:min-h-[460px] w-full flex items-center justify-center overflow-hidden bg-[#040810]">
          <AnimatePresence mode="wait">
            {viewMode === 'screenshot' ? (
              <motion.div
                key={`screenshot-${project.id}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => onSelect(project)}
                className="relative w-full h-full min-h-[340px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-center overflow-hidden cursor-pointer group/img"
              >
                {/* Ambient Blurred Project Backdrop */}
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
                />

                {/* Ambient Dark Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040810]/70 via-transparent to-[#040810]/30 pointer-events-none z-10" />

                {/* Primary Project Mockup Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-3 sm:p-5 md:p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[320px] sm:max-h-[380px] md:max-h-[430px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                  />
                </div>

                {/* Bottom Watermark and Details Prompt */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-5 flex items-center justify-between gap-4 opacity-90 group-hover/img:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {project.title}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">
                      • Flutter App
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 px-3 py-1 rounded-full backdrop-blur-md group-hover/img:border-cyan-400/60 group-hover/img:text-cyan-300 transition-colors">
                      <Eye size={12} />
                      <span>View Full Mockup</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`illustrative-${project.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full min-h-[340px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-between p-6 sm:p-10 select-none overflow-hidden"
              >
                {/* Ambient Radial Background Glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 35% 65%, rgba(6, 78, 99, 0.35) 0%, rgba(4, 25, 45, 0.15) 45%, transparent 75%)',
                  }}
                />

                {/* Flowing Sinusoidal Waves */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 1000 500"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`cyanWave-${project.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id={`softWave-${project.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0369a1" stopOpacity="0.1" />
                      <stop offset="60%" stopColor="#0891b2" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0 180 Q 250 140, 500 210 T 1000 170"
                    fill="none"
                    stroke={`url(#softWave-${project.id})`}
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 0 230 Q 300 200, 600 260 T 1000 210"
                    fill="none"
                    stroke="#0f3e5e"
                    strokeWidth="1"
                    opacity="0.35"
                  />
                  <path
                    d="M 0 280 C 260 330, 480 230, 720 280 C 880 315, 960 270, 1000 250"
                    fill="none"
                    stroke={`url(#cyanWave-${project.id})`}
                    strokeWidth="2.2"
                    className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                  />
                  <path
                    d="M 0 350 C 320 400, 600 310, 850 370 C 940 390, 980 370, 1000 360"
                    fill="none"
                    stroke="#0b2c45"
                    strokeWidth="1.2"
                    opacity="0.4"
                  />
                </svg>

                {/* Top-Left UI Mockup Elements */}
                <div className="absolute top-8 left-8 sm:top-10 sm:left-10 flex flex-col gap-2 z-10 pointer-events-none">
                  <div className="w-7 h-1 rounded-full bg-slate-800" />
                  <div className="w-9 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  <div className="w-5 h-1 rounded-full bg-slate-800/80" />
                </div>

                {/* Bottom-Left Watermark Text */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 z-10 select-none pointer-events-none">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800/40 tracking-tight block">
                    {project.title}
                  </span>
                </div>

                {/* Floating "AI Insights • LIVE" Card Widget */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative ml-auto my-auto z-20 w-60 sm:w-68 md:w-72 bg-[#091222]/95 border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                      {metricTitle}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 font-bold tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                      </span>
                      <span>LIVE</span>
                    </div>
                  </div>

                  <div className="my-2 sm:my-3">
                    <svg
                      viewBox="0 0 200 64"
                      className="w-full h-14 sm:h-16 overflow-visible"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id={`cardChart-${project.id}`} x1="0%" y1="0%" x2="0%" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 0,44 Q 25,46 45,28 T 90,32 T 135,16 T 175,12 T 200,14 L 200,64 L 0,64 Z"
                        fill={`url(#cardChart-${project.id})`}
                      />
                      <path
                        d="M 0,44 Q 25,46 45,28 T 90,32 T 135,16 T 175,12 T 200,14"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_0_6px_rgba(34,211,238,0.85)]"
                      />
                    </svg>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="h-1.5 w-full rounded-full bg-slate-800/90" />
                    <div className="h-1.5 w-4/5 rounded-full bg-slate-800/70" />
                    <div className="h-1.5 w-3/5 rounded-full bg-slate-800/50" />
                  </div>
                </motion.div>

                {/* Quick Expand Button */}
                <button
                  onClick={() => onSelect(project)}
                  className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-all opacity-80 hover:opacity-100"
                >
                  <Eye size={12} />
                  <span>Full View</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
