import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  Item,
  Source,
  User,
  Watched,
} from '../../../shared-types';
import {
  AuthenticatedUserService,
  ItemService,
  PlayerService,
} from '../../../shared';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
})
export class PlayerItemComponent implements OnInit, OnDestroy {
  @Input() item: Partial<Item> = {};

  #watched: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  watched$: Observable<boolean> = this.#watched.asObservable();

  currentItem: Partial<Item> = {};
  sourceItem: Partial<Source> = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public service: PlayerService) {}

  ngOnInit() {
    this.service.item$.pipe(takeUntil(this.destroy$)).subscribe((item) => {
      this.currentItem = item.playlistItem;
      this.sourceItem = item.source;
      this.#watched.next(
        item?.watched?.find(
          (item: Partial<Watched>) => item.itemId === this.item.id
        )?.watched || false
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
