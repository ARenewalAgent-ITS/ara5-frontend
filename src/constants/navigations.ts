import { BiSolidCoupon } from 'react-icons/bi';
import { BiSolidNotepad } from 'react-icons/bi';
import { FaFlag } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { HiTrophy } from 'react-icons/hi2';

import { Navigation } from '@/types/navigate';
import Dashboard from '~/svg/dashboardpage/user/Dashboard';

export const adminNavigations: Navigation[] = [
  {
    name: 'Tim OlimpIT',
    href: '/admin/olimpit',
    exactMatch: true,
    icon: HiTrophy,
    permissions: ['ADMIN'],
  },
  {
    name: 'Tim CTF',
    href: '/admin/ctf',
    exactMatch: true,
    icon: FaFlag,
    permissions: ['ADMIN'],
  },
  {
    name: 'Write Up',
    href: '/admin/writeup',
    exactMatch: true,
    icon: BiSolidNotepad,
    permissions: ['ADMIN'],
  },
  {
    name: 'Kupon',
    href: '/admin/kupon',
    exactMatch: true,
    icon: BiSolidCoupon,
    permissions: ['ADMIN'],
  },
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
    icon: Dashboard,
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
