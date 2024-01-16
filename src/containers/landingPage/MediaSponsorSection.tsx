// import MediaSponsorMarquee from '@/components/layouts/MediaSponsorMarquee';
import Marquee from 'react-fast-marquee';

import NextImage from '@/components/NextImage';
import { medpar, sponsors } from '@/constants/medpar';

interface TSponsorMedpar {
  alt: string;
  source: string;
  width?: number;
  height?: number;
}

interface TMarqueeData {
  idx: number;
  line: TSponsorMedpar[];
}

const sponsor: TSponsorMedpar[] = sponsors;
const medias: TSponsorMedpar[] = medpar;

function MediaSponsorMedparMarquee(props: TMarqueeData) {
  return (
    <Marquee
      pauseOnHover={true}
      direction={props.idx % 2 ? 'left' : 'right'}
      speed={80}
      className={props.idx > 0 ? 'mt-5 sm:mt-8 md:mt-12' : ''}
    >
      {props.line.map((sponsor, sID) => (
        <div
          className='w-[247px] h-[89px] sm:w-[414px] sm:h-[122px] md:w-[600px] md:h-[206px] mx-[15px] sm:mx-[25px] md:mx-[35px] max-w-full rounded-xl bg-white flex justify-center items-center'
          key={sID}
        >
          <NextImage
            src={sponsor.source}
            alt={sponsor.alt}
            width={sponsor.width || 183}
            height={sponsor.height || 82}
            className='md:scale-[2.35] sm:scale-150'
          />
        </div>
      ))}
    </Marquee>
  );
}

export default function SponsorSection() {
  const chunkedSponsors = [];
  const chunkedMedia = [];
  for (let i = 0; i < medias.length; i += 3) {
    chunkedMedia.push(medias.slice(i, i + 3));
  }
  for (let i = 0; i < sponsor.length; i += 4) {
    chunkedSponsors.push(sponsor.slice(i, i + 4));
  }

  return (
    <section className='sponsor-media-section bg-primary-1100 relative -mt-[1rem]'>
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
            <MediaSponsorMedparMarquee
              key={line}
              idx={line}
              line={sponsorLine}
            />
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
          {chunkedMedia.map((sponsorLine, line) => (
            <MediaSponsorMedparMarquee
              key={line}
              idx={line}
              line={sponsorLine}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
