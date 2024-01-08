'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css';

import axios from 'axios';
import Image from 'next/image';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Navbar from '@/components/layouts/Navbar';
import Loading from '@/components/Loading';
import NextImage from '@/components/NextImage';
import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import CheckoutDialog from '@/containers/merchPage/CheckoutDialog';
import useMerchStore from '@/store/useMerchStore';
import { TMerchCatalogue } from '@/types/entities/merch';

/*
interface ProductData {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  category: string;
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 2,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 3,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 4,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 5,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 6,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 7,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 8,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
];
*/

const paginationStyle = {
  '--swiper-pagination-color': '#212121',
  '--swiper-pagination-bullet-inactive-color': '#212121',
  '--swiper-pagination-bullet-inactive-opacity': '0.5',
  '--swiper-pagination-bullet-active-opacity': '1',
  '--swiper-pagination-bullet-size': '0.65rem',
} as React.CSSProperties;

const images = [
  '/img/merchpage/banner.svg',
  '/img/merchpage/banner2.svg',
  '/img/merchpage/banner3.svg',
  '/img/merchpage/banner4.svg',
];

export default function PageMerch() {
  const [products, setProducts] = useState<TMerchCatalogue[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TMerchCatalogue[]>(
    []
  );
  const [sortType, setSortType] = useState<'Termurah' | 'Termahal' | null>(
    null
  );
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const { insertMerch } = useMerchStore();
  const uniqueCategories = Array.from(
    new Set(products.map((product: TMerchCatalogue) => product.kategori_produk))
  );

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://ara-its.id/api/merch');
      setProducts(response.data.data.data);
    }

    fetchData();
  }, []);

  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const CatDropdownClick = () => {
    setShowCatDropdown(!showCatDropdown);
  };

  const SortDropdownClick = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategories((prevCategories) => {
      setIsFiltered(true);
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleSortChange = (sortType: 'Termurah' | 'Termahal') => {
    setSortType(sortType);
    setIsSorted(true);
  };

  const resetFilter = () => {
    setSelectedCategories([]);
    setIsFiltered(false);
  };

  const resetSort = () => {
    setSortType(null);
    setIsSorted(false);
  };

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategories.includes(product.kategori_produk)
      );
    }

    if (sortType === 'Termurah') {
      updatedProducts = updatedProducts.sort((a, b) => a.harga - b.harga);
    } else if (sortType === 'Termahal') {
      updatedProducts = updatedProducts.sort((a, b) => b.harga - a.harga);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategories, sortType, products]);

  SwiperCore.use([Autoplay]);

  return (
    <>
      <Navbar />
      <CheckoutDialog />
      <Swiper
        modules={[A11y, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        style={paginationStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='pt-20 flex justify-center items-center relative'>
              <NextImage
                src={image}
                alt='frame'
                width={616}
                height={171}
                className='cursor-pointer w-full'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className='flex justify-center bg-transparent mt-8'>
        <div className='w-full h-full flex flex-col'>
          <div className='mx-6 md:mx-8 lg:mx-12 xl:mx-20'>
            <div className='flex justify-between items-center'>
              <Typography
                weight='bold'
                font='poppins'
                className='text-success-1100 text-[18px] sm:text-[24px] md:text-[28px]'
              >
                Katalog Merchandise
              </Typography>
              <NextImage
                src='/img/merchpage/sorticon.svg'
                alt='frame'
                width={22}
                height={12}
                className='cursor-pointer block lg:hidden'
              />
              <div className='flex gap-5'>
                <div
                  onClick={CatDropdownClick}
                  className='hidden z-10 cursor-pointer lg:block items-center flex-col bg-whites-100 w-full h-10 p-2 border-[1px] border-whites-1100 rounded-md'
                >
                  <div className='flex justify-between items-center'>
                    <div className='flex'>
                      {selectedCategories.length !== 0 ? (
                        selectedCategories.map((category, index) => (
                          <React.Fragment key={index}>
                            <Typography
                              weight='medium'
                              font='poppins'
                              className='text-whites-100 px-5 mx-1 rounded-md bg-primary-600 lg:text-[12px]'
                            >
                              {category}
                            </Typography>
                          </React.Fragment>
                        ))
                      ) : (
                        <Typography
                          weight='semibold'
                          font='poppins'
                          className='text-whites-100 px-5 mx-1 rounded-md bg-primary-600 lg:text-[14px]'
                        >
                          Filter
                        </Typography>
                      )}
                    </div>
                    <IoIosArrowDown className='flex' />
                  </div>
                  {showCatDropdown && (
                    <div className='flex-col -ml-2 bg-whites-100 py-2 mt-3 flex justify-center px-3 w-full border-[1px] shadow-40 rounded-md'>
                      {uniqueCategories.map((category, index) => (
                        <div
                          onClick={() => handleCategorySelection(category)}
                          key={index}
                        >
                          <Typography
                            weight='medium'
                            font='poppins'
                            className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-primary-600 hover:text-whites-100 hover:rounded-lg px-2 py-1'
                          >
                            {category}
                          </Typography>
                        </div>
                      ))}
                      {isFiltered && (
                        <div onClick={resetFilter}>
                          <Typography
                            weight='medium'
                            font='poppins'
                            className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-danger-600 hover:text-whites-100 hover:rounded-lg px-2 py-1'
                          >
                            Reset Filter
                          </Typography>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div
                  onClick={SortDropdownClick}
                  className='hidden cursor-pointer z-10 lg:block items-center flex-col bg-whites-100 lg:w-64 w-28 h-10 p-2 border-[1px] border-whites-1100 rounded-md'
                >
                  <div className='flex justify-between items-center'>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 mx-1 text-[12px] lg:text-[14px]'
                    >
                      {sortType ? sortType : 'Sort by'}
                    </Typography>
                    <IoIosArrowDown className='flex' />
                  </div>
                  {showSortDropdown && (
                    <div className='flex-col -ml-2 bg-whites-100 py-2 mt-2 w-full flex justify-center p-2 border-[1px] shadow-40 rounded-md'>
                      <div onClick={() => handleSortChange('Termurah')}>
                        <Typography
                          weight='medium'
                          font='poppins'
                          className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-primary-600 hover:text-whites-100 hover:rounded-lg px-2 py-1'
                        >
                          Termurah
                        </Typography>
                      </div>
                      <div onClick={() => handleSortChange('Termahal')}>
                        <Typography
                          weight='medium'
                          font='poppins'
                          className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-primary-600 hover:text-whites-100 hover:rounded-lg px-2 py-1'
                        >
                          Termahal
                        </Typography>
                      </div>
                      {isSorted && (
                        <div onClick={resetSort}>
                          <Typography
                            weight='medium'
                            font='poppins'
                            className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-danger-600 hover:text-whites-100 hover:rounded-lg px-2 py-1'
                          >
                            Reset Sort
                          </Typography>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='mt-4 mx-4 sm:mx-6 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
            {filteredProducts ? (
              filteredProducts.map((product: TMerchCatalogue) => (
                <div key={product.id} className='my-3 mx-1 sm:mx-2'>
                  <div className='relative'>
                    <div className='relative overflow-hidden bg-primary-100 bg-opacity-25 rounded-t-[15px]'>
                      <Image
                        src={`https://ara-its.id/uploads/merch/${product.image_path}`}
                        width={1000}
                        height={1000}
                        alt='productimage'
                        className='w-full object-none duration-300 h-[400px]'
                        style={{ borderRadius: '0.5rem 0.5rem 0 0' }}
                      />
                    </div>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-100 absolute top-4 right-4 px-5 py-1 rounded-md bg-primary-600 hidden lg:block lg:text-[13px]'
                    >
                      {product.kategori_produk}
                    </Typography>
                    <div className='bg-primary-600 rounded-b-3xl px-6 py-5'>
                      <div className='lg:flex lg:justify-between lg:items-center'>
                        <div className='lg:flex-col'>
                          <Typography
                            weight='medium'
                            font='poppins'
                            className='text-whites-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]'
                          >
                            {product.nama_produk}
                          </Typography>
                          <Typography
                            weight='bold'
                            font='poppins'
                            className='text-whites-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]'
                          >
                            Rp{product.harga.toLocaleString('id-ID')}
                          </Typography>
                        </div>
                        <button
                          onClick={() => {
                            insertMerch(product);
                            showToast(
                              `Berhasil menambahkan ${product.nama_produk} ke keranjang belanja !`,
                              SUCCESS_TOAST
                            );
                          }}
                          className='border-[1px] border-whites-100 py-2 px-5 w-fit h-fit gap-1 rounded-md mt-2 flex relative justify-center items-center'
                        >
                          <Typography
                            weight='bold'
                            font='poppins'
                            className='text-whites-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]'
                          >
                            Beli
                          </Typography>
                          <PiShoppingCartSimpleFill
                            color='#ffffff'
                            className='mx-1 w-4'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <Loading />
                <Loading />
                <Loading />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
