import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import ErrorMessage from '@/components/form/ErrorMessage';
import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export type InputProps = {
  id: string;
  label?: string;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  prefix?: string;
  suffix?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  prefix,
  suffix,
  className,
  type = 'text',
  readOnly = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  helperTextClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);
  const error = get(errors, id);

  return (
    <div className='w-full space-y-2'>
      {label && (
        <label htmlFor={id} className='flex space-x-1'>
          <Typography font='romansd' variant='bt' color='label'>
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-danger-500'>*</Typography>
          )}
        </label>
      )}

      <div className='w-full flex relative'>
        <div
          className={clsxm(
            'absolute w-full h-full ring-2 pointer-events-none',
            'ring-typo-outline'
          )}
        />

        {prefix && (
          <Typography
            variant='h6'
            font='cavalier'
            color='secondary'
            weight='medium'
            className='flex items-center px-3 bg-typo-outline'
          >
            {prefix}
          </Typography>
        )}

        <div className={clsxm('relative w-full')}>
          {LeftIcon && (
            <div
              className={clsxm(
                'absolute top-0 left-0 h-full',
                'flex justify-center items-center pl-2.5',
                'text-typo-icon text-lg md:text-xl',
                leftIconClassName
              )}
            >
              <LeftIcon />
            </div>
          )}

          <input
            {...register(id, validation)}
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            id={id}
            name={id}
            readOnly={readOnly}
            disabled={readOnly}
            className={clsxm(
              'w-full h-full px-3 py-3 border-none',
              [LeftIcon && 'pl-9', RightIcon && 'pr-9'],
              'focus:ring-2',
              'bg-typo-white hover:bg-typo-surface',
              'font-secondary text-typo-primary text-[22px]',
              'placeholder:font-secondary placeholder:text-typo-secondary',
              readOnly && 'cursor-not-allowed',
              error
                ? 'border-none focus:ring-danger-500 bg-danger-50 ring-2 ring-danger-500 '
                : 'focus:ring-primary-500',
              className
            )}
            aria-describedby={id}
            {...rest}
          />

          {RightIcon && type !== 'password' && (
            <div
              className={clsxm(
                'absolute bottom-0 right-0 h-full',
                'flex justify-center items-center pr-2.5',
                'text-typo-icon text-lg md:text-xl',
                rightIconClassName
              )}
            >
              <RightIcon />
            </div>
          )}

          {type === 'password' && (
            <div
              className={clsxm(
                'absolute bottom-0 right-0 h-full',
                'flex justify-center items-center pr-3',
                'text-typo-secondary text-lg md:text-xl',
                rightIconClassName
              )}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEye /> : <HiEyeOff />}
            </div>
          )}
        </div>

        {suffix && (
          <Typography
            variant='h6'
            font='cavalier'
            color='secondary'
            weight='medium'
            className='flex items-center px-3 bg-typo-outline'
          >
            {suffix}
          </Typography>
        )}
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && (
        <HelperText helperTextClassName={helperTextClassName}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
}
