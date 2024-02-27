'use client';

import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format, utcToZonedTime } from 'date-fns-tz';
import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/Typography';
import useServerTable from '@/hooks/useServerTable';
import { buildPaginatedTableURL } from '@/lib/table';
import { PaginatedApiResponse } from '@/types/api';
import { AdminMerch } from '@/types/entities/events';

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

  const baseUrl = '/merch/order';
  const { tableState, setTableState } = useServerTable({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminMerch>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No',
    },
    {
      id: 'nama',
      accessorKey: 'nama',
      header: 'Nama',
    },
    {
      id: 'no_telp',
      accessorKey: 'no_telp',
      header: 'No Telp',
    },
    {
      id: 'deskripsi_order',
      accessorKey: 'deskripsi_order',
      cell: (info) => {
        return (
          <div>
            {info.row.original.deskripsi_order.split('\n').map((desc, idx) => (
              <>
                <Typography variant='p' as='p' key={idx}>
                  {desc}
                </Typography>
                <br />
              </>
            ))}
          </div>
        );
      },
      header: 'Deskripsi Order',
    },
    {
      id: 'alamat',
      accessorKey: 'alamat',
      header: 'Alamat',
    },
    {
      id: 'total_harga',
      accessorKey: 'total_harga',
      header: 'Total Harga',
    },
    {
      id: 'biaya_ongkir',
      accessorKey: 'biaya_ongkir',
      header: 'Biaya Ongkir',
    },
    {
      id: 'list_bank_id',
      accessorKey: 'list_bank_id',
      header: 'Bank ID',
    },
    {
      id: 'pembayaran',
      accessorKey: 'pembayaran',
      header: 'Bukti Pembayaran',
      cell: (info) => {
        return (
          <div className='flex justify-center'>
            <ButtonLink
              className='bg-primary-500 text-white hover:bg-primary-700'
              href={`https://ara-its.id/uploads/merch/pembayaran/${info.row.original.pembayaran}`}
            >
              Bukti Bayar
            </ButtonLink>
          </div>
        );
      },
      size: 18,
    },
    {
      id: 'dp',
      accessorKey: 'dp',
      header: 'DP',
    },
    {
      id: 'Pesanan_has_merch',
      accessorKey: 'Pesanan_has_merch',
      header: 'Merch',
      cell: (info) => {
        return (
          <div>
            {info.row.original.Pesanan_has_merch.map((psn, idx) => (
              <>
                <Typography variant='p' as='p' key={idx}>
                  {psn.merch.nama_produk} ({psn.jumlah})
                </Typography>
                <br />
              </>
            ))}
          </div>
        );
      },
    },
    {
      id: 'kode_referral',
      accessorKey: 'kode_referral["kupon"]',
      cell: (info) => {
        return (
          <Typography variant='p' as='p'>
            {info.row.original.kode_referral?.kupon}
          </Typography>
        );
      },
      header: 'Kode Referral',
    },
    {
      id: 'createdAt',
      accessorKey: 'createdAt',
      header: 'Tanggal Dibuat',
      cell: (info) =>
        formatDateToWIB((info.row.original as AdminMerch).createdAt),
    },
    {
      id: 'updatedAt',
      accessorKey: 'updatedAt',
      header: 'Terakhir Diupdate',
      cell: (info) =>
        formatDateToWIB((info.row.original as AdminMerch).updatedAt),
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: baseUrl,
    tableState,
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminMerch[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO
          title='Dashboard Order Admin'
          description='Dashboard Order Admin ARA 5.0 | ARA ITS (A Renewal Agent ITS) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
        />
        <div className='min-h-screen flex flex-col gap-6 pb-20'>
          <div className='flex justify-between flex-col'>
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
              Order Merch
            </Typography>
            <Typography
              as='h4'
              variant='h4'
              weight='bold'
              className='text-primary-600 lg:hidden text-[32px] text-center my-4'
            >
              Order Merch
            </Typography>
          </div>

          <ServerTable
            columns={columns}
            data={queryData?.data.data ? queryData.data.data : []}
            meta={queryData?.data.meta}
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
