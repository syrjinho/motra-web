import React from 'react';

const FEATURE_LIST = [
  {
    title: "AI VIN Intelligence",
    description: "Instant data verification including inspection history, accident reports, and real images.",
    icon: (
      <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Document Automation",
    description: "Customs, logistics, and compliance papers auto-generated. Sign electronically and close deals in minutes.",
    icon: (
      <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Cross-Border Logistics",
    description: "Connecting US supply directly to Middle Eastern demand with zero broker inefficiency.",
    icon: (
      <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.656m1-5.656a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-medium mb-4">Why Motra Leads the Market</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We eliminated the traditional friction of international car trading through pure, high-performance technology.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {FEATURE_LIST.map((feature, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl group hover:border-sky-500/30 transition-all">
            <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-sky-500/10 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};