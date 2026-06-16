import React from 'react';
import { Mail, ExternalLink, ChevronRight, Code2, Server, Terminal, Award } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Deshan.dev
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#impact" className="hover:text-cyan-400 transition-colors">Impact</a>
          </div>
          <a href="#contact" className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all">
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto space-y-32 md:space-y-40">
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center relative">
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-sm font-medium text-cyan-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Associate Software Engineer <span className="block text-slate-500">&</span>
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Tech Educator.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              I specialize in shifting shipping velocity using agentic workflows and robust architectures. 
              With over 3 years of experience in Full-Stack & DevOps, I build resilient systems that 
              slash operational costs and maximize efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all">
                View Projects
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-700 transition-all">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Skills Dashboard */}
        <section id="skills" className="space-y-12 relative z-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Technical Arsenal</h2>
            <p className="text-slate-400">The tools and frameworks I use to bring ideas to life.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Backend & Frameworks */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend & Frameworks</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-3" /> Laravel</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-3" /> Node.js</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-3" /> Vue.js</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-3" /> Inertia.js</li>
              </ul>
            </div>

            {/* DevOps & Cloud */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DevOps & Cloud</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" /> Jenkins CI/CD</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" /> Linux Administration</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" /> DigitalOcean</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" /> PostgreSQL / MySQL</li>
              </ul>
            </div>

            {/* AI-Assisted Ecosystems */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Assisted Ecosystems</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3" /> Cursor Pro</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3" /> Google Antigravity Pro</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3" /> Prompt Engineering</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3" /> Agentic Workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="space-y-12 relative z-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Featured Projects</h2>
            <p className="text-slate-400">Real-world solutions engineered for scale and efficiency.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group rounded-2xl bg-slate-900/40 border border-slate-800/50 overflow-hidden hover:border-slate-700 transition-all">
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">Curfox Courier Management</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Enterprise courier management system spearheading core optimizations. Implemented robust CI/CD pipelines dropping server operational costs and maximizing overall delivery efficiency.
                    </p>
                  </div>
                  <a href="#" className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Laravel</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Jenkins</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Linux</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl bg-slate-900/40 border border-slate-800/50 overflow-hidden hover:border-slate-700 transition-all">
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">School Management System</h3>
                    <p className="text-slate-400 leading-relaxed">
                      A standalone comprehensive school management platform built entirely from scratch, focusing on seamless user experience, fast navigation, and secure data handling.
                    </p>
                  </div>
                  <a href="#" className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Laravel</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Vue.js</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Inertia.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section id="impact" className="relative z-10">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm font-medium text-amber-400">
                  <Award className="w-4 h-4" />
                  <span>Star Performer Award · Dec 2024</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Empowering the Community at <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">@deshonlineLK</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Beyond writing code, I am deeply passionate about tech education. I create content 
                  that simplifies complex tech concepts, reaching thousands of aspiring developers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 text-center">
                  <div className="text-4xl font-extrabold text-cyan-400 mb-2">14.1k+</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Followers</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 text-center">
                  <div className="text-4xl font-extrabold text-indigo-400 mb-2">313k+</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Views</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl tracking-tighter text-slate-100 mb-2">Deshan.dev</div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} H.A.H.D. Hettiarachchi. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@example.com" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-600 transition-all">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
