export type TRegisterOlim = {
  team_name: string;
  team_username: string;
  team_password: string;
  team_provinsi_id: number;
  team_kabupaten_id: number;
  event: string;
  asal_institusi: string;
  no_wa_ketua: string;
  email_ketua: string;
  nama_ketua: string;
  ktp_ketua: string;
  bukti_follow: string;
  bukti_repost: string;
  list_bank_id?: string;
  bukti_pembayaran?: string;
  kupon?: string;
  nama_anggota_1?: string;
  ktp_anggota_1?: string;
  nama_anggota_2?: string;
  ktp_anggota_2?: string;
};

export type TRegisterCtf = {
  team_name: string;
  team_username: string;
  team_password: string;
  team_provinsi_id: number;
  event: string;
  asal_institusi: string;
  no_wa_ketua: string;
  email_ketua: string;
  discord_ketua: string;
  nama_ketua: string;
  ktp_ketua: string;
  bukti_follow: string;
  bukti_repost: string;
  list_bank_id?: string;
  bukti_pembayaran?: string;
  nama_anggota_1?: string;
  ktp_anggota_1?: string;
  nama_anggota_2?: string;
  ktp_anggota_2?: string;
};

export type AddRegisterExploTenant = {
  nama_tenant: string;
  institusi: string;
  bidang_teknologi: string;
  nama_ketua: string;
  nisn_ketua: string;
  kartu_pelajar?: FileList;
  email_ketua: string;
  no_wa_ketua: string;
  nama_produk: string;
  detail_produk: string;
  foto_produk?: FileList;
  link_gdrive: string;
};

export type RegisterExploTenant = {
  id: string;
  nama_tenant: string;
  institusi: string;
  bidang_teknologi: string;
  nama_ketua: string;
  nisn_ketua: number;
  kartu_pelajar: string;
  email_ketua: string;
  no_wa_ketua: string;
  nama_produk: string;
  detail_produk: string;
  foto_produk: string;
  link_gdrive: string;
};

export type AddRegisterVisitor = {
  nama: string;
  email: string;
  no_wa: string;
  institusi: string;
  link_post_twibbon: string;
  ss_repost_poster: FileList;
  ss_follow_ig_tiktok: FileList;
  ss_follow_sponsor: FileList;
};

export type RegisterExploVisitor = {
  id: string;
  nama: string;
  email: string;
  no_wa: string;
  institusi: string;
  token: {
    id: string;
    token: string;
    is_used: boolean;
    createdAt: string;
    updatedAt: string;
  };
  link_post_twibbon: string;
  ss_repost_poster: string;
  ss_follow_ig_tiktok: string;
  ss_follow_sponsor: string;
};
