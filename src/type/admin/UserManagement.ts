import type { Role } from '@/type/admin/RoleManagement.ts'

export interface GetAllUsersResponseType {
  userId: number;
  username: string;
  roles?: Role[];
  nickName?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  description?: string;
  age?: number;
  address?: string;
  signature?: string;
}


