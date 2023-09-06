import { createRouter, createWebHistory } from 'vue-router'
// import RecapViews from '@/views/RecapViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/recap',
      name: 'RecapViews',
      component: () => import('../views/RecapViews.vue')
    }
  ]
})

export default router
