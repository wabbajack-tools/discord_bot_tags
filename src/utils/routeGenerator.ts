import type { RouteRecordRaw } from 'vue-router'
import type { Metadata } from './types'
import TagPage from '@/pages/TagPage.vue'

export function generateRoutes(metadata: Metadata): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/tag/:category/:subcategory/:slug',
      name: 'tag',
      component: TagPage,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]

  return routes
}
