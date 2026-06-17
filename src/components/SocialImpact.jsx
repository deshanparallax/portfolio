import React, { useEffect, useRef } from 'react';
import { FaTiktok, FaYoutube, FaArrowRight } from 'react-icons/fa';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function AnimatedCounter({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function SocialImpact() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="social-impact" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-12"
    >
      <div className="text-center max-w-4xl mx-auto space-y-4 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Community Impact</h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed italic border-l-4 border-cyan-500/50 pl-4 py-2 text-left md:text-center md:border-l-0 md:border-b-4 md:inline-block md:pb-2 md:pl-0">
          "Beyond the code, I am committed to democratizing technical knowledge and empowering the next generation of developers."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* YouTube Community Card */}
        <motion.div variants={item} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group-hover:border-red-500/30 transition-colors duration-500 shadow-xl">
            
            {/* Background Watermark Icon */}
            <FaYoutube className="absolute -bottom-10 -right-10 w-56 h-56 text-red-500/5 rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none" />
            
            <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] z-10">
              <FaYoutube className="w-10 h-10 text-red-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1 z-10">Tech Content Creator</h3>
            <div className="text-red-400 font-medium mb-8 z-10">@deshonlineLK</div>
            
            <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md z-10 tabular-nums tracking-tight">
              <AnimatedCounter to={313000} /><span className="text-red-500">+</span>
            </h4>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-8 z-10">Total Views</p>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 flex-1 z-10 max-w-sm">
              Sharing comprehensive tech guides, tutorials, and industry insights for the local IT community.
            </p>
            
            <a href="https://www.youtube.com/@deshonlineLK" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 hover:border-red-500 rounded-full font-semibold transition-all duration-300 z-10 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] group/btn">
              Subscribe <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* TikTok Community Card */}
        <motion.div variants={item} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-500 shadow-xl">
            
            {/* Background Watermark Icon */}
            <FaTiktok className="absolute -bottom-10 -left-10 w-56 h-56 text-cyan-500/5 -rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 pointer-events-none" />
            
            <div className="w-20 h-20 bg-[#151b23] rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] z-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20"></div>
              {/* Dual color effect for TikTok icon */}
              <FaTiktok 
                className="w-10 h-10 text-white relative z-10" 
                style={{ filter: "drop-shadow(2px 2px 0px #ec4899) drop-shadow(-2px -2px 0px #06b6d4)" }}
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1 z-10">Tech Educator</h3>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-medium mb-8 z-10">@deshonlineLK</div>
            
            <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md z-10 tabular-nums tracking-tight">
              <AnimatedCounter to={14100} /><span className="text-pink-500">+</span>
            </h4>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-8 z-10">Followers</p>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 flex-1 z-10 max-w-sm">
              Educating tech enthusiasts through bite-sized, practical tech tips and development hacks.
            </p>
            
            <a href="https://www.tiktok.com/@deshonlineLK" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 text-slate-200 hover:text-white border border-white/10 hover:border-transparent rounded-full font-semibold transition-all duration-300 z-10 shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] group/btn">
              Follow <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
