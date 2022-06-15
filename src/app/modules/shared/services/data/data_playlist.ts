import { PlayList } from '../../../shared-types';
import { getRawItem } from './data_item';

//#region PlayLists
// updated 2022-02-14
// const sumItems = (itemIds: number[]): number => {
//   let sum: number = 0;
//   itemIds.map((sourceItem) => {
//     sum += getRawItem(sourceItem)?.duration;
//   });
//   return sum;
// };

export const rawRawPlayLists: Partial<PlayList>[] = [
  {
    id: 1,
    name: 'Demo 1',
    description: 'Demo 1',
    // duration: sumItems([1, 2, 3, 4, 5, 6, 7, 8]),
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
  },
  {
    id: 2,
    name: 'MyDevLMS',
    description: 'MyDevLMS',
    // duration: sumItems([1, 2, 3]),
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
  },
  {
    id: 3,
    name: 'Site Lead',
    description: 'Site Lead',
    // duration: sumItems([5, 7, 2]),
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
  },
];

export const getRawRawPlayList = (playListId: number): Partial<PlayList> =>
  rawRawPlayLists.find(
    (playlist: Partial<PlayList>) => playlist.id === playListId
  );
//#endregion
