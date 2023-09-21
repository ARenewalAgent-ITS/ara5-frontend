export interface User {
  id: string;
  name: string;
  email: string;
  permission: 'ADMIN' | 'SUPERADMIN';
  divisiId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface withToken {
  accessToken: string;
}
