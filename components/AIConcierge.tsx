
import React, { useState, useRef, useEffect } from 'react';
import { getCarConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Motra Private Concierge. I am your specialized AI for luxury crossover acquisition. How may I assist your search today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getCarConsultation(newHistory);
    setMessages([...newHistory, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-concierge" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-6">Expertise Redefined</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Consult the <span className="gold-gradient italic">Neural</span> Concierge.
          </h2>
          <p className="text-white/40 text-lg mb-12 font-light leading-relaxed max-w-xl">
            Experience bespoke procurement. Our AI doesn't just search; it analyzes global market volatility, vehicle history, and technical specs to find the singular vehicle that matches your status.
          </p>
          
          <div className="space-y-6">
            {[
              { label: 'Real-time Valuation', desc: 'Predictive depreciation models for exotic SUVs.' },
              { label: 'Off-Market Sourcing', desc: 'Access to private collections not listed publicly.' },
              { label: 'Performance Audit', desc: 'Deep-dive comparison into powertrain and dynamics.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-1">{item.label}</h4>
                  <p className="text-white/30 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          {/* Subtle Glow behind the chat */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-[42px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative glass rounded-[40px] h-[650px] flex flex-col overflow-hidden border-white/5 bg-black/40 shadow-3xl">
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                </div>
                <div>
                  <p className="font-bold tracking-tight">Motra Neural Core</p>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Encrypted Session</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-[13px] leading-relaxed transition-all ${
                    msg.role === 'user' 
                      ? 'bg-white text-black font-semibold shadow-xl' 
                      : 'bg-white/[0.03] border border-white/5 text-white/80'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] px-6 py-4 rounded-3xl flex gap-1.5 items-center border border-white/5">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-8 bg-black/60 backdrop-blur-xl border-t border-white/5">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Enter your inquiry..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded-full py-5 px-8 focus:outline-none focus:border-[#D4AF37]/50 transition-all text-sm font-light placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 p-4 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-20 shadow-lg shadow-white/5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;
