import * as React from 'react';

import Typography from '@/components/Typography';
import { FiUpload } from 'react-icons/fi';

export default function BerkasPendaftaran() {
  return (
    <>
      <div className='bg-transparent'>
        <div className='w-full h-full flex flex-col p-8 items-center justify-center md:items-start'>
          <div className='w-64 md:w-72'>
            <Typography
              weight='bold'
              font='poppins'
              className='text-whites-1100 md:text-[25px] text-[22px]'
            >
              Berkas Pendaftaran
            </Typography>
          </div>
          <div className='md:flex'>
            <div className='mt-5 bg-primary-400 bg-opacity-20 h-fit md:w-72 w-64 rounded-xl p-5'>
              <Typography
                weight='bold'
                font='poppins'
                className='text-whites-1100 md:text-[18px] text-[15px] mt-3'
              >
                Profil Tim
              </Typography>
              <div className='mt-5 bg-whites-100 h-fit rounded-xl p-2 flex justify-between items-center'>
                <div className='flex flex-col'>
                  <Typography
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 md:text-[16px] text-[13px]'
                  >
                    Nama Ketua
                  </Typography>
                  <Typography
                    font='poppins'
                    className='text-whites-1100 md:text-[14px] text-[11px]'
                  >
                    M. Abhinaya Al Faruqi
                  </Typography>
                </div>
                <FiUpload
                  color='#00B8FF'
                  className='bg-primary-600 bg-opacity-30 md:rounded-md md:p-1.5 md:h-8 md:w-8 h-6 w-6 rounded p-1'
                />
              </div>
              <div className='mt-5 bg-whites-100 h-fit rounded-xl p-2 flex justify-between items-center'>
                <div className='flex flex-col'>
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
                    Harwinda
                  </Typography>
                </div>
                <FiUpload
                  color='#00B8FF'
                  className='bg-primary-600 bg-opacity-30 md:rounded-md md:p-1.5 md:h-8 md:w-8 h-6 w-6 rounded p-1'
                />
              </div>
              <div className='mt-5 bg-whites-100 h-fit rounded-xl p-2 flex justify-between items-center'>
                <div className='flex-col'>
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
                    Dimas
                  </Typography>
                </div>
                <FiUpload
                  color='#00B8FF'
                  className='bg-primary-600 bg-opacity-30 md:rounded-md md:p-1.5 md:h-8 md:w-8 h-6 w-6 rounded p-1'
                />
              </div>
            </div>
            <div className='md:mx-10 mt-5 bg-primary-400 bg-opacity-20 h-fit md:w-72 w-64 rounded-xl p-5'>
              <Typography
                weight='bold'
                font='poppins'
                className='text-whites-1100 mt-3 text-[15px]'
              >
                Bukti Pembayaran
              </Typography>
              <div className='mt-5 bg-whites-100 h-fit rounded-xl p-2 flex justify-between items-center'>
                <div className='flex flex-col'>
                  <Typography
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 md:text-[16px] text-[13px]'
                  >
                    Nama File
                  </Typography>
                  <Typography
                    font='poppins'
                    className='text-whites-1100 md:text-[14px] text-[11px]'
                  >
                    Status File
                  </Typography>
                </div>
                <FiUpload
                  color='#00B8FF'
                  className='bg-primary-600 bg-opacity-30 md:rounded-md md:p-1.5 md:h-8 md:w-8 h-6 w-6 rounded p-1'
                />
              </div>
            </div>
          </div>
          <div className='w-64 md:w-72'>
            <Typography
              weight='bold'
              font='poppins'
              className='mt-8 text-whites-1100 md:text-[25px] text-[22px]'
            >
              CTF
            </Typography>
          </div>
          <div className='mt-5 bg-primary-400 bg-opacity-20 h-fit md:w-72 w-64 rounded-xl p-5'>
            <Typography
              weight='bold'
              font='poppins'
              className='text-whites-1100 mt-3 text-[15px]'
            >
              Upload File Write-Up
            </Typography>
            <div className='mt-5 bg-whites-100 h-fit rounded-xl p-2 flex justify-between items-center'>
              <div className='flex flex-col'>
                <Typography
                  weight='bold'
                  font='poppins'
                  className='text-whites-1100 md:text-[16px] text-[13px]'
                >
                  Nama file
                </Typography>
                <Typography
                  font='poppins'
                  className='text-whites-1100 md:text-[14px] text-[11px]'
                >
                  Status file
                </Typography>
              </div>
              <FiUpload
                color='#00B8FF'
                className='bg-primary-600 bg-opacity-30 md:rounded-md md:p-1.5 md:h-8 md:w-8 h-6 w-6 rounded p-1'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
