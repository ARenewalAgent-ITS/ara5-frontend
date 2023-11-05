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
          <Typography variant='bt' font='poppins' color='primary'>
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-danger-500'>*</Typography>
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
            'w-full h-full px-3 py-3 border-none',
            'ring-2 ring-typo-outline',
            'bg-typo-white hover:bg-typo-surface',
            'font-secondary text-typo-primary text-[22px]',
            'placeholder:font-secondary placeholder:text-typo-secondary',
            readOnly && 'cursor-not-allowed',
            error
              ? 'border-none focus:ring-danger-500 bg-danger-50 ring-2 ring-danger-500 '
              : 'focus:ring-primary-500 focus:ring-2',
            className
          )}
          aria-describedby={id}
          {...rest}
        />

        <Typography
          variant='bt'
          color='secondary'
          font='baloo'
          className='absolute right-6 bottom-2.5'
        >
          {value.length}/{maxLength}
        </Typography>
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}
