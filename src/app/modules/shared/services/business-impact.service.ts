import { Injectable } from '@angular/core';
import { rawBusinessImpact } from './data';
import { BusinessImpact } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class BusinessImpactService extends CrudService<BusinessImpact> {
  _items = rawBusinessImpact;

  constructor() {
    super();
  }
}