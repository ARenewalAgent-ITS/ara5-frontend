import * as React from 'react';

import BerkasForm from '@/app/dashboard/user/__components/BerkasForm';
import BerkasCard from '@/app/dashboard/user/__containers/BerkasCard';
import BerkasSubmit from '@/app/dashboard/user/__containers/BerkasSubmit';
import {
  useBerkasApi,
  useBerkasForm,
  useBerkasUtils,
} from '@/app/dashboard/user/__hooks/BerkasPendaftaran.hooks';
import Typography from '@/components/Typography';
import { UserLogin } from '@/types/entities/login';
import {
  TReuploadFoto,
  TReuploadPembayaran,
  TReuploadPersyaratan,
  TWriteup,
} from '@/types/entities/reupload';

interface BerkasPendaftaranProps {
  userData?: UserLogin;
  refetchData: () => void;
}

export default function BerkasPendaftaran({
  userData,
  refetchData,
}: BerkasPendaftaranProps) {
  const { parseFilename, getListBank } = useBerkasUtils();

  const listBank = getListBank(userData?.pembayaran.bank);
  const event = userData?.event?.toLocaleLowerCase();
  const pembayaranId = userData?.pembayaran_id;
  const ctfId = userData?.write_up_ctf?.id;
  const writeUp = userData?.write_up_ctf;
  const paymentStatus = userData?.pembayaran?.status_pembayaran;

  const {
    fotoMethods,
    resetFotoForm,
    pembayaranMethods,
    resetPembayaranForm,
    persyaratanMethods,
    resetPersyaratanForm,
    writeupMethods,
    resetWriteUp,
  } = useBerkasForm(listBank);

  const {
    fotoOnSubmit,
    pembayaranOnSubmit,
    persyaratanOnSubmit,
    writeupOnSubmit,
  } = useBerkasApi(
    event,
    pembayaranId,
    ctfId,
    refetchData,
    writeUp,
    resetFotoForm,
    resetPembayaranForm,
    resetPersyaratanForm,
    resetWriteUp
  );

  return (
    <>
      <div className='bg-transparent overflow-hidden'>
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
          <div className='flex flex-col md:flex-row gap-5'>
            {/* Profil Tim */}
            <BerkasCard title='Profil Tim'>
              <BerkasForm
                title='Nama Ketua'
                href={`${event}/${userData?.ketua?.ktp_ketua}`}
                label={userData?.ketua?.nama_ketua}
                paymentStatus={paymentStatus}
                id='ktp_ketua'
                methods={fotoMethods}
              />
              {userData?.anggota1.nama_anggota1 && (
                <BerkasForm
                  title='Nama Anggota 1'
                  href={`${event}/${userData?.anggota1?.ktp_anggota1}`}
                  label={userData?.anggota1?.nama_anggota1}
                  paymentStatus={paymentStatus}
                  id='ktp_anggota_1'
                  methods={fotoMethods}
                />
              )}
              {userData?.anggota2.nama_anggota2 && (
                <BerkasForm
                  title='Nama Anggota 2'
                  href={`${event}/${userData?.anggota2?.ktp_anggota2}`}
                  label={userData?.anggota2?.nama_anggota2}
                  paymentStatus={paymentStatus}
                  id='ktp_anggota_2'
                  methods={fotoMethods}
                />
              )}
              {paymentStatus !== 'SUCCESS' && (
                <BerkasSubmit<TReuploadFoto>
                  methods={fotoMethods}
                  onSubmit={fotoOnSubmit}
                />
              )}
            </BerkasCard>
            <BerkasCard title='Bukti Persyaratan'>
              <BerkasForm
                title='Bukti Follow'
                href={`persyaratan/${userData?.bukti_follow}`}
                label={`${parseFilename(userData?.bukti_follow)}`}
                paymentStatus={paymentStatus}
                id='bukti_follow'
                methods={persyaratanMethods}
              />
              <BerkasForm
                title='Bukti Repost'
                href={`persyaratan/${userData?.bukti_repost}`}
                label={`${parseFilename(userData?.bukti_repost)}`}
                paymentStatus={paymentStatus}
                id='bukti_repost'
                methods={persyaratanMethods}
              />
              {paymentStatus !== 'SUCCESS' && (
                <BerkasSubmit<TReuploadPersyaratan>
                  methods={persyaratanMethods}
                  onSubmit={persyaratanOnSubmit}
                />
              )}
            </BerkasCard>
          </div>
          <BerkasCard title='Bukti Pembayaran'>
            <BerkasForm
              href={`pembayaran/${userData?.pembayaran?.bukti_pembayaran}`}
              label={`${parseFilename(userData?.pembayaran?.bukti_pembayaran)}`}
              paymentStatus={paymentStatus}
              id='bukti_pembayaran'
              methods={pembayaranMethods}
              isBuktiPembayaran
            />
            {paymentStatus === 'FAILED' && (
              <BerkasSubmit<TReuploadPembayaran>
                methods={pembayaranMethods}
                onSubmit={pembayaranOnSubmit}
              />
            )}
          </BerkasCard>
        </div>
        {event === 'ctf' && (
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
            <BerkasCard title='Upload File Write-Up'>
              <BerkasForm
                write_up_ctf={userData?.write_up_ctf}
                id='write_up'
                accept={{ 'application/pdf': ['.pdf'] }}
                maxFileSize={25000000}
                methods={writeupMethods}
                isWriteUp
              />
              <BerkasSubmit<TWriteup>
                methods={writeupMethods}
                onSubmit={writeupOnSubmit}
              />
            </BerkasCard>
          </>
        )}
      </div>
    </>
  );
}
