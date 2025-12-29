
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InventoryCard from './components/InventoryCard';
import AIConcierge from './components/AIConcierge';
import { LUXURY_SUVS, FEATURES } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Force the window to start at the top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section id="about" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-[32px] glass hover:bg-white/[0.05] transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-24 px-6 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4">Current Selection</p>
                <h2 className="text-4xl md:text-5xl font-serif">A curated <span className="italic">Portfolio.</span></h2>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
                  Filter by Make
                </button>
                <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
                  Price: High to Low
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {LUXURY_SUVS.map(car => (
                <InventoryCard key={car.id} car={car} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                View All Inventory
              </button>
            </div>
          </div>
        </section>

        <AIConcierge />

        {/* Trust/Partners Section */}
        <section className="py-24 px-6 text-center">
          <p className="text-white/30 text-xs tracking-[0.5em] uppercase mb-12 font-bold">Institutional Partners</p>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-30 grayscale hover:grayscale-0 transition-all">
             <span className="text-2xl font-serif tracking-tighter">BENTLEY</span>
             <span className="text-2xl font-serif tracking-tighter">SOTHEBY'S</span>
             <span className="text-2xl font-serif tracking-tighter">GOLDMAN SACHS</span>
             <span className="text-2xl font-serif tracking-tighter">VOGUE</span>
             <span className="text-2xl font-serif tracking-tighter">FORBES</span>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto rounded-[60px] bg-gradient-to-br from-white to-[#D4AF37] p-1 text-black overflow-hidden shadow-2xl shadow-white/5">
            <div className="bg-[#f5f5f5] rounded-[59px] px-8 py-20 text-center relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37] rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-serif mb-8">Ready for the <br /> <span className="italic">Elevated</span> life?</h2>
                <p className="text-black/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                  Apply for private membership to access off-market listings and direct AI concierge procurement services.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="w-full sm:w-auto px-12 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform text-lg shadow-xl shadow-black/20">
                    Apply for Membership
                  </button>
                  <button className="w-full sm:w-auto px-12 py-5 border border-black/10 text-black font-bold rounded-full hover:bg-black/5 transition-colors text-lg">
                    Contact Logistics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold tracking-tighter">MOTRA</span>
              </div>
              <p className="text-white/40 max-sm leading-relaxed mb-6">
                The world's premier intelligence platform for luxury crossover acquisition. Redefining high-end automotive trade through technology.
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Marketplace</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white">Bentley Collection</a></li>
                <li><a href="#" className="hover:text-white">Porsche Selection</a></li>
                <li><a href="#" className="hover:text-white">Range Rover Series</a></li>
                <li><a href="#" className="hover:text-white">Inventory Archives</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white">Our AI Vision</a></li>
                <li><a href="#" className="hover:text-white">Inspection Criteria</a></li>
                <li><a href="#" className="hover:text-white">Press & Media</a></li>
                <li><a href="#" className="hover:text-white">Private Logistics</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-xs text-white/30 uppercase tracking-[0.2em] font-bold">
            <p>© 2024 Motra Technologies Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Sale</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
