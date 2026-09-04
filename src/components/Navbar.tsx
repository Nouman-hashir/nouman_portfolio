import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-4 shadow-xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand logo / initial */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-brand-500/30 bg-brand-500/10 flex items-center justify-center font-bold text-brand-300 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(42,168,255,0.2)]">
            NH
          </div>
          <span className="font-semibold text-sm tracking-wider text-slate-100 group-hover:text-brand-300 transition-colors hidden sm:inline-block">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-widest font-semibold text-slate-300 hover:text-brand-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-400 hover:after:w-full after:transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-xs tracking-wider uppercase font-semibold text-brand-300 hover:bg-brand-500 hover:text-slate-950 hover:shadow-glow transition-all duration-300"
        >
          Get in Touch
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-200 p-2 focus:outline-none hover:text-brand-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-8 flex flex-col gap-6 shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-semibold text-slate-200 hover:text-brand-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block text-center px-6 py-3 rounded-full border border-brand-500/40 bg-brand-500/10 text-xs tracking-wider uppercase font-bold text-brand-300 hover:bg-brand-500 hover:text-slate-950 transition-colors mt-2"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};
