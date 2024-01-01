'use client';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/TextArea';
import Typography from '@/components/Typography';

interface TForm {
  no_telepon: string;
  deskripsi_order: string;
  dp: boolean;
}

export default function OrderMerchandise() {
  const methods = useForm<TForm>({
    defaultValues: {
      dp: false,
    },
  });

  return (
    <div className='flex flex-col justify-center gap-8 px-12 lg:px-0'>
      <Typography
        variant='h3'
        font='baloo'
        weight='extrabold'
        className='hidden lg:block w-full lg:text-left'
      >
        Order Merchandise
      </Typography>
      <div className='flex lg:hidden flex-col sm:mx-auto'>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full lg:text-left'
        >
          Order
        </Typography>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full lg:text-left'
        >
          Merchandise
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form className='space-y-12'>
          <div className='space-y-3'>
            <div className='space-y-4'>
              <Input
                id='no_telepon'
                label='Nomor Telepon'
                placeholder='Masukkan nomor telepon'
                validation={{
                  required: 'Nomor Telepon cannot be empty',
                  pattern: {
                    value: /^\d{10,15}$/,
                    message: 'Enter a valid mobile number (10-15 digit number)',
                  },
                }}
              />
              <TextArea
                id='deskripsi_order'
                label='Deskripsi Order'
                placeholder='Masukkan deskripsi order'
              />
            </div>
            <Checkbox
              label='Dp X%'
              name='dp'
              readOnly={false}
              hideError={true}
            />
          </div>
          <div className='space-y-3 flex flex-col w-full items-center lg:items-start'>
            <Button
              type='submit'
              size='lg'
              variant='success'
              className='w-full drop-shadow-md py-[6px] md:py-3'
            >
              <Typography
                font='poppins'
                variant='bt'
                className='text-[11.86px] leading-[20.32px] text-whites-100'
                weight='bold'
              >
                Order Merchandise
              </Typography>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
