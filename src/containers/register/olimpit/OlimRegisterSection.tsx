'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/form/DropzoneInput';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { useRegisterStore } from '@/store/useRegisterStore';
import { ApiReturn } from '@/types/api';
import { TRegisterOlim } from '@/types/entities/register';
import { TKabupaten, TProvinsi } from '@/types/entities/wilayah';

interface OlimRegisterSectionProps {
  onNextStep: () => void;
}

export default function OlimRegisterSection({
  onNextStep,
}: OlimRegisterSectionProps) {
  const [selectedProvinsiId, setSelectedProvinsiId] = React.useState<
    null | number
  >(null);
  const [kabupatenData, setKabupatenData] = React.useState<Array<TKabupaten>>(
    []
  );
  const { setOlimFormData } = useRegisterStore();

  //#region  //*=========== Register Form ===========

  const methods = useForm<TRegisterOlim>({
    defaultValues: {
      event: 'Olim',
    },
  });
  const match_password = methods.watch('team_password');

  //#region  //*=========== Wilayah API ===========

  const { data: provinsiData } = useQuery<ApiReturn<Array<TProvinsi>>>({
    queryKey: ['/wilayah/provinsi'],
    staleTime: Infinity,
  });

  const getKabupatenQuery = async (provinsiId: number) => {
    try {
      const response = await api.get(`/wilayah/kabupaten/${provinsiId}`);
      return response.data;
    } catch (error) {
      throw new Error('Terjadi kesalahan dalam mengambil kabupaten');
    }
  };

  const { mutate: getKabupaten } = useMutation(getKabupatenQuery, {
    onSuccess: (data) => {
      setKabupatenData(data.data);
    },
  });

  React.useEffect(() => {
    if (selectedProvinsiId) {
      getKabupaten(selectedProvinsiId);
    }
  }, [selectedProvinsiId, getKabupaten]);

  const onSubmit = (data: TRegisterOlim) => {
    setOlimFormData(data);
    onNextStep();
  };
  return (
    <div className='lg:px-4 xl:px-12 2xl:px-14'>
      <div className='flex flex-col justify-center gap-8 lg:gap-14 px-12 py-7 lg:px-0'>
        <div className='flex flex-col sm:flex-row sm:gap-3 sm:mx-auto lg:flex-col lg:mx-0'>
          <Typography
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block text-whites-1100'
          >
            Registrasi
          </Typography>
          <Typography
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block text-whites-1100'
          >
            OlimpIT
          </Typography>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='space-y-12'
          >
            <div className='space-y-6'>
              <Input
                id='team_name'
                label='Nama Tim'
                placeholder='Masukkan nama tim'
                validation={{
                  required: 'Nama Tim cannot be empty',
                  pattern: {
                    value: /^[A-Za-z0-9 ]+$/,
                    message: 'Only alphanumeric characters are allowed',
                  },
                }}
              />
              <Input
                id='team_username'
                label='Username Tim'
                placeholder='Masukkan username'
                helperText='Minimal 5 karakter tanpa spasi'
                helperTextClassName=''
                validation={{
                  required: 'Username Tim cannot be empty',
                  minLength: {
                    value: 5,
                    message: 'Password must be at least 5 characters',
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_]{5,}$/,
                    message:
                      'Username must be alphanumeric, and cannot contain spaces (underscore allowed)',
                  },
                }}
              />
              <Input
                id='team_password'
                label='Password'
                placeholder='Masukkan Password'
                type='password'
                helperText='Minimal 8 karakter alfanumerik dengan satu huruf kapital (uppercase)'
                validation={{
                  required: 'Password cannot be empty',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])[A-Za-z0-9]+$/,
                    message:
                      'Password must contain at least one uppercase letter and be alphanumeric',
                  },
                }}
              />
              <Input
                id='team_password_confirmation'
                label='Konfirmasi Password'
                placeholder='Konfirmasi password'
                type='password'
                validation={{
                  required: 'Konfirmasi Password cannot be empty',
                  validate: (value) =>
                    value === match_password || 'Password tidak cocok',
                }}
              />
              <Input
                id='asal_institusi'
                label='Institusi / Sekolah'
                placeholder='Masukkan sekolah / institusi asal'
                validation={{
                  required: 'Institusi / Sekolah cannot be empty',
                }}
              />
              <SelectInput
                id='team_provinsi_id'
                label='Provinsi'
                validation={{
                  required: 'Provinsi cannot be empty',
                }}
                placeholder='Masukkan provinsi sekolah / institusi asal'
                onChange={(e) => setSelectedProvinsiId(Number(e.target.value))}
              >
                {provinsiData?.data?.map(({ id, nama }) => (
                  <option key={id} value={id}>
                    {nama}
                  </option>
                ))}
              </SelectInput>
              <SelectInput
                id='team_kabupaten_id'
                label='Kota / Kabupaten'
                validation={{
                  required: 'Kota / Kabupaten cannot be empty',
                }}
                placeholder='Masukkan kota / kabupaten sekolah / institusi asal'
              >
                {kabupatenData?.map(({ id, kabupaten }) => (
                  <option key={id} value={id}>
                    {kabupaten}
                  </option>
                ))}
              </SelectInput>
              <DropzoneInput
                id='bukti_follow'
                label='Bukti Follow IG ARA 5.0'
                validation={{
                  required: 'Bukti Follow IG cannot be empty',
                }}
                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                className={clsxm('bg-whites-100')}
                helperText='Please ensure the file size does not exceed 1 MB.'
              />
              <DropzoneInput
                id='bukti_repost'
                label='Bukti Share Poster OlimpIT ARA 5.0'
                validation={{
                  required: 'Bukti Share Poster cannot be empty',
                }}
                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                className={clsxm('bg-whites-100')}
                helperText='Please ensure the file size does not exceed 1 MB.'
              />
              <Input
                id='nama_ketua'
                label='Nama Ketua'
                placeholder='Masukkan nama ketua tim'
                validation={{
                  required: 'Nama Ketua cannot be empty',
                  pattern: {
                    value: /^[A-Za-z0-9 ]+$/,
                    message: 'Only alphanumeric characters are allowed',
                  },
                }}
              />
              <DropzoneInput
                id='ktp_ketua'
                label='Kartu Tanda Pelajar Ketua'
                validation={{
                  required: 'Kartu Tanda Pelajar Ketua cannot be empty',
                }}
                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                className={clsxm('bg-whites-100')}
                helperText='Please ensure the file size does not exceed 1 MB.'
              />
              <Input
                id='no_wa_ketua'
                label='Nomor Whatsapp Ketua'
                placeholder='Masukkan nomor whatsapp ketua tim'
                validation={{
                  required: 'Nomor Whatsapp Ketua cannot be empty',
                  pattern: {
                    value: /^\d{10,15}$/,
                    message: 'Enter a valid mobile number (10-15 digit number)',
                  },
                }}
              />
              <Input
                id='email_ketua'
                label='Email Ketua'
                placeholder='Masukkan email ketua tim'
                validation={{
                  required: 'Email Ketua cannot be empty',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Enter a valid email address',
                  },
                }}
              />
              <Input
                id='nama_anggota_1'
                label='Nama Anggota 1'
                placeholder='Masukkan nama anggota 1'
                validation={{
                  required: 'Nama Anggota cannot be empty',
                  pattern: {
                    value: /^[A-Za-z0-9 ]+$/,
                    message: 'Only alphanumeric characters are allowed',
                  },
                }}
              />
              <DropzoneInput
                id='ktp_anggota_1'
                label='Kartu Tanda Pelajar Anggota 1'
                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                className={clsxm('bg-whites-100')}
                helperText='Please ensure the file size does not exceed 1 MB.'
                validation={{
                  required: 'Kartu Tanda Pelajar Ketua cannot be empty',
                }}
              />
            </div>
            <Button
              type='submit'
              size='lg'
              variant='success'
              className='w-full drop-shadow-md py-[6px] md:py-3'
            >
              <Typography
                font='poppins'
                variant='bt'
                className='text-[11.86px] leading-[20.32px] text-whites-100'
                weight='bold'
              >
                Next
              </Typography>
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
