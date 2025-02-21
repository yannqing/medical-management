import axios from '@/config/axios.ts'
import type { EditUserRequestType, GetAllUsersRequestType } from '@/type/admin/UserManagement.ts'

export const getAllUsersAction = (getAllUsersRequest: GetAllUsersRequestType) => {
  return axios({
    url: '/user',
    method: 'get',
    params: getAllUsersRequest,
  })
}

export const updateUserAction = (updateUserRequest: EditUserRequestType) => {
  return axios({
    url: '/user/update',
    method: 'put',
    params: updateUserRequest
  })
}

export const addUserAction = (addUserRequest: EditUserRequestType) => {
  return axios({
    url: '/user',
    method: 'post',
    params: addUserRequest
  })
}

export const deleteUserAction = (id: number) => {
  return axios({
    url: `/user/${id}`,
    method: 'delete',
  })
}

export const getMyselfInfoAction = () => {
  return axios({
    url: '/user/getMyselfInfo',
    method: 'GET'
  })
}
