import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { rawBlogItem } from './data/data_blog';
import { BlogItem } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class BlogItemService extends CrudService<BlogItem> {
  _items = rawBlogItem;

  constructor() {
    super();
  }
}
