import Image from 'next/image';

import Typography from '@/components/Typography';
import LogoHmitBnw from '~/img/logo_hmit_bnw.svg';
import LogoItBnw from '~/img/logo_it_bnw.png';

interface LinkHeadline {
  text: string;
}

function SVG(props: LinkHeadline) {
  return (
    <svg
      width='179'
      height='36'
      viewBox='0 0 179 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='sm:w-[215px] sm:h-[43px]'
    >
      <g filter='url(#filter0_d_355_408)'>
        <path
          d='M1.11298 4.86252L2.7599 0.917284C2.9918 0.361755 3.53482 0 4.13681 0H173.593C174.562 0 175.274 0.910238 175.041 1.85128L174.211 5.19809C174.046 5.8636 173.448 6.33094 172.762 6.33094H170.686C168.942 6.33094 168.615 8.81174 170.299 9.26404L174.25 10.3247C174.967 10.5173 175.434 11.208 175.344 11.9452L174.053 22.6051C173.979 23.2202 173.532 23.7252 172.931 23.8741L171.343 24.2671C169.759 24.6592 169.864 26.9445 171.476 27.1905L173.033 27.4278C173.584 27.5118 174.042 27.896 174.221 28.4239L174.832 30.2276C175.16 31.1951 174.44 32.1986 173.419 32.1986H3.25995C2.58165 32.1986 1.9887 31.7411 1.81667 31.0849L0.840849 27.3634C0.663869 26.6884 1.14456 26.019 1.84069 25.9709C3.20657 25.8766 3.22941 23.878 1.86603 23.7525L1.53517 23.7221C0.948725 23.6681 0.5 23.1762 0.5 22.5872V10.3853C0.5 9.74967 0.951851 9.20381 1.57629 9.08507L2.1331 8.97919C3.49885 8.71949 3.45207 6.74834 2.07555 6.55371C1.27844 6.441 0.802858 5.60543 1.11298 4.86252Z'
          fill='#E59F71'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_355_408'
          x='0.5'
          y='0'
          width='178.212'
          height='35.5557'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='3.35715' dy='3.35715' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.729412 0 0 0 0 0.352941 0 0 0 0 0.192157 0 0 0 0.6 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_355_408'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_355_408'
            result='shape'
          />
        </filter>
      </defs>
      <text
        x='50%'
        y='50%'
        dominant-baseline='middle'
        text-anchor='middle'
        fill='#724F38'
        font-weight='700'
      >
        {props.text}
      </text>
    </svg>
  );
}

export default function Footer() {
  const socialMedias = [
    {
      link: 'https://www.instagram.com/ara_its/',
      img: '/img/Instagram.svg',
    },
    {
      link: 'https://www.linkedin.com/company/araits/mycompany/',
      img: '/img/LinkedIn.svg',
    },
    {
      link: 'https://www.tiktok.com/@ara_its',
      img: '/img/Tiktok.svg',
    },
    {
      link: 'https://twitter.com/ara__its',
      img: '/img/X.svg',
    },
  ];

  return (
    <footer className='bg-[#393737] py-12 pb-8 flex flex-col overflow-hidden'>
      <div className='flex flex-col md:flex-row md:mx-auto md:gap-x-28 lg:justify-between lg:mx-0 md:px-6 lg:px-12 xl:px-20'>
        <div className='footer-logo flex flex-col gap-y-11 justify-center md:items-start md:justify-between items-center mt-6 md:mt-0 mb-9'>
          <Image
            src='/img/LogoARA.svg'
            width={185}
            height={87}
            alt='Logo ARA 5.0'
            className='scale-110 md:scale-125 lg:scale-110 md:mt-2 lg:mt-0 md:ml-6 lg:ml-3'
          />
          <div className='hidden md:flex md:flex-col md:mb-3 lg:mb-0 md:gap-y-8'>
            <SVG text='Supported By' />
            <div className='flex flex-row gap-5'>
              <Image
                src={LogoHmitBnw}
                width={100}
                height={100}
                alt='Logo ARA 5.0'
              />
              <Image
                src={LogoItBnw}
                width={227}
                height={80}
                alt='Logo ARA 5.0'
              />
            </div>
          </div>
        </div>
        <div className='footer-links flex flex-col lg:flex-row md:items-start md:gap-x-4 lg:gap-x-8 xl:gap-x-12 justify-center items-center'>
          <div className='event flex flex-col lg:items-start items-center mb-5 text-white-50 text-center'>
            <SVG text='Our Events' />
            <a href='#' className='font-semibold mt-3 sm:text-lg'>
              OlimpIT
            </a>
            <br />
            <a href='#' className='font-semibold sm:text-lg'>
              Capture The Flag
            </a>
            <br />
            <a href='#' className='font-semibold sm:text-lg'>
              ExploIT
            </a>
          </div>
          <div className='event flex flex-col items-center lg:items-start mb-5 text-white-50 text-center'>
            <SVG text='Quick Links' />
            <a href='#' className='font-semibold mt-3 sm:text-lg'>
              Register
            </a>
            <br />
            <a href='#' className='font-semibold sm:text-lg'>
              Login
            </a>
          </div>
          <div className='event flex flex-col items-center lg:items-start mb-5 text-white-50 text-center'>
            <SVG text='About Us' />
            <a href='#' className='font-semibold mt-3 sm:text-lg'>
              ARA 5.0
            </a>
            <br />
            <a href='#' className='font-semibold sm:text-lg'>
              HMIT ITS
            </a>
            <br />
          </div>
        </div>
      </div>
      <hr className='bg-white-50 h-[1px] w-[90%] lg:w-[92%] xl:w[94%] mx-auto' />
      <div className='flex flex-col md:flex-row-reverse md:mt-5 md:px-7 md:pl-11 lg:pl-14 lg:px-10 xl:pl-16 xl:px-14 2xl:pl-20 2xl:px-16 md:justify-between md:w-full'>
        <div className='social-links mb-2.5 text-center pt-7'>
          {socialMedias.map((social) => (
            <div className='link inline-block mx-2.5' key={social.link}>
              <a
                href={social.link}
                className='flex items-center justify-center w-7 h-7 bg-white-50 rounded-full'
              >
                <Image
                  src={social.img}
                  alt='IG'
                  width={0}
                  height={0}
                  style={{ width: '60%', height: '60%' }}
                />
              </a>
            </div>
          ))}
        </div>
        <Typography
          variant='p'
          weight='semibold'
          color='white'
          className='text-center mt-5 pb-5'
        >
          &copy; A Renewal Agent 5.0
        </Typography>
      </div>
    </footer>
  );
}
