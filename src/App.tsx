/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { SERVICES_LIST, ServiceItem } from './data/salonData';
import { playLuxuryChime } from './utils/audio';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectServiceDetail = (serviceId: string) => {
    const srv = SERVICES_LIST.find((s) => s.id === serviceId) || null;
    setSelectedDetailService(srv);
    if (isSoundEnabled) playLuxuryChime('subtle');
  };

  const handleToggleSound = () => {
    const next = !isSoundEnabled;
    setIsSoundEnabled(next);
    if (next) playLuxuryChime('radiant');
  };

  // Route resolver
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return (
          <AboutPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={navigateTo}
          />
        );
      case '/services':
        return (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onSelectService={handleSelectServiceDetail}
            isSoundEnabled={isSoundEnabled}
          />
        );
      case '/gallery':
        return (
          <GalleryPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={navigateTo}
            isSoundEnabled={isSoundEnabled}
          />
        );
      case '/testimonials':
        return (
          <TestimonialsPage
            onOpenBooking={() => handleOpenBooking()}
            isSoundEnabled={isSoundEnabled}
          />
        );
      case '/contact':
        return (
          <ContactPage
            isSoundEnabled={isSoundEnabled}
          />
        );
      case '/':
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
            onSelectService={handleSelectServiceDetail}
            isSoundEnabled={isSoundEnabled}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171210] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Top Luxury Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Editorial Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Interactive Booking Drawer/Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedServiceId}
        isSoundEnabled={isSoundEnabled}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onBook={(srvId) => handleOpenBooking(srvId)}
      />
    </div>
  );
}
