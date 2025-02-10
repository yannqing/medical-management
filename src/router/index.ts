import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/IndexView.vue'),
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
      component: () => import('../views/IntroduceView.vue'),
      children: [
        {
          path: '1',
          name: '产品1',
          component: () => import('../components/introduction/FirstProduct.vue'),
        },
        {
          path: '2',
          name: '产品2',
          component: () => import('../components/introduction/SecondProduct.vue'),
        },
        {
          path: '3',
          name: '产品3',
          component: () => import('../components/introduction/ThirdProduct.vue'),
        },
      ],
    },
    {
      path: '/deal',
      name: '解决方案',
      component: () => import('../views/DealView.vue'),
    },
    {
      path: '/plan',
      name: '合作计划',
      component: () => import('../views/PlanView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log('Route to:', to)
  console.log('Route from:', from)
  next()
})

export default router
