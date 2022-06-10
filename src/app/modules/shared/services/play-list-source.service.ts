import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Source } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawSources } from './data/data_source';

@Injectable({ providedIn: 'root' })
export class SourceService extends CrudService<Source> {
  _items = rawSources;

  #currentSource: BehaviorSubject<Partial<Source>> =
    new BehaviorSubject<Partial<Source>>(null);
  currentSource$: Observable<Partial<Source>> =
    this.#currentSource.asObservable();

  #currentSourceId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentSourceId$: Observable<number> = this.#currentSourceId.asObservable();

  constructor() {
    super();
  }

  setSource(source: Partial<Source>) {
    this.item.next(source);
  }

  setCurrentSourceId(seqId: number) {
    this.#currentSourceId.next(seqId);
  }
}
