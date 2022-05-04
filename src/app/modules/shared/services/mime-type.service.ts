import { Injectable } from '@angular/core';
import { MimeType } from '../../shared-types';
import { CrudService } from './crud.service';
import { mimeTypes } from './rawData';

@Injectable({ providedIn: 'root' })
export class MimeTypeService extends CrudService<MimeType> {
  _items = mimeTypes;

  constructor() {
    super();
    this.get();
  }
}
