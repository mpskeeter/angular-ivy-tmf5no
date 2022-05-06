import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Player, PlayListSource } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-ms-player',
  templateUrl: './ms-player.component.html',
})
export class MsPlayerComponent implements OnInit, OnDestroy {
  // doc: string = '';
  item: Partial<Player> = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

  displayCheckbox: boolean = true;

  constructor(public playerService: PlayerService) {}

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
    this.playerService.setWatched({
      userId: this.item?.user?.id,
      courseId: this.item?.course?.id,
      itemId: this.item?.playlistItem?.id,
      sourceId: this.item?.source?.id,
    });
    this.playerService.setSourceId(this.item?.source?.id + 1);
  }
}
