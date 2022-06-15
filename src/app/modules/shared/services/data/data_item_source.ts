import { Item, ItemSource, Source } from '../../../shared-types';
import { getRawSource } from './data_source';

//#region ItemSource

const ascBySeq = (a: Partial<ItemSource>, b: Partial<ItemSource>) => {
  return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
};

export const rawItemSources: Partial<ItemSource>[] =
  [
    [1,1,1],
    [1,2,2],
    [2,3,1],
    [3,4,1],
    [4,5,1],
    [5,6,1],
    [6,7,1],
    [7,2,1],
    [8,8,1],
  ].map((record: Partial<ItemSource>, index: number): Partial<ItemSource> => {
    const { itemId, sourceId, seq } = record;
    const itemSource: Partial<ItemSource> = {
      id: index + 1,
      itemId,
      sourceId,
      seq,

      source: getRawSource(sourceId),
    };
    return itemSource;
  });


getRawItemSourceForItemId = (itemId: number): Partial<ItemSource>[] => 
  rawItemSources.filter((itemSource: Partial<ItemSource>) => itemSource.itemId === itemId).sort(ascBySeq);

getRawItemSource = (itemSourceId: number):Partial<ItemSource> => 
  rawItemSources.find((itemSource: Partial<ItemSource>) => itemSource.itemId === itemId);
//#endregion
