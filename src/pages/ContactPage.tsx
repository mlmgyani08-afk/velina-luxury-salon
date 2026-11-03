import React, { useState } from 'react';
import { Sparkles, Calendar, Mail, Phone, User, CheckCircle2, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';
import { playLuxuryChime } from '../utils/audio';

interface ContactPageProps {
  isSoundEnabled: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({ isSoundEnabled }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    desiredService: SERVICES_LIST[0].name,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM)',
    additionalMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    code: string;
    name: string;
    service: string;
    date: string;
    time: string;
  } | null>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isSoundEnabled) playLuxuryChime('radiant');

    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'VLN-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedBooking({
        code,
        name: formData.fullName,
        service: formData.desiredService,
        date: formData.preferredDate || 'Upcoming Window',
        time: formData.preferredTime,
      });
    }, 750);
  };

  const handleNewInquiry = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      desiredService: SERVICES_LIST[0].name,
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM)',
      additionalMessage: '',
    });
  };

  const faqs = [
    {
      q: 'How should I prepare for a facial or lifting ritual?',
      a: 'We recommend arriving bare-faced if convenient, though our ritual always begins with deep botanical cleansing. Avoid harsh chemical exfoliants 48 hours prior to your scheduled session.',
    },
    {
      q: 'How does the initial aesthetic consultation work?',
      a: 'Every first appointment includes a complimentary 15-minute diagnostic dialogue assessing bone structure, skin barrier moisture, and hair porosity prior to initiating any treatment.',
    },
    {
      q: 'Are private VIP styling suites available?',
      a: 'Yes, private suites with individual sound controls, refreshment bars, and direct discrete entrances are available upon request for high-profile clients and bridal parties.',
    },
    {
      q: 'What is the etiquette for modifying an appointment window?',
      a: 'As each artisan reserves their suite exclusively for you, we graciously request 24 hours advance notification for adjustments.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#171210] pt-24 sm:pt-32 pb-24">
      {/* 1. Header Banner */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6 pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F5EFE6] border border-[#E8DFC8] text-[#C5A059] text-xs uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Private Appointments &amp; Inquiries</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171210] font-light tracking-wide">
          REQUEST AN APPOINTMENT
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[#8C6D58] max-w-2xl mx-auto">
          &ldquo;Your journey to luminous calm begins with a dedicated reservation.&rdquo;
        </p>

        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />
      </section>

      {/* 2. Main Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: The Appointment Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#E8DFC8] p-8 sm:p-10 shadow-sm">
            {submittedBooking ? (
              <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 mx-auto bg-[#F5EFE6] border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#C5A059]">
                    Demo Booking Received
                  </div>
                  <h3 className="font-serif text-3xl text-[#171210] font-light">
                    Appointment Inquiry Confirmed
                  </h3>
                  <p className="text-sm text-[#171210]/70 max-w-md mx-auto font-light">
                    Thank you, {submittedBooking.name}. Your appointment inquiry has been registered in the demonstration registry.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="bg-[#F5EFE6]/70 border border-[#E8DFC8] p-6 text-left max-w-md mx-auto text-xs space-y-3">
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                    <span className="text-[#8C6D58] uppercase tracking-wider">Inquiry ID:</span>
                    <span className="font-mono font-semibold text-[#171210]">{submittedBooking.code}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                    <span className="text-[#8C6D58] uppercase tracking-wider">Requested Ritual:</span>
                    <span className="font-medium text-[#171210] text-right">{submittedBooking.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                    <span className="text-[#8C6D58] uppercase tracking-wider">Preferred Date:</span>
                    <span className="font-medium text-[#171210]">{submittedBooking.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-2">
                    <span className="text-[#8C6D58] uppercase tracking-wider">Time Window:</span>
                    <span className="font-medium text-[#171210]">{submittedBooking.time}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#8C6D58] uppercase tracking-wider">Pricing Note:</span>
                    <span className="text-[#171210] font-medium">Bespoke Concierge Quotation</span>
                  </div>
                </div>

                <div className="p-4 bg-[#EFE9DF]/80 text-[#8C6D58] text-xs leading-relaxed max-w-md mx-auto">
                  <strong>Portfolio Concept Notice:</strong> This is a portfolio concept crafted by <strong>MLM STUDIOS</strong>. No commercial transaction or physical appointment has been created.
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleNewInquiry}
                    className="px-8 py-3 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E8DFC8] pb-4">
                  <h2 className="font-serif text-2xl text-[#171210] font-light">
                    Appointment Details
                  </h2>
                  <p className="text-xs text-[#171210]/60 mt-1 font-light">
                    Please provide your contact information and session preferences.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vivienne Westwood"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-3 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. vivienne@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-3 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-3 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>
                </div>

                {/* Desired Service */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Desired Service *
                  </label>
                  <select
                    value={formData.desiredService}
                    onChange={(e) => setFormData({ ...formData, desiredService: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] px-4 py-3 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                    required
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        [{srv.category}] {srv.name} ({srv.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3" />
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-2.5 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#8C6D58] absolute left-3 top-3.5" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8DFC8] pl-10 pr-4 py-3 text-xs text-[#171210] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Morning (10:00 AM)">Morning (10:00 AM)</option>
                        <option value="Midday (1:00 PM)">Midday (1:00 PM)</option>
                        <option value="Afternoon (3:30 PM)">Afternoon (3:30 PM)</option>
                        <option value="Twilight Evening (5:30 PM)">Twilight Evening (5:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#171210]/80 font-medium">
                    Additional Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.additionalMessage}
                    onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                    placeholder="Share specific desires, hair history, skin sensitivities, or event timing..."
                    className="w-full bg-[#FAF7F2] border border-[#E8DFC8] p-3 text-xs text-[#171210] placeholder-[#171210]/35 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>REQUEST AN APPOINTMENT</span>
                      </>
                    )}
                  </button>
                  <div className="text-[11px] text-[#8C6D58] text-center mt-2.5 font-light">
                    Concept inquiry demonstration · Designed by MLM STUDIOS
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Atelier Atmosphere & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Atelier Concept Card */}
            <div className="p-8 bg-[#201815] text-[#FAF7F2] border border-[#C5A059]/30 space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE75]">
                Atelier Sanctuary
              </div>
              <h3 className="font-serif text-2xl text-white font-light">
                Private Consultation Concierge
              </h3>
              <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-light">
                To preserve absolute calm, sessions at VELINA are coordinated with generous buffer intervals between patrons.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#FAF7F2]/80 font-light border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Acoustically quiet private suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Organic botanical refreshments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Trichological &amp; cellular diagnostics</span>
                </div>
              </div>
            </div>

            {/* Fictional Concept Disclaimer */}
            <div className="p-6 bg-[#F5EFE6] border border-[#E8DFC8] space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#8C6D58] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Demonstration Notice</span>
              </div>
              <p className="text-xs text-[#171210]/75 font-light leading-relaxed">
                VELINA is a fictional beauty salon concept created by <strong>MLM STUDIOS</strong> to demonstrate world-class luxury web design. No physical address or operating telephone line is represented.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
                Appointment Etiquette &amp; FAQ
              </h4>
              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#E8DFC8] bg-[#FAF7F2] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs font-medium text-[#171210] hover:text-[#C5A059] transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#8C6D58] shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-[#171210]/70 font-light leading-relaxed border-t border-[#E8DFC8]/50 pt-2 animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
