# Wabbajack Discord Bot Tags

A modern Vite.js frontend for the Wabbajack Discord Bot support tags knowledge base.

## Overview

This repository contains a searchable web interface for browsing and managing support tags used by the Wabbajack Discord community. Tags are stored as markdown files in the `/tags` folder and are automatically discovered and indexed at build time.

## Features

- 🚀 **Fast & Modern**: Built with Vite.js and Vue 3
- 🔍 **Full-Text Search**: Instant client-side search across all tags
- 📁 **Auto-Discovery**: New markdown files are automatically discovered at build time
- 🎨 **Beautiful Design**: Dark theme inspired by wabbajack.org
- 📱 **Responsive**: Works on desktop, tablet, and mobile devices
- ✨ **Rich Markdown**: Supports GitHub Flavored Markdown including alerts, tables, code highlighting, and more

## Adding Tags

Adding a new tag is simple:

1. Create a markdown file in the appropriate folder under `/tags`:
   - `tags/permanent/general/` - General permanent tags
   - `tags/permanent/game/[game]/` - Game-specific permanent tags
   - `tags/temporary/general/` - General temporary tags
   - `tags/temporary/game/[game]/` - Game-specific temporary tags

2. Name the file with a descriptive slug (e.g., `my_tag.md`)

3. Add your markdown content with frontmatter:
   ```markdown
   ---
   title: "My Tag Title"
   ---

   # My Tag Title

   Content here...
   ```

4. On the next build, your tag will automatically appear in the web interface

### Markdown Formatting

For detailed information on all supported markdown formatting features (headings, alerts, tables, code blocks, links, containers, and more), see the [Markdown Features Guide](./markdown_features_guide.md).

### Example Tag File

```markdown
---
title: "How to Troubleshoot Issues"
---

## Common Issues

### Issue 1
Description and solution...

### Issue 2
Description and solution...

> [!TIP]
> Don't forget to include helpful tips!
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
/workspaces/discord_bot_tags/
├── src/
│   ├── components/        # Vue components
│   ├── pages/            # Page components
│   ├── layouts/          # Layout components
│   ├── router/           # Vue Router configuration
│   ├── utils/            # Utility functions
│   ├── styles/           # CSS styles
│   ├── App.vue
│   └── main.ts
├── tags/                 # Markdown content (auto-discovered)
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json
└── index.html
```

## How It Works

### Build-Time Processing

1. `build-metadata.js` script scans the `/tags` directory
2. Generates `src/data/metadata.json` with all tag information
3. Creates search index for client-side search

### Runtime

1. App loads metadata at startup
2. Vue Router provides client-side navigation
3. Markdown files are loaded and rendered on-demand
4. Search service filters tags in real-time

## Metadata Format

The generated `metadata.json` follows this structure:

```json
{
  "categories": [
    {
      "name": "permanent",
      "subcategories": [
        {
          "name": "general",
          "tags": [
            {
              "slug": "add_a_tag",
              "title": "How to add a tag",
              "path": "tags/permanent/general/add_a_tag.md",
              "routePath": "/tag/permanent/general/add_a_tag"
            }
          ]
        }
      ]
    }
  ],
  "tags": []
}
```

## Tags.yaml

The original `tags.yaml` file is preserved for backward compatibility with the Discord bot but is not used by the web application. The web application generates its own metadata from the file system.

## Markdown Features

The markdown renderer supports:

- **GitHub Flavored Markdown**: Tables, strikethrough, task lists
- **GitHub Alerts**: Note, Tip, Warning, Important, Caution
- **Code Highlighting**: Syntax highlighting for 180+ languages
- **Embedded Media**: Images, videos, iframes
- **Math**: LaTeX-style equations
- **Custom Containers**: Notes, callouts, etc.

### GitHub Alert Examples

```markdown
> [!NOTE]
> This is a note

> [!WARNING]
> This is a warning

> [!IMPORTANT]
> This is important

> [!TIP]
> This is a tip

> [!CAUTION]
> This is a caution
```

## Deployment

The project is deployed to GitHub Pages via GitHub Actions. Every push to `main` triggers an automatic build and deployment.

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

## Links

- [Wabbajack.org](https://www.wabbajack.org)
- [Discord Server](https://discord.gg/wabbajack)
- [GitHub Repository](https://github.com/wabbajack-tools/discord_bot_tags)

## License

Maintained by Wabbajack Tools


