import React, { useState, useEffect } from 'react';
import { Briefcase, History } from 'lucide-react';
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

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Timeline */}
        <div className="flex-1 w-full order-2 lg:order-1">
          {/* Section 1: Software Engineering Experience */}
          <motion.h3 variants={item} className="text-xl font-bold text-cyan-400 flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5" /> Software Engineering Experience
          </motion.h3>
          
          <div className="relative border-l border-slate-800 ml-3 space-y-10 pb-12">
            <motion.div variants={item} className="relative pl-8">
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[8.5px] top-6 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              <div className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors p-6 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Associate Software Engineer</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-2 mb-4">
                  <span className="text-slate-300 font-medium text-sm">Parallax Technologies (Pvt) Ltd.</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-slate-400 text-sm">Aug 2024 - Present</span>
                </div>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  Driving full-stack solutions, leading backend architectures, and optimizing CI/CD workflows for enterprise applications. Spearheaded core system optimizations, reducing server costs and improving performance. Awarded the 'Star Performer Award' (Dec 2024).
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="relative pl-8">
              <div className="absolute w-4 h-4 bg-[#151b23] border-2 border-cyan-400 rounded-full -left-[8.5px] top-6 shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
              <div className="bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-colors p-6 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <h4 className="text-xl font-bold text-slate-200 hover:text-cyan-400 transition-colors">Trainee Software Engineer</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-2 mb-4">
                  <span className="text-slate-300 font-medium text-sm">Parallax Technologies (Pvt) Ltd.</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-slate-400 text-sm">Aug 2023 - Aug 2024</span>
                </div>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  Transitioned into independent full-stack development, taking complete ownership of modular features using Laravel, Vue.js, and Node.js. Designed relational database schemas and integrated third-party APIs.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="relative pl-8">
              <div className="absolute w-4 h-4 bg-[#151b23] border-2 border-slate-600 rounded-full -left-[8.5px] top-6"></div>
              <div className="bg-slate-900 border border-slate-800 hover:border-slate-600/50 transition-colors p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-300">Software Engineering Intern</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-2 mb-4">
                  <span className="text-slate-300 font-medium text-sm">Parallax Technologies (Pvt) Ltd.</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-slate-400 text-sm">Feb 2023 - Aug 2023</span>
                </div>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  Collaborated with senior engineers to build and maintain scalable web applications. Gained foundational hands-on experience in Laravel, Vue.js, MySQL, and agile workflows.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Early Career & Foundation */}
          <motion.h3 variants={item} className="text-xl font-bold text-slate-300 flex items-center gap-2 mt-4 mb-8">
            <History className="w-5 h-5 text-slate-400" /> Early Career & Foundation
          </motion.h3>

          <div className="relative border-l border-slate-800 ml-3 space-y-6 pb-12">
            <motion.div variants={item} className="relative pl-8">
              <div className="absolute w-3 h-3 bg-[#151b23] border-2 border-slate-700 rounded-full -left-[6px] top-4"></div>
              <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-lg">
                <h4 className="text-base font-semibold text-slate-300">Associate Image Processor</h4>
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-2 text-xs text-slate-500">
                  <span>Orel IT (Pvt) Ltd.</span>
                  <span>•</span>
                  <span>Jan 2019 - Aug 2019</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed foundational professional skills, maintaining high accuracy standards and working effectively within a structured team environment to meet production targets.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="relative pl-8">
              <div className="absolute w-3 h-3 bg-[#151b23] border-2 border-slate-700 rounded-full -left-[6px] top-4"></div>
              <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-lg">
                <h4 className="text-base font-semibold text-slate-300">Recovery Coordinator</h4>
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-2 text-xs text-slate-500">
                  <span>Sensus BPO Services (Pte) Ltd.</span>
                  <span>•</span>
                  <span>Feb 2017 - Aug 2018</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Gained experience in professional communication, debt negotiation, and time management while handling customer follow-ups and resolving payment disputes under pressure.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Right Side: Wallpaper Carousel (Sticky on desktop) */}
        <motion.div variants={item} className="w-full lg:w-5/12 xl:w-1/2 relative h-64 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] group order-1 lg:order-2 lg:sticky lg:top-28">
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
      </div>
    </motion.section>
  );
}
