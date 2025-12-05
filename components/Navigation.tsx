import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COLORS } from '../constants';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F1419] shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
          MINDFUL<span className="text-[#D4AF37]">AI</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium tracking-wide"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 rounded border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all text-sm font-bold"
          >
            GET STARTED
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0F1419] border-t border-gray-800 shadow-xl md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-3 rounded bg-[#D4AF37] text-[#0F1419] text-center font-bold"
            >
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
