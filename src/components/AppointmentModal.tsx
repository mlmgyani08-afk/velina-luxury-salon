import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';
import { playLuxuryChime } from '../utils/audio';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  isSoundEnabled: boolean;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  isSoundEnabled,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceId: preselectedServiceId || SERVICES_LIST[0].id,
    date: '',
    timeSlot: 'Morning (10:00 AM)',
    specialistPreference: 'Any Master Artisan',
    specialNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isSoundEnabled) playLuxuryChime('radiant');

    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = 'VLN-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedCode(randomCode);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    onClose();
  };

  const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId) || SERVICES_LIST[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#171210] border border-[#E8DFC8] shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#E8DFC8] bg-[#FAF7F2]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Private Atelier Reservation
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#171210] font-light">
              Request Your Bespoke Experience
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#171210]/60 hover:text-[#171210] transition-colors rounded-full hover:bg-[#EFE9DF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submittedCode ? (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 mx-auto bg-[#F5EFE6] border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] text-[#C5A059]">
                  Demonstration Confirmation
                </div>
                <h4 className="font-serif text-3xl text-[#171210]">
                  Your Ritual Request Has Been Received
                </h4>
                <p className="text-sm text-[#171210]/70 max-w-md mx-auto font-light">
                  A concierge confirmation has been logged for your selected session:
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F5EFE6]/70 border border-[#E8DFC8] p-5 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                  <span className="text-[#8C6D58] uppercase tracking-wider">Booking Code:</span>
                  <span className="font-mono font-semibold text-[#171210]">{submittedCode}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                  <span className="text-[#8C6D58] uppercase tracking-wider">Ritual:</span>
                  <span className="font-medium text-[#171210] text-right">{selectedService.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                  <span className="text-[#8C6D58] uppercase tracking-wider">Guest:</span>
                  <span className="font-medium text-[#171210]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                  <span className="text-[#8C6D58] uppercase tracking-wider">Preferred Window:</span>
                  <span className="font-medium text-[#171210]">{formData.date || 'To be coordinated'} · {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#8C6D58] uppercase tracking-wider">Pricing Terms:</span>
                  <span className="text-[#171210] font-medium">Bespoke Concierge Quotation</span>
                </div>
              </div>

              <div className="p-4 bg-[#EFE9DF]/80 text-[#8C6D58] text-[11px] leading-relaxed max-w-md mx-auto">
                <strong>Portfolio Concept Note:</strong> This is an interactive demo created by <strong>MLM STUDIOS</strong>. No commercial transaction or physical booking has been made.
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Service Quick Spotlight */}
              <div className="p-4 bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                    Selected Ritual Experience
                  </div>
                  <div className="font-serif text-lg font-medium text-[#171210]">
                    {selectedService.name}
                  </div>
                  <div className="text-xs text-[#8C6D58]">
                    Duration: {selectedService.duration} · {selectedService.pricing}
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0" />
              </div>

              {/* Service Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                  Select Desired Service Category &amp; Ritual *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFC8] px-4 py-2.5 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059] transition-colors"
                  required
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      [{srv.category}] {srv.name} ({srv.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Genevieve Laurent"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-2.5 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. genevieve@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-2.5 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-2.5 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-2 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>
              </div>

              {/* Time Window & Specialist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-2.5 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Morning (10:00 AM)">Morning (10:00 AM)</option>
                      <option value="Midday (1:00 PM)">Midday (1:00 PM)</option>
                      <option value="Afternoon (3:30 PM)">Afternoon (3:30 PM)</option>
                      <option value="Twilight Evening (5:30 PM)">Twilight Evening (5:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Artisan Preference
                  </label>
                  <select
                    value={formData.specialistPreference}
                    onChange={(e) => setFormData({ ...formData, specialistPreference: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] px-4 py-2.5 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Any Master Artisan">Any Available Master Artisan</option>
                    <option value="Creative Hair Director">Creative Hair Director</option>
                    <option value="Senior Aesthetician">Senior Aesthetician</option>
                    <option value="Spa Sanctuary Therapist">Spa Sanctuary Therapist</option>
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                  Sensory Preferences or Inquiries (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  placeholder="Share any sensitivities, special occasion dates, or refreshment preferences..."
                  className="w-full bg-[#FAF7F2] border border-[#E8DFC8] p-3 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Reservation...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Request An Appointment</span>
                    </>
                  )}
                </button>
                <div className="text-[11px] text-[#8C6D58] text-center mt-2 font-light">
                  Demo reservation system · Concept by MLM STUDIOS
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
