'use client';
// issue link
import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { BiSpreadsheet } from 'react-icons/bi';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';
import SEO from '@/components/SEO';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/Typography';
import useServerTable from '@/hooks/useServerTable';
import api from '@/lib/api';
import { getCsv } from '@/lib/csv';
import { buildPaginatedTableURL } from '@/lib/table';
import useAuthStore from '@/store/useAuthStore';
import { PaginatedApiResponse } from '@/types/api';
import { AdminVisitors } from '@/types/entities/events';

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

  const { user } = useAuthStore();
  const baseUrl = '/peserta-exploit';
  const { tableState, setTableState } = useServerTable({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminVisitors>[] = [
    {
      id: 'id',
      cell: (info) => info.row.index + 1,
      header: 'No',
      size: 18,
    },
    {
      id: 'nama',
      header: 'Nama',
      accessorKey: 'nama',
      size: 18,
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      size: 18,
    },
    {
      id: 'no_wa',
      header: 'Nomor WA',
      accessorKey: 'no_wa',
      size: 18,
    },
    {
      id: 'institusi',
      header: 'Institusi',
      accessorKey: 'institusi',
      size: 18,
    },
    {
      id: 'token',
      accessorKey: 'token["token"]',
      cell: (info) => {
        return (
          <Typography variant='p' as='p'>
            {info.row.original.token.token}
          </Typography>
        );
      },
      header: 'Token',
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: baseUrl,
    tableState,
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminVisitors[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  // console.log(queryData?.data[0].token.token);

  const { mutateAsync: fetchPendaftar, isLoading: fetchPendaftarIsLoading } =
    useMutation<AxiosResponse<PaginatedApiResponse<AdminVisitors[]>>, Error>(
      () => api.get(baseUrl + '?page=1&perPage=100000')
    );

  const downloadCsv = async () => {
    const response = await fetchPendaftar();

    const fileName =
      user?.permission === 'ADMIN' ? 'Data Pendaftar Visitor' : undefined;

    const data =
      user?.permission === 'ADMIN'
        ? response?.data.data.data.filter((item) => item.nama)
        : [];

    getCsv(
      data.map((items) => {
        return {
          nama: items.nama,
          email: items.email,
          no_wa: items.no_wa,
          token: items.token.token,
        };
      }),
      fileName
    );
  };

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO
          title='Dashboard Pendaftar Tenants'
          description='Dashboard Pendaftar Tenants ARA 5.0 | ARA ITS (A Renewal Agent ITS) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
        />
        <div className='min-h-screen flex flex-col gap-6 pb-20'>
          <div className='flex justify-between md:flex-row flex-col items-center'>
            <div className='flex flex-col'>
              <Typography
                as='h6'
                variant='h6'
                className='text-[24px] text-center md:text-start text-whites-1100'
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
                Data Visitors
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600 lg:hidden text-[32px] md:text-start text-center my-4'
              >
                Data Visitors
              </Typography>
            </div>
            <div className='flex gap-x-4'>
              <Button
                variant='primary'
                className='disabled:opacity-20'
                leftIcon={BiSpreadsheet}
                isLoading={fetchPendaftarIsLoading}
                onClick={downloadCsv}
              >
                <Typography
                  font='poppins'
                  className='text-[18px]'
                  weight='bold'
                  color='white'
                >
                  Export as CSV
                </Typography>
              </Button>
            </div>
          </div>

          <ServerTable
            columns={columns}
            //@ts-expect-error - type error gajelas
            data={queryData?.data || []}
            meta={queryData?.data.meta}
            tableState={tableState}
            setTableState={setTableState}
            className='text-center text-white font-poppins'
            selectedStatus={selectedStatus}
            handleStatusSelectChange={handleStatusSelectChange}
            searchValue={tableStates.globalFilter}
            onSearchChange={handleSearchInputChange}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}
