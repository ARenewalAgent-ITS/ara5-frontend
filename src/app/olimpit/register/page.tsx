'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
// import Checkbox from '@/components/Checkbox';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Typography from '@/components/Typography';
import { TRegisterOlim } from '@/types/entities/register';

export default function RegisterOlimp() {
  const methods = useForm<TRegisterOlim>({
    defaultValues: {
      event: 'Olim',
    },
  });
  const password = methods.watch('team_password'); // Make sure to use the correct name attribute value of the password input

  const onSubmit = (data: TRegisterOlim) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className='flex flex-col justify-center gap-8 px-12 py-10 lg:px-0'>
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
          Olimpit
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-12'>
          <div className='space-y-6'>
            <Input
              id='team_name'
              label='Nama Tim'
              placeholder='Masukkan nama tim'
              validation={{
                required: 'Nama Tim cannot be empty',
              }}
            />
            <Input
              id='team_username'
              label='Username Tim'
              placeholder='Masukkan username'
              helperText='Minimal 5 karakter tanpa spasi'
              helperTextClassName=''
              validation={{
                required: 'Username cannot be empty',
                minLength: {
                  value: 5,
                  message: 'Password must be at least 5 characters',
                },
                pattern: {
                  value: /^[^\s]{5,}$/,
                  message: 'Password cannot contain spaces',
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
                  value: /(?=.*[A-Z])/,
                  message:
                    'Password must contain at least one uppercase letter',
                },
              }}
            />
            <Input
              id='team_password_confirmation'
              label='Konfirmasi Password'
              placeholder='Konfirmasi password'
              type='password'
              validation={{
                required: 'Password cannot be empty',
                validate: (value) =>
                  value === password || 'Password tidak cocok',
              }}
            />
            <Input
              id='asal_institusi'
              label='Institusi / Sekolah'
              placeholder='Masukkan sekolah / institusi asal'
              validation={{
                required: 'Nama Tim cannot be empty',
              }}
            />
            <SelectInput
              id='team_provinsi_id'
              label='Provinsi'
              placeholder='Masukkan provinsi sekolah / institusi asal'
            >
              <option className='p-10'>halo</option>
              <option className='p-10'>halo</option>
              <option className='p-10'>halo</option>
              <option className='p-10'>halo</option>
              <option className='p-10'>halo</option>
              <option className='p-10'>halo</option>
            </SelectInput>
            <SelectInput
              id='team_kabupaten_id'
              label='Kota / Kabupaten'
              placeholder='Masukkan kota / kabupaten sekolah / institusi asal'
            ></SelectInput>
            <Input
              id='nama_ketua'
              label='Nama Ketua'
              placeholder='Masukkan nama ketua tim'
              validation={{
                required: 'Nama Ketua cannot be empty',
              }}
            />
            {/* input ktp ketua */}
            <Input
              id='no_wa_ketua'
              label='Nomor Whatsapp Ketua'
              placeholder='Masukkan nomor whatsapp ketua tim'
              validation={{
                required: 'Nama Ketua cannot be empty',
              }}
            />
            <Input
              id='email_ketua'
              label='Email Ketua'
              placeholder='Masukkan email ketua tim'
              validation={{
                required: 'Nama Ketua cannot be empty',
              }}
            />

            {/* input jumlah anggota dalam tim, cuman buat munculin inputnya */}

            {/* input anggota 1 */}
            <Input
              id='nama_anggota_1'
              label='Nama anggota 1 (opsional)'
              placeholder='Masukkan nama tim'
            />
            {/* input file anggota 1 */}

            {/* input anggota 2 */}
            <Input
              id='nama_anggota_2'
              label='Nama Anggota 2 (opsional)'
              placeholder='Masukkan nama tim'
            />
            {/* input file anggota 2 */}
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
  );
}
