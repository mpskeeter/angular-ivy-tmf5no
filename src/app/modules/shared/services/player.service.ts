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
import { EnrollmentService } from './enrollment.service';
import { PlayListService } from './play-list.service';
import { PlayListSourceService } from './play-list-source.service';
import { WatchedService } from './watched.service';

@Injectable({ providedIn: 'root' })
export class PlayerService extends CrudService<Player> {
  _item: Partial<Player> = {};

  protected override item: BehaviorSubject<Partial<Player>> =
    new BehaviorSubject<Partial<Player>>(null);
  override item$: Observable<Partial<Player>> = this.item.asObservable();

  #playlistItems: BehaviorSubject<Partial<PlayListItem>[]> =
    new BehaviorSubject<Partial<PlayListItem>[]>(null);
  playlistItems$: Observable<Partial<PlayListItem>[]> =
    this.#playlistItems.asObservable();

  #currentPlaylistItemId: BehaviorSubject<number> = new BehaviorSubject<number>(
    null
  );
  currentPlaylistItemId$: Observable<number> =
    this.#currentPlaylistItemId.asObservable();

  #currentSourceId: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currentSourceId$: Observable<number> = this.#currentSourceId.asObservable();

  constructor(
    private authenticatedUserService: AuthenticatedUserService,
    private courseService: CourseService,
    private playlistService: PlayListService,
    private playlistSourceService: PlayListSourceService
  ) {
    super();
    combineLatest([
      this.authenticatedUserService.item$,
      this.courseService.item$,
      this.currentSourceId$,
    ])
      .pipe(
        map(([user, course, currentSourceId]) => {
          // This is being done in the course service now
          // // rebuild sequence numbers of sources
          // let newItemSeqNumber = 0;
          // let newSourceSeqNumber = 0;
          // const items: Partial<PlayListItem>[] = course?.playlist?.items?.map(
          //   (item: Partial<PlayListItem>) => {
          //     item.seq = ++newItemSeqNumber;
          //     item.sources = item.sources.map(
          //       (source: Partial<PlayListSource>) => {
          //         source.seq = ++newSourceSeqNumber;
          //         return source;
          //       }
          //     );

          //     return item;
          //   }
          // );

          const items = course.playlist.items;

          const playlistItem: Partial<PlayListItem> = items?.find(
            (record: Partial<PlayListItem>) => {
              const sourceFound = record.sources.find(
                (source: Partial<PlayListSource>) =>
                  source.seq === currentSourceId
              );
              if (sourceFound) return record;
            }
          );

          const source = playlistItem?.sources?.find(
            (record: Partial<PlayListSource>) => record.seq === currentSourceId
          );

          const watched: Partial<Watched>[] = user?.watched?.filter(
            (record: Partial<Watched>) => record.courseId === course?.id
          );

          const courseWatched: boolean =
            watched.length === course?.playlist?.items?.length;

          const newPlayer: Partial<Player> = {
            courseId: course?.id,
            course: course,
            playlistItems: items,
            playlistItemId: playlistItem.seq,
            playlistItem,
            sourceId: currentSourceId,
            source,
            userId: user?.id,
            courseWatched,
            watched,
            autoplay: user?.settings?.autoPlay,
          };
          this.item.next(newPlayer);
          this.#playlistItems.next(items);
        })
      )
      .subscribe();
  }

  setPlaylistItemId(id: number) {
    this.#currentPlaylistItemId.next(id);
    this.#currentSourceId.next(1);
  }

  setPlaylistSourceId(id: number) {
    this.#currentSourceId.next(id);
  }
}
