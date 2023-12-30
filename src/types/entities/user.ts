export interface User {
  // copas return haha
  0: {
    team_name: string;
    team_provinsi: string;
    team_kabupaten: string;
    event: string;
    asal_institusi: string;
    no_wa_ketua: string;
    email_ketua: string;
    discord_ketua: null;
    bukti_follow: string;
    bukti_repost: string;
    ketua: {
      nama_ketua: string;
      ktp_ketua: string;
    };
    anggota1: {
      nama_anggota1: string;
      ktp_anggota1: string;
    };
    anggota2: {
      nama_anggota2: null;
      ktp_anggota2: null;
    };
  };
  token: string;
  permission: 'ADMIN' | 'USER';
}

export interface withToken {
  token: string;
}
