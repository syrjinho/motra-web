
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { DocumentAutomation } from './components/DocumentAutomation';
import { VehicleGallery } from './components/VehicleGallery';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <DocumentAutomation />
        <VehicleGallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
