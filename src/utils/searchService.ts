import Fuse from 'fuse.js'
import type { Metadata } from './types'

interface SearchResult {
  slug: string
  title: string
  category: string
  subcategory: string
  routePath: string
}

class SearchService {
  private fuse: Fuse<SearchResult> | null = null

  async initialize(metadata: Metadata): Promise<void> {
    const searchData: SearchResult[] = metadata.tags.map(tag => ({
      slug: tag.slug,
      title: tag.title,
      category: tag.category,
      subcategory: tag.subcategory,
      routePath: tag.routePath
    }))

    this.fuse = new Fuse(searchData, {
      keys: ['title', 'slug', 'category', 'subcategory'],
      threshold: 0.3,
      minMatchCharLength: 1,
      includeScore: true
    })
  }

  search(query: string): SearchResult[] {
    if (!this.fuse || !query.trim()) {
      return []
    }

    return this.fuse.search(query).map(result => result.item)
  }
}

export const searchService = new SearchService()
