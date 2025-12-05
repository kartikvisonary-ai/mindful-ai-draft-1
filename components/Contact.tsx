import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your interest. This is a demo form.");
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Animated geometric background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8F8F8] -skew-x-12 translate-x-32 -z-0 hidden lg:block transition-transform hover:translate-x-28 duration-1000" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full filter blur-[100px] opacity-10 animate-blob"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Let's Build Your Brand" 
          subtitle="Ready to transform confusion into conversion? Let's talk."
        />

        <Reveal>
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0F1419] uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border-2 border-transparent focus:bg-white focus:border-[#D4AF37] focus:ring-0 transition-all outline-none"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0F1419] uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border-2 border-transparent focus:bg-white focus:border-[#D4AF37] focus:ring-0 transition-all outline-none"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0F1419] uppercase tracking-wide">Project Details</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border-2 border-transparent focus:bg-white focus:border-[#D4AF37] focus:ring-0 transition-all outline-none resize-none"
                  placeholder="Tell us about your goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button type="submit" fullWidth>
                Send Message
              </Button>
            </form>
            
            <p className="mt-6 text-center text-sm text-gray-400">
              We typically respond within 24 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};