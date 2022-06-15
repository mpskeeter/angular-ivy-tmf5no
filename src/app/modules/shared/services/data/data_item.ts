import { Item, ItemSource, Source } from '../../../shared-types';
import { getRawRawUser } from './data_user';
import { getRawItemSourceForItemId } from './data_item_source';

//#region Items
export const rawRawItems: Partial<Item>[] = [
  {
    id: 1,
    name: 'Getting Started',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: true,
  },
  {
    id: 2,
    name: 'The Basics',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: true,
  },
  {
    id: 3,
    name: 'Course Project - The Basics',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: true,
  },
  {
    id: 4,
    name: 'Elephants dream short film',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: false,
  },
  {
    id: 5,
    name: 'Chromecast commercial: For bigger blazes',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: false,
  },
  {
    id: 6,
    name: 'Chromecast commercial: For bigger escapes',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: false,
  },
  {
    id: 7,
    name: 'Chromecast commercial: For bigger fun',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: false,
  },
  {
    id: 8,
    name: 'Chromecast commercial: For bigger joy rides',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    watched: false,
  },
];

export const rawItems: Partial<Item>[] = rawRawItems.map(
  (record: Partial<Item>): Partial<Item> => {
    const itemSources: Partial<ItemSource>[] = getRawItemSourceForItemId(
      record.id
    );
    const sources: Partial<Source>[] = itemSources.map(
      (itemSource: Partial<ItemSource>) => itemSource.source
    );

    const item: Partial<Item> = {
      ...record,
      duration: sources.reduce((accum, item) => accum + item?.duration, 0),
      sources,
      itemSources,
    };

    return item;
  }
);

export const getRawItem = (itemId: number): Partial<Item> =>
  rawItems.find((item) => item.id === itemId);
//#endregion
