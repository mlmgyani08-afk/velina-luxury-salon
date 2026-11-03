import React, { useState } from 'react';
import { ArrowUp, Check, Sparkles } from 'lucide-react';
import { playLuxuryChime } from '../utils/audio';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    playLuxuryChime('radiant');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171210] text-[#FAF7F2] pt-20 pb-12 border-t border-[#2A221E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-[#FAF7F2] font-light uppercase">
              VELINA
            </div>
            <p className="font-serif italic text-lg text-[#C5A059] max-w-sm">
              &ldquo;Reveal your most radiant self.&rdquo;
            </p>
            <p className="text-sm text-[#FAF7F2]/70 leading-relaxed max-w-md font-light">
              An architectural beauty sanctuary dedicated to the harmony of tailored aesthetics, restorative touch, and timeless personal care.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DFBE75] transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Reserve An Experience
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/75 font-light">
              <li>
                <button
                  onClick={() => { onNavigate('/'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Home Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/about'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  The Art of Beauty (About)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/services'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Curated Rituals & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/gallery'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Editorial Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/testimonials'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Sample Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/contact'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Appointment Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* VIP Concierge Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              The VELINA Gazette
            </h4>
            <p className="text-sm text-[#FAF7F2]/70 leading-relaxed font-light">
              Receive seasonal ritual previews, private salon invitations, and bespoke skin wellness dispatches.
            </p>
            {subscribed ? (
              <div className="p-4 bg-white/5 border border-[#C5A059]/40 flex items-center gap-3 text-xs tracking-wider text-[#C5A059]">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you. Your address is warmly recorded in our demo guestbook.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-white/5 border border-white/20 px-4 py-2.5 text-xs text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#DFBE75] transition-colors"
                  >
                    Join
                  </button>
                </div>
                <div className="text-[11px] text-[#FAF7F2]/40">
                  Concept newsletter subscription · No spam
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Portfolio Demonstration Notice (Mandatory explicit statement) */}
        <div className="my-10 p-5 bg-[#201815] border border-[#C5A059]/25 text-[#FAF7F2]/80 rounded-none text-xs leading-relaxed space-y-1.5">
          <div className="text-[#C5A059] uppercase tracking-[0.18em] font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Demonstration Concept Notice</span>
          </div>
          <p className="text-[#FAF7F2]/70 font-light">
            This website is an original portfolio concept created and engineered by <strong>MLM STUDIOS</strong> to showcase ultra-premium digital design, editorial photography orchestration, and bespoke interactive web experiences. <strong>VELINA</strong> is a fictional luxury beauty brand and does not represent an operating business or commercial salon.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#FAF7F2]/50 font-light">
          <div>
            &copy; {new Date().getFullYear()} VELINA · Concept by MLM STUDIOS · All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Champagne Beige &amp; Warm Ivory Atelier</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C5A059] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
