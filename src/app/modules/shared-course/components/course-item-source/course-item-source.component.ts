import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Item, Source } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-course-item-source',
  templateUrl: './course-item-source.component.html',
})
export class CourseItemSourceComponent implements OnInit, OnDestroy {
  @Input() item: Partial<Item> = {};
  @Input() source: Partial<Source> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();

  showDescription: boolean = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  #watched: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  watched$: Observable<boolean> = this.#watched.asObservable();

  constructor(public service: PlayerService) {}

  ngOnInit() {
    this.service.item$
      .pipe(
        map((item) => {
          this.#watched.next(
            !!item.watched.find(
              (watched) =>
                watched.courseId === item.course.id &&
                watched.itemId === this.item.id &&
                watched.sourceId === this.source.id &&
                watched.watched === true
            )
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
