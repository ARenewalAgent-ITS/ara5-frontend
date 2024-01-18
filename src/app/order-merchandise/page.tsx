'use client';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { serialize } from 'object-to-formdata';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Checkbox from '@/components/Checkbox';
import DropzoneInput from '@/components/form/DropzoneInput';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import TextArea from '@/components/form/TextArea';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import useMerchStore from '@/store/useMerchStore';
import { ApiError, CustomAxiosError } from '@/types/api';
import { TMerchCatalogue, TMerchOrder } from '@/types/entities/merch';

type BankDetails = {
  name: string;
  accountNumber: string;
  imageName: string;
};

export default function OrderMerchandise() {
  const router = useRouter();
  const toastId = React.useRef<string | null>(null);
  const [isClient, setIsClient] = React.useState(false);
  const { merchCatalogue, clearMerchCatalogueStorage } = useMerchStore();
  const [totalHarga, setTotalHarga] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem('merchCatalogue', JSON.stringify(merchCatalogue));
  }, [merchCatalogue]);

  React.useEffect(() => {
    const storedMerchCatalogue = localStorage.getItem('merchCatalogue');
    if (storedMerchCatalogue) {
      useMerchStore.setState({
        merchCatalogue: JSON.parse(storedMerchCatalogue),
      });
    }
  }, []);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isClient) {
      const total = merchCatalogue.reduce((total, merch) => {
        const additionalCost =
          merch.size === 'XXL' || merch.size === 'XXXL' ? 10000 : 0;
        return total + (merch.harga + additionalCost) * merch.total;
      }, 0);

      setTotalHarga(total);
    }
  }, [isClient, merchCatalogue]);

  function showTotalHarga(harga: number, isDp: boolean) {
    return harga > 0
      ? isDp
        ? ((harga * 1) / 2).toLocaleString('id-ID')
        : harga.toLocaleString('id-ID')
      : '....';
  }

  const merchId: number[] = merchCatalogue.reduce(
    (acc: number[], merch: TMerchCatalogue) => {
      const ids: number[] = new Array(merch.total).fill(merch.id);
      return acc.concat(ids);
    },
    []
  );

  const merchIdString = merchId.join(',');

  const methods = useForm<TMerchOrder>({
    defaultValues: {
      list_bank_id: 1,
      dp: false,
      merch_id: merchIdString,
    },
  });
  const metode_pembayaran = methods.watch('list_bank_id');
  const isDp = methods.watch('dp');
  React.useEffect(() => {
    if (totalHarga > 0) {
      methods.setValue('harga_total', totalHarga);
    }
  }, [totalHarga, methods]);
  React.useEffect(() => {
    const deskripsi = merchCatalogue
      .map((merch) => {
        const sizeInfo = merch.size ? ` (Size: ${merch.size})` : '';
        return `${merch.nama_produk} (Quantity: ${merch.total})${sizeInfo}`;
      })
      .join('\n');

    methods.setValue('deskripsi_order', deskripsi);
  }, [merchCatalogue, methods]);
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

  const postOrder = async (data: TMerchOrder | FormData) => {
    try {
      await api.post('/merch/order', data, {
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

  const { mutate: order, isLoading } = useMutation(postOrder, {
    onSuccess: () => {
      showToast('You have successfully order', SUCCESS_TOAST);
      clearMerchCatalogueStorage();
      router.push('/');
    },
    onError: (error: CustomAxiosError) => {
      if (error.response) {
        showToast(error.response.data.message, DANGER_TOAST);
      } else {
        showToast('An unknown error occurred', DANGER_TOAST);
      }
    },
  });

  const orderOnSubmit = (data: TMerchOrder) => {
    const body = {
      ...data,
      pembayaran: data.pembayaran?.[0],
    };
    order(serialize(body));
  };

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

  return (
    <div className='lg:px-4 xl:px-12 2xl:px-14'>
      <div className='flex flex-col justify-center gap-6 px-12 py-7 lg:px-0'>
        <div className='flex flex-col mb-5 sm:flex-row sm:gap-1 sm:mx-auto lg:flex-col lg:mx-0'>
          <Typography
            as={'h3'}
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block text-whites-1100'
          >
            Order
          </Typography>
          <Typography
            as={'h3'}
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] block text-whites-1100'
          >
            Merchandise
          </Typography>
        </div>
        <div className='w-full flex flex-col justify-start'>
          <Typography
            as={'p'}
            variant='t'
            font='poppins'
            weight='medium'
            className='text-[18px] leading-[24px] text-whites-1100'
          >
            Total Tagihan
          </Typography>
          <div className='flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between'>
            <Typography
              as={'h4'}
              variant='h4'
              font='poppins'
              weight='bold'
              className={clsxm(
                'text-[48px] leading-[64px]',
                isDp ? 'text-secondary-600' : 'text-whites-1100'
              )}
            >
              Rp{showTotalHarga(totalHarga, isDp)}
            </Typography>
          </div>
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(orderOnSubmit)}
            className='space-y-6'
          >
            <Input
              id='no_telp'
              label='Nomor Telepon'
              placeholder='Masukkan nomor telepon anda'
              validation={{
                required: 'Nomor telepon cannot be empty',
                pattern: {
                  value: /^\d{10,15}$/,
                  message: 'Enter a valid mobile number (10-15 digit number)',
                },
              }}
            />
            <TextArea
              id='deskripsi_order'
              label='Deskripsi Order'
              placeholder='Masukkan deskripsi order'
              validation={{
                required: 'Deskripsi order cannot be empty',
              }}
            />
            <div className='space-y-3'>
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
                  as={'p'}
                  font='poppins'
                  variant='t'
                  weight='medium'
                  className='text-[16px] leading-[24px] text-whites-1100'
                >
                  {bankDetails?.accountNumber || 'NMID : ID1023269716057'}
                </Typography>
                <Typography
                  as={'h6'}
                  font='poppins'
                  variant='h6'
                  weight='bold'
                  className='text-[20px] leading-[24px] text-whites-1100'
                >
                  {bankDetails?.name || 'fathikaaf'}
                </Typography>
              </div>
              <Checkbox
                label='DP'
                name='dp'
                readOnly={totalHarga < 150000}
                hideError={true}
                readOnlyText='Dp hanya bisa dilakukan dengan total pembelian 150.000 keatas'
              />
              <DropzoneInput
                id='pembayaran'
                label='Upload Bukti Pembayaran'
                className='bg-whites-100'
                validation={{
                  required: 'Bukti Pembayaran cannot be empty',
                }}
                helperText='Please ensure the file size does not exceed 1 MB.'
              />
            </div>
            <Button
              type='submit'
              size='lg'
              variant='success'
              className='w-full drop-shadow-md py-[6px] md:py-3'
            >
              <Typography
                as={'p'}
                font='poppins'
                variant='bt'
                className='text-[11.86px] leading-[20.32px] text-whites-100'
                weight='bold'
              >
                Submit
              </Typography>
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
