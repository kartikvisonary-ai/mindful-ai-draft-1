import React from 'react';
import { STATS } from '../constants';
import { Reveal } from './Reveal';

export const Stats: React.FC = () => {
  return (
    <section id="results" className="py-16 bg-[#F5F5F5] border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {STATS.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 100}>
              <div className="pt-8 md:pt-0 px-4 group cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-[#0F1419] mb-2 font-sans group-hover:text-[#D4AF37] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[#D4AF37] font-semibold tracking-wider text-sm uppercase group-hover:text-[#0F1419] transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};