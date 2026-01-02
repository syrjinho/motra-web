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
          <div className="flex flex-col items-start gap-4">
            <button className="btn-blue px-10 py-4 rounded-full text-black font-black text-sm tracking-widest uppercase shadow-2xl shadow-sky-500/20">
              Explore Inventory
            </button>
            <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-4 group/wa">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#25D366] fill-current">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="text-white">WHATSAPP 1-415-416-5630</span>
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