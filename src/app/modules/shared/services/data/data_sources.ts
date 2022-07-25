import { Source } from '../../../shared-types';
import { getRawRawSource } from './data_source';

//#region RawTags
export const rawSource: Partial<Source>[] = [
  {
    ...getRawRawSource(1),
    status: getRawStatus(getRawRawSource(1).statusId),
  },
  {
    ...getRawRawSource(2),
    status: getRawStatus(getRawRawSource(2).statusId),
  },
  {
    ...getRawRawSource(3),
    status: getRawStatus(getRawRawSource(3).statusId),
  },
  {
    ...getRawRawSource(4),
    status: getRawStatus(getRawRawSource(4).statusId),
  },
  {
    ...getRawRawSource(5),
    status: getRawStatus(getRawRawSource(5).statusId),
  },
  {
    ...getRawRawSource(6),
    status: getRawStatus(getRawRawSource(6).statusId),
  },
  {
    ...getRawRawSource(7),
    status: getRawStatus(getRawRawSource(7).statusId),
  },
  {
    ...getRawRawSource(8),
    status: getRawStatus(getRawRawSource(8).statusId),
  },
];

export const getRawSource = (sourceId: number): Partial<Source> =>
  rawSource.find((source) => source.id === sourceId);
//#endregion
