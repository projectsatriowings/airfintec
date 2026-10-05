import React, { useState, useEffect } from 'react';

export default function TopBar({ onOpenSearch }) {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOptions = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      const timeStr = now.toLocaleTimeString('en-IN', timeOptions) + ' IST';
      setIstTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 border-b border-slate-800 text-xs py-1.5 px-4 lg:px-8 font-mono">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wider uppercase font-bold text-emerald-400 text-xs">ACHE Field Specialists</span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300 font-sans text-xs font-medium">&lt; 24h Emergency Plant Turnaround &amp; Retubing Dispatch</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs">
            <span className="material-symbols-outlined text-sm text-sky-400">schedule</span>
            <span className="font-bold text-sky-300">{istTime || 'IST Live'}</span>
          </div>

          <button 
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 px-2.5 py-0.5 rounded text-slate-200 border border-slate-700 transition-colors cursor-pointer text-xs font-semibold"
          >
            <span className="material-symbols-outlined text-xs text-sky-400">search</span>
            <span>Search Specs</span>
            <kbd className="bg-slate-900 px-1 py-0.2 rounded text-[10px] text-sky-300 border border-slate-700 font-mono font-bold">Ctrl+K</kbd>
          </button>

          <div className="flex items-center gap-4 text-xs font-sans">
            <a href="tel:+917695828840" className="flex items-center gap-1 text-slate-100 hover:text-sky-400 transition-colors">
              <span className="material-symbols-outlined text-sky-400 text-sm">call</span>
              <span className="font-extrabold text-white text-xs">+91 7695828840</span>
            </a>
            <a href="mailto:afts@airfintec.com" className="hidden sm:flex items-center gap-1 text-slate-200 hover:text-sky-400 transition-colors">
              <span className="material-symbols-outlined text-brand-blue text-sm">mail</span>
              <span className="font-semibold text-slate-200 text-xs">afts@airfintec.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
