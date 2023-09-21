export interface ApiReturn<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  code?: number;
  message: string;
  status: number;
}

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};

type PaginateData<Data> = {
  totalPendaftar: number;
  totalDiterima: number;
  totalPendaftarPilihanSatu: number;
  totalPendaftarPilihanKedua: number;
  totalPendaftarPilihanKetiga: number;
  content: Data;
  metadata: {
    page: number;
    maxPage: number;
  };
};

export interface PaginatedApiResponse<DataType> {
  code: number;
  success: string;
  data: PaginateData<DataType>;
}
