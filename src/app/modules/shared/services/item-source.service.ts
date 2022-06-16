import { Injectable } from '@angular/core';
import { ItemSource } from '../../shared-types';
import { CrudService } from './crud.service';
import { SourceService } from './source.service';
import { rawItemSources } from './data';

@Injectable({ providedIn: 'root' })
export class ItemSourceService extends CrudService<ItemSource> {
  _items = rawItemSources;


  ascBySeq = (a: Partial<ItemSource>, b: Partial<ItemSource>): number => {
    return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
  };

  constructor(private sourceService: SourceService) {
    super();
  }

  buildItemSource = (record: Partial<ItemSource>): Partial<ItemSource> => {
    const item: Partial<ItemSource> = {
      ...record,
      source: this.sourceService.getSourceById(record.sourceId),
    };
    return item;
  };


  getForItemId(itemId: number): Partial<ItemSource>[] {
    const itemSources: Partial<ItemSource>[] = this._items.filter(
      (item: Partial<ItemSource>) => item.itemId === itemId
    ).sort(this.ascBySeq);

    return itemSources.map((record: Partial<ItemSource>): Partial<ItemSource> => this.buildItemSource(record));
  }

  public override save(item: Partial<ItemSource>): void {
    super.save(item);

    this.items.next(this._items.sort(this.ascBySeq));
  }

}
