enum PermissionEnum {
  'all',
  'authed',
  'ADMIN',
  'SUPERADMIN',
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
