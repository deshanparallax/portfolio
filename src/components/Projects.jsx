import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Curfox Courier Management System",
    description: "Enterprise-grade logistics and courier management platform tailored to maximize delivery dispatch efficiency.",
    contributions: [
      { label: "CI/CD Integration", text: "Spearheaded the integration of automated CI/CD pipelines using Jenkins, ensuring rapid and error-free deployment cycles." },
      { label: "System Optimization", text: "Led critical backend refactoring in Laravel, directly optimizing complex database queries and architectural patterns that significantly reduced server-side operational costs and improved application latency." },
      { label: "Delivery Management", text: "Managed end-to-end features including dynamic dispatch routing, real-time parcel tracking logic, and automated delivery settlement modules." }
    ],
    tech: ["Laravel", "Vue.js", "PostgreSQL/MySQL", "Jenkins"],
    link: "https://demo.office.curfox.com/",
    badge: "Featured Flagship",
    colSpan: "lg:col-span-2"
  },
  {
    title: "School Management System",
    description: "A comprehensive administration system engineered to streamline academic operations.",
    contributions: [
      { label: "Architecture", text: "Designed full modules for student enrollment, course scheduling architecture, and real-time attendance logging." }
    ],
    tech: ["Laravel", "Inertia.js", "Vue.js", "MySQL"],
    link: "#",
    badge: "Self-Learning Project",
    colSpan: "lg:col-span-1"
  },
  {
    title: "Inventory & Online Ordering System",
    description: "A full-scale e-commerce web application tailored for a custom computer shop business model.",
    contributions: [
      { label: "Full-Stack Dev", text: "Handled entire end-to-end full-stack development, database relational schema design, and user interface UI styling." }
    ],
    tech: ["Native PHP", "MySQL", "Bootstrap"],
    link: "#",
    badge: "Undergraduate Project",
    colSpan: "lg:col-span-3"
  }
];

export default function Projects() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.2 : clientWidth / 1.2;
      scrollContainerRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

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
      id="projects" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-10 relative"
    >
      {/* Background glow for section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      <motion.div variants={item} className="flex items-center justify-between relative z-10">
        <h2 className="text-3xl font-bold text-white">Project Highlights</h2>
      </motion.div>
      
      <div className="relative z-10 w-full group/slider">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 bg-[#151b23] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 rounded-full items-center justify-center shadow-lg backdrop-blur z-20 transition-all border border-slate-700 hover:border-cyan-400/50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 bg-[#151b23] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 rounded-full items-center justify-center shadow-lg backdrop-blur z-20 transition-all border border-slate-700 hover:border-cyan-400/50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-12 pt-4 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project, index) => {
            // Determine exact width so content doesn't stretch the card
            let widthClass = "w-[85vw] md:w-[45vw] lg:w-[32vw]";
            if (project.colSpan.includes("lg:col-span-2") || project.colSpan.includes("lg:col-span-3")) {
              widthClass = "w-[85vw] md:w-[50vw] lg:w-[45vw]";
            }

            return (
              <motion.div 
                variants={item}
                key={index} 
                className={`snap-center shrink-0 ${widthClass} bg-gradient-to-br from-[#151b23] to-[#111620] border border-slate-800 p-6 md:p-8 rounded-2xl flex flex-col group hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden`}
              >
                {/* Subtle inner highlight on top edge */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    {project.badge && (
                      <span className={`inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full border transition-colors ${project.badge.includes('Featured') ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-[#111620] text-slate-400 border-slate-800 group-hover:border-slate-600'}`}>
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 group-hover:from-cyan-400 group-hover:to-blue-500 bg-clip-text text-transparent transition-all duration-300 whitespace-normal">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors p-2.5 rounded-full shrink-0 group/link">
                    <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mb-6 whitespace-normal">
                  {project.description}
                </p>

                <div className="mb-8 flex-1">
                  <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-500 opacity-80" /> Key Contributions
                  </h4>
                  <ul className="space-y-4">
                    {project.contributions.map((contrib, cIdx) => (
                      <li key={cIdx} className="text-sm leading-relaxed border-l-2 border-slate-700 group-hover:border-cyan-500/50 transition-colors pl-4 whitespace-normal">
                        <span className="font-semibold text-cyan-300 block mb-1">{contrib.label}</span>
                        <span className="text-slate-400">{contrib.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                  {project.tech.map((techItem, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1.5 text-xs font-medium bg-[#111620] text-cyan-300 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-inner whitespace-nowrap"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
