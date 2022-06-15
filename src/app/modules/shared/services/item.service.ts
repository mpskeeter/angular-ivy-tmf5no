import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayList, Item, ItemSource } from '../../shared-types';
import { CrudService } from './crud.service';
import { ItemSourceService } from './item-source.service';
import { rawItems, rawPlayLists } from './data';
// import { rawPlayLists } from './rawData';

@Injectable({ providedIn: 'root' })
export class ItemService extends CrudService<Item> {
  #playlists: Partial<PlayList>[] = rawPlayLists;
  _items = rawItems;

  #currentItem: BehaviorSubject<Partial<Item>> = new BehaviorSubject<
    Partial<Item>
  >(null);
  currentItem$: Observable<Partial<Item>> =
    this.#currentItem.asObservable();

  #currentItemId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentItemId$: Observable<number> = this.#currentItemId.asObservable();

  ascBySeq = (a: Partial<Item>, b: Partial<Item>): number => {
    return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
  };

  constructor(public itemSourceService: ItemSourceService) {
    super();
    combineLatest([this.items$, this.currentItemId$])
      .pipe(
        map(([items, currentItemId]) =>
          items?.find(
            (item: Partial<Item>) => item?.seq === currentItemId
          )
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
      this.items.next(playlist.items.sort(this.ascBySeq));
    }
  }

  buildItem = (record: Partial<Item>) => {
    const itemSources: Partial<ItemSource>[] = this.itemSourceService.getForItemId(record.id);
    const item: Partial<Item> = {
      ...record,
      duration: itemSources.reduce(
        (accum, itemSource: Partial<ItemSource>) =>
          accum + itemSource.source.duration,
        0
      ),
      itemSources,
      sources: itemSources.map((itemSource: Partial<ItemSource>) => itemSource.source),
    };
    return item;
  };

  public override get(id?: number) {
    id 
      ? this.item.next(this.buildItem(this._items.find((item: Partial<Item>) => item.id === id))) 
      : this.items.next(this._items.map(
      (item: Partial<Item>) => this.buildItem(item)
    ));
  }

  setCurrentItemId(seqId) {
    this.#currentItemId.next(seqId);
  }
}
