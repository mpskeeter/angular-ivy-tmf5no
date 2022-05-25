import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  Course,
  Player,
  PlayListItem,
  PlayListSource,
  Watched,
} from '../../shared-types';
import { CrudService } from './crud.service';
import { CourseService } from './course.service';
import { AuthenticatedUserService } from './authenticated-user.service';
import { WatchedService } from './watched.service';

@Injectable({ providedIn: 'root' })
export class PlayerService extends CrudService<Player> {
  _item: Partial<Player> = {};

  protected override item: BehaviorSubject<Partial<Player>> =
    new BehaviorSubject<Partial<Player>>(null);
  override item$: Observable<Partial<Player>> = this.item.asObservable();

  #sourceId: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  sourceId$: Observable<number> = this.#sourceId.asObservable();

  maxSequence: number = 0;

  #end: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  end$: Observable<boolean> = this.#end.asObservable();

  constructor(
    private authenticatedUserService: AuthenticatedUserService,
    private courseService: CourseService,
    private watchedService: WatchedService
  ) {
    super();
    combineLatest([
      this.authenticatedUserService.item$,
      this.courseService.item$,
      this.sourceId$,
      this.end$,
    ])
      .pipe(
        map(([user, course, sourceId, end]) => {
          if (course) {
            const items = course?.playlist?.items;

            let playlistItem: Partial<PlayListItem> = {};
            let source: Partial<PlayListSource> = {};

            if (!end) {
              playlistItem = items?.find((record: Partial<PlayListItem>) => {
                const sourceFound = record.sources.find(
                  (source: Partial<PlayListSource>) => source.seq === sourceId
                );
                if (sourceFound) return record;
              });

              source = playlistItem?.sources?.find(
                (record: Partial<PlayListSource>) => record.seq === sourceId
              );
            }

            const watched: Partial<Watched>[] = user?.watched?.filter(
              (record: Partial<Watched>) => record.courseId === course?.id
            );

            this.maxSequence =
              items[items.length - 1]?.sources[
                items[items.length - 1].sources.length - 1
              ]?.seq;

            const player: Partial<Player> = {
              // courseId: course?.id,
              course: course,
              // playlistItems: items,
              playlistItemId: playlistItem?.id,
              playlistItem,
              sourceId,
              source,
              user,
              // userId: user?.id,
              watched,
              autoplay: user?.settings?.autoPlay,
              maxSequence: this.maxSequence,
              end,
            };
            this.item.next(player);
            this._item = player;
            // console.log('player:item:', player);
          }
        })
      )
      .subscribe();
  }

  setWatched({ userId, courseId, itemId, sourceId }) {
    if (
      !this._item.watched.find(
        (watchedItem: Watched) =>
          watchedItem.courseId === courseId &&
          watchedItem.itemId === itemId &&
          watchedItem.sourceId === sourceId
      )
    ) {
      const watched: Partial<Watched> = {
        id: null,
        userId,
        courseId,
        itemId,
        sourceId,
        watched: true,
      };
      this.watchedService.save(watched);
    }
  }

  setSourceId(id: number) {
    id > this.maxSequence ? this.#end.next(true) : this.#sourceId.next(id);
  }
}
