import { BaseId } from './base-id.interface';

import { PlayList } from './play-list.interface';
import { Item } from './item.interface';

export interface PlaylistItem extends BaseId {
  id?: number;
  seq?: number;
  playlistId?: number;
  itemId?: number;

  playlist?: Partial<PlayList>;
  item?: Partial<Item>;
}
