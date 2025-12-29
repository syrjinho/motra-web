
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-500">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-[-0.05em] hover:text-[#D4AF37] transition-colors cursor-pointer">MOTRA</span>
        </div>
        
        <div className="hidden lg:flex space-x-12 text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">
          <a href="#inventory" className="hover:text-white transition-all">Inventory</a>
          <a href="#ai-concierge" className="hover:text-white transition-all">AI Concierge</a>
          <a href="#about" className="hover:text-white transition-all">Experience</a>
          <a href="#contact" className="hover:text-white transition-all">Logistics</a>
        </div>

        <button className="px-6 py-2.5 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-md bg-white/[0.02]">
          Private Access
        </button>
      </div>
    </nav>
  );
};

export default Header;
