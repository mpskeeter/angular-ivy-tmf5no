import { Injectable } from '@angular/core';
import { BusinessImpact } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class BusinessImpactService extends CrudService<BusinessImpact> {
  _items = ['Impact 1','Impact 2','Impact 3'].map(
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