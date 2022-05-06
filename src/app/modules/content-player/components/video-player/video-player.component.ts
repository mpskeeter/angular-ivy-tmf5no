import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { Player, PlayListSource } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  item: Partial<Player> = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public playerService: PlayerService) {}

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
    this.playerService.setWatched({
      userId: this.item?.user?.id,
      courseId: this.item?.course?.id,
      itemId: this.item?.playlistItem?.id,
      sourceId: this.item?.source?.id,
    });
    this.playerService.setSourceId(this.item?.source?.id + 1);
  }
}
