import { PlaylistItem } from '../../../shared-types';
import { getRawRawPlayList } from './data_playlist';
import { getRawItem } from './data_item';

//#region PlaylistItems

const ascBySeq = (
  a: Partial<PlaylistItem>,
  b: Partial<PlaylistItem>
): number => {
  return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
};

export const rawPlaylistItems: Partial<PlaylistItem>[] = [
  [1, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 4],
  [1, 5, 5],
  [1, 6, 6],
  [1, 7, 7],
  [1, 8, 8],
  [2, 1, 1],
  [2, 2, 2],
  [2, 3, 3],
  [3, 5, 1],
  [3, 7, 2],
  [3, 2, 3],
].map((working, index: number) => {
  const playlistId = working[0];
  const itemId = working[1];
  const seq = working[2];

  return {
    id: index + 1,
    seq,
    playlistId,
    itemId,

    playlist: getRawRawPlayList(playlistId),
    item: getRawItem(itemId),
  };
});

export const getRawPlaylistItem = (
  playlistItemId: number
): Partial<PlaylistItem> =>
  rawPlaylistItems.find(
    (playlistItem: Partial<PlaylistItem>) => playlistItem.id === playlistItemId
  );

export const getRawPlaylistItemsForPlaylistId = (
  playlistId: number
): Partial<PlaylistItem>[] =>
  rawPlaylistItems
    .filter(
      (playlistItem: Partial<PlaylistItem>) =>
        playlistItem.playlistId === playlistId
    )
    .sort(ascBySeq);

//#endregion
