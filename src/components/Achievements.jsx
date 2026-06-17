import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Achievements() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="achievements" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-10"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Professional Recognition</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-slate-900 border border-yellow-500/30 p-8 md:p-10 rounded-3xl flex flex-col lg:flex-row gap-10 items-center group hover:scale-[1.01] transition-all duration-500 shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[100px] -z-10 group-hover:bg-yellow-500/10 transition-colors duration-500 pointer-events-none"></div>

          {/* Text Side */}
          <div className="flex-1 space-y-5 text-center lg:text-left z-10 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest rounded-full shadow-inner">
              <FaTrophy className="w-4 h-4 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />
              Featured Award
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
              Star Performer Award
            </h3>
            
            <div className="flex flex-col md:flex-row md:items-center justify-center lg:justify-start gap-1 md:gap-3 text-lg font-semibold text-slate-300">
              <span>Parallax Technologies (Pvt) Ltd.</span>
              <span className="hidden md:block text-slate-600">•</span>
              <span className="text-yellow-500/80">December 2024</span>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-base md:text-lg border-l-2 border-yellow-500/30 pl-4 text-left mt-2 group-hover:border-yellow-400 transition-colors">
              Officially recognized by the CEO and COO for exceptional dedication, responsibility, and outstanding contributions to team and project success.
            </p>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-5/12 shrink-0 z-10 relative">
             <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-500/40 to-yellow-600/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-yellow-500/20 group-hover:border-yellow-400/60 transition-colors shadow-2xl">
               <img 
                 src={`${import.meta.env.BASE_URL}award.jpg`}
                 alt="Star Performer Award" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               {/* Fallback overlay text in case image is missing */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900 text-slate-500 text-sm text-center px-4">
                 Save your photo as <br/> public/award.jpg
               </div>
             </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
