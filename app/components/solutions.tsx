// app/components/solutions.tsx

import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { Cpu, MessageSquare, Shield, Wifi, Zap } from 'lucide-react';
import Image from 'next/image';

interface solutionsProps {
  className?: string;
}

const Solutions: React.FC<solutionsProps> = ({ className }) => {
  const services = [
    {
      title: 'Integrated Security Solutions',
      content:
        'Advanced CCTV, intrusion detection, and access control systems for robust physical security.',
      icon: Shield,
      image: 'intergrated-security.webp',
    },
    {
      title: 'Centralised Control and Command Centers',
      content:
        'Unified security management with real-time monitoring and centralized oversight.',
      icon: Cpu,
      image: 'centralised-control.webp',
    },
    {
      title: 'Networking and ICT Solutions',
      content:
        'Structured cabling, fiber optics, and managed network infrastructures for seamless connectivity.',
      icon: Wifi,

      image: 'networking-and-ict.webp',
    },
    {
      title: 'Communication Systems',
      content:
        'IP telephony, video conferencing, and radio communications ensuring reliable interactions.',
      icon: MessageSquare,
      image: 'comms.webp',
    },
    {
      title: 'Power, Electrical and Electromechanical Solutions',
      content:
        'Generators, UPS systems, solar energy, and integrated electrical installations for continuous operations.',
      icon: Zap,
      image: 'power.webp',
    },
  ];

  return (
    <>
      <section id="solutions" className={`solutions-background ${className}`}>
        <div className="w-full aspect-square h-auto md:h-screen md:w-1/2 md:ml-auto flex flex-col justify-center gap-4 md:gap-8">
          <h2 className="font-bold text-background leading-6 md:leading-[3rem] md:max-w-[60vw]">
            Tailored Solutions for Modern Business Challenges
          </h2>
          <p className="text-background md:max-w-[40vw]">
            Guardcore Technologies delivers tailored services addressing modern
            industry demands. Each solution blends certified expertise with
            cutting-edge technology, ensuring globally compliant, future-ready
            results. We simplify complexity through precision and client-focused
            innovation.
          </p>
          {/* cta */}
          <Link href="/#services">
            <Button label="explore our solutions" />
          </Link>
        </div>
      </section>

      <section id="services" className="">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl shadow-2xl hover:shadow-xl transition-shadow w-full aspect-[1.25/1] md:aspect-[1.5/1] grid grid-cols-1 grid-rows-1 relative group overflow-hidden">

              {/* details */}
              <div className="col-span-1 row-span-1 aspect-[1.25/1] md:aspect-[1.5/1] p-6 flex flex-col gap-4 z-[2]">
                <div className="h-12 w-12 bg-blue-100/80 rounded-lg flex items-center justify-center">
                  {React.createElement(service.icon, {
                    size: 32,
                    color: '#2563EB',
                  })}
                </div>
                <h3 className="text-xl font-bold text-background">
                  {service.title}
                </h3>
                <p className="text-background border-l-4 border-blue-600 pl-4">{service.content}</p>
              </div>

              {/* tint */}
              <div className="absolute w-full aspect-[1.25/1] md:aspect-[1.5/1] rounded-3xl bg-black/50 z-[1] pointer-events-none"></div>

              {/* image */}
              <Image
                src={`/images/solutions/${service.image}`}
                alt={service.title}
                width={1000}
                height={1000}
                className="col-span-1 row-span-1 aspect-[1.25/1] md:aspect-[1.5/1] rounded-3xl z-0 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solutions;
