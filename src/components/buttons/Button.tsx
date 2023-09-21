import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'warning',
  'danger',
  'success',
  'label',
  'black',
  'outline-primary',
  'outline-warning',
  'outline-danger',
  'outline-success',
  'outline-black',
}

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'base',
      variant = 'primary',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      textClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md',
          'focus:warning-none focus-visible:ring focus-visible:ring-primary-500',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'text-lg md:text-xl min-h-[28px] py-1 px-2 md:min-h-[48px] md:py-2.5 md:px-6',
            ],
            size === 'base' && [
              'text-sm md:text-base min-h-[24px] py-0.5 px-1 md:min-h-[40px] md:py-2 md:px-3.5',
            ],
            size === 'sm' && [
              'text-xs md:text-sm min-h-[22px] py-[1px] px-[3px] md:min-h-[34px] md:py-1.5 md:px-2.5',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'text-white-500',
              'bg-primary-600',
              'hover:bg-primary-700',
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
            variant === 'black' && [
              'text-typo-white',
              'bg-typo-primary',
              'hover:bg-black-300 hover:shadow-40',
              'active:bg-typo-primary active:shadow-inner',
              'shadow-black-100 hover:shadow-black-200 disabled:hover:shadow-black-100',
              'disabled:bg-black-400 disabled:brightness-95',
            ],
            variant === 'outline-primary' && [
              'text-primary-600',
              'border border-primary-600',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'shadow-primary-100 hover:shadow-primary-200 hover:shadow-40 disabled:hover:shadow-primary-100',
              'disabled:bg-primary-700 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            variant === 'outline-danger' && [
              'text-danger-600',
              'border border-danger-600',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'shadow-danger-100 hover:shadow-danger-200 hover:shadow-40 disabled:hover:shadow-danger-100',
              'disabled:bg-danger-700 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            variant === 'outline-warning' && [
              'text-warning-600',
              'border border-warning-600',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'shadow-warning-100 hover:shadow-warning-200 hover:shadow-40 disabled:hover:shadow-warning-100',
              'disabled:bg-warning-700 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            variant === 'outline-success' && [
              'text-success-600',
              'border border-success-600',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'shadow-success-100 hover:shadow-success-200 hover:shadow-40 disabled:hover:shadow-success-100',
              'disabled:bg-success-700 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            variant === 'outline-black' && [
              'text-typo-primary',
              'border border-typo-primary',
              'bg-transparent',
              'hover:bg-black-50',
              'active:shadow-inner',
              'shadow-black-100 hover:shadow-black-200 hover:shadow-40 disabled:hover:shadow-black-100',
              'disabled:bg-black-50 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          // 'hover:bg-typo-label',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              [
                ['primary', 'danger'].includes(variant) && 'text-white-500',
                ['warning', 'label'].includes(variant) && 'text-gray-500',
              ]
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {/* Left Icon */}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'mr-[10px]',
              size === 'base' && 'mr-[8px]',
              size === 'lg' && 'mr-[8px]',
            ])}
          >
            <LeftIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                leftIconClassName
              )}
            />
          </div>
        )}
        <span className={textClassName}>{children}</span>
        {RightIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'ml-[10px]',
              size === 'base' && 'ml-[8px]',
              size === 'lg' && 'ml-[8px]',
            ])}
          >
            <RightIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                rightIconClassName
              )}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
