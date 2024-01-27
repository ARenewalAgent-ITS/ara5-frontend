'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { BiSpreadsheet } from 'react-icons/bi';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/Typography';
import ArloCard from '@/containers/dashboardPage/ArloCard';
import useServerTable from '@/hooks/useServerTable';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { getCsv } from '@/lib/csv';
import { buildPaginatedTableURL } from '@/lib/table';
import useAuthStore from '@/store/useAuthStore';
import { PaginatedApiResponse } from '@/types/api';
import { AdminCTF } from '@/types/entities/events';

interface ServerTableState {
  globalFilter: string;
}

interface VerificationStats {
  successCount: number;
  failedCount: number;
  verifiedPercent: number;
  failedPercent: number;
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
  const baseUrl = '/ctf';
  const { tableState, setTableState } = useServerTable({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminCTF>[] = [
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
      id: 'createdAt',
      header: 'Created At',
      cell: (info) => {
        const writeUpCtf = info.row.original.write_up_ctf;
        if (writeUpCtf && writeUpCtf.createdAt) {
          const waktuLengkap = writeUpCtf.createdAt.toString();
          const tanggal = waktuLengkap.split('T')[0];
          const Jam = waktuLengkap.split('T')[1].split('.')[0];
          const sliceDecimal = Jam.slice(0);
          const waktuAkhir = `${tanggal} - ${sliceDecimal}`;

          return (
            <Typography
              as='td'
              className={clsxm(
                'truncate whitespace-nowrap py-3 px-10 lg:text-[16px] text-[14px]'
              )}
            >
              {waktuAkhir}
            </Typography>
          );
        } else {
          return (
            <Typography
              as='td'
              className={clsxm(
                'truncate whitespace-nowrap py-3 px-10 lg:text-[16px] text-[14px]'
              )}
            >
              {' '}
            </Typography>
          );
        }
      },
      size: 18,
    },
    {
      id: 'write_up_ctf',
      header: 'Write Up CTF',
      cell: (info) => (
        <div className='flex justify-center'>
          <ButtonLink
            className='bg-primary-500 text-white hover:bg-primary-700'
            href={`https://ara-its.id/uploads/ctf/${info.row.original.write_up_ctf?.write_up}`}
          >
            Write Up CTF
          </ButtonLink>
        </div>
      ),
      size: 18,
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: baseUrl,
    tableState,
  });

  const { data: queryData } = useQuery<PaginatedApiResponse<AdminCTF[]>, Error>(
    [url],
    {
      keepPreviousData: true,
    }
  );

  const { mutateAsync: fetchPendaftar, isLoading: fetchPendaftarIsLoading } =
    useMutation<AxiosResponse<PaginatedApiResponse<AdminCTF[]>>, Error>(() =>
      api.get(baseUrl + '?page=1&perPage=100000')
    );

  const downloadCsv = async () => {
    const response = await fetchPendaftar();
    const fileName =
      user?.permission === 'ADMIN' ? 'Data Pendaftar CTF' : undefined;

    const data =
      user?.permission === 'ADMIN'
        ? response?.data.data.data.filter((item) => item.team_name) ?? []
        : response?.data.data.data.filter((item) => item.team_name) ?? [];

    getCsv(
      data.map((items) => {
        return {
          Nama_Team: items?.team_name,
          Write_Up: items?.write_up_ctf?.write_up,
        };
      }),
      fileName
    );
  };

  const getVerificationStats = (data: AdminCTF[]): VerificationStats => {
    const total = data.length;
    const successCount = data.filter(
      (item) => item.write_up_ctf !== null
    ).length;
    const failedCount = data.filter(
      (item) => item.write_up_ctf === null
    ).length;

    const verifiedPercent = Math.floor((successCount / total) * 100 || 0);
    const failedPercent = Math.floor((failedCount / total) * 100 || 0);
    return {
      successCount,
      failedCount,
      verifiedPercent,
      failedPercent,
    };
  };

  const stats: VerificationStats = getVerificationStats(
    queryData?.data?.data ?? []
  );

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO
          title='Dashboard CTF Admin'
          description='Dashboard CTF Admin ARA 5.0 | ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
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
                Data Write Up
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600 lg:hidden text-[32px] md:text-start text-center my-4'
              >
                Data Write Up
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
              addInfo={{}}
            />
            <ArloCard
              as='team-info'
              variant='green'
              title='Data WriteUp Peserta'
              caption={`${stats.successCount} tim`}
              addInfo={{ percent: stats.verifiedPercent }}
            />
            <ArloCard
              as='team-info'
              variant='brown'
              title='Data WriteUp Null'
              caption={`${stats.failedCount} tim`}
              addInfo={{ percent: stats.failedPercent }}
            />
          </div>

          <ServerTable
            columns={columns}
            data={
              queryData?.data.data
                ? queryData?.data.data.filter((item) => {
                    const searchValue = tableStates.globalFilter.toLowerCase();
                    return item?.team_name.toLowerCase().includes(searchValue);
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
