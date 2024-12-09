import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
   {
     path: '/projects',
     name: 'projects',
     component: () => import('../views/projects.vue')
   },
   {
     path: '/apps',
     name: 'apps',
     component: () => import('../views/apps.vue')
   },
   {
     path: '/contact',
     name: 'contact',
     component: () => import('../views/contact.vue')
  },
   {
     path: '/privacy',
     name: 'privacy',
     component: () => import('../views/privacy.vue')
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router