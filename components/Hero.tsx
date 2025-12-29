
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Updated Spline 3D Scene - quantum-RhEfGxSlSOadQtlSMt9cqnzX */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/quantum-RhEfGxSlSOadQtlSMt9cqnzX/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="Motra Neural Quantum Core"
          className="w-full h-full scale-[1.05]"
        ></iframe>
        
        {/* Luxury Vignette and Cinematic Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.7)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none"></div>
      </div>

      {/* 
          Minimalist Hero Composition: 
          No text overlay to allow the intricate 3D animation to represent 
          the "Motra Neural Core" brand identity.
      */}

      {/* High-End Scroll Discovery Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 animate-pulse pointer-events-none">
        <span className="uppercase tracking-[0.8em] text-white/20 text-[9px] font-bold">Initiating Luxury Acquisition</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
