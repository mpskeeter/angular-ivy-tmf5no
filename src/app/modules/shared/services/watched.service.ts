import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { rawWatched } from './rawData';
import { Watched } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class WatchedService extends CrudService<Watched> {
  _items = rawWatched;

  #userId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  userId$: Observable<number> = this.#userId.asObservable();

  printRaw = () => console.log('users:watched:', this._items);

  constructor() {
    super();
    this.get();
    this.userId$
      .pipe(
        map((userId) => {
          this.items.next(
            this._items.filter(
              (record: Partial<Watched>) => record.userId === userId
            )
          );
        })
      )
      .subscribe();
  }

  getForUser(userId: number) {
    this.#userId.next(userId);
  }
}
