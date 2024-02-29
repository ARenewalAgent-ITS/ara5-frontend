import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { IoIosClose } from 'react-icons/io';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import useMerchStore from '@/store/useMerchStore';
import { TMerchCatalogue } from '@/types/entities/merch';

interface MerchModalProps {
  isOpen: boolean;
  setModalClose: () => void;
  merchData: TMerchCatalogue;
}

const sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

export default function MerchModal({
  isOpen,
  setModalClose,
  merchData,
}: MerchModalProps) {
  const [activeDropdownId, setActiveDropdownId] = React.useState<string | null>(
    null
  );
  const { insertMerch } = useMerchStore();

  const handleDropdownClick = (id: string) => {
    if (activeDropdownId === id) {
      setActiveDropdownId(null);
    } else {
      setActiveDropdownId(id);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment} key={merchData?.id}>
      <Dialog as='div' className='relative z-[102]' onClose={setModalClose}>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='rounded-2xl overflow-hidden border-whites-1100 border-2 bg-whites-100 border-solid transition-all relative'>
                <div key={merchData?.id} className='lg:flex'>
                  <div className='relative lg:w-[400px] lg:h-[400px] md:w-[388px] md:h-[388px] w-[288px] h-[288px] overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-whites-1100 bg-primary-200 bg-opacity-25'>
                    <div className='flex justify-center items-center h-full'>
                      <Image
                        src={`https://ara-its.id/uploads/merch/${merchData?.image_path}`}
                        width={200}
                        height={200}
                        alt='productimage'
                        className='lg:w-[300px] md:w-[250px] w-[180px]'
                      />
                    </div>
                  </div>
                  <div className='p-4 w-72'>
                    <div className='flex items-center justify-between'>
                      <Typography
                        weight='bold'
                        font='poppins'
                        variant='bt'
                        className='text-whites-100 text-[12px] h-fit w-fit px-4 py-1 rounded-md bg-primary-600'
                      >
                        {merchData?.kategori_produk}
                      </Typography>
                      <IoIosClose
                        size={30}
                        className='cursor-pointer absolute top-2 right-2 sm:static'
                        onClick={setModalClose}
                      />
                    </div>
                    <Typography
                      weight='bold'
                      font='poppins'
                      variant='h6'
                      className='text-whites-1100 text-[18px] text-left my-2'
                    >
                      {merchData?.nama_produk}
                    </Typography>
                    <Typography
                      weight='medium'
                      font='poppins'
                      variant='p'
                      className='text-whites-1100 text-[14px] text-left'
                    >
                      {merchData?.deskripsi}
                    </Typography>
                    <div className='mt-16 lg:mt-0 lg:absolute lg:bottom-4'>
                      <Typography
                        weight='bold'
                        font='poppins'
                        variant='h6'
                        className='text-whites-1100 text-[18px] text-left my-2'
                      >
                        Rp {merchData?.harga.toLocaleString('id-ID')}
                      </Typography>
                      <div className='flex relative justify-center'>
                        <div
                          onClick={() => {
                            if (merchData.kategori_produk === 'KAOS') {
                              handleDropdownClick(merchData.id);
                            } else {
                              insertMerch(merchData);
                              showToast(
                                `Berhasil menambahkan ${merchData.nama_produk} ke keranjang belanja !`,
                                SUCCESS_TOAST
                              );
                            }
                          }}
                          className='flex items-center relative cursor-pointer justify-center w-full h-fit px-4 py-2 rounded-md bg-primary-600'
                        >
                          <PiShoppingCartSimpleFill
                            size={17}
                            color='white'
                            className='mx-2'
                          />
                          <Typography
                            weight='bold'
                            font='poppins'
                            variant='bt'
                            className='text-whites-100 sm:text-[12px] text-[14px]'
                          >
                            Tambah ke Keranjang
                          </Typography>
                        </div>
                        {activeDropdownId === merchData.id && (
                          <div className='flex-col -ml-2 bg-whites-100 py-2 mt-3 absolute justify-center px-3 right-2 bottom-14 w-fit border-[1px] shadow-40 rounded-md'>
                            {sizes.map((size, index) => (
                              <div
                                onClick={() => {
                                  insertMerch(merchData, size);
                                  showToast(
                                    `Berhasil menambahkan ${merchData.nama_produk} ke keranjang belanja !`,
                                    SUCCESS_TOAST
                                  );
                                }}
                                key={index}
                                className='cursor-pointer'
                              >
                                <Typography
                                  weight='medium'
                                  font='poppins'
                                  className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-primary-600 hover:text-whites-100 hover:rounded-lg px-2 py-1'
                                >
                                  {size}
                                </Typography>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
