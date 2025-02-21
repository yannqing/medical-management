import axios from '@/config/axios.ts'
import type { LoginRequestType } from '@/type/auth'

export const loginAction = (loginRequest: LoginRequestType) => {
  return axios({
    url: '/auth/login',
    method: 'post',
    params: loginRequest,
  })
}

export const logoutAction = () => {
  return axios({
    url: '/auth/logout',
    method: 'post',
  })
}
