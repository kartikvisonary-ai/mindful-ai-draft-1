import React from 'react';
import { SERVICES } from '../constants';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F5F5F5] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Our Expertise" 
          subtitle="Specialized services that marry speed with substance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-l-4 border-transparent hover:border-[#D4AF37] h-full"
              >
                <div className="w-14 h-14 bg-[#0F1419]/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-[#0F1419] group-hover:text-[#0F1419] transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0F1419] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[#4A4A4A] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};