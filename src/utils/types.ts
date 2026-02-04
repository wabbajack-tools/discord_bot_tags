export interface Tag {
  slug: string
  title: string
  path: string
  routePath: string
}

export interface Subcategory {
  name: string
  tags: Tag[]
}

export interface Category {
  name: string
  subcategories: Subcategory[]
}

export interface Metadata {
  categories: Category[]
  tags: Array<Tag & {
    category: string
    subcategory: string
  }>
}

export interface MarkdownContent {
  html: string
  frontmatter: Record<string, any>
}
