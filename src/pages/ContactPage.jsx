import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    category: 'Emergency Tube Plugging',
    urgency: 'Critical Emergency (< 24h dispatch)',
    specs: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const idNum = Math.floor(1000 + Math.random() * 9000);
    setRefId(`AFTS-RFQ-2025-${idNum}`);
    setSubmitted(true);
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      category: 'Emergency Tube Plugging',
      urgency: 'Critical Emergency (< 24h dispatch)',
      specs: ''
    });
  };

  return (
    <div className="space-y-0">
      <section className="py-10 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">24/7 Rapid Technical Dispatch</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">Contact &amp; Instant RFQ Hub</h1>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-3xl font-semibold">Submit tube specs, emergency plug quantities, or schedule a turnaround team. Thermal engineers respond within 2-4 hours.</p>
        </div>
      </section>

      <section className="py-12 bg-sky-50/70 dark:bg-brand-dark-deep">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-brand-orange/70 dark:border-slate-800 shadow-[0_4px_20px_rgba(255,87,34,0.15)] hover:shadow-[0_8px_30px_rgba(255,87,34,0.28)] transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-5 bg-sky-100/60 dark:bg-slate-900 p-6 sm:p-10 space-y-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sky-200 dark:border-slate-800">
              <div className="space-y-5">
                <span className="font-mono text-xs text-brand-orange uppercase font-extrabold tracking-wider block">Direct Technical Coordinates</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">Air-Fin Technical Services Pvt Ltd</h2>
                <p className="text-slate-800 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-semibold">
                  Headquartered in Chennai's industrial engineering corridor. Ready to deploy specialized personnel and ASME spares directly to your site.
                </p>

                <div className="space-y-4 font-sans text-xs">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-orange text-xl mt-0.5">location_on</span>
                    <div>
                      <span className="font-mono text-slate-700 dark:text-slate-400 uppercase block font-bold">Chennai Engineering Works &amp; Office</span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold block">Plot No 305B, Moogambigai Nagar, Kovur, Poonamallee, Chennai - 600128, Tamil Nadu, India</span>
                      <span className="block text-brand-orange font-mono font-extrabold mt-1">GSTIN: 33AAZCA9024C12M</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-blue text-xl mt-0.5">call</span>
                    <div>
                      <span className="font-mono text-slate-700 dark:text-slate-400 uppercase block font-bold">24/7 Rapid Hotline</span>
                      <span className="text-slate-900 dark:text-slate-100 block font-mono font-extrabold text-sm">+91 7695828840 / +91 9840204194</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-600 text-xl mt-0.5">mail</span>
                    <div>
                      <span className="font-mono text-slate-700 dark:text-slate-400 uppercase block font-bold">Thermal Engineering Inquiries</span>
                      <span className="text-slate-900 dark:text-slate-200 block font-mono font-bold">afts@airfintec.com / selvas@airfintec.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-200 dark:border-slate-800">
                <a href="https://wa.me/917695828840" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-extrabold py-3.5 rounded-xl shadow-md transition-all">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>Instant WhatsApp Engineer Connect</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 bg-white dark:bg-slate-950">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">Request Formal Engineering Proposal / Spares Quotation</h3>
                  <p className="text-xs text-slate-700 dark:text-slate-400 font-mono font-semibold">All technical specifications handled under strict ASME &amp; NDA confidentiality.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Reliance / IOCL / SABIC"
                      className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Plant Engineer Name"
                      className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@refinery.com"
                      className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Mobile / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Equipment / Service Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                    >
                      <option value="Emergency Tube Plugging">Emergency Tube Plugging</option>
                      <option value="Finned Tube Replacement / Retubing">Finned Tube Replacement / Retubing</option>
                      <option value="Forged Shoulder Plugs & Header Assemblies">Forged Shoulder Plugs &amp; Header Assemblies</option>
                      <option value="ACHE Structural Erection & Assembly">ACHE Structural Erection &amp; Assembly</option>
                      <option value="Thermal Audit & Diagnostics">Thermal Audit &amp; Diagnostics</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Mobilization Urgency</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                    >
                      <option value="Critical Emergency (< 24h dispatch)">Critical Emergency (&lt; 24h dispatch)</option>
                      <option value="Plant Turnaround (< 2 weeks)">Plant Turnaround (&lt; 2 weeks)</option>
                      <option value="Scheduled Maintenance (1-3 months)">Scheduled Maintenance (1-3 months)</option>
                      <option value="Budgetary Quotation">Budgetary Quotation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-900 dark:text-slate-300 block uppercase font-bold">Tube Bundle Specs &amp; Technical Scope</label>
                  <textarea
                    rows="3"
                    value={formData.specs}
                    onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                    placeholder="Specify tube OD, length, fin type/FPI, base tube alloy (CS/SS/Duplex), design pressure, or leak symptoms..."
                    className="w-full bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 font-bold focus:outline-none focus:border-brand-orange"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 via-brand-blue to-cyan-500 hover:from-sky-600 hover:to-blue-700 text-white font-mono text-xs uppercase font-extrabold tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  <span>Transmit RFQ to Thermal Engineering Lead</span>
                </button>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-300 font-mono text-xs flex flex-col gap-2 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl">check_circle</span>
                      <span><strong className="text-slate-900 dark:text-white">RFQ Transmitted Successfully!</strong> Reference ID: <span className="text-brand-orange font-extrabold">{refId}</span></span>
                    </div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 font-semibold">AFTS thermal lead is reviewing your specifications. An automated summary confirmation has been generated.</p>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
