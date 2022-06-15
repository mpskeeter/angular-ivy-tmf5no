import { PlayList, PlaylistItem } from '../../../shared-types';
import { rawRawPlayLists } from './data_playlist';
import { getRawPlaylistItemsForPlaylistId } from './data_playlist_item';

//#region PlayLists
export const rawPlayLists: Partial<PlayList>[] = rawRawPlayLists.map(
  (playlist: Partial<PlayList>) => {
    const playlistItems = getRawPlaylistItemsForPlaylistId(playlist.id);
    const item: Partial<PlayList> = {
      ...playlist,
      duration: playlistItems.reduce(
        (accum, playlistItem: Partial<PlaylistItem>) =>
          accum + playlistItem.item.duration,
        0
      ),
      playlistItems: playlistItems,
      items: playlistItems.map((playlistItem) => playlistItem.item),
    };
    return item;
  }
);

export const getRawPlayList = (playListId: number): Partial<PlayList> =>
  rawPlayLists.find(
    (playlist: Partial<PlayList>) => playlist.id === playListId
  );
//#endregion
