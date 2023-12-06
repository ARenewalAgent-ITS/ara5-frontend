export interface User {
  nama: string;
  email: string;
  password: string;
  permission: 'ADMIN' | 'SUPERADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export interface withToken {
  token: string;
}
