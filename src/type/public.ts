export interface BasicPageResponse<T> {
  current: number;
  pages: number;
  records: T[];
  size: number;
  total: number;
}

export interface BasicPageRequest {
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
}

export interface BaseResponse<T> {
  code: number;
  data: T;
  msg: string;
}
