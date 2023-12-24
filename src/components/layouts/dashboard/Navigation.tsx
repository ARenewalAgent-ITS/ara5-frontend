import clsx from 'clsx';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/Typography';
import { navigations } from '@/constants/navigations';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/store/useAuthStore';
import type { Navigation } from '@/types/navigate';

type NavigationProps = React.ComponentPropsWithoutRef<'nav'>;

export default function Navigation({ className, ...rest }: NavigationProps) {
  return (
    <nav className={clsxm('', className)} {...rest}>
      <div className='space-y-1.5 mx-4'>
        {navigations.map((nav) => (
          <NestedNavigation navigation={nav} key={nav.name} gen={0} />
        ))}
      </div>
    </nav>
  );
}

function NestedNavigation({
  navigation: navChildren,
  gen,
}: {
  navigation: Navigation;
  gen: number;
}) {
  function getChildrenPermission(nav?: Navigation[]) {
    return nav
      ? nav?.flatMap((n) => {
          return n.permissions;
        })
      : '';
  }

  const { user } = useAuthStore();
  const navChildrenWithPermission = getChildrenPermission(navChildren.children);
  const hasPermission =
    navChildrenWithPermission && navChildrenWithPermission.length > 0
      ? navChildrenWithPermission.some(
          (p) => user?.permission === (p as string)
        )
      : true;

  if (!hasPermission) return null;

  return (
    <>
      <ButtonLink
        href={navChildren.href}
        className={clsx(
          'md:hover:bg-primary-700',
          'flex items-center justify-center gap-3',
          'group flex w-full items-center px-6 py-2.5',
          'bg-primary-600',
          'focus-visible:ring-offset-secondary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500'
        )}
        style={{ paddingLeft: gen > 0 ? `${24 * (gen + 1)}px` : '' }}
      >
        {navChildren.icon && (
          <navChildren.icon
            className={clsx(
              'flex-shrink-0',
              'text-typo-white text-lg',
              'mt-[1px] self-start'
            )}
            aria-hidden='true'
          />
        )}
        <Typography
          className={clsx('text-left font-primary font-semibold text-[14px]')}
          color='white'
          font='poppins'
        >
          {navChildren.name}
        </Typography>
      </ButtonLink>
    </>
  );
}
