import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Impact', href: '#social-impact' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Offset for sticky navbar + a bit of buffer
      const scrollPosition = window.scrollY + 120; 

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    // For #about (Hero), scroll to absolute top
    if (href === '#about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Offset for sticky navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo/Brand */}
        <div 
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight cursor-pointer"
          onClick={(e) => handleScrollClick(e, '#about')}
        >
          Deshan Hettiarachchi
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollClick(e, link.href)}
              className={`transition-all duration-300 ${
                activeSection === link.href 
                  ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] font-bold' 
                  : 'text-slate-400 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl">
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollClick(e, link.href)}
                className={`text-base font-medium transition-colors block ${
                  activeSection === link.href 
                    ? 'text-cyan-400 font-bold border-l-2 border-cyan-400 pl-3' 
                    : 'text-slate-400 hover:text-cyan-400 pl-3'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
