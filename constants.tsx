import { 
  PenTool, 
  Ghost, 
  Linkedin, 
  Video, 
  Bot, 
  FileText, 
  Briefcase 
} from 'lucide-react';
import { Service, Testimonial, Stat, NavLink } from './types';

export const COLORS = {
  navy: '#0F1419',
  white: '#FFFFFF',
  offWhite: '#F8F8F8',
  gold: '#D4AF37',
  darkGray: '#4A4A4A',
  lightGray: '#F5F5F5',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'copywriting',
    title: 'Copywriting & Sales Writing',
    description: 'High-conversion copy for landing pages, emails, and ads. Data-driven messaging that speaks directly to desires and pain points.',
    icon: PenTool,
  },
  {
    id: 'ghostwriting',
    title: 'Ghostwriting & Content',
    description: 'Full-service ghostwriting for articles and thought leadership. Building authority and visibility under your brand name.',
    icon: Ghost,
  },
  {
    id: 'linkedin',
    title: 'Personal Branding',
    description: 'LinkedIn profile optimization and strategic messaging frameworks that position you as a credible authority in your field.',
    icon: Linkedin,
  },
  {
    id: 'scripts',
    title: 'Scriptwriting & Video',
    description: 'Engaging scripts for explainer videos, webinars, and multimedia storytelling that keep audiences hooked.',
    icon: Video,
  },
  {
    id: 'ai-strategy',
    title: 'AI-Assisted Writing',
    description: 'Strategic use of AI tools to scale content production, conduct research, and maintain consistency across touchpoints.',
    icon: Bot,
  },
  {
    id: 'virtual-assist',
    title: 'Virtual Assistance',
    description: 'Administrative support, document summarization, and research compilation for fast-moving teams.',
    icon: FileText,
  },
  {
    id: 'resume',
    title: 'Resume & Bio Writing',
    description: 'Professionally crafted resumes, bios, and career positioning documents that open doors.',
    icon: Briefcase,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Kartik went from 0 to 10K followers in 3 months with our LinkedIn strategy. His voice. Our framework. The results speak for themselves.",
    author: "Sarah Jenkins",
    role: "Founder, TechFlow"
  },
  {
    id: '2',
    quote: "We don't do generic. Whether it's a 500-word LinkedIn post or a full-funnel email sequence, every word is positioned to drive results.",
    author: "David Chen",
    role: "CMO, Elevate Digital"
  },
  {
    id: '3',
    quote: "The clarity brought to our brand messaging was transformative. Finally, our customers understand exactly what we do.",
    author: "Elena Rodriguez",
    role: "CEO, StartUp Inc."
  }
];

export const STATS: Stat[] = [
  { id: '1', value: '100+', label: 'Projects Completed' },
  { id: '2', value: '45+', label: 'Happy Clients' },
  { id: '3', value: '300%', label: 'Avg Engagement Increase' },
];
