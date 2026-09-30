import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark-deep border-t border-slate-800 text-slate-400 pt-16 pb-12 font-sans text-xs">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <span class="font-display font-extrabold text-xl text-white">Air-Fin Tech</span>
            <span class="font-mono text-[10px] text-brand-orange uppercase">Technical Services</span>
          </div>
          <p class="text-slate-400 leading-relaxed">
            Air-Fin Technical Services Pvt Ltd is India's premier engineering specialist in Air-Cooled Heat Exchanger (ACHE) spares, emergency tube plugging, field retubing, and AVL-certified turnaround solutions.
          </p>
          <span class="inline-block font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-slate-300">GSTIN: 33AAZCA9024C12M</span>
        </div>

        <div class="space-y-3">
          <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider">Quick Navigation</h4>
          <ul class="space-y-2 font-mono text-slate-400">
            <li><button onClick={() => handleNav('home')} class="hover:text-brand-orange transition-colors cursor-pointer">Home Page</button></li>
            <li><button onClick={() => handleNav('about')} class="hover:text-brand-orange transition-colors cursor-pointer">About Us &amp; Works</button></li>
            <li><button onClick={() => handleNav('spares')} class="hover:text-brand-orange transition-colors cursor-pointer">Spares Catalog</button></li>
            <li><button onClick={() => handleNav('services')} class="hover:text-brand-orange transition-colors cursor-pointer">Engineering Services</button></li>
            <li><button onClick={() => handleNav('sectors')} class="hover:text-brand-orange transition-colors cursor-pointer">Sectors &amp; Case Studies</button></li>
            <li><button onClick={() => handleNav('quality')} class="hover:text-brand-orange transition-colors cursor-pointer">Quality &amp; AVL Checker</button></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider">Works &amp; Headquarters</h4>
          <div class="space-y-2 text-slate-400">
            <p>Plot No 305B, Moogambigai Nagar,<br/>Kovur, Poonamallee, Chennai - 600128,<br/>Tamil Nadu, India</p>
            <p class="font-mono text-slate-300">Phone: +91 7695828840 / +91 9840204194</p>
            <p class="font-mono text-slate-300">Email: afts@airfintec.com / selvas@airfintec.com</p>
          </div>
        </div>

        <div class="space-y-3">
          <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider">Technical Dispatch Whitepapers</h4>
          <p class="text-slate-400">Subscribe for critical ACHE retubing best practices &amp; turnaround protocols.</p>
          <form class="flex flex-col gap-2 font-mono" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to AFTS Technical Dispatch.'); }}>
            <input type="email" required placeholder="engineer@refinery.com" class="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-slate-200 focus:outline-none focus:border-brand-orange" />
            <button type="submit" class="bg-brand-orange hover:bg-brand-orange-hover text-white py-2.5 rounded-lg uppercase font-bold transition-colors cursor-pointer">Subscribe Dispatch</button>
          </form>
        </div>

      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
        <p>© 2025 Air-Fin Technical Services Pvt Ltd. All rights reserved.</p>
        <div class="flex items-center gap-6 uppercase">
          <button onClick={() => handleNav('quality')} class="hover:text-white transition-colors cursor-pointer">ASME &amp; API 661 Compliance</button>
          <button onClick={() => handleNav('contact')} class="hover:text-white transition-colors cursor-pointer">Contact Engineering</button>
        </div>
      </div>
    </footer>
  );
}
