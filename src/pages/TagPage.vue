<template>
  <div>
    <Breadcrumb />
    <h1 class="text-4xl font-bold text-white mb-4">{{ tagTitle }}</h1>
    <MarkdownRenderer :file-path="filePath" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const props = defineProps<{
  category: string
  subcategory: string
  slug: string
}>()

const filePath = computed(() => {
  return `tags/${props.category}/${props.subcategory}/${props.slug}.md`
})

const tagTitle = computed(() => {
  return props.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})
</script>
