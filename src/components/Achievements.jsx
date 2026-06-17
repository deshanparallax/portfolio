import React from 'react';
import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-10 border-t border-slate-800/50 pt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Achievements</h2>
      </div>
      
      <div className="bg-[#151b23] border border-slate-800 p-8 flex flex-col lg:flex-row gap-10 items-center group hover:border-purple-500/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
        
        {/* Text Side */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold rounded-full">
            <Award className="w-4 h-4" />
            Dec 2024
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Star Performer Award</h3>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            Officially recognized by the CEO and COO of Parallax Technologies (Pvt) Ltd. for exceptional dedication, responsibility, and outstanding contributions to team and project success.
          </p>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-5/12 shrink-0">
          <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-colors shadow-2xl">
            <img 
              src={`${import.meta.env.BASE_URL}award.jpg`}
              alt="Star Performer Award from Parallax Technologies" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Fallback overlay text in case image is missing */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900 text-slate-500 text-sm text-center px-4">
              Save your photo as <br/> public/award.jpg
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
