import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'spares', label: 'Spares Catalog' },
    { id: 'services', label: 'Core Services' },
    { id: 'sectors', label: 'Sectors & Cases' },
    { id: 'quality', label: 'Quality & AVL' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* BRAND LOGO */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none py-1"
        >
          <div className="relative flex items-center justify-center bg-white p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs group-hover:shadow-md transition-all duration-300 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Air-Fin Technical Services" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg lg:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors leading-none">
                Air-Fin Tech
              </span>
              <span className="bg-gradient-to-r from-brand-orange to-amber-500 text-white text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider">
                PVT LTD
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-wider text-brand-blue dark:text-sky-400 uppercase font-bold mt-0.5">
              Technical Services • Chennai
            </span>
          </div>
        </button>

        {/* DESKTOP NAV BAR */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-display font-extrabold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 shadow-sm scale-[1.02]'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-orange dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* HEADER RIGHT UTILITIES */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all cursor-pointer flex items-center justify-center shadow-xs"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle dark and light theme"
          >
            <span className="material-symbols-outlined text-lg">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-lg">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-2 font-display">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                activePage === item.id 
                  ? 'bg-gradient-to-r from-brand-orange to-amber-600 text-white font-bold shadow-sm' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-brand-orange hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 py-2.5 rounded-lg font-mono text-xs uppercase font-semibold border border-slate-200 dark:border-slate-700"
            >
              <span className="material-symbols-outlined text-sm">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
              <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button>

            <a href="tel:+917695828840" className="flex items-center justify-center gap-2 bg-brand-orange text-white py-2.5 rounded-lg font-mono text-xs uppercase font-extrabold shadow-sm">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>Call 24/7 Rapid Hotline</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
