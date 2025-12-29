
import React from 'react';
import { Car } from '../types';

interface Props {
  car: Car;
}

const InventoryCard: React.FC<Props> = ({ car }) => {
  return (
    <div className="group glass rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest border border-white/10">
          {car.status}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{car.make} {car.model}</h3>
            <p className="text-white/40 text-sm">{car.year} • {car.engine}</p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-[10px] uppercase tracking-wider">Starting from</p>
            <p className="text-lg font-bold text-[#D4AF37]">${car.price.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-center p-2 rounded-xl bg-white/5 border border-white/5">
            <p className="text-white/30 text-[10px] uppercase tracking-tighter">Mileage</p>
            <p className="text-xs font-semibold">{car.mileage}</p>
          </div>
          <div className="text-center p-2 rounded-xl bg-white/5 border border-white/5">
            <p className="text-white/30 text-[10px] uppercase tracking-tighter">AI Inspection</p>
            <p className="text-xs font-semibold text-green-400">98% Match</p>
          </div>
        </div>

        <button className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/10 font-medium hover:bg-white hover:text-black transition-all">
          View Specifications
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
