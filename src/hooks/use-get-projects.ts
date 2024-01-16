import { ExtendProjects } from '@/types/Projects'

export const useGetProjects = async () => {
  try {
    const response = await fetch(process.env.NOTION_DB as string, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      next: {
        revalidate: 60 * 60 * 24 * 30, // 30 days
        tags: ['projects'],
      },
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data: ExtendProjects = await response.json()

    const projects = data.results.map((item) => {
      return {
        id: item.id,
        name: item.properties.name.title[0].plain_text,
        description: item.properties.description.rich_text.map(
          (item) => item.plain_text,
        ),
        website: item.properties.website.url,
        repository: item.properties.repository.url,
        image: item.properties.image.url,
      }
    })

    return projects
  } catch (error) {
    console.error('Fetching Notion data failed:', error)
  }
}
