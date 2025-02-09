import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/about',
      name: '关于',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/introduction',
      name: '产品介绍',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/deal',
      name: '解决方案',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/plan',
      name: '合作计划',
      component: () => import('../views/IndexView.vue')
    },
  ],
})

export default router
