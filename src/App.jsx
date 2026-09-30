import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpecModal from './components/SpecModal';
import SearchModal from './components/SearchModal';
import RfqModal from './components/RfqModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SparesPage from './pages/SparesPage';
import ServicesPage from './pages/ServicesPage';
import SectorsPage from './pages/SectorsPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Theme state ('dark' | 'light'), default 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('afts_theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('afts_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Hash-based routing sync
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'spares', 'services', 'sectors', 'quality', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHash);
    if (window.location.hash) handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
  };

  // Keyboard shortcut for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenSpec = (productName) => {
    setSelectedProduct(productName);
    setIsSpecOpen(true);
  };

  const handleOpenRfqModal = (productName = '') => {
    setSelectedProduct(productName);
    setIsRfqModalOpen(true);
  };

  const pageTitles = {
    home: 'Precision ACHE Spares & Rapid Field Engineering',
    about: 'About AFTS & Chennai Facilities',
    spares: 'Spares & Components Catalog',
    services: 'Core Engineering Services',
    sectors: 'Industry Sectors & Case Studies',
    quality: 'Quality Standards & AVL Verification',
    contact: 'Contact Us & Instant RFQ Hub'
  };

  return (
    <div class="min-h-screen flex flex-col bg-sky-50 dark:bg-brand-dark-deep text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
      {/* Top Info Bar */}
      <TopBar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenRfq={() => handleOpenRfqModal()}
      />

      {/* Subpage Breadcrumb Bar */}
      {activePage !== 'home' && (
        <div className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 py-2 px-4 lg:px-8 text-xs font-mono text-slate-700 dark:text-slate-300">
          <div className="max-w-[1600px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange('home')}
                className="text-slate-600 dark:text-slate-300 hover:text-brand-orange flex items-center gap-1 cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-sm">home</span>
                <span>Home</span>
              </button>
              <span className="text-slate-400">/</span>
              <span className="text-brand-orange font-extrabold text-xs sm:text-sm">{pageTitles[activePage]}</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold text-slate-600 dark:text-slate-400">
              <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">ISO 9001:2015</span>
              <span>•</span>
              <span className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 px-2 py-0.5 rounded border border-sky-300 dark:border-sky-800">ASME Sec VIII &amp; API 661</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Page View Renderer */}
      <main class="flex-1">
        {activePage === 'home' && <HomePage setActivePage={handlePageChange} onOpenSpec={handleOpenSpec} onOpenRfq={handleOpenRfqModal} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'spares' && <SparesPage setActivePage={handlePageChange} onOpenSpec={handleOpenSpec} onOpenRfq={handleOpenRfqModal} />}
        {activePage === 'services' && <ServicesPage setActivePage={handlePageChange} onOpenRfq={handleOpenRfqModal} />}
        {activePage === 'sectors' && <SectorsPage />}
        {activePage === 'quality' && <QualityPage setActivePage={handlePageChange} />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Floating 24/7 Support & Instant RFQ Popup Triggers */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => handleOpenRfqModal()}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 text-white font-mono text-xs uppercase font-extrabold px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(255,87,34,0.4)] hover:scale-105 transition-all cursor-pointer border border-amber-300/40"
        >
          <span className="material-symbols-outlined text-lg text-white">bolt</span>
          <span className="text-white font-extrabold">Request RFQ</span>
        </button>

        <a
          href="tel:+917695828840"
          className="flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-slate-800 dark:text-white border border-slate-700 font-mono text-xs uppercase font-extrabold px-5 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all hover:border-brand-orange cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg text-brand-orange">support_agent</span>
          <span className="hidden sm:inline text-white font-bold">24/7 Support</span>
        </a>
      </div>

      {/* Modals */}
      <SpecModal
        isOpen={isSpecOpen}
        onClose={() => setIsSpecOpen(false)}
        productName={selectedProduct}
        onQuoteRequest={() => {
          setIsSpecOpen(false);
          handleOpenRfqModal(selectedProduct);
        }}
      />

      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        defaultProduct={selectedProduct}
        onNavigateToContact={handlePageChange}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handlePageChange}
      />
    </div>
  );
}
