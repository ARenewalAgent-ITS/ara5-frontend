import React from 'react';
import { Accept } from 'react-dropzone';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { BiSolidCheckCircle } from 'react-icons/bi';

import { useBerkasUtils } from '@/app/dashboard/user/__hooks/BerkasPendaftaran.hooks';
import FileInput from '@/components/form/FileInput';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { writeUp } from '@/types/entities/login';
import WaitingVerifLogo from '~/svg/dashboardpage/user/WaitingVerifLogo';

interface BerkasFormProps<T extends FieldValues> {
  title?: string;
  href?: string;
  label?: string | undefined;
  paymentStatus?: string | undefined;
  id: string;
  accept?: Accept;
  maxFileSize?: number;
  methods: UseFormReturn<T>;
  isBuktiPembayaran?: boolean;
  buktiPembayaranFile?: string;
  isWriteUp?: boolean;
  write_up_ctf?: writeUp | null;
}

export default function BerkasForm<T extends FieldValues>({
  title,
  href,
  label,
  paymentStatus,
  id,
  isBuktiPembayaran = false,
  isWriteUp = false,
  write_up_ctf,
  accept = { 'image/*': ['.jpg', '.jpeg', '.png'] },
  maxFileSize = 1000000,
  methods,
}: BerkasFormProps<T>) {
  const { parseFilename, formatDates } = useBerkasUtils();
  const [showInput, setShowInput] = React.useState(false);

  const BuktiPembayaranContent = () => (
    <>
      <Typography
        as='p'
        variant='p'
        weight='bold'
        font='poppins'
        className={clsxm(
          'text-[14px]',
          paymentStatus === 'SUCCESS'
            ? 'text-success-600'
            : paymentStatus === 'AWAITING VERIFICATION'
            ? 'text-primary-600'
            : 'text-danger-600'
        )}
      >
        {paymentStatus === 'SUCCESS'
          ? 'PEMBAYARAN SUKSES'
          : paymentStatus === 'AWAITING VERIFICATION'
          ? 'MENUNGGU VERIFIKASI'
          : 'PEMBAYARAN GAGAL'}
      </Typography>
      <Typography
        variant='c14'
        font='poppins'
        className='text-whites-1100 w-[170px] xl:w-[220px] line-clamp-1 overflow-ellipsis text-[12px] leading-[24px] group-hover:underline'
      >
        {paymentStatus === 'SUCCESS' ||
        paymentStatus === 'AWAITING VERIFICATION'
          ? label
          : 'Coba upload ulang file nya ya!'}
      </Typography>
    </>
  );

  return (
    <div className='mt-5 bg-whites-100 h-fit rounded-[11.2px] md:rounded-2xl py-2 px-3 md:py-3 md:px-5 flex justify-between items-center'>
      {isBuktiPembayaran ? (
        <>
          {paymentStatus !== 'FAILED' ? (
            <UnstyledLink
              href={`https://ara-its.id/uploads/${href}`}
              className='flex flex-col group'
            >
              <BuktiPembayaranContent />
            </UnstyledLink>
          ) : (
            <div className='flex flex-col group'>
              <BuktiPembayaranContent />
            </div>
          )}
          {paymentStatus === 'SUCCESS' ? (
            <BiSolidCheckCircle className=' text-success-600 w-11 md:w-12 h-11 md:h-12' />
          ) : paymentStatus === 'AWAITING VERIFICATION' ? (
            <WaitingVerifLogo />
          ) : (
            <FormProvider {...methods}>
              <form>
                <FileInput id={id} />
              </form>
            </FormProvider>
          )}
        </>
      ) : isWriteUp ? (
        <>
          <div className='flex flex-col'>
            <Typography
              as='p'
              variant='p'
              weight='bold'
              font='poppins'
              className={clsxm(
                'text-[14px] ',
                write_up_ctf === null
                  ? 'text-danger-600'
                  : 'text-success-600 xl:w-[220px] w-[170px] line-clamp-1 overflow-ellipsis'
              )}
            >
              {write_up_ctf === null
                ? 'Belum Ada File Terupload'
                : parseFilename(write_up_ctf?.write_up)}
            </Typography>
            <Typography
              variant='c14'
              font='poppins'
              className='text-whites-1100 text-[12px] leading-[24px] w-[190px] md:w-[230px] line-clamp-1 overflow-ellipsis'
            >
              {write_up_ctf === null
                ? 'File harus memiliki format .pdf'
                : `Diupload pada ${formatDates(
                    write_up_ctf?.updatedAt ?? new Date()
                  )}`}
            </Typography>
          </div>
          {write_up_ctf?.write_up ? (
            <div
              onMouseEnter={() => setShowInput(true)}
              onMouseLeave={() => setShowInput(false)}
              className='relative'
            >
              <BiSolidCheckCircle
                className={clsxm(
                  'text-success-600 w-7 md:w-9 h-7 md:h-9 transition-opacity duration-500',
                  showInput ? 'opacity-0' : 'opacity-100'
                )}
              />
              <FormProvider {...methods}>
                <form
                  className={clsxm(
                    'absolute inset-0 transition-opacity duration-500',
                    showInput ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <FileInput
                    id={id}
                    accept={accept}
                    maxFileSize={maxFileSize}
                  />
                </form>
              </FormProvider>
            </div>
          ) : (
            <FormProvider {...methods}>
              <form>
                <FileInput id={id} accept={accept} maxFileSize={maxFileSize} />
              </form>
            </FormProvider>
          )}
        </>
      ) : (
        <>
          <UnstyledLink
            href={`https://ara-its.id/uploads/${href}`}
            className='flex flex-col group'
          >
            <Typography
              as='p'
              variant='p'
              weight='bold'
              font='poppins'
              className='text-whites-1100 text-[14px]'
            >
              {title}
            </Typography>
            <Typography
              variant='c14'
              font='poppins'
              className='text-whites-1100 w-[170px] xl:w-[220px] line-clamp-1 overflow-ellipsis text-[12px] leading-[24px] group-hover:underline'
            >
              {label}
            </Typography>
          </UnstyledLink>
          {paymentStatus === 'SUCCESS' ? (
            <BiSolidCheckCircle className=' text-success-600 w-7 md:w-9 h-7 md:h-9' />
          ) : (
            <FormProvider {...methods}>
              <form>
                <FileInput id={id} />
              </form>
            </FormProvider>
          )}
        </>
      )}
    </div>
  );
}
