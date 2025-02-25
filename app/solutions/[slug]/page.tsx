// app/solutions/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/services'; // Ensure you export the same services array from a shared file


// Generate static paths at build time for each service
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate SEO metadata for each service page
export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
    openGraph:{
      title: `${service.title} | Guardcore Technologies`,
      description: service.content,
      images: `/images/solutions/${service.image}`,
      locale: 'en_US',
      type: 'website',
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="p-0">
      <div className="w-full aspect-square md:aspect-[3/1] grid grid-cols-1 grid-rows-1 relative">
        <Image
          src={`/images/solutions/${service.image}`}
          alt={service.title}
          width={2000}
          height={2000}
          className="w-full aspect-square md:aspect-[3/1] col-span-1 row-span-1 z-[1]"
        />

        <div className="absolute aspect-square md:aspect-[3/1] col-span-1 row-span-1 bg-black/50 inset-0 z-[2]"></div>

        <div className="section w-full aspect-square md:aspect-[3/1] col-span-1 row-span-1 z-[3] flex flex-col justify-end gap-4">
          <h1 className="md:text-6xl font-bold text-background max-w-[90vw] md:max-w-[60vw]">{service.title}</h1>
          <p className="md:text-lg text-background max-w-[70vw] md:max-w-[40vw] border-l-4 border-blue-600 pl-4">{service.content}</p>
        </div>
      </div>
    </section>
  );
}
