import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://luanpatrik.com',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
