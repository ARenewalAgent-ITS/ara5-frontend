import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BiSolidCheckCircle } from 'react-icons/bi';

import Button from '@/components/buttons/Button';
import FileInput from '@/components/form/FileInput';
import UnstyledLink from '@/components/links/UnstyledLink';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { ApiError, CustomAxiosError } from '@/types/api';
import { UserLogin } from '@/types/entities/login';
import {
  TReuploadFoto,
  TReuploadPembayaran,
  TReuploadPersyaratan,
} from '@/types/entities/reupload';
import WaitingVerifLogo from '~/svg/dashboardpage/user/WaitingVerifLogo';

interface BerkasPendaftaranProps {
  userData?: UserLogin;
  refetchData: () => void;
}
export default function BerkasPendaftaran({
  userData,
  refetchData,
}: BerkasPendaftaranProps) {
  const event = userData?.event?.toLocaleLowerCase();
  const pembayaranId = userData?.pembayaran_id;

  let listBank;
  if (userData?.pembayaran.bank === 'QRIS') {
    listBank = '1';
  } else if (userData?.pembayaran.bank === 'Bank Mandiri') {
    listBank = '2';
  } else if (userData?.pembayaran.bank === 'Bank BNI') {
    listBank = '3';
  } else {
    listBank = '1';
  }

  //#region  //*=========== Reupload Foto API & Form ===========

  const fotoMethods = useForm<TReuploadFoto>();
  const { reset: resetFotoForm } = fotoMethods;

  const patchReuploadFoto = async (data: TReuploadFoto | FormData) => {
    try {
      await api.patch(`/${event}/re-upload-foto`, data, {
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

  const { mutate: reuploadFoto } = useMutation(patchReuploadFoto, {
    onSuccess: () => {
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
        showToast(error.response.data.message, DANGER_TOAST);
      } else {
        showToast('An unknown error occurred', DANGER_TOAST);
      }
    },
  });

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

  const pembayaranMethods = useForm<TReuploadPembayaran>({
    defaultValues: {
      list_bank_id: listBank,
    },
  });
  const { reset: resetPembayaranForm } = pembayaranMethods;

  const patchReuploadPembayaran = async (data: TReuploadFoto | FormData) => {
    try {
      await api.patch(`pembayaran/${pembayaranId}`, data, {
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

  const { mutate: reuploadPembayaran } = useMutation(patchReuploadPembayaran, {
    onSuccess: () => {
      showToast('Profile updated successfully', SUCCESS_TOAST);
      resetPembayaranForm({
        bukti_pembayaran: undefined,
      });
      refetchData();
    },
    onError: (error: CustomAxiosError) => {
      if (error.response) {
        showToast(error.response.data.message, DANGER_TOAST);
      } else {
        showToast('An unknown error occurred', DANGER_TOAST);
      }
    },
  });

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

  const persyaratanMethods = useForm<TReuploadPersyaratan>();
  const { reset: resetPersyaratanForm } = persyaratanMethods;

  const patchReuploadPersyaratan = async (data: TReuploadFoto | FormData) => {
    try {
      await api.patch(`/${event}/re-upload-bukti`, data, {
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

  const { mutate: reuploadPersyaratan } = useMutation(
    patchReuploadPersyaratan,
    {
      onSuccess: () => {
        showToast('Persyaratan updated successfully', SUCCESS_TOAST);
        resetPersyaratanForm({
          bukti_follow: undefined,
          bukti_repost: undefined,
        });
        refetchData();
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
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

  const paymentStatus = userData?.pembayaran?.status_pembayaran;
  let statusElement;
  switch (paymentStatus) {
    case 'AWAITING VERIFICATION':
      statusElement = (
        <UnstyledLink
          href={`https://ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
          className='flex w-full items-center justify-between group'
        >
          <div className='flex flex-col'>
            <Typography
              weight='bold'
              font='poppins'
              className='text-primary-600 md:text-[16px] text-[13px]'
            >
              MENUNGGU VERIFIKASI
            </Typography>
            <UnstyledLink
              href={`https://ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
            >
              <Typography
                font='poppins'
                className='text-whites-1100 md:text-[14px] text-[11px] group-hover:underline'
              >
                {userData?.pembayaran?.bukti_pembayaran
                  ? parseFilename(userData.pembayaran.bukti_pembayaran)
                  : 'Nama File'}
              </Typography>
            </UnstyledLink>
          </div>
          <WaitingVerifLogo />
        </UnstyledLink>
      );
      break;
    case 'SUCCESS':
      statusElement = (
        <UnstyledLink
          href={`https://ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
          className='flex items-center group'
        >
          <div className='flex flex-col'>
            <Typography
              weight='bold'
              font='poppins'
              className='text-success-600 md:text-[16px] text-[13px]'
            >
              PEMBAYARAN SUKSES
            </Typography>
            <Typography
              font='poppins'
              className='text-whites-1100 md:text-[14px] text-[11px] group-hover:underline'
            >
              {userData?.pembayaran?.bukti_pembayaran
                ? parseFilename(userData.pembayaran.bukti_pembayaran)
                : 'Nama File'}
            </Typography>
          </div>
          <BiSolidCheckCircle className=' text-success-600 w-11 md:w-12 h-11 md:h-12' />
        </UnstyledLink>
      );
      break;
    case 'FAILED':
      statusElement = (
        <>
          <div className='flex flex-col'>
            <Typography
              weight='bold'
              font='poppins'
              className='text-danger-600 md:text-[16px] text-[13px]'
            >
              PEMBAYARAN GAGAL
            </Typography>
            <Typography
              font='poppins'
              className='text-whites-1100 md:text-[14px] text-[11px]'
            >
              Coba upload ulang file nya ya!
            </Typography>
          </div>
          <FormProvider {...pembayaranMethods}>
            <form onSubmit={pembayaranMethods.handleSubmit(pembayaranOnSubmit)}>
              <FileInput id='bukti_pembayaran' />
            </form>
          </FormProvider>
        </>
      );
      break;
    default:
      statusElement = (
        <UnstyledLink
          href={`https://ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
          className='flex items-center group'
        >
          <div className='flex flex-col'>
            <Typography
              weight='bold'
              font='poppins'
              className='text-primary-600 md:text-[16px] text-[13px]'
            >
              MENUNGGU VERIFIKASI
            </Typography>

            <Typography
              font='poppins'
              className='text-whites-1100 md:text-[14px] text-[11px] group-hover:underline'
            >
              {userData?.pembayaran?.bukti_pembayaran}
            </Typography>
          </div>
          <WaitingVerifLogo />
        </UnstyledLink>
      );
  }

  function parseFilename(filename: string) {
    const parts = filename.split('_');
    parts.shift();
    return parts.join('_');
  }

  return (
    <>
      <div className='bg-transparent'>
        <Typography
          as='h5'
          variant='h5'
          weight='bold'
          font='poppins'
          className='text-whites-1100 text-[24px] leading-[32px]'
        >
          Berkas Pendaftaran
        </Typography>
        <div className='w-full h-fit md:flex-col mt-1 mb-5 justify-center items-center md:justify-start md:items-start first-letter:mx-auto'>
          <div className='flex flex-col md:flex-row'>
            {/* Profil Tim */}
            <div className='mt-5 bg-primary-400 bg-opacity-10 md:space-y-6 h-fit md:w-[26rem] w-72 rounded-[10.5px] px-7 py-6 md:px-10 md:py-10'>
              <Typography
                as='h6'
                variant='h6'
                weight='bold'
                font='poppins'
                className='text-whites-1100 text-[16px] leading-[24px] mt-3 md:mb-2'
              >
                Profil Tim
              </Typography>
              <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                <UnstyledLink
                  href={`https://ara-its.id/uploads/${event}/${userData?.ketua?.ktp_ketua}`}
                  className='flex flex-col group'
                >
                  <Typography
                    as='p'
                    variant='p'
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 text-[14px]'
                  >
                    Nama Ketua
                  </Typography>
                  <Typography
                    variant='c14'
                    font='poppins'
                    className='text-whites-1100 text-[12px] leading-[24px] group-hover:underline'
                  >
                    {userData ? `${userData.ketua.nama_ketua}` : 'Nama Ketua'}
                  </Typography>
                </UnstyledLink>
                {paymentStatus === 'SUCCESS' ? (
                  <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                ) : (
                  <FormProvider {...fotoMethods}>
                    <form>
                      <FileInput id='ktp_ketua' />
                    </form>
                  </FormProvider>
                )}
              </div>
              {userData?.anggota1.nama_anggota1 ? (
                <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                  <UnstyledLink
                    href={`https://ara-its.id/uploads/${event}/${userData?.anggota1?.ktp_anggota1}`}
                    className='flex flex-col group'
                  >
                    <Typography
                      as='p'
                      variant='p'
                      weight='bold'
                      font='poppins'
                      className='text-whites-1100 text-[14px]'
                    >
                      Nama Anggota
                    </Typography>
                    <Typography
                      variant='c14'
                      font='poppins'
                      className='text-whites-1100 text-[12px] leading-[24px] group-hover:underline'
                    >
                      {userData
                        ? `${userData.anggota1.nama_anggota1}`
                        : 'Nama Anggota 1'}
                    </Typography>
                  </UnstyledLink>
                  {paymentStatus === 'SUCCESS' ? (
                    <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                  ) : (
                    <FormProvider {...fotoMethods}>
                      <form>
                        <FileInput id='ktp_anggota_1' />
                      </form>
                    </FormProvider>
                  )}
                </div>
              ) : null}
              {userData?.anggota2.nama_anggota2 ? (
                <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                  <UnstyledLink
                    href={`https://ara-its.id/uploads/${event}/${userData?.anggota2?.ktp_anggota2}`}
                    className='flex flex-col group'
                  >
                    <Typography
                      as='p'
                      variant='p'
                      weight='bold'
                      font='poppins'
                      className='text-whites-1100 text-[14px]'
                    >
                      Nama Anggota
                    </Typography>
                    <Typography
                      variant='c14'
                      font='poppins'
                      className='text-whites-1100 text-[12px] leading-[24px] group-hover:underline'
                    >
                      {userData
                        ? `${userData.anggota2?.nama_anggota2}`
                        : 'Nama Anggota 2'}
                    </Typography>
                  </UnstyledLink>
                  {paymentStatus === 'SUCCESS' ? (
                    <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                  ) : (
                    <FormProvider {...fotoMethods}>
                      <form>
                        <FileInput id='ktp_anggota_2' />
                      </form>
                    </FormProvider>
                  )}
                </div>
              ) : null}
              {paymentStatus === 'SUCCESS' ? null : (
                <FormProvider {...fotoMethods}>
                  <form onSubmit={fotoMethods.handleSubmit(fotoOnSubmit)}>
                    <Button
                      type='submit'
                      className='px-6 md:px-10 py-2 mt-5 md:mt-0 rounded-lg'
                    >
                      <Typography
                        variant='bt'
                        weight='bold'
                        font='poppins'
                        className='text-whites-100 text-[14px]'
                      >
                        Upload
                      </Typography>
                    </Button>
                  </form>
                </FormProvider>
              )}
            </div>

            {/* Bukti Screenshot */}
            <div className='mt-5  md:mx-10 bg-primary-400 bg-opacity-10 md:space-y-6 h-fit md:w-[26rem] w-72 rounded-[10.5px] px-7 py-6 md:px-10 md:py-10'>
              <Typography
                as='h6'
                variant='h6'
                weight='bold'
                font='poppins'
                className='text-whites-1100 text-[16px] leading-[24px] mt-3 md:mb-2'
              >
                Bukti Persyaratan
              </Typography>
              <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                <UnstyledLink
                  href={`https://ara-its.id/uploads/persyaratan/${userData?.bukti_follow}`}
                  className='flex flex-col group'
                >
                  <Typography
                    as='p'
                    variant='p'
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 text-[14px]'
                  >
                    Bukti Follow
                  </Typography>
                  <Typography
                    variant='c14'
                    font='poppins'
                    className='text-whites-1100 text-[12px] leading-[24px] group-hover:underline'
                  >
                    {userData?.bukti_follow
                      ? `${parseFilename(userData.bukti_follow)}`
                      : 'Bukti_Follow.png'}
                  </Typography>
                </UnstyledLink>
                {paymentStatus === 'SUCCESS' ? (
                  <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                ) : (
                  <FormProvider {...persyaratanMethods}>
                    <form>
                      <FileInput id='bukti_follow' />
                    </form>
                  </FormProvider>
                )}
              </div>
              <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                <UnstyledLink
                  href={`https://ara-its.id/uploads/persyaratan/${userData?.bukti_repost}`}
                  className='flex flex-col group'
                >
                  <Typography
                    as='p'
                    variant='p'
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 text-[14px]'
                  >
                    Bukti Repost
                  </Typography>
                  <Typography
                    variant='c14'
                    font='poppins'
                    className='text-whites-1100 text-[12px] leading-[24px] group-hover:underline'
                  >
                    {userData?.bukti_repost
                      ? `${parseFilename(userData.bukti_repost)}`
                      : 'Bukti_Repost.png'}
                  </Typography>
                </UnstyledLink>
                {paymentStatus === 'SUCCESS' ? (
                  <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                ) : (
                  <FormProvider {...persyaratanMethods}>
                    <form>
                      <FileInput id='bukti_repost' />
                    </form>
                  </FormProvider>
                )}
              </div>
              {paymentStatus === 'SUCCESS' ? null : (
                <FormProvider {...persyaratanMethods}>
                  <form
                    onSubmit={persyaratanMethods.handleSubmit(
                      persyaratanOnSubmit
                    )}
                  >
                    <Button
                      type='submit'
                      className='px-6 md:px-10 py-2 mt-5 md:mt-0 rounded-lg'
                    >
                      <Typography
                        variant='bt'
                        weight='bold'
                        font='poppins'
                        className='text-whites-100 text-[14px]'
                      >
                        Upload
                      </Typography>
                    </Button>
                  </form>
                </FormProvider>
              )}
            </div>
          </div>

          {/* Bukti Pembayaran */}
          <div className='mt-10 bg-primary-400 bg-opacity-10 md:space-y-6 h-fit md:w-[26rem] w-72 rounded-[10.5px] px-7 py-6 md:px-10 md:py-10'>
            <Typography
              as='h6'
              variant='h6'
              weight='bold'
              font='poppins'
              className='text-whites-1100 text-[16px] leading-[24px] mt-3 md:mb-2'
            >
              Bukti Pembayaran
            </Typography>
            <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
              {statusElement}
            </div>
            {paymentStatus === 'FAILED' ? (
              <FormProvider {...pembayaranMethods}>
                <form
                  onSubmit={pembayaranMethods.handleSubmit(pembayaranOnSubmit)}
                >
                  <Button
                    type='submit'
                    className='px-6 md:px-10 py-2 mt-5 md:mt-0 rounded-lg'
                  >
                    <Typography
                      variant='bt'
                      weight='bold'
                      font='poppins'
                      className='text-whites-100 text-[14px]'
                    >
                      Upload
                    </Typography>
                  </Button>
                </form>
              </FormProvider>
            ) : null}
          </div>
        </div>
        {/* {userData?.event === 'CTF' ? (
          <>
            <Typography
              as='h5'
              variant='h5'
              weight='bold'
              font='poppins'
              className='text-whites-1100 text-[24px] leading-[32px]'
            >
              CTF
            </Typography>
            <div className='mt-5 bg-primary-400 bg-opacity-10 md:space-y-6 h-fit md:w-[26rem] w-72 rounded-[10.5px] px-7 py-6 md:px-10 md:py-10'>
              <Typography
                as='h6'
                variant='h6'
                weight='bold'
                font='poppins'
                className='text-whites-1100 text-[16px] leading-[24px] mt-3 md:mb-2'
              >
                Upload File Write-Up
              </Typography>
              <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                <div className='flex flex-col'>
                  <Typography
                    as='p'
                    variant='p'
                    weight='bold'
                    font='poppins'
                    className='text-danger-600 text-[14px]'
                  >
                    Belum Ada File Terupload
                  </Typography>
                  <Typography
                    variant='c14'
                    font='poppins'
                    className='text-whites-1100 text-[12px] leading-[24px]'
                  >
                    File harus memiliki format .pdf
                  </Typography>
                </div>
                <FormProvider {...persyaratanMethods}>
                  <form>
                    <FileInput id='bukti_repost' />
                  </form>
                </FormProvider>
              </div>
            </div>
          </>
        ) : null} */}
      </div>
    </>
  );
}
