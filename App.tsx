import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A4A4A] selection:bg-[#D4AF37] selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Value Prop Banner */}
        <div className="bg-[#D4AF37] py-6 px-4">
          <p className="text-center text-[#0F1419] font-bold text-lg md:text-xl tracking-wide uppercase">
            From Confusion to Conversion: We Write Messages That Stick.
          </p>
        </div>

        <Services />
        <Process />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
