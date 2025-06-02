import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('../pages/status.vue')
    },
    {
      path: '/lines',
      name: 'lines',
      component: () => import('../pages/lines.vue')
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('../pages/maintenance.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../pages/reports.vue')
    },
    {
      path: '/warnings',
      name: 'warnings',
      component: () => import('../pages/warnings.vue')
    },
  ],
})


export default router