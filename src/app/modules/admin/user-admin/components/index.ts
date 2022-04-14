import { LayoutComponent } from './layout';
import { UserEditComponent } from './user-edit';
import { UserRolesComponent } from './user-roles';
import { UserTableComponent } from './user-table';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  UserEditComponent,
  UserRolesComponent,
  UserTableComponent,
];

export * from './layout';
export * from './user-edit';
export * from './user-roles';
export * from './user-table';
