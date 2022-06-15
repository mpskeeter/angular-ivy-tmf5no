import { Injectable } from '@angular/core';
import { PlaylistItem } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawPlaylistItems } from './data';

@Injectable({ providedIn: 'root' })
export class PlaylistItemService extends CrudService<PlaylistItem> {
  _items = rawPlaylistItems;

  ascByPlaylistSeq = (a: Partial<PlaylistItem>, b: Partial<PlaylistItem>) => {
    return a.playlistId > b.playlistId
      ? 1
      : a.playlistId < b.playlistId
      ? -1
      : b.seq - a.seq;
  };

  constructor() {
    super();
  }

  getForPlaylistId(playlistId: number) {
    return this._items.filter(
      (item: Partial<PlaylistItem>) => item.playlistId === playlistId
    );
  }

  public override save(item: Partial<PlaylistItem>): void {
    super.save(item);

    this.items.next(this._items.sort(this.ascByPlaylistSeq));
  }
}
