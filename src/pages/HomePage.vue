<template>
  <div>
    <h1 class="text-4xl font-bold text-white mb-8">Wabbajack Discord Bot Tags</h1>
    <p class="text-lg text-dark-300 mb-8">
      A searchable knowledge base with answers to common questions about Wabbajack, modding, and troubleshooting.
    </p>
    <div v-if="metadata.categories.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="category in metadata.categories"
        :key="category.name"
        :to="getFirstTagRoute(category)"
        class="p-6 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-600 rounded-lg transition cursor-pointer"
      >
        <h2 class="text-xl font-bold text-white capitalize mb-2">{{ category.name }}</h2>
        <p class="text-dark-400 text-sm">
          {{ getTotalTags(category) }} tags
        </p>
      </router-link>
    </div>
    <div v-else class="text-center py-16">
      <p class="text-dark-400">Loading tags...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { Metadata, Category } from '@/utils/types'

const metadata = inject<Metadata>('metadata', { categories: [], tags: [] })

function getFirstTagRoute(category: Category): string {
  if (category.subcategories.length > 0 && category.subcategories[0].tags.length > 0) {
    const tag = category.subcategories[0].tags[0]
    return `/tag/${category.name}/${category.subcategories[0].name}/${tag.slug}`
  }
  return '/'
}

function getTotalTags(category: Category): number {
  return category.subcategories.reduce((total, sub) => total + sub.tags.length, 0)
}
</script>
