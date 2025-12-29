
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Spline Background - Updated with new scene */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/quantum-wS2V9Su0nAzY1vfo00xAO2ba/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="Motra Quantum Dynamic Core"
          className="w-full h-full"
        ></iframe>
        {/* Subtle bottom gradient to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none"></div>
      </div>

      {/* Center text remains removed per previous request for a minimal luxury look */}
      <div className="relative z-10 text-center px-6 max-w-5xl pointer-events-none">
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-pulse pointer-events-none">
        <span className="uppercase tracking-[0.4em] text-white/20 text-[10px] font-bold">Scroll to Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
