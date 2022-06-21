import { Injectable } from '@angular/core';
import { rawRequestType } from './data';
import { RequestType } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class RequestTypeService extends CrudService<RequestType> {
  _items = rawBusinessImpact;

  constructor() {
    super();
  }
}