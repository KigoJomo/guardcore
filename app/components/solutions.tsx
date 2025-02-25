// app/components/solutions.tsx

import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { Cpu, Plug, Settings, Shield, Wifi, Zap } from 'lucide-react';

interface solutionsProps {
  className?: string;
}

const Solutions: React.FC<solutionsProps> = ({ className }) => {
  const services = [
    {
      title: 'Power Solutions',
      content:
        'Generators, UPS systems, solar energy solutions, and comprehensive maintenance services for uninterrupted operations.',
      icon: Zap,
    },
    {
      title: 'Electrical Installation',
      content:
        'High/low voltage systems, street lighting, and advanced inverter backup solutions for modern infrastructure.',
      icon: Plug,
    },
    {
      title: 'Electromechanical Systems',
      content:
        'Motors, pumps, cooling systems, and energy-efficient engineering solutions for demanding environments.',
      icon: Settings,
    },
    {
      title: 'Telecom & IT',
      content:
        'Structured cabling, wireless networks, and enterprise-grade network infrastructure for seamless connectivity.',
      icon: Wifi,
    },
    {
      title: 'Security Systems',
      content:
        'Advanced surveillance, access control, and intelligent security integration with real-time analytics.',
      icon: Shield,
    },
    {
      title: 'Control Centers',
      content:
        'Unified command systems for multi-site monitoring and precision management of complex operations.',
      icon: Cpu,
    },
  ];

  return (
    <>
      <section id='solutions' className={`solutions-background ${className}`}>
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

      <section id='services' className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  {React.createElement(service.icon, {
                    size: 32,
                    color: '#2563EB',
                  })}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="">{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solutions;
