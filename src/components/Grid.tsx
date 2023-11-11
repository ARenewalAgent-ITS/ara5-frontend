import * as React from 'react';

import clsxm from '@/lib/clsxm';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  screenHeight?: boolean;
};

export default function Grid({
  children,
  className,
  screenHeight = false,
  ...rest
}: GridProps) {
  const baseCN = `
    grid
    grid-cols-5
    gap-x-4
    mx-4
    sm:grid-cols-5
    sm:mx-6
    sm:gap-x-4
    md:grid-cols-12
    md:mx-[100px]
    md:gap-x-4
    relative
    place-content-start
    ${screenHeight ? 'min-h-screen' : ''}
  `;

  return (
    <div className={clsxm(baseCN, className)} {...rest}>
      {children}
    </div>
  );
}
