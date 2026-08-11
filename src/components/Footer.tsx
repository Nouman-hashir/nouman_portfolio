import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-accentBorder/30 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-lightText/30 flex items-center justify-center font-bold text-xs text-lightText">
            NH
          </div>
          <span className="text-xs text-mutedText tracking-wider uppercase">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-lightText/70 hover:text-lightText transition-colors p-2"
        >
          Back to Top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};
