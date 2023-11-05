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
          <Typography font='poppins' variant='bt' color='label'>
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
          'w-full px-4 py-4 truncate border-none',
          'ring-2 ring-typo-outline',
          'bg-typo-white font-secondary text-typo-primary text-[22px]',
          readOnly && 'cursor-not-allowed',
          error
            ? 'focus:ring-danger-500 bg-danger-50 focus:ring-2 ring-danger-500'
            : 'focus:ring-primary-500 focus:ring-2',
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
