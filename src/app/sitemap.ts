import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luanpatrik.com'
  return [
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/pt/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pt/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
