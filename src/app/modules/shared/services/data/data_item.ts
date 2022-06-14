import { Item } from '../../../shared-types';
import { buildSource, getRawSource } from './data_source';
import { getRawRawUser } from './data_user';

//#region Items
const sumSources = (sourceIds: number[]): number => {
  let sum: number = 0;
  sourceIds.map(
    (sourceItem) => (sum += getRawSource(sourceItem)?.duration)
  );
  return sum;
};

// findItemsForSource(item: Partial<PlayListItem>, sourceId: number) {
//   return item.sources.some(source => source.id === sourceId)
// }
export const rawItems: Partial<Item>[] = [
  {
    id: 1,
    name: 'Getting Started',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([1, 2]),
    sources: buildSource([1, 2]),
    watched: true,
  },
  {
    id: 2,
    name: 'The Basics',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([3]),
    sources: buildSource([3]),
    watched: true,
  },
  {
    id: 3,
    name: 'Course Project - The Basics',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([4]),
    sources: buildSource([4]),
    watched: true,
  },
  {
    id: 4,
    name: 'Elephants dream short film',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([5]),
    sources: buildSource([5]),
    watched: false,
  },
  {
    id: 5,
    name: 'Chromecast commercial: For bigger blazes',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([6]),
    sources: buildSource([6]),
    watched: false,
  },
  {
    id: 6,
    name: 'Chromecast commercial: For bigger escapes',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([7]),
    sources: buildSource([7]),
    watched: false,
  },
  {
    id: 7,
    name: 'Chromecast commercial: For bigger fun',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([2]),
    sources: buildSource([2]),
    watched: false,
  },
  {
    id: 8,
    name: 'Chromecast commercial: For bigger joy rides',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([8]),
    sources: buildSource([8]),
    watched: false,
  },
  // {
  //   id: 9,
  //   name: 'Chromecast commercial: For bigger browsers',
  //   authorId: 3,
  //   author: getRawRawUser(3),
  //   statusId: 1,
  //   duration: sumSources([2]),
  //   sources: buildSource([2]),
  //   watched: false,
  // },
  // {
  //   id: 10,
  //   name: 'Chromecast commercial: For bigger browsers',
  //   authorId: 4,
  //   author: getRawRawUser(4),
  //   statusId: 1,
  //   duration: sumSources([2]),
  //   sources: buildSource([2]),
  //   watched: false,
  // },
  // {
  //   id: 11,
  //   name: 'Chromecast commercial: For bigger browsers',
  //   authorId: 4,
  //   author: getRawRawUser(4),
  //   statusId: 1,
  //   duration: sumSources([2]),
  //   sources: buildSource([2]),
  //   watched: false,
  // },
  // {
  //   id: 12,
  //   name: 'Chromecast commercial: For bigger browsers',
  //   authorId: 4,
  //   author: getRawRawUser(4),
  //   statusId: 1,
  //   duration: sumSources([2]),
  //   sources: buildSource([2]),
  //   watched: false,
  // },
];

export const getRawItem = (itemId: number): Partial<Item> =>
  rawItems.find((item) => item.id === itemId);

// export const rawSources: Partial<Source>[] =
//   rawRawSources.map((source: Partial<Source>) => ({
//     ...source,
//     items: rawPlayListItems.map((item: Partial<Item>) => item.some(findItemitem)
//       item.sources.some(
//         (itemSource: Partial<Source>) => itemSource.id === source.id
//       )
//     ),
//   }));
//#endregion
