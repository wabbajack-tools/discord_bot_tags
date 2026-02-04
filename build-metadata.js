import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getAllMarkdownFiles(dir, relativeDir = '') {
  const files = []

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relPath = relativeDir ? `${relativeDir}/${entry.name}` : entry.name

      if (entry.isDirectory()) {
        files.push(...getAllMarkdownFiles(fullPath, relPath))
      } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') {
        files.push({
          path: fullPath,
          name: entry.name,
          relPath: relPath
        })
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${dir}`)
  }

  return files
}

function extractTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    // Try to extract frontmatter title
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
    if (frontmatterMatch) {
      const titleMatch = frontmatterMatch[1].match(/title:\s*["']?([^"'\n]+)["']?/)
      if (titleMatch) {
        return titleMatch[1].trim()
      }
    }
    // Fallback: extract first h1 or h2
    const headingMatch = content.match(/^#+\s+(.+)$/m)
    if (headingMatch) {
      return headingMatch[1].trim()
    }
    // Last resort: use filename
    return content.split('\n')[0].replace(/^#+\s+/, '').trim() || path.basename(filePath, '.md')
  } catch {
    return path.basename(filePath, '.md')
  }
}

function generateMetadata() {
  const tagsDir = path.join(__dirname, 'tags')
  const metadata = {
    categories: [],
    tags: []
  }

  const categoryDirs = fs.readdirSync(tagsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort()

  for (const categoryName of categoryDirs) {
    const categoryPath = path.join(tagsDir, categoryName)
    const category = {
      name: categoryName,
      subcategories: []
    }

    const subcategoryDirs = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .sort()

    for (const subcategoryName of subcategoryDirs) {
      const subcategoryPath = path.join(categoryPath, subcategoryName)
      const subcategory = {
        name: subcategoryName,
        tags: []
      }

      const files = getAllMarkdownFiles(subcategoryPath)
        .filter(f => !f.name.startsWith('README'))
        .sort((a, b) => a.name.localeCompare(b.name))

      for (const file of files) {
        const slug = path.basename(file.name, '.md')
        const title = extractTitle(file.path)
        const filePath = path.join('tags', categoryName, subcategoryName, file.name)
        const routePath = `/tag/${categoryName}/${subcategoryName}/${slug}`

        const tag = {
          slug,
          title,
          path: filePath,
          routePath
        }

        subcategory.tags.push(tag)
        metadata.tags.push({
          ...tag,
          category: categoryName,
          subcategory: subcategoryName
        })
      }

      if (subcategory.tags.length > 0) {
        category.subcategories.push(subcategory)
      }
    }

    if (category.subcategories.length > 0) {
      metadata.categories.push(category)
    }
  }

  return metadata
}

function main() {
  try {
    const metadata = generateMetadata()
    const outputDir = path.join(__dirname, 'src', 'data')

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    fs.writeFileSync(
      path.join(outputDir, 'metadata.json'),
      JSON.stringify(metadata, null, 2)
    )

    console.log(`✓ Generated metadata.json with ${metadata.tags.length} tags`)
  } catch (error) {
    console.error('Error generating metadata:', error)
    process.exit(1)
  }
}

main()
