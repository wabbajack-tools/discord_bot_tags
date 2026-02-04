<template>
  <header class="bg-dark-900 text-white shadow-lg border-b border-dark-800">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <h1 class="text-2xl font-bold">
          <router-link to="/" class="hover:text-primary-400 transition">
            Wabbajack Tags
          </router-link>
        </h1>
      </div>
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 hover:bg-dark-800 rounded"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
