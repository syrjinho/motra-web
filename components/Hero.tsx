
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <iframe 
          src="https://my.spline.design/quantum-rwAGj4N2kaqac3LFDzmJuDwz/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="Quantum Spline Background"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* All hero content removed per user request to showcase the 3D background */}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span className="uppercase tracking-widest">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
