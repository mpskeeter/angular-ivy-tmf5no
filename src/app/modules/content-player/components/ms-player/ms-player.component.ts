import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Player, PlayListSource, Watched } from '../../../shared-types';
import { PlayerService, WatchedService } from '../../../shared';

@Component({
  selector: 'app-ms-player',
  templateUrl: './ms-player.component.html',
})
export class MsPlayerComponent implements OnInit, OnDestroy {
  doc: string = '';
  item: Partial<Player> = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

  displayCheckbox: boolean = true;

  constructor(
    public playerService: PlayerService,
    public watchedService: WatchedService
  ) {}

  ngOnInit(): void {
    this.playerService.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Partial<Player>) => (this.item = item));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  acknowledge() {
    console.log(this.item);

    if (
      !this.item.watched.find(
        (watchedItem: Watched) =>
          watchedItem.courseId === this.item.course.id &&
          watchedItem.itemId === this.item.playlistItem.id &&
          watchedItem.sourceId === this.item.source.id
      )
    ) {
      this.watchedService.save({
        id: null,
        userId: this.item?.userId,
        courseId: this.item?.courseId,
        itemId: this.item?.playlistItemId,
        sourceId: this.item?.source.id,
        watched: true,
      });
    }

    // if (this.item?.sourceId !== this.item?.maxSequence)
    this.playerService.setPlaylistSourceId(this.item?.sourceId + 1);
  }
}
