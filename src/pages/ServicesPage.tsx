import React, { useState } from 'react';
import { Sparkles, Clock, Search, Filter } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/salonData';
import { playLuxuryChime } from '../utils/audio';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
  isSoundEnabled: boolean;
}

const CATEGORIES = [
  'All Rituals',
  'Hair Styling',
  'Hair Treatments',
  'Skin Care',
  'Facial Treatments',
  'Makeup',
  'Manicure & Pedicure',
  'Spa & Relaxation',
] as const;

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBooking,
  onSelectService,
  isSoundEnabled,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Rituals');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (isSoundEnabled) playLuxuryChime('subtle');
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'All Rituals' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF7F2] text-[#171210] pt-24 sm:pt-32 pb-24">
      {/* 1. Header Banner */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6 pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F5EFE6] border border-[#E8DFC8] text-[#C5A059] text-xs uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Menu of Rituals</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171210] font-light tracking-wide">
          CURATED EXPERIENCES
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[#8C6D58] max-w-2xl mx-auto">
          Seven refined disciplines formulated to elevate hair architecture, skin luminosity, and deep sensory tranquility.
        </p>

        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />
      </section>

      {/* 2. Interactive Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 space-y-6">
        {/* Category Tabs (Segmented Button Controls §1.A of frontend-design) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-all cursor-pointer ${
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

        {/* Search Input & Count Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-[#E8DFC8] pb-4">
          <div className="text-xs text-[#8C6D58] font-light">
            Showing <span className="font-medium text-[#171210]">{filteredServices.length}</span> bespoke rituals
            {activeCategory !== 'All Rituals' && <span> in {activeCategory}</span>}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8C6D58] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search rituals or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-9 pr-4 py-2 text-xs text-[#171210] placeholder-[#171210]/40 focus:outline-none focus:border-[#C5A059]"
            />
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 p-8 bg-[#F5EFE6] border border-[#E8DFC8] max-w-lg mx-auto space-y-4">
            <Filter className="w-8 h-8 mx-auto text-[#C5A059]" />
            <div className="font-serif text-2xl text-[#171210]">No Rituals Found</div>
            <p className="text-xs text-[#171210]/70 font-light">
              No services matched your search &ldquo;{searchQuery}&rdquo;. Try another term or reset categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All Rituals');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="group bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-300"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#221B18]">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#171210]/85 backdrop-blur-sm text-[#DFBE75] text-[10px] uppercase tracking-[0.2em] font-medium">
                      {service.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#8C6D58]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.duration}</span>
                      <span>·</span>
                      <span className="font-medium text-[#171210]">{service.pricing}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#171210] font-light leading-snug group-hover:text-[#C5A059] transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs text-[#171210]/75 leading-relaxed font-light line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Ritual steps highlights */}
                    <div className="pt-2 border-t border-[#E8DFC8]/60 space-y-1.5">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8C6D58] font-medium">
                        Ritual Sequence Includes:
                      </div>
                      <ul className="text-[11px] text-[#171210]/70 space-y-1 font-light">
                        {service.ritualSteps.slice(0, 2).map((step, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                            <span className="truncate">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Footers */}
                <div className="p-6 pt-0 border-t border-[#E8DFC8]/60 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-xs uppercase tracking-[0.16em] font-medium text-[#8C6D58] hover:text-[#171210] transition-colors cursor-pointer"
                  >
                    Details &amp; Steps
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Inquire / Book</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Consultation Inquiry Strip */}
      <section className="mt-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#201815] text-[#FAF7F2] border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE75]">
              Bespoke Combinations &amp; Bridal Packages
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Desire a Multi-Service Half-Day or Full-Day Immersion?
            </h3>
            <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
              Our salon directors can curate customized half-day sanctuaries combining hair styling, facial lifting, and thermal spa relaxation.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 bg-[#C5A059] text-[#171210] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DFBE75] transition-colors shrink-0 cursor-pointer"
          >
            Request Custom Package
          </button>
        </div>
      </section>
    </div>
  );
};
