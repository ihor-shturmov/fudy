export interface ApiResponse<T> {
  data: T;
  meta: ApiResponseMeta;
}

export interface ApiResponseMeta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
}
