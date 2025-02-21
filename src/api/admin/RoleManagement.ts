import axios from '@/config/axios.ts'

export const getAllRolesAction = (getAllRolesRequest: GetAllRolesRequestType) => {
  return axios({
    url: '/role',
    method: 'GET',
    params: getAllRolesRequest,
  })
}
