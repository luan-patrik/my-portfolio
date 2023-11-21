import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luanpatrik.com'
  return [
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pt/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pt/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/projects`,
      lastModified: new Date(),
    },
  ]
}
