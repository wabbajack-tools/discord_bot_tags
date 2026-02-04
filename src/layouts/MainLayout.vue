<template>
  <div class="flex flex-col min-h-screen bg-dark-900">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <div class="hidden md:block w-64 overflow-y-auto bg-dark-800 border-r border-dark-700">
        <Sidebar :categories="metadata.categories" />
      </div>
      <main class="flex-1 overflow-y-auto">
        <div class="max-w-6xl mx-auto p-8">
          <SearchBar :metadata="metadata" />
          <router-view />
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, provide } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import SearchBar from '@/components/SearchBar.vue'
import Footer from '@/components/Footer.vue'
import { loadMetadata } from '@/utils/fileLoader'
import { searchService } from '@/utils/searchService'
import type { Metadata } from '@/utils/types'

const metadata = ref<Metadata>({ categories: [], tags: [] })

// Provide metadata to child components via inject
provide('metadata', metadata)

onMounted(async () => {
  const loaded = await loadMetadata()
  metadata.value = loaded
  if (loaded.tags.length > 0) {
    await searchService.initialize(loaded)
  }
})
</script>

<style scoped>
:deep(html, body) {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
