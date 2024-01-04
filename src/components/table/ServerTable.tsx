import {
  ColumnDef,
  getCoreRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { FiSearch, FiXCircle } from 'react-icons/fi';

import PaginationControl from '@/components/table/PaginationControl';
import TBody from '@/components/table/TBody';
import THead from '@/components/table/THead';
import TOption from '@/components/table/TOption';
import clsxm from '@/lib/clsxm';
import { PaginatedApiResponse } from '@/types/api';

type ServerTableState = {
  pagination: PaginationState;
  sorting: SortingState;
  globalFilter: string;
};

type SetServerTableState = {
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
};

type ServerTableProps<T extends object> = {
  columns: ColumnDef<T>[];
  data: T[];
  header?: React.ReactNode;
  isLoading?: boolean;
  meta: PaginatedApiResponse<T>['data']['meta'] | undefined;
  tableState: ServerTableState;
  setTableState: SetServerTableState;
  omitSort?: boolean;
  withFilter?: boolean;
  selectedStatus: string;
  handleStatusSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  withStatus?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function ServerTable<T extends object>({
  className,
  columns,
  data,
  header: Header,
  meta,
  isLoading,
  tableState,
  setTableState,
  omitSort = false,
  withFilter = false,
  selectedStatus,
  handleStatusSelectChange,
  searchValue,
  onSearchChange,
  withStatus = true,
  ...rest
}: ServerTableProps<T>) {
  // const [globalFilter, setGlobalFilter] = React.useState('');
  const columnResizeMode = 'onEnd';

  const handleClearFilter = () => {
    table.setGlobalFilter('');
    onSearchChange('');
  };

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    pageCount: meta?.total,
    state: {
      ...tableState,
    },
    onGlobalFilterChange: setTableState.setGlobalFilter,
    onPaginationChange: setTableState.setPagination,
    onSortingChange: setTableState.setSorting,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  return (
    <div className={clsxm('flex flex-col', className)} {...rest}>
      <div className='flex flex-col items-stretch gap-3 xl:flex-row xl:justify-between '>
        {withFilter && (
          <div className={clsxm('relative mt-1 self-start', className)}>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <FiSearch className='text-[1.125rem] text-black-500' />
            </div>
            <input
              type='text'
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder='Cari Tim'
              className={clsxm(
                'block rounded-lg pl-9 text-black-500 pr-20 text-base shadow-sm transition duration-100',
                'border-typo-primary focus:border-typo-primary focus:ring-0',
                'placeholder:text-typo-primary',
                'caret-warmPaleTaupe-900'
              )}
            />
            {searchValue !== '' && (
              <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <button
                  type='button'
                  onClick={handleClearFilter}
                  className='p-1'
                >
                  <FiXCircle className='text-xl text-black-400' />
                </button>
              </div>
            )}
          </div>
        )}
        <div className='flex items-center gap-3 max-sm:flex-col max-sm:items-start'>
          {Header}
          {withStatus ? (
            <div>
              <select
                value={selectedStatus}
                onChange={handleStatusSelectChange}
                className='text-whites-900 rounded-md'
              >
                <option value=''>All</option>
                <option value='SUCCESS'>Success</option>
                <option value='FAILED'>Failed</option>
                <option value='AWAITING VERIFICATION'>
                  Awaiting Verification
                </option>
              </select>
            </div>
          ) : null}
          <TOption
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100, 500, 1000, 2000, 5000].map((page) => (
              <option key={page} value={page}>
                {page} Entries
              </option>
            ))}
          </TOption>
        </div>
      </div>
      <div className='-my-2 -mx-4 mt-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block py-2 align-middle md:px-6 lg:px-8 overflow-x-auto w-auto'>
          <div className='overflow-hidden shadow ring-1 ring-black-500 ring-opacity-5 rounded-xl'>
            <table className='min-w-full divide-y divide-primary-100'>
              <colgroup>
                {table.getAllColumns().map((column) => (
                  <col
                    key={column.id}
                    span={1}
                    style={{
                      width: column.columnDef.size
                        ? column.columnDef.size
                        : 'auto',
                    }}
                  />
                ))}
              </colgroup>
              <THead
                table={table}
                omitSort={omitSort}
                className='bg-primary-500 text-white'
              />
              <TBody table={table} isLoading={isLoading} />
            </table>
          </div>
        </div>
      </div>
      <PaginationControl table={table} data={data} className='mt-4' />
    </div>
  );
}
