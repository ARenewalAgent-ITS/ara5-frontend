import * as React from 'react';
import { IconType } from 'react-icons';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

enum IconLinkVariant {
  'primary',
  'warning',
  'danger',
  'success',
  'label',
  'outline-primary',
  'outline-warning',
  'outline-danger',
  'outline-success',
}

enum IconLinkSize {
  'sm',
  'base',
  'lg',
}

type IconLinkProps = {
  variant?: keyof typeof IconLinkVariant;
  size?: keyof typeof IconLinkSize;
  icon?: IconType;
  iconClassName?: string;
} & Omit<UnstyledLinkProps, 'children'>;

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline-primary',
      iconClassName,
      size = 'base',
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          'border-2 border-black',
          'text-black text-sm md:text-base',

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
              'hover:bg-typo-label hover:text-typo-white active:bg-typo-label',
              'active:bg-typo-label disabled:bg-typo-label disabled:text-white-500 disabled:brightness-95',
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
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && (
          <Icon className={clsxm('w-6 h-6 text-typo-primary', iconClassName)} />
        )}
      </UnstyledLink>
    );
  }
);

export default IconLink;
