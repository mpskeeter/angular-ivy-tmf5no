import { Injectable } from '@angular/core';
import { UrgencyType } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class UrgencyTypeService extends CrudService<UrgencyType> {
  _items = ['Urgency Type 1','Urgency Type 2','Urgency Type 3'].map(
    (name: string, index: number) => {
      const item: Partial<UrgencyType> = {
        id: index + 1,
        name,
      };
      return item;
    }
  );


  constructor() {
    super();
  }
}