import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export type CheckboxProps = {
  // input label
  label?: string;
  name: string;
  // optional condition
  value?: string | number;
  // informasi tambahan
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  // validasii
  validation?: RegisterOptions;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

export default function Checkbox({
  label,
  name,
  value,
  placeholder = '',
  helperText,
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div>
      <div className='flex items-start gap-2'>
        <input
          {...register(name, validation)}
          {...rest}
          type='checkbox'
          name={name}
          id={`${name}_${value}`}
          value={value}
          disabled={readOnly}
          className={clsxm(
            'mt-[0.25em]',
            'shrink-0',
            'rounded-sm border-1 border-whites-1100 focus:ring-0 focus:ring-whites-100',
            'checked:bg-success-600 checked:hover:bg-success-700 checked:focus:bg-success-500 checked:active:bg-success-700',
            readOnly &&
              'cursor-not-allowed bg-gray-100 disabled:checked:bg-success-300',
            error && ''
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Typography
          className={clsx(
            readOnly && 'cursor-not-allowed',
            'text-[12px] leading-[24px]'
          )}
          weight='medium'
          variant='c12'
          font='poppins'
          htmlFor={`${name}_${value}`}
        >
          {label}
        </Typography>
      </div>
      <div className='mt-1'>
        {!(!hideError && error) && helperText && <p>{helperText}</p>}
        {!hideError && error && (
          <Typography variant='bt'>{error?.message?.toString()}</Typography>
        )}
      </div>
    </div>
  );
}
