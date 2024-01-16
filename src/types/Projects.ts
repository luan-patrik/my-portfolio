export interface ExtendProjects {
  results: Result[]
}

export interface Result {
  id: string
  properties: Properties
}

export interface Properties {
  name: {
    title: {
      plain_text: string
    }[]
  }
  description: {
    rich_text: {
      plain_text: string
    }[]
  }
  website: {
    url: string
  }
  repository: {
    url: string
  }
  image: {
    url: string
  }
}
