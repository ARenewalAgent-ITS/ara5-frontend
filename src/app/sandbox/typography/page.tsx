import React from 'react';

import Typography from '@/components/Typography';
import { dataBaloo, dataPoppins } from '@/contents/sandbox/typography';

export default function TypographyPage() {
  return (
    <>
      {/* POPPINS STYLE */}
      <div>
        <div>
          <Typography
            variant='h5'
            color='white'
            className='font-poppins flex items-center justify-center bg-sub-lightGrey-300 text-typo-primary py-12'
            weight='bold'
          >
            Poppins
          </Typography>
        </div>
        <div className='flex items-center justify-center'>
          <table className='min-w-full divide-y divide-gray-200 table-fixed '>
            <thead className='bg-black-500'>
              <tr>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' className='text-white font-poppins'>
                    Style Name
                  </Typography>
                </th>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' className='text-white font-poppins'>
                    Font Size
                  </Typography>
                </th>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' className='text-white font-poppins'>
                    Line Height
                  </Typography>
                </th>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' className='text-white font-poppins'>
                    Sample
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-black-500 bg-divide-gray-700'>
              {dataPoppins.map((items) => (
                <tr className='bg-black-400' key={items?.style}>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap bg-text-white'>
                    <Typography
                      color='white'
                      className='font-poppins'
                      variant={`${items?.style}`}
                    >
                      {items?.style}
                    </Typography>
                  </td>
                  <td className='max-w-sm p-4 overflow-hidden text-base font-normal text-white truncate xl:max-w-xs'>
                    <Typography
                      color='white'
                      className='font-poppins'
                      variant={`${items?.style}`}
                    >
                      {items?.size}
                    </Typography>
                  </td>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap bg-text-white'>
                    <Typography
                      color='white'
                      className='font-poppins'
                      variant={`${items?.style}`}
                    >
                      {items?.height}
                    </Typography>
                  </td>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap bg-text-white'>
                    <Typography
                      color='white'
                      className='font-poppins'
                      variant={`${items?.style}`}
                    >
                      {items?.sample}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BALOO STYLE */}
      <div>
        <div>
          <Typography
            font='baloo'
            variant='h3'
            color='white'
            className='flex items-center justify-center bg-sub-lightGrey-300 text-typo-primary py-12'
            weight='bold'
          >
            Baloo
          </Typography>
        </div>
        <div className='flex items-center justify-center'>
          <table className='min-w-full divide-y divide-gray-200 table-fixed bg-divide-gray-600'>
            <thead className='bg-black-500'>
              <tr>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' font='baloo' className='text-white'>
                    Style Name
                  </Typography>
                </th>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' font='baloo' className='text-white'>
                    Font Size
                  </Typography>
                </th>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' font='baloo' className='text-white'>
                    Line Height
                  </Typography>
                </th>
                <th
                  scope='col'
                  className='p-4 text-xs font-medium text-left text-white uppercase'
                >
                  <Typography variant='h5' font='baloo' className='text-white'>
                    Sample
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-black-500 bg-divide-gray-700'>
              {dataBaloo.map((items) => (
                <tr className='bg-black-400' key={items?.style}>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap bg-text-white'>
                    <Typography
                      font='baloo'
                      color='white'
                      variant={`${items?.style}`}
                    >
                      {items?.style}
                    </Typography>
                  </td>
                  <td className='max-w-sm p-4 overflow-hidden text-base font-normal text-white truncate xl:max-w-xs'>
                    <Typography
                      font='baloo'
                      color='white'
                      variant={`${items?.style}`}
                    >
                      {items?.size}
                    </Typography>
                  </td>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap bg-text-white'>
                    <Typography
                      font='baloo'
                      color='white'
                      variant={`${items?.style}`}
                    >
                      {items?.height}
                    </Typography>
                  </td>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap bg-text-white'>
                    <Typography
                      font='baloo'
                      color='white'
                      variant={`${items?.style}`}
                    >
                      {items?.sample}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
