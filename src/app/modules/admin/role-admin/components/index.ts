import { RoleEditComponent } from './role-edit';
import { RoleTableComponent } from './role-table';
import { LayoutComponent } from './layout';
import { UserRoleComponent } from './user-role';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  RoleEditComponent,
  RoleTableComponent,
  UserRoleComponent,
  LayoutComponent,
];

export * from './role-edit';
export * from './role-table';
export * from './layout';
export * from './user-role';
