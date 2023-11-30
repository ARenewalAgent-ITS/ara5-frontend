import { PermissionList } from './permission-list';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  remember: boolean;
  token?: string;
  permission: PermissionList;
};


export interface withToken {
  accessToken: string;
}
