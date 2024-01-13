export type TMerchOrder = {
  no_telp: string;
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
