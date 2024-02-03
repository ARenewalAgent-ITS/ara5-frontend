import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Typography from '@/components/Typography';

interface BerkasSubmitProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export default function BerkasSubmit<T extends FieldValues>({
  methods,
  onSubmit,
}: BerkasSubmitProps<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Button
          type='submit'
          className='px-6 md:px-10 py-2 mt-5 md:mt-0 rounded-lg'
        >
          <Typography
            variant='bt'
            weight='bold'
            font='poppins'
            className='text-whites-100 text-[14px]'
          >
            Upload
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
