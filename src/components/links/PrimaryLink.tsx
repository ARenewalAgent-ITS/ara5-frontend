import * as React from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

const PrimaryLinkSize = ['medium', 'small'] as const;
export enum PrimaryLinkVariant {
  'primary',
  'secondary',
  'danger',
  'success',
  'warning',
}

type PrimaryLinkProps = {
  size?: (typeof PrimaryLinkSize)[number];
  variant?: (typeof PrimaryLinkVariant)[number];
  underline?: boolean;
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  (
    {
      className,
      children,
      size = 'medium',
      variant = 'primary',
      underline = true,
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring',
          'transition duration-150',
          'decoration-current hover:decoration-white-500/0 active:decoration-current disabled:hover:decoration-current',
          underline && 'underline',
          //*=========== Size ===========
          size === 'medium' && 'text-md md:text-base ',
          size === 'small' && 'text-sm md:text-md',
          //*======== Size ===========

          //*=========== Variant ===========
          variant === 'primary' && [
            'text-typo-primary',
            'focus-visible:ring-typo-primary',
          ],
          variant === 'secondary' && [
            'text-typo-secondary', // color config?
            'focus-visible:ring-typo-secondary',
          ],
          variant === 'danger' && [
            'text-danger-500 hover:text-danger-600 active:text-danger-600',
            'focus-visible:ring-danger-400',
          ],
          variant == 'warning' && [
            'text-warning-500 hover:text-warning-600 active:text-warning-600',
            'focus-visible:ring-warning-400',
          ],
          variant == 'success' && [
            'text-success-500 hover:text-success-600 active:text-success-600',
            'focus-visible:ring-success-400',
          ],
          //*======== Variant ===========
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
