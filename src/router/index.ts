import administrationRoute from '@/modules/administrators/router'
import homeRoute from '@/modules/router'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...homeRoute
    },
    {
      ...administrationRoute
    },
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
})

export default router
