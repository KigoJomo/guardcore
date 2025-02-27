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
    image: '/images/hero/cctv.webp',
  },
  {
    id: 1,
    title: 'Innovative ICT Solutions',
    description:
      'Empower your business with high-speed, secure networking and IT infrastructure that ensures seamless connectivity and efficiency.',
    image: '/images/hero/ict.webp',
  },
  {
    id: 2,
    title: 'Reliable Telecom Systems',
    description:
      'Experience clear, uninterrupted communication with our comprehensive telecom solutions for voice and data transmission.',
    image: '/images/hero/network-cables.webp',
  },
];
