export interface BasicPageResponse<T> {
  current: number;
  pages: number;
  records: T[];
  size: number;
  total: number;
}

export interface BaseResponse<T> {
  code: number;
  data: T;
  msg: string;
}
