import { Crosshair, Eye, Goal } from 'lucide-react';
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

interface aboutProps {
  className?: string;
}

const About: React.FC<aboutProps> = ({ className }) => {
  const points = [
    {
      title: 'Our Mission',
      description:
        'GuardCore aims to be the regional leader in providing high-quality Electro-Mechanical, Telecommunications, Security, and IT Solutions that drive business performance.',
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
        'GuardCore\'s goal is to enhance and support business performance with top-tier solutions that integrate reliability, efficiency, and technological prowess.',
      icon: <Crosshair size={48} strokeWidth={1} />,
    },
  ];

  return (
    <>
      <section
        id="solutions"
        className={`flex flex-col items-center gap-12 pt-16 ${className}`}>
        <h2 className="font-bold text-center leading-6 md:leading-[3rem] md:max-w-[60vw]">
          Tailored Solutions for Modern Business Challenges
        </h2>
        <p className="text-center md:max-w-[60vw]">
          Guardcore Technologies delivers tailored services that meet modern
          industry demands. Each solution blends certified expertise with
          cutting-edge technology to deliver compliant, future-ready results.
        </p>
      </section>

      <section
        id="about"
        className={`z-[10] relative px-0 md:px-8  ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-[10] px-4 md:px-0">
          {points.map((point, index) => (
            <AnimatedWrapper
              animationType="slideUp"
              duration={(index + 1) * 0.75}
              key={index}
              className={`flex flex-col items-center gap-4 p-6 rounded-3xl ${
                index === 1 && ''
              }`}>
              <div className="px-4 aspect-square bg-accent *:stroke-background flex items-center justify-center rounded-full">
                {point.icon}
              </div>
              <h3 className="animated-gradient">{point.title}</h3>
              <p className="text-center">{point.description}</p>
            </AnimatedWrapper>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
