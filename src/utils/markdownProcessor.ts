import MarkdownIt from 'markdown-it'
import githubAlerts from 'markdown-it-github-alerts'
import container from 'markdown-it-container'
import hljs from 'highlight.js'

let md: MarkdownIt | null = null

function getMarkdownInstance(): MarkdownIt {
  if (!md) {
    md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight(code: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(code, { language: lang }).value
          } catch {
            return code
          }
        }
        return code
      }
    })

    // Add GitHub alerts support
    md.use(githubAlerts)

    // Add container support for callouts
    md.use(container, 'note', {
      render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return '<div class="note-container">\n'
        }
        return '</div>\n'
      }
    })

    md.use(container, 'info', {
      render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return '<div class="info-container">\n'
        }
        return '</div>\n'
      }
    })
  }

  return md
}

export function renderMarkdown(markdown: string): { html: string; frontmatter: Record<string, any> } {
  const md = getMarkdownInstance()

  // Extract frontmatter
  const frontmatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n/)
  let content = markdown
  const frontmatter: Record<string, any> = {}

  if (frontmatterMatch) {
    const frontmatterText = frontmatterMatch[1]
    content = markdown.slice(frontmatterMatch[0].length)

    // Simple YAML parsing for basic key-value pairs
    frontmatterText.split('\n').forEach(line => {
      const match = line.match(/^([a-zA-Z_]+):\s*(.+)$/)
      if (match) {
        let value: any = match[2].trim()
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1)
        }
        frontmatter[match[1]] = value
      }
    })
  }

  const html = md.render(content)

  return { html, frontmatter }
}
