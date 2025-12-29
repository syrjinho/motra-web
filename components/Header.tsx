
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter">MOTRA</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/60">
          <a href="#inventory" className="hover:text-white transition-colors">Inventory</a>
          <a href="#ai-concierge" className="hover:text-white transition-colors">AI Concierge</a>
          <a href="#about" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Logistics</a>
        </div>

        <button className="px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-all duration-300">
          Private Access
        </button>
      </div>
    </nav>
  );
};

export default Header;
