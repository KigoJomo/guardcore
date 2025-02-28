// app/components/Partners.tsx
'use client';

import { partners } from '@/lib/partners';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function PartnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause animation on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleHover = () => container.style.animationPlayState = 'paused';
    const handleLeave = () => container.style.animationPlayState = 'running';

    container.addEventListener('mouseenter', handleHover);
    container.addEventListener('touchstart', handleHover);
    container.addEventListener('mouseleave', handleLeave);
    container.addEventListener('touchend', handleLeave);

    return () => {
      container.removeEventListener('mouseenter', handleHover);
      container.removeEventListener('touchstart', handleHover);
      container.removeEventListener('mouseleave', handleLeave);
      container.removeEventListener('touchend', handleLeave);
    };
  }, []);

  return (
    <section className="px-0 py-12 md:py-24">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Technology Partners
        </h2>
        
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex w-max animate-infinite-scroll"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex items-center px-4 md:px-12 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={partner.logo}
                  alt="Guardcore Technologies Partner"
                  width={160}
                  height={80}
                  className="h-8 md:h-16 w-auto object-contain grayscale-0 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}