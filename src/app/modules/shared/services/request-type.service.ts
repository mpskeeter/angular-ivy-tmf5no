import { Injectable } from '@angular/core';
import { RequestType } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class RequestTypeService extends CrudService<RequestType> {
  _items = ['Request Type 1','Request Type 2','Request Type 3'].map(
    (name: string, index: number) => (
      {
        id: index + 1,
        name,
      }
    )
  );

  constructor() {
    super();
  }
}