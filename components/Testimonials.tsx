import React from 'react';
import { TESTIMONIALS } from '../constants';
import { SectionHeading } from './SectionHeading';
import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1419] text-white relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#D4AF37] opacity-[0.03] blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="What People Say" 
          subtitle="Results speak louder than promises."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.id} delay={index * 150}>
              <div className="bg-[#19212A] p-8 rounded-xl relative group hover:bg-[#1E2732] transition-all duration-300 hover:-translate-y-2 h-full border border-gray-800 hover:border-gray-700">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#D4AF37] rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <Quote className="absolute top-8 left-8 text-[#D4AF37] opacity-20 w-12 h-12 transform group-hover:scale-110 transition-transform duration-500" />
                <p className="relative z-10 text-gray-300 text-lg leading-relaxed italic mb-8 pt-6 font-serif">
                  "{t.quote}"
                </p>
                <div className="relative z-10 border-t border-gray-700 pt-6">
                  <p className="font-bold text-white text-lg">{t.author}</p>
                  <p className="text-[#D4AF37] text-sm uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};