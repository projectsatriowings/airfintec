import React from 'react';

export default function SectorsPage() {
  return (
    <div className="space-y-0">
      <section className="py-10 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">Industrial Track Record</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">Industry Sectors &amp; Turnaround Case Studies</h1>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-3xl font-semibold">Serving petroleum refineries, petrochemical plants, offshore gas processing facilities, and power generation ACC units across major industrial corridors.</p>
        </div>
      </section>

      <section className="py-12 bg-sky-50/70 dark:bg-brand-dark-deep">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
              <span className="material-symbols-outlined text-brand-orange text-4xl">oil_barrel</span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Hydrocarbon Refining</h3>
              <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Crude distillation unit overhead condensers, hydrocracker coolers, and vacuum distillation air exchangers.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
              <span className="material-symbols-outlined text-brand-blue text-4xl">science</span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Petrochemical Plants</h3>
              <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Ethylene cracking gas coolers, polymer monomer condensations, and aggressive chemical processing loops.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
              <span className="material-symbols-outlined text-emerald-600 text-4xl">air</span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Natural Gas &amp; FPSO</h3>
              <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Wellhead gas dehydration coolers, LNG liquefaction trains, and compact offshore FPSO module ACHE units.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
              <span className="material-symbols-outlined text-amber-600 text-4xl">bolt</span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Power &amp; ACC Condensers</h3>
              <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Combined cycle steam turbine air-cooled condensers (ACC) and generator lube oil cooling circuits.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white">Turnaround Field Case Studies</h2>

            <div className="space-y-6">
              
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-orange text-white font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs">Emergency Mobilization</span>
                    <span className="text-slate-700 dark:text-slate-400 font-mono text-xs font-bold">CDU Refinery Unit • Jamnagar Corridor</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Emergency 36-Hour Tube Bundle Plugging &amp; Retubing for 150k BPD CDU Exchanger</h3>
                  <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">
                    <strong className="text-slate-900 dark:text-white">Challenge:</strong> Unexpected tube wall rupture in crude overhead air cooler threatened total unit shutdown at $250,000/day revenue loss.<br/>
                    <strong className="text-slate-900 dark:text-white">AFTS Solution:</strong> AFTS emergency team mobilized within 6 hours from Chennai with 150 tapered brass isolation plugs and pre-cut SA179 extruded finned tube inventory. In-situ plugging isolated leak path, allowing partial unit restart while retubing kit was assembled.<br/>
                    <strong className="text-slate-900 dark:text-white">Result:</strong> Zero trip downtime; client saved an estimated $2.8M in avoided outage loss.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-sky-50 dark:bg-slate-950 p-6 rounded-2xl border border-sky-200 dark:border-slate-800 text-center space-y-2 font-mono text-xs shadow-inner">
                  <span className="text-slate-700 dark:text-slate-400 font-bold block">Outage Loss Averted:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-display font-extrabold text-3xl block">$2.8 Million</span>
                  <span className="text-slate-800 dark:text-slate-300 font-bold text-[11px] block">Response Time: 6 Hours</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-blue text-white font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs">Turnaround Retubing</span>
                    <span className="text-slate-700 dark:text-slate-400 font-mono text-xs font-bold">Petrochemical Ethylene Plant • Dahej</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">120 G-Fin High-Temperature Tube Swap under Tight 5-Day Shutdown Window</h3>
                  <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">
                    <strong className="text-slate-900 dark:text-white">Challenge:</strong> High ambient temperatures in summer caused ethylene gas outlet temp to spike due to fin degradation on 15-year old G-fin tubes operating at 380°C.<br/>
                    <strong className="text-slate-900 dark:text-white">AFTS Solution:</strong> AFTS manufactured 120 embedded G-fin tubes with SS316L inner core and Al 1100 fins. On-site retubing team replaced tubes, re-machined header box seats, and conducted 350 bar hydrotest within 4 days.<br/>
                    <strong className="text-slate-900 dark:text-white">Result:</strong> Exchanger duty restored to 105% original thermal design rating; plant achieved record throughput.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-sky-50 dark:bg-slate-950 p-6 rounded-2xl border border-sky-200 dark:border-slate-800 text-center space-y-2 font-mono text-xs shadow-inner">
                  <span className="text-slate-700 dark:text-slate-400 font-bold block">Thermal Duty Restored:</span>
                  <span className="text-brand-blue font-display font-extrabold text-3xl block">105% Design</span>
                  <span className="text-slate-800 dark:text-slate-300 font-bold text-[11px] block">Hydrotest Rating: 350 Bar</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
