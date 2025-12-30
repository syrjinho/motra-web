import React from 'react';

export const DocumentAutomation: React.FC = () => {
  return (
    <section id="compliance" className="py-24 max-w-7xl mx-auto px-6">
      <div className="glass-card rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8 leading-tight">
              One-Click <br />
              <span>Compliance</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Cross-border trading is complex. Motra makes it simple. Our AI generates every necessary legal document—from sales contracts to customs clearance forms—instantly.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 glass-card rounded-2xl border-white/5 hover:border-white/20 transition-all cursor-default">
                <div className="text-3xl">📑</div>
                <div>
                  <h4 className="font-bold mb-1">Automated Customs</h4>
                  <p className="text-sm text-gray-400">Pre-filled forms for US & ME jurisdictions.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 glass-card rounded-2xl border-white/5 hover:border-white/20 transition-all cursor-default">
                <div className="text-3xl">✍️</div>
                <div>
                  <h4 className="font-bold mb-1">Electronic Signatures</h4>
                  <p className="text-sm text-gray-400">Globally recognized, legally binding e-signs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-r from-sky-500 to-sky-200 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Document Stream</span>
                      <span className="px-3 py-1 bg-sky-500 text-black text-[10px] font-black rounded-full">LIVE</span>
                   </div>
                   <div className="space-y-4">
                      {[
                        { name: "Bill of Lading", status: "Generated" },
                        { name: "Export Compliance Form", status: "Verified" },
                        { name: "Purchase Agreement", status: "Signed" },
                        { name: "Customs Entry Summary", status: "Processing" }
                      ].map((doc, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-sm font-medium">{doc.name}</span>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded ${doc.status === 'Generated' ? 'text-blue-400 bg-blue-400/10' : doc.status === 'Verified' ? 'text-green-500 bg-green-500/10' : 'text-sky-500 bg-sky-500/10'}`}>
                            {doc.status}
                          </span>
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 pt-8 border-t border-white/10 text-center">
                      <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Estimated Savings: 40+ Man-Hours per Transaction</p>
                      <button className="btn-blue w-full py-3 rounded-xl text-black font-bold uppercase text-xs tracking-widest">
                        Automate My Deal
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};