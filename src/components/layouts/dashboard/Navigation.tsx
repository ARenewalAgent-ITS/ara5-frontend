'use client';

import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import UnstyledLink from '@/components/links/UnstyledLink';
import { adminNavigations, userNavigations } from '@/constants/navigations';
import { FetchUser } from '@/hooks/navbarMutation';
import clsxm from '@/lib/clsxm';
import { PermissionList } from '@/types/entities/permissionList';
import type { Navigation } from '@/types/navigate';

type NavigationProps = React.ComponentPropsWithoutRef<'nav'>;

export default function Navigation({ className, ...rest }: NavigationProps) {
  const users = FetchUser();
  let navMenus;
  if (users?.role === 'ADMIN') {
    navMenus = adminNavigations;
  } else if (users?.role === 'TEAM') {
    navMenus = userNavigations;
  } else {
    navMenus = userNavigations;
  }

  return (
    <nav className={clsxm('', className)} {...rest}>
      <div className='space-y-1.5 mx-4'>
        {navMenus.map((nav) =>
          nav.children ? (
            <NestedNavigation navigation={nav} key={nav.name} />
          ) : (
            <NavigationLink key={nav.name} navigation={nav} />
          )
        )}
      </div>
    </nav>
  );
}

function NestedNavigation({
  navigation: navChildren,
}: {
  navigation: Navigation;
}) {
  const pathname = usePathname();

  function getChildrenPermission(nav?: Navigation[]): PermissionList {
    return (
      nav?.flatMap((n) => {
        const tempPermission: PermissionList = [];
        if (n.permissions) {
          tempPermission.push(...n.permissions);
        }
        if (n.children) {
          tempPermission.push(...getChildrenPermission(n.children));
        }
        return tempPermission;
      }) || []
    );
  }

  const navChildrenWithPermission = getChildrenPermission(navChildren.children);
  const hasPermission =
    navChildrenWithPermission && navChildrenWithPermission.length > 0
      ? // ? navChildrenWithPermission.some(p => user?.permission.includes(p))
        true
      : false;

  if (!hasPermission) return null;
  // Recursively check if any children is active

  function checkActive(nav?: Navigation[]): boolean {
    if (!nav) return false;

    return nav.some((n) => {
      if (!n.children) {
        const isActive = n.exactMatch
          ? pathname === n.href
          : pathname.startsWith(n.href);

        return isActive;
      }

      return checkActive(n.children);
    });
  }

  return (
    <Disclosure as='div' defaultOpen={checkActive(navChildren.children)}>
      {({ open }) => (
        <div className='hover:text-white'>
          <Disclosure.Button
            className={clsx(
              'hover:bg-primary-200',
              'text-whites-1100 gap-2',
              'group flex w-full items-center rounded-md px-4 py-3 text-md font-medium',
              'focus-visible:ring-offset-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500'
            )}
          >
            {navChildren.icon && (
              <navChildren.icon
                className={clsx(
                  'mr-1 flex-shrink-0',
                  'text-whites-1100 text-lg',
                  open && 'mt-[1px] self-start'
                )}
                aria-hidden='true'
              />
            )}
            <span className={clsx('text-left', !open && 'truncate')}>
              {navChildren.name}
            </span>
            <FiChevronRight
              className={clsx(
                'flex-shrink-0',
                'text-whites-1100 ml-auto text-lg',
                open && 'mt-[1px] rotate-90 self-start'
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className='pl-8 flex mt-0.5'>
            <div className='border-l-2 border-white my-1' />
            <div className='w-full'>
              {navChildren.children?.map((nav) =>
                nav.children ? (
                  <NestedNavigation key={nav.name} navigation={nav} />
                ) : (
                  <NavigationLink key={nav.name} navigation={nav} />
                )
              )}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

function NavigationLink({
  navigation,
  className,
}: {
  navigation: Navigation;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = navigation.exactMatch
    ? pathname === navigation.href
    : pathname.startsWith(navigation.href);

  // check if user has permission to access the route
  // const { user } = useAuthStore();
  const hasPermission =
    navigation.permissions ??
    // ? navigation.permissions?.some(p => user?.permission.includes(p))
    true;

  if (!hasPermission) return null;

  return (
    <UnstyledLink
      href={navigation.href}
      className={clsxm(
        isActive ? 'bg-primary-600' : 'hover:bg-primary-200',
        'group my-0.5 flex items-center justify-start py-3 rounded-md px-4 text-md font-medium',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {navigation.icon && (
        <navigation.icon
          className={clsx(
            isActive ? 'text-white' : 'text-whites-1100 ',
            'mr-1.5 text-xl flex-shrink-0'
          )}
          aria-hidden='true'
        />
      )}
      <span
        className={clsxm(
          isActive ? 'text-white' : 'text-whites-1100',
          'truncate pl-1'
        )}
      >
        {navigation.name}
      </span>
    </UnstyledLink>
  );
}
