'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
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
import {
  TCheapest,
  TCity,
  TCostRequest,
  TCostResult,
  TMerchCatalogue,
  TMerchOrder,
  TProvince,
} from '@/types/entities/merch';

export default function OrderMerchandise() {
  const router = useRouter();
  const toastId = React.useRef<string | null>(null);
  const [isClient, setIsClient] = React.useState(false);
  const { merchCatalogue, clearMerchCatalogueStorage } = useMerchStore();
  const [totalHarga, setTotalHarga] = React.useState(0);
  const [totalHargaOngkir, setTotalHargaOngkir] = React.useState(0);
  const [kabupatenData, setKabupatenData] = React.useState<Array<TCity>>([]);
  const [selectedProvinsiId, setSelectedProvinsiId] = React.useState<
    null | string
  >(null);
  const [costData, setCostData] = React.useState<TCostResult>();
  const [cheapestCostDetails, setCheapestCostDetails] =
    React.useState<TCheapest>();
  const [isCourier, setIsCourier] = React.useState(false);

  //#region  //*=========== Setup Local Storage ===========

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

  React.useEffect(() => {
    const shippingCost = cheapestCostDetails ? cheapestCostDetails.value : 0;
    setTotalHargaOngkir(totalHarga + shippingCost);
  }, [totalHarga, cheapestCostDetails]);

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

  //#region  //*=========== Merch API ===========

  const methods = useForm<TMerchOrder>({
    defaultValues: {
      list_bank_id: 1,
      dp: false,
      merch_id: merchIdString,
    },
  });

  const isDp = methods.watch('dp');

  React.useEffect(() => {
    if (totalHarga > 0) {
      methods.setValue('harga_total', totalHarga);
    }
  }, [totalHarga, methods]);

  React.useEffect(() => {
    let deskripsi = merchCatalogue
      .map((merch) => {
        const sizeInfo = merch.size ? ` (Size: ${merch.size})` : '';
        return `${merch.nama_produk} (Quantity: ${
          merch.total
        })${sizeInfo} , Cost - Rp${merch.harga.toLocaleString('id-ID')}`;
      })
      .join('\n');

    if (cheapestCostDetails) {
      const courierInfo = `\n\nKurir - ${
        cheapestCostDetails.courier
      }, Service - ${
        cheapestCostDetails.description
      }, Cost - Rp${cheapestCostDetails.value.toLocaleString('id-ID')}`;
      deskripsi += courierInfo;
    }

    methods.setValue('deskripsi_order', deskripsi);
  }, [merchCatalogue, methods, cheapestCostDetails]);

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
    if (!isCourier) {
      showToast(
        'Please fill out and submit courier information first',
        DANGER_TOAST
      );
      return;
    }
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

  //#region  //*=========== Ongkir API ===========

  const kurirMethods = useForm<TCostRequest>({
    defaultValues: {
      origin: '444',
      weight: 1000,
    },
  });

  const { data: provinceData } = useQuery<Array<TProvince>>({
    queryKey: ['/ongkir/province'],
    staleTime: Infinity,
  });

  const { data: cityData } = useQuery<Array<TCity>>({
    queryKey: ['/ongkir/city'],
    staleTime: Infinity,
  });

  React.useEffect(() => {
    if (selectedProvinsiId) {
      const filteredCities = cityData?.filter(
        (city) => city.provinsi_id.toString() === selectedProvinsiId
      );
      setKabupatenData(filteredCities || []);
    }
  }, [selectedProvinsiId, cityData]);

  const postOngkir = async (data: TCostRequest | FormData) => {
    try {
      const res = await api.post('/ongkir/cost', data);
      setCostData(res.data);
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

  React.useEffect(() => {
    if (costData) {
      const courierResult = costData.rajaongkir.results.find(
        (result) => result.code === kurirMethods.getValues('courier')
      );

      if (!courierResult || courierResult.costs.length === 0) {
        showToast(
          'No shipping options available for the selected courier',
          DANGER_TOAST
        );
        setCheapestCostDetails(undefined);
        return;
      }

      let cheapest = courierResult.costs[0];
      courierResult.costs.forEach((cost) => {
        if (
          cost.cost &&
          cost.cost.length > 0 &&
          cost.cost[0].value < cheapest.cost[0].value
        ) {
          cheapest = cost;
        }
      });

      if (cheapest && cheapest.cost && cheapest.cost.length > 0) {
        setCheapestCostDetails({
          value: cheapest.cost[0].value,
          etd: cheapest.cost[0].etd,
          courier: courierResult.code,
          description: cheapest.description,
        });
        showToast(
          `Ongkir sebesar Rp${cheapest.cost[0].value.toLocaleString('id-ID')}`,
          SUCCESS_TOAST
        );
        setIsCourier(true);
      } else {
        showToast(
          'No shipping options available for the selected courier',
          DANGER_TOAST
        );
        setCheapestCostDetails(undefined);
        setIsCourier(false);
      }
    }
  }, [costData, kurirMethods]);

  const { mutate: ongkir, isLoading: ongkirIsLoading } = useMutation(
    postOngkir,
    {
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

  const kurirOnSubmit = async (body: TCostRequest) => {
    ongkir(body);
  };

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
            Order
          </Typography>
          <Typography
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
                isDp ? 'text-secondary-600' : 'text-whites-1100'
              )}
            >
              Rp{showTotalHarga(totalHargaOngkir, isDp)}
            </Typography>
          </div>
        </div>

        <FormProvider {...methods}>
          <form className='space-y-6'>
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
          </form>
        </FormProvider>

        <FormProvider {...kurirMethods}>
          <form
            onSubmit={kurirMethods.handleSubmit(kurirOnSubmit)}
            className='space-y-6'
          >
            <SelectInput
              id='test'
              label='Provinsi Tujuan'
              validation={{
                required: 'Provinsi cannot be empty',
              }}
              placeholder='Masukkan provinsi sekolah / institusi tujuan pengiriman'
              onChange={(e) => setSelectedProvinsiId(e.target.value)}
            >
              {provinceData?.map(({ id, provinsi }) => (
                <option key={id} value={id}>
                  {provinsi}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              id='destination'
              label='Kota / Kabupaten Tujuan'
              validation={{
                required: 'Kota / Kabupaten cannot be empty',
              }}
              placeholder='Masukkan kota / kabupaten tujuan pengiriman'
              onChange={(e) =>
                kurirMethods.setValue('destination', e.target.value)
              }
            >
              {kabupatenData?.map(({ id, type, kabupaten_kota }) => (
                <option key={id} value={id}>
                  {`${type} ${kabupaten_kota}`}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              id='courier'
              label='Kurir'
              validation={{
                required: 'Kurir cannot be empty',
              }}
              placeholder='Masukkan pilihan kurir'
            >
              <option value='jne'>JNE</option>
              <option value='pos'>POS</option>
              <option value='tiki'>TIKI</option>
            </SelectInput>
            <Button
              type='submit'
              variant='success'
              className={clsxm(
                'w-full drop-shadow-md',
                ongkirIsLoading ? 'bg-success-700' : ''
              )}
            >
              <Typography
                font='poppins'
                variant='bt'
                className='text-[11.86px] leading-[20.32px] text-whites-100'
                weight='bold'
              >
                {ongkirIsLoading ? 'Cek...' : 'Cek Ongkir'}
              </Typography>
            </Button>
          </form>
        </FormProvider>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(orderOnSubmit)}
            className='space-y-6'
          >
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
              </SelectInput>
              <div className='flex flex-col md:items-start items-center text-whites-1100'>
                <Image
                  src='/img/register/qris_ara.jpg'
                  alt='NMID : ID1023299225038'
                  width={264}
                  height={265}
                />
                <Typography
                  font='poppins'
                  variant='t'
                  weight='medium'
                  className='text-[16px] leading-[24px] text-whites-1100 mt-2'
                >
                  NMID : ID1023299225038
                </Typography>
                <Typography
                  font='poppins'
                  variant='h6'
                  weight='bold'
                  className='text-[20px] leading-[24px] text-whites-1100'
                >
                  ARA
                </Typography>
              </div>
              <Checkbox
                label='DP'
                name='dp'
                readOnly={totalHargaOngkir < 150000}
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
