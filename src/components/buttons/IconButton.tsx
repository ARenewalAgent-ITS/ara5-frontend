import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'danger',
  'warning',
  'success',
  'label',
  'outline-primary',
  'outline-danger',
  'outline-warning',
  'outline-success',
  'none',
}
enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'label',
      disabled: buttonDisabled,
      iconClassName,
      size = 'base',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          'text-black-500 text-sm md:text-base',

          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'text-base md:text-lg min-h-[28px] min-w-[28px] p-2 md:min-h-[48px] md:min-w-[48px] md:p-2.5',
            ],
            size === 'base' && [
              'text-sm md:text-base min-h-[24px] min-w-[24px] p-1 md:min-h-[40px] md:min-w-[40px] md:p-1.5',
            ],
            size === 'sm' && [
              'text-xs md:text-sm min-h-[22px] min-w-[22px] p-[0.5px] md:min-h-[36px] md:min-w-[36px] md:p-1',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          [
            variant === 'primary' && [
              'text-white-500',
              'bg-primary-600',
              'hover:bg-primary-600',
              'active:bg-primary-700 active:shadow-inner',
              'shadow-primary-100 hover:shadow-primary-200 hover:shadow-40 disabled:hover:shadow-primary-100',
              'disabled:bg-primary-700 disabled:brightness-90 disabled:hover:bg-primary-700',
            ],
            variant === 'warning' && [
              'text-white-500',
              'bg-warning-600',
              'hover:bg-warning-600 hover:shadow-warning-200 hover:shadow-40 active:bg-warning-700 active:shadow-inner',
              'disabled:bg-warning-700 disabled:brightness-95',
            ],
            variant === 'danger' && [
              'text-white-500',
              'bg-danger-600',
              'shadow-danger-100 hover:shadow-danger-200 hover:shadow-40 disabled:hover:shadow-danger-100',
              'hover:bg-danger-600 active:bg-danger-700 active:shadow-inner',
              'disabled:bg-danger-700 disabled:brightness-95',
            ],
            variant === 'success' && [
              'text-white-500',
              'bg-success-600',
              'hover:bg-success-600 hover:shadow-40',
              'active:bg-success-700 active:shadow-inner',
              'shadow-success-100 hover:shadow-success-200 disabled:hover:shadow-success-100',
              'disabled:bg-success-700 disabled:brightness-95',
            ],
            variant === 'label' && [
              'bg-typo-white',
              'ring-2 ring-typo-outline',
              'hover:bg-typo-label hover:text-typo-white active:bg-typo-label',
              'active:bg-typo-label disabled:bg-typo-label disabled:text-white-500 disabled:brightness-95',
            ],
            variant === 'outline-primary' && [
              'text-primary-600 fill-primary-600',
              'bg-transparent',
              'border border-primary-600',
              'active:shadow-inner',
              'shadow-primary-100 hover:shadow-primary-200 hover:shadow-40 disabled:hover:shadow-primary-100',
              'disabled:bg-primary-700 disabled:brightness-90 disabled:hover:bg-primary-700',
            ],
            variant === 'outline-success' && [
              'text-success-600',
              'bg-transparent',
              'border border-success-600',
              'active:shadow-inner',
              'shadow-success-100 hover:shadow-success-200 hover:shadow-40 disabled:hover:shadow-success-100',
              'disabled:bg-success-700 disabled:brightness-90 disabled:hover:bg-success-700',
            ],
            variant === 'outline-danger' && [
              'text-danger-600',
              'bg-transparent',
              'border border-danger-600',
              'active:shadow-inner',
              'shadow-danger-100 hover:shadow-danger-200 hover:shadow-40 disabled:hover:shadow-danger-100',
              'disabled:bg-danger-700 disabled:brightness-90 disabled:hover:bg-danger-700',
            ],
            variant === 'outline-warning' && [
              'text-warning-600',
              'bg-transparent',
              'border border-warning-600',
              'active:shadow-inner',
              'shadow-warning-100 hover:shadow-warning-200 hover:shadow-40 disabled:hover:shadow-warning-100',
              'disabled:bg-warning-700 disabled:brightness-90 disabled:hover:bg-warning-700',
            ],
            variant === 'none' && [
              '!border-none',
              'bg-none text-base-primary',
              'hover:bg-none',
              'active:bg-none',
              'disabled:bg-none',
            ],
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && <Icon className={clsxm('text-white-500', iconClassName)} />}
      </button>
    );
  }
);

export default IconButton;
