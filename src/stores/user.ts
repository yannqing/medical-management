import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({
    isLogin: false,
    role: null
  }),
  actions: {
    changeDrawer() {
      this.drawer = !this.drawer
    }
  }
})
