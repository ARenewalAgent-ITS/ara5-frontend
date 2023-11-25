import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import ErrorMessage from '@/components/form/ErrorMessage';
import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export type SelectInputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  readOnly?: boolean;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  readOnly = false,
  defaultValue = '',
  placeholder = '',
  children,
  ...rest
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = get(errors, id);
  const value = watch(id);

  return (
    <div className='w-full space-y-1.5'>
      {label && (
        <label htmlFor={id} className='flex space-x-1'>
          <Typography
            font='poppins'
            weight='bold'
            variant='t'
            color='label'
            className='text-[16px] leading-[24px] text-whites-1100'
          >
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-danger-500'>*</Typography>
          )}
        </label>
      )}

      <select
        {...register(id, validation)}
        id={id}
        name={id}
        defaultValue={defaultValue}
        disabled={readOnly}
        className={clsxm(
          'w-full h-full md:pl-3 pr-10 py-[6px] md:py-2 border-[1px] border-whites-1100 rounded-[5px]',
          'focus:ring-0 focus:border-success-600 bg-whites-100',
          'font-primary font-medium text-whites-900 text-xs md:text-sm',
          'placeholder:font-primary placeholder:text-whites-900 placeholder:text-xs md:placeholder:text-sm placeholder:font-medium',
          readOnly &&
            'cursor-not-allowed border-whites-800 placeholder:text-whites-800 text-whites-800',
          error ? 'border-danger-600' : 'focus:border-success-600',
          !value && !readOnly && 'text-typo-secondary',
          className
        )}
        aria-describedby={id}
        {...rest}
      >
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}
