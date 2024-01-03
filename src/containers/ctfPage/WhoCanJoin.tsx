import React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function WhoCanJoin() {
  return (
    <section className='relative flex overflow-hidden items-center justify-center'>
      <div
        className='flex flex-col w-full px-10 items-center gap-2 my-12 md:my-16 md:gap-4 lg:gap-6 xl:gap-10 md:px-16'
        data-aos='zoom-in'
        data-aos-delay='400'
      >
        <NextImage
          src={'/svg/ctf/join_ctf.svg'}
          alt='plank'
          width={368}
          height={53}
        />
        <NextImage
          src={'/svg/ctf/arlo.png'}
          alt='plank'
          width={250}
          height={250}
          className='w-[125px] h-[125px] md:w-[220px] md:h-[220px] my-6 md:my-4'
        />
        <Typography
          variant='p'
          weight='regular'
          font='poppins'
          color='white'
          className='max-w-3xl text-center'
        >
          Kompetisi CTF atau Capture the Flag ARA 5.0 merupakan kompetisi
          Keamanan Siber yang dibuat khusus untuk siswa SMA/K dan mahasiswa
          aktif dari Perguruan Tinggi Negeri (PTN) atau Perguruan Tinggi Swasta
          (PTS) di seluruh Indonesia. Para peserta CTF yang mengambil bagian
          dalam acara ARA 5.0 diharapkan dapat menemukan file tersembunyi, baik
          dalam bentuk berkas maupun string (teks) yang disebut sebagai
          &quot;Flag&quot;.
        </Typography>
      </div>
      <NextImage
        src={'/svg/olimp/left_bush2.svg'}
        alt='plank'
        width={250}
        height={250}
        className='w-[250px] h-[250px] sm:absolute sm:-left-16 hidden sm:inline-block lg:w-[238px] lg:h-[377px] lg:-left-16'
        data-aos='fade-right'
        data-aos-delay='400'
      />
    </section>
  );
}
