import React, { useState } from 'react';
import { Sparkles, Star, Plus, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_LIST, TestimonialItem } from '../data/salonData';
import { playLuxuryChime } from '../utils/audio';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
  isSoundEnabled: boolean;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onOpenBooking,
  isSoundEnabled,
}) => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS_LIST);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [newReview, setNewReview] = useState({
    name: '',
    roleOrPersona: '',
    service: 'The Velina Signature Lifting Ritual',
    quote: '',
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    if (isSoundEnabled) playLuxuryChime('radiant');

    const created: TestimonialItem = {
      id: `test-custom-${Date.now()}`,
      clientName: newReview.name,
      roleOrPersona: newReview.roleOrPersona || 'Demo Guest Contributor',
      serviceExperienced: newReview.service,
      quote: newReview.quote,
      sessionDate: 'Demonstration Submission · Just now',
      radianceScore: 5,
    };

    setTestimonials([created, ...testimonials]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setNewReview({
        name: '',
        roleOrPersona: '',
        service: 'The Velina Signature Lifting Ritual',
        quote: '',
      });
    }, 1200);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#171210] pt-24 sm:pt-32 pb-24">
      {/* 1. Header Banner */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6 pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F5EFE6] border border-[#E8DFC8] text-[#C5A059] text-xs uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Voices of Radiance</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171210] font-light tracking-wide">
          EDITORIAL REFLECTIONS
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[#8C6D58] max-w-2xl mx-auto">
          &ldquo;When technique transforms into an art form, self-care becomes an indelible memory.&rdquo;
        </p>

        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />
      </section>

      {/* 2. Mandatory Explicit Disclaimer Banner */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 mb-12">
        <div className="p-4 bg-[#F5EFE6] border border-[#C5A059]/40 text-center space-y-1">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D58] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Sample Placeholder Content Notice</span>
          </div>
          <p className="text-xs text-[#171210]/70 font-light">
            All reviews below are illustrative demo placeholders created by <strong>MLM STUDIOS</strong> for portfolio demonstration purposes. They do not represent real customer endorsements or commercially audited claims.
          </p>
        </div>
      </section>

      {/* 3. Action Bar: Write Demo Review + Reserve */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#8C6D58] font-light">
          Displaying <span className="font-medium text-[#171210]">{testimonials.length}</span> illustrative editorial perspectives
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E8DFC8] text-[#171210] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#C5A059] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Leave Demo Reflection</span>
          </button>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors cursor-pointer"
          >
            Book An Experience
          </button>
        </div>
      </section>

      {/* 4. Testimonials Editorial Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg hover:border-[#C5A059]/50 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Sample Tag & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(item.radianceScore)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C6D58] bg-[#F5EFE6] px-2 py-0.5 border border-[#E8DFC8]">
                    Sample Profile
                  </span>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#171210]/90 leading-relaxed font-light">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8] space-y-1">
                <div className="font-serif text-lg font-medium text-[#171210]">
                  {item.clientName}
                </div>
                <div className="text-xs text-[#8C6D58] font-light">
                  {item.roleOrPersona} · {item.serviceExperienced}
                </div>
                <div className="text-[11px] text-[#171210]/40 italic">
                  {item.sessionDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive Demo Modal to add a reflection */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] border border-[#E8DFC8] max-w-lg w-full p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                  Portfolio Feature Demo
                </div>
                <h3 className="font-serif text-2xl text-[#171210] font-light">
                  Submit An Editorial Reflection
                </h3>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-xs text-[#8C6D58] hover:text-[#171210]"
              >
                Close
              </button>
            </div>

            {submittedSuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto text-[#C5A059]" />
                <h4 className="font-serif text-xl text-[#171210]">Reflection Added</h4>
                <p className="text-xs text-[#171210]/70 font-light">
                  Your demo review has been inserted into the live page state.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#171210]/80">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adrienne Montgomery"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] px-3.5 py-2 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#171210]/80">
                    Persona or Title (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Design Enthusiast, London"
                    value={newReview.roleOrPersona}
                    onChange={(e) => setNewReview({ ...newReview, roleOrPersona: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] px-3.5 py-2 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#171210]/80">
                    Ritual Experienced
                  </label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] px-3.5 py-2 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="The Velina Signature Lifting Ritual">The Velina Signature Lifting Ritual</option>
                    <option value="Bespoke Couture Cut & Silhouette">Bespoke Couture Cut &amp; Silhouette</option>
                    <option value="Travertine Warm Stone Aromatherapy">Travertine Warm Stone Aromatherapy</option>
                    <option value="Caviar Restorative Keratin Ceremony">Caviar Restorative Keratin Ceremony</option>
                    <option value="24K Gold Cellular Radiance Facial">24K Gold Cellular Radiance Facial</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#171210]/80">
                    Your Impression / Quote *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the sensory calmness, technique, or radiance..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] p-3 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="text-[11px] text-[#8C6D58] font-light">
                  This reflection will be displayed in the demo session memory.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors"
                >
                  Publish Demo Reflection
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
