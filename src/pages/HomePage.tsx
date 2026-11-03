import React from 'react';
import { Sparkles, ArrowRight, Clock, Star } from 'lucide-react';
import { IMAGES, SERVICES_LIST, GALLERY_ITEMS, TESTIMONIALS_LIST, BRAND_VALUES } from '../data/salonData';
import { playLuxuryChime } from '../utils/audio';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
  isSoundEnabled: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectService,
  isSoundEnabled,
}) => {
  const featuredServices = SERVICES_LIST.filter((s) => s.featured).slice(0, 4);

  const handleHeroExplore = () => {
    if (isSoundEnabled) playLuxuryChime('subtle');
    onNavigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroBook = () => {
    if (isSoundEnabled) playLuxuryChime('radiant');
    onOpenBooking();
  };

  return (
    <div className="bg-[#FAF7F2] text-[#171210] selection:bg-[#C5A059] selection:text-white">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#171210]">
        {/* Full-Screen Photography Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroSalon}
            alt="VELINA Luxury Salon Interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-in fade-in duration-1000"
          />
          {/* Measured editorial contrast scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171210] via-black/45 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-24 sm:py-32 space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[#DFBE75] text-xs uppercase tracking-[0.28em] font-medium animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE75]" />
            <span>Haute Beauty &amp; Wellness Atelier</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] font-light leading-[1.08] text-balance text-white">
            REVEAL YOUR MOST <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#FAF7F2] tracking-normal">RADIANT SELF.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#FAF7F2]/85 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Discover a world of beauty, elegance and personalized self-care in an architectural haven of calm and understated luxury.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <button
              onClick={handleHeroExplore}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/70 text-white text-xs uppercase tracking-[0.22em] font-medium hover:bg-white hover:text-[#171210] transition-all duration-300 cursor-pointer"
            >
              Explore Services
            </button>
            <button
              onClick={handleHeroBook}
              className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#DFBE75] transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book An Appointment</span>
            </button>
          </div>

          <div className="pt-8 text-[11px] uppercase tracking-[0.25em] text-[#DFBE75]/80 font-light">
            Hair Artistry · Cellular Skincare · Restorative Spa
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.25em]">
          <span>Scroll to Discover</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION & PHILOSOPHY STRIP */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              The VELINA Philosophy
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171210] font-light leading-[1.15]">
              Where Architectural Serenity Meets Bespoke Beauty.
            </h2>
            <div className="w-12 h-[1.5px] bg-[#C5A059]" />
            <p className="text-sm text-[#171210]/75 leading-relaxed font-light">
              VELINA was conceived as a respite from the hurried world—a sanctuary where high-performance botanical ingredients, surgical precision scissors, and sensory relaxation converge.
            </p>
            <p className="text-sm text-[#171210]/75 leading-relaxed font-light">
              Here, every appointment is treated not as a routine appointment, but as a dedicated aesthetic ritual tailored to celebrate and illuminate your innate radiance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171210] hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#221B18] shadow-xl border border-[#E8DFC8]">
              <img
                src={IMAGES.spaSanctuary}
                alt="Sanctuary thermal pool and relaxation beds"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-[#DFBE75]">
                  Sanctuary Interiors
                </div>
                <div className="font-serif text-xl sm:text-2xl font-light">
                  Fluted limestone, warm travertine, and serene acoustic privacy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CURATED SERVICES */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Curated Offerings
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171210] font-light">
                Signature Experiences
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171210] hover:text-[#C5A059] transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>View All 7 Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#221B18]">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#171210]/80 backdrop-blur-sm text-[#DFBE75] text-[10px] uppercase tracking-[0.2em] font-medium">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#8C6D58]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.duration}</span>
                      <span>·</span>
                      <span className="font-medium text-[#171210]">{service.pricing}</span>
                    </div>

                    <h3 className="font-serif text-xl text-[#171210] font-medium group-hover:text-[#C5A059] transition-colors leading-snug">
                      {service.name}
                    </h3>

                    <p className="text-xs text-[#171210]/70 line-clamp-2 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E8DFC8]/60 flex items-center justify-between gap-2 mt-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-xs uppercase tracking-[0.16em] font-medium text-[#8C6D58] hover:text-[#171210] transition-colors cursor-pointer"
                  >
                    View Ritual
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3.5 py-2 bg-[#171210] text-[#FAF7F2] text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FOUR PILLARS OF LUXURY */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            Artisan Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171210] font-light">
            The Pillars of VELINA
          </h2>
          <p className="text-sm text-[#171210]/70 font-light">
            Every touchpoint is designed with measured precision, sensory elevation, and personalized devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map((val) => (
            <div
              key={val.number}
              className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4 hover:border-[#C5A059] transition-colors"
            >
              <div className="font-serif text-3xl text-[#C5A059] font-light">
                {val.number}
              </div>
              <h3 className="font-serif text-xl text-[#171210] font-medium">
                {val.title}
              </h3>
              <p className="text-xs text-[#171210]/75 leading-relaxed font-light">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDITORIAL GALLERY PREVIEW */}
      <section className="py-24 bg-[#171210] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE75] font-medium">
                Visual Sanctuary
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light">
                Moments in Light &amp; Form
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('/gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#DFBE75] hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onNavigate('/gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative aspect-[4/5] overflow-hidden bg-[#241C1A] border border-white/10 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#DFBE75]">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/70 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SAMPLE TESTIMONIALS SPOTLIGHT */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            Reflections &amp; Accolades
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171210] font-light">
            Patron Impressions
          </h2>
          <div className="inline-block px-3 py-1 bg-[#F5EFE6] border border-[#E8DFC8] text-[11px] text-[#8C6D58] uppercase tracking-wider">
            Sample Concept Testimonials · Demonstration Only
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#171210]/90 leading-relaxed font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8] space-y-1">
                <div className="font-serif text-base font-medium text-[#171210]">
                  {testimonial.clientName}
                </div>
                <div className="text-xs text-[#8C6D58]">
                  {testimonial.roleOrPersona} · {testimonial.serviceExperienced}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <button
            onClick={() => {
              onNavigate('/testimonials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171210] hover:text-[#C5A059] transition-colors cursor-pointer"
          >
            <span>View All Editorial Testimonials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 7. GRAND APPOINTMENT INVITATION BANNER */}
      <section className="relative py-28 px-6 sm:px-8 bg-[#171210] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={IMAGES.heroSalon}
            alt="Velina Salon Atmosphere"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-[#DFBE75] font-medium">
            Begin Your Transformation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-tight">
            Reserve Your Private Salon &amp; Spa Ritual
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
            Allow our team of master stylists, skin therapists, and wellness directors to curate an unforgettable experience.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#DFBE75] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request An Appointment</span>
            </button>
            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/50 text-white text-xs uppercase tracking-[0.22em] font-medium hover:bg-white hover:text-[#171210] transition-colors cursor-pointer"
            >
              Concierge Inquiries
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
