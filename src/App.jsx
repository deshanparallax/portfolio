import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, ChevronRight, Award, CheckCircle, AlertCircle, Briefcase, GraduationCap, BadgeCheck, Phone, Code2, Layers, Database, Cloud, Wrench, Sparkles, Palette } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import profilePic from './assets/profile.png';

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

export default function App() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    `${import.meta.env.BASE_URL}exp1.jpg`,
    `${import.meta.env.BASE_URL}exp2.jpg`,
    `${import.meta.env.BASE_URL}exp3.jpg`,
    `${import.meta.env.BASE_URL}exp4.jpg`
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/deshanhettiarachchi98@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setTimeout(() => {
      setFormStatus('idle');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#111620] text-slate-200 font-sans selection:bg-purple-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#111620]/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tight">
            Deshan Hettiarachchi
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacts</a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="relative z-10 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text */}
          <div className="flex-1 w-full flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="space-y-6">
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Hello<span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">.</span>
              </h1>
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400" />
                <span className="text-3xl md:text-4xl text-slate-200 font-light">
                  I'm Deshan
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight pb-8">
                Software Developer
              </h2>

              <div className="flex flex-wrap items-center gap-6 pb-6">
                <a href="#contact" className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-medium transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  Contact Me
                </a>
                <a href="https://drive.google.com/file/d/1ibvqfeKr-2Gcz5oOt6zo9KUMsmOnctPU/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-3.5 border border-cyan-400 text-white font-medium hover:bg-cyan-400/10 transition-colors">
                  View Resume
                </a>
              </div>

              {/* Dashboard Metrics moved under buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-4 border-t border-slate-800/50">
                <a href="https://www.tiktok.com/@deshonlineLK" target="_blank" rel="noreferrer" className="bg-[#151b23] border border-slate-800 p-6 hover:border-purple-500/50 transition-colors group block cursor-pointer relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-slate-700 group-hover:text-purple-400 transition-colors">
                    <FaTiktok className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">14,100+</div>
                  <div className="text-xs text-slate-400 mb-1">Followers</div>
                  <div className="text-[10px] bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium">@deshonlineLK</div>
                </a>

                <a href="https://www.youtube.com/@deshonlineLK" target="_blank" rel="noreferrer" className="bg-[#151b23] border border-slate-800 p-6 hover:border-cyan-400/50 transition-colors group block cursor-pointer relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-slate-700 group-hover:text-red-500 transition-colors">
                    <FaYoutube className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">313,000+</div>
                  <div className="text-xs text-slate-400">Views on Tech Content</div>
                </a>

                <div className="bg-[#151b23] sm:col-span-2 xl:col-span-1 border border-purple-500/30 p-6 flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-cyan-400/20 transition-colors"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 mb-1 tracking-wider uppercase">Dec 2024</div>
                      <div className="text-sm font-bold bg-gradient-to-r from-purple-300 to-cyan-200 bg-clip-text text-transparent leading-tight">Star Performer</div>
                      <div className="text-[10px] text-slate-500">Parallax Technologies</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Paragraph */}
              <div className="pt-4 text-slate-400 text-sm md:text-base leading-relaxed">
                <p>
                  Detail-oriented and results-driven Software Engineer with over 3 years of hands-on experience specializing in full-stack web development using Laravel, Vue.js, and Node.js. Proven track record in building scalable applications, architecting CI/CD pipelines, and conducting critical system optimizations to significantly reduce server-side costs. Adept at managing Linux environments, handling production databases, and mentoring junior developers to maintain high code quality. Passionate about leveraging modern AI tools and DevOps practices to deliver highly efficient, impactful business solutions.
                </p>
              </div>


            </div>
          </div>

          {/* Right Column: Visuals & Image Layering */}
          <div className="w-full lg:w-5/12 shrink-0 relative flex items-center justify-center order-1 lg:order-2">
            
            {/* The Geometric Ring - Now a Gradient */}
            <div className="absolute w-[85%] aspect-square rounded-full p-[12px] md:p-[20px] bg-gradient-to-tr from-purple-600 via-purple-500 to-cyan-400 opacity-90 shadow-[0_0_80px_rgba(168,85,247,0.3)] z-0">
              <div className="w-full h-full rounded-full bg-[#111620]"></div>
            </div>
            
            {/* Soft background glow */}
            <div className="absolute w-[80%] aspect-square rounded-full bg-purple-500/20 blur-[100px] z-0"></div>
            
            {/* Left Chevron Decorator */}
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 hidden md:block z-0">
              <svg width="40" height="60" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
            
            {/* Right Chevron Decorator */}
            <div className="absolute right-[-5%] bottom-[15%] hidden md:block z-0">
              <svg width="40" height="60" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            {/* The Cutout Image Layered over the Ring */}
            <div className="relative z-10 w-full aspect-square flex items-end justify-center translate-y-4 lg:translate-y-8 drop-shadow-2xl">
              {/* Fallback Icon visible through transparent placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-400 z-0 opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mb-2 opacity-50">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-center px-4">Replace src/assets/profile.png</span>
              </div>

              <img 
                src={profilePic} 
                alt="Deshan Hettiarachchi" 
                className="w-full h-full object-contain object-bottom relative z-10 scale-[1.65] lg:scale-[1.8] brightness-75 contrast-[1.05] [-webkit-mask-image:linear-gradient(to_top,transparent_2%,black_20%)] [mask-image:linear-gradient(to_top,transparent_2%,black_20%)]"
              />
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`bg-[#151b23] border border-slate-800 p-6 flex flex-col group transition-all shadow-lg ${category.border} hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]`}>
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
              </div>
            ))}
          </div>
        </section>

        {/* Projects Highlights Section */}
        <section id="projects" className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Project Highlights</h2>
            <a href="#projects" className="flex items-center gap-1 px-5 py-2.5 bg-[#151b23] border border-slate-800 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors">
              See All <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Curfox Window Card */}
            <div className="bg-[#151b23] border border-slate-800 overflow-hidden flex flex-col group hover:border-purple-500/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <div className="h-12 bg-[#1a212d] border-b border-slate-800 flex items-center px-6 space-x-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-purple-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Curfox Courier Management</h3>
                  <a href="https://demo.office.curfox.com/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="text-slate-400 space-y-4 mb-8 flex-1 leading-relaxed text-sm">
                  <p>
                    <span className="font-semibold text-slate-300">Description:</span> An enterprise-grade logistics and courier management platform tailored to maximize delivery dispatch efficiency.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-300">Contributions:</span> CI/CD integration, server cost optimization, system performance tune-ups, and managing delivery tracking updates.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-purple-500/30 transition-colors">Laravel</span>
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">Vue.js</span>
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-purple-500/30 transition-colors">Jenkins</span>
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">PostgreSQL/MySQL</span>
                </div>
              </div>
            </div>

            {/* School System App Card */}
            <div className="bg-[#151b23] border border-slate-800 overflow-hidden flex flex-col group hover:border-cyan-400/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <div className="h-12 bg-[#1a212d] border-b border-slate-800 flex items-center px-6 space-x-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">School Management System</h3>
                  <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-base mb-10 flex-1">
                  A standalone comprehensive platform built entirely from scratch, focusing on seamless user experience, fast navigation, and secure data handling for educational institutes.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">Laravel</span>
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-purple-500/30 transition-colors">Vue.js</span>
                  <span className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-400/30 transition-colors">Inertia.js</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience & Certifications Section */}
        <section id="experience" className="space-y-10 border-t border-slate-800/50 pt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Experience & Certifications</h2>
          </div>

          {/* Wallpaper Carousel */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] group">
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
                {/* Fallback overlay text if missing */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#151b23] text-slate-500 text-sm">
                  Save image as public/exp{index + 1}.jpg
                </div>
              </div>
            ))}
            
            {/* Carousel Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111620] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            
            {/* Carousel Indicators */}
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
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-4">
            
            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Professional Journey
              </h3>
              
              <div className="relative border-l border-slate-800 ml-3 space-y-10 pb-4">
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                  <h4 className="text-lg font-bold text-white">Associate Software Engineer</h4>
                  <div className="text-slate-400 text-sm mb-2">Parallax Technologies (Pvt) Ltd. | Present</div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Driving full-stack solutions, leading backend architectures, and optimizing CI/CD workflows for enterprise applications.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-[#151b23] border-2 border-cyan-400 rounded-full -left-[8.5px] top-1.5"></div>
                  <h4 className="text-lg font-bold text-slate-200">Trainee Software Engineer</h4>
                  <div className="text-slate-400 text-sm mb-2">Parallax Technologies (Pvt) Ltd.</div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-[#151b23] border-2 border-slate-600 rounded-full -left-[8.5px] top-1.5"></div>
                  <h4 className="text-lg font-bold text-slate-300">Software Engineering Intern</h4>
                  <div className="text-slate-400 text-sm mb-2">Parallax Technologies (Pvt) Ltd.</div>
                </div>

              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" /> Certifications
              </h3>
              <div className="space-y-4">
                <div className="bg-[#151b23] border border-slate-800 p-5 hover:border-purple-500/30 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                  <h4 className="font-bold text-slate-200 text-base mb-1">Spoken English Course</h4>
                  <div className="text-slate-500 text-sm">Sipway</div>
                </div>
                <div className="bg-[#151b23] border border-slate-800 p-5 hover:border-cyan-400/30 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                  <h4 className="font-bold text-slate-200 text-base mb-1">English Language Certification</h4>
                  <div className="text-slate-500 text-sm">Britishway</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-10 border-t border-slate-800/50 pt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          <div className="bg-[#151b23] border border-slate-800 p-8 flex flex-col lg:flex-row gap-10 items-center group hover:border-cyan-400/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            
            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold rounded-full">
                <GraduationCap className="w-4 h-4" />
                Graduated 2023
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">BSc. in Information Technology</h3>
              <h4 className="text-xl font-medium text-slate-300">SIBA Campus</h4>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                Successfully graduated with a Bachelor of Science in Information Technology. Developed a strong academic foundation in software engineering, database management, and modern computing technologies to deliver highly robust applications.
              </p>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-4/12 shrink-0">
              <div className="aspect-[3/4] relative rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-colors shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}grad.jpg`}
                  alt="Graduation from SIBA Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900 text-slate-500 text-sm text-center px-4">
                  Save your photo as <br/> public/grad.jpg
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Achievements & Social Impact Section */}
        <section id="achievements" className="space-y-10 border-t border-slate-800/50 pt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Achievements & Social Impact</h2>
          </div>
          
          <div className="bg-[#151b23] border border-slate-800 p-8 flex flex-col lg:flex-row gap-10 items-center group hover:border-purple-500/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            
            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold rounded-full">
                <Award className="w-4 h-4" />
                Dec 2024
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Star Performer Award</h3>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                Officially recognized by the CEO and COO of Parallax Technologies (Pvt) Ltd. for exceptional dedication, responsibility, and outstanding contributions to team and project success.
              </p>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-colors shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}award.jpg`}
                  alt="Star Performer Award from Parallax Technologies" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Fallback overlay text in case image is missing */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900 text-slate-500 text-sm text-center px-4">
                  Save your photo as <br/> public/award.jpg
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 border-t border-slate-800/50 bg-[#111620]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-slate-400 max-w-2xl">
              Have a project in mind or just want to say hi? Drop me a message below or reach out through my socials.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Side: Form */}
            <div className="lg:col-span-3 bg-[#151b23] border border-slate-800 p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              {/* The Form */}
              <form onSubmit={handleFormSubmit} className="relative z-10 space-y-6">
                {/* FormSubmit Config */}
                <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                    <input type="text" id="name" name="Name" className="w-full bg-[#111620] border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="John Doe" required disabled={formStatus === 'submitting'} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                    <input type="email" id="email" name="Email" className="w-full bg-[#111620] border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="john@example.com" required disabled={formStatus === 'submitting'} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea id="message" name="Message" rows="5" className="w-full bg-[#111620] border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none" placeholder="How can I help you?" required disabled={formStatus === 'submitting'}></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-4 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' && <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                  {formStatus === 'idle' && 'Send Direct Message'}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && <><CheckCircle className="w-5 h-5" /> Message Sent Successfully!</>}
                  {formStatus === 'error' && <><AlertCircle className="w-5 h-5" /> Failed to send. Try again.</>}
                </button>
              </form>
            </div>

            {/* Right Side: Contact Methods */}
            <div className="lg:col-span-2 space-y-10 lg:pl-8 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="tel:+94719989000" className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all shadow-lg">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium mb-0.5">Call Me</div>
                      <div className="text-slate-200 group-hover:text-purple-400 transition-colors text-lg font-semibold">+94 (71) 998 9000</div>
                    </div>
                  </a>

                  <a href="mailto:deshanhettiarachchi98@gmail.com" className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all shadow-lg">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium mb-0.5">Email Me</div>
                      <div className="text-slate-200 group-hover:text-cyan-400 transition-colors font-semibold break-all">deshanhettiarachchi98@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6">Social Profiles</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/deshan-hettiarachchi" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group shadow-lg">
                    <FaLinkedin className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                  <a href="https://github.com/deshanparallax" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all group shadow-lg">
                    <FaGithub className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-[#0d1117] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl tracking-tighter text-white mb-2">Deshan Hettiarachchi</div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="tel:+94719989000" className="text-slate-400 hover:text-purple-400 transition-colors p-2" aria-label="Phone">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:deshanhettiarachchi98@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors p-2" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/deshan-hettiarachchi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-500 transition-colors p-2" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/deshanparallax" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
