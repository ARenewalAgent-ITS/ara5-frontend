import { BiSolidNotepad } from 'react-icons/bi';
import { FaFlag } from 'react-icons/fa';
import { HiTrophy } from 'react-icons/hi2';

import { Navigation } from '@/types/navigate';

export const navigations: Navigation[] = [
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
];
