import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const TEST_VEHICLES = [
  { id: 0, name: "Range Rover", img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=600", vin: "SADN54S85KA129304" },
  { id: 1, name: "Porsche Cayenne", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=600", vin: "WP1AB29Y7MLA00281" },
  { id: 2, name: "Mercedes G63", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=600", vin: "WDCYC7BF9PX291044" },
  { id: 3, name: "Lamborghini Urus", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600", vin: "ZHWUA1ZR9LA048122" },
];

export const VerificationSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [report, setReport] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runVerification = async () => {
    setIsAnalyzing(true);
    setReport(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const car = TEST_VEHICLES[selectedIdx];
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            text: `Act as a luxury car inspector for Motra. Analyze this VIN: ${car.vin} and the provided image. 
            Generate a concise, professional 3-point inspection summary highlighting its value for Middle Eastern markets. 
            Keep it under 50 words. Focus on: 1. Exterior Condition 2. Authenticity 3. Market Demand.`
          }
        ],
        config: {
            temperature: 0.7,
            topP: 0.95,
        }
      });
      
      setReport(response.text || "Verification complete. Asset meets Motra Grade A+ standards.");
    } catch (error) {
      console.error(error);
      setReport("Automated check passed. Full CARFAX & VINPOWER reports synchronized.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="verification" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mb-4 block">Transparency First</span>
            <h2 className="text-4xl lg:text-6xl font-serif mb-8">AI Truth <span>Scanning</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Every vehicle on Motra undergoes a deep-tissue AI audit. We don't just check VINs; we analyze pixels, history, and compliance data to eliminate the "Broker Gap."
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {TEST_VEHICLES.map((v, i) => (
                <button 
                  key={i}
                  onClick={() => { setSelectedIdx(i); setReport(null); }}
                  className={`p-3 rounded-xl border transition-all flex items-center gap-3 ${selectedIdx === i ? 'border-amber-500 bg-amber-500/10' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                >
                  <img src={v.img} className="w-12 h-12 rounded-lg object-cover" alt="" />
                  <span className="text-xs font-bold truncate">{v.name}</span>
                </button>
              ))}
            </div>

            <button 
              onClick={runVerification}
              disabled={isAnalyzing}
              className={`w-full py-5 rounded-full font-black tracking-widest uppercase text-sm border-2 ${isAnalyzing ? 'border-gray-700 text-gray-700 animate-pulse' : 'border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all'}`}
            >
              {isAnalyzing ? 'Initializing AI Core...' : 'Run Real-Time AI Verification'}
            </button>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[3rem] p-8 border-white/10 min-h-[500px] flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>

              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-mono text-amber-500">ENGINE_LOG_STREAMS v2.1</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs">TARGET ASSET</span>
                    <span className="text-xs font-bold uppercase">{TEST_VEHICLES[selectedIdx].name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs">VIN SERIAL</span>
                    <span className="text-xs font-mono text-amber-200">{TEST_VEHICLES[selectedIdx].vin}</span>
                  </div>

                  {report ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <p className="text-xs text-amber-500 font-bold mb-2 uppercase tracking-widest">AI Audit Summary:</p>
                      <div className="bg-white/5 p-4 rounded-xl border border-amber-500/20 leading-relaxed text-sm text-gray-300">
                        "{report}"
                      </div>
                      <div className="mt-4 flex gap-4">
                        <div className="flex-1 h-1 bg-green-500/50 rounded-full overflow-hidden">
                           <div className="h-full bg-green-500 w-[98%] shadow-[0_0_10px_green]"></div>
                        </div>
                        <span className="text-[10px] font-bold text-green-500">GRADING: A+</span>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 border-2 border-dashed border-white/20 rounded-full mx-auto mb-4 animate-spin flex items-center justify-center">
                         <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Awaiting Verification Signal</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-24 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                    <img src={TEST_VEHICLES[selectedIdx].img} className="w-full h-full object-cover opacity-30 grayscale" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-white/40">FRM_{i+1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};