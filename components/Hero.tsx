import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0F1419] pt-20 overflow-hidden">
      
      {/* Mesmerizing Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-sm font-semibold tracking-wider mb-8 backdrop-blur-md shadow-lg">
               CLARITY BEATS COMPLEXITY
            </span>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Your Message Deserves to Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Heard.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We combine AI-powered research with human creativity to produce high-impact content that elevates personal brands and drives business results.
            </p>
          </Reveal>
          
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Start Your Project
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}>
                View Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};