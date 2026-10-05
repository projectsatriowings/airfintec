import React from 'react';

export default function SpecModal({ isOpen, onClose, productName, onQuoteRequest }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* POPPING SPEC MODAL CARD WITH GRADIENT BORDER & GLOW */}
      <div id="spec-modal-content" className="relative bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#070D1E] border-2 border-sky-400/60 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(2,132,199,0.4)] overflow-hidden">
        
        {/* Glowing Background Radial Orbs */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="space-y-2 relative z-10">
          <span className="font-mono text-xs text-sky-400 uppercase font-extrabold tracking-wider">ASME Technical Data Sheet</span>
          <h3 className="font-display font-bold text-2xl text-white">{productName || 'Extruded Aluminum Finned Tubes'}</h3>
        </div>

        <div className="space-y-3 font-mono text-xs bg-slate-950/90 p-4 rounded-xl border border-slate-800 text-slate-300 relative z-10">
          <div className="flex justify-between py-1.5 border-b border-slate-900"><span>Design Mandate:</span> <span className="text-white font-bold">API 661 / ISO 13706</span></div>
          <div className="flex justify-between py-1.5 border-b border-slate-900"><span>Pressure Testing:</span> <span className="text-white font-bold">100% Hydrotested up to 400 bar</span></div>
          <div className="flex justify-between py-1.5 border-b border-slate-900"><span>Metallurgical MTC:</span> <span className="text-white font-bold">EN 10204 3.1 &amp; 3.2 Certified</span></div>
          <div className="flex justify-between py-1.5 border-b border-slate-900"><span>Traceability:</span> <span className="text-white font-bold">Heat Code Stamped</span></div>
          <div className="flex justify-between py-1.5"><span>Stock Availability:</span> <span className="text-emerald-400 font-bold">In-Stock Chennai Facility</span></div>
        </div>

        <div className="flex gap-3 font-mono text-xs relative z-10">
          <button onClick={() => window.print()} className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-3 rounded-xl flex items-center gap-1.5 font-bold cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">print</span>
            <span>Print Spec</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onQuoteRequest();
            }}
            className="flex-1 bg-gradient-to-r from-sky-500 via-brand-blue to-cyan-500 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold py-3.5 rounded-xl text-center shadow-md transition-all cursor-pointer uppercase"
          >
            Request Quotation For This Spec
          </button>
        </div>
      </div>
    </div>
  );
}
