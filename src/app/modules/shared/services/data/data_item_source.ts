import { Item, ItemSource, Source } from '../../../shared-types';
import { getRawSource } from './data_sources';

//#region ItemSource
const ascBySeq = (a: Partial<ItemSource>, b: Partial<ItemSource>) => {
  return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
};

export const rawItemSources: Partial<ItemSource>[] = [
  [1, 1, 1],
  [1, 2, 2],
  [2, 3, 1],
  [3, 4, 1],
  [4, 5, 1],
  [5, 6, 1],
  [6, 7, 1],
  [7, 2, 1],
  [8, 8, 1],
].map((working, index: number) => {
  const itemId = working[0];
  const sourceId = working[1];
  const seq = working[2];
  const itemSource: Partial<ItemSource> = {
    id: index + 1,
    itemId,
    sourceId,
    seq,

    source: getRawSource(sourceId),
  };
  return itemSource;
});

export const getRawItemSourceForItemId = (
  itemId: number
): Partial<ItemSource>[] =>
  rawItemSources
    .filter((itemSource: Partial<ItemSource>) => itemSource.itemId === itemId)
    .sort(ascBySeq);

export const getRawItemSource = (itemSourceId: number): Partial<ItemSource> =>
  rawItemSources.find(
    (itemSource: Partial<ItemSource>) => itemSource.itemId === itemSourceId
  );
//#endregion
