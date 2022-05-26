import { Injectable, Inject, InjectionToken } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { rawWatched } from './rawData';
import { Watched } from '../../shared-types';
import { CrudService } from './crud.service';
import { BroadcastService, BroadcastMessage } from './broadcast.service';

export const WATCHED_SERVICE_TOKEN = new InjectionToken<BroadcastService>(
  'demoBroadcastService',
  {
    factory: () => {
      return new BroadcastService('watched-service');
    },
  }
);

@Injectable({ providedIn: 'root' })
export class WatchedService extends CrudService<Watched> {
  _items = rawWatched;

  #userId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  userId$: Observable<number> = this.#userId.asObservable();

  printRaw = () => console.log('users:watched:', this._items);

  messagesOfType$: Observable<BroadcastMessage> =
    this.broadcastService.messagesOfType('WATCHED');

  constructor(
    @Inject(WATCHED_SERVICE_TOKEN)
    private broadcastService: BroadcastService
  ) {
    super();

    this.messagesOfType$
      .pipe(
        map((message: BroadcastMessage) => {
          super.save(message.payload);
        })
      )
      .subscribe();

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
    this.broadcastService.publish({
      type: 'WATCHED',
      payload: item,
    } as BroadcastMessage);
    super.save(item);
  }
}
