import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Cloud, Wrench, Sparkles, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["PHP", "Node.js", "JavaScript", "Java", "C++"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "hover:border-blue-400/50"
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-5 h-5" />,
    skills: ["Laravel", "Vue.js", "Inertia.js", "React.js (Familiar)", "HTML5", "CSS3"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "hover:border-emerald-400/50"
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "PostgreSQL"],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "hover:border-amber-400/50"
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Jenkins", "CI/CD Pipelines", "Linux Server Management", "DO Bucket (DigitalOcean)", "Terminus"],
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "hover:border-cyan-400/50"
  },
  {
    title: "Tools & Analytics",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "Sentry", "Microsoft Clarity", "Figma", "Miro", "ClickUp"],
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "hover:border-orange-400/50"
  },
  {
    title: "AI-Assisted Development",
    icon: <Sparkles className="w-5 h-5" />,
    skills: ["Google Antigravity Pro", "Cursor Pro", "ChatGPT Pro", "Claude AI", "Google AI Studio", "Gemini", "DeepSeek", "GitHub Copilot"],
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "hover:border-purple-400/50"
  },
  {
    title: "Design & Multimedia",
    icon: <Palette className="w-5 h-5" />,
    skills: ["Adobe Photoshop", "Premiere Pro", "After Effects"],
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "hover:border-pink-400/50"
  }
];

export default function TechnicalArsenal() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const tile = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={tile}
            className={`bg-[#151b23] border border-slate-800 p-6 flex flex-col group transition-all shadow-lg ${category.border} hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bg} ${category.color} shrink-0 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
