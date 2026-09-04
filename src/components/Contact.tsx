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
    <section id="contact" className="relative z-10 w-full bg-slate-950/60 py-28 border-t border-slate-800/80">
      {/* Ambient Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-bold text-brand-300">
            07 — CONTACT & COLLABORATION
          </span>
          <div className="h-[1px] flex-1 bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call-To-Action & Info */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none mb-8"
            >
              LET'S BUILD SOMETHING GREAT.
            </motion.h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
              Have an exciting mobile app project, telemedicine platform, or AI idea? I’m available for freelance projects, full-time contracts, and engineering collaborations.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl hover:border-brand-400/50 hover:bg-slate-900/90 hover:shadow-glow transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-300 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(42,168,255,0.2)]">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Email Me</span>
                  <span className="text-base font-semibold text-white">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl hover:border-emerald-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Call / WhatsApp</span>
                  <span className="text-base font-semibold text-white">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-base font-semibold text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-800 bg-slate-900/70 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-brand-400 hover:text-brand-300 hover:bg-brand-500/10 transition-all"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-800 bg-slate-900/70 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
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
            className="lg:col-span-6 bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={20} className="text-brand-300" />
              <h3 className="text-2xl font-bold uppercase text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your app project details..."
                  rows={4}
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 hover:shadow-glow transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Send via WhatsApp
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
