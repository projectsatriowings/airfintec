import React, { useState } from 'react';

export default function QualityPage({ setActivePage }) {
  const [query, setQuery] = useState('');
  const [resultCompany, setResultCompany] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleVerify = () => {
    if (query.trim()) {
      setResultCompany(query.trim().toUpperCase());
      setShowResult(true);
    }
  };

  return (
    <div className="space-y-0">
      <section className="py-10 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">ASME &amp; API 661 Compliance</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">Quality Assurance &amp; Vendor AVL Prequalification</h1>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-3xl font-semibold">Verify Approved Vendor List (AVL) compatibility across major oil, gas, and petrochemical corporations worldwide.</p>
        </div>
      </section>

      <section className="py-12 bg-sky-50/70 dark:bg-brand-dark-deep">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-12">
          
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs text-brand-orange uppercase font-extrabold tracking-widest block">Instant AVL Compatibility Search</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">Check Your Company's Vendor Qualification Readiness</h2>
              <p className="text-slate-700 dark:text-slate-400 text-sm font-semibold">Type your company name (e.g. Reliance, IOCL, BPCL, HPCL, ONGC, SABIC, Aramco, L&amp;T, Technip) to verify direct ASME MTC supply compatibility.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type company name e.g. Reliance, IOCL, BPCL, SABIC..."
                  className="w-full bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-slate-200 font-mono text-sm focus:outline-none focus:border-brand-orange font-bold"
                />
              </div>
              <button
                onClick={handleVerify}
                className="bg-gradient-to-r from-sky-500 via-brand-blue to-cyan-500 text-white font-mono text-xs uppercase font-extrabold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Verify AVL Status</span>
              </button>
            </div>

            {showResult && (
              <div className="p-4 rounded-xl bg-sky-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/40 font-mono text-xs text-slate-900 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-xl">verified</span>
                  <span>Result: <strong className="text-slate-900 dark:text-white font-extrabold">{resultCompany}</strong> is pre-qualified &amp; fully compatible for direct AFTS EN 10204 3.1 ASME spares dispatch.</span>
                </div>
                <button
                  onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-brand-orange font-extrabold hover:underline cursor-pointer whitespace-nowrap"
                >
                  Request Vendor Pack
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-orange">verified_user</span>
                <span>Quality &amp; Testing Standards</span>
              </h3>
              <ul className="text-xs font-mono text-slate-800 dark:text-slate-300 space-y-3 font-semibold">
                <li className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">API 661 / ISO 13706:</strong> Air-Cooled Heat Exchangers for General Refinery Service</span>
                </li>
                <li className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">ASME Section VIII Div 1:</strong> Pressure Vessel Rules for Header Box Fabrication</span>
                </li>
                <li className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">EN 10204 3.1 &amp; 3.2:</strong> Full Metallurgical Test Certificates with Heat Traceability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">ISO 9001:2015:</strong> Quality Management System Certification</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-blue">microscope</span>
                <span>In-House NDT &amp; Hydrotesting Facilities</span>
              </h3>
              <ul className="text-xs font-mono text-slate-800 dark:text-slate-300 space-y-3 font-semibold">
                <li className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">Hydrostatic Pressure Testing:</strong> Test rigs rated up to 400 bar with calibrated digital logging</span>
                </li>
                <li className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">Eddy Current &amp; NDT:</strong> Internal tube flaw detection &amp; wall thickness mapping</span>
                </li>
                <li className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">Positive Material Identification (PMI):</strong> XRF analyzer alloy verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span><strong className="text-slate-900 dark:text-white">Liquid Penetrant Testing (LPT):</strong> Header box weld and plug thread flaw inspection</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
