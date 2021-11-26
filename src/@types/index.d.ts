export interface FeaturedImage {
  node: {
    id: string
    altText: string
    sourceUrl: string
    srcSet: string
    sizes: string
  }
}

export interface Term {
  name: string
  slug: string
}

export interface Tag {
  name: string
  slug: string
}


export interface Post {
  id: string
  title: string
  excerpt: string
  databaseId: number
  date: string
  featuredImage?: FeaturedImage | null
  terms: {
    nodes: Term[] | []
  }
  tags: {
    nodes: Tag[] | []
  }
}

export type Posts = Post[] | []

export interface CalendarEvent {
  date: Date
  text: string
}