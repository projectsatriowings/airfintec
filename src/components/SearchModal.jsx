import React, { useState } from 'react';

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchItems = [
    { title: 'Extruded Aluminum Finned Tubes', page: 'spares', desc: 'Continuous aluminum sleeve cold-extruded over inner tube core up to 300°C.' },
    { title: 'Embedded G-Fin Heavy Duty Tubes', page: 'spares', desc: 'Grooved aluminum fin strip for high temperature up to 400°C.' },
    { title: 'Forged Shoulder Plugs & Header Assemblies', page: 'spares', desc: 'CNC machined UNF/NPT SA105 and SA350 LF2 header plugs.' },
    { title: 'Emergency Tube Plugging Service', page: 'services', desc: '< 24h rapid field isolation of leaking finned tubes.' },
    { title: 'Turnaround Field Retubing', page: 'services', desc: 'On-site tube replacement, pneumatic expanding, and hydrotesting.' },
    { title: 'Refinery Downtime Loss ROI Calculator', page: 'home', desc: 'Calculate money saved by AFTS emergency dispatch.' },
    { title: 'Quality Standards & AVL Checker', page: 'quality', desc: 'Verify prequalification for Reliance, IOCL, BPCL, SABIC.' },
    { title: 'Chennai Engineering Facility & Headquarters', page: 'about', desc: 'Plot No. 305B, Kovur, Poonamallee, Chennai - 600128.' }
  ];

  const filtered = searchItems.filter(
    item => item.title.toLowerCase().includes(query.toLowerCase()) || item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* POPPING SEARCH MODAL CARD WITH GRADIENT BORDER & GLOW */}
      <div className="relative bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#070D1E] border-2 border-brand-orange/60 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(255,107,0,0.35)] overflow-hidden">
        
        {/* Glowing Background Radial Orbs */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 relative z-10">
          <div className="flex items-center gap-2 text-white font-mono text-sm font-bold">
            <span className="material-symbols-outlined text-brand-orange text-xl">search</span>
            <span>Search AFTS Technical Database</span>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-orange text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <div className="relative z-10 space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search finned tubes, shoulder plugs, emergency plugging, case studies..."
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 font-mono focus:outline-none focus:border-brand-orange shadow-inner"
          />

          <div className="max-h-80 overflow-y-auto space-y-2 font-mono text-xs pr-1">
            {filtered.length === 0 ? (
              <div className="p-6 text-slate-400 text-center bg-slate-950/60 rounded-xl border border-slate-800">
                No matching technical records found for "{query}".
              </div>
            ) : (
              filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onNavigate(item.page);
                    onClose();
                  }}
                  className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl hover:border-brand-orange hover:bg-slate-900 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="text-white group-hover:text-brand-orange font-bold text-sm transition-colors">{item.title}</div>
                    <div className="text-slate-400 text-xs">{item.desc}</div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-brand-orange text-base group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
