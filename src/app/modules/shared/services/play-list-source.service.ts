import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayListSource } from '../../shared-types';
import { CrudService } from './crud.service';
import { rawSources } from './data/data_source';

@Injectable({ providedIn: 'root' })
export class PlayListSourceService extends CrudService<PlayListSource> {
  _items = rawSources;

  #currentSource: BehaviorSubject<Partial<PlayListSource>> =
    new BehaviorSubject<Partial<PlayListSource>>(null);
  currentSource$: Observable<Partial<PlayListSource>> =
    this.#currentSource.asObservable();

  #currentSourceId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentSourceId$: Observable<number> = this.#currentSourceId.asObservable();

  constructor() {
    super();
  }

  setSource(source: Partial<PlayListSource>) {
    this.item.next(source);
  }

  setCurrentSourceId(seqId: number) {
    this.#currentSourceId.next(seqId);
  }
}
