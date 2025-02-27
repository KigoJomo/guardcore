// app/components/solutions.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import AnimatedWrapper from './AnimatedWrapper';
import { services } from '@/lib/services';
import { MoveRight } from 'lucide-react';

interface SolutionsProps {
  className?: string;
}

const Solutions: React.FC<SolutionsProps> = ({ className }) => {
  return (
    <>
      <section id="services" className={`pt-12 ${className}`}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/solutions/${service.slug}`}>
              <AnimatedWrapper
                animationType="slideUp"
                duration={(index + 1) * 0.5}
                className="bg-background rounded-3xl shadow-lg hover:shadow transition-shadow w-full aspect-[1.25/1] md:aspect-[1.35/1] grid grid-cols-1 grid-rows-1 relative group overflow-hidden">
                {/* details */}
                <div className="col-span-1 row-span-1 aspect-[1.25/1] md:aspect-[1.35/1] p-6 flex flex-col gap-4 z-[2]">
                  <div className="h-12 w-12 bg-blue-100/80 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-background">
                    {service.title}
                  </h3>
                  <p className="text-background border-l-4 border-blue-600 pl-2 md:pl-4">
                    {service.content}
                  </p>

                  <MoveRight
                    strokeWidth={1}
                    className="stroke-background mt-auto ml-auto mr-6 scale-x-[2] group-hover:mr-0 transition-all duration-300"
                  />
                </div>

                {/* tint */}
                <div className="absolute w-full aspect-[1.25/1] md:aspect-[1.35/1] rounded-3xl bg-black/50 z-[1] pointer-events-none"></div>

                {/* image */}
                <Image
                  src={`/images/solutions/${service.image}`}
                  alt={service.title}
                  width={1000}
                  height={1000}
                  className="col-span-1 row-span-1 aspect-[1.25/1] md:aspect-[1.35/1] rounded-3xl z-0 group-hover:scale-105 transition-all duration-300"
                />
              </AnimatedWrapper>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solutions;
