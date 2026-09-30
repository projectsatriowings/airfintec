import React from 'react';

export default function ServicesPage({ setActivePage }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'crisis_alert',
      badge: '< 24h Emergency Response',
      badgeClass: 'bg-brand-orange text-white',
      title: 'Emergency Tube Plugging',
      desc: 'Rapid on-site isolation of ruptured, corroded, or leaking finned tubes. Specialized tapered metal and mechanical ring plugs preserve train operation without full plant shutdown.',
      bullets: [
        'In-situ leak pinpointing & pressure testing',
        'Tapered brass, CS & SS316 plug installation',
        'Zero-leak hydrotest verification before re-start'
      ],
      btnText: 'Mobilize Plugging Team',
      btnClass: 'bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 text-white shadow-md hover:shadow-lg font-extrabold'
    },
    {
      icon: 'heat_pump',
      badge: 'Turnaround Essential',
      badgeClass: 'bg-brand-blue text-white',
      title: 'Turnaround Field Retubing',
      desc: 'Complete bundle retubing during scheduled refinery turnaround. Removal of legacy damaged finned tubes, tube sheet hole cleaning, re-expansion, and NDT validation.',
      bullets: [
        'Torque & wall-reduction controlled pneumatic expansion',
        'Eddy Current testing & tube sheet seat inspection',
        'Supply of pre-cut extruded/embedded finned tubes'
      ],
      btnText: 'Request Retubing Quote',
      btnClass: 'bg-gradient-to-r from-sky-500 via-brand-blue to-blue-600 text-white shadow-md hover:shadow-lg font-extrabold'
    },
    {
      icon: 'precision_manufacturing',
      badge: 'ASME Field Repair',
      badgeClass: 'bg-emerald-600 text-white',
      title: 'Header Box & Plug Refacing',
      desc: 'On-site machining and seat refacing of corroded header plug threads and gasket sealing faces. Elimination of persistent header box weeping leaks.',
      bullets: [
        'Thread chasing & tap re-conditioning',
        'Gasket seating surface precision lapping',
        'Supply of replacement SA105 / SA350 shoulder plugs'
      ],
      btnText: 'Inquire Header Repair',
      btnClass: 'bg-slate-900 hover:bg-slate-800 text-white font-extrabold shadow-sm'
    },
    {
      icon: 'construction',
      badge: 'Structural Scope',
      badgeClass: 'bg-amber-600 text-white',
      title: 'ACHE Erection & Fan Deck Assembly',
      desc: 'Full field assembly of structural steel plenum chambers, fan rings, louver dampers, drive motors, and dynamic blade pitching for optimal airflow distribution.',
      bullets: [
        'Laser alignment of fan drive motor shafts',
        'Vibration harmonic analysis & pitch balancing',
        'Louver actuator control system setup'
      ],
      btnText: 'Request Erection Specs',
      btnClass: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md font-extrabold'
    },
    {
      icon: 'air',
      badge: 'Thermal Audit',
      badgeClass: 'bg-purple-600 text-white',
      title: 'Thermal Performance Diagnostics',
      desc: 'On-site thermal imaging, air velocity profile mapping, and heat dissipation audits to identify air recirculation bottlenecks and fouling in finned tube banks.',
      bullets: [
        'Infrared thermography scan for dead tube loops',
        'Anemometer airflow grid measurements',
        'Thermal rating calculation under API 661'
      ],
      btnText: 'Book Performance Audit',
      btnClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md font-extrabold'
    },
    {
      icon: 'published_with_changes',
      badge: 'Engineering Kits',
      badgeClass: 'bg-teal-600 text-white',
      title: 'Custom Spares Turnaround Kits',
      desc: 'Pre-packaged, tagged spares kits containing exact plug quantities, replacement finned tubes, and spiral wound gaskets matched to specific unit tag numbers.',
      bullets: [
        'Pre-machined SA105 shoulder plugs with EN 10204 MTC',
        'Pre-cut tube lengths packaged in sea-worthy crates',
        'Custom tagged for immediate site distribution'
      ],
      btnText: 'Order Spares Kit',
      btnClass: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md font-extrabold'
    }
  ];

  return (
    <div className="space-y-0">
      <section className="py-10 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">Turnkey Execution Capabilities</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">ACHE Core Field Engineering Services</h1>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-3xl font-semibold">From 24/7 emergency tube plugging to complex turnaround retubing and structural fan deck erection.</p>
        </div>
      </section>

      <section className="py-12 bg-sky-50/70 dark:bg-brand-dark-deep">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-brand-orange/70 hover:border-brand-orange shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all duration-300 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-slate-800 flex items-center justify-center border border-orange-200 dark:border-slate-700 shadow-xs">
                    <span className="material-symbols-outlined text-xl text-brand-orange">{s.icon}</span>
                  </div>
                  <span className={`font-mono text-[10px] uppercase font-extrabold px-3 py-1 rounded shadow-xs inline-block ${s.badgeClass}`}>{s.badge}</span>
                  <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">{s.title}</h2>
                  <p className="text-slate-800 dark:text-slate-300 text-xs leading-relaxed font-semibold">{s.desc}</p>
                  <ul className="text-xs font-sans text-slate-700 dark:text-slate-400 space-y-2">
                    {s.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-brand-orange text-sm mt-0.5 font-bold flex-shrink-0">check_circle</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleNav('contact')}
                  className={`w-full font-mono text-xs uppercase font-extrabold py-3 rounded-xl text-center transition-all cursor-pointer ${s.btnClass}`}
                >
                  {s.btnText}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
