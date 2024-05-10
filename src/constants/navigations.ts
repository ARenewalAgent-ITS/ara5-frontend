import { BiSolidCoupon } from 'react-icons/bi';
import { BiSolidNotepad } from 'react-icons/bi';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { FaFlag } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { HiTrophy } from 'react-icons/hi2';
import { IoIosPeople } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';

import { Navigation } from '@/types/navigate';

export const adminNavigations: Navigation[] = [
  {
    name: 'Events',
    href: '#',
    icon: BsFillCalendar2EventFill,
    children: [
      {
        name: 'Tim OlimpIT',
        href: '/admin/olimpit',
        icon: HiTrophy,
        permissions: ['ADMIN'],
      },
      {
        name: 'Tim CTF',
        href: '/admin/ctf',
        icon: FaFlag,
        permissions: ['ADMIN'],
      },
    ],
  },
  {
    name: 'Documents',
    href: '#',
    icon: IoDocuments,
    children: [
      {
        name: 'Write Up',
        href: '/admin/writeup',
        icon: BiSolidNotepad,
        permissions: ['ADMIN'],
      },
      {
        name: 'Kupon',
        href: '/admin/kupon',
        icon: BiSolidCoupon,
        permissions: ['ADMIN'],
      },
    ],
  },
  {
    name: 'Exploit',
    href: '#',
    icon: IoIosPeople,
    children: [
      {
        name: 'Tenants',
        href: '/admin/tenants',
        icon: IoIosPeople,
        permissions: ['ADMIN'],
      },
      {
        name: 'Visitor',
        href: '/admin/visitor',
        icon: IoIosPeople,
        permissions: ['ADMIN'],
      },
    ],
  },
  // {
  //   name: 'Tenants',
  //   href: '/admin/tenants',
  //   exactMatch: true,
  //   icon: IoIosPeople,
  //   permissions: ['ADMIN'],
  // },
  {
    name: 'Order Merch',
    href: '/admin/order-merch',
    exactMatch: true,
    icon: FaShoppingCart,
    permissions: ['ADMIN'],
  },
];

export const userNavigations: Navigation[] = [
  {
    name: 'Dashboard',
    href: '/dashboard/user',
    exactMatch: true,
    icon: MdDashboard,
    permissions: ['USER'],
  },
  {
    name: 'Website ARA',
    href: '/',
    exactMatch: true,
    icon: FaGlobe,
    permissions: ['USER'],
  },
];
