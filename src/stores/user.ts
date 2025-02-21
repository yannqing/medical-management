import { defineStore } from 'pinia'
import type { Role } from '@/type/admin/RoleManagement.ts'

interface UserState {
  isLogin: boolean
  roles: Role[] | null
  userId: number | null
  userName: string | null
  token: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isLogin: !!localStorage.getItem('token'),
    roles: JSON.parse(localStorage.getItem('roles') || 'null'),
    userId: Number(localStorage.getItem('userId')) || null,
    avatar: localStorage.getItem('avatar') || '',
    userName: localStorage.getItem('userName') || null,
    token: localStorage.getItem('token') || null,
  }),

  getters: {
    isAdmin(): boolean {
      return this.roles?.some(role => role.id === 0) ?? false
    },
    isOwner(): boolean {
      return this.roles?.some(role => role.id === 2) ?? false
    },
    userInfo(): Partial<UserState> {
      return {
        userId: this.userId,
        userName: this.userName,
        roles: this.roles
      }
    }
  },

  actions: {
    login(token: string, userId: number, userName: string, roles: Role[], avatar: string) {
      this.token = token
      this.userId = userId
      this.userName = userName
      this.roles = roles
      this.isLogin = true
      this.avatar = avatar

      // 持久化存储
      localStorage.setItem('token', token)
      localStorage.setItem('userId', String(userId))
      localStorage.setItem('userName', userName)
      localStorage.setItem('roles', JSON.stringify(roles))
      localStorage.setItem('avatar', avatar)
    },

    logout() {
      this.token = null
      this.userId = null
      this.userName = null
      this.roles = null
      this.isLogin = false

      // 清除存储
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      localStorage.removeItem('roles')
      localStorage.removeItem('avatar', avatar)
    },

    updateUserInfo(userInfo: Partial<UserState>) {
      Object.assign(this, userInfo)

      // 更新存储
      if (userInfo.userName) localStorage.setItem('userName', userInfo.userName)
      if (userInfo.roles) localStorage.setItem('roles', JSON.stringify(userInfo.roles))
    }
  }
})
