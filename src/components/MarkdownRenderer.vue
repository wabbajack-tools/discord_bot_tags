<template>
  <div v-if="htmlContent" class="prose prose-invert max-w-4xl mx-auto" v-html="htmlContent"></div>
  <div v-else class="text-center py-8 text-dark-400">
    <p>Loading content...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { renderMarkdown } from '@/utils/markdownProcessor'
import { loadMarkdownFile } from '@/utils/fileLoader'

const props = defineProps<{
  filePath: string
}>()

const htmlContent = ref('')

async function loadContent() {
  try {
    const markdown = await loadMarkdownFile(props.filePath)
    const { html } = renderMarkdown(markdown)
    htmlContent.value = html
  } catch (error) {
    console.error('Error loading markdown:', error)
    htmlContent.value = '<p class="text-red-500">Error loading content</p>'
  }
}

watch(
  () => props.filePath,
  () => {
    loadContent()
  },
  { immediate: true }
)
</script>

<style scoped>
/* Prose styles for markdown content */
:deep(.prose) {
  @apply text-dark-200;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply text-white font-bold mb-4 mt-6 first:mt-0;
}

:deep(.prose h1) {
  @apply text-3xl;
}

:deep(.prose h2) {
  @apply text-2xl;
}

:deep(.prose h3) {
  @apply text-xl;
}

:deep(.prose p) {
  @apply mb-4;
}

:deep(.prose a) {
  @apply text-primary-400 hover:text-primary-300 underline transition;
}

:deep(.prose code) {
  @apply bg-dark-800 text-primary-200 px-1.5 py-0.5 rounded font-mono text-sm;
}

:deep(.prose pre) {
  @apply bg-dark-900 border border-dark-700 rounded p-4 overflow-x-auto mb-4;
}

:deep(.prose pre code) {
  @apply bg-transparent px-0 py-0;
}

:deep(.prose blockquote) {
  @apply border-l-4 border-primary-600 pl-4 italic text-dark-300 my-4;
}

:deep(.prose ul),
:deep(.prose ol) {
  @apply ml-6 mb-4;
}

:deep(.prose li) {
  @apply mb-2;
}

:deep(.prose table) {
  @apply w-full border-collapse border border-dark-700 mb-4;
}

:deep(.prose th),
:deep(.prose td) {
  @apply border border-dark-700 px-3 py-2 text-left;
}

:deep(.prose th) {
  @apply bg-dark-800 text-white font-bold;
}

:deep(.prose img) {
  @apply max-w-full h-auto rounded border border-dark-700 my-4;
}

:deep(.github-alert) {
  @apply border-l-4 rounded p-4 mb-4 flex gap-3;
}

:deep(.github-alert-note) {
  @apply border-primary-600 bg-primary-950 text-primary-200;
}

:deep(.github-alert-tip) {
  @apply border-green-600 bg-green-950 text-green-200;
}

:deep(.github-alert-warning) {
  @apply border-yellow-600 bg-yellow-950 text-yellow-200;
}

:deep(.github-alert-important) {
  @apply border-purple-600 bg-purple-950 text-purple-200;
}

:deep(.github-alert-caution) {
  @apply border-red-600 bg-red-950 text-red-200;
}

:deep(.note-container),
:deep(.info-container) {
  @apply border-l-4 border-primary-600 bg-primary-950 text-primary-200 pl-4 py-2 rounded mb-4;
}
</style>
