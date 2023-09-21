import { ReactNode } from 'react';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function HelperText({
  children,
  helperTextClassName,
}: {
  children: ReactNode;
  helperTextClassName?: string;
}) {
  return (
    <div className='flex space-x-1'>
      <Typography
        variant='h6'
        font='cavalier'
        color='secondary'
        className={clsxm('!leading-tight', helperTextClassName)}
      >
        {children}
      </Typography>
    </div>
  );
}
