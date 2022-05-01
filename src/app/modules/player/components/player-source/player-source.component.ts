import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PlayListSource } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-player-source',
  templateUrl: './player-source.component.html',
})
export class PlayerSourceComponent implements OnInit, OnDestroy {
  @Input() source: Partial<PlayListSource> = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

  #watched: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  watched$: Observable<boolean> = this.#watched.asObservable();

  constructor(public service: PlayerService) {}

  ngOnInit() {
    this.service.item$
      .pipe(
        tap((item) => console.log('watched:', item.watched)),
        map((item) =>
          item.watched.map((watched) => {
            if (watched.sourceId === this.source.id) {
              this.#watched.next(true);
            }
          })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
