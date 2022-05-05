import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import {
  Course,
  PlayListItem,
  Player,
  PlayListSource,
  User,
  Watched,
} from '../../../shared-types';
import {
  AuthenticatedUserService,
  CourseService,
  PlayerService,
  PlayListService,
  PlayListItemService,
  PlayListSourceService,
  WatchedService,
} from '../../../shared';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  item: Partial<Player> = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public playerService: PlayerService,
    public watchedService: WatchedService
  ) {}

  ngOnInit(): void {
    this.playerService.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Partial<Player>) => {
        this.item = item;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onVideoEnded() {
    if (
      !this.item.watched.find(
        (watchedItem: Watched) =>
          watchedItem.courseId === this.item.course.id &&
          watchedItem.itemId === this.item.playlistItem.id &&
          watchedItem.sourceId === this.item.source.id
      )
    ) {
      const watched: Partial<Watched> = {
        id: null,
        userId: this.item?.userId,
        courseId: this.item?.courseId,
        itemId: this.item?.playlistItemId,
        sourceId: this.item?.source.id,
        watched: true,
      };
      // console.log('item watchd:', watched);
      this.watchedService.save(watched);
    }

    // if (this.item?.sourceId !== this.item?.maxSequence)
    this.playerService.setPlaylistSourceId(this.item?.sourceId + 1);
  }
}
