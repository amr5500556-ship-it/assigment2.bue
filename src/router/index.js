import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'login',
      path: '/login',
      component: LoginView,
      meta: {
        requireAuth: false,
      },
    },
    {
      name: 'register',
      path: '/register',
      component: RegisterView,
      meta: {
        requireAuth: false,
      },
    },
    {
      name: 'home',
      path: '/home',
      component: HomeView,
      meta: {
        requireAuth: true,
      },
    },
  ],
})

export default router
