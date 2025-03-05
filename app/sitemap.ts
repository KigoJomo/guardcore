import { services } from "@/lib/services";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap{
  const staticPages = [
    {
      url: 'https://www.guardcore.co.ke',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1
    }
  ]

  const solutionsPages = services.map(service => ({
    url: `https://www.guardcore.co.ke/solutions/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9
  }))

  return [ ...staticPages, ...solutionsPages ]
}