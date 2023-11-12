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
            'border-primary-300 rounded-sm border-2 focus:ring-0',
            'checked:bg-lightBlue-400 checked:hover:bg-lightBlue-600 checked:focus:bg-lightBlue-400 checked:active:bg-lightBlue-700',
            readOnly &&
              'cursor-not-allowed bg-gray-100 disabled:checked:bg-lightBlue-300',
            error && 'border-danger-400 bg-danger-100'
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Typography
          className={clsx(readOnly && 'cursor-not-allowed')}
          as='label'
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
