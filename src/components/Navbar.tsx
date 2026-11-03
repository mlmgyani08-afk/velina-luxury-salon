import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { playLuxuryChime } from '../utils/audio';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceId?: string) => void;
  isSoundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenBooking,
  isSoundEnabled,
  onToggleSound,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    if (isSoundEnabled) playLuxuryChime('subtle');
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingClick = () => {
    if (isSoundEnabled) playLuxuryChime('radiant');
    onOpenBooking();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#E8DFC8]/60 py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in Cormorant Garamond serif) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="group text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
          >
            <span
              className={`font-serif text-2xl md:text-3xl tracking-[0.25em] font-light uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#171210]' : 'text-white'
              }`}
            >
              VELINA
            </span>
          </button>

          {/* Zone 2: 4-6 Clean text navigation links (Single-line whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase font-medium">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isScrolled
                      ? isActive
                        ? 'text-[#C5A059]'
                        : 'text-[#171210]/75 hover:text-[#171210]'
                      : isActive
                      ? 'text-[#DFBE75]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059] transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Sensory Audio Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Audio Ambiance Toggle */}
            <button
              onClick={onToggleSound}
              title={isSoundEnabled ? 'Disable subtle salon chimes' : 'Enable luxury soundscape chimes'}
              aria-label="Toggle subtle sensory sound"
              className={`p-2 rounded-full transition-colors duration-200 ${
                isScrolled
                  ? 'text-[#8C6D58] hover:text-[#171210] hover:bg-[#EFE9DF]/50'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Primary CTA Button */}
            <button
              onClick={handleBookingClick}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? 'bg-[#171210] text-[#FAF7F2] hover:bg-[#C5A059] hover:text-[#171210]'
                  : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-[#171210]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? 'text-[#171210]' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#171210]/95 backdrop-blur-xl flex flex-col justify-between p-8 text-[#FAF7F2] lg:hidden animate-in fade-in duration-200">
          <div className="pt-20">
            <div className="font-serif text-3xl tracking-[0.25em] text-[#C5A059] mb-8 font-light">
              VELINA
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-left text-lg tracking-[0.18em] uppercase font-light transition-colors ${
                      isActive ? 'text-[#C5A059] font-medium' : 'text-[#FAF7F2]/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={handleBookingClick}
              className="w-full py-3.5 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Request An Appointment
            </button>
            <div className="text-[11px] text-[#FAF7F2]/50 tracking-wider text-center">
              A Portfolio Concept by MLM STUDIOS
            </div>
          </div>
        </div>
      )}
    </>
  );
};
