<template>
  <div class="relative">
    <div class="flex gap-2">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search tags..."
        class="flex-1 px-4 py-2 bg-dark-700 text-white placeholder-dark-400 rounded border border-dark-600 focus:border-primary-500 focus:outline-none transition"
        @input="handleSearch"
      />
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded transition"
      >
        Clear
      </button>
    </div>

    <div v-if="searchQuery && results.length > 0" class="absolute top-full mt-2 w-full bg-dark-700 border border-dark-600 rounded shadow-lg z-10 max-h-96 overflow-y-auto">
      <router-link
        v-for="result in results"
        :key="result.slug"
        :to="result.routePath"
        class="block px-4 py-2 hover:bg-dark-600 text-white text-sm border-b border-dark-600 last:border-b-0 transition"
        @click="clearSearch"
      >
        <div class="font-medium">{{ result.title }}</div>
        <div class="text-xs text-dark-400">{{ result.category }} / {{ result.subcategory }}</div>
      </router-link>
    </div>

    <div v-if="searchQuery && results.length === 0" class="absolute top-full mt-2 w-full bg-dark-700 border border-dark-600 rounded shadow-lg p-4 z-10">
      <p class="text-dark-300 text-sm">No results found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { searchService } from '@/utils/searchService'
import type { Metadata } from '@/utils/types'

const props = defineProps<{
  metadata: Metadata
}>()

const searchQuery = ref('')
const results = ref<any[]>([])

function handleSearch() {
  if (searchQuery.value.trim()) {
    results.value = searchService.search(searchQuery.value)
  } else {
    results.value = []
  }
}

function clearSearch() {
  searchQuery.value = ''
  results.value = []
}

// Initialize search service with metadata
onMounted(async () => {
  if (props.metadata.tags.length > 0) {
    await searchService.initialize(props.metadata)
  }
})
</script>

