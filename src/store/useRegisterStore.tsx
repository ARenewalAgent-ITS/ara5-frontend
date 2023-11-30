import { create } from 'zustand';

import { TRegisterOlim } from '@/types/entities/register';

interface FormState {
  formData: TRegisterOlim;
  setFormData: (data: TRegisterOlim) => void;
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

export const useRegisterStore = create<FormState>((set) => ({
  formData: initialFormData,
  setFormData: (data) => set({ formData: data }),
}));
