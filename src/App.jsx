import React from 'react';
import { Mail, ExternalLink, ChevronRight, Award } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from './assets/profile.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1423] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Centered Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0d1423]/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-center">
          <div className="flex items-center space-x-2 md:space-x-4 text-sm font-medium text-slate-400">
            <a href="#about" className="text-slate-100 bg-slate-800/80 px-5 py-1.5 rounded-full transition-colors">Hero</a>
            <a href="#skills" className="hover:text-slate-200 hover:bg-slate-800/40 px-5 py-1.5 rounded-full transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-200 hover:bg-slate-800/40 px-5 py-1.5 rounded-full transition-colors">Projects</a>
            <a href="#impact" className="hover:text-slate-200 hover:bg-slate-800/40 px-5 py-1.5 rounded-full transition-colors">Content</a>
            <a href="#contact" className="hover:text-slate-200 hover:bg-slate-800/40 px-5 py-1.5 rounded-full transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 md:space-y-32">
        
        {/* Dashboard Hero Section */}
        <section id="about" className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Glowing Border */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative aspect-[4/3] rounded-[2rem] bg-slate-900 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.25)] border-[3px] border-cyan-400 flex items-center justify-center group">
              
              {/* Fallback Icon visible through transparent placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 bg-[#0d1423] z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mb-2 opacity-50">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-center px-4">Replace src/assets/profile.png</span>
              </div>

              <img 
                src={profilePic} 
                alt="Deshan Hettiarachchi" 
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Text & Metrics Dashboard */}
          <div className="flex-1 w-full space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-100 tracking-tight mb-4">
                Deshan Hettiarachchi
              </h1>
              <p className="text-slate-200 text-lg md:text-xl">
                Associate Software Engineer | Full-Stack & DevOps
              </p>
              <p className="text-slate-400 text-sm md:text-base">
                Tech Content Creator | Problem Solver | AI Advocate
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-2.5 rounded-full bg-cyan-900/10 border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] text-slate-100 font-medium hover:bg-cyan-900/30 transition-all text-sm">
                Explore Projects
              </a>
              <a href="#" className="px-6 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 font-medium hover:bg-slate-800 transition-all text-sm">
                Download Resume
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 font-medium hover:bg-slate-800 transition-all text-sm">
                Contact Me
              </a>
            </div>

            {/* Metrics Dashboard Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              
              <div className="md:col-span-1 bg-slate-800/40 border border-slate-700/50 rounded-[1.25rem] p-5 hover:border-slate-600 transition-colors">
                <div className="text-xl md:text-2xl font-bold text-slate-100 mb-1">14,100+</div>
                <div className="text-xs text-slate-300 mb-1">Followers</div>
                <div className="text-[10px] text-slate-500">@deshonlineLK</div>
              </div>

              <div className="md:col-span-1 bg-slate-800/40 border border-slate-700/50 rounded-[1.25rem] p-5 hover:border-slate-600 transition-colors">
                <div className="text-xl md:text-2xl font-bold text-slate-100 mb-1">313,000+</div>
                <div className="text-xs text-slate-300">Views</div>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-slate-800/60 to-slate-800/20 border border-slate-700/50 rounded-[1.25rem] p-5 flex items-center gap-4 hover:border-slate-600 transition-colors">
                <div className="w-12 h-12 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 mb-1 tracking-wider uppercase">December 2024</div>
                  <div className="text-sm md:text-base font-bold text-slate-100">Star Performer Award</div>
                  <div className="text-xs text-slate-500">Parallax Technologies</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-100">Skills</h2>
          <div className="flex flex-wrap gap-2.5 max-w-5xl">
            {[
              "Laravel", "Vue.js", "Node.js", "Inertia.js", "React", "JavaScript", 
              "Tailwind CSS", "Jenkins CI/CD", "Linux", "DigitalOcean", "PostgreSQL", 
              "MySQL", "Cursor Pro", "Agentic Workflows"
            ].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full text-slate-300 text-sm hover:border-slate-500 hover:bg-slate-800/50 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Highlights Section */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-slate-100">Project Highlights</h2>
            <a href="#projects" className="flex items-center gap-1 px-4 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition-colors">
              See All <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Curfox Window Card */}
            <div className="rounded-[1.25rem] bg-[#111827] border border-slate-700/50 overflow-hidden flex flex-col group hover:border-cyan-500/30 transition-all shadow-lg">
              <div className="h-10 bg-[#1f2937]/50 border-b border-slate-800/60 flex items-center px-4 space-x-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col font-mono text-sm">
                <div className="flex justify-between items-start mb-6 font-sans">
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">Curfox Courier Management</h3>
                  <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="text-slate-400 space-y-2 mb-8 flex-1 leading-relaxed text-xs md:text-sm">
                  <p><span className="text-pink-400">const</span> <span className="text-blue-400">project</span> = <span className="text-yellow-300">"Core Optimization"</span>;</p>
                  <p><span className="text-pink-400">function</span> <span className="text-green-400">deploy</span>() {'{'}</p>
                  <p className="pl-4">setupJenkinsPipelines();</p>
                  <p className="pl-4">dropServerCosts();</p>
                  <p className="pl-4">maximizeDeliveryEfficiency();</p>
                  <p>{'}'}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 font-sans mt-auto">
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">Laravel</span>
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">Jenkins</span>
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* School System App Card */}
            <div className="rounded-[1.25rem] bg-[#111827] border border-slate-700/50 overflow-hidden flex flex-col group hover:border-indigo-500/30 transition-all shadow-lg">
              <div className="h-10 bg-[#1f2937]/50 border-b border-slate-800/60 flex items-center px-4 space-x-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">School Management System</h3>
                  <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-sm mb-8 flex-1">
                  A standalone comprehensive platform built entirely from scratch, focusing on seamless user experience, fast navigation, and secure data handling for educational institutes.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">Laravel</span>
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">Vue.js</span>
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">Inertia.js</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Contact Footer */}
      <footer id="contact" className="border-t border-slate-800/50 bg-[#0d1423] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl tracking-tighter text-slate-200 mb-1">Deshan.dev</div>
            <p className="text-slate-500 text-xs font-medium">© {new Date().getFullYear()} H.A.H.D. Hettiarachchi.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
