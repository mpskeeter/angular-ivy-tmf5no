import { Injectable } from '@angular/core';
import { PlayList } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawPlayLists } from './data';

@Injectable({ providedIn: 'root' })
export class PlayListService extends CrudService<PlayList> {
  _items = rawPlayLists;

  constructor() {
    super();
  }
}
