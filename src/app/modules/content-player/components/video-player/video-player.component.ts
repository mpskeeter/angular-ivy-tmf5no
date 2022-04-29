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
    const maxSource = this.item?.playlistItem?.sources.reduce((p, c) =>
      p?.seq > c?.seq ? p : c
    );
    const lessonCompleted = this.item.sourceId === maxSource?.seq;
    if (lessonCompleted) {
      const watched: Partial<Watched> = {
        id: null,
        userId: this.item?.userId,
        courseId: this.item?.courseId,
        itemId: this.item?.playlistItemId,
        watched: true,
      };
      this.watchedService.save(watched);

      //   if (
      //     this.item?.playlistItem?.seq !==
      //     this.item.playlistItems[this.item.playlistItems?.length - 1]?.seq
      //   ) {
      //     this.playerService.setPlaylistItemId(this.item?.playlistItem?.seq + 1);
      //   }
      // } else {
      //   if (!this.item.courseWatched)
      //     this.playerService.setPlaylistSourceId(this.item?.sourceId + 1);
    }
    this.playerService.setPlaylistSourceId(this.item?.sourceId + 1);
  }
}
