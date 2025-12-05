import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
