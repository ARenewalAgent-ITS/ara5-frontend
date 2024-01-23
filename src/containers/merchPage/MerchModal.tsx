import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import Typography from '@/components/Typography';
import { IoIosClose } from 'react-icons/io';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import useMerchStore from '@/store/useMerchStore';
import { TMerchCatalogue } from '@/types/entities/merch';

export default function MerchModal() {
  const { modalIsOpen, merchCatalogue, setModalClose } = useMerchStore();

  return (
    <>
      {merchCatalogue.map((product: TMerchCatalogue) => (
        <Transition appear show={modalIsOpen} as={Fragment} key={product.id}>
          <Dialog as='div' className='relative z-10' onClose={setModalClose}>
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='fixed inset-0 bg-black/25' />
            </Transition.Child>

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
                  <Dialog.Panel className='rounded-2xl overflow-hidden border-whites-1100 border-2 bg-whites-100 border-solid transition-all'>
                    <div key={product.id} className='lg:flex'>
                      <div className='relative lg:w-[400px] lg:h-[400px] md:w-[388px] md:h-[388px] w-[288px] h-[288px] overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-whites-1100 bg-primary-200 bg-opacity-25'>
                        <div className='flex justify-center items-center h-full'>
                          <Image
                            src={`https://ara-its.id/uploads/merch/${product.image_path}`}
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
                            {product.kategori_produk}
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
                          {product.nama_produk}
                        </Typography>
                        <Typography
                          weight='medium'
                          font='poppins'
                          variant='p'
                          className='text-whites-1100 text-[14px] text-left'
                        >
                          {product.deskripsi}
                        </Typography>
                        <div className='mt-16 lg:mt-0 lg:absolute lg:bottom-4'>
                          <Typography
                            weight='bold'
                            font='poppins'
                            variant='h6'
                            className='text-whites-1100 text-[18px] text-left my-2'
                          >
                            Rp. {product.harga}
                          </Typography>
                          <div className='flex justify-center'>
                            <div className='flex items-center justify-center w-full h-fit px-4 py-2 rounded-md bg-primary-600'>
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
      ))}
    </>
  );
}
