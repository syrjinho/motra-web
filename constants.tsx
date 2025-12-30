import React from 'react';
import { Car, Feature } from './types';

export const LUXURY_SUVS: Car[] = [
  {
    id: '1',
    make: 'Range Rover',
    model: 'Autobiography P530',
    year: 2024,
    price: 168500,
    image: 'https://images.unsplash.com/photo-1606248231110-5e3940be0eeb?auto=format&fit=crop&w=1200&q=80',
    mileage: '1,200 km',
    engine: '4.4L V8 Twin Turbo',
    status: 'available'
  },
  {
    id: '2',
    make: 'Lamborghini',
    model: 'Urus Performante',
    year: 2023,
    price: 260000,
    image: 'https://images.unsplash.com/photo-1581404099043-34e85973693e?auto=format&fit=crop&w=1200&q=80',
    mileage: '3,500 km',
    engine: '4.0L V8 Twin-Turbo',
    status: 'available'
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'G 63 AMG',
    year: 2024,
    price: 179000,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80',
    mileage: '500 km',
    engine: '4.0L V8 Biturbo',
    status: 'available'
  },
  {
    id: '4',
    make: 'Bentley',
    model: 'Bentayga S',
    year: 2023,
    price: 245000,
    image: 'https://images.unsplash.com/photo-1631557008781-6f4e135be3c0?auto=format&fit=crop&w=1200&q=80',
    mileage: '2,800 km',
    engine: '4.0L V8 Twin-Turbo',
    status: 'available'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'AI Valuation',
    description: 'Real-time market analysis using deep learning for accurate vehicle pricing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'AI-verified VIN data',
    description: 'Verified accident report, inspection history, title and images only.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Virtual Concierge',
    description: '24/7 AI-powered assistance for sourcing, negotiation, and delivery logistics.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  }
];