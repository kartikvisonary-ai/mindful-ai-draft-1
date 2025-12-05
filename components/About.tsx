import React from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gray-50 rounded-full -z-0 opacity-50"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-50 rounded-full -z-0 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
             <Reveal>
               <div className="relative group">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#D4AF37] transition-all duration-500 group-hover:-top-6 group-hover:-left-6"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Modern minimalist office" 
                      className="w-full object-cover h-[500px] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0F1419]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#D4AF37] transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6"></div>
               </div>
             </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={200}>
              <h3 className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase mb-4">The Backstory</h3>
              <h2 className="text-4xl font-bold text-[#0F1419] mb-8">
                Clarity Wins. <br />Every Single Time.
              </h2>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
                <p>
                  I started as a freelancer with a unique perspective: having worked in hotel management and digital services, I realized the massive gap between what brands <em>say</em> and what their audience <em>understands</em>.
                </p>
                <p>
                  After handling 100+ projects, the pattern became clear: businesses speak in features, but customers want transformation.
                </p>
                <p>
                  Today, MINDFULAI embraces AI not as a replacement, but as a force multiplier. We combine deep market research with cutting-edge tools to deliver content that is both data-informed and emotionally resonant.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Data-Informed Strategy', 'Speed with Substance', 'Emotional Resonance', 'Conversion Focused'].map((item, i) => (
                 <Reveal key={item} delay={400 + (i * 100)}>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#D4AF37] w-5 h-5" />
                      <span className="font-semibold text-[#0F1419]">{item}</span>
                   </div>
                 </Reveal>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};