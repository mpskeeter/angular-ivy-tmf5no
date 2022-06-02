import { Watched } from '../../../shared-types';

//#region rawWatched
export const rawWatched: Partial<Watched>[] = [
  {
    id: 1,
    userId: 4,
    courseId: 1,
    itemId: 2,
    sourceId: 3,
    watched: true,
  },
];

export const getRawWatched = (watchedId: number): Partial<Watched> =>
  rawWatched.find((watched: Partial<Watched>) => watched.id === watchedId);
//#endregion
