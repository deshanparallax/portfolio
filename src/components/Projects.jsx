import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Project Highlights</h2>
        <a href="#projects" className="flex items-center gap-1 px-5 py-2.5 bg-[#151b23] border border-slate-800 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors">
          See All <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Curfox Window Card */}
        <div className="bg-[#151b23] border border-slate-800 overflow-hidden flex flex-col group hover:border-purple-500/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <div className="h-12 bg-[#1a212d] border-b border-slate-800 flex items-center px-6 space-x-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-purple-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          </div>
          
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Curfox Courier Management</h3>
              <a href="https://demo.office.curfox.com/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-slate-400 space-y-4 mb-8 flex-1 leading-relaxed text-sm">
              <p>
                <span className="font-semibold text-slate-300">Description:</span> An enterprise-grade logistics and courier management platform tailored to maximize delivery dispatch efficiency.
              </p>
              <p>
                <span className="font-semibold text-slate-300">Contributions:</span> CI/CD integration, server cost optimization, system performance tune-ups, and managing delivery tracking updates.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-purple-500/30 transition-colors">Laravel</span>
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">Vue.js</span>
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-purple-500/30 transition-colors">Jenkins</span>
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">PostgreSQL/MySQL</span>
            </div>
          </div>
        </div>

        {/* School System App Card */}
        <div className="bg-[#151b23] border border-slate-800 overflow-hidden flex flex-col group hover:border-cyan-400/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <div className="h-12 bg-[#1a212d] border-b border-slate-800 flex items-center px-6 space-x-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          </div>
          
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">School Management System</h3>
              <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-base mb-10 flex-1">
              A standalone comprehensive platform built entirely from scratch, focusing on seamless user experience, fast navigation, and secure data handling for educational institutes.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">Laravel</span>
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-purple-500/30 transition-colors">Vue.js</span>
              <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">Inertia.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
