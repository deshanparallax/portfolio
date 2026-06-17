import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialImpact from './components/SocialImpact';
import TechnicalArsenal from './components/TechnicalArsenal';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111620] text-slate-200 font-sans selection:bg-purple-500/30">
      <Navbar />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Hero />
        </div>
        
        <div>
          <TechnicalArsenal />
        </div>

        <div>
          <Experience />
        </div>

        <div className="animate-fade-in-up mt-8 pt-4 border-t border-slate-800/50" style={{ animationDelay: '0.2s' }}>
          <SocialImpact />
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Projects />
        </div>
        
        <div className="border-t border-slate-800/50 pt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Certifications />
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Education />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Achievements />
        </div>
      </main>

      <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
