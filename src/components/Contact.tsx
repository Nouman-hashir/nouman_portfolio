import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill out all fields before sending.');
      return;
    }

    const textMessage = `Hello Nouman,\n\nMy name is ${name}.\nEmail: ${email}\n\nMessage:\n${message}\n\n(Sent from your portfolio website)`;
    const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-[#0C0C0C] px-6 md:px-12 max-w-7xl mx-auto border-t border-accentBorder/30">
      <div className="flex items-center gap-3 mb-16">
        <span className="text-xs uppercase tracking-widest font-semibold text-mutedText">
          07 — CONTACT & COLLABORATION
        </span>
        <div className="h-[1px] flex-1 bg-accentBorder/40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Call-To-Action & Info */}
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight heading-gradient leading-none mb-8"
          >
            LET'S BUILD SOMETHING GREAT.
          </motion.h2>

          <p className="text-mutedText text-lg leading-relaxed mb-10 max-w-lg">
            Have an exciting mobile app project, telemedicine platform, or AI idea? I’m available for freelance projects, full-time contracts, and engineering collaborations.
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl border border-lightText/15 bg-lightText/5 hover:border-sky-400/50 hover:bg-sky-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-xs text-mutedText uppercase tracking-wider block">Email Me</span>
                <span className="text-base font-semibold text-lightText">{PERSONAL_INFO.email}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-lightText/15 bg-lightText/5 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-xs text-mutedText uppercase tracking-wider block">Call / WhatsApp</span>
                <span className="text-base font-semibold text-lightText">{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-lightText/15 bg-lightText/5">
              <div className="w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-400/20 flex items-center justify-center text-slate-300">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs text-mutedText uppercase tracking-wider block">Location</span>
                <span className="text-base font-semibold text-lightText">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-lightText/20 text-xs font-semibold uppercase tracking-wider text-lightText hover:border-sky-400 hover:text-sky-400 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-lightText/20 text-xs font-semibold uppercase tracking-wider text-lightText hover:border-white hover:text-white transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 bg-[#121212] border border-lightText/15 rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare size={20} className="text-sky-400" />
            <h3 className="text-2xl font-bold uppercase text-lightText">Send a Message</h3>
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-mutedText mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full bg-[#0C0C0C] border border-lightText/20 rounded-xl px-4 py-3.5 text-lightText placeholder:text-mutedText/50 focus:outline-none focus:border-sky-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-mutedText mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full bg-[#0C0C0C] border border-lightText/20 rounded-xl px-4 py-3.5 text-lightText placeholder:text-mutedText/50 focus:outline-none focus:border-sky-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-mutedText mb-2">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your app project details..."
                rows={4}
                required
                className="w-full bg-[#0C0C0C] border border-lightText/20 rounded-xl px-4 py-3.5 text-lightText placeholder:text-mutedText/50 focus:outline-none focus:border-sky-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-lightText text-[#0C0C0C] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-lg"
            >
              Send via WhatsApp
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
