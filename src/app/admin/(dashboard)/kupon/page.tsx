'use client';

import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format, utcToZonedTime } from 'date-fns-tz';
import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';
import SEO from '@/components/SEO';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/Typography';
import useServerTable from '@/hooks/useServerTable';
import { buildPaginatedTableURL } from '@/lib/table';
import config from '@/seo.config';
import { ApiReturn } from '@/types/api';
import { AdminKupon } from '@/types/entities/events';

interface ServerTableState {
  globalFilter: string;
}

interface SetServerTableState {
  (state: React.SetStateAction<ServerTableState>): void;
}

export default withAuth(DashboardAdmin, ['ADMIN']);
function DashboardAdmin() {
  const [tableStates, setTableStates]: [ServerTableState, SetServerTableState] =
    React.useState({
      globalFilter: '',
    });

  const formatDateToWIB = (dateString: string) => {
    const date = new Date(dateString);
    const timeZone = 'Asia/Jakarta';
    const zonedDate = utcToZonedTime(date, timeZone);
    return format(zonedDate, 'yyyy-MM-dd HH:mm:ss');
  };

  const handleSearchInputChange = (value: string) => {
    setTableStates((prev) => ({ ...prev, globalFilter: value }));
  };

  const [selectedStatus, setSelectedStatus] = React.useState<string>('');

  const handleStatusSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
  };

  const baseUrl = '/kupon';
  const { tableState, setTableState } = useServerTable({
    pageSize: 10,
  });

  const columns: ColumnDef<object>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No',
    },
    {
      id: 'kupon',
      accessorKey: 'kupon',
      header: 'Kupon',
    },
    {
      id: 'usage',
      accessorKey: 'usage',
      header: 'Usage',
    },
    {
      id: 'createdAt',
      accessorKey: 'createdAt',
      header: 'Tanggal Dibuat',
      cell: (info) =>
        formatDateToWIB((info.row.original as AdminKupon).createdAt),
    },
    {
      id: 'updatedAt',
      accessorKey: 'updatedAt',
      header: 'Terakhir Digunakan',
      cell: (info) =>
        formatDateToWIB((info.row.original as AdminKupon).updatedAt),
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: baseUrl,
    tableState,
  });

  const { data: queryData } = useQuery<ApiReturn<AdminKupon[]>, Error>([url], {
    keepPreviousData: true,
  });

  const defaultMeta = {
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: queryData?.data?.length || 0,
    prev: null,
    next: null,
  };

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO
          metadata={config}
          title='Dashboard Referral Admin'
          description='Dashboard Referral Admin ARA 5.0'
        />
        <div className='min-h-screen flex flex-col gap-6 pb-20'>
          <div className='flex justify-between md:flex-row flex-col items-center'>
            <div>
              <Typography
                as='h6'
                variant='h6'
                className='text-[24px] text-whites-1100 text-center sm:text-start'
                font='poppins'
                weight='bold'
              >
                ARA 5.0 Dashboard
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600 max-lg:hidden'
              >
                List Kupon
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600 lg:hidden text-[32px] text-center my-4'
              >
                List Kupon
              </Typography>
            </div>
          </div>

          {/* <div className='w-full h-full flex justify-start gap-6 max-md:justify-center max-xl:flex-wrap max-xl:gap-5 mx-auto container'>
            <ArloCard
              as='team-info'
              variant='blue'
              title='Peserta Terdaftar'
              caption={`${queryData?.data?.meta?.total} tim`}
              addInfo={{}}
            />
            <ArloCard
              as='team-info'
              variant='green'
              title='Peserta Terverifikasi'
              caption={`${stats.successCount} tim`}
              addInfo={{ percent: stats.verifiedPercent }}
            />
            <ArloCard
              as='team-info'
              variant='brown'
              title='Peserta Belum Terverifikasi'
              caption={`${stats.pendingCount + stats.failedCount} tim`}
              addInfo={{ percent: stats.pendingPercent }}
            />
          </div> */}

          <ServerTable
            columns={columns}
            data={queryData?.data ?? []}
            meta={defaultMeta}
            tableState={tableState}
            setTableState={setTableState}
            className='text-center text-white font-poppins'
            selectedStatus={selectedStatus}
            handleStatusSelectChange={handleStatusSelectChange}
            searchValue={tableStates.globalFilter}
            onSearchChange={handleSearchInputChange}
            withStatus={false}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}
