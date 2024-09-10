import { createRouter, createWebHistory } from 'vue-router'
import ControlPadView from '../views/ControlPadView.vue'
import LoginView from '@/views/LoginView.vue';

/**
 * @default router 
 * 
***/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',   
      // route level code-splitting 
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ControlPadView.vue')

    },
    {
      path: '/logger',
      name: 'logger',
      component: () => import('@/components/LoggerFrag.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }    
  ]
})

export default router
