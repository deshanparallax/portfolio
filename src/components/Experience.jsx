import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    `${import.meta.env.BASE_URL}exp1.jpg`,
    `${import.meta.env.BASE_URL}exp2.jpg`,
    `${import.meta.env.BASE_URL}exp3.jpg`
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="experience" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-10 border-t border-slate-800/50 pt-16"
    >
      <motion.div variants={item} className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </motion.div>

      {/* Wallpaper Carousel */}
      <motion.div variants={item} className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] group">
        {carouselImages.map((src, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={src} 
              alt={`Experience highlight ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#151b23] text-slate-500 text-sm">
              Save image as public/exp{index + 1}.jpg
            </div>
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#111620] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {carouselImages.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-slate-500 hover:bg-slate-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="mt-4">
        <motion.h3 variants={item} className="text-xl font-bold text-cyan-400 flex items-center gap-2 mb-8">
          <Briefcase className="w-5 h-5" /> Professional Journey
        </motion.h3>
        
        <div className="relative border-l border-slate-800 ml-3 space-y-10 pb-4">
          <motion.div variants={item} className="relative pl-8">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
            <h4 className="text-lg font-bold text-white">Associate Software Engineer</h4>
            <div className="text-slate-400 text-sm mb-2">Parallax Technologies (Pvt) Ltd. | Present</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Driving full-stack solutions, leading backend architectures, and optimizing CI/CD workflows for enterprise applications.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8">
            <div className="absolute w-4 h-4 bg-[#151b23] border-2 border-cyan-400 rounded-full -left-[8.5px] top-1.5"></div>
            <h4 className="text-lg font-bold text-slate-200">Trainee Software Engineer</h4>
            <div className="text-slate-400 text-sm mb-2">Parallax Technologies (Pvt) Ltd.</div>
          </motion.div>

          <motion.div variants={item} className="relative pl-8">
            <div className="absolute w-4 h-4 bg-[#151b23] border-2 border-slate-600 rounded-full -left-[8.5px] top-1.5"></div>
            <h4 className="text-lg font-bold text-slate-300">Software Engineering Intern</h4>
            <div className="text-slate-400 text-sm mb-2">Parallax Technologies (Pvt) Ltd.</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
