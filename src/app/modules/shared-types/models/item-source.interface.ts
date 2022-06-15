import { BaseId } from './base-id.interface';
import { Item } from './item.interface';
import { Source } from './source.interface';

export interface ItemSource extends BaseId {
  itemId?: number;
  sourceId?: number;
  seq?: number;

  item?: Partial<Item>;
  source?: Partial<Source>;
}
