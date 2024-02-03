export type TMerchOrder = {
  no_telp: string;
  alamat: string;
  deskripsi_order: string;
  list_bank_id: number;
  dp: boolean;
  pembayaran: FileList;
  merch_id: string;
  harga_total: number;
};

export type TMerchCatalogue = {
  id: string;
  kategori_produk: string;
  it_reborn: string;
  nama_produk: string;
  deskripsi: string;
  harga: number;
  image_path: string;
  total: number;
  size?: string;
};

export type TProvince = {
  id: number;
  provinsi: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCity = {
  id: number;
  kabupaten_kota: string;
  type: string;
  postal_code: string;
  provinsi_id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TCostRequest = {
  origin: string;
  destination: string;
  weight: number;
  courier: 'jne' | 'pos' | 'tiki';
};

type TOriginDetails = {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
};

type TCost = {
  value: number;
  etd: string;
  note: string;
};

type TService = {
  service: string;
  description: string;
  cost: TCost[];
};

type TResult = {
  code: string;
  name: string;
  costs: TService[];
};

export type TCostResult = {
  rajaongkir: {
    query: TProvince;
    status: {
      code: number;
      description: string;
    };
    origin_details: TOriginDetails;
    destination_details: TOriginDetails;
    results: TResult[];
  };
};

export type TCheapest = {
  value: number;
  etd: string;
  courier: string;
  description: string;
};
