import { PlayList } from '../../../shared-types';
import { rawRawPlayLists } from './data_playlist';
import { getRawPlaylistItemsForPlaylistId } from './data_playlist_item';

//#region PlayLists
export const rawPlayLists: Partial<PlayList>[] = [
  ...rawRawPlayLists.map((playlist: Partial<PlayList>) => ({
    ...playlist,
    playlistItems: getRawPlaylistItemsForPlaylistId(playlist.id),
    items: getRawPlaylistItemsForPlaylistId(playlist.id).map(
      (playlistItem) => playlistItem.item
    ),
  })),
];

export const getRawPlayList = (playListId: number): Partial<PlayList> =>
  rawPlayLists.find(
    (playlist: Partial<PlayList>) => playlist.id === playListId
  );
//#endregion
