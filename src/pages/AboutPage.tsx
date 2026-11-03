import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart, Sparkle } from 'lucide-react';
import { IMAGES, PORTFOLIO_DISCLAIMER } from '../data/salonData';

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="bg-[#FAF7F2] text-[#171210] pt-24 sm:pt-32">
      {/* 1. Header Banner */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6 pb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F5EFE6] border border-[#E8DFC8] text-[#C5A059] text-xs uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fictional Brand Philosophy</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171210] font-light tracking-wide">
          THE ART OF BEAUTY.
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[#8C6D58] max-w-2xl mx-auto">
          &ldquo;True luxury is not excess; it is the absolute precision of attention and the calm of genuine self-care.&rdquo;
        </p>

        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />
      </section>

      {/* 2. Hero Split Image & Text */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#171210]/80 font-light text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#171210] font-light">
              Personalized Beauty as a Living Craft
            </h2>
            <p>
              At VELINA, beauty is approached as an architectural and sensory dialogue. Rather than applying pre-packaged trends, our artisans evaluate facial geometry, hair movement, skin barrier vitality, and personal cadence.
            </p>
            <p>
              Every contour cut is sculpted to fall effortlessly into place with zero morning struggle. Every facial treatment marries organic botanicals with gentle clinical microcurrents to invigorate cellular health from within.
            </p>
            <p>
              The result is beauty that feels authentic, luminous, and timeless—never artificial, never overworked.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors cursor-pointer"
              >
                Experience The Atelier
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#241C1A] shadow-2xl overflow-hidden border border-[#E8DFC8]">
              <img
                src={IMAGES.heroSalon}
                alt="VELINA Architectural Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs uppercase tracking-[0.2em] font-light">
                Interior Concept: Fluted Limestone &amp; Warm Champagne Light
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Elements of The VELINA Philosophy */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Core Principles
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171210] font-light">
              The Four Tenets of Self-Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFE6] text-[#C5A059] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#171210]">
                Personalized Touch
              </h3>
              <p className="text-xs text-[#171210]/75 leading-relaxed font-light">
                Tailored formulations and scissor angles designed specifically for your individuality. No two rituals are identical.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFE6] text-[#C5A059] flex items-center justify-center">
                <Sparkle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#171210]">
                Elegance &amp; Ease
              </h3>
              <p className="text-xs text-[#171210]/75 leading-relaxed font-light">
                True refinement looks effortless. We focus on enhancing your natural glow so you feel confident in any setting.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFE6] text-[#C5A059] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#171210]">
                Attentive Discretion
              </h3>
              <p className="text-xs text-[#171210]/75 leading-relaxed font-light">
                Private styling suites, acoustic serenity, and confidential consultations safeguard your total tranquility.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFE6] text-[#C5A059] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#171210]">
                Welcoming Warmth
              </h3>
              <p className="text-xs text-[#171210]/75 leading-relaxed font-light">
                Luxury without intimidation. From hand-steeped herbal infusions to genuine human warmth, you are always at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4-Stage Consultation Ritual */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            The Bespoke Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171210] font-light">
            The Consultation Ritual
          </h2>
          <p className="text-sm text-[#171210]/70 font-light">
            How every visit unfolds with mindful intention and meticulous care.
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-serif text-3xl text-[#C5A059] font-light">01</span>
              <div>
                <h3 className="font-serif text-xl text-[#171210]">Sensory Welcome &amp; Diagnostics</h3>
                <p className="text-xs text-[#171210]/70 font-light max-w-xl mt-1">
                  You are welcomed with seasonal botanical infusions, warm linen towels, and an intimate consultation addressing your skin or hair aspirations.
                </p>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8C6D58]">Initial Dialogue</span>
          </div>

          <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-serif text-3xl text-[#C5A059] font-light">02</span>
              <div>
                <h3 className="font-serif text-xl text-[#171210]">Micro-Assessment &amp; Formulation</h3>
                <p className="text-xs text-[#171210]/70 font-light max-w-xl mt-1">
                  Using high-magnification trichology and barrier moisture sensors, we formulate bespoke botanical serums and toning glosses tailored for the day.
                </p>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8C6D58]">Tailored Precision</span>
          </div>

          <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-serif text-3xl text-[#C5A059] font-light">03</span>
              <div>
                <h3 className="font-serif text-xl text-[#171210]">The Dedicated Atelier Ritual</h3>
                <p className="text-xs text-[#171210]/70 font-light max-w-xl mt-1">
                  Relax in ergonomic heated chairs while our senior artists perform precision cuts, buccal facial lifting, or restorative steam therapy.
                </p>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8C6D58]">Mastery in Motion</span>
          </div>

          <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-serif text-3xl text-[#C5A059] font-light">04</span>
              <div>
                <h3 className="font-serif text-xl text-[#171210]">Post-Care Curation &amp; Home Protocol</h3>
                <p className="text-xs text-[#171210]/70 font-light max-w-xl mt-1">
                  We conclude with a customized at-home maintenance blueprint and curated botanical samples so your radiance endures between atelier visits.
                </p>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8C6D58]">Enduring Radiance</span>
          </div>
        </div>
      </section>

      {/* 5. Concept Demonstration Transparency Card */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto pb-24">
        <div className="p-8 bg-[#201815] text-[#FAF7F2] border border-[#C5A059]/30 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059]">
            <Sparkles className="w-4 h-4" />
            <span>Creative Portfolio Concept by MLM STUDIOS</span>
          </div>
          <h3 className="font-serif text-2xl text-white font-light">
            Design Philosophy &amp; Concept Authenticity
          </h3>
          <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-light">
            {PORTFOLIO_DISCLAIMER.bodyText} This demonstration exhibits state-of-the-art web aesthetics, serene color harmonizing (Champagne Beige, Warm Ivory, Dark Espresso, and Soft Gold), and seamless client-side routing.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => onNavigate('/services')}
              className="text-xs uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors cursor-pointer"
            >
              Explore Services &rarr;
            </button>
            <button
              onClick={() => onNavigate('/gallery')}
              className="text-xs uppercase tracking-widest text-[#FAF7F2]/70 hover:text-white transition-colors cursor-pointer"
            >
              View Gallery &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
