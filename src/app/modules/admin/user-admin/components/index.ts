import { LayoutComponent } from './layout';
import { UserAdminComponent } from './user-admin';
import { UserModalComponent } from './user-modal';
import { UserRolesComponent } from './user-roles';
import { UserTableComponent } from './user-table';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  UserAdminComponent,
  UserModalComponent,
  UserRolesComponent,
  UserTableComponent,
];

export * from './layout';
export * from './user-admin';
export * from './user-modal';
export * from './user-roles';
export * from './user-table';
