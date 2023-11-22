import MediaSponsorMarquee from '@/components/layouts/MediaSponsorMarquee';

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

const medias: TSponsorData[] = sponsors;

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
    <section className='sponsor-media-section bg-green-400'>
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
