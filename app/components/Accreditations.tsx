// app/components/accreditations.tsx

import React from 'react';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import AnimatedWrapper from './AnimatedWrapper';

interface AccreditationsProps {
  className?: string;
}

const Accreditations: React.FC<AccreditationsProps> = ({ className }) => {
  const certifications = [
    {
      title: 'EPRA Class B Certification',
      description: 'Compliance with highest standards in power solutions',
      image: '/images/epra.webp',
    },
    {
      title: 'CAK Telecommunications Certification',
      description: 'Expertise in reliable telecommunication solutions',
      image: '/images/cak.webp',
    },
    {
      title: 'NCA 6 Certification',
      description: 'Proficiency in large-scale electrical installations',
      image: '/images/nca.webp',
    }
  ];

  return (
    <section
      id="accreditations"
      className={`${className} py-16 md:py-24 px-4 md:px-8`}>
      <div className="md:w-1/2 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Mark of Excellence
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Validating our expertise and commitment to industry standards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {certifications.map((cert, index) => (
          <AnimatedWrapper
            animationType="scaleIn"
            duration={(index + 1) * 0.25}
            key={index}
            className="bg-background p-6 md:p-8 rounded-3xl shadow-lg hover:shadow border border-foreground-faded transition-shadow duration-300 flex flex-col items-start gap-4 animated-background">
            <Image
              src={cert.image}
              alt={cert.title}
              width={200}
              height={200}
              className="object-contain h-12 w-auto"
            />
            <h3 className="text-xl font-semibold text-foreground">
              {cert.title}
            </h3>
            <p className="border-l-4 border-blue-600 pl-4">
              {cert.description}
            </p>
          </AnimatedWrapper>
        ))}
      </div>

      {/* Narrative Section */}
      <div className="bg-blue-600 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center">
        <div className="bg-blue-100/20 rounded-full p-4 mb-6 inline-flex">
          <BadgeCheck size={40} className="text-background" />
        </div>

        <p className="text-xl md:text-2xl text-background text-center mb-6">
          Our certifications are a guarantee of quality, ensuring every project
          meets strict industry standards with precision execution.
        </p>
      </div>
    </section>
  );
};

export default Accreditations;
