import * as React from 'react';

import PrimaryLink, {
  PrimaryLinkVariant,
} from '@/components/links/PrimaryLink';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

const breadcrumbs: Record<
  string,
  { title: string; color: keyof typeof PrimaryLinkVariant }
> = {
  // Dashboard Event
  '/home': {
    title: 'Home',
    color: 'primary',
  },
  '/level1': {
    title: 'Level 1',
    color: 'primary',
  },
  '/level2': {
    title: 'Level 2',
    color: 'primary',
  },
  '/level3': {
    title: 'Level 3',
    color: 'primary',
  },
  '/level4': {
    title: 'Level 4',
    color: 'primary',
  },

  // Dashboard Admin
  '/dashboard/admin': {
    title: 'Dashboard',
    color: 'primary',
  },

  // Dashboard Detail Admin
  '/dashboard/admin/detail': {
    title: 'Detail',
    color: 'primary',
  },
};
type BreadcrumbProps = {
  crumbs: Array<keyof typeof breadcrumbs>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Breadcrumb({
  className,
  crumbs: _crumbs,
  ...rest
}: BreadcrumbProps) {
  // split array into the last part and the rest
  const lastCrumb = _crumbs[_crumbs.length - 1];
  const crumbs = _crumbs.slice(0, _crumbs.length - 1);

  return (
    <div className={clsxm('space-x-1', className)} {...rest}>
      {crumbs.map((crumb) => (
        <React.Fragment key={crumb}>
          <Typography
            color='secondary'
            as='span'
            variant='btn'
            font='cavalier'
            weight='medium'
          >
            <PrimaryLink
              href={crumb}
              variant={breadcrumbs[crumb].color}
              className='font-medium no-underline'
            >
              {breadcrumbs[crumb].title}
            </PrimaryLink>
            <span className='text-base font-medium'>/</span>
          </Typography>
        </React.Fragment>
      ))}
      <Typography
        as='span'
        variant='bt'
        weight='medium'
        font='cavalier'
        color={crumbs.length == 0 ? breadcrumbs[lastCrumb].color : 'blue'}
      >
        {breadcrumbs[lastCrumb].title}
      </Typography>
    </div>
  );
}
