import React, { useState } from 'react';

export default function HomePage({ setActivePage, onOpenSpec }) {
  const [quickMaterial, setQuickMaterial] = useState('Carbon Steel SA214 / SA179');
  const [quickFin, setQuickFin] = useState('Extruded Aluminum High Duty');
  const [quickResult, setQuickResult] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // ROI Calculator state
  const [rev, setRev] = useState(150000);
  const [oemDays, setOemDays] = useState(21);
  const [aftsDays, setAftsDays] = useState(4);

  const savedDays = Math.max(0, oemDays - aftsDays);
  const totalSavings = savedDays * rev;

  const faqs = [
    {
      q: 'How fast can AFTS dispatch emergency tube plugging teams to our refinery?',
      a: 'AFTS emergency mobilization teams can be dispatched within 6 to 24 hours globally, and within 2-4 hours across South India industrial corridors. We carry pre-machined tapered brass, carbon steel, and SS316 emergency isolation plugs along with mobile pneumatic installation tools.'
    },
    {
      q: 'What material test certificates (MTC) do you provide with ACHE spares?',
      a: 'All AFTS finned tubes, forged shoulder plugs, and header assemblies are accompanied by full EN 10204 3.1 or 3.2 Material Test Certificates. Every component is heat-code stamped and fully traceable to the mill source.'
    },
    {
      q: 'What is the difference between Extruded Fin and Embedded G-Fin tubes?',
      a: 'Extruded aluminum finned tubes feature a continuous aluminum sleeve cold-extruded over an inner base tube, creating a 100% corrosion barrier up to 300°C. Embedded G-fin tubes have the aluminum fin strip helically wound into a CNC machined groove on the outer wall of the tube, providing superior mechanical bonding under cyclic vibration and operating temperatures up to 400°C.'
    },
    {
      q: 'When should an ACHE bundle be plugged vs fully retubed?',
      a: 'Emergency tube plugging is recommended for immediate leak isolation during operational unit slowdowns when less than 10% of total tubes are affected. Full retubing or bundle replacement is indicated during scheduled turnarounds when tube wall degradation exceeds ASME/API 661 corrosion allowances.'
    },
    {
      q: 'Do you conduct on-site pressure testing and NDT inspections?',
      a: 'Yes. AFTS brings 400 bar digital hydrostatic pressure rigs, Eddy Current internal flaw detectors, and Liquid Penetrant (LPT) testing benches directly to your plant site for complete API 661 compliance verification.'
    },
    {
      q: 'Are AFTS spares pre-qualified for major oil and gas company Approved Vendor Lists (AVL)?',
      a: 'Yes. AFTS products and engineering services comply fully with Reliance, IOCL, BPCL, HPCL, ONGC, SABIC, Saudi Aramco, L&T, Technip Energies, and EIL vendor specifications. You can verify your company status using our interactive AVL Checker tool.'
    }
  ];

  const alloys = [
    { name: 'Carbon Steel SA179 / SA214', conductivity: '50 W/m·K', temp: '350°C', corrosion: 'Standard (Al Sleeve Protected)', app: 'Crude Distillation & General Refining' },
    { name: 'Stainless Steel 316L / 304L', conductivity: '16 W/m·K', temp: '450°C', corrosion: 'High Chemical & Acid Resistance', app: 'Petrochemical Cracking & Sour Gas' },
    { name: 'Duplex 2205 / Super Duplex', conductivity: '19 W/m·K', temp: '300°C', corrosion: 'Extreme Chloride Stress Corrosion', app: 'Offshore FPSO & Seawater Cooling' },
    { name: 'Copper Nickel CuNi 70/30', conductivity: '29 W/m·K', temp: '380°C', corrosion: 'Superior Anti-Fouling & Marine Resistance', app: 'Coastal Power Plants & ACC Condensers' }
  ];

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-sky-50 dark:bg-brand-dark-deep overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 bg-white dark:bg-brand-dark border border-brand-orange/40 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
              <span className="font-mono text-xs text-slate-800 dark:text-slate-200 tracking-wider uppercase font-extrabold">
                Emergency Turnaround: <span className="text-brand-orange font-bold">&lt; 24h Global Dispatch</span>
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Precision ACHE Spares &amp; Rapid <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-500 to-brand-blue">Field Retubing Engineering</span>
            </h1>

            <p className="text-slate-800 dark:text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-semibold">
              Eradicating refinery and petrochemical plant downtime. Air-Fin Technical Services delivers ASME &amp; API 661 compliant Air-Cooled Heat Exchanger finned tubes, header boxes, emergency tube plugging, and turnkey field retubing within industry-fastest turnaround schedules.
            </p>

            <div className="space-y-5 pt-1">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 text-white font-display text-xs uppercase font-extrabold tracking-wider px-7 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <span>Request Instant Quote</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>

                <button
                  onClick={() => { setActivePage('spares'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-display text-xs uppercase font-extrabold tracking-wider px-7 py-3.5 rounded-xl shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-amber-400">inventory_2</span>
                  <span>Explore Spares Catalog</span>
                </button>
              </div>

              {/* Quick Tube Spec Interactive Widget */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-brand-orange/70 dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] max-w-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-800 dark:text-slate-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-brand-orange font-extrabold">
                    <span className="material-symbols-outlined text-sm">tune</span>
                    Interactive Tube Spec Builder
                  </span>
                  <span className="text-slate-700 dark:text-slate-400 font-semibold">Instant Parameter Check</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-800 dark:text-slate-400 mb-1 font-mono font-bold">Base Tube Alloy</label>
                    <select value={quickMaterial} onChange={(e) => setQuickMaterial(e.target.value)} className="w-full bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange">
                      <option value="Carbon Steel SA214 / SA179">Carbon Steel SA214 / SA179</option>
                      <option value="Stainless Steel 316L / 304L">Stainless Steel 316L / 304L</option>
                      <option value="Duplex 2205 / Super Duplex">Duplex 2205 / Super Duplex</option>
                      <option value="Copper Nickel CuNi 70/30">Copper Nickel CuNi 70/30</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-800 dark:text-slate-400 mb-1 font-mono font-bold">Fin Type</label>
                    <select value={quickFin} onChange={(e) => setQuickFin(e.target.value)} className="w-full bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange">
                      <option value="Extruded Aluminum High Duty">Extruded Aluminum High Duty</option>
                      <option value="Embedded G-Type (High Temp)">Embedded G-Type (High Temp)</option>
                      <option value="L-Footed / Double L Wrap">L-Footed / Double L Wrap</option>
                      <option value="Bimetallic Tension Fin">Bimetallic Tension Fin</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button onClick={() => setQuickResult(true)} className="w-full bg-gradient-to-r from-sky-600 to-brand-blue hover:from-sky-700 hover:to-blue-700 text-white font-mono text-xs uppercase font-extrabold py-2 px-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer">
                      <span>Inspect Spec</span>
                      <span className="material-symbols-outlined text-xs">search</span>
                    </button>
                  </div>
                </div>

                {quickResult && (
                  <div className="text-xs bg-sky-50 dark:bg-slate-950 p-3 rounded-lg border border-sky-200 dark:border-brand-blue/40 text-slate-900 dark:text-slate-200 font-mono flex items-center justify-between">
                    <span>Selected: <strong className="text-brand-orange font-extrabold">{quickFin} on {quickMaterial}</strong></span>
                    <button onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sky-700 dark:text-sky-400 hover:underline font-extrabold flex items-center gap-1 cursor-pointer">
                      RFQ This Spec <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-brand-orange/70 dark:border-slate-700/80 p-3 shadow-[0_4px_20px_rgba(255,87,34,0.15)]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                <img src="/ache_render.jpg" alt="Air-Cooled Heat Exchanger Render" className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'; }} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-brand-orange uppercase font-extrabold">AVL Approved Vendor</span>
                    <span className="block text-sm font-display font-bold text-white">ASME &amp; API 661 Coded</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-mono text-brand-orange uppercase font-extrabold">Chennai Engineering Works</span>
                    <span className="block text-sm font-display font-bold text-white">Plot No 305B, Kovur, Chennai</span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-400 text-3xl">check_circle</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* METRICS TICKER */}
      <section className="bg-slate-950 text-white border-y border-slate-800 py-6">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-brand-orange">20+ Yrs</span>
            <span className="block font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">Thermal Engineering Expertise</span>
          </div>
          <div className="space-y-1">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-sky-400">100%</span>
            <span className="block font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">AVL Coded Spares</span>
          </div>
          <div className="space-y-1">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-400">&lt; 24 Hrs</span>
            <span className="block font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">Emergency Field Mobilization</span>
          </div>
          <div className="space-y-1">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-amber-400">Zero Defect</span>
            <span className="block font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">400 Bar Hydrotest Integrity</span>
          </div>
        </div>
      </section>

      {/* FEATURED SPARES SHOWCASE */}
      <section className="py-14 bg-sky-50 dark:bg-brand-dark-deep relative border-b border-sky-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold block">Engineered Components</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">Featured ACHE Spares Catalog</h2>
              <p className="text-slate-800 dark:text-slate-300 text-sm max-w-2xl font-semibold">Manufactured and tested to API 661 and ASME Section VIII specifications for immediate turnaround dispatch.</p>
            </div>
            <button onClick={() => { setActivePage('spares'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase font-extrabold hover:underline cursor-pointer">
              <span>View All Spares Categories</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-brand-orange/70 hover:border-brand-orange shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="bg-brand-orange text-white font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs inline-block">Extruded Fin Tubes</span>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Extruded Aluminum Finned Tubes</h3>
                <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">Continuous aluminum sleeve cold-extruded over inner tube core. 100% barrier against atmospheric corrosion up to 300°C.</p>
                
                <div className="bg-sky-50 dark:bg-slate-950 p-3.5 rounded-xl font-mono text-xs space-y-1.5 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-slate-200">
                  <div className="flex justify-between"><span>Base Tube:</span> <span className="font-extrabold text-slate-900 dark:text-white">CS SA179, SS 316L, Duplex</span></div>
                  <div className="flex justify-between"><span>Fin Pitch:</span> <span className="font-extrabold text-slate-900 dark:text-white">7 to 11 Fins Per Inch</span></div>
                </div>
              </div>
              <button onClick={() => onOpenSpec('Extruded Aluminum Finned Tubes')} className="w-full bg-gradient-to-r from-sky-600 via-brand-blue to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-mono text-xs font-extrabold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span>View Full Technical Data</span>
                <span className="material-symbols-outlined text-sm">visibility</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-brand-orange/70 hover:border-brand-orange shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="bg-sky-600 text-white font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs inline-block">Embedded G-Fin</span>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Embedded G-Fin Heavy Duty Tubes</h3>
                <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">Aluminum fin strip helically wound under tension into CNC machined groove on base tube. Max thermal bond for cyclic vibration up to 400°C.</p>
                
                <div className="bg-sky-50 dark:bg-slate-950 p-3.5 rounded-xl font-mono text-xs space-y-1.5 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-slate-200">
                  <div className="flex justify-between"><span>Max Temp:</span> <span className="font-extrabold text-slate-900 dark:text-white">400°C (750°F)</span></div>
                  <div className="flex justify-between"><span>Mechanical Bond:</span> <span className="font-extrabold text-slate-900 dark:text-white">High Vibration Rated</span></div>
                </div>
              </div>
              <button onClick={() => onOpenSpec('Embedded G-Fin Heavy Duty Tubes')} className="w-full bg-gradient-to-r from-sky-600 via-brand-blue to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-mono text-xs font-extrabold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span>View Full Technical Data</span>
                <span className="material-symbols-outlined text-sm">visibility</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-brand-orange/70 hover:border-brand-orange shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="bg-emerald-600 text-white font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs inline-block">ASME Coded Header</span>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Forged Shoulder Plugs &amp; Assemblies</h3>
                <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">Precision CNC machined threaded shoulder plugs for header boxes in SA105, SA350 LF2, and Stainless Steel with PTFE coating.</p>
                
                <div className="bg-sky-50 dark:bg-slate-950 p-3.5 rounded-xl font-mono text-xs space-y-1.5 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-slate-200">
                  <div className="flex justify-between"><span>Threads:</span> <span className="font-extrabold text-slate-900 dark:text-white">UNF &amp; NPT Precision Coded</span></div>
                  <div className="flex justify-between"><span>Certification:</span> <span className="font-extrabold text-slate-900 dark:text-white">EN 10204 3.1 MTC Included</span></div>
                </div>
              </div>
              <button onClick={() => onOpenSpec('Forged Shoulder Plugs & Header Assemblies')} className="w-full bg-gradient-to-r from-sky-600 via-brand-blue to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-mono text-xs font-extrabold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span>View Full Technical Data</span>
                <span className="material-symbols-outlined text-sm">visibility</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* METALLURGY COMPARISON MATRIX */}
      <section className="py-14 bg-white dark:bg-slate-900 border-b border-sky-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold block">Engineering Reference</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">Base Tube Alloy &amp; Metallurgy Matrix</h2>
            <p className="text-slate-800 dark:text-slate-300 text-sm font-semibold">Compare thermal conductivity, corrosion resistance, operating temperature limits, and target industrial applications for ACHE base tubing.</p>
          </div>

          <div className="overflow-x-auto bg-white dark:bg-slate-950 rounded-2xl border-2 border-brand-orange/70 shadow-[0_4px_20px_rgba(255,87,34,0.15)] p-2">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-white dark:bg-slate-900 text-brand-orange uppercase font-extrabold border-b border-sky-200 dark:border-slate-800">
                <tr>
                  <th className="p-3.5">Alloy Grade</th>
                  <th className="p-3.5">Thermal Conductivity</th>
                  <th className="p-3.5">Max Temp</th>
                  <th className="p-3.5">Corrosion Rating</th>
                  <th className="p-3.5">Target Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-200/70 dark:divide-slate-800/60 text-slate-900 dark:text-slate-300">
                {alloys.map((al, idx) => (
                  <tr key={idx} className="hover:bg-white/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5 font-extrabold text-slate-900 dark:text-white">{al.name}</td>
                    <td className="p-3.5 font-bold">{al.conductivity}</td>
                    <td className="p-3.5 text-sky-700 dark:text-brand-blue font-extrabold">{al.temp}</td>
                    <td className="p-3.5 font-semibold">{al.corrosion}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-slate-200">{al.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
