import { flexRender, RowData, Table } from '@tanstack/react-table';
import * as React from 'react';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type TBodyProps<T extends RowData> = {
  table: Table<T>;
  isLoading?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TBody<T extends RowData>({
  className,
  isLoading,
  table,
  ...rest
}: TBodyProps<T>) {
  return (
    <tbody className={clsxm(className)} {...rest}>
      {isLoading ? (
        <tr>
          <td
            className='truncate whitespace-nowrap py-4 px-3 col-span-full text-typo-icon text-center'
            colSpan={table.getAllColumns().length}
          >
            Loading...
          </td>
        </tr>
      ) : table.getRowModel().rows.length == 0 ? (
        <tr>
          <td
            className='truncate whitespace-nowrap py-4 px-3 col-span-full text-typo-icon text-center'
            colSpan={table.getAllColumns().length}
          >
            Infokan Data
          </td>
        </tr>
      ) : (
        table.getRowModel().rows.map((row, index) => (
          <tr
            key={row.id}
            className={clsxm(
              index % 2 === 0 ? 'bg-typo-white' : 'bg-primary-100'
            )}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <Typography
                  key={cell.id}
                  as='td'
                  title={cell.getValue() as string}
                  className={clsxm(
                    'truncate whitespace-nowrap py-3 px-10 lg:text-[16px] text-[14px]',
                    'border-2 border-primary-500'
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Typography>
              );
            })}
          </tr>
        ))
      )}
    </tbody>
  );
}
