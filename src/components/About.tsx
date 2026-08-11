import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, Cpu, MapPin, Terminal, Layers } from 'lucide-react';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(start + (1 / total) * 1.5, 1);
  // High contrast base opacity (0.65 to 1.0) for crystal clear readability
  const opacity = useTransform(progress, [start, end], [0.65, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block transition-opacity text-lightText font-normal">
      {word}
    </motion.span>
  );
};

const CharacterRevealText: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.4'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-lightText flex flex-wrap gap-x-2 gap-y-1 select-text"
    >
      {words.map((word, wordIdx) => (
        <Word
          key={wordIdx}
          word={word}
          index={wordIdx}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 w-full bg-[#0C0C0C] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
        <span className="text-xs uppercase tracking-widest font-semibold text-mutedText">
          03 — ABOUT ME
        </span>
        <div className="h-[1px] flex-1 bg-accentBorder/40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Interactive Flutter IDE Code Window */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-lightText/20 bg-[#121212] p-6 shadow-2xl flex-1 flex flex-col justify-between">
            {/* Window Top Navigation Bar */}
            <div>
              <div className="flex items-center justify-between border-b border-lightText/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-sky-400 font-mono font-medium">
                  <Terminal size={14} />
                  <span>nouman_developer.dart</span>
                </div>
                <span className="text-[10px] text-mutedText font-mono uppercase tracking-wider">Dart 3.x</span>
              </div>

              {/* Code Editor Snippet */}
              <div className="font-mono text-xs sm:text-sm text-lightText/90 leading-relaxed space-y-2 overflow-x-auto">
                <p>
                  <span className="text-purple-400">class</span> <span className="text-yellow-300 font-bold">NoumanHashir</span> <span className="text-purple-400">extends</span> <span className="text-sky-300">FlutterDev</span> &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">final</span> <span className="text-sky-300">String</span> location = <span className="text-emerald-300">'Lahore, Pakistan'</span>;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">final</span> <span className="text-sky-300">List&lt;String&gt;</span> coreFocus = [
                </p>
                <p className="pl-8 text-emerald-300">'Flutter iOS & Android',</p>
                <p className="pl-8 text-emerald-300">'AI & Voice Assistant',</p>
                <p className="pl-8 text-emerald-300">'Telemedicine & Logistics',</p>
                <p className="pl-4">];</p>
                <br />
                <p className="pl-4">
                  <span className="text-blue-400">@override</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">Widget</span> buildSolution() &#123;
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">return</span> <span className="text-yellow-300">ScalableApp</span>(
                </p>
                <p className="pl-12 text-slate-300">architecture: <span className="text-emerald-300">'Clean Arch'</span>,</p>
                <p className="pl-12 text-slate-300">state: <span className="text-emerald-300">'BLoC / GetX'</span>,</p>
                <p className="pl-12 text-slate-300">payments: <span className="text-emerald-300">'Stripe / Alfalah'</span>,</p>
                <p className="pl-8">);</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="mt-6 pt-4 border-t border-lightText/10 flex items-center justify-between text-xs font-mono text-mutedText">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck size={14} /> Available for Projects
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-sky-400" /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Floating Feature Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-400/20 bg-sky-500/10 text-xs font-semibold text-sky-300">
              <Cpu size={12} /> AI Integration
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-xs font-semibold text-emerald-300">
              <Layers size={12} /> Clean Architecture
            </span>
          </div>
        </motion.div>

        {/* Right Column: High-Contrast Bio Paragraph & Highlight Stats */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight heading-gradient mb-6 md:mb-8">
              CRAFTING SCALABLE MOBILE EXPERIENCES
            </h2>

            <CharacterRevealText text={PERSONAL_INFO.bio} />
          </div>

          {/* Quick Highlight Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-accentBorder/30">
            <div className="p-4 rounded-2xl border border-lightText/10 bg-lightText/5">
              <span className="text-2xl sm:text-3xl font-black text-lightText block">50K+</span>
              <span className="text-xs text-mutedText uppercase tracking-wider mt-1 block">App Downloads</span>
            </div>
            <div className="p-4 rounded-2xl border border-lightText/10 bg-lightText/5">
              <span className="text-2xl sm:text-3xl font-black text-sky-300 block">100%</span>
              <span className="text-xs text-mutedText uppercase tracking-wider mt-1 block">Flutter Focus</span>
            </div>
            <div className="p-4 rounded-2xl border border-lightText/10 bg-lightText/5 col-span-2 sm:col-span-1">
              <span className="text-2xl sm:text-3xl font-black text-lightText block">iOS & Android</span>
              <span className="text-xs text-mutedText uppercase tracking-wider mt-1 block">Cross Platform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
