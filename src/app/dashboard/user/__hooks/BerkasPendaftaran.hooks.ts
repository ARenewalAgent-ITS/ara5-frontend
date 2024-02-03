import { useMutation } from '@tanstack/react-query';
import { serialize } from 'object-to-formdata';
import { useForm, UseFormReset } from 'react-hook-form';

import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import { useLoadingToast } from '@/hooks/useLoadingToast';
import api from '@/lib/api';
import { CustomAxiosError } from '@/types/api';
import { writeUp } from '@/types/entities/login';
import {
  TReuploadFoto,
  TReuploadPembayaran,
  TReuploadPersyaratan,
  TWriteup,
} from '@/types/entities/reupload';

export const useBerkasUtils = () => {
  function formatDates(dateString: Date) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

    return formattedDate;
  }

  function parseFilename(filename: string | undefined) {
    if (filename === undefined) return;
    const parts = filename.split('_');
    parts.shift();

    return parts.join('_');
  }

  function getListBank(bank: string | undefined) {
    switch (bank) {
      case 'QRIS':
        return '1';
      case 'Bank Mandiri':
        return '2';
      case 'Bank BNI':
        return '3';
      default:
        return '1';
    }
  }

  return {
    formatDates,
    parseFilename,
    getListBank,
  };
};

export const useBerkasForm = (listBank?: string) => {
  const fotoMethods = useForm<TReuploadFoto>();
  const { reset: resetFotoForm } = fotoMethods;

  const pembayaranMethods = useForm<TReuploadPembayaran>({
    defaultValues: {
      list_bank_id: listBank,
    },
  });
  const { reset: resetPembayaranForm } = pembayaranMethods;

  const persyaratanMethods = useForm<TReuploadPersyaratan>();
  const { reset: resetPersyaratanForm } = persyaratanMethods;

  const writeupMethods = useForm<TWriteup>();
  const { reset: resetWriteUp } = writeupMethods;

  return {
    fotoMethods,
    resetFotoForm,
    pembayaranMethods,
    resetPembayaranForm,
    persyaratanMethods,
    resetPersyaratanForm,
    writeupMethods,
    resetWriteUp,
  };
};

export const useBerkasApi = (
  event: string | undefined,
  pembayaranId: string | undefined,
  ctfId: string | undefined,
  refetchData: () => void,
  write_up_ctf: writeUp | null | undefined,
  resetFotoForm: UseFormReset<TReuploadFoto>,
  resetPembayaranForm: UseFormReset<TReuploadPembayaran>,
  resetPersyaratanForm: UseFormReset<TReuploadPersyaratan>,
  resetWriteUp: UseFormReset<TWriteup>
) => {
  const { startLoading, stopLoading } = useLoadingToast();

  //#region  //*=========== Reupload Foto API ===========
  const { mutate: reuploadFoto } = useMutation(
    async (data: TReuploadFoto | FormData) => {
      try {
        await api.patch(`/${event}/re-upload-foto`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        throw new Error('Error Reupload Foto');
      }
    },
    {
      onMutate: () => {
        startLoading();
      },
      onSuccess: () => {
        stopLoading();
        showToast('Profile updated successfully', SUCCESS_TOAST);
        resetFotoForm({
          ktp_ketua: undefined,
          ktp_anggota_1: undefined,
          ktp_anggota_2: undefined,
        });
        refetchData();
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          stopLoading();
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          stopLoading();
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

  const fotoOnSubmit = (data: TReuploadFoto) => {
    const isAnyFileUploaded =
      data.ktp_ketua?.[0] || data.ktp_anggota_1?.[0] || data.ktp_anggota_2?.[0];
    if (!isAnyFileUploaded) {
      showToast('Plese upload one or more file', DANGER_TOAST);
      return;
    }
    const body = {
      ktp_ketua: data.ktp_ketua?.[0] ?? undefined,
      ktp_anggota_1: data.ktp_anggota_1?.[0] ?? undefined,
      ktp_anggota_2: data.ktp_anggota_2?.[0] ?? undefined,
    };
    reuploadFoto(serialize(body));
  };

  //#region  //*=========== Reupload Pembayaran API & Form ===========
  const { mutate: reuploadPembayaran } = useMutation(
    async (data: TReuploadFoto | FormData) => {
      try {
        await api.patch(`pembayaran/${pembayaranId}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        throw new Error('Error Reupload Pembayaran');
      }
    },
    {
      onMutate: () => {
        startLoading();
      },
      onSuccess: () => {
        stopLoading();
        showToast('Pembayaran updated successfully', SUCCESS_TOAST);
        resetPembayaranForm({
          bukti_pembayaran: undefined,
        });
        refetchData();
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          stopLoading();
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          stopLoading();
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

  const pembayaranOnSubmit = (data: TReuploadPembayaran) => {
    const isAnyFileUploaded = data.bukti_pembayaran?.[0];
    if (!isAnyFileUploaded) {
      showToast('Bukti Pembayaran cannot be empty', DANGER_TOAST);
      return;
    }
    const body = {
      ...data,
      bukti_pembayaran: data.bukti_pembayaran?.[0] ?? undefined,
    };
    reuploadPembayaran(serialize(body));
  };

  //#region  //*=========== Reupload Persyaratan API & Form ===========
  const { mutate: reuploadPersyaratan } = useMutation(
    async (data: TReuploadPersyaratan | FormData) => {
      try {
        await api.patch(`/${event}/re-upload-bukti`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        throw new Error('Error Reupload Persyaratan');
      }
    },
    {
      onMutate: () => {
        startLoading();
      },
      onSuccess: () => {
        stopLoading();
        showToast('Persyaratan updated successfully', SUCCESS_TOAST);
        resetPersyaratanForm({
          bukti_follow: undefined,
          bukti_repost: undefined,
        });
        refetchData();
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          stopLoading();
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          stopLoading();
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

  const persyaratanOnSubmit = (data: TReuploadPersyaratan) => {
    const isAnyFileUploaded = data.bukti_follow?.[0] || data.bukti_repost?.[0];
    if (!isAnyFileUploaded) {
      showToast('Bukti Persyaratan cannot be empty', DANGER_TOAST);
      return;
    }
    const body = {
      bukti_follow: data.bukti_follow?.[0] ?? undefined,
      bukti_repost: data.bukti_repost?.[0] ?? undefined,
    };
    reuploadPersyaratan(serialize(body));
  };

  //#region  //*=========== Reupload CTF API & Form ===========
  const { mutate: postWriteup } = useMutation(
    async (data: TWriteup | FormData) => {
      try {
        await api.post(`/ctf/write-up`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        throw new Error('Error Upload Writeup');
      }
    },
    {
      onMutate: () => {
        startLoading();
      },
      onSuccess: () => {
        stopLoading();
        showToast('WriteUp uploaded successfully', SUCCESS_TOAST);
        resetWriteUp({
          write_up: undefined,
        });
        refetchData();
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          stopLoading();
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          stopLoading();
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

  const { mutate: patchWriteup } = useMutation(
    async (data: TWriteup | FormData) => {
      try {
        await api.patch(`/ctf/write-up/${ctfId}/update`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        throw new Error('Error Update Writeup');
      }
    },
    {
      onMutate: () => {
        startLoading();
      },
      onSuccess: () => {
        stopLoading();
        showToast('Write up updated successfully', SUCCESS_TOAST);
        resetWriteUp({
          write_up: undefined,
        });
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          stopLoading();
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          stopLoading();
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

  const writeupOnSubmit = (data: TWriteup) => {
    const isAnyFileUploaded = data.write_up?.[0];
    if (!isAnyFileUploaded) {
      showToast('Write up cannot be empty', DANGER_TOAST);
      return;
    }
    const body = {
      write_up: data.write_up?.[0] ?? undefined,
    };
    if (write_up_ctf === null) {
      postWriteup(serialize(body));
    } else {
      patchWriteup(serialize(body));
    }
  };

  return {
    fotoOnSubmit,
    pembayaranOnSubmit,
    persyaratanOnSubmit,
    writeupOnSubmit,
  };
};
