import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { playLuxuryChime } from '../utils/audio';

interface GalleryPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
  isSoundEnabled: boolean;
}

const GALLERY_CATEGORIES = ['All', 'Interiors', 'Hair Artistry', 'Skin & Radiance', 'Spa Sanctuary'] as const;

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenBooking,
  onNavigate,
  isSoundEnabled,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (isSoundEnabled) playLuxuryChime('subtle');
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    if (isSoundEnabled) playLuxuryChime('radiant');
  };

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-[#FAF7F2] text-[#171210] pt-24 sm:pt-32 pb-24">
      {/* 1. Header Banner */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6 pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F5EFE6] border border-[#E8DFC8] text-[#C5A059] text-xs uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Visual Anthology</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171210] font-light tracking-wide">
          EDITORIAL GALLERY
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[#8C6D58] max-w-2xl mx-auto">
          Atmospheric compositions capturing the poetry of natural light, sculptural hair silhouettes, and calming travertine interiors.
        </p>

        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />
      </section>

      {/* 2. Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#171210] text-[#FAF7F2] font-medium shadow-sm'
                    : 'bg-[#F5EFE6] text-[#171210]/70 hover:text-[#171210] hover:bg-[#EFE9DF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Editorial Masonry / Layout Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative overflow-hidden bg-[#241C1A] border border-[#E8DFC8] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute top-4 right-4 p-2 bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#DFBE75] font-medium">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-2xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/75 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#171210] border border-white/20 text-[#FAF7F2] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Box */}
            <div className="md:w-2/3 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[70vh] md:max-h-[85vh] object-contain"
              />
            </div>

            {/* Editorial Caption Sidebar */}
            <div className="md:w-1/3 p-8 flex flex-col justify-between space-y-6 bg-[#201815]">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE75]">
                  {selectedItem.category}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                  {selectedItem.title}
                </h3>
                <div className="w-10 h-[1px] bg-[#C5A059]" />
                <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-light">
                  {selectedItem.caption}
                </p>
                <div className="text-[11px] text-[#DFBE75]/70 italic">
                  Shot in natural daylight with warm diffused architectural ambient illumination.
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DFBE75] transition-colors"
                >
                  Reserve Experience
                </button>
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onNavigate('/services');
                  }}
                  className="w-full text-center text-xs uppercase tracking-widest text-[#FAF7F2]/60 hover:text-white transition-colors"
                >
                  Explore Related Services
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Bottom Invitation */}
      <section className="mt-20 max-w-4xl mx-auto px-6 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#171210] font-light">
          Experience the Space in Person
        </h3>
        <p className="text-xs sm:text-sm text-[#171210]/70 font-light max-w-lg mx-auto">
          Private appointments ensure the entire styling or treatment suite is prepared specifically for your arrival.
        </p>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors cursor-pointer"
        >
          <span>Request Reservation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
