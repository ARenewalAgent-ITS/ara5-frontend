export type AdminCTF = {
  id: string;
  team_name: string;
  account_id: string;
  team_provinsi_id: number;
  team_kabupaten_id: number | null;
  event: string;
  asal_institusi: string;
  no_wa_ketua: string;
  email_ketua: string;
  discord_ketua: string;
  nama_ketua: string;
  ktp_ketua: string;
  nama_anggota1: string | null;
  ktp_anggota1: string | null;
  nama_anggota2: string | null;
  ktp_anggota2: string | null;
  pembayaran_id: string;
  kupon_id: string | null;
  bukti_follow: string;
  bukti_repost: string;
  createdAt: string;
  updatedAt: string;
  Write_up_ctf: string | null;
  pembayaran: {
    list_bank: {
      bank: string;
    };
    bukti_pembayaran: string;
    status: {
      status: string;
    };
  };
};

export type AdminOlimp = {
  id: string;
  team_name: string;
  account_id: string;
  team_provinsi_id: number;
  team_kabupaten_id: number | null;
  event: string;
  asal_institusi: string;
  no_wa_ketua: string;
  email_ketua: string;
  discord_ketua: string;
  nama_ketua: string;
  ktp_ketua: string;
  nama_anggota1: string | null;
  ktp_anggota1: string | null;
  nama_anggota2: string | null;
  ktp_anggota2: string | null;
  pembayaran_id: string;
  kupon_id: string | null;
  bukti_follow: string;
  bukti_repost: string;
  createdAt: string;
  updatedAt: string;
  Write_up_ctf: string | null;
  kupon: {
    kupon: string;
  };
  pembayaran: {
    list_bank: {
      bank: string;
    };
    bukti_pembayaran: string;
    status: {
      status: string;
    };
  };
};

export type AdminKupon = {
  id: string;
  kupon: string;
  usage: number;
  createdAt: string;
  updatedAt: string;
};
