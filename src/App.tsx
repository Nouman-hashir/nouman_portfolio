import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  return (
    <div className="relative text-slate-100 min-h-screen bg-[#030712] overflow-x-clip font-sans selection:bg-brand-500/30 selection:text-white">
      {/* High-Tech Software Engineering Coordinate Grid & Blueprint Overlay */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.05] z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Engineering Coordinate Grid with Crosshairs and Nodes */}
          <pattern id="developer-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3" />
            <path d="M -4 0 L 4 0 M 0 -4 L 0 4" stroke="#2AA8FF" strokeWidth="1.2" />
            <path d="M 76 80 L 84 80 M 80 76 L 80 84" stroke="#2AA8FF" strokeWidth="1.2" />
            <circle cx="80" cy="0" r="1.5" fill="#52C3FF" />
            <circle cx="0" cy="80" r="1.5" fill="#52C3FF" />
          </pattern>

          {/* Software Engineering Syntax Glyphs & Tokens */}
          <pattern id="code-blueprint" width="360" height="360" patternUnits="userSpaceOnUse">
            <text x="25" y="45" fill="#89DBFF" fontSize="13" fontFamily="monospace" fontWeight="700">&lt;/&gt;</text>
            <text x="180" y="40" fill="#CBD5E1" fontSize="11" fontFamily="monospace">&#123; ... &#125;</text>
            <text x="290" y="80" fill="#52C3FF" fontSize="13" fontFamily="monospace" fontWeight="700">=&gt;</text>
            <text x="40" y="130" fill="#52C3FF" fontSize="11" fontFamily="monospace">async / await</text>
            <text x="220" y="140" fill="#94A3B8" fontSize="10" fontFamily="monospace" letterSpacing="2">01001110</text>
            <text x="35" y="210" fill="#2AA8FF" fontSize="11" fontFamily="monospace">git:main*</text>
            <text x="170" y="220" fill="#CBD5E1" fontSize="11" fontFamily="monospace">const flutter = true;</text>
            <text x="45" y="290" fill="#89DBFF" fontSize="12" fontFamily="monospace">&#123; widget &#125;</text>
            <text x="260" y="280" fill="#67E8F9" fontSize="12" fontFamily="monospace" fontWeight="700">&amp;&amp; ||</text>
            <text x="160" y="330" fill="#89DBFF" fontSize="10" fontFamily="monospace">void main() &#123;&#125;</text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#developer-grid)" />
        <rect width="100%" height="100%" fill="url(#code-blueprint)" />
      </svg>

      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
