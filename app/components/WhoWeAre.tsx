import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Link from 'next/link';
import AnimatedWrapper from './AnimatedWrapper';

interface WhoWeAreProps {
  className?: string
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({className}) => {
  return (
    <section className={` ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-6 md:gap-24 mt-24">
          <AnimatedWrapper
            duration={0.75}
            animationType="scaleIn"
            className="col-span-1 flex flex-col gap-4 px-4 md:px-0">
            <h3 className="uppercase text-sm md:text-base text-accent">
              who we are
            </h3>
            <h4 className="text-2xl md:text-4xl font-bold">
              Elevating Industries with Cutting-Edge Solutions
            </h4>
            <p>
              We empower industries through <strong>advanced technology</strong>
              , backed by globally certified experts trained to master evolving
              challenges. By collaborating with{' '}
              <strong>top-tier manufacturers</strong>, we consistently pioneer
              next-generation innovations that redefine standards. Our{' '}
              <strong>relentless focus</strong> on professional development
              ensures unmatched precision in every project. We turn complex technical demands into{' '}
              <strong>transformative results</strong> that drive progress.
            </p>
            <Link href="/#services">
              <Button label="dicover more" />
            </Link>
          </AnimatedWrapper>
          <div className="col-span-1 aspect-[4/3] md:border border-foreground-faded rounded-3xl md:overflow-hidden shadow-2xl">
            <Image
              src={'/images/port.webp'}
              alt="Guardcore Technologies"
              width={1080}
              height={1080}
              className="w-full h-full aspect-[4/3]"
            />
          </div>
        </div>
    </section>
  );
};

export default WhoWeAre;