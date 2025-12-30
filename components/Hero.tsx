import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-[0.2em] text-sky-400 uppercase">AI-powered used car trading platform</span>
          </div>
          <h1 className="text-5xl lg:text-[4.8rem] font-serif font-medium leading-[1.1] mb-8 text-white">
            Luxury SUVs, <br />
            <span>Without Borders.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            The elite gateway for US luxury sellers and Middle Eastern buyers. 
            Powered by AI to ensure every VIN is a verified truth.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="btn-blue px-12 py-4 rounded-full text-black font-black text-sm tracking-widest uppercase shadow-2xl shadow-sky-500/20">
              Explore Inventory
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 to-transparent blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            <img 
              src="https://media.architecturaldigest.com/photos/5a25c495514be80fddaacd66/16:9/w_2240,c_limit/Lamborghini%20Urus%2013.jpg" 
              alt="Lamborghini Urus Luxury SUV" 
              className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-10 left-10">
              <p className="text-xs font-bold text-white tracking-widest uppercase mb-1 drop-shadow-md">Featured Asset</p>
              <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">Lamborghini Urus</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};