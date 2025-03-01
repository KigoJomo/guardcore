// slides.ts
export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string; // main/expanded image
}

export const slides: Slide[] = [
  {
    id: 0,
    title: 'Integrated Security Solutions',
    description:
      'Protect your assets with advanced surveillance, intrusion detection, and access control systems for real-time, robust security.',
    image: '/images/hero/integrated-security.webp',
  },
  {
    id: 1,
    title: 'Innovative ICT Solutions',
    description:
      'Empower your business with high-speed, secure networking and IT infrastructure that ensures seamless connectivity and efficiency.',
    image: '/images/hero/network-management.webp',
  },
  {
    id: 2,
    title: 'Reliable Telecom & Wireless Communiation Systems',
    description:
      'Experience clear, uninterrupted communication with our comprehensive telecom solutions for voice and data transmission.',
    image: '/images/hero/telecom.webp',
  },
  {
    id: 3,
    title: 'Centralized Control and Command Centers',
    description:
      'Control Room setups with streamlined oversight for comprehensive security management.',
    image: '/images/hero/centralised-control.webp',
  },
  {
    id: 4,
    title: 'IP Telephony Conferencing Solutions',
    description:
      'Robust, scalable telephony and conferencing systems ensuring clear, uninterrupted communication across all business channels.',
    image: '/images/hero/conf-room.webp',
  },
];
