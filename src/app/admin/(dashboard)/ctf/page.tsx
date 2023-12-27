'use client';

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
import { getCsv } from '@/lib/csv';
import { buildPaginatedTableURL } from '@/lib/table';
import useAuthStore from '@/store/useAuthStore';
import { PaginatedApiResponse } from '@/types/api';
import { AdminCTF } from '@/types/entities/events';

interface VerificationStats {
  successCount: number;
  pendingCount: number;
  failedCount: number;
  verifiedPercent: number;
  pendingPercent: number;
}

export default withAuth(DashboardAdmin, ['authed']);
function DashboardAdmin() {
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
      id: 'discord_ketua',
      accessorKey: 'discord_ketua',
      header: 'Discord',
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
      id: 'bukti_pembayaran',
      header: 'Pembayaran',
      cell: (info) => (
        <div className='flex justify-center'>
          <UnstyledLink
            href={`https://api.ara-its.id/uploads/pembayaran/${info.row.original.pembayaran.bukti_pembayaran}`}
          >
            {info.row.original.pembayaran.bukti_pembayaran}
          </UnstyledLink>
        </div>
      ),
      size: 18,
    },
    {
      id: 'status',
      header: 'Status',
      cell: (info) => (
        <div className='flex justify-center flex-col items-center'>
          <select
            value={info.row.original.pembayaran.status.status}
            className={`flex flex-col cursor-pointer rounded-lg w-[150px] text-white
              ${
                info.row.original.pembayaran.status.status ===
                'AWAITING VERIFICATION'
                  ? 'bg-yellow-500'
                  : info.row.original.pembayaran.status.status === 'FAILED'
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

  const { data: queryData } = useQuery<PaginatedApiResponse<AdminCTF[]>, Error>(
    [url],
    {
      keepPreviousData: true,
    }
  );

  const { mutateAsync: fetchPendaftar, isLoading: fetchPendaftarIsLoading } =
    useMutation<AxiosResponse<PaginatedApiResponse<AdminCTF[]>>, Error>(() =>
      api.get(baseUrl)
    );

  const downloadCsv = async () => {
    const response = await fetchPendaftar();
    const fileName =
      user?.permission === 'authed' ? 'Data Pendaftar CTF' : undefined;

    const data =
      user?.permission === 'authed'
        ? response?.data.data.data.filter(
            (item) => item.pembayaran.status.status === user?.team_name
          ) ?? []
        : response?.data.data.data.filter(
            (item) => item.pembayaran.status.status
          ) ?? [];

    if (data.length === 0)
      return showToast('Tidak ada Pendaftar', WARNING_TOAST);

    getCsv(
      data.map((items) => {
        return {
          id: items?.id,
          Nama_Team: items?.team_name,
          Account_Id: items?.account_id,
          Provinsi: items?.team_provinsi_id,
          Kabupaten: items?.team_kabupaten_id,
          Events: items?.event,
          Asal_Institusi: items?.asal_institusi,
          No_wa_ketua: items?.no_wa_ketua,
          Email_ketua: items?.email_ketua,
          Discord: items?.discord_ketua,
          Nama_ketua: items?.nama_ketua,
          KTP_ketua: items?.ktp_ketua,
          Anggota1: items?.nama_anggota1,
          Ktp_anggota1: items?.ktp_anggota1,
          Anggota2: items?.nama_anggota2,
          Ktp_anggota2: items?.ktp_anggota2,
          Pembayaran_ID: items?.pembayaran_id,
          Kupon_ID: items?.kupon_id,
          Bukti_Follow: items?.bukti_follow,
          Bukti_Repost: items?.bukti_repost,
          Write_UP_CTF: items?.Write_up_ctf,
          Bukti_Pembayaran: items?.pembayaran?.bukti_pembayaran,
          List_Bank: items?.pembayaran?.list_bank?.bank,
          Status_Pembayaran: items?.pembayaran?.status?.status,
        };
      }),
      fileName
    );
  };

  const getVerificationStats = (data: AdminCTF[]): VerificationStats => {
    const total = data.length;
    const successCount = data.filter(
      (item) => item.pembayaran.status.status === 'SUCCESS'
    ).length;
    const pendingCount = data.filter(
      (item) => item.pembayaran.status.status === 'AWAITING VERIFICATION'
    ).length;
    const failedCount = data.filter(
      (item) => item.pembayaran.status.status === 'FAILED'
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
        <SEO title='Dashboard Admin CTF' />
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
                List Tim CTF
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
                ? selectedStatus === 'SUCCESS'
                  ? queryData?.data.data.filter(
                      (item) => item?.pembayaran?.status?.status === 'SUCCESS'
                    )
                  : selectedStatus === 'FAILED'
                  ? queryData?.data.data.filter(
                      (item) => item?.pembayaran?.status?.status === 'FAILED'
                    )
                  : selectedStatus === 'AWAITING VERIFICATION'
                  ? queryData?.data.data.filter(
                      (item) =>
                        item?.pembayaran?.status?.status ===
                        'AWAITING VERIFICATION'
                    )
                  : selectedStatus === ''
                  ? queryData?.data.data
                  : []
                : []
            }
            meta={queryData?.data.meta}
            tableState={tableState}
            setTableState={setTableState}
            withFilter={true}
            className='text-center text-white font-poppins'
            selectedStatus={selectedStatus}
            handleStatusSelectChange={handleStatusSelectChange}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}
