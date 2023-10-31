import * as React from 'react';

import clsxm from '@/lib/clsxm';

export enum TypographyVariant {
  'c12',
  'c14',
  'btn',
  'bt',
  'p',
  't',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  '9xl',
}

export enum TypographyColor {
  // priority
  'primary',
  'warning',
  'danger',
  'success',
  // more
  'white',
  'surface',
  'light',
  'outline',
  'inline',
  'icon',
  'secondary',
  'label',
  'blue',
}

enum FontVariant {
  'poppins',
  'baloo',
}

enum FontWeight {
  'thin',
  'light',
  'extralight',
  'regular',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  color?: keyof typeof TypographyColor;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = 'regular',
  className,
  color = 'primary',
  font = 'poppins',
  variant = 'p',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p';
  return (
    <Component
      className={clsxm(
        // *=============== Font Type ==================
        [
          font === 'poppins' && [
            'font-primary',
            [
              weight === 'thin' && 'font-thin',
              weight === 'light' && 'font-light',
              weight === 'extralight' && 'font-extralight',
              weight === 'regular' && 'font-regular',
              weight === 'medium' && 'font-medium',
              weight === 'semibold' && 'font-semibold',
              weight === 'bold' && 'font-bold',
              weight === 'extrabold' && 'font-extrabold',
              weight === 'black' && 'font-black',
            ],
          ],
          // font === 'baloo' && ['font-secondary leading-none'],
          font === 'baloo' && [
            'font-secondary',
            [
              weight === 'medium' && 'font-medium',
              weight === 'bold' && 'font-bold',
              weight === 'extrabold' && 'font-extrabold',
              weight === 'black' && 'font-black',
            ],
          ],
        ],
        // *=============== Font Variants ==================
        [
          // VARIANT 1
          variant === 'c12' && ['md:text-[12px] md:leading-[24px]'],
          variant === 'c14' && ['md:text-[14px] md:leading-[24px]'],
          variant === 'btn' && ['md:text-[16px] md:leading-[24px]'],
          variant === 'bt' && ['md:text-[16px] md:leading-[24px]'],
          variant === 'p' && ['md:text-[18px] md:leading-[24px]'],
          variant === 't' && ['md:text-[20px] md:leading-[24px]'],
          // VARIANT 2
          variant === 'h6' && ['md:text-[24px] md:leading-[32px]'],
          variant === 'h5' && ['md:text-[32px] md:leading-[48px]'],
          variant === 'h4' && ['md:text-[48px] md:leading-[64px]'],
          variant === 'h3' && ['md:text-[64px] md:leading-[84px]'],
          variant === 'h2' && ['md:text-[72px] md:leading-[90px]'],
          variant === 'h1' && ['md:text-[80px] md:leading-[96px]'],
          variant === '9xl' && ['md:text-[128px] md:leading-[100px]'],
        ],

        // *=============== Font Colors ==================
        // PRIORITY
        [color === 'primary' && ['text-typo-primary']],
        [color === 'warning' && ['text-warning-600']],
        [color === 'danger' && ['text-danger-600']],
        [color === 'success' && ['text-success-600']],
        // MORE
        [color === 'secondary' && ['text-typo-secondary']],
        [color === 'label' && ['text-typo-label']],
        [color === 'icon' && ['text-typo-icon']],
        [color === 'outline' && ['text-typo-outline']],
        [color === 'inline' && ['text-typo-inline']],
        [color === 'white' && ['text-typo-white']],
        [color === 'surface' && ['text-typo-surface']],
        [color === 'blue' && ['text-primary-500']],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
