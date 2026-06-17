import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Education() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="education" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Journey</h2>
      </div>
      
      {/* Gradient Border Container */}
      <div className="p-[1px] bg-gradient-to-br from-cyan-500/50 via-slate-800 to-blue-500/50 rounded-3xl group hover:from-cyan-400 hover:to-blue-400 transition-all duration-700 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
        
        <div className="bg-slate-900 rounded-[23px] p-8 md:p-10 relative overflow-hidden h-full w-full">
          
          <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
            
            {/* Text & Academic Details */}
            <div className="flex-1 w-full flex flex-col md:flex-row gap-8 items-start">
              
              {/* Degree Icon */}
              <div className="shrink-0 mt-1">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-cyan-400/50 transition-colors duration-500">
                  <FaGraduationCap className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-5 w-full">
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-1">
                    Bachelor of Science in Information Technology
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-slate-300 font-medium">
                    <span>SIBA Campus, Kandy</span>
                    <span className="hidden sm:block text-slate-600">•</span>
                    <span className="text-cyan-500/80">October 2023</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-slate-300 leading-relaxed border-l-2 border-cyan-500/30 pl-4 group-hover:border-cyan-400 transition-colors">
                    <span className="font-semibold text-slate-200">Specialized in:</span> Software Engineering, Web Technologies, and Advanced Database Management.
                  </p>
                </div>

                {/* Certifications Sub-section */}
                <div className="pt-6 mt-6 border-t border-slate-800">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-slate-200 mb-4">
                    <FaCertificate className="text-blue-400" />
                    Certifications
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:border-blue-400/30 transition-colors">
                      <h5 className="font-semibold text-slate-200 mb-1">Spoken English Course</h5>
                      <p className="text-sm text-slate-400">Sipway Institute</p>
                    </div>
                    
                    <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:border-blue-400/30 transition-colors">
                      <h5 className="font-semibold text-slate-200 mb-1">English Language Certification</h5>
                      <p className="text-sm text-slate-400">Britishway English Academy</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-4/12 shrink-0 z-10 relative mt-4 lg:mt-0">
               <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/40 to-blue-600/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="aspect-[3/4] relative rounded-xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400/60 transition-colors shadow-2xl">
                 <img 
                   src={`${import.meta.env.BASE_URL}grad.jpg`}
                   alt="Graduation from SIBA Campus" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 {/* Fallback overlay text in case image is missing */}
                 <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900 text-slate-500 text-sm text-center px-4">
                   Save your photo as <br/> public/grad.jpg
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
