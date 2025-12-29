
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

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
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
    <section id="ai-concierge" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Consult the <span className="gold-gradient italic">Intelligence.</span>
          </h2>
          <p className="text-white/50 text-lg mb-8 font-light">
            Our proprietary LLM is trained on decades of luxury automotive data, market fluctuations, and performance metrics. Experience a truly bespoke consultation tailored to your status.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Predictive market depreciation analysis', 'Custom procurement sourcing worldwide', 'Technical comparisons of V8/V12 powertrains'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/70">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-[40px] h-[600px] flex flex-col overflow-hidden border-white/10 shadow-2xl shadow-black">
          <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-white flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
            </div>
            <div>
              <p className="font-bold">Motra Concierge</p>
              <p className="text-[10px] text-green-400 uppercase tracking-widest font-bold">● Systems Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/5 border border-white/10 text-white/90'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-5 py-3 rounded-2xl flex gap-1 items-center">
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-black/40 border-t border-white/5">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Urus performance or market value..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-3 bg-white text-black rounded-full hover:scale-105 transition-transform disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;
