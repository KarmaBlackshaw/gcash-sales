import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      children: [
        {
          path: '',
          name: 'transactions',
          component: () => import('../views/TransactionsView.vue'),
        },
        {
          path: 'bulk/add',
          name: 'bulk-add-transactions',
          component: () => import('../views/BulkAddTransactionsView.vue'),
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
  ],
})

export default router
