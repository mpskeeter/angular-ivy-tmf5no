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

  #currentSourceId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
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
      this.currentPlaylistItemId$,
      this.currentSourceId$,
    ])
      .pipe(
        map(([user, course, currentItemId, currentSourceId]) => {
          // rebuild sequence numbers of sources
          let newItemSeqNumber = 0;
          let newSourceSeqNumber = 0;
          const newItemListItems: Partial<PlayListItem>[] =
            course?.playlist?.items?.map((item: Partial<PlayListItem>) => {
              item.seq = ++newItemSeqNumber;
              item.sources = item.sources.map(
                (source: Partial<PlayListSource>) => {
                  source.seq = ++newSourceSeqNumber;
                  return source;
                }
              );

              return item;
            });

          console.log('newItemListItems:', newItemListItems);

          const newCourse: Partial<Course> = course;

          newCourse.playlist.items = newItemListItems;

          console.log('newCourse:', newCourse);

          const newplayListItem: Partial<PlayListItem> =
            newCourse?.playlist?.items.find(
              (record: Partial<PlayListItem>) => record.seq === currentItemId
            );

          console.log('newplayListItem:', newplayListItem);

          // const newSource: Partial<PlayListSource> =
          const newSource = newCourse?.playlist?.items?.map(
            (item: Partial<PlayListItem>) => {
              const source = item.sources.find(
                (record: Partial<PlayListSource>) =>
                  record.seq === currentSourceId
              );

              if (source) {
                // console.log('source:', source);
                return source;
              }
            }
          );

          console.log('newSource:', newSource);

          const playlistItem: Partial<PlayListItem> =
            course?.playlist?.items?.find(
              (record: Partial<PlayListItem>) => record.seq === currentItemId
            );

          const source: Partial<PlayListSource> = playlistItem?.sources?.find(
            (record: Partial<PlayListSource>) => record.seq === currentSourceId
          );

          const watched: Partial<Watched>[] = user?.watched?.filter(
            (record: Partial<Watched>) => record.courseId === course?.id
          );

          const courseWatched: boolean =
            watched.length === course?.playlist?.items?.length;

          const newPlayer: Partial<Player> = {
            courseId: course?.id,
            course,
            playlistItems: course?.playlist?.items,
            playlistItemId: currentItemId,
            playlistItem,
            sourceId: currentSourceId,
            source,
            userId: user?.id,
            courseWatched,
            watched,
            autoplay: user?.settings?.autoPlay,
          };
          // console.log('player:', newPlayer);
          this.item.next(newPlayer);
          this.#playlistItems.next(course?.playlist?.items);
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
