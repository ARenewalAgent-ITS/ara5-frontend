enum PermissionEnum {
  'all',
  'optional',
  'USER',
  'ADMIN',
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
