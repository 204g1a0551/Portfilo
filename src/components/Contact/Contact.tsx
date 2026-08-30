import React, { useState } from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { profileData } from '../../data/profile';
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Github, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] Opportunity from ${formData.name || 'Website Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Mahesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    // Open native mail client with prefilled information
    window.location.href = `mailto:${profileData.email}?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an opportunity in Full-Stack development (Java, Spring Boot, Angular) or an AI/ML engineering challenge, let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Email Address</div>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(profileData.email, 'email')}
                className="p-2 rounded-lg glass text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-all"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(profileData.phone, 'phone')}
                className="p-2 rounded-lg glass text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/30 transition-all"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {profileData.location}
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="p-5 glass-card rounded-2xl border border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase mb-3">Professional Profiles</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-surface/80 hover:bg-surface border border-white/5 hover:border-cyan-500/30 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-surface/80 hover:bg-surface border border-white/5 hover:border-cyan-500/30 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Mail Composer Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Compose Direct Message</h3>
                <p className="text-xs text-slate-400">
                  Sends directly to <span className="text-cyan-400 font-mono">{profileData.email}</span> using your default email client.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 text-sm rounded-xl glass text-slate-200 placeholder-slate-500 border border-white/10 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl glass text-slate-200 placeholder-slate-500 border border-white/10 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack / AI Opportunity Discussion"
                    className="w-full px-4 py-2.5 text-sm rounded-xl glass text-slate-200 placeholder-slate-500 border border-white/10 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, project scope, or questions..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl glass text-slate-200 placeholder-slate-500 border border-white/10 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
