import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import ErrorMessage from '@/components/form/ErrorMessage';
import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export type TextAreaProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'textarea'>;

export default function TextArea({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  maxLength = 1023,
  readOnly = false,
  ...rest
}: TextAreaProps) {
  const [value, setValue] = React.useState('');

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  const textArea = register(id, validation);

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    textArea.onChange(e);
    setValue(e.currentTarget.value);
  };

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
            <Typography className='text-danger-600'>*</Typography>
          )}
        </label>
      )}

      <div className='relative'>
        <textarea
          {...textArea}
          id={id}
          name={id}
          readOnly={readOnly}
          disabled={readOnly}
          maxLength={maxLength}
          onChange={handleChange}
          className={clsxm(
            'w-full h-full pl-2 md:pl-3 pr-10 py-[6px] md:py-2 border-[1px] border-whites-1100 rounded-[5px]',
            'focus:ring-0 focus:border-success-600 bg-whites-100',
            'font-primary font-medium text-whites-900 text-xs md:text-sm',
            'placeholder:font-primary placeholder:text-whites-900 placeholder:text-xs md:placeholder:text-sm placeholder:font-medium',
            readOnly && 'cursor-not-allowed',
            error ? 'border-danger-600' : 'focus:border-success-600',
            className
          )}
          aria-describedby={id}
          {...rest}
        />

        <Typography
          font='poppins'
          weight='regular'
          variant='c12'
          color='label'
          className='absolute right-6 bottom-2.5 hidden sm:block text-whites-1100'
        >
          {value.length}/{maxLength}
        </Typography>
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}
