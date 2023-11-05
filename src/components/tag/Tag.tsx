import * as React from 'react';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

enum TagSize {
  'small',
  'base',
}

export enum TagColor {
  'primary',
  'warning',
  'danger',
  'success',
  'label',
}

type TagProps = {
  children: React.ReactNode;
  size?: keyof typeof TagSize;
  color?: keyof typeof TagColor;
} & React.ComponentPropsWithRef<'div'>;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ children, className, size = 'base', color = 'primary', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center justify-center rounded-md',

          //*=========== Size ===========
          {
            'px-4 !text-xs': size === 'small',
            'px-6 !text-sm': size === 'base',
          },
          {
            'bg-gray-100 border border-gray-300': color === 'primary',
            'bg-warning-100 border border-warning-200': color === 'warning',
            'bg-success-100 border border-success-300': color === 'success',
            'bg-danger-100 border border-danger-300': color === 'danger',
            'bg-primary-50 border border-primary-900': color === 'label',
          },
          className
        )}
      >
        <Typography variant='p' as='span' color={'primary'}>
          {children}
        </Typography>
      </div>
    );
  }
);

export default Tag;
