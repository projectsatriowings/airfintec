import React, { useState } from 'react';

export default function RfqModal({ isOpen, onClose, defaultProduct, onNavigateToContact }) {
  if (!isOpen) return null;

  const handleProceed = () => {
    onClose();
    if (onNavigateToContact) {
      onNavigateToContact('contact');
    } else {
      window.location.hash = 'contact';
    }
  };

  const quotes = [
    {
      quote: "Precision thermal engineering is not just a standard—it is our absolute commitment to zero-downtime refinery operations.",
      author: "Er. S. M. Rahamadullah",
      title: "Managing Director, AFTS Chennai"
    },
    {
      quote: "When every minute of shutdown costs millions, ASME Sec VIII certified speed and 100% hydrotested reliability make all the difference.",
      author: "AFTS Quality & Technical Advisory Board",
      title: "ASME & API 661 Compliance Team"
    },
    {
      quote: "Eradicating tube failures and maximizing heat transfer efficiency with precision finning & rapid field emergency dispatch.",
      author: "Heat Exchanger Field Ops Team",
      title: "Chennai Works & On-Site Emergency Crew"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      {/* POPPING PROMO POPUP CARD WITH GRADIENT BORDER & GLOW */}
      <div className="relative bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#070D1E] border-2 border-brand-orange/60 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(255,107,0,0.35)] overflow-hidden">
        
        {/* Glowing Background Radial Orbs */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Right Close Circle Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800/90 hover:bg-brand-orange text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 hover:border-brand-orange transition-all cursor-pointer z-10 shadow-md"
          aria-label="Close popup"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Top Header Badge & Branding */}
        <div className="flex items-start gap-4 pr-8">
          {/* Logo Badge */}
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-orange via-amber-400 to-brand-blue p-0.5 shadow-glow-orange flex-shrink-0 animate-pulse">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1.5 shadow-inner">
              <img src="Air-Fin Tech logo.png" alt="Air-Fin Tech" className="h-11 w-auto object-contain" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-extrabold uppercase">
              <span className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-2.5 py-0.5 rounded-full shadow-md tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-xs animate-spin">bolt</span>
                <span>EMERGENCY RFQ POPUP</span>
              </span>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-amber-400">verified</span>
                <span>ISO 9001 &amp; API 661</span>
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Request Instant <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-brand-orange to-amber-500">RFQ &amp; Engineering Quote</span>
            </h3>
          </div>
        </div>

        {defaultProduct && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Selected Equipment Spec:</span>
            <span className="text-amber-400 font-bold uppercase tracking-wider">{defaultProduct}</span>
          </div>
        )}

        {/* FEATURED INSPIRATIONAL TECHNICAL QUOTE BOX */}
        <div className="relative bg-slate-900/90 rounded-2xl p-5 border border-amber-500/30 space-y-3 shadow-inner">
          <span className="material-symbols-outlined text-4xl text-amber-500/30 absolute top-3 right-4 select-none pointer-events-none">
            format_quote
          </span>
          
          <div className="relative z-10 space-y-2">
            <p className="text-slate-200 text-xs sm:text-sm italic font-sans leading-relaxed tracking-wide">
              "{quotes[0].quote}"
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] font-mono">
              <span className="text-amber-400 font-bold">{quotes[0].author}</span>
              <span className="text-slate-400">{quotes[0].title}</span>
            </div>
          </div>
        </div>

        {/* TRUST HIGHLIGHTS GRID */}
        <div className="grid grid-cols-2 gap-3 text-xs font-sans">
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-lg">timer</span>
            </div>
            <div>
              <strong className="text-white block font-display text-[11px]">&lt; 2 Hour Response</strong>
              <span className="text-slate-400 text-[10px]">Instant technical pricing</span>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-lg">verified_user</span>
            </div>
            <div>
              <strong className="text-white block font-display text-[11px]">EN 10204 3.1 MTC</strong>
              <span className="text-slate-400 text-[10px]">Full material traceability</span>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="space-y-3 pt-1">
          <button
            onClick={handleProceed}
            className="w-full bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange hover:from-amber-400 hover:to-brand-orange text-slate-950 font-display text-sm uppercase font-extrabold tracking-wider py-4 px-6 rounded-2xl shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-3 group"
          >
            <span className="material-symbols-outlined text-xl group-hover:animate-bounce">bolt</span>
            <span>TRANSMIT REQUEST RFQ NOW</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1 pt-1">
            <a 
              href="tel:+917695828840" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span className="material-symbols-outlined text-brand-orange text-sm">call</span>
              <span>Call Hotline: +91 7695828840</span>
            </a>
            
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-300 underline cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

