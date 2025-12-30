
import React, { useState } from 'react';

const QUESTIONS = [
  {
    q: "How does the AI verify the VIN data?",
    a: "Our engine integrates with over 20 global data providers including official DMVs, service centers, and insurance databases. It uses machine learning to identify patterns of fraudulent activity or undisclosed repairs."
  },
  {
    q: "Is shipping to the Middle East included?",
    a: "While shipping costs vary by destination, we automate the quote process with our logistics partners. All customs paperwork is generated automatically to ensure zero delays at port."
  },
  {
    q: "What makes Motra better than a traditional broker?",
    a: "Transparency and cost. Traditional brokers take 5-10% commissions and often hide vehicle issues. Motra provides a fixed fee structure and verified truth reports directly to the buyer."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-serif font-medium text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {QUESTIONS.map((item, idx) => (
          <div key={idx} className="glass-card rounded-2xl overflow-hidden border-white/5">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-bold">{item.q}</span>
              <svg 
                className={`w-5 h-5 text-sky-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};