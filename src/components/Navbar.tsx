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
          ? 'bg-[#0C0C0C]/80 backdrop-blur-md border-b border-accentBorder/40 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand logo / initial */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full border border-lightText/30 flex items-center justify-center font-bold text-lightText group-hover:border-lightText transition-colors">
            NH
          </div>
          <span className="font-semibold text-sm tracking-wider text-lightText hidden sm:inline-block">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-widest font-medium text-lightText/70 hover:text-lightText transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-lightText hover:after:w-full after:transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-lightText/40 text-xs tracking-wider uppercase font-medium text-lightText hover:bg-lightText/10 transition-colors"
        >
          Get in Touch
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-lightText p-2 focus:outline-none"
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
          className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-accentBorder/40 px-6 py-8 flex flex-col gap-6"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-medium text-lightText hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block text-center px-6 py-3 rounded-full border border-lightText/40 text-xs tracking-wider uppercase font-medium text-lightText hover:bg-lightText/10 transition-colors mt-2"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};
