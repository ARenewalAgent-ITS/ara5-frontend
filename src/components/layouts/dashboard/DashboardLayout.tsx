'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import BaseDialog from '@/components/dialog/BaseDialog';
import Forbidden from '@/components/Forbidden';
import DesktopNavigation from '@/components/layouts/dashboard/DesktopNavigation';
import MobileNavigation from '@/components/layouts/dashboard/MobileNavigation';
import { FetchUser } from '@/hooks/navbarMutation';
import clsxm from '@/lib/clsxm';
import useDialogStore from '@/store/useDialogStore';

type DashboardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  backUrl?: string;
  showBackButton?: boolean;
};

export default function DashboardLayout({
  children,
  className,
  backUrl,
  showBackButton = false,
}: DashboardLayoutProps) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========
  const router = useRouter();

  const [admin, setAdmin] = useState(false);

  const users = FetchUser();

  useEffect(() => {
    if (users?.role === 'ADMIN') {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [users]);

  return (
    <>
      {admin === true ? (
        <div className='min-h-full'>
          {showBackButton && (
            <Button
              leftIcon={HiOutlineChevronLeft}
              className='hidden md:flex absolute left-[300px] top-5 bg-transparent border-0 ring-0 hover:bg-transparent active:bg-transparent'
              textClassName='text-base-primary text-xs -ml-1'
              leftIconClassName='text-base-primary'
              onClick={() => (backUrl ? router.push(backUrl) : router.back())}
            >
              Back
            </Button>
          )}
          <DesktopNavigation />

          <div className='bg-white flex flex-col lg:pl-72'>
            <MobileNavigation />

            <main
              className={clsxm(
                'bg-typo-surface min-h-screen px-4 py-5 md:px-10 md:py-10',
                className
              )}
              tabIndex={-1}
            >
              {children}
            </main>

            <BaseDialog
              onClose={handleClose}
              onSubmit={handleSubmit}
              open={open}
              options={state}
            />
          </div>
        </div>
      ) : (
        <Forbidden />
      )}
    </>
  );
}
