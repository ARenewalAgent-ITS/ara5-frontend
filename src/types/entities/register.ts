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
  nama_anggota_1?: string;
  ktp_anggota_1?: string;
  nama_anggota_2?: string;
  ktp_anggota_2?: string;
};
