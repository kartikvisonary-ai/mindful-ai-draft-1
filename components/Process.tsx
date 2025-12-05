import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Search, PenLine, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Research',
      desc: 'We analyze your market, competitors, and unique voice to build a strategy foundation.'
    },
    {
      icon: PenLine,
      title: 'Drafting & Refining',
      desc: 'Combining AI efficiency with human creativity to craft compelling, high-impact copy.'
    },
    {
      icon: Rocket,
      title: 'Launch & Optimize',
      desc: 'Final polish and delivery of assets ready to drive engagement and conversions.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="How We Work" subtitle="Simple. Transparent. Effective." />

        <div className="flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-0 overflow-hidden">
             <div className="w-full h-full bg-[#D4AF37]/30 animate-[shimmer_2s_infinite]"></div>
          </div>

          {steps.map((step, index) => (
            <Reveal key={index} className="flex-1 text-center relative z-10 px-4 mb-12 md:mb-0" delay={index * 200}>
              <div className="w-24 h-24 bg-white rounded-full border-4 border-[#F5F5F5] flex items-center justify-center mx-auto mb-6 shadow-sm group hover:border-[#D4AF37] transition-colors duration-300">
                <step.icon className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0F1419] mb-3">{step.title}</h3>
              <p className="text-[#4A4A4A] text-base">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};