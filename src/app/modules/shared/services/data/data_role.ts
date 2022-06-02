import { Role } from '../../../shared-types';

//#region Roles
export const rawRoles: Partial<Role>[] = [
  { id: 1, name: 'user' },
  { id: 2, name: 'author' },
  { id: 3, name: 'manager' },
  { id: 4, name: 'admin' },
];

export const getRawRole = (roleId: number): Partial<Role> =>
  rawRoles.find((role) => role.id === roleId);
//#endregion
