import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

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
          <Typography
            font='poppins'
            weight='bold'
            variant='t'
            color='label'
            className={clsxm(
              readOnly ? 'text-whites-1000' : 'text-whites-1100',
              'text-[16px] leading-[24px]'
            )}
          >
            {label}
          </Typography>
          {validation?.required && !readOnly && (
            <Typography className='text-danger-600'>*</Typography>
          )}
        </label>
      )}

      <div className='w-full flex relative'>
        <div className={clsxm('absolute w-full h-full pointer-events-none')} />

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
              'w-full h-full pl-2 md:pl-3 pr-10 py-[6px] md:py-2 border-[1px] border-whites-1100 rounded-[5px]',
              [LeftIcon && 'pl-9', RightIcon && 'pr-9'],
              'focus:ring-0 focus:border-primary-600 bg-whites-100',
              'font-primary font-medium text-whites-900 text-md',
              'placeholder:font-primary placeholder:text-whites-900 placeholder:text-sm placeholder:font-medium',
              readOnly &&
                'cursor-not-allowed border-whites-900 bg-whites-400 placeholder:text-whites-900 text-whites-900',
              error ? 'border-danger-600' : 'focus:border-success-600',
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
                'text-whites-1100 font-medium',
                rightIconClassName
              )}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <BsEye className='w-[18px] h-[14px] md:w-[22px] md:h-[18px]' />
              ) : (
                <BsEyeSlash className='w-[18px] h-[14px] md:w-[22px] md:h-[18px]' />
              )}
            </div>
          )}
        </div>
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
