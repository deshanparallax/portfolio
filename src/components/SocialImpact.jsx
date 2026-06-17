import React from 'react';
import { FaTiktok, FaYoutube } from 'react-icons/fa';

export default function SocialImpact() {
  return (
    <section id="social-impact" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a href="https://www.tiktok.com/@deshonlineLK" target="_blank" rel="noreferrer" className="bg-[#151b23] border border-slate-800 p-6 hover:border-purple-500/50 transition-colors group block cursor-pointer relative overflow-hidden">
        <div className="absolute top-4 right-4 text-slate-700 group-hover:text-purple-400 transition-colors">
          <FaTiktok className="w-5 h-5" />
        </div>
        <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">14,100+</div>
        <div className="text-xs text-slate-400 mb-1">Followers</div>
        <div className="text-[10px] bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium">@deshonlineLK</div>
      </a>

      <a href="https://www.youtube.com/@deshonlineLK" target="_blank" rel="noreferrer" className="bg-[#151b23] border border-slate-800 p-6 hover:border-cyan-400/50 transition-colors group block cursor-pointer relative overflow-hidden">
        <div className="absolute top-4 right-4 text-slate-700 group-hover:text-red-500 transition-colors">
          <FaYoutube className="w-5 h-5" />
        </div>
        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">313,000+</div>
        <div className="text-xs text-slate-400">Views on Tech Content</div>
      </a>
    </section>
  );
}
