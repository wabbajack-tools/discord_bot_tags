import type { Metadata } from './types'

const fileCache: Map<string, string> = new Map()

async function loadMarkdownFile(filePath: string): Promise<string> {
  if (fileCache.has(filePath)) {
    return fileCache.get(filePath)!
  }

  try {
    const response = await fetch(`/${filePath}`)
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`)
    }
    const content = await response.text()
    fileCache.set(filePath, content)
    return content
  } catch (error) {
    console.error(`Error loading file ${filePath}:`, error)
    throw error
  }
}

export async function loadMetadata(): Promise<Metadata> {
  try {
    const response = await fetch('/src/data/metadata.json')
    if (!response.ok) {
      throw new Error('Failed to load metadata')
    }
    return await response.json()
  } catch (error) {
    console.error('Error loading metadata:', error)
    // Return empty metadata as fallback
    return { categories: [], tags: [] }
  }
}

export { loadMarkdownFile }
