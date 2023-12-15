import { create } from 'zustand';

import { TRegisterCtf, TRegisterOlim } from '@/types/entities/register';

interface FormState {
  formData: TRegisterOlim;
  ctfFormData: TRegisterCtf;
  setFormData: (data: TRegisterOlim) => void;
  setCtfFormData: (data: TRegisterCtf) => void;
}

const initialFormData: TRegisterOlim = {
  team_name: '',
  team_username: '',
  team_password: '',
  team_provinsi_id: 0,
  team_kabupaten_id: 0,
  event: '',
  asal_institusi: '',
  no_wa_ketua: '',
  email_ketua: '',
  nama_ketua: '',
  ktp_ketua: '',
};

const initialCtfFormData: TRegisterCtf = {
  team_name: '',
  team_username: '',
  team_password: '',
  team_provinsi_id: 0,
  event: '',
  asal_institusi: '',
  no_wa_ketua: '',
  email_ketua: '',
  discord_ketua: '',
  nama_ketua: '',
  ktp_ketua: '',
};

export const useRegisterStore = create<FormState>((set) => ({
  formData: initialFormData,
  ctfFormData: initialCtfFormData,
  setFormData: (data) => set({ formData: data }),
  setCtfFormData: (data) => set({ ctfFormData: data }),
}));
