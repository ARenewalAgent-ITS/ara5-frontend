import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import { GoPlusCircle } from 'react-icons/go';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { RxMinusCircled } from 'react-icons/rx';

import Button from '@/components/buttons/Button';
import { DANGER_TOAST, showToast } from '@/components/Toast';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import useMerchStore from '@/store/useMerchStore';

export default function CheckoutDialog() {
  const router = useRouter();
  const {
    modalIsOpen,
    merchCatalogue,
    setModalClose,
    removeMerch,
    addOneMerch,
    minusOneMerch,
  } = useMerchStore();

  const totalHarga = merchCatalogue.reduce((total, merch) => {
    const additionalCost =
      merch.size === 'XXL' || merch.size === 'XXXL' ? 10000 : 0;
    return total + (merch.harga + additionalCost) * merch.total;
  }, 0);

  const totalPembelanjaan = merchCatalogue.reduce((total, merch) => {
    return total + merch.total;
  }, 0);

  return (
    <>
      <Transition appear show={modalIsOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[999]' onClose={setModalClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-whites-100/5 backdrop-blur-sm' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <div className='fixed inset-y-0 right-0 pl-0 md:pl-10 max-w-full flex sm:pl-16'>
                  <Dialog.Panel className='w-screen sm:max-w-3xl'>
                    <div className='h-full flex flex-col py-6 bg-white shadow-2xl shadow-whites-1100 overflow-y-scroll'>
                      <div className='w-full flex justify-between pl-7 pr-5 pb-4'>
                        <div className='flex items-center gap-9'>
                          <div className='relative flex items-start'>
                            <HiOutlineShoppingCart className='w-7 h-7 text-whites-1100' />
                            <Typography
                              variant='c14'
                              font='poppins'
                              weight='bold'
                              className='absolute -right-[6px] -top-[14px]'
                            >
                              {totalPembelanjaan}
                            </Typography>
                          </div>
                          <Typography
                            as='h6'
                            variant='h6'
                            weight='bold'
                            font='poppins'
                            className='text-[20px] leading-[24px]'
                          >
                            Keranjang Belanja
                          </Typography>
                        </div>
                        <IoCloseOutline
                          onClick={setModalClose}
                          className=' w-9 h-9 cursor-pointer'
                        />
                      </div>
                      {merchCatalogue.map((merch, index) => (
                        <div
                          key={index}
                          className={clsxm(
                            'flex w-full justify-between px-11 py-10 bg-primary-100 border-primary-400',
                            index === merchCatalogue.length - 1
                              ? 'border-y-2'
                              : 'border-t-2'
                          )}
                        >
                          <div className='flex gap-7 items-center'>
                            <div className='w-40 h-40 bg-whites-100 flex justify-center items-center'>
                              {merch.kategori_produk === 'PAKET' ? (
                                <Image
                                  src={`https://ara-its.id/uploads/merch/${merch.image_path}`}
                                  alt={merch.nama_produk}
                                  layout='responsive'
                                  width={130}
                                  height={130}
                                  objectFit='contain'
                                  className='object-contain scale-[63%]'
                                />
                              ) : merch.kategori_produk === 'PIN' ? (
                                <Image
                                  src={`https://ara-its.id/uploads/merch/${merch.image_path}`}
                                  alt={merch.nama_produk}
                                  layout='responsive'
                                  width={120}
                                  height={120}
                                  objectFit='contain'
                                  className='object-contain scale-[58%]'
                                />
                              ) : merch.kategori_produk === 'LANYARD' ? (
                                <Image
                                  src={`https://ara-its.id/uploads/merch/${merch.image_path}`}
                                  alt={merch.nama_produk}
                                  layout='responsive'
                                  width={120}
                                  height={120}
                                  objectFit='contain'
                                  className='object-contain scale-[75%]'
                                />
                              ) : merch.kategori_produk === 'TOPI' ? (
                                <Image
                                  src={`https://ara-its.id/uploads/merch/${merch.image_path}`}
                                  alt={merch.nama_produk}
                                  layout='responsive'
                                  width={120}
                                  height={120}
                                  objectFit='contain'
                                  className='object-contain scale-[60%]'
                                />
                              ) : merch.kategori_produk === 'KAOS' ? (
                                <Image
                                  src={`https://ara-its.id/uploads/merch/${merch.image_path}`}
                                  alt={merch.nama_produk}
                                  layout='responsive'
                                  width={120}
                                  height={120}
                                  objectFit='contain'
                                  className='object-contain scale-[80%]'
                                />
                              ) : (
                                <Image
                                  src={`https://ara-its.id/uploads/merch/${merch.image_path}`}
                                  alt={merch.nama_produk}
                                  layout='responsive'
                                  width={120}
                                  height={120}
                                  objectFit='contain'
                                  className='object-contain scale-[43%]'
                                />
                              )}
                            </div>
                            <div className='flex flex-col'>
                              <Typography
                                variant='h5'
                                font='poppins'
                                weight='bold'
                                className='text-[20px] leading-[24px]'
                              >
                                {merch.nama_produk}
                              </Typography>
                              {merch.size && (
                                <Typography
                                  variant='t'
                                  font='poppins'
                                  weight='bold'
                                  className='text-[20px] leading-[24px]'
                                >
                                  ({merch.size})
                                </Typography>
                              )}
                              <Typography
                                font='poppins'
                                weight='bold'
                                className='block sm:hidden text-primary-700 mt-1 text-[18px] leading-[24px]'
                              >
                                Rp
                                {(
                                  (merch.harga +
                                    (merch.size === 'XXL' ||
                                    merch.size === 'XXXL'
                                      ? 10000
                                      : 0)) *
                                  merch.total
                                ).toLocaleString('id-ID')}
                              </Typography>
                              <div className='flex items-center gap-5 mt-2 mb-5 md:mb-7'>
                                <RxMinusCircled
                                  onClick={() =>
                                    minusOneMerch(merch.id, merch.size)
                                  }
                                  className='text-whites-1100 w-7 h-7 cursor-pointer'
                                />
                                <Typography
                                  variant='h6'
                                  weight='bold'
                                  font='poppins'
                                  className='text-[18px] leading-[24px]'
                                >
                                  {merch.total}
                                </Typography>
                                <GoPlusCircle
                                  onClick={() =>
                                    addOneMerch(merch.id, merch.size)
                                  }
                                  className='text-whites-1100 w-7 h-7 cursor-pointer'
                                />
                              </div>
                              <Button
                                onClick={() =>
                                  removeMerch(merch.id, merch.size)
                                }
                                variant='danger'
                                className='w-fit px-3 py-2'
                              >
                                <Typography
                                  variant='c14'
                                  weight='bold'
                                  font='poppins'
                                  className='text-whites-100'
                                >
                                  Remove
                                </Typography>
                              </Button>
                            </div>
                          </div>
                          <Typography
                            variant='h6'
                            font='poppins'
                            weight='bold'
                            className='hidden sm:block text-primary-700 mt-2'
                          >
                            Rp
                            {(
                              (merch.harga +
                                (merch.size === 'XXL' || merch.size === 'XXXL'
                                  ? 10000
                                  : 0)) *
                              merch.total
                            ).toLocaleString('id-ID')}
                          </Typography>
                        </div>
                      ))}
                      <div className='flex w-full bg-primary-200 border-b-2 border-primary-400 py-5 justify-between items-center px-9'>
                        <Typography
                          variant='h5'
                          font='poppins'
                          weight='bold'
                          className='text-[24px] leading-[32px]'
                        >
                          Total
                        </Typography>
                        <Typography
                          variant='h5'
                          font='poppins'
                          weight='bold'
                          className='text-primary-800 text-[24px] leading-[32px]'
                        >
                          {totalHarga
                            ? `Rp${totalHarga.toLocaleString('id-ID')}`
                            : 0}
                        </Typography>
                      </div>
                      <div className='mt-10 px-10'>
                        <Button
                          onClick={() => {
                            if (merchCatalogue.length !== 0) {
                              router.push('/order-merchandise');
                            } else {
                              showToast(
                                'Keranjang belanja tidak boleh kosong untuk checkout!',
                                DANGER_TOAST
                              );
                            }
                          }}
                          className='w-full'
                          size='lg'
                          variant='success'
                        >
                          <Typography
                            variant='btn'
                            font='poppins'
                            weight='bold'
                            className='text-whites-100'
                          >
                            Checkout
                          </Typography>
                        </Button>
                      </div>
                      <div className='h-fit w-fit mt-10 mx-10 relative mb-10'>
                        <div className='z-20 relative h-fit px-10 py-7 gap-y-3 flex rounded-xl flex-col items-center bg-primary-900'>
                          <Typography
                            font='baloo'
                            variant='h6'
                            weight='bold'
                            className='text-[24px] leading-[32px] text-[#FFF1E3]'
                          >
                            Perhatian!
                          </Typography>
                          <div className='flex flex-col gap-y-1'>
                            <Typography
                              font='baloo'
                              variant='c14'
                              weight='bold'
                              className='text-[14px] leading-[24px] text-[#FFF1E3]'
                            >
                              Khusus untuk pembeli yang memilih bundle reguler
                              atau bundle kolektif yang yang memiliki salah satu
                              item dibawah ini:
                            </Typography>
                            <Typography
                              font='baloo'
                              variant='c14'
                              weight='bold'
                              className='text-[14px] leading-[24px] ml-2 text-[#FFF1E3]'
                            >
                              - Kaos putih: SeaBreeze Pawrade Kaos <br /> - Kaos
                              hitam: Chroma Quest
                            </Typography>
                            <Typography
                              font='baloo'
                              variant='c14'
                              weight='bold'
                              className='text-[14px] leading-[24px] text-[#FFF1E3]'
                            >
                              dikenakan biaya tambahan Rp10.000 di luar nominal
                              yang tertera di atas, untuk setiap item yang
                              diinginkan memiliki ukuran di atas XL.
                            </Typography>
                          </div>
                        </div>
                        <div className='z-0 absolute -right-2 -bottom-2 w-full h-full flex rounded-xl flex-col items-center bg-black-900/20' />
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
