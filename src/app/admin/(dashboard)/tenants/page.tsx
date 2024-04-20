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
import UnstyledLink from '@/components/links/UnstyledLink';
import SEO from '@/components/SEO';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/Typography';
import useServerTable from '@/hooks/useServerTable';
import api from '@/lib/api';
import { getCsv } from '@/lib/csv';
import { buildPaginatedTableURL } from '@/lib/table';
import useAuthStore from '@/store/useAuthStore';
import { PaginatedApiResponse } from '@/types/api';
import { AdminTenants } from '@/types/entities/events';

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
  const baseUrl = '/exploit';
  const { tableState, setTableState } = useServerTable({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminTenants>[] = [
    {
      id: 'id',
      cell: (info) => info.row.index + 1,
      header: 'No',
      size: 18,
    },
    {
      id: 'nisn_ketua',
      header: 'NISN Ketua',
      accessorKey: 'nisn_ketua',
      size: 18,
    },
    {
      id: 'nama_ketua',
      header: 'Nama Ketua',
      accessorKey: 'nama_ketua',
      size: 18,
    },
    {
      id: 'nama_tenant',
      header: 'Nama Tenant',
      accessorKey: 'nama_tenant',
      size: 18,
    },
    {
      id: 'institusi',
      header: 'Institusi',
      accessorKey: 'institusi',
      size: 18,
    },
    {
      id: 'bidang_teknologi',
      header: `Bidang_Teknologi`,
      accessorKey: 'bidang_teknologi',
      size: 18,
    },
    {
      id: 'email_ketua',
      header: 'Email Ketua',
      accessorKey: 'email_ketua',
      size: 18,
    },
    {
      id: 'no_wa_ketua',
      header: 'No WA Ketua',
      accessorKey: 'no_wa_ketua',
      size: 18,
    },
    {
      id: 'kartu_pelajar',
      header: 'Kartu Pelajar',
      cell: (info) => (
        <div className='flex justify-center'>
          <UnstyledLink
            href={`https://ara-its.id/uploads/exploit/${info.row.original.kartu_pelajar}`}
          >
            <Button
              disabled={false}
              className='bg-primary-500 text-white hover:bg-primary-700'
            >
              Kartu Pelajar
            </Button>
          </UnstyledLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'nama_produk',
      header: 'Nama Produk',
      accessorKey: 'nama_produk',
      size: 18,
    },
    {
      id: 'detail_produk',
      header: 'Detail Produk',
      accessorKey: 'detail_produk',
      size: 18,
    },
    {
      id: 'foto_produk',
      header: 'Foto Produk',
      accessorKey: 'foto_produk',
      size: 18,
    },
    {
      id: 'link_gdrive',
      header: 'Link GDrive',
      accessorKey: 'link_gdrive',
      size: 18,
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: baseUrl,
    tableState,
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminTenants[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  const { mutateAsync: fetchPendaftar, isLoading: fetchPendaftarIsLoading } =
    useMutation<AxiosResponse<PaginatedApiResponse<AdminTenants[]>>, Error>(
      () => api.get(baseUrl + '?page=1&perPage=100000')
    );

  const downloadCsv = async () => {
    const response = await fetchPendaftar();
    const fileName =
      user?.permission === 'ADMIN' ? 'Data Pendaftar Tenant' : undefined;

    const data =
      user?.permission === 'ADMIN'
        ? response?.data.data.data.filter((item) => item.nama_tenant)
        : [];

    getCsv(
      data.map((items) => {
        return {
          Nama_Tenant: items?.nama_tenant,
          Institusi: items?.institusi,
          Bidang_Teknologi: items?.bidang_teknologi,
          Nama_Ketua: items?.nama_ketua,
          Nisn_Ketua: items?.nisn_ketua,
          Kartu_Pelajar: items?.kartu_pelajar,
          Email_Ketua: items?.email_ketua,
          No_wa_Ketua: items?.no_wa_ketua,
          Nama_Produk: items?.nama_produk,
          Detail_Produk: items?.detail_produk,
          Foto_Produk: items?.foto_produk,
          Link_Gdrive: items?.link_gdrive,
          Jumlah_Suara: items?.jumlah_suara,
          Created_At: items?.created_at,
          Updated_At: items?.updated_at,
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
                Data Tenants
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600 lg:hidden text-[32px] md:text-start text-center my-4'
              >
                Data Tenants
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
            data={
              queryData?.data.data
                ? queryData?.data.data.filter((item) => {
                    const searchValue = tableStates.globalFilter.toLowerCase();
                    return item?.nama_tenant
                      .toLowerCase()
                      .includes(searchValue);
                  })
                : []
            }
            meta={queryData?.data.meta}
            tableState={tableState}
            setTableState={setTableState}
            withFilter={true}
            className='text-center text-white font-poppins'
            withStatus={false}
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
