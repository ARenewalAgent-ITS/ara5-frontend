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
import {
  DANGER_TOAST,
  showToast,
  SUCCESS_TOAST,
  WARNING_TOAST,
} from '@/components/Toast';
import Typography from '@/components/Typography';
import ArloCard from '@/containers/dashboardPage/ArloCard';
import useServerTable from '@/hooks/useServerTable';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { getCsv } from '@/lib/csv';
import { buildPaginatedTableURL } from '@/lib/table';
import useAuthStore from '@/store/useAuthStore';
import { PaginatedApiResponse } from '@/types/api';
import { AdminOlimp } from '@/types/entities/events';

interface VerificationStats {
  successCount: number;
  pendingCount: number;
  failedCount: number;
  verifiedPercent: number;
  pendingPercent: number;
}

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

  const getStatusNumber = (status: string): number => {
    switch (status) {
      case 'SUCCESS':
        return 1;
      case 'FAILED':
        return 2;
      case 'AWAITING VERIFICATION':
        return 3;
      default:
        return 3;
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const statusNumber = getStatusNumber(newStatus);
      await api.patch(`/pembayaran/status/${id}`, {
        status: statusNumber,
      });

      showToast('Berhasil memperbarui', SUCCESS_TOAST);

      queryData?.data.data;
    } catch (error) {
      showToast('Gagal memperbarui', DANGER_TOAST);
      throw new Error();
    }
  };

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
      id: 'event',
      accessorKey: 'event',
      header: 'Events',
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
      id: 'ktp_ketua',
      header: 'KTP Ketua',
      cell: (info) => (
        <div className='flex justify-center'>
          <ButtonLink
            className='bg-primary-500 text-white hover:bg-primary-700'
            href={`https://ara-its.id/uploads/olim/${info.row.original.ktp_ketua}`}
          >
            KTP Ketua
          </ButtonLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'nama_anggota1',
      accessorKey: 'nama_anggota1',
      header: 'Anggota 1',
      size: 18,
    },
    {
      id: 'ktp_anggota1',
      header: 'KTP Anggota 1',
      cell: (info) => (
        <div className='flex justify-center'>
          <ButtonLink
            className='bg-primary-500 text-white hover:bg-primary-700'
            href={`https://ara-its.id/uploads/olim/${info.row.original.ktp_anggota1}`}
          >
            KTP Anggota 1
          </ButtonLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'bukti_pembayaran',
      header: 'Pembayaran',
      cell: (info) => (
        <div className='flex justify-center'>
          <ButtonLink
            className='bg-primary-500 text-white hover:bg-primary-700'
            href={`https://ara-its.id/uploads/pembayaran/${info.row.original.pembayaran?.bukti_pembayaran}`}
          >
            Bukti Pembayaran
          </ButtonLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'bukti_follow',
      header: 'Bukti Follow',
      cell: (info) => (
        <div className='flex justify-center'>
          <ButtonLink
            className='bg-primary-500 text-white hover:bg-primary-700'
            href={`https://ara-its.id/uploads/persyaratan/${info.row.original.bukti_follow}`}
          >
            Bukti Follow
          </ButtonLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'bukti_repost',
      header: 'Bukti Repost',
      cell: (info) => (
        <div className='flex justify-center'>
          <ButtonLink
            className='bg-primary-500 text-white hover:bg-primary-700'
            href={`https://ara-its.id/uploads/persyaratan/${info.row.original.bukti_repost}`}
          >
            Bukti Repost
          </ButtonLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'kupon_id',
      header: 'Kode Referal',
      cell: (info) => (
        <Typography
          as='td'
          className={clsxm(
            'truncate whitespace-nowrap py-3 px-10 lg:text-[16px] text-[14px]'
          )}
        >
          {info.row.original.kupon?.kupon}
        </Typography>
      ),
      size: 18,
    },
    {
      id: 'status',
      header: 'Status',
      cell: (info) => (
        <div className='flex justify-center flex-col items-center'>
          <select
            value={info.row.original.pembayaran?.status.status}
            className={`flex flex-col cursor-pointer rounded-lg w-[150px] text-white
              ${
                info.row.original.pembayaran?.status.status ===
                'AWAITING VERIFICATION'
                  ? 'bg-yellow-500'
                  : info.row.original.pembayaran?.status.status === 'FAILED'
                  ? 'bg-red-600'
                  : 'bg-success-600'
              }
              `}
            onChange={(e) =>
              handleStatusChange(
                info.row.original.pembayaran_id,
                e.target.value
              )
            }
          >
            <option value='SUCCESS' className='bg-white text-black-500'>
              Success
            </option>
            <option value='FAILED' className='bg-white text-black-500'>
              Gagal
            </option>
            <option
              value='AWAITING VERIFICATION'
              className='bg-white text-black-500'
            >
              Awaiting Verification
            </option>
          </select>
        </div>
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
      api.get(baseUrl + '?page=1&perPage=100000')
    );

  const downloadCsv = async () => {
    const response = await fetchPendaftar();
    const fileName =
      user?.permission === 'ADMIN' ? 'Data Pendaftar Olimpiade IT' : undefined;

    const data =
      user?.permission === 'ADMIN'
        ? response?.data.data.data.filter(
            (item) => item.pembayaran?.status.status === user?.[0]?.team_name
          ) ?? []
        : response?.data.data.data.filter(
            (item) => item.pembayaran?.status.status
          ) ?? [];

    if (data.length === 0)
      return showToast('Tidak ada Pendaftar', WARNING_TOAST);

    getCsv(
      data.map((items) => {
        const tanggalDaftar = new Date(items?.createdAt);
        const formatTanggalDaftar = tanggalDaftar.toString().split('T')[0];
        return {
          // id: items?.id,
          Nama_Team: items?.team_name,
          // Account_Id: items?.account_id,
          Provinsi: items?.team_provinsi_id,
          Kabupaten: items?.team_kabupaten_id,
          Events: items?.event,
          Asal_Institusi: items?.asal_institusi,
          No_wa_ketua: items?.no_wa_ketua,
          Email_ketua: items?.email_ketua,
          Nama_ketua: items?.nama_ketua,
          KTP_ketua: items?.ktp_ketua,
          Anggota1: items?.nama_anggota1,
          Ktp_anggota1: items?.ktp_anggota1,
          Anggota2: items?.nama_anggota2,
          Ktp_anggota2: items?.ktp_anggota2,
          // Pembayaran_ID: items?.pembayaran_id,
          Kupon: items?.kupon.kupon,
          Bukti_Follow: items?.bukti_follow,
          Bukti_Repost: items?.bukti_repost,
          Write_UP_CTF: items?.Write_up_ctf,
          Bukti_Pembayaran: items?.pembayaran?.bukti_pembayaran,
          List_Bank: items?.pembayaran?.list_bank?.bank,
          Tanggal_Daftar: formatTanggalDaftar,
          Status_Pembayaran: items?.pembayaran?.status?.status,
        };
      }),
      fileName
    );
  };

  const getVerificationStats = (data: AdminOlimp[]): VerificationStats => {
    const total = data.length;
    const successCount = data.filter(
      (item) => item.pembayaran?.status.status === 'SUCCESS'
    ).length;
    const pendingCount = data.filter(
      (item) => item.pembayaran?.status.status === 'AWAITING VERIFICATION'
    ).length;
    const failedCount = data.filter(
      (item) => item.pembayaran?.status.status === 'FAILED'
    ).length;

    const verifiedPercent = Math.floor((successCount / total) * 100 || 0);
    const pendingPercent = Math.floor(
      ((pendingCount + failedCount) / total) * 100 || 0
    );

    return {
      successCount,
      pendingCount,
      failedCount,
      verifiedPercent,
      pendingPercent,
    };
  };

  const stats: VerificationStats = getVerificationStats(
    queryData?.data?.data ?? []
  );

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO
          title='Dashboard OlimpIT Admin'
          description='Dashboard Olimpiade IT Admin ARA 5.0 | ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
        />
        <div className='min-h-screen flex flex-col gap-6 pb-20'>
          <div className='flex justify-between md:flex-row flex-col items-center'>
            <>
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
                List Tim Olimpiade IT
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600 lg:hidden text-[32px] text-center my-4'
              >
                List Tim Olimpiade IT
              </Typography>
            </>
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
          </div>

          <ServerTable
            columns={columns}
            data={
              queryData?.data.data
                ? queryData?.data.data.filter((item) => {
                    if (
                      selectedStatus &&
                      item?.pembayaran?.status?.status !== selectedStatus
                    ) {
                      return false;
                    }
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
