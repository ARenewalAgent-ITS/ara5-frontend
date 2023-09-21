import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  HiExclamationCircle,
  HiOutlineCheck,
  HiOutlineExclamation,
} from 'react-icons/hi';

import Button from '@/components/buttons/Button';

type BaseDialogProps = {
  /** Maintained by useDialogStore */
  open: boolean;
  /** Maintained by useDialogStore */
  onSubmit: () => void;
  /** Maintained by useDialogStore */
  onClose: () => void;
  /** Customizable Dialog Options */
  options: DialogOptions;
};

export type DialogOptions = {
  catchOnCancel?: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  variant: 'success' | 'warning' | 'danger';
  submitText: React.ReactNode;
  cancelText?: string;
};

/**
 * Base Dialog for useDialog hook implementation.
 *
 * **Should be called with the hook, not by the component itself**
 *
 *
 * @see useDialogStore
 * @example ```tsx
 * const dialog = useDialog();
 *
 * dialog(options);
 * ```
 */
export default function BaseDialog({
  open,
  onSubmit,
  onClose,
  options: { title, description, variant, submitText, cancelText = 'Cancel' },
}: BaseDialogProps) {
  const current = colorVariant[variant];

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='overflow-y-auto fixed inset-0 z-40'
        open={open}
        onClose={() => onClose()}
      >
        <div className='flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block overflow-hidden z-auto px-4 pt-5 pb-4 w-full text-left align-bottom bg-typo-white rounded-lg shadow-xl transition-all transform sm:p-6 sm:my-8 sm:max-w-lg sm:align-middle'>
              <div className='sm:flex sm:items-start'>
                <div
                  className={clsx(
                    'flex flex-shrink-0 justify-center items-center rounded-full',
                    'mx-auto w-12 h-12 sm:mx-0 sm:w-10 sm:h-10',
                    current.bg.light
                  )}
                >
                  <current.icon
                    className={clsx('w-6 h-6', current.text.primary)}
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <Dialog.Title
                    as='h3'
                    className='font-secondary text-lg font-semibold leading-6 text-typo-primary'
                  >
                    {title}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='font-secondary text-sm text-typo-secondary'>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-5 w-full flex flex-col sm:flex sm:flex-row-reverse gap-3 sm:mt-4'>
                <Button
                  onClick={onSubmit}
                  variant='primary'
                  textClassName='text-sm md:text-sm'
                >
                  {submitText}
                </Button>
                <Button
                  type='button'
                  onClick={onClose}
                  variant='outline-primary'
                  textClassName='text-sm md:text-sm'
                >
                  {cancelText}
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const colorVariant = {
  success: {
    bg: {
      light: 'bg-success-100',
    },
    text: {
      primary: 'text-success-500',
    },
    icon: HiOutlineCheck,
  },
  warning: {
    bg: {
      light: 'bg-warning-100',
    },
    text: {
      primary: 'text-warning-500',
    },
    icon: HiOutlineExclamation,
  },
  danger: {
    bg: {
      light: 'bg-danger-100',
    },
    text: {
      primary: 'text-danger-500',
    },
    icon: HiExclamationCircle,
  },
};
