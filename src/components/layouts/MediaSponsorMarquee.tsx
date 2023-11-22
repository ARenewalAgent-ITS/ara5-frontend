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

export default function MediaSponsorMarquee(props: TMarqueeData) {
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
