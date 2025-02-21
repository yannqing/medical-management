import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import router from './router'
import { useUserStore } from '@/stores/user.ts'
import type { Role } from '@/type/admin/RoleManagement.ts'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

// 在应用初始化时恢复登录状态
const userStore = useUserStore();
if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token') || ''
  const userId = Number(localStorage.getItem('userId'))
  const userName = localStorage.getItem('userName') || ''
  const roles = JSON.parse(localStorage.getItem('roles') || 'null') as Role[]
  const avatar = localStorage.getItem('avatar') || ''

  userStore.login(token, userId, userName, roles, avatar)
}

app.mount('#app')
