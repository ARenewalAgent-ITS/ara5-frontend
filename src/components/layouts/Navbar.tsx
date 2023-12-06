'use client';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { FetchUser } from '@/hooks/userMutation';
import clsxm from '@/lib/clsxm';
import { getToken } from '@/lib/cookies';

import Ellipse from './nav-img/Ellipse 102.png';
import ExploIT from './nav-img/Group 899.png';
import Olimpiade from './nav-img/Group.png';
import LogoSVG from './nav-img/Logo-ARA.svg';
import LogoAra from './nav-img/LogoARA(4).png';
import Register from './nav-img/Register.png';
import CTF from './nav-img/Vector.png';

function Navbar() {
  const token = getToken();
  const [isLogin, setIsLogin] = useState(false);

  const user = FetchUser();
  // console.log(token);
  useEffect(() => {
    // if (user !== undefined && token !== null) {
    // sementara
    if (user == undefined && token !== null) {
      setIsLogin(true);
      // console.log(user);
    } else {
      setIsLogin(false);
    }
  }, [user, token]);

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
                <Typography className='group-hover:text-[#986A4B] text-[18px] font-extrabold'>
                  Home
                </Typography>
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
                    <Typography className='group-hover:text-[#986A4B] duration-300 text-[18px] font-extrabold'>
                      Our Events
                    </Typography>
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
                  href='/Olimpiade'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-tl-xl rounded-tr-xl'
                >
                  <Image src={Olimpiade} alt='olim' className='w-6 h-6 mr-4' />
                  <Typography color='white'>Olimpiade</Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/Capture-The-Flag'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] '
                >
                  <Image src={CTF} alt='ctf' className='w-6 h-6 mr-4' />
                  <Typography color='white'>CTF</Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='/Explo-IT'
                  className='flex pl-5 pr-10 py-4 hover:bg-[#393737] rounded-bl-xl rounded-br-xl'
                >
                  <Image src={ExploIT} alt='exploit' className='w-6 h-6 mr-4' />
                  <Typography color='white'>ExploIT</Typography>
                </UnstyledLink>
              </div>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='#'>
                <Typography className='group-hover:text-[#986A4B] text-[18px] font-extrabold'>
                  HMIT
                </Typography>
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </UnstyledLink>
            </div>
            <div className='text-center group'>
              <UnstyledLink href='#'>
                <Typography className='group-hover:text-[#986A4B] text-[18px] font-extrabold'>
                  About
                </Typography>
                <Image
                  src={Ellipse}
                  alt='ellipse'
                  className='w-[56px] h-[3.7px] opacity-0 transition-opacity duration-300 group-hover:opacity-[1]'
                />
              </UnstyledLink>
            </div>
          </div>

          <div className='lg:flex hidden justify-between items-center gap-[1.5rem]'>
            {isLogin === false ? (
              <>
                <div className='flex justify-between items-center'>
                  <UnstyledLink href='/login'>
                    <Typography className='font-extrabold text-[#986A4B] text-[18px] hover:mt-[-5px]'>
                      Login
                    </Typography>
                  </UnstyledLink>
                </div>
                <div className='flex justify-between items-center'>
                  <UnstyledLink href='#'>
                    <Image
                      src={Register}
                      alt='register'
                      className='w-[7rem] hover:mt-[-5px]'
                    />
                  </UnstyledLink>
                </div>
              </>
            ) : (
              <>
                <div className='flex justify-between items-center'>
                  <Typography className='font-extrabold text-[#986A4B] text-[18px]'>
                    Hi, {user?.nama}
                  </Typography>
                </div>
                <Menu className='relative flex items-center' as='div'>
                  <div className='text-[50px]'>
                    <BiSolidUserCircle />
                  </div>
                  <Menu.Button>
                    {({ open }) => (
                      <div>
                        {!open ? (
                          <IoMdArrowDropdown
                            className={clsxm(
                              'text-[30px] transition ease-in-out duration-200'
                            )}
                          />
                        ) : (
                          <IoMdArrowDropup
                            className={clsxm(
                              'text-[30px] transition ease-in-out duration-200'
                            )}
                          />
                        )}
                      </div>
                    )}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items
                      className={clsxm(
                        'absolute w-[180px] shadow-80 bg-[#393737] mt-48 right-0',
                        'flex flex-col rounded-[10px]',
                        'focus:outline-none'
                      )}
                    >
                      <Menu.Item
                        as='button'
                        className='flex justify-center flex-col items-center'
                      >
                        <UnstyledLink
                          href='/dashboard'
                          className='flex items-center justify-center w-full py-3 hover:bg-[#525252] rounded-t-[10px]'
                        >
                          <Typography
                            font='poppins'
                            color='white'
                            variant='btn'
                            className='flex items-center text-center gap-3'
                          >
                            Dashboard
                          </Typography>
                        </UnstyledLink>
                        <UnstyledLink
                          href='/logout'
                          className='flex items-center justify-center w-full py-3 hover:bg-[#525252] rounded-b-[10px]'
                        >
                          <Typography
                            font='poppins'
                            color='white'
                            variant='btn'
                            className='flex items-center gap-2'
                          >
                            Logout
                            <MdLogout className='text-[18px]' />
                            <div className='mb-2 text-[20px]'></div>
                          </Typography>
                        </UnstyledLink>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            )}
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
        } z-50 top-0 fixed lg:hidden duration-200 transform -translate-x-full h-full bg-[#393737] w-[100%] px-[1.5rem]`}
      >
        <div>
          <UnstyledLink
            href='/'
            className='mt-[2rem] mb-[1rem] flex justify-center items-center'
          >
            <Image src={LogoSVG} alt='svg' className='w-40' />
          </UnstyledLink>

          {isLogin === false ? (
            <>
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
                  href='/Olimpiade'
                  className='flex justify-center items-center gap-2'
                >
                  <Image
                    src={Olimpiade}
                    alt='olimpiade'
                    className='w-5'
                  ></Image>
                  <Typography color='white'>Olimpiade</Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='Capture-The-Flag'
                  className='flex justify-center items-center gap-2 my-2'
                >
                  <Image src={CTF} alt='ctf' className='w-5'></Image>
                  <Typography color='white'>Capture The Flag</Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='Explo-IT'
                  className='flex justify-center items-center gap-2'
                >
                  <Image src={ExploIT} alt='exploIT' className='w-5'></Image>
                  <Typography color='white'>ExploIT</Typography>
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
                    href='#'
                    className='flex justify-center items-center'
                  >
                    ARA 5.0
                  </UnstyledLink>
                </div>
                <div className='my-2'></div>
                <div>
                  <UnstyledLink
                    href='#'
                    className='flex justify-center items-center'
                  >
                    HMIT ITS
                  </UnstyledLink>
                </div>
              </div>

              <div className='mt-10 w-[100%] text-[#ffffff] font-bold text-[18px]'>
                <UnstyledLink href='#' className='text-center'>
                  <div className='p-2 bg-[#00B8FF] border-2 border-[#00B8FF] rounded-md'>
                    Login
                  </div>
                </UnstyledLink>
                <div className='py-2'></div>
                <UnstyledLink href='#' className='text-center'>
                  <div className='p-2 border-2 border-[#151717] text-[#00B8FF] rounded-md'>
                    Register
                  </div>
                </UnstyledLink>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-col items-center'>
                <BiSolidUserCircle className='text-[100px] text-white' />
                <div className='flex justify-between items-center'>
                  <Typography className='font-extrabold text-white text-[18px]'>
                    Hi, {user?.nama}
                  </Typography>
                </div>
              </div>
              <div className='mt-10 w-[100%] text-[#ffffff] font-bold text-[18px]'>
                <UnstyledLink href='#' className='text-center'>
                  <div className='p-2 bg-[#00B8FF] border-2 border-[#00B8FF] rounded-md'>
                    Dashboard
                  </div>
                </UnstyledLink>
                <div className='py-2'></div>
                <UnstyledLink href='#' className='text-center'>
                  <div className='p-2 border-2 border-[#00B8FF] text-[#00B8FF] rounded-md'>
                    Logout
                  </div>
                </UnstyledLink>
              </div>

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
                  href='/Olimpiade'
                  className='flex justify-center items-center gap-2'
                >
                  <Image
                    src={Olimpiade}
                    alt='olimpiade'
                    className='w-5'
                  ></Image>
                  <Typography color='white'>Olimpiade</Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='Capture-The-Flag'
                  className='flex justify-center items-center gap-2 my-2'
                >
                  <Image src={CTF} alt='ctf' className='w-5'></Image>
                  <Typography color='white'>Capture The Flag</Typography>
                </UnstyledLink>
                <UnstyledLink
                  href='Explo-IT'
                  className='flex justify-center items-center gap-2'
                >
                  <Image src={ExploIT} alt='exploIT' className='w-5'></Image>
                  <Typography color='white'>ExploIT</Typography>
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
                    href='#'
                    className='flex justify-center items-center'
                  >
                    ARA 5.0
                  </UnstyledLink>
                </div>
                <div className='my-2'></div>
                <div>
                  <UnstyledLink
                    href='#'
                    className='flex justify-center items-center'
                  >
                    HMIT ITS
                  </UnstyledLink>
                </div>
              </div>
            </>
          )}
          <div
            onClick={toggle4}
            className='flex justify-center mt-12 cursor-pointer'
          >
            <FaRegTimesCircle className='text-[40px] text-white' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
