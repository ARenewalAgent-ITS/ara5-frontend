import React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

const timelines = [
  {
    title: 'Pendaftaran',
    br: 'Batch 1',
    date: '18 Desember 2023 - 31 Desember 2023',
    image: '/svg/timeline/olimp/one.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 2',
    date: '1 Januari 2024 - 18 Januari 2024',
    image: '/svg/timeline/olimp/two.svg',
  },
  {
    title: 'Technical',
    br: 'Meeting',
    date: '21 Januari 2024',
    image: '/svg/timeline/olimp/three.svg',
  },
  {
    title: 'Babak',
    br: 'Penyisihan',
    date: '27 Januari 2024',
    image: '/svg/timeline/olimp/four.svg',
  },
  {
    title: 'Babak',
    br: 'Final',
    date: '7 Februari 2024',
    image: '/svg/timeline/olimp/five.svg',
  },
];
const timelines_mobile = [
  {
    title: 'Pendaftaran',
    br: 'Batch 1',
    date: '18 Desember 2023 - 31 Desember 2023',
    image: '/svg/timeline/olimp/one_r.svg',
  },
  {
    title: 'Pendaftaran',
    br: 'Batch 2',
    date: '1 Januari 2024 - 18 Januari 2024',
    image: '/svg/timeline/olimp/two_r.svg',
  },
  {
    title: 'Technical',
    br: 'Meeting',
    date: '21 Januari 2024',
    image: '/svg/timeline/olimp/three_r.svg',
  },
  {
    title: 'Babak',
    br: 'Penyisihan',
    date: '27 Januari 2024',
    image: '/svg/timeline/olimp/four_r.svg',
  },
  {
    title: 'Babak',
    br: 'Final',
    date: '7 Februari 2024',
    image: '/svg/timeline/olimp/five_r.svg',
  },
];

function TimelineOlimp() {
  return (
    <>
      {/* Timeline Title */}
      <div className='sm:pb-8 pb-4 relative w-full h-full'>
        <NextImage
          src={'/svg/olimp/right_torch.svg'}
          alt='timeline_title'
          width={310}
          height={450}
          className='absolute max-[370px]:hidden w-[280px] h-[420px] xl:-top-56 xl:-right-36 -right-[40px] md:-right-12 lg:-right-28 -top-28 sm:w-[310px] sm:h-[450px] sm:-right-[48px] xl:w-[465px] xl:h-[540px]'
          data-aos='fade-left'
          data-aos-delay='200'
        />
        <NextImage
          src={'/svg/olimp/left_torch.svg'}
          alt='timeline_title'
          width={310}
          height={450}
          className='hidden lg:inline-block lg:top-48 xl:-left-32 w-[280px] h-[420px] absolute -left-[40px] md:-left-[85px] lg:-left-28 xl:w-[465px] xl:h-[540px] -top-28 sm:w-[310px] sm:h-[450px] sm:-left-[48px]'
          data-aos='fade-right'
          data-aos-delay='600'
        />
        <NextImage
          src={'/svg/timeline/olimp/timeline_title.svg'}
          alt='timeline_title'
          height={62}
          width={376}
          className='w-[70%] sm:w-[45%] md:w-[50%] lg:w-[40%] xl:w-[32%]'
          data-aos='fade-up'
          data-aos-delay='200'
        />
      </div>

      {/* Desktop */}
      <div
        className='lg:grid hidden grid-cols-5 text-center rounded-xl'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        {timelines.map((timeline, id) => (
          <div
            className='w-full h-full flex flex-col justify-center items-center z-30'
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
                      {timeline.title} {timeline.br}
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
                          'h-3 w-full ' +
                          (id === 0
                            ? 'bg-gradient-to-r from-transparent from-50% to-[#BAE3D5] to-50% '
                            : '') +
                          (id === 4
                            ? 'bg-gradient-to-r from-[#BAE3D5] from-50% to-transparent to-50% '
                            : '') +
                          (id === 2 ? 'bg-[#BAE3D5]' : '')
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
                      {timeline.title} {timeline.br}
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
      <div
        className='lg:hidden rounded-xl'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        {timelines_mobile.map((timeline_mobile, id) => (
          <div className='grid grid-cols-5 !h-[30vh]' key={id}>
            <div className='col-span-1'>
              <div className='relative w-full h-full flex justify-center items-center'>
                <div
                  className={
                    'w-3 h-full ' +
                    (id === 0
                      ? 'bg-gradient-to-b from-transparent from-50% to-[#BAE3D5] to-50% '
                      : '') +
                    (id === 4
                      ? 'bg-gradient-to-b from-[#BAE3D5] from-50% to-transparent to-50% '
                      : '') +
                    (id === 1 || id === 2 || id === 3 ? 'bg-[#BAE3D5] ' : '')
                  }
                ></div>
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
                {timeline_mobile.title}
                <br />
                {timeline_mobile.br}
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
