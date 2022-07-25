import { Source } from '../../../shared-types';
import { getRawRawSource } from './data_source';
import { getRawStatus } from './data_status';
import { getRawUser } from './data_user';

//#region RawTags
export const rawSource: Partial<Source>[] = [
  {
    ...getRawRawSource(1),
    status: getRawStatus(getRawRawSource(1).statusId),
    author: getRawUser(getRawRawSource(1).authorId),
  },
  {
    ...getRawRawSource(2),
    status: getRawStatus(getRawRawSource(2).statusId),
    author: getRawUser(getRawRawSource(2).authorId),
  },
  {
    ...getRawRawSource(3),
    status: getRawStatus(getRawRawSource(3).statusId),
    author: getRawUser(getRawRawSource(3).authorId),
  },
  {
    ...getRawRawSource(4),
    status: getRawStatus(getRawRawSource(4).statusId),
    author: getRawUser(getRawRawSource(4).authorId),
  },
  {
    ...getRawRawSource(5),
    status: getRawStatus(getRawRawSource(5).statusId),
    author: getRawUser(getRawRawSource(5).authorId),
  },
  {
    ...getRawRawSource(6),
    status: getRawStatus(getRawRawSource(6).statusId),
    author: getRawUser(getRawRawSource(6).authorId),
  },
  {
    ...getRawRawSource(7),
    status: getRawStatus(getRawRawSource(7).statusId),
    author: getRawUser(getRawRawSource(7).authorId),
  },
  {
    ...getRawRawSource(8),
    status: getRawStatus(getRawRawSource(8).statusId),
    author: getRawUser(getRawRawSource(8).authorId),
  },
];

export const getRawSource = (sourceId: number): Partial<Source> =>
  rawSource.find((source) => source.id === sourceId);
//#endregion
