import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/form/DropzoneInput';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { useRegisterStore } from '@/store/useRegisterStore';
import { ApiError, CustomAxiosError } from '@/types/api';
import { TPembayaran, TReferal } from '@/types/entities/pembayaran';
import { TRegisterOlim } from '@/types/entities/register';

type BankDetails = {
  name: string;
  accountNumber: string;
  imageName: string;
};

export default function CtfPembayaranSection() {
  const { ctfFormData } = useRegisterStore();
  const [kupon, setKupon] = React.useState<string>('');
  const router = useRouter();
  const toastId = React.useRef<string | null>(null);
  const [isReferralApplied, setIsReferralApplied] =
    React.useState<boolean>(false);
  const initialBillAmount = 110000;
  const discountAmount = 10000;
  const totalBillAmount = isReferralApplied
    ? initialBillAmount - discountAmount
    : initialBillAmount;

  //#region  //*=========== Pembayaran ===========

  const methods = useForm<TPembayaran>({ defaultValues: { list_bank_id: 1 } });
  const metode_pembayaran = methods.watch('list_bank_id');
  const referalMethods = useForm<TReferal>();

  //#region  //*=========== Register API ===========

  const postRegister = async (data: TRegisterOlim | FormData) => {
    try {
      await api.post('/ctf/daftar', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ApiError>;
        if (serverError && serverError.response) {
          throw new Error(serverError.response.data.message);
        }
      }
      throw error;
    }
  };
  const { mutate: register, isLoading } = useMutation(postRegister, {
    onSuccess: () => {
      showToast('You have successfully registered!', SUCCESS_TOAST);
      router.push('/ctf');
    },
    onError: (error: CustomAxiosError) => {
      if (error.response) {
        showToast(error.response.data.message, DANGER_TOAST);
      } else {
        showToast('An unknown error occurred', DANGER_TOAST);
      }
    },
  });

  React.useEffect(() => {
    if (isLoading) {
      toastId.current = toast.loading('Loading...');
    } else {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    }
  }, [isLoading]);

  const registData = new FormData();
  registData.append('event', ctfFormData.event);
  registData.append('team_name', ctfFormData.team_name);
  registData.append('team_username', ctfFormData.team_username);
  registData.append('team_password', ctfFormData.team_password);
  registData.append('asal_institusi', ctfFormData.asal_institusi);
  registData.append(
    'team_provinsi_id',
    ctfFormData.team_provinsi_id.toString()
  );
  registData.append('nama_ketua', ctfFormData.nama_ketua);
  registData.append('no_wa_ketua', ctfFormData.no_wa_ketua);
  registData.append('email_ketua', ctfFormData.email_ketua);
  registData.append('discord_ketua', ctfFormData.discord_ketua);
  registData.append('kupon', kupon);
  if (ctfFormData.ktp_ketua && ctfFormData.ktp_ketua.length > 0) {
    registData.append('ktp_ketua', ctfFormData.ktp_ketua[0]);
  }
  if (ctfFormData.bukti_follow && ctfFormData.bukti_follow.length > 0) {
    registData.append('bukti_follow', ctfFormData.bukti_follow[0]);
  }
  if (ctfFormData.bukti_repost && ctfFormData.bukti_repost.length > 0) {
    registData.append('bukti_repost', ctfFormData.bukti_repost[0]);
  }
  if (
    ctfFormData.ktp_anggota_1 &&
    ctfFormData.ktp_anggota_1.length > 0 &&
    ctfFormData.nama_anggota_1
  ) {
    registData.append('ktp_anggota_1', ctfFormData.ktp_anggota_1[0]);
    registData.append('nama_anggota_1', ctfFormData.nama_anggota_1);
  }
  if (
    ctfFormData.ktp_anggota_2 &&
    ctfFormData.ktp_anggota_2.length > 0 &&
    ctfFormData.nama_anggota_2
  ) {
    registData.append('ktp_anggota_2', ctfFormData.ktp_anggota_2[0]);
    registData.append('nama_anggota_2', ctfFormData.nama_anggota_2);
  }

  //#region  //*=========== Kupon ===========

  const getKuponQuery = async (kupon: string) => {
    try {
      const response = await api.get(`/kupon/${kupon}`);
      return response;
    } catch (error) {
      throw new Error('Terjadi kesalahan dalam mengambil kupon');
    }
  };

  const { mutate: getKupon } = useMutation(getKuponQuery, {
    onSuccess: (data) => {
      if (data.data.kuponStatus.usage == 0) {
        showToast('Referral code has expired!', DANGER_TOAST);
        setIsReferralApplied(false);
        setKupon('');
      } else {
        showToast('Referral code successfully used!', SUCCESS_TOAST);
        setIsReferralApplied(true);
        setKupon(data.data.kuponStatus.kupon);
      }
    },
    onError: () => {
      showToast('Referral code is not available', DANGER_TOAST);
      setIsReferralApplied(false);
      setKupon('');
    },
  });

  //#region  //*=========== Form Submit ===========

  const RegisterOnSubmit = (data: TPembayaran) => {
    registData.append('list_bank_id', data.list_bank_id.toString());
    registData.append('bukti_pembayaran', data.bukti_pembayaran[0]);

    register(registData);
  };

  const referalOnSubmit = (data: TReferal) => {
    getKupon(data.kupon);
  };

  const bankDetailsMapping: { [key: string]: BankDetails } = {
    '1': {
      name: 'fathikaaf',
      accountNumber: 'NMID : ID1023269716057',
      imageName: '/img/register/qris.png',
    },
    '2': {
      name: '1710007770384',
      accountNumber: 'Mutiara Nurhaliza',
      imageName: '/svg/register/logo_mandiri.svg',
    },
    '3': {
      name: '1274684717',
      accountNumber: 'Fathika Afrine Azaruddin',
      imageName: '/img/register/logo_bni.png',
    },
  };
  const bankDetails = bankDetailsMapping[metode_pembayaran.toString()];

  return (
    <div className='lg:px-4 xl:px-12 2xl:px-14'>
      <div className='flex flex-col justify-center gap-6 px-12 py-7 lg:px-0'>
        <div className='flex flex-col mb-5 sm:flex-row sm:gap-1 sm:mx-auto lg:flex-col lg:mx-0'>
          <Typography
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block text-whites-1100'
          >
            Page
          </Typography>
          <Typography
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block text-whites-1100'
          >
            Pembayaran
          </Typography>
        </div>
        <div className='w-full flex flex-col justify-start'>
          <Typography
            variant='t'
            font='poppins'
            weight='medium'
            className='text-[18px] leading-[24px] text-whites-1100'
          >
            Total Tagihan
          </Typography>
          <div className='flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between'>
            <Typography
              variant='h4'
              font='poppins'
              weight='bold'
              className={clsxm(
                'text-[48px] leading-[64px]',
                isReferralApplied ? 'text-success-700' : 'text-whites-1100'
              )}
            >
              Rp {totalBillAmount.toLocaleString('id-ID')}
            </Typography>
            <Button
              variant='outline-primary'
              className={clsxm('h-fit py-[6px] mt-3 px-3')}
            >
              <Typography
                variant='bt'
                font='poppins'
                weight='bold'
                className='text-primary-600'
              >
                Detail Pembayaran
              </Typography>
            </Button>
          </div>
        </div>

        {/* Pembayaran Form */}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(RegisterOnSubmit)}
            className='space-y-6'
          >
            <SelectInput
              id='list_bank_id'
              label='Metode Pembayaran'
              placeholder='QRIS'
              validation={{
                required: 'Metode Pembayaran cannot be empty',
              }}
            >
              <option value={1}>QRIS</option>
              <option value={2}>Bank Mandiri</option>
              <option value={3}>Bank BNI</option>
            </SelectInput>
            <div className='flex flex-col md:items-start items-center text-whites-1100'>
              <Image
                src={bankDetails?.imageName || '/img/register/qris.png'}
                alt={bankDetails?.name || 'NMID : ID1023269716057'}
                width={264}
                height={265}
              />
              <Typography
                font='poppins'
                variant='t'
                weight='medium'
                className='text-[16px] leading-[24px] text-whites-1100'
              >
                {bankDetails?.accountNumber || 'NMID : ID1023269716057'}
              </Typography>
              <Typography
                font='poppins'
                variant='h6'
                weight='bold'
                className='text-[20px] leading-[24px] text-whites-1100'
              >
                {bankDetails?.name || 'fathikaaf'}
              </Typography>
            </div>
            <DropzoneInput
              id='bukti_pembayaran'
              label='Upload Bukti Pembayaran'
              className={clsxm('bg-whites-100')}
              validation={{
                required: 'Bukti Pembayaran cannot be empty',
              }}
              helperText='Please ensure the file size does not exceed 1 MB.'
            />
          </form>
        </FormProvider>

        {/* Form Kupon */}
        <FormProvider {...referalMethods}>
          <form
            onSubmit={referalMethods.handleSubmit(referalOnSubmit)}
            className='flex flex-col md:flex-row md:items-center md:gap-x-3'
          >
            <Input
              id='kupon'
              label='Kode Referal'
              helperText='Gunakan kode referal dan dapatkan potongan!'
              placeholder='Masukan kode referal (opsional)'
              validation={{
                required: 'Referral Code needed to apply',
              }}
            />
            <Button
              type='submit'
              variant='primary'
              className={clsxm(
                'h-fit w-32 md:w-28 py-[6px] mt-[10.8px] lg:mt-[8.5px]'
              )}
            >
              <Typography
                variant='bt'
                weight='bold'
                className='w-24 text-whites-100'
              >
                Cek Kupon
              </Typography>
            </Button>
          </form>
        </FormProvider>

        {/* Submit Button */}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(RegisterOnSubmit)}
            className='space-y-6'
          >
            <Button
              type='submit'
              size='lg'
              variant='success'
              className={clsxm(
                isLoading ?? 'bg-success-800',
                'w-full drop-shadow-md py-[6px] md:py-3'
              )}
            >
              <Typography
                font='poppins'
                variant='bt'
                className={clsxm(
                  'text-[11.86px] leading-[20.32px] text-whites-100'
                )}
                weight='bold'
              >
                {isLoading ? 'Registering...' : 'Register'}
              </Typography>
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
