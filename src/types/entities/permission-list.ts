enum PermissionEnum {
  'all',
  'authed',
  'users.index',
  'user.index',
  'admin_verify_user.update',
  'admin_sponsor.create',
  'admin_role.update',
  'admin_role.delete',
  'admin_permission.update',
  'admin_permission.delete',
  'admin_role_has_permission.update',
  'admin_role_has_permission.delete',
  'admin_staff.create',
  'admin_staff.update',
  'admin_staff.delete',
  'admin_sponsor.delete',
  'admin_sponsor.update',
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
