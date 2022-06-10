import { Status } from '../../../shared-types';

//#region RawStatus
export const rawStatus: Partial<Status>[] = [
  {
    id: 1,
    name: 'Active',
  },
  {
    id: 2,
    name: 'Inactive',
  },
  {
    id: 3,
    name: 'Working',
  },
];

export const getRawStatus = (statusId: number): Partial<Status> =>
  rawStatus.find((status) => status.id === statusId);
//#endregion
