import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      id='intro'
      className={`p-0 h-auto aspect-[3/4] md:aspect-auto md:h-screen grid grid-cols-1 grid-rows-1 ${className}`}>
      <Image
        src={'/images/hero.webp'}
        alt="Guardcore Technologies"
        width={1920}
        height={1080}
        className="object-cover w-full h-auto aspect-[3/4] md:aspect-auto md:h-screen col-span-1 row-span-1 relative z-[1]"
      />

      <div className="w-full h-auto aspect-[3/4] md:aspect-auto md:h-screen col-span-1 row-span-1 relative z-[2] bg-black/50 flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 p-4 md:p-24">
        <h1 className="text-background text-sm md:text-base font-bold text-center md:text-left">
          welcome to Guardcore Technologies
        </h1>

        <h2 className="text-center md:text-left font-bold text-background text-3xl md:text-5xl leading-8 md:leading-[3rem] md:max-w-[60vw]">
          Delivering world-class Telecommunications, Security Systems, & IT Solutions
        </h2>

        <p className="text-background text-center md:text-left md:max-w-[40vw]">
        Guardcore Technologies combines cutting-edge tech and certified expertise to provide powerful business solutions.
        </p>

        {/* cta */}
        <Link href="/#solutions">
          <Button label='explore our solutions' />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
