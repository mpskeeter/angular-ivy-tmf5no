import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { rawWatched } from './rawData';
import { Watched } from '../../shared-types';
import { CrudService } from './crud.service';
import { BroadcastService } from './broadcast.service';


export const WATCHED_SERVICE_TOKEN = new InjectionToken<BroadcastService>('demoBroadcastService', {
  factory: () => {
    return new BroadcastService('watched-service');
  },
});

@Injectable({ providedIn: 'root' })
export class WatchedService extends CrudService<Watched> {
  _items = rawWatched;

  #userId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  userId$: Observable<number> = this.#userId.asObservable();

  printRaw = () => console.log('users:watched:', this._items);

  constructor(
    @Inject(DEMO_BROADCAST_SERVICE_TOKEN) private broadcastService: BroadcastService
  ) {
    super();

    this.broadcastService.onmessage = (watchedMessage) => {
      this.save(watchedMessage);
    }

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

  override save(item: Partial<Watched>): void {
    this.broadcastService.postMessage(item);
    super.save(item);
  }
}
