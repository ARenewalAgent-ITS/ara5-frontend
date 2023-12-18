'use client';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Cross from './nav-img/Cross.svg';
import Ellipse from './nav-img/Ellipse.png';
import ExploIT from './nav-img/ExploIT.png';
import Olimpiade from './nav-img/Group.png';
import LogoSVG from './nav-img/Logo-ARA.svg';
import LogoAra from './nav-img/LogoARA.png';
import Register from './nav-img/Register.png';
import CTF from './nav-img/Vector.png';

function Navbar() {
  const [showMe1, setShowMe1] = useState(false);
  const [showMe2, setShowMe2] = useState(false);
  const [showMe3, setShowMe3] = useState(false);
  const [showMe4, setShowMe4] = useState(false);

  function toggle1() {
    setShowMe1(!showMe1);
  }

  function toggle2() {
    setShowMe2(!showMe2);
    setShowMe3(false);
  }

  function toggle3() {
    setShowMe3(!showMe3);
    setShowMe2(false);
  }

  function toggle4() {
    setShowMe4(!showMe4);
  }

  /*event: MouseEvent*/
  const dropdown = useRef(null);
  useEffect(() => {
    function handleClick() {
      if (
        showMe1 &&
        dropdown.current &&
        !dropdown.current['contains(event.target)']
      ) {
        setShowMe1(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [showMe1]);

  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 30) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <>
      {/* Desktop View */}

      <div className='font-poppins z-40 w-full fixed top-0'>
        <div
          style={{ backgroundColor: `${colorChange ? '#fff' : 'transparent'}` }}
          className={`duration-300 flex justify-between items-center min-h-[10vh] py-3 md:py-[1rem] md:px-[2rem] px-[1.5rem]`}
        >
          <div className='flex justify-between items-center'>
            <UnstyledLink href='/'>
              <Image src={LogoAra} alt='logoAra' className='w-[7rem]' />
            </UnstyledLink>
          </div>

          <div className='hidden lg:flex justify-center gap-[2rem] absolute left-1/2 transform -translate-x-1/2'>
            <div className='text-center group'>
              <UnstyledLink href='/'>
                <div className='group-hover:text-[#986A4B] text-[18px] font-extrabold'>
                  Home
                </div>
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </UnstyledLink>
            </div>
            <div className='text-center group'>
              <div>
                <div onClick={toggle1} className='cursor-pointer'>
                  <div className='flex gap-1'>
                    <div className='group-hover:text-[#986A4B] duration-300 text-[18px] font-extrabold'>
                      Our Events
                    </div>
                    <div
                      className={`${
                        showMe1
                          ? 'rotate-180 duration-300 ease-in-out'
                          : 'rotate-0 duration-300 ease-in-out'
                      } flex items-center group-hover:text-[#986A4B] duration-300`}
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className='flex items-center'
                      />
                    </div>
                  </div>
                  <Image
                    src={Ellipse}
                    alt='ellipse'
                    className='w-[115px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                  />
                </div>
              </div>

              <div
                ref={dropdown}
                className={`${
                  showMe1 ? 'block' : 'hidden'
                } text-[18px] text-[#FFFFFF] bg-[#525252] mt-3 absolute flex flex-col text-white-50 rounded-xl shadow-md transition-opacity duration-300 font-bold`}
              >
                <UnstyledLink
                  href='/olimpit'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-tl-xl rounded-tr-xl'
                >
                  <Image src={Olimpiade} alt='olim' className='w-6 h-6 mr-4' />
                  <div>Olimpiade</div>
                </UnstyledLink>
                <UnstyledLink
                  href='/ctf'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] '
                >
                  <Image src={CTF} alt='ctf' className='w-6 h-6 mr-4' />
                  <div>CTF</div>
                </UnstyledLink>
                <UnstyledLink
                  href='/exploit'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-bl-xl rounded-br-xl'
                >
                  <Image src={ExploIT} alt='exploit' className='w-6 h-6 mr-4' />
                  <div>ExploIT</div>
                </UnstyledLink>
              </div>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='/hmit-its'>
                <div className='group-hover:text-[#986A4B] text-[18px] font-extrabold'>
                  HMIT
                </div>
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </UnstyledLink>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='/about'>
                <div className='group-hover:text-[#986A4B] text-[18px] font-extrabold'>
                  About
                </div>
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </UnstyledLink>
            </div>
          </div>

          <div className='lg:flex hidden justify-between items-center gap-[1.5rem]'>
            <div className='flex justify-between items-center'>
              <UnstyledLink href='/login'>
                <div className='font-extrabold text-[#986A4B] text-[18px] hover:mt-[-5px]'>
                  Login
                </div>
              </UnstyledLink>
            </div>
            <div className='flex justify-between items-center'>
              <UnstyledLink href='/register'>
                <Image
                  src={Register}
                  alt='register'
                  className='w-[7rem] hover:mt-[-5px]'
                />
              </UnstyledLink>
            </div>
          </div>

          <div
            onClick={toggle4}
            className='flex justify-between items-center cursor-pointer lg:hidden'
          >
            <div className='text-[2rem]'>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}

      <div
        className={`${
          showMe4 ? 'translate-x-0' : ''
        } z-50 top-0 fixed lg:hidden duration-200 transform -translate-x-full h-[100vh] bg-[#393737] w-[100%] px-[1.5rem]`}
      >
        <div>
          <UnstyledLink
            href='/'
            className='mt-[3rem] flex justify-center items-center'
          >
            <Image src={LogoSVG} alt='svg' className='w-36' />
          </UnstyledLink>

          <div className='mt-10 text-[#ffffff] font-bold cursor-pointer w-[100%] flex justify-center items-center'>
            <div className='flex gap-2 text-[22px]' onClick={toggle2}>
              <div>Our Events</div>
              <div className='flex justify-center items-center'>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${
                    showMe2
                      ? 'rotate-180 duration-300 ease-in-out'
                      : 'rotate-0 duration-300 ease-in-out'
                  } flex items-center`}
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              showMe2 ? 'block' : 'hidden'
            } mt-2 text-[18px] font-bold text-[#ffffff]`}
          >
            <UnstyledLink
              href='olimpit'
              className='flex justify-center items-center gap-2'
            >
              <Image src={Olimpiade} alt='olimpiade' className='w-5'></Image>
              <div>Olimpiade</div>
            </UnstyledLink>
            <UnstyledLink
              href='/ctf'
              className='flex justify-center items-center gap-2 my-2'
            >
              <Image src={CTF} alt='ctf' className='w-5'></Image>
              <div>Capture The Flag</div>
            </UnstyledLink>
            <UnstyledLink
              href='exploit'
              className='flex justify-center items-center gap-2'
            >
              <Image src={ExploIT} alt='exploIT' className='w-5'></Image>
              <div>ExploIT</div>
            </UnstyledLink>
          </div>

          <div className='mt-3 text-[#ffffff] font-bold cursor-pointer w-[100%] flex justify-center items-center'>
            <div className='flex gap-2 text-[22px]' onClick={toggle3}>
              <div>About Us</div>
              <div className='flex justify-center items-center'>
                <FontAwesomeIcon
                  style={{
                    transform: showMe3 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                  icon={faChevronDown}
                  className={`${
                    showMe3
                      ? 'rotate-180 duration-300 ease-in-out'
                      : 'rotate-0 duration-300 ease-in-out'
                  } flex items-center`}
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              showMe3 ? 'block' : 'hidden'
            } mt-2 text-[18px] font-bold text-[#ffffff]`}
          >
            <div>
              <UnstyledLink
                href='/about'
                className='flex justify-center items-center'
              >
                ARA 5.0
              </UnstyledLink>
            </div>
            <div className='my-2'></div>
            <div>
              <UnstyledLink
                href='/hmit-its'
                className='flex justify-center items-center'
              >
                HMIT ITS
              </UnstyledLink>
            </div>
          </div>

          <div className='mt-10 w-[100%] text-[#ffffff] font-bold text-[18px]'>
            <UnstyledLink href='/login' className='text-center'>
              <div className='p-2 bg-[#00B8FF] border-2 border-[#00B8FF] rounded-md'>
                Login
              </div>
            </UnstyledLink>
            <div className='py-2'></div>
            <UnstyledLink href='/register' className='text-center'>
              <div className='p-2 border-2 border-[#00B8FF] text-[#00B8FF] rounded-md'>
                Register
              </div>
            </UnstyledLink>
          </div>
        </div>

        <div
          onClick={toggle4}
          className='absolute bottom-[4rem] left-1/2 transform -translate-x-1/2 cursor-pointer'
        >
          <Image src={Cross} className='w-12' alt='cross'></Image>
        </div>
      </div>
    </>
  );
}

export default Navbar;
