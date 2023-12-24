export type AdminCTF = {
  id: string;
  team_name: string;
  account_id: string;
  team_provinsi_id: number;
  team_kabupaten_id: number | null;
  event: string;
  asal_institusi: string;
  no_wa_ketua: string | number;
  email_ketua: string;
  discord_ketua: string;
  nama_ketua: string;
  ktp_ketua: string;
  nama_anggota1: string;
  ktp_anggota1: string;
  nama_anggota2: string;
  ktp_anggota2: string;
  pembayaran_id: string;
  kupon_id: string | number | null;
  bukti_follow: string;
  bukti_repost: string;
  createdAt: string;
  updatedAt: string;
  Write_up_ctf: string | number | null;
  status: string | number | undefined;
};

export type AdminOlimp = {
  id: string;
  team_name: string;
  account_id: string;
  team_provinsi_id: number;
  team_kabupaten_id: number | null;
  event: string;
  asal_institusi: string;
  no_wa_ketua: string | number;
  email_ketua: string;
  discord_ketua: string;
  nama_ketua: string;
  ktp_ketua: string;
  nama_anggota1: string;
  ktp_anggota1: string;
  nama_anggota2: string;
  ktp_anggota2: string;
  pembayaran_id: string;
  kupon_id: string | number | null;
  bukti_follow: string;
  bukti_repost: string;
  createdAt: string;
  updatedAt: string;
  Write_up_ctf: string | number | null;
  status: string | number | undefined;
};
