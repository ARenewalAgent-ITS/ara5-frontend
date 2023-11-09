import React from 'react';

import Typography from '@/components/Typography';
import { color } from '@/contents/sandbox/color';

export default function ColorPage() {
  return (
    <main>
      <section>
        <Typography
          variant='h5'
          weight='bold'
          className='text-center mt-5 bg-black-500 text-white-500'
        >
          main color
        </Typography>
        <div className='flex justify-center p-10 h-full w-full flex-wrap'>
          {color.map((items, index) => (
            <div className='flex flex-col items-center mr-10 mb-4' key={index}>
              <Typography
                className='flex justify-center'
                color='primary'
                weight='bold'
                variant='h5'
              >
                {items?.colors}
              </Typography>
              <div className='w-full mb-3 flex flex-col items-center'>
                <div
                  className={`${items?.class100} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class200} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class300} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class400} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class500} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class600} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class700} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class800} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class900} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class1000} w-28 h-10 mt-3 rounded-lg`}
                ></div>
                <div
                  className={`${items?.class1100} w-28 h-10 mt-3 rounded-lg`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
