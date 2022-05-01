import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PlayListSource } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-course-detail-content-item-source',
  templateUrl: './course-detail-content-item-source.component.html',
})
export class CourseDetailContentItemSourceComponent implements OnInit, OnDestroy {
  @Input() source: Partial<PlayListSource> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  #watched: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  watched$: Observable<boolean> = this.#watched.asObservable();

  constructor(
    public player: PlayerService,
  ) {}

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
