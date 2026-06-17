import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="space-y-10 border-t border-slate-800/50 pt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Education</h2>
      </div>
      
      <div className="bg-[#151b23] border border-slate-800 p-8 flex flex-col lg:flex-row gap-10 items-center group hover:border-cyan-400/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
        
        {/* Text Side */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold rounded-full">
            <GraduationCap className="w-4 h-4" />
            Graduated 2023
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">BSc. in Information Technology</h3>
          <h4 className="text-xl font-medium text-slate-300">SIBA Campus</h4>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            Successfully graduated with a Bachelor of Science in Information Technology. Developed a strong academic foundation in software engineering, database management, and modern computing technologies to deliver highly robust applications.
          </p>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-4/12 shrink-0">
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-colors shadow-2xl">
            <img 
              src={`${import.meta.env.BASE_URL}grad.jpg`}
              alt="Graduation from SIBA Campus" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900 text-slate-500 text-sm text-center px-4">
              Save your photo as <br/> public/grad.jpg
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
