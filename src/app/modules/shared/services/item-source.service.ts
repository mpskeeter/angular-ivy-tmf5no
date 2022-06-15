import { Injectable } from '@angular/core';
import { ItemSource } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawItemSources } from './data';

@Injectable({ providedIn: 'root' })
export class ItemSourceService extends CrudService<ItemSource> {
  _items = rawItemSources;


  ascBySeq = (a: Partial<ItemSource>, b: Partial<ItemSource>): number => {
    return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
  };

  constructor() {
    super();
  }

  getForItemId(itemId: number) {
    return this._items.filter(
      (item: Partial<ItemSource>) => item.itemId === itemId
    ).sort(this.ascBySeq);
  }

  public override save(item: Partial<ItemSource>): void {
    super.save(item);

    this.items.next(this._items.sort(this.ascBySeq));
  }

}
