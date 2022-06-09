import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { rawBlogItem } from './rawData';
import { BlogItem } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class BlogItemService extends CrudService<Category> {
  _items = rawBlogItem;

  constructor() {
    super();
  }
}
