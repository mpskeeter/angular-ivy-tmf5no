import { Injectable } from '@angular/core';
import { ItemSource } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawItemSource } from './data';

@Injectable({ providedIn: 'root' })
export class ItemSourceService extends CrudService<ItemSource> {
  _items = rawItemSource;

  constructor() {
    super();
  }
}
