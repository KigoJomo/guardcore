import { Crosshair, Eye, Goal } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Image from 'next/image';

interface aboutProps {
  className?: string;
}

const About: React.FC<aboutProps> = ({ className }) => {
  const points = [
    {
      title: 'Our Mission',
      description:
        'To be the regional leader in providing high-quality Electro-Mechanical, Telecommunications, Security, and IT Solutions that drive business performance.',
      icon: <Goal size={48} strokeWidth={1} />,
    },
    {
      title: 'Our Vision',
      description:
        'To continuously identify, understand, and cater to the evolving needs of our customers through innovative products and unparalleled service excellence.',
      icon: <Eye size={48} strokeWidth={1} />,
    },
    {
      title: 'Our Goal',
      description:
        'Enhancing and supporting business performance with top-tier solutions that integrate reliability, efficiency, and technological prowess.',
      icon: <Crosshair size={48} strokeWidth={1} />,
    },
  ];

  return (
    <section id='about' className={`z-[10] relative -mt-16 px-0 md:px-8  ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-[10] px-4 md:px-0">
        {points.map((point, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 shadow-2xl hover:shadow-md bg-background p-6 rounded-3xl ${
              index === 1 && 'md:scale-110 md:-mx-4 z-10'
            }`}>
            <div className="px-4 aspect-square bg-accent *:stroke-background flex items-center justify-center rounded-full">
              {point.icon}
            </div>
            <h3>{point.title}</h3>
            <p className="text-center">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-6 md:gap-24 mt-24">
        <div className="col-span-1 flex flex-col gap-4 px-4 md:px-0">
          <h3 className="uppercase text-sm md:text-base text-accent">who we are</h3>
          <h4 className="text-2xl md:text-4xl font-bold">
            Elevating Industries with Cutting-Edge Solutions
          </h4>
          <p>
            We empower industries through <strong>advanced technology</strong>,
            backed by globally certified experts trained to master evolving
            challenges. By collaborating with{' '}
            <strong>top-tier manufacturers</strong>, we consistently pioneer
            next-generation innovations that redefine standards. Our{' '}
            <strong>relentless focus</strong> on professional development
            ensures unmatched precision in every project. Trusted worldwide, we
            turn complex technical demands into{' '}
            <strong>transformative results</strong> that drive progress.
          </p>

          <Link href="/#services">
            <Button label='dicover more' />
          </Link>
        </div>

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

export default About;
