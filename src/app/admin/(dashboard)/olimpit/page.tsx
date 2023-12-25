'use client';

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
import Tag from '@/components/tag/Tag';
import { showToast, WARNING_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import ArloCard from '@/containers/dashboardPage/ArloCard';
import useServerTable from '@/hooks/useServerTable';
import api from '@/lib/api';
import { getCsv } from '@/lib/csv';
import { buildPaginatedTableURL } from '@/lib/table';
import useAuthStore from '@/store/useAuthStore';
import { PaginatedApiResponse } from '@/types/api';
import { AdminOlimp } from '@/types/entities/events';

export default withAuth(DashboardAdmin, ['authed']);
function DashboardAdmin() {
  const { user } = useAuthStore();
  const baseUrl = '/olim';
  const { tableState, setTableState } = useServerTable({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminOlimp>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No',
      size: 18,
    },
    {
      id: 'team_name',
      accessorKey: 'team_name',
      header: 'Nama Tim',
      size: 18,
    },
    {
      id: 'asal_institusi',
      accessorKey: 'asal_institusi',
      header: 'Institusi',
      size: 18,
    },
    {
      id: 'no_wa_ketua',
      accessorKey: 'no_wa_ketua',
      header: 'No WhatsApp',
      size: 18,
    },
    {
      id: 'email_ketua',
      accessorKey: 'email_ketua',
      header: 'Email',
      size: 18,
    },
    {
      id: 'nama_ketua',
      accessorKey: 'nama_ketua',
      header: 'Ketua',
      size: 18,
    },
    {
      id: 'nama_anggota1',
      accessorKey: 'nama_anggota1',
      header: 'Anggota 1',
      size: 18,
    },
    {
      id: 'nama_anggota2',
      accessorKey: 'nama_anggota2',
      header: 'Anggota 2',
      size: 18,
    },
    {
      id: 'pembayaran_id',
      accessorKey: 'pembayaran_id',
      header: 'Pembayaran',
      size: 18,
    },
    {
      id: 'status',
      header: 'Status',
      cell: (info) => (
        <Tag
          size='small'
          color={
            info.row.original.status === 5
              ? 'warning'
              : info.row.original.status === 4
              ? 'warning'
              : info.row.original.status === 3
              ? 'danger'
              : info.row.original.status === 2
              ? 'warning'
              : 'success'
          }
        >
          {info.row.original.status === 5
            ? 'Awaiting Payment'
            : info.row.original.status === 4
            ? 'Awaiting Verification'
            : info.row.original.status === 3
            ? 'Gagal'
            : info.row.original.status === 2
            ? 'Revisi'
            : 'Success'}
        </Tag>
      ),
      size: 18,
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: baseUrl,
    tableState,
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminOlimp[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  const { mutateAsync: fetchPendaftar, isLoading: fetchPendaftarIsLoading } =
    useMutation<AxiosResponse<PaginatedApiResponse<AdminOlimp[]>>, Error>(() =>
      api.get(baseUrl)
    );

  const downloadCsv = async () => {
    const response = await fetchPendaftar();
    const fileName =
      user?.permission === 'all' ? 'Data Pendaftar Olimpiade IT' : undefined;

    const data =
      user?.permission === 'all'
        ? response?.data.data.data.filter(
            (item) => item.status === user?.team_name
          ) ?? []
        : response?.data.data.data.filter((item) => item.status) ?? [];

    if (data.length === 0)
      return showToast('Tidak ada Pendaftar', WARNING_TOAST);

    getCsv(
      data.map((items) => {
        return {
          id: items.id,
          nama_team: items.team_name,
          'Team Fixed': items.status ? items.event : 'Olimpiade IT',
        };
      }),
      fileName
    );
  };

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO title='Dashboard Admin Olimpiade IT' />
        <div className='min-h-screen flex flex-col gap-6 pb-20'>
          <div className='flex justify-between md:flex-row flex-col items-center'>
            <div>
              <Typography
                as='h6'
                variant='h6'
                className='text-[24px] text-whites-1100'
                font='poppins'
                weight='bold'
              >
                ARA 5.0 Dashboard
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600'
              >
                List Tim Olimpiade IT
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

          <div className='w-full h-full flex justify-start gap-6 max-md:justify-center max-xl:flex-wrap max-xl:gap-5 mx-auto container'>
            <ArloCard
              as='team-info'
              variant='blue'
              title='Peserta Terdaftar'
              caption={`${queryData?.data?.meta?.total} tim`}
              addInfo={{ percent: 75 }}
            />
            <ArloCard
              as='team-info'
              variant='green'
              title='Peserta Terverifikasi'
              caption='35 tim'
              addInfo={{ percent: 75 }}
            />
            <ArloCard
              as='team-info'
              variant='brown'
              title='Peserta Belum Terverifikasi  '
              caption='35 tim'
              addInfo={{ percent: 75 }}
            />
            {user?.permission === 'all' && (
              <>
                <ArloCard
                  as='team-info'
                  variant='blue'
                  title='Peserta Terdaftar'
                  caption='35 tim'
                  addInfo={{ percent: 75 }}
                />
                <ArloCard
                  as='team-info'
                  variant='green'
                  title='Peserta Terverifikasi'
                  caption='35 tim'
                  addInfo={{ percent: 75 }}
                />
                <ArloCard
                  as='team-info'
                  variant='brown'
                  title='Peserta Belum Terverifikasi  '
                  caption='35 tim'
                  addInfo={{ percent: 75 }}
                />
              </>
            )}
          </div>

          <ServerTable
            columns={columns}
            data={queryData?.data.data ?? []}
            meta={queryData?.data.meta}
            tableState={tableState}
            setTableState={setTableState}
            withFilter={true}
            className='text-center text-white font-poppins'
          />
        </div>
      </section>
    </DashboardLayout>
  );
}
