import type { Role } from '@/type/admin/RoleManagement.ts'
import type { BasicPageRequest } from '@/type/public.ts'

export interface GetAllUsersResponseType {
  userId: number
  username: string
  roles?: Role[]
  nickName?: string
  avatar?: string
  email?: string
  phone?: string
  description?: string
  age?: number
  address?: string
  signature?: string
}

export interface GetAllUsersRequestType extends BasicPageRequest {
  userId?: number
  username?: string
  nickName?: string
  avatar?: string
  email?: string
  phone?: string
  description?: string
  signature?: string
  address?: string
  age?: number
}

// 编辑和新增用户
export interface EditUserRequestType {
  userId?: number
  username?: string
  password?: string
  nickName?: string
  avatar?: string
  email?: string
  phone?: string
}

export class AddUserRequestType {}
