<template>
  <aside class="bg-dark-800 text-white h-full">
    <nav class="p-4 space-y-4">
      <div class="mb-6">
        <h2 class="text-sm font-bold text-primary-400 uppercase tracking-wider mb-4">Tags</h2>
        <div class="space-y-1">
          <template v-for="category in categories" :key="category.name">
            <div class="space-y-2">
              <details class="group">
                <summary
                  class="cursor-pointer font-semibold text-sm text-dark-200 hover:text-primary-400 transition py-2 flex items-center gap-2"
                >
                  <svg class="w-4 h-4 transform group-open:rotate-90 transition" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ category.name }}
                </summary>
                <div class="ml-6 space-y-1">
                  <template v-for="subcategory in category.subcategories" :key="subcategory.name">
                    <details class="group">
                      <summary
                        class="cursor-pointer text-xs font-medium text-dark-300 hover:text-primary-300 transition py-1 flex items-center gap-2"
                      >
                        <svg class="w-3 h-3 transform group-open:rotate-90 transition" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        {{ subcategory.name }}
                      </summary>
                      <div class="ml-4 space-y-0">
                        <router-link
                          v-for="tag in subcategory.tags"
                          :key="tag.slug"
                          :to="tag.routePath"
                          class="block text-xs text-dark-400 hover:text-primary-300 transition py-1 truncate"
                          :title="tag.title"
                        >
                          {{ tag.title }}
                        </router-link>
                      </div>
                    </details>
                  </template>
                </div>
              </details>
            </div>
          </template>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Category } from '@/utils/types'

defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    default: () => []
  }
})
</script>

<style scoped>
details > summary::-webkit-details-marker {
  display: none;
}
</style>
