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

export default function SponsorSection() {
  // 3 sponsors each marquee
  const chunkedSponsors = [];
  for (let i = 0; i < sponsors.length; i += 3) {
    chunkedSponsors.push(sponsors.slice(i, i + 3));
  }

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
        {chunkedSponsors.map((sponsorLine, line) => (
          <Marquee
            pauseOnHover={true}
            direction={line % 2 ? 'left' : 'right'}
            speed={80}
            key={line}
            className={line > 0 ? 'mt-5 sm:mt-8 md:mt-12' : ''}
          >
            {sponsorLine.map((sponsor, sID) => (
              <div
                className='w-[247px] h-[73px] sm:w-[414px] sm:h-[122px] md:w-[582px] md:h-[172px] mx-[15px] sm:mx-[25px] md:mx-[35px] max-w-full rounded-xl bg-white flex justify-center items-center'
                key={sID}
              >
                <NextImage
                  src={sponsor.source}
                  alt={sponsor.alt}
                  width={190}
                  height={48}
                  className='md:scale-[2.35] sm:scale-150'
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
