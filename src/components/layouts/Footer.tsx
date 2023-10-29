import Typography from '@/components/Typography';
import Image from 'next/image';

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
    <footer className='bg-[#393737] py-5'>
      <div className='footer-logo flex justify-center items-center mt-6 mb-9'>
        <Image
          src='/img/LogoARA.svg'
          width={185}
          height={87}
          alt='Logo ARA 5.0'
          className='sm:w-[35%] sm:h-[35%]'
        />
      </div>
      <div className='footer-links flex flex-col justify-center items-center'>
        <div className='event flex flex-col items-center mb-5 text-white-50 text-center'>
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
        <div className='event flex flex-col items-center mb-5 text-white-50 text-center'>
          <SVG text='Quick Links' />
          <a href='#' className='font-semibold mt-3 sm:text-lg'>
            Register
          </a>
          <br />
          <a href='#' className='font-semibold sm:text-lg'>
            Login
          </a>
        </div>
        <div className='event flex flex-col items-center mb-5 text-white-50 text-center'>
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
      <hr className='bg-white-50 h-[1px] w-[90%] mx-auto mt-8' />
      <div className='social-links mb-2.5 text-center pt-7'>
        {socialMedias.map((social) => (
          <div className='link inline-block mx-2.5' key={social.link}>
            <a
              href={social.link}
              className='flex items-center justify-center w-10 h-10 bg-white-50 rounded-full'
            >
              <Image
                src={social.img}
                alt='IG'
                width={0}
                height={0}
                style={{ width: '70%', height: '70%' }}
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
    </footer>
  );
}
