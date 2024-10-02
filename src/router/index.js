import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import LoginView from '@/views/LoginView.vue'
import JobView from '@/views/JobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/job/:id',
      name: 'job',
      component: JobView
    }
  ]
})

export default router
