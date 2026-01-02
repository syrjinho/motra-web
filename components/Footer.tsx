import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <p className="text-2xl font-serif font-bold tracking-tight blue-gradient mb-2">MOTRA</p>
            <p className="text-[10px] text-gray-500 tracking-[0.1em] uppercase font-bold">chris.chun@motra.us</p>
            <p className="text-[10px] text-gray-500 tracking-[0.1em] uppercase font-bold mt-1">108 Moffett Blvd. Mountain View, CA 94043</p>
          </div>
          <div className="flex gap-12 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:chris.chun@motra.us" className="hover:text-white transition-colors">Contact Support</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center cursor-pointer hover:bg-white/10">
              <span className="text-lg">𝕏</span>
            </div>
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center cursor-pointer hover:bg-white/10">
              <span className="text-lg">In</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Motra AI Inc. All Rights Reserved. Cross-border verified.
        </div>
      </div>
    </footer>
  );
};