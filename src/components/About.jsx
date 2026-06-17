import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const highlight = "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      id="about-details" 
      className="pt-6 text-slate-300 text-base md:text-lg leading-relaxed bg-transparent"
    >
      <div className="flex flex-col gap-3">
        <motion.p variants={item}>
          My journey in software engineering is driven by a passion for <span className={highlight}>solving complex business challenges</span> through clean architecture and highly efficient code.
        </motion.p>
        <motion.p variants={item}>
          Over the past <span className={highlight}>3+ years</span>, I have progressed from an intern to an <span className={highlight}>Associate Software Engineer</span>, building enterprise-grade platforms like courier management systems.
        </motion.p>
        <motion.p variants={item}>
          I hold a <span className={highlight}>BSc in Information Technology</span> from SIBA Campus, Kandy, which solidifies my foundational knowledge in software engineering and advanced databases.
        </motion.p>
        <motion.p variants={item}>
          My core expertise lies in <span className={highlight}>Laravel, Vue.js, and MySQL</span>, alongside experience working with modern ecosystems like <span className={highlight}>React and Node.js</span>. Winning the <span className={highlight}>Star Performer Award</span> in 2024 was a milestone that validated my commitment to technical excellence and <span className={highlight}>system optimization</span>.
        </motion.p>
        <motion.p variants={item}>
          Beyond writing production code and setting up DevOps pipelines, I believe in giving back to the community. Through my platform <span className={highlight}>@deshonlineLK</span>, I educate and inspire over <span className={highlight}>14,000+ followers on TikTok</span> and have amassed <span className={highlight}>313,000+ views on YouTube</span>, making complex tech concepts accessible to everyone.
        </motion.p>
      </div>
    </motion.div>
  );
}
