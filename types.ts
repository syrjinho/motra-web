
import React from 'react';

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: string;
  engine: string;
  status: 'available' | 'reserved' | 'sold';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}