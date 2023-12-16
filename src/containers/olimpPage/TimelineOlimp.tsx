import React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

const timelines = [
  {
    title: 'Pendaftaran',
    br: 'Batch 1',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/one.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 2',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/two.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 3',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/three.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 4',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/four.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 5',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/five.svg',
  },
];
const timelines_mobile = [
  {
    title: 'Pendaftaran',
    br: 'Batch 1',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/one_r.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 2',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/two_r.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 3',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/three_r.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 4',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/four_r.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 5',
    date: '12 Desember 2023 - 12 Januari 2023',
    image: '/svg/timeline/olimp/five_r.svg',
  },
];

function TimelineOlimp() {
  return (
    <>
      {/* Timeline Title */}
      <div className='!m-6'>
        <NextImage
          src={'/svg/timeline/olimp/timeline_title.svg'}
          alt='timeline_title'
          height={62}
          width={376}
          className='w-[90%] md:w-[30%]'
        ></NextImage>
      </div>

      {/* Desktop */}
      <div className='lg:grid hidden grid-cols-5 text-center bg-[#2e2e2e] rounded-xl p-6 !m-6'>
        {timelines.map((timeline, id) => (
          <div
            className='w-full h-full flex flex-col justify-center items-center'
            key={id}
          >
            <div className='grid grid-rows-5 grid-flow-col gap-4 w-full'>
              {id % 2 === 0 ? (
                <>
                  <div className='row-span-2'>
                    <Typography
                      font='baloo'
                      variant='h5'
                      className='font-extrabold text-[#F8F8F8]'
                    >
                      {timeline.title} <br /> {timeline.br}
                    </Typography>
                    <Typography
                      font='baloo'
                      variant='p'
                      className='text-[#F8F8F8]'
                    >
                      {timeline.date}
                    </Typography>
                  </div>
                  <div className='row-span-1'>
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <div
                        className={
                          'h-3 w-full bg-[#BAE3D5] ' +
                          (id === 0 ? 'rounded-l-full ' : 'rounded-none ') +
                          (id === 4 ? 'rounded-r-full ' : 'rounded-none')
                        }
                      ></div>
                      <div className='absolute'>
                        <NextImage
                          src={timeline.image}
                          alt='timeline'
                          height={65}
                          width={65}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row-span-2'></div>
                </>
              ) : (
                <>
                  <div className='row-span-2'></div>
                  <div className='row-span-1'>
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <div className='h-3 w-full bg-[#BAE3D5]'></div>
                      <div className='absolute'>
                        <NextImage
                          src={timeline.image}
                          alt='timeline'
                          height={65}
                          width={65}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row-span-2'>
                    <Typography
                      font='baloo'
                      variant='h5'
                      className='font-bold text-[#F8F8F8]'
                    >
                      {timeline.title} <br /> {timeline.br}
                    </Typography>
                    <Typography
                      font='baloo'
                      variant='p'
                      className='text-[#F8F8F8]'
                    >
                      {timeline.date}
                    </Typography>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className='lg:hidden bg-[#2e2e2e] rounded-xl p-4 !m-4'>
        {timelines_mobile.map((timeline_mobile, id) => (
          <div className='grid grid-cols-5 !h-[30vh]' key={id}>
            <div className='col-span-1'>
              <div className='relative w-full h-full flex justify-center items-center'>
                <div className='w-3 h-full bg-[#BAE3D5] rounded-none'></div>
                <div className='absolute'>
                  <NextImage
                    src={timeline_mobile.image}
                    alt='timeline'
                    height={65}
                    width={65}
                  />
                </div>
              </div>
            </div>
            <div className='col-span-4 h-full w-full flex flex-col justify-center pl-3'>
              <Typography
                font='baloo'
                variant='h4'
                className='font-bold text-[#F8F8F8] !text-3xl'
              >
                {timeline_mobile.title} <br /> {timeline_mobile.br}
              </Typography>
              <Typography
                font='baloo'
                variant='h6'
                className='text-[#F8F8F8] !text-xl'
              >
                {timeline_mobile.date}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TimelineOlimp;
