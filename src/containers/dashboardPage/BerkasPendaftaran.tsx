// import { useMutation } from '@tanstack/react-query';
// import axios, { AxiosError } from 'axios';
// import { serialize } from 'object-to-formdata';
import * as React from 'react';
// import { useForm } from 'react-hook-form';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { FiUpload } from 'react-icons/fi';

import UnstyledLink from '@/components/links/UnstyledLink';
// import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
// import api from '@/lib/api';
// import { ApiError } from '@/types/api';
import { UserLogin } from '@/types/entities/login';
// import { TReuploadFoto } from '@/types/entities/reupload';
import WaitingVerifLogo from '~/svg/dashboardpage/user/WaitingVerifLogo';

interface BerkasPendaftaranProps {
  userData?: UserLogin;
}
export default function BerkasPendaftaran({
  userData,
}: BerkasPendaftaranProps) {
  //#region  //*=========== Reupload Foto API & Form ===========

  // const methods = useForm<TReuploadFoto>();

  // const patchReuploadFoto = async (data: TReuploadFoto | FormData) => {
  //   try {
  //     await api.patch('/ctf/re-upload-foto', data, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       const serverError = error as AxiosError<ApiError>;
  //       if (serverError && serverError.response) {
  //         throw new Error(serverError.response.data.message);
  //       }
  //     }
  //     throw error;
  //   }
  // };

  // const { mutate: reuploadFoto } = useMutation(patchReuploadFoto, {
  //   onSuccess: () => {
  //     showToast('Profile updated successfully', SUCCESS_TOAST);
  //   },
  // });

  // const fotoOnSubmit = (data: TReuploadFoto) => {
  //   reuploadFoto(serialize(data));
  // };

  function parseFilename(filename: string) {
    const parts = filename.split('_');
    parts.shift();
    return parts.join('_');
  }

  const event = userData?.event?.toLocaleLowerCase();

  const paymentStatus = userData?.pembayaran?.status_pembayaran;
  let statusElement;
  switch (paymentStatus) {
    case 'AWAITING VERIFICATION':
      statusElement = (
        <UnstyledLink
          href={`https://api.ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
          className='flex items-center'
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
              href={`https://api.ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
            >
              <Typography
                font='poppins'
                className='text-whites-1100 md:text-[14px] text-[11px]'
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
          href={`https://api.ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
          className='flex items-center'
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
              className='text-whites-1100 md:text-[14px] text-[11px]'
            >
              {userData?.pembayaran?.bukti_pembayaran
                ? parseFilename(userData.pembayaran.bukti_pembayaran)
                : 'Nama File'}
            </Typography>
          </div>
          <BiSolidCheckCircle className=' text-success-600 w-11 md:w-12 h-11 md:h-12' />{' '}
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
          <FiUpload
            color='#00B8FF'
            className='bg-primary-600 bg-opacity-20 md:rounded-md md:p-1.5 md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded p-1'
          />
        </>
      );
      break;
    default:
      statusElement = (
        <UnstyledLink
          href={`https://api.ara-its.id/uploads/pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
          className='flex items-center'
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
              className='text-whites-1100 md:text-[14px] text-[11px]'
            >
              {userData?.pembayaran?.bukti_pembayaran}
            </Typography>
          </div>
          <WaitingVerifLogo />
        </UnstyledLink>
      );
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
        <div className='w-full h-fit md:flex mt-1 mb-5 justify-center items-center md:justify-start md:items-start first-letter:mx-auto'>
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
                href={`https://api.ara-its.id/uploads/${event}/${userData?.ketua?.ktp_ketua}`}
                className='flex flex-col'
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
                  className='text-whites-1100 text-[12px] leading-[24px]'
                >
                  {userData ? `${userData.ketua.nama_ketua}` : 'Nama Ketua'}
                </Typography>
              </UnstyledLink>
              {paymentStatus === 'SUCCESS' ? (
                <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
              ) : (
                <FiUpload
                  color='#00B8FF'
                  className='bg-primary-600 bg-opacity-20 md:rounded-md md:p-1.5 md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded p-1'
                />
              )}
            </div>
            {userData?.anggota1.nama_anggota1 ? (
              <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                <UnstyledLink
                  href={`https://api.ara-its.id/uploads/${event}/${userData?.anggota1?.ktp_anggota1}`}
                  className='flex flex-col'
                >
                  <Typography
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 md:text-[16px] text-[13px]'
                  >
                    Nama Anggota
                  </Typography>
                  <Typography
                    font='poppins'
                    className='text-whites-1100 md:text-[14px] text-[11px]'
                  >
                    {userData
                      ? `${userData.anggota1.nama_anggota1}`
                      : 'Nama Ketua'}
                  </Typography>
                </UnstyledLink>
                {paymentStatus === 'SUCCESS' ? (
                  <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                ) : (
                  <FiUpload
                    color='#00B8FF'
                    className='bg-primary-600 bg-opacity-20 md:rounded-md md:p-1.5 md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded p-1'
                  />
                )}
              </div>
            ) : null}
            {userData?.anggota2.nama_anggota2 ? (
              <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
                <UnstyledLink
                  href={`https://api.ara-its.id/uploads/${event}/${userData?.anggota2?.ktp_anggota2}`}
                  className='flex flex-col'
                >
                  <Typography
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 md:text-[16px] text-[13px]'
                  >
                    Nama Anggota
                  </Typography>
                  <Typography
                    font='poppins'
                    className='text-whites-1100 md:text-[14px] text-[11px]'
                  >
                    {userData
                      ? `${userData.anggota2?.nama_anggota2}`
                      : 'Nama Ketua'}
                  </Typography>
                </UnstyledLink>
                {paymentStatus === 'SUCCESS' ? (
                  <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
                ) : (
                  <FiUpload
                    color='#00B8FF'
                    className='bg-primary-600 bg-opacity-20 md:rounded-md md:p-1.5 md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded p-1'
                  />
                )}
              </div>
            ) : null}
          </div>
          <div className='mt-5 md:mx-10 bg-primary-400 bg-opacity-10 md:space-y-6 h-fit md:w-[26rem] w-72 rounded-[10.5px] px-7 py-6 md:px-10 md:py-10'>
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
          </div>
        </div>
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
                className='text-whites-1100 text-[14px]'
              >
                Nama File
              </Typography>
              <Typography
                variant='c14'
                font='poppins'
                className='text-whites-1100 text-[12px] leading-[24px]'
              >
                Status
              </Typography>
            </div>
            <FiUpload
              color='#00B8FF'
              className='bg-primary-600 bg-opacity-20 md:rounded-md md:p-1.5 md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded p-1'
            />
          </div>
        </div>
      </div>
    </>
  );
}
