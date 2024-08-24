import { createRouter, createWebHistory } from 'vue-router'
import ControlPadView from '../views/ControlPadView.vue'
import LoginView from '@/views/LoginView.vue';
import LoggerFrag from '@/components/LoggerFrag.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logger',
      name: 'logger',
      component: LoggerFrag
    },
    {
      path: '/settings',
      name: 'settings',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ControlPadView.vue')
    }
  ]
})

export default router
