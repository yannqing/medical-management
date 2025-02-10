import { defineStore } from 'pinia'

export const useConstantStore = defineStore('constant', {
  // 抽屉开关
  state: () => ({
    drawer: false
  }),
  actions: {
    changeDrawer() {
      this.drawer = !this.drawer
    }
  }
})
