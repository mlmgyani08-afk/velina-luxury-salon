import React from 'react';
import { X, Sparkles, Clock, Check } from 'lucide-react';
import { ServiceItem } from '../data/salonData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#171210] border border-[#E8DFC8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Visual Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-[#221B18]">
          <img
            src={service.image}
            alt={service.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171210] via-black/40 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 p-2 bg-black/40 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#DFBE75] font-medium">
              {service.category}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-center gap-4 text-xs text-[#8C6D58] border-b border-[#E8DFC8] pb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>{service.duration} Session</span>
            </div>
            <span>·</span>
            <div className="text-[#171210] font-medium">{service.pricing}</div>
            <span>·</span>
            <span>Tailored Consultation Included</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              The Experience &amp; Philosophy
            </h4>
            <p className="text-sm text-[#171210]/80 leading-relaxed font-light">
              {service.fullDesc}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Sequential Ritual Steps
            </h4>
            <div className="space-y-2">
              {service.ritualSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-[#171210]/75">
                  <div className="w-4 h-4 rounded-full bg-[#EFE9DF] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-[#8C6D58] font-light">
              Pricing tailored during personal consultation
            </div>
            <button
              onClick={() => {
                onClose();
                onBook(service.id);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#171210] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-[#171210] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request This Ritual</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
