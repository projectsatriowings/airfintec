import React from 'react';

export default function AboutPage() {
  const milestones = [
    { year: '2023', title: 'Corporate Incorporation', desc: 'Air-Fin Technical Services Pvt Ltd incorporated on Dec 27, 2023 in Chennai by heat transfer authorities with 20+ years refinery experience.' },
    { year: '2024', title: 'Chennai Engineering Works Setup', desc: 'Established modern 305B Kovur workshop with CNC tube sheet reamers, high-frequency finning rigs, and 400 bar digital hydrotest stations.' },
    { year: '2024', title: 'Alloy Strategic Warehouse', desc: 'Stocked over 50 metric tons of raw finned tube alloys (SA179, SS316L, Duplex 2205) and 10,000+ forged SA105 shoulder plugs.' },
    { year: '2025', title: '< 24h Global Rapid Mobilization', desc: 'Successfully executed over 45 emergency plant turnaround interventions across Indian refinery corridors with 100% zero-defect record.' }
  ];

  return (
    <div className="space-y-0">
      <section className="py-10 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">Engineering Authority &amp; Corporate Background</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">About Air-Fin Technical Services</h1>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-3xl leading-relaxed">
            Established by heat transfer industry veterans possessing over two decades of hands-on refinery and petrochemical plant experience. Built specifically to solve critical ACHE spares bottlenecks and emergency turnaround outages.
          </p>
        </div>
      </section>

      <section className="py-12 bg-sky-50/70 dark:bg-brand-dark-deep">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-3 py-1 rounded-full font-mono text-xs uppercase font-extrabold shadow-xs">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                <span>Our Founding Mission</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                Eliminating Unplanned Trip Tolerance &amp; Prolonged Shutdown Cycles
              </h2>

              <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                Air-Fin Technical Services Private Limited (AFTS) was incorporated in Chennai, Tamil Nadu to address an urgent void in thermal heat exchanger maintenance: the severe lack of immediate, high-precision, API 661 compliant ACHE spares and rapid emergency field execution.
              </p>

              <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                Whether dealing with leaking tube bundle joints, blown headers in hydrocrackers, or high-temperature fin corrosion, generic suppliers cannot meet stringent ASME Section VIII standards under tight turnaround deadlines. AFTS maintains extensive raw alloy inventory (SA179, SA214, SS316L, Duplex 2205) and specialized mobile retubing rigs ready for immediate dispatch.
              </p>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-brand-orange/70 dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] space-y-3 font-mono text-xs">
                <div className="text-brand-orange font-extrabold uppercase">Official Corporate Identification</div>
                <div className="flex flex-col sm:flex-row justify-between text-slate-800 dark:text-slate-300 gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span>Registered Entity: Air-Fin Technical Services Pvt Ltd</span>
                  <span>Incorporated: Dec 27, 2023</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between text-slate-800 dark:text-slate-300 gap-2 border-b border-sky-200 dark:border-slate-800 pb-2">
                  <span>GSTIN Number: <strong className="text-slate-900 dark:text-white">33AAZCA9024C12M</strong></span>
                  <span>Headquarters: Tamil Nadu, India</span>
                </div>
                <div className="text-slate-700 dark:text-slate-400 font-semibold">Works Address: Plot No. 305B, Moogambigai Nagar, Kovur, Poonamallee, Chennai - 600128</div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-brand-orange/70 dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] p-3 space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 relative">
                  <img src="/ache_workshop.jpg" alt="AFTS Chennai Workshop Operations" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700">
                    <span className="font-mono text-xs text-brand-orange uppercase font-extrabold block">Chennai Engineering &amp; Hydrotesting Works</span>
                    <span className="font-display text-xs font-bold text-white">Equipped with 400 Bar Hydro Rigs &amp; CNC Tube Sheet Machining</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CHENNAI FACILITY MACHINERY & INFRASTRUCTURE */}
          <div className="space-y-6 border-t border-sky-200 dark:border-slate-800 pt-12">
            <div className="space-y-1.5 text-center max-w-2xl mx-auto">
              <span className="font-mono text-xs text-brand-blue uppercase tracking-widest font-bold">In-House Manufacturing Assets</span>
              <h3 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white">Chennai Engineering Works Specifications</h3>
              <p className="text-slate-700 dark:text-slate-400 text-sm font-semibold">State-of-the-art machinery deployed at our Kovur works to ensure zero dimensional deviation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
                <span className="material-symbols-outlined text-brand-orange text-3xl">build</span>
                <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">CNC Thread &amp; Seat Lathes</h4>
                <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Precision CNC turning for SA105 and SA350 LF2 shoulder plugs up to 2.5 inch UNF/NPT threads.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
                <span className="material-symbols-outlined text-brand-blue text-3xl">compress</span>
                <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">Pneumatic Tube Expanders</h4>
                <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Torque-controlled hydraulic &amp; pneumatic tube expansion tools for uniform wall reduction.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
                <span className="material-symbols-outlined text-emerald-600 text-3xl">speed</span>
                <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">400 Bar Hydrotest Rigs</h4>
                <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">Dual-stage high-pressure hydrostatic test pumps with digital chart recorders calibrated to NABL standards.</p>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="space-y-6 border-t border-sky-200 dark:border-slate-800 pt-12">
            <div className="text-center space-y-1">
              <span className="font-mono text-xs text-brand-orange uppercase font-bold tracking-widest block">Corporate Journey</span>
              <h3 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white">AFTS Company Timeline</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-brand-orange/70 hover:border-brand-orange dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all space-y-3">
                  <span className="font-display font-extrabold text-2xl text-brand-orange">{m.year}</span>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">{m.title}</h4>
                  <p className="text-slate-800 dark:text-slate-300 text-xs font-semibold leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
