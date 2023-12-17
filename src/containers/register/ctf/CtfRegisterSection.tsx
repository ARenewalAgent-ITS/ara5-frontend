'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import CounterInput from '@/components/form/CounterInput';
import DropzoneInput from '@/components/form/DropzoneInput';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { useRegisterStore } from '@/store/useRegisterStore';
import { ApiReturn } from '@/types/api';
import { TRegisterCtf } from '@/types/entities/register';
import { TProvinsi } from '@/types/entities/wilayah';

interface OlimRegisterSectionProps {
  onNextStep: () => void;
}

export default function CtfRegisterSection({
  onNextStep,
}: OlimRegisterSectionProps) {
  const [peopleCount, setPeopleCount] = React.useState(0);
  const { setCtfFormData } = useRegisterStore();

  //#region  //*=========== Register Form ===========

  const methods = useForm<TRegisterCtf>({
    defaultValues: {
      event: 'CTF',
    },
  });
  const match_password = methods.watch('team_password');

  //#region  //*=========== Wilayah API ===========

  const { data: provinsiData } = useQuery<ApiReturn<Array<TProvinsi>>>({
    queryKey: ['/wilayah/provinsi'],
    staleTime: Infinity,
  });

  const handleIncrement = () => {
    setPeopleCount((prevCount) => (prevCount < 2 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setPeopleCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  const onSubmit = (data: TRegisterCtf) => {
    setCtfFormData(data);
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
            className='text-[48px] leading-[64px] block'
          >
            Registrasi
          </Typography>
          <Typography
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block'
          >
            CTF
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
                    value: /^[A-Za-z0-9]+$/,
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
                    value: /^[A-Za-z0-9]{5,}$/,
                    message:
                      'Username must be at least 5 characters, alphanumeric, and cannot contain spaces',
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
              >
                {provinsiData?.data?.map(({ id, nama }) => (
                  <option key={id} value={id}>
                    {nama}
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
              />
              <DropzoneInput
                id='bukti_repost'
                label='Bukti Share Poster OlimpIT ARA 5.0'
                validation={{
                  required: 'Bukti Share Poster cannot be empty',
                }}
                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                className={clsxm('bg-whites-100')}
              />
              <Input
                id='nama_ketua'
                label='Nama Ketua'
                placeholder='Masukkan nama ketua tim'
                validation={{
                  required: 'Nama Ketua cannot be empty',
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
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
              />
              <Input
                id='no_wa_ketua'
                label='Nomor Whatsapp Ketua'
                placeholder='Masukkan nomor whatsapp ketua tim'
                validation={{
                  required: 'Nomor Whatsapp Ketua tidak boleh kosong',
                  pattern: {
                    value: /^\d{10,15}$/,
                    message:
                      'Masukkan nomor handphone yang valid (10-15 digit angka)',
                  },
                }}
              />
              <Input
                id='email_ketua'
                label='Email Ketua'
                placeholder='Masukkan email ketua tim'
                validation={{
                  required: 'Email Ketua tidak boleh kosong',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Masukkan alamat email yang valid',
                  },
                }}
              />
              <Input
                id='discord_ketua'
                label='Discord Ketua'
                placeholder='Masukkan nama discord ketua tim'
                validation={{
                  required: 'Discord Ketua cannot be empty',
                }}
              />
              <CounterInput
                count={peopleCount}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
              {peopleCount >= 1 && (
                <>
                  <Input
                    id='nama_anggota_1'
                    label='Nama Anggota 1'
                    placeholder='Masukkan nama anggota 1'
                    validation={{
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: 'Only alphanumeric characters are allowed',
                      },
                    }}
                  />
                  <DropzoneInput
                    id='ktp_anggota_1'
                    label='Kartu Tanda Pelajar Anggota 1'
                    accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                    className={clsxm('bg-whites-100')}
                  />
                </>
              )}
              {peopleCount >= 2 && (
                <>
                  <Input
                    id='nama_anggota_2'
                    label='Nama Anggota 2'
                    placeholder='Masukkan nama anggota 2'
                    validation={{
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: 'Only alphanumeric characters are allowed',
                      },
                    }}
                  />
                  <DropzoneInput
                    id='ktp_anggota_2'
                    label='Kartu Tanda Pelajar Anggota 2'
                    accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                    className={clsxm('bg-whites-100')}
                  />
                </>
              )}
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
