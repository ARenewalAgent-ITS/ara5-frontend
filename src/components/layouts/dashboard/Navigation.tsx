import clsx from 'clsx';
import * as React from 'react';
import { useEffect, useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/Typography';
import { navigations } from '@/constants/navigations';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/store/useAuthStore';
import type { Navigation } from '@/types/navigate';

type NavigationProps = React.ComponentPropsWithoutRef<'nav'>;

export default function Navigation({ className, ...rest }: NavigationProps) {
  const [activeNavigation, setActiveNavigation] = useState<string | null>(
    localStorage.getItem('activeNavigation') || null
  );

  useEffect(() => {
    localStorage.setItem('activeNavigation', activeNavigation || '');
  }, [activeNavigation]);

  return (
    <nav className={clsxm('', className)} {...rest}>
      <div className='space-y-1.5 mx-4'>
        {navigations.map((nav) => (
          <NestedNavigation
            navigation={nav}
            key={nav.name}
            gen={0}
            isActive={activeNavigation === nav.name}
            setActiveNavigation={setActiveNavigation}
          />
        ))}
      </div>
    </nav>
  );
}

function NestedNavigation({
  navigation: navChildren,
  isActive,
  gen,
  setActiveNavigation,
}: {
  navigation: Navigation;
  isActive: boolean;
  gen: number;
  setActiveNavigation: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  function getChildrenPermission(nav?: Navigation[]) {
    return nav
      ? nav?.flatMap((n) => {
          return n.permissions;
        })
      : '';
  }

  const handleButtonClick = () => {
    setActiveNavigation(isActive ? null : navChildren.name);
  };

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
        onClick={handleButtonClick}
        className={clsx(
          'md:hover:bg-primary-600 group',
          'items-center justify-center gap-3',
          'flex w-full px-6 py-2.5',
          'border-none',
          `${isActive ? 'bg-primary-600' : 'bg-transparent'}`
        )}
        style={{ paddingLeft: gen > 0 ? `${24 * (gen + 1)}px` : '' }}
      >
        {navChildren.icon && (
          <navChildren.icon
            className={clsx(
              'flex-shrink-0',
              'group-hover:text-white text-lg',
              `${isActive ? 'text-white' : 'text-whites-900'}`,
              'mt-[1px] self-start'
            )}
            aria-hidden='true'
          />
        )}
        <Typography
          className={clsx(
            'text-[14px] group-hover:text-white',
            `${isActive ? 'text-white' : 'text-whites-900'}`
          )}
          weight='bold'
          font='poppins'
        >
          {navChildren.name}
        </Typography>
      </ButtonLink>
    </>
  );
}
