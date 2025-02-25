// lib/services.ts

import { Cpu, MessageSquare, Shield, Wifi, Zap } from 'lucide-react';

export interface Service {
  title: string;
  slug: string;
  content: string;
  icon: React.ReactNode;
  image: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    title: 'Integrated Security Solutions',
    slug: 'integrated-security-solutions',
    content:
      'Advanced CCTV, intrusion detection, and access control systems for robust physical security.',
    icon: <Shield size={32} color="#2563EB" />,
    image: 'intergrated-security.webp',
    keywords: ['CCTV', 'Intrusion Detection', 'Access Control']
  },
  {
    title: 'Centralised Control and Command Centers',
    slug: 'centralised-control-command-centers',
    content:
      'Unified security management with real-time monitoring and centralized oversight.',
    icon: <Cpu size={32} color="#2563EB" />,
    image: 'centralised-control.webp',
    keywords: ['Real-Time Monitoring', 'Centralized Oversight']
  },
  {
    title: 'Networking and ICT Solutions',
    slug: 'networking-ict-solutions',
    content:
      'Structured cabling, fiber optics, and managed network infrastructures for seamless connectivity.',
    icon: <Wifi size={32} color="#2563EB" />,
    image: 'networking-and-ict.webp',
    keywords: ['Networking', 'ICT', 'Connectivity']
  },
  {
    title: 'Communication Systems',
    slug: 'communication-systems',
    content:
      'IP telephony, video conferencing, and radio communications ensuring reliable interactions.',
    icon: <MessageSquare size={32} color="#2563EB" />,
    image: 'comms.webp',
    keywords: ['IP Telephony', 'Video Conferencing', 'Radio Communications']
  },
  {
    title: 'Power, Electrical and Electromechanical Solutions',
    slug: 'power-electrical-electromechanical-solutions',
    content:
      'Generators, UPS systems, solar energy, and integrated electrical installations for continuous operations.',
    icon: <Zap size={32} color="#2563EB" />,
    image: 'power.webp',
    keywords: ['Generators', 'UPS Systems', 'Solar Energy', 'Electrical Installations']
  },
];
