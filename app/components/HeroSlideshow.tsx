// app/components/HeroSlideshow.tsx
'use client';

import { slides } from '@/lib/slides';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const intervalRef = useRef<NodeJS.Timeout>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setDirection('next');
      setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const navigate = (newDirection: 'next' | 'prev') => {
    // Clear existing interval before navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setDirection(newDirection);
    setActiveIndex(prev => {
      if (newDirection === 'next') {
        return prev === slides.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? slides.length - 1 : prev - 1;
    });

    // Restart interval after navigation
    startInterval();
  };

  return (
    <section className="w-full p-0 relative group">
      {/* Main Slide */}
      <div className="w-full aspect-square md:aspect-[2.5/1] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction === 'next' ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'next' ? -100 : 100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0">
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              fill
              className="object-right md:object-cover"
              priority
            />
            <div className="absolute inset-0 transparent-gradient" />

            {/* Slide Content */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-12  md:p-12 text-background space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold max-w-2xl">
                {slides[activeIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="md:text-xl max-w-xl text-background">
                {slides[activeIndex].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-end md:items-center justify-between p-2 md:p-4">
          <button
            onClick={() => navigate('prev')}
            className="p-1 md:p-3 rounded-full bg-white/50 hover:bg-white/30 backdrop-blur-sm transition-colors">
            <ChevronLeft size={24} className="text-background" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="p-1 md:p-3 rounded-full bg-white/50 hover:bg-white/30 backdrop-blur-sm transition-colors">
            <ChevronRight size={24} className="text-background" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="h-1 w-8 bg-white/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-background transition-all duration-700 ease-linear ${
                  index === activeIndex ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
