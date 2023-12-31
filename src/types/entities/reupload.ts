export type TReuploadFoto = {
  ktp_ketua?: FileList;
  ktp_anggota_1?: FileList;
  ktp_anggota_2?: FileList;
};

export type TReuploadPembayaran = {
  list_bank_id: string;
  bukti_pembayaran: FileList;
};
