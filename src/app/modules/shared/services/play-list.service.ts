import { Injectable } from '@angular/core';
import { PlayList, PlaylistItem } from '../../shared-types';
import { PlaylistItemService } from './playlist-item.service';
import { CrudService } from './crud.service';
import { rawPlayLists } from './data';

@Injectable({ providedIn: 'root' })
export class PlayListService extends CrudService<PlayList> {
  _items: Partial<PlayList>[] = rawPlayLists;

  constructor(private playlistItemService: PlaylistItemService) {
    super();
  }

  buildPlaylist = (item: Partial<PlayList>): Partial<PlayList> => {
    const playlistItems = this.playlistItemService.getForPlaylistId(item.id);
    const playlist: Partial<PlayList> = {
      ...item,
      duration: playlistItems.reduce(
        (accum, playlistItem: Partial<PlaylistItem>) =>
          accum + playlistItem.item.duration,
        0
      ),
      playlistItems,
      items: playlistItems.map((playlistItem) => playlistItem.item),
    };
    return playlist;
  };

  getById(playlistId: number): Partial<PlayList> {
    const playlist: Partial<PlayList> = this._items.find((item) => item.id === playlistId);
    return this.buildPlaylist(playlist);
  }

  getOne(id: number) {
    let item: Partial<PlayList> = this._items.find((item) => item.id === id);
    item: Partial<PlayList> = this.buildPlaylist(item);
    this.item.next(item);
  }

  getMany() {
    const items: Partial<PlayList>[] = this._items.map(
      (item: Partial<PlayList>) => this.buildPlaylist(item)
    );
    this.items.next(items);
  }

  public override get(id?: number): void {
    id > 0 ? this.getOne(id) : this.getMany();
  }
}
