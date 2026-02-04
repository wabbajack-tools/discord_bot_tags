# Markdown Features Guide

A comprehensive reference for all supported markdown formatting and features in Wabbajack Discord Bot Tags.

## Basic Text Formatting

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Bold and Italic

```markdown
**bold text** or __bold text__
*italic text* or _italic text_
***bold and italic*** or ___bold and italic___
```

### Lists

#### Unordered Lists
```markdown
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

* Bullet with asterisk
+ Bullet with plus sign
```

#### Ordered Lists
```markdown
1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item
```

### Line Breaks and Paragraphs

```markdown
Line with two spaces at the end  
creates a line break

Blank line creates a new paragraph
```

## Code

### Inline Code
```markdown
Use `inline code` for short snippets within text.
```

### Code Blocks

Specify a language for syntax highlighting:

```markdown
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`
```

Supported languages include: `javascript`, `typescript`, `python`, `bash`, `yaml`, `json`, `html`, `css`, `markdown`, and many more.

```markdown
\`\`\`
Plain code block without highlighting
\`\`\`
```

## Links and References

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Tooltip text")
<https://example.com>  # Automatic link
```

### Relative Links (within the site)

```markdown
[Go to a tag](/tag/permanent/general/add_a_tag)
[Link to game-specific tag](/tag/permanent/game/skyrim/aecc)
```

## Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

Alignment:

```markdown
| Left   | Center | Right |
|:-------|:------:|------:|
| Left   | Center | Right |
```

## GitHub-Style Alerts

These create styled callout boxes with colored borders and icons.

```markdown
> [!NOTE]
> This is a note alert

> [!TIP]
> This is a tip alert

> [!IMPORTANT]
> This is an important alert

> [!WARNING]
> This is a warning alert

> [!CAUTION]
> This is a caution alert
```

## Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines
>
> > And can be nested
```

## Horizontal Rules

```markdown
---
***
___
```

## Containers

### Note Container

```markdown
::: note
This content goes inside a styled note container
:::
```

### Info Container

```markdown
::: info
This content goes inside a styled info container
:::
```

## Special Characters and Escaping

Escape special markdown characters with a backslash:

```markdown
\*not italic\*
\[not a link\](url)
\# not a heading
```

## Front Matter (YAML Metadata)

Tag files can include frontmatter at the top to define metadata:

```markdown
---
title: "My Tag Title"
---

# My Tag Title

Content starts here...
```

Supported fields:
- `title` (string) - The display title of the tag

## Typography Features

The markdown processor supports:
- **Automatic link detection**: URLs are automatically converted to clickable links
- **Smart typographic substitutions**: Straight quotes → curly quotes, dashes are properly formatted
- **HTML support**: Raw HTML is allowed in markdown content

## Complete Example

```markdown
---
title: "Example Tag"
---

# Example Tag

## Introduction

This is a [complete example](/) with **bold**, *italic*, and `inline code`.

### Important Information

> [!IMPORTANT]
> Make sure to read this carefully!

## Code Example

Here's a sample configuration:

\`\`\`yaml
config:
  setting1: value1
  setting2: value2
\`\`\`

### Steps to Follow

1. First, install the tool
2. Configure it properly
3. Run the commands

### Common Issues

| Issue | Solution |
|-------|----------|
| Error A | Try doing X |
| Error B | Try doing Y |

## Additional Resources

- [Main Documentation](/)
- [Contributing Guide](/)

> [!TIP]
> Use these features to make your tags clear and easy to understand!
```

## Best Practices

1. **Use headers hierarchically**: Start with `##` (h2) since the tag title uses `#` (h1)
2. **Keep it readable**: Use short paragraphs and plenty of whitespace
3. **Use alerts effectively**: Use `[!NOTE]` for additional context, `[!WARNING]` for potential issues
4. **Format code properly**: Always specify the language for code blocks for better syntax highlighting
5. **Make it scannable**: Use headers and lists to organize information
6. **Link thoughtfully**: Link to other tags and resources when relevant
7. **Test locally**: Preview your changes locally with `npm run dev` before submitting

## Need More Help?

Refer to the [GitHub Flavored Markdown](https://github.github.com/gfm/) specification for additional details on markdown syntax.
