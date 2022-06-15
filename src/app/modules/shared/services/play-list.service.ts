import { Injectable } from '@angular/core';
import { PlayList } from '../../shared-types';
import { PlaylistItemService } from './playlist-item.service';
import { CrudService } from './crud.service';
import { rawPlayLists } from './data';

@Injectable({ providedIn: 'root' })
export class PlayListService extends CrudService<PlayList> {
  _items = rawPlayLists;

  constructor(private playlistItemService: PlaylistItemService) {
    super();
  }

  public override get(id?: number): void {
    id > 0
      ? this.item.next(
        () => {
          const item = this._items.find((item) => item.id === id);
          const playlistItems = this.playlistItemService.getForPlaylistId(playlist.id);
          return {
            ...item,
            duration: playlistItems.reduce((accum, playlistItem: Partial<PlaylistItem>) => accum + playlistItem.reduce((sum, item) => sum + item.duration,0),0),
            playlistItems: playlistItems,
            items: playlistItems.map(
              (playlistItem) => playlistItem.item
            ),
          };
        }
      )
      // : this.items.next(this._items);
      : this.items.next(
        () => {
          return this._items.map((item) => {
            const playlistItems = this.playlistItemService.getForPlaylistId(playlist.id);
            return {
              ...item,
              duration: playlistItems.reduce((accum, playlistItem: Partial<PlaylistItem>) => accum + playlistItem.reduce((sum, item) => sum + item.duration,0),0),
              playlistItems: playlistItems,
              items: playlistItems.map(
                (playlistItem) => playlistItem.item
              ),
            };
          })
        }
      );
  }
}
