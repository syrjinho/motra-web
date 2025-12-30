import React from 'react';

const SUV_COLLECTION = [
  {
    name: "Range Rover Autobiography",
    year: "2024",
    price: "$113,500",
    img: "https://canadianautoreview.ca/wp-content/uploads/2024/07/rr-ab-35.jpg",
    status: "Verified",
    specs: "4.4L V8 • LWB"
  },
  {
    name: "Porsche Cayenne Turbo",
    year: "2024",
    price: "$148,500",
    img: "https://images.pistonheads.com/nimg/47779/blobid0.jpg",
    status: "Export Ready",
    specs: "4.0L V8 • S"
  },
  {
    name: "Mercedes-Benz G63 AMG",
    year: "2023",
    price: "$109,000",
    img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=600",
    status: "Certified",
    specs: "AMG-Power V8"
  },
  {
    name: "Lamborghini Urus SE",
    year: "2024",
    price: "$260,000",
    img: "https://www.lamborghinihouston.com/static/dealer-12175/2023-lamborghini-urus-front-three-quarters-3-1664461514.jpeg",
    status: "New Asset",
    specs: "657 HP • AWD"
  }
];

export const VehicleGallery: React.FC = () => {
  return (
    <section id="inventory" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div>
            <h2 className="text-5xl font-serif mb-4"><span className="blue-gradient uppercase">MOTRA</span> Fleet</h2>
            <p className="text-gray-500 tracking-wide uppercase text-xs font-bold">Curated US Inventory for MENA Logistics</p>
          </div>
          <div className="flex gap-4 mt-8">
             <button className="px-6 py-3 border border-white/10 rounded-full text-xs font-bold hover:bg-white/5 transition-all">All Assets</button>
             <button className="px-6 py-3 border border-sky-500/50 rounded-full text-xs font-bold text-sky-400 hover:bg-sky-500/10 transition-all">Trending</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUV_COLLECTION.map((car, idx) => (
            <div key={idx} className="group relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-sky-500/10">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Badges */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <span className="bg-sky-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {car.status}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-sky-400 hover:text-black transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                  </button>
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">{car.specs}</p>
                  <h3 className="text-xl font-serif font-bold mb-1 leading-tight">{car.name}</h3>
                  <div className="flex justify-between items-baseline mt-4">
                    <span className="text-xl blue-gradient font-bold">{car.price}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{car.year}</span>
                  </div>
                </div>
                
                {/* Hover Reveal Button */}
                <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-16 bg-sky-400 flex items-center justify-center transition-all duration-300 overflow-hidden cursor-pointer">
                  <span className="text-black font-black uppercase text-xs tracking-[0.2em]">Acquire Asset</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500">
           <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase mb-4 md:mb-0">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> 12 New Listings Today</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> $12M Trading Volume</span>
           </div>
           <button className="text-xs font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-2 uppercase tracking-widest">
             See Full 2024 Collection
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </button>
        </div>
      </div>
    </section>
  );
};