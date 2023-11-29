// import MediaSponsorMarquee from '@/components/layouts/MediaSponsorMarquee';
import Marquee from 'react-fast-marquee';

import NextImage from '@/components/NextImage';

interface TSponsorData {
  alt: string;
  source: string;
}

interface TMarqueeData {
  idx: number;
  line: TSponsorData[];
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

const medias: TSponsorData[] = sponsors;

function MediaSponsorMarquee(props: TMarqueeData) {
  return (
    <Marquee
      pauseOnHover={true}
      direction={props.idx % 2 ? 'left' : 'right'}
      speed={80}
      className={props.idx > 0 ? 'mt-5 sm:mt-8 md:mt-12' : ''}
    >
      {props.line.map((sponsor, sID) => (
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
  );
}

export default function SponsorSection() {
  // 3 sponsors & media partners each marquee
  const chunkedSponsors = [];
  const chunkedMedia = [];
  for (let i = 0; i < medias.length; i += 3) {
    chunkedMedia.push(medias.slice(i, i + 3));
  }
  for (let i = 0; i < sponsors.length; i += 3) {
    chunkedSponsors.push(sponsors.slice(i, i + 3));
  }

  return (
    <section className='sponsor-media-section bg-transparent'>
      <section className='sponsor-section py-[85px] md:pt-[91px] md:pb-[183px]'>
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
            <MediaSponsorMarquee key={line} idx={line} line={sponsorLine} />
          ))}
        </div>
      </section>
      <section className='media-section py-[85px] md:pt-[80px] md:pb-[120px]'>
        <div className='upper-media flex justify-center items-center mb-[70px]'>
          <NextImage
            src={'/svg/landpage/media_partners.svg'}
            alt='media partners'
            width={368}
            height={53}
          />
        </div>
        <div className='media-cards'>
          {chunkedMedia.map((mediaLine, line) => (
            <MediaSponsorMarquee key={line} idx={line} line={mediaLine} />
          ))}
        </div>
      </section>
    </section>
  );
}
