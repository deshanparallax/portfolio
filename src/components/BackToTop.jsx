import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-800 text-cyan-400 border border-cyan-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Back to Top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
