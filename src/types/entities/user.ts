export interface User {
  anggota1: {
    ktp_anggota1: string | null;
    nama_anggota1: string | null;
  };
  anggota2: {
    ktp_anggota2: string | null;
    nama_anggota2: string | null;
  };
  asal_institusi: string | undefined;
  bukti_follow: string | undefined;
  bukti_repost: string | undefined;
  discord_ketua: string | undefined;
  email_ketua: string | undefined;
  event: string | undefined;
  ketua: {
    ktp_ketua: string | undefined;
    nama_ketua: string | undefined;
  };
  no_wa_ketua: string | undefined;
  pembayaran: {
    bank: string | undefined;
    bukti_pembayaran: string | undefined;
    status_pembayaran: string | undefined;
  };
  team_name: string | undefined;
  team_provinsi: string | undefined;
  permission: string;
}

export interface withToken {
  token: string;
}
