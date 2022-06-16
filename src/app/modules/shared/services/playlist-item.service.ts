import { Injectable } from '@angular/core';
import { PlaylistItem } from '../../shared-types';
import { CrudService } from './crud.service';
import { ItemService } from './item.service';
import { rawPlaylistItems } from './data';

@Injectable({ providedIn: 'root' })
export class PlaylistItemService extends CrudService<PlaylistItem> {
  _items = rawPlaylistItems;

  ascBySeq = (a: Partial<PlaylistItem>, b: Partial<PlaylistItem>) => {
    return a.playlistId > b.playlistId
      ? -1
      : a.playlistId < b.playlistId
      ? 1
      : a.seq > b.seq
      ? -1
      : a.seq < b.seq
      ? 1
      : 0;
  };

  constructor(private itemService: ItemService) {
    super();
  }

  getForPlaylistId(playlistId: number): Partial<PlaylistItem>[] {
    return this._items
      .filter((item: Partial<PlaylistItem>) => item.playlistId === playlistId)
      .sort(this.ascBySeq)
      .map((record: Partial<PlaylistItem>): Partial<PlaylistItem> => {
        record = {
          ...record,
          item: this.itemService.getItemForPlaylistItem(record.itemId),
        };
        return record;
      });
  }

  public override save(item: Partial<PlaylistItem>): void {
    super.save(item);

    this.items.next(this._items.sort(this.ascBySeq));
  }
}
