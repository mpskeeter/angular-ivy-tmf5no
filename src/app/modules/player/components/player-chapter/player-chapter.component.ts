import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlayerService } from '../../../shared';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-player-chapter',
  templateUrl: './player-chapter.component.html',
})
export class PlayerChapterComponent implements OnInit, OnDestroy {
  @Input() item: Partial<PlayListItem> = {};
  @Input() show: boolean = false;

  currentItem: Partial<PlayListItem> = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public service: PlayerService) {}

  ngOnInit() {
    this.service.item$.pipe(takeUntil(this.destroy$)).subscribe((item) => {
      this.currentItem = item.playlistItem;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
