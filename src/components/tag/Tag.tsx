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
            'px-4 py-2 !text-xs': size === 'small',
            'px-6 py-2 !text-sm': size === 'base',
          },
          {
            'bg-gray-600 border border-gray-800': color === 'primary',
            'bg-yellow-500 border border-yellow-800': color === 'warning',
            'bg-success-600 border border-success-800': color === 'success',
            'bg-danger-600 border border-danger-800': color === 'danger',
            'bg-primary-600 border border-primary-800': color === 'label',
          },
          className
        )}
      >
        <Typography variant='p' as='span' color='white'>
          {children}
        </Typography>
      </div>
    );
  }
);

export default Tag;
