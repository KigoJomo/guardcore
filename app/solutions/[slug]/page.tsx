// app/solutions/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/services';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Building2, LayoutList } from 'lucide-react';
import AnimatedWrapper from '@/app/components/AnimatedWrapper';

// Reusable List Component
const DetailList = ({
  items,
  icon: Icon,
}: {
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <ul className="space-y-4 mt-6">
    {items.map((item, index) => (
      <li key={index}>
        <AnimatedWrapper
          animationType="slideUp"
          className="flex items-start gap-4 p-4 rounded-xl border border-foreground-faded bg-foreground-faded shadow-md hover:shadow-sm transition-shadow">
          <Icon className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
          <span className="flex-1 text-foreground/90">{item}</span>
        </AnimatedWrapper>
      </li>
    ))}
  </ul>
);

// Sticky Navigation Component
const PageNavigation = () => {
  const links = [
    { id: 'features', label: 'Features', icon: LayoutList },
    { id: 'industries', label: 'Industries', icon: Building2 },
    { id: 'certs', label: 'Certifications', icon: BadgeCheck },
  ];

  return (
    <div className="w-full md:w-1/5 h-fit md:sticky md:top-[6.25rem] rounded-xl border border-foreground-faded shadow-lg animated-background p-4 space-y-2">
      {links.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
          <link.icon className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-sm md:text-base text-accent">{link.label}</span>
          <ArrowRight className="ml-auto w-4 h-4 text-foreground-light group-hover:translate-x-1 transition-transform" />
        </Link>
      ))}
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, id }: { title: string; id: string }) => (
  <h2
    id={id}
    className="text-3xl font-bold text-accent pb-2 border-b border-foreground-faded relative before:absolute before:bottom-0 before:left-0 before:w-24 before:h-0.5 before:bg-accent">
    {title}
  </h2>
);

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const service = services.find((service) => service.slug === slug);

  if (!service) notFound();

  return (
    <section className="p-0" style={{ overflow: 'visible' }}>
      {/* Hero Section */}
      <div className="w-full aspect-square md:aspect-[3/1] grid grid-cols-1 grid-rows-1 relative">
        {/* Background image */}
        <Image
          src={`/images/solutions/${service.image}`}
          alt={service.title}
          width={2000}
          height={2000}
          className="w-full aspect-square md:aspect-[3/1] col-span-1 row-span-1 z-[1]"
        />

        {/* Dark overlay for readability */}
        <div className="absolute aspect-square md:aspect-[3/1] col-span-1 row-span-1 bg-black/50 inset-0 z-[2]" />

        {/* Title and description */}
        <div className="section w-full aspect-square md:aspect-[3/1] col-span-1 row-span-1 z-[3] flex flex-col justify-end gap-4">
          <h1 className="md:text-6xl font-bold text-background max-w-[90vw] md:max-w-[60vw]">
            {service.title}
          </h1>
          <p className="md:text-lg text-background max-w-[100vw] md:max-w-[40vw] border-l-4 border-blue-600 pl-4">
            {service.content}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="section flex flex-col md:flex-row gap-8 md:gap-12"
        style={{ overflow: 'visible' }}>
        <PageNavigation />

        <div className="flex-1 space-y-16">
          {/* Features Section */}
          <div className="scroll-mt-24">
            <SectionHeader title="Key Features" id="features" />
            <DetailList items={service.features} icon={LayoutList} />
          </div>

          {/* Industries Section */}
          <div className="scroll-mt-24">
            <SectionHeader title="Industries Served" id="industries" />
            <DetailList items={service.industries} icon={Building2} />
          </div>

          {/* Certifications Section */}
          <div className="scroll-mt-24">
            <SectionHeader title="Certifications & Compliance" id="certs" />
            <DetailList items={service.certifications} icon={BadgeCheck} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Generate static paths at build time for each service
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate SEO metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const service = services.find((service) => service.slug === slug);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service does not exist.',
    };
  }

  const keywords = service.keywords ? service.keywords.join(', ') : '';

  return {
    title: `${service.title} | Guardcore Technologies`,
    description: service.content,
    keywords,
    openGraph: {
      title: `${service.title} | Guardcore Technologies`,
      description: service.content,
      images: `/images/solutions/${service.image}`,
      locale: 'en_US',
      type: 'website',
    },
  };
}
