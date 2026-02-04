<template>
  <nav class="flex items-center gap-2 text-sm text-dark-400 mb-6">
    <router-link to="/" class="text-primary-400 hover:text-primary-300 transition">Home</router-link>
    <span>/</span>
    <span v-for="(part, idx) in breadcrumbs" :key="idx">
      <span v-if="idx > 0" class="mx-1">/</span>
      <span class="capitalize text-white">{{ part }}</span>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const parts = (route.params.category as string || '').split('/')
  if (route.params.subcategory) {
    parts.push(route.params.subcategory as string)
  }
  if (route.params.slug) {
    parts.push(route.params.slug as string)
  }
  return parts
})
</script>
