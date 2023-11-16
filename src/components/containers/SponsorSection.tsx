import Marquee from 'react-fast-marquee';
import NextImage from '@/components/NextImage';

interface TSponsorData {
  alt: string;
  source: string;
}

const sponsors: TSponsorData[] = [
  {
    source: '/svg/landpage/paragon_corp.svg',
    alt: 'paragon corp',
  },
  {
    source: '/svg/landpage/paragon_corp.svg',
    alt: 'paragon corp',
  },
  {
    source: '/svg/landpage/paragon_corp.svg',
    alt: 'paragon corp',
  },
];

// SM & Mobile
export default function SponsorSection() {
  return (
    <section className='sponsor-section bg-primary-400 py-[120px]'>
      <div className='upper-sponsor flex justify-center items-center mb-[70px]'>
        <NextImage
          src={'/svg/landpage/our_sponsors.svg'}
          alt='our sponsors'
          width={368}
          height={53}
        />
      </div>
      <div className='sponsor-cards'>
        <Marquee pauseOnHover={true} direction='right' speed={80}>
          {sponsors.map((sponsor, idx) => (
            <div
              className='w-[582px] h-[172px] scale-[.6] sm:scale-75 md:scale-100 rounded-xl bg-white flex justify-center items-center md:mr-[70px] mr-[-150px] sm:mr-[-70px]'
              key={idx}
            >
              <NextImage
                src={sponsor.source}
                alt={sponsor.alt}
                width={448}
                height={113}
              />
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          direction='left'
          speed={80}
          className='md:mt-[50px]'
        >
          {sponsors.map((sponsor, idx) => (
            <div
              className='w-[582px] h-[172px] scale-[.6] sm:scale-75 md:scale-100 rounded-xl bg-white flex justify-center items-center md:mr-[70px] mr-[-150px] sm:mr-[-70px]'
              key={idx}
            >
              <NextImage
                src={sponsor.source}
                alt={sponsor.alt}
                width={448}
                height={113}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
