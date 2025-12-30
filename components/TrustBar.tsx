
import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">
          Trusted by Premier Sellers & Global Buyers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <span className="text-2xl font-serif font-bold tracking-tighter">CARFAX</span>
          <span className="text-2xl font-serif font-bold tracking-tighter">DP WORLD</span>
          <span className="text-2xl font-serif font-bold tracking-tighter">MAERSK</span>
          <span className="text-2xl font-serif font-bold tracking-tighter">AUTOCHECK</span>
          <span className="text-2xl font-serif font-bold tracking-tighter">VINPOWER</span>
        </div>
      </div>
    </section>
  );
};
