import type { Role } from '@/type/admin/RoleManagement.ts'

export interface LoginRequestType {
  username: string,
  password: string,
}

export interface LoginResponseType {
  roles: Role[];
  userId: number;
  token: string;
  userName: string;
}
