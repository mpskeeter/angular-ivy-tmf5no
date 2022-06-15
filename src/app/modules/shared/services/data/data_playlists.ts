import { PlayList } from '../../../shared-types';
import { rawRawPlayLists } from './data_playlist';
import { getRawPlaylistItemsForPlaylistId } from './data_playlist_item';

//#region PlayLists
// const sumItems = (itemIds: number[]): number => {
//   let sum: number = 0;
//   itemIds.map((sourceItem) => {
//     sum += getRawItem(sourceItem)?.duration;
//   });
//   return sum;
// };

export const rawPlayLists: Partial<PlayList>[] = [
  ...rawRawPlayLists.map((playlist: Partial<PlayList>) => {
    const playlistItems = getRawPlaylistItemsForPlaylistId(playlist.id);
    return {
      ...playlist,
      duration: playlistItems.reduce((accum, playlistItem: Partial<PlaylistItem>) => accum + playlistItem.reduce((sum, item) => sum + item.duration,0),0),
      playlistItems: playlistItems,
      items: playlistItems.map(
        (playlistItem) => playlistItem.item
      ),
    };
  }),
];

export const getRawPlayList = (playListId: number): Partial<PlayList> =>
  rawPlayLists.find(
    (playlist: Partial<PlayList>) => playlist.id === playListId
  );
//#endregion
