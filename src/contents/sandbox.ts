import { ButtonVariant } from '@/components/links/ButtonLink';

interface colorConfig {
  colors: string;
  variant: keyof typeof ButtonVariant;
  href: string;
}

export const pages = [
  {
    title: 'Sandbox',
    href: '/sandbox',
  },
];

export const color: colorConfig[] = [
  {
    colors: 'primary',
    variant: 'primary',
    href: '#',
  },
  {
    colors: 'success',
    variant: 'success',
    href: '#',
  },
  {
    colors: 'warning',
    variant: 'warning',
    href: '#',
  },
  {
    colors: 'danger',
    variant: 'danger',
    href: '#',
  },
  {
    colors: 'All color',
    variant: 'label',
    href: '/sandbox/color',
  },
];

export const components = [
  {
    title: 'Typography',
    href: '/sandbox/typography',
  },
  {
    title: 'Button',
    href: '/sandbox/button',
  },
  {
    title: 'Form',
    href: '/sandbox/form',
  },
  {
    title: 'Badge',
    href: '/sandbox/badge',
  },
  {
    title: 'Breadcrumb',
    href: '/sandbox/breadcrumb',
  },
  {
    title: 'Images',
    href: '/sandbox/images',
  },
];
