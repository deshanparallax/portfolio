import React from 'react';

export default function Navbar() {
  return (
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
  );
}
