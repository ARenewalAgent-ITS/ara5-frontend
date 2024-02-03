'use client';

import DashboardUserPage from '@/app/dashboard/user/__components/DashboardUserPage';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(DashboardUserPage, ['USER']);
