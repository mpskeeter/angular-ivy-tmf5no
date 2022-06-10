import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayList, Item } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawItems, rawPlayLists } from './data';

@Injectable({ providedIn: 'root' })
export class PlayListItemService extends CrudService<Item> {
  #playlists: Partial<PlayList>[] = rawPlayLists;
  _items = rawItems;

  #currentItem: BehaviorSubject<Partial<Item>> = new BehaviorSubject<
    Partial<Item>
  >(null);
  currentItem$: Observable<Partial<Item>> = this.#currentItem.asObservable();

  #currentItemId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentItemId$: Observable<number> = this.#currentItemId.asObservable();

  ascBySeq = (a: Partial<Item>, b: Partial<Item>): number => {
    return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
  };

  constructor() {
    super();
    combineLatest([this.items$, this.currentItemId$])
      .pipe(
        map(([items, currentItemId]) =>
          items?.find((item: Partial<Item>) => item?.seq === currentItemId)
        )
      )
      .subscribe((item: Partial<Item>) => {
        if (item) this.#currentItem.next(item);
      });
  }

  getItemsForPlaylist(playlistId: number) {
    const playlist = this.#playlists.find(
      (playlist: Partial<PlayList>) => playlist?.id === playlistId
    );
    if (playlist) {
      const items: Partial<Item>[] = playlist.items;
      const sortedItems = items.sort(this.ascBySeq);
      this.items.next(sortedItems);
    }
  }

  setCurrentItemId(seqId) {
    this.#currentItemId.next(seqId);
  }
}
