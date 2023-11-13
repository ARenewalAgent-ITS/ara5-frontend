'use client';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Cross from './nav-img/Cross.svg';
import Ellipse from './nav-img/Ellipse 102.png';
import ExploIT from './nav-img/Group 899.png';
import Olimpiade from './nav-img/Group.png';
import LogoSVG from './nav-img/Logo-ARA.svg';
import LogoAra from './nav-img/LogoARA(4).png';
import Register from './nav-img/Register.png';
import CTF from './nav-img/Vector.png';

function Navbar() {
  const [showMe1, setShowMe1] = useState(false);
  const [showMe2, setShowMe2] = useState(false);
  const [showMe3, setShowMe3] = useState(false);
  const [showMe4, setShowMe4] = useState(false);
  const [showClick1, setShowClick1] = useState(false);
  const [showClick2, setShowClick2] = useState(false);
  const [showClick3, setShowClick3] = useState(false);

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

  function click1() {
    setShowClick1(!showClick1);
    setShowClick2(false);
    setShowClick3(false);
  }

  function click2() {
    setShowClick2(!showClick2);
    setShowClick1(false);
    setShowClick3(false);
  }

  function click3() {
    setShowClick3(!showClick3);
    setShowClick1(false);
    setShowClick2(false);
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
    if (window.scrollY >= 175) {
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

      <div className='container font-poppins'>
        <div
          style={{ backgroundColor: colorChange ? '#ffffff' : '' }}
          className='z-50 duration-300 flex justify-between fixed w-[100%] min-h-[10vh] p-[1.5rem] md:px-[2rem] md:py-[1rem] box-border'
        >
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <Image src={LogoAra} alt='logoAra' className='w-[7rem]' />
            </Link>
          </div>

          <div className='md:flex hidden justify-between items-center gap-[2rem] text-[#393737]'>
            <div className='text-center group'>
              <Link href='#' onClick={click1}>
                <div
                  style={{ color: showClick1 ? '#986A4B' : '' }}
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  Home
                </div>
                <Image
                  style={{
                    opacity: showClick1 ? '1' : '',
                  }}
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </Link>
            </div>
            <div className='text-center group'>
              <div>
                <div onClick={toggle1} className='cursor-pointer'>
                  <div className='flex gap-1'>
                    <div className='group-hover:text-[#986A4B] duration-300 text-[18px] font-extrabold'>
                      Our Events
                    </div>
                    <div
                      style={{
                        transform: showMe1 ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                      className='flex items-center group-hover:text-[#986A4B] duration-300'
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
                style={{ display: showMe1 ? 'block' : 'none' }}
                ref={dropdown}
                className='text-[18px] bg-[#525252] mt-3 absolute flex flex-col text-white-50 rounded-xl shadow-md transition-opacity duration-300 font-bold'
              >
                <Link
                  href='#'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-tl-xl rounded-tr-xl'
                >
                  <Image src={Olimpiade} alt='olim' className='w-6 h-6 mr-4' />
                  <div>Olimpiade</div>
                </Link>
                <Link
                  href='#'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] '
                >
                  <Image src={CTF} alt='ctf' className='w-6 h-6 mr-4' />
                  <div>CTF</div>
                </Link>
                <Link
                  href='#'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-bl-xl rounded-br-xl'
                >
                  <Image src={ExploIT} alt='exploit' className='w-6 h-6 mr-4' />
                  <div>ExploIT</div>
                </Link>
              </div>
            </div>
            <div className='text-center group'>
              <Link href='#' onClick={click2}>
                <div
                  style={{ color: showClick2 ? '#986A4B' : '' }}
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  HMIT
                </div>
                <Image
                  style={{ opacity: showClick2 ? '1' : '' }}
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </Link>
            </div>
            <div className='text-center group'>
              <Link href='#' onClick={click3}>
                <div
                  style={{ color: showClick3 ? '#986A4B' : '' }}
                  className='group-hover:text-[#986A4B] text-[18px] font-extrabold'
                >
                  About
                </div>
                <Image
                  style={{ opacity: showClick3 ? '1' : '' }}
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </Link>
            </div>
          </div>

          <div className='md:flex hidden justify-between items-center gap-[1.5rem]'>
            <div className='flex justify-between items-center'>
              <Link href='#'>
                <div className='font-extrabold text-[#986A4B] text-[18px] hover:mt-[-5px]'>
                  Login
                </div>
              </Link>
            </div>
            <div className='flex justify-between items-center'>
              <Link href='#'>
                <Image
                  src={Register}
                  alt='register'
                  className='w-[7rem] hover:mt-[-5px]'
                />
              </Link>
            </div>
          </div>

          <div
            onClick={toggle4}
            className='flex justify-between items-center cursor-pointer md:hidden'
          >
            <div className='text-[2rem]'>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}

      <div
        style={{ transform: showMe4 ? 'translateX(0)' : '' }}
        className='z-50 fixed md:hidden duration-200 transform -translate-x-full min-h-screen bg-[#393737] w-[100%] px-[1.5rem]'
      >
        <div>
          <Link href='/' className='mt-[3rem] flex justify-center items-center'>
            <Image src={LogoSVG} alt='svg' className='w-36' />
          </Link>

          <div className='mt-10 text-[#ffffff] font-bold cursor-pointer w-[100%] flex justify-center items-center'>
            <div className='flex gap-2 text-[22px]' onClick={toggle2}>
              <div>Our Events</div>
              <div className='flex justify-center items-center'>
                <FontAwesomeIcon
                  style={{
                    transform: showMe2 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                  icon={faChevronDown}
                  className='flex items-center'
                />
              </div>
            </div>
          </div>

          <div
            style={{ display: showMe2 ? 'block' : 'none' }}
            className='mt-2 text-[18px] font-bold text-[#ffffff]'
          >
            <Link href='#' className='flex justify-center items-center gap-2'>
              <Image src={Olimpiade} alt='olimpiade' className='w-5'></Image>
              <div>Olimpiade</div>
            </Link>
            <Link
              href='#'
              className='flex justify-center items-center gap-2 my-2'
            >
              <Image src={CTF} alt='ctf' className='w-5'></Image>
              <div>Capture The Flag</div>
            </Link>
            <Link href='#' className='flex justify-center items-center gap-2'>
              <Image src={ExploIT} alt='exploIT' className='w-5'></Image>
              <div>ExploIT</div>
            </Link>
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
                  className='flex items-center'
                />
              </div>
            </div>
          </div>

          <div
            style={{ display: showMe3 ? 'block' : 'none' }}
            className='mt-2 text-[18px] font-bold text-[#ffffff]'
          >
            <div>
              <Link href='#' className='flex justify-center items-center'>
                ARA 5.0
              </Link>
            </div>
            <div className='my-2'></div>
            <div>
              <Link href='#' className='flex justify-center items-center'>
                HMIT ITS
              </Link>
            </div>
          </div>

          <div className='mt-10 w-[100%] text-[#ffffff] font-bold text-[18px]'>
            <Link href='#' className='text-center'>
              <div className='p-2 bg-[#00B8FF] border-2 border-[#00B8FF] rounded-md'>
                Login
              </div>
            </Link>
            <div className='py-2'></div>
            <Link href='#' className='text-center'>
              <div className='p-2 border-2 border-[#00B8FF] text-[#00B8FF] rounded-md'>
                Register
              </div>
            </Link>
          </div>
        </div>

        <div
          onClick={toggle4}
          className='absolute bottom-[6rem] left-1/2 transform -translate-x-1/2 cursor-pointer'
        >
          <Image src={Cross} className='w-12' alt='cross'></Image>
        </div>
      </div>
    </>
  );
}

export default Navbar;