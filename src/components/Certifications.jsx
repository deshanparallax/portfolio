import React from 'react';
import { BadgeCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="space-y-8">
      <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
        <BadgeCheck className="w-5 h-5" /> Certifications
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#151b23] border border-slate-800 p-5 hover:border-purple-500/30 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <h4 className="font-bold text-slate-200 text-base mb-1">Spoken English Course</h4>
          <div className="text-slate-500 text-sm">Sipway</div>
        </div>
        <div className="bg-[#151b23] border border-slate-800 p-5 hover:border-cyan-400/30 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <h4 className="font-bold text-slate-200 text-base mb-1">English Language Certification</h4>
          <div className="text-slate-500 text-sm">Britishway</div>
        </div>
      </div>
    </section>
  );
}
