import { createRouter, createWebHistory } from 'vue-router'
import { COMMON_DRAWER, DOCTOR_DRAWER, PATIENT_DRAWER, TABS } from '@/constant/drawerType.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/home/IndexView.vue'),
      meta: {
        type: TABS
      }
    },
    {
      path: '/auth',
      name: '认证',
      redirect: '/auth/login',
      component: () => import('../views/auth/AuthView.vue'),
      meta: {
        layout: 'blank'
      },
      children: [
        {
          path: 'login',
          name: '登录',
          component: () => import('../views/auth/LoginView.vue'),
          meta: {
            layout: 'blank'
          }
        },
        {
          path: 'register',
          name: '注册',
          component: () => import('../views/auth/RegisterView.vue'),
          meta: {
            layout: 'blank'
          }
        },
      ]
    },
    {
      path: '/admin',
      name: '管理员页面',
      redirect: '/admin/dashboard',
      component: () => import('../views/admin/AdminView.vue'),
      meta: {
        layout: 'blank'
      },
      children: [
        {
          path: 'dashboard',
          name: 'DashBoard',
          component: () => import('../views/admin/DashBoard.vue')
        },
        {
          path: 'account',
          name: 'Account',
          component: () => import('../views/admin/NewView.vue')
        },
        {
          path: 'admin',
          name: 'Admin',
          component: () => import('../views/admin/NewView.vue')
        },
        {
          path: 'user-management',
          name: 'UserManagement',
          component: () => import('../components/admin/UserManagement.vue')
        },
      ]
    },
    {
      path: '/about',
      name: '关于',
      component: () => import('../views/home/AboutView.vue'),
      meta: {
        type: TABS
      }
    },
    {
      path: '/introduction',
      name: '产品介绍',
      component: () => import('../views/home/IntroduceView.vue'),
      meta: {
        type: TABS
      },
      children: [
        {
          path: '1',
          name: 'HIS 系统 (标准版)',
          component: () => import('../components/introduction/FirstProduct.vue'),
        },
        {
          path: '2',
          name: '智慧医疗云',
          component: () => import('../components/introduction/SecondProduct.vue'),
        },
        {
          path: '3',
          name: '医疗信息化',
          component: () => import('../components/introduction/ThirdProduct.vue'),
        },
        {
          path: '4',
          name: '健康管理',
          component: () => import('../components/introduction/ForthProduct.vue'),
        },
      ],
    },
    {
      path: '/deal',
      name: '解决方案',
      component: () => import('../views/home/DealView.vue'),
      meta: {
        type: TABS
      },
    },
    {
      path: '/plan',
      name: '合作计划',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: TABS
      },
    },
  //   病人侧边抽屉
    {
      path: '/reserve',
      name: '预约管理',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: PATIENT_DRAWER,
      },
    },
    {
      path: '/fee',
      name: '费用查询',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: PATIENT_DRAWER,
      },
    },
    {
      path: '/patient-medical-records',
      name: '查看医疗记录',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: PATIENT_DRAWER,
      },
    },
    {
      path: '/healthy',
      name: '健康管理与提醒',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: PATIENT_DRAWER,
      },
    },
  //   医生侧边抽屉
    {
      path: '/scheduling',
      name: '排班管理',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: DOCTOR_DRAWER,
      },
    },
    {
      path: '/patient-reserve',
      name: '患者预约',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: DOCTOR_DRAWER,
      },
    },
    {
      path: '/doctor-records',
      name: '医疗记录',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: DOCTOR_DRAWER,
      },
    },
    {
      path: '/fee-management',
      name: '费用管理与开票',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: DOCTOR_DRAWER,
      },
    },
    {
      path: '/chat-online',
      name: '在线咨询与反馈',
      component: () => import('../views/home/PlanView.vue'),
      meta: {
        type: DOCTOR_DRAWER,
      },
    },
  //   侧边抽屉：一般情况
    {
      path: '/personal-information',
      name: '个人中心',
      component: () => import('../views/admin/AdminView.vue'),
      meta: {
        type: COMMON_DRAWER,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log('Route to:', to)
  console.log('Route from:', from)
  next()
})

export default router
