import { Injectable } from '@angular/core';
import { PlayList, PlaylistItem } from '../../shared-types';
import { PlaylistItemService } from './playlist-item.service';
import { CrudService } from './crud.service';
import { rawPlayLists } from './data';

@Injectable({ providedIn: 'root' })
export class PlayListService extends CrudService<PlayList> {
  _items: Partial<PlayList>[] = rawPlayLists;

  ascBySeq = (a: Partial<PlayList>, b: Partial<PlayList>): number => {
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
  };

  constructor(private playlistItemService: PlaylistItemService) {
    super();
  }

  buildPlaylist = (item: Partial<PlayList>): Partial<PlayList> => {
    const playlistItems: Partial<PlaylistItem>[] =
      this.playlistItemService.getForPlaylistId(item.id);
    const playlist: Partial<PlayList> = {
      ...item,
      duration: playlistItems?.reduce(
        (accum, playlistItem: Partial<PlaylistItem>) =>
          accum + playlistItem.item.duration,
        0
      ),
      playlistItems,
      items: playlistItems?.map((playlistItem) => ({
        ...playlistItem.item,
        seq: playlistItem.seq,
      })),
    };
    return playlist;
  };

  getById(playlistId: number): Partial<PlayList> {
    return this.buildPlaylist(
      this._items.find((item) => item.id === playlistId)
    );
  }

  getOne(id: number) {
    const item = this.buildPlaylist(this._items.find((item) => item.id === id));
    this.item.next(item);
  }

  getMany() {
    const items: Partial<PlayList>[] = this._items
      .sort(this.ascBySeq)
      .map((item: Partial<PlayList>) => this.buildPlaylist(item));
    this.items.next(items);
  }

  public override get(id?: number): void {
    id > 0 ? this.getOne(id) : this.getMany();
  }
}
