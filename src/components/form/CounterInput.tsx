import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxDividerVertical } from 'react-icons/rx';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type CounterInputProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function CounterInput({
  count,
  onIncrement,
  onDecrement,
}: CounterInputProps) {
  return (
    <div className='w-full space-y-2'>
      <Typography
        font='poppins'
        weight='bold'
        variant='t'
        color='label'
        className='text-[16px] leading-[24px] text-whites-1100'
      >
        Jumlah Anggota dalam Tim
      </Typography>
      <div
        className={clsxm(
          'w-full h-full pr-3 py-[6px] md:py-2 border-[1px] border-whites-1100 rounded-[5px]',
          'focus:ring-0 focus:border-success-600 bg-whites-100',
          'font-primary font-medium text-whites-900 text-xs md:text-sm',
          'justify-between flex items-center'
        )}
      >
        <input
          type='text'
          id='people-count'
          className={clsxm(
            'h-5 border-none font-primary font-medium  text-xs md:text-sm',
            'focus:ring-0 bg-whites-100 text-whites-900'
          )}
          value={`${count} orang`}
          readOnly
        />
        <div className='flex items-center'>
          <button
            type='button'
            onClick={onDecrement}
            className='text-whites-1100'
            disabled={count === 0}
          >
            <AiOutlineMinus />
          </button>
          <RxDividerVertical className='text-whites-700' />
          <button
            type='button'
            onClick={onIncrement}
            className='text-whites-1100'
            disabled={count === 2}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
