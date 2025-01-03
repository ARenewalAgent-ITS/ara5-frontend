'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { FetchUser } from '@/hooks/navbarMutation';
import clsxm from '@/lib/clsxm';
import { getToken } from '@/lib/cookies';
import LogoItBnw from '~/img/footer/logo_it_bnw.png';
import KotakNama from '~/svg/footer/kotak nama.svg';
import LogoHmitBnw from '~/svg/footer/logo_hmit_bnw.svg';

interface TSocialMedias {
  link: string;
  img: string;
}

interface TFooterData {
  title: string;
  link_name: string[];
  links: string[];
}

const socialMedias: TSocialMedias[] = [
  {
    link: 'https://www.instagram.com/ara_its/',
    img: '/svg/footer/Instagram.svg',
  },
  {
    link: 'https://www.linkedin.com/company/araits/mycompany/',
    img: '/svg/footer/LinkedIn.svg',
  },
  {
    link: 'https://www.tiktok.com/@ara_its',
    img: '/svg/footer/Tiktok.svg',
  },
  {
    link: 'https://twitter.com/ara__its',
    img: '/svg/footer/X.svg',
  },
];

const footerData: TFooterData[] = [
  {
    title: 'Our Events',
    link_name: ['OlimpIT', 'Register CTF', 'ARA 5.0'],
    links: ['olimpit', 'ctf/register', 'https://www.instagram.com/ara_its'],
  },
  {
    title: 'Quick Links',
    link_name: ['Capture The Flag', 'Register OlimpIT', 'HMIT ITS'],
    links: ['ctf', 'olimpit/register', 'https://www.instagram.com/hmit_its'],
  },
  {
    title: 'About Us',
    link_name: ['ExploIT', 'Login'],
    links: ['exploit', 'login'],
  },
];

interface LinkHeadline {
  text: string;
}

function SVG(props: LinkHeadline) {
  return (
    <div className='relative w-fit'>
      <Image src={KotakNama} alt='kotak nama' />
      <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-hidden'>
        <Typography
          as={'p'}
          variant='t'
          weight='bold'
          className={clsxm(
            'text-[#724F38] font-bold text-[18px] leading-[24px] font-poppins'
          )}
        >
          {props.text}
        </Typography>
      </div>
    </div>
  );
}

export default function Footer() {
  const [isLogin, setIsLogin] = useState(false);
  const users = FetchUser();
  const token = getToken();

  useEffect(() => {
    if (users !== undefined && token !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [users, token]);
  return (
    <footer className='bg-[#393737] py-12 pb-8 flex flex-col overflow-hidden'>
      <div className='flex flex-col md:flex-row md:mx-auto md:gap-x-28 lg:justify-between lg:mx-0 md:px-6 lg:px-12 xl:px-20'>
        <div className='footer-logo flex flex-col gap-y-11 justify-center md:items-start md:justify-between items-center mt-6 md:mt-0 mb-9'>
          <Image
            src='/svg/footer/LogoARA.svg'
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
            {footerData.map((link, idx) => (
              <UnstyledLink href={`/${link.links[0]}`} key={idx}>
                <Typography
                  as={'p'}
                  variant='bt'
                  weight='medium'
                  color='white'
                  className='mt-3 font-poppins'
                >
                  {link.link_name[0]}
                </Typography>
              </UnstyledLink>
            ))}
          </div>
          <div className='event flex flex-col lg:items-start items-center mb-5 text-white-50 text-center'>
            {isLogin ? (
              <></>
            ) : (
              <>
                <SVG text='Quick Links' />
                {footerData.map((link, idx) => (
                  <UnstyledLink href={`/${link.links[1]}`} key={idx}>
                    <Typography
                      as={'p'}
                      variant='bt'
                      weight='medium'
                      color='white'
                      className='mt-3 font-poppins'
                    >
                      {link.link_name[1]}
                    </Typography>
                  </UnstyledLink>
                ))}
              </>
            )}
          </div>
          <div className='event flex flex-col lg:items-start items-center mb-5 text-white-50 text-center'>
            <SVG text='About Us' />
            {footerData.map((link, idx) => (
              <UnstyledLink href={`${link.links[2]}`} key={idx}>
                <Typography
                  as={'p'}
                  variant='bt'
                  weight='medium'
                  color='white'
                  className='mt-3 font-poppins'
                >
                  {link.link_name[2]}
                </Typography>
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>
      <hr className='bg-white-50 h-[1px] w-[90%] lg:w-[92%] xl:w[94%] mx-auto' />
      <div className='flex flex-col md:flex-row-reverse md:mt-5 md:px-7 md:pl-11 lg:pl-14 lg:px-10 xl:pl-16 xl:px-14 2xl:pl-20 2xl:px-16 md:justify-between md:w-full'>
        <div className='social-links mb-2.5 text-center pt-7'>
          {socialMedias.map((social) => (
            <div className='link inline-block mx-2.5' key={social.link}>
              <UnstyledLink
                href={social.link}
                className='flex items-center justify-center w-7 h-7 bg-white rounded-full'
              >
                <Image
                  src={social.img}
                  alt='IG'
                  width={0}
                  height={0}
                  style={{ width: ' 60%', height: '60%' }}
                />
              </UnstyledLink>
            </div>
          ))}
        </div>
        <Typography
          as={'p'}
          variant='bt'
          weight='medium'
          color='white'
          className='text-center mt-5 pb-5 font-poppins'
        >
          &copy; A Renewal Agent 5.0
        </Typography>
      </div>
    </footer>
  );
}
