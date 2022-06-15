import { Injectable } from '@angular/core';
import { ItemSource } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawItemSources } from './data';

@Injectable({ providedIn: 'root' })
export class ItemSourceService extends CrudService<ItemSource> {
  _items = rawItemSources;

  constructor() {
    super();
  }
}
