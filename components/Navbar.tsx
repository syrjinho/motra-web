
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-serif font-bold tracking-tight blue-gradient">MOTRA</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
            <a href="#inventory" className="hover:text-white transition-colors">Inventory</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-medium hover:text-white transition-colors text-gray-400">Sign In</button>
          <button className="btn-blue px-6 py-2.5 rounded-full text-black text-sm font-bold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};