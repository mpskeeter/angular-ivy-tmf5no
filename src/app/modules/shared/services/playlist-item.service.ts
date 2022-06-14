import { Injectable } from '@angular/core';
import { PlaylistItem } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawPlaylistItems } from './data';

@Injectable({ providedIn: 'root' })
export class PlaylistItemService extends CrudService<PlaylistItem> {
  _items = rawPlaylistItems;

  constructor() {
    super();
  }
}
