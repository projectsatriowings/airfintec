import React, { useState } from 'react';

export default function SparesPage({ setActivePage, onOpenSpec }) {
  const [activeCat, setActiveCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Calc #2 state
  const [od, setOd] = useState(25.4);
  const [fh, setFh] = useState(15.875);
  const [fpi, setFpi] = useState(10);

  const ratio = ((Math.PI * (od + 2 * fh) * 2 * fh * (fpi * 39.37) / 1000) / (Math.PI * od / 1000)).toFixed(1);

  const catalogItems = [
    {
      title: 'Extruded Aluminum Finned Tubes',
      cat: 'finned-tubes',
      badge: 'Extruded Fin Type',
      badgeClass: 'bg-brand-orange text-white',
      tag: 'API 661 Sec 6',
      desc: 'High-duty aluminum sleeve cold-extruded over inner tube core. 100% barrier against atmospheric corrosion up to 300°C.',
      specs: [
        { label: 'Tube OD Range:', val: '15.8 mm - 38.1 mm' },
        { label: 'Fin Height:', val: '9.5 mm - 15.8 mm' },
        { label: 'Fin Material:', val: 'Al 1060 / Al 6063' }
      ],
      keywords: 'extruded aluminum finned tubes cs sa179 ss316l duplex api661'
    },
    {
      title: 'Embedded G-Fin Heavy Duty Tubes',
      cat: 'finned-tubes',
      badge: 'Embedded G-Fin',
      badgeClass: 'bg-sky-600 text-white',
      tag: 'High Temp 400°C',
      desc: 'Aluminum fin strip helically wound under tension into CNC machined groove on base tube. Max thermal bond for cyclic vibration.',
      specs: [
        { label: 'Max Operating Temp:', val: '400°C (750°F)' },
        { label: 'Base Alloys:', val: 'SA179, SS316, Incoloy' },
        { label: 'Fin Density:', val: '8 to 11 FPI' }
      ],
      keywords: 'embedded g-fin heavy duty tubes high temp grooved aluminum 400c'
    },
    {
      title: 'L-Footed & Double L Wrapped Tubes',
      cat: 'finned-tubes',
      badge: 'L-Footed Fin',
      badgeClass: 'bg-amber-600 text-white',
      tag: 'Temp Limit 150°C',
      desc: 'Tension-wrapped aluminum fin strip with L-shaped foot providing complete wall coverage and atmospheric protection.',
      specs: [
        { label: 'Fin Foot Type:', val: 'Single L / Double L Overlap' },
        { label: 'Tube Wall Contact:', val: '100% Covered' },
        { label: 'Application:', val: 'Moderate Temp Exchangers' }
      ],
      keywords: 'l-footed wrap fin double l-foot tubes tension wrapped 150c'
    },
    {
      title: 'Forged Shoulder Plugs & Header Assemblies',
      cat: 'headers',
      badge: 'ASME Header Plugs',
      badgeClass: 'bg-emerald-600 text-white',
      tag: 'CNC Coded',
      desc: 'Precision CNC machined threaded shoulder plugs for ACHE plug header boxes. SA105, SA350 LF2, SS316 with zinc or PTFE plating.',
      specs: [
        { label: 'Thread Standard:', val: 'UNF / NPT Precision Class' },
        { label: 'Plating Options:', val: 'Zinc Plated, Phosphated, PTFE' },
        { label: 'Certificates:', val: 'EN 10204 3.1 MTC' }
      ],
      keywords: 'forged shoulder plugs header box plugs unf npt thread sa105 sa350'
    },
    {
      title: 'High-Pressure Header Plug Gaskets',
      cat: 'gaskets',
      badge: 'Header Seals',
      badgeClass: 'bg-indigo-600 text-white',
      tag: 'ASME B16.20',
      desc: 'Serrated metallic and soft iron ring gaskets specifically dimensioned for ACHE shoulder plug sealing under high pressure and thermal cycling.',
      specs: [
        { label: 'Materials:', val: 'Soft Iron, SS316, Monel' },
        { label: 'Fillers:', val: 'Flexible Graphite / PTFE' },
        { label: 'Leak Tolerance:', val: 'Zero Leak Class' }
      ],
      keywords: 'high-temp plug gaskets spiral wound serrated metallic header seals ptfe graphoil'
    },
    {
      title: 'Emergency Tube Isolation Plugs',
      cat: 'headers',
      badge: 'Rapid Response',
      badgeClass: 'bg-gradient-to-r from-brand-orange to-amber-500 text-white',
      tag: 'Emergency Isolation',
      desc: 'Tapered metal brass/CS/SS plugs and expanding high-pressure mechanical plugs for rapid in-situ sealing of failed exchanger tubes.',
      specs: [
        { label: 'Tube Sizes:', val: '5/8", 3/4", 1", 1.25" OD' },
        { label: 'Rating:', val: 'Up to 250 bar pressure' },
        { label: 'Stock Status:', val: 'In-Stock Dispatch' }
      ],
      keywords: 'emergency tube plugs tapered metal brass cs ss expanding rubber plug isolation'
    }
  ];

  const filteredItems = catalogItems.filter(item => {
    const matchesCat = activeCat === 'all' || item.cat === activeCat;
    const matchesSearch = searchQuery === '' || item.keywords.includes(searchQuery.toLowerCase().trim());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-0">
      <section className="py-10 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">ASME Coded Directory</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">Air-Cooled Heat Exchanger Spares Directory</h1>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-3xl font-semibold">Filter, review engineering tolerances, inspect metallurgical options, and request instant data sheets for all ACHE components.</p>
        </div>
      </section>

      <section className="py-12 bg-sky-50/70 dark:bg-brand-dark-deep">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-8">
          
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border-2 border-brand-orange/70 shadow-[0_4px_20px_rgba(255,87,34,0.15)] flex flex-col md:flex-row justify-between gap-4 items-center">
            <div className="flex flex-wrap gap-2 font-mono text-xs w-full md:w-auto">
              {[
                { id: 'all', label: 'All Components' },
                { id: 'finned-tubes', label: 'Finned Tubes' },
                { id: 'headers', label: 'Header Boxes & Plugs' },
                { id: 'gaskets', label: 'Gaskets & Seals' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`px-4 py-2 rounded-xl font-extrabold transition-all cursor-pointer ${
                    activeCat === cat.id ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-orange'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by alloy, code or type..."
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs font-mono text-slate-900 dark:text-slate-200 focus:outline-none focus:border-brand-orange font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-brand-orange/70 hover:border-brand-orange shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all duration-300 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs ${item.badgeClass}`}>{item.badge}</span>
                    <span className="text-slate-700 dark:text-slate-400 font-mono text-xs font-extrabold">{item.tag}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">{item.desc}</p>
                  
                  <div className="bg-sky-50 dark:bg-slate-950 p-3.5 rounded-xl space-y-1.5 font-mono text-xs border border-sky-200 dark:border-slate-800">
                    {item.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-slate-700 dark:text-slate-400">
                        <span>{sp.label}</span>
                        <span className="text-slate-900 dark:text-slate-200 font-extrabold">{sp.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <button onClick={() => onOpenSpec(item.title)} className="text-brand-orange font-mono text-xs uppercase font-extrabold flex items-center gap-1 hover:text-orange-700 cursor-pointer">
                    <span>Data Sheet</span>
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                  <button onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="bg-gradient-to-r from-sky-600 to-brand-blue hover:from-sky-700 hover:to-blue-700 text-white text-xs font-mono font-extrabold px-4 py-2 rounded-xl shadow-md transition-all cursor-pointer">
                    RFQ Spec
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* EMBEDDED TECHNICAL TUBE CALCULATOR IN SPARES CATALOG */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-brand-orange/70 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-5">
            <div className="space-y-1.5">
              <span className="bg-sky-600 text-white font-mono text-xs uppercase font-extrabold px-3 py-1 rounded-full inline-block shadow-xs">Interactive Engineering Tool</span>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Finned Tube Surface Area &amp; Extended Thermal Ratio Calculator</h3>
              <p className="text-slate-700 dark:text-slate-400 text-xs font-semibold">Select your tube outer diameter (OD), fin height, and fin density (FPI) to calculate the external heat transfer surface area multiplier over plain bare tube.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <label className="block text-slate-800 dark:text-slate-400 mb-1 font-extrabold">Base Tube OD</label>
                <select value={od} onChange={(e) => setOd(parseFloat(e.target.value))} className="w-full bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-200 font-bold">
                  <option value={25.4}>1.0 inch (25.4 mm)</option>
                  <option value={19.05}>0.75 inch (19.05 mm)</option>
                  <option value={31.75}>1.25 inch (31.75 mm)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-800 dark:text-slate-400 mb-1 font-extrabold">Fin Height</label>
                <select value={fh} onChange={(e) => setFh(parseFloat(e.target.value))} className="w-full bg-sky-50 dark:bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-200 font-bold">
                  <option value={15.875}>5/8 inch (15.875 mm)</option>
                  <option value={12.7}>1/2 inch (12.7 mm)</option>
                  <option value={9.525}>3/8 inch (9.525 mm)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-800 dark:text-slate-400 mb-1 font-extrabold">Fin Density (FPI)</label>
                <select value={fpi} onChange={(e) => setFpi(parseFloat(e.target.value))} className="w-full bg-sky-50 dark:bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-200 font-bold">
                  <option value={10}>10 Fins Per Inch (394/m)</option>
                  <option value={11}>11 Fins Per Inch (433/m)</option>
                  <option value={9}>9 Fins Per Inch (354/m)</option>
                  <option value={7}>7 Fins Per Inch (275/m)</option>
                </select>
              </div>
            </div>

            <div className="bg-sky-50 dark:bg-slate-950 p-4 rounded-xl border border-sky-200 dark:border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-800 dark:text-slate-400 font-bold">Calculated Surface Enlargement Multiplier:</span>
              <span className="font-display font-extrabold text-2xl text-brand-blue">{ratio}x</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
