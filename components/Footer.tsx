import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1419] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              MINDFUL<span className="text-[#D4AF37]">AI</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              We combine AI-powered research with human creativity to produce high-impact content that elevates personal brands and drives business results.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#D4AF37]">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@mindfulai.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MINDFULAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
