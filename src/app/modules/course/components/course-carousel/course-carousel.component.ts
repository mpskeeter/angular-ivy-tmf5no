import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { LayoutService, CustomBreakpointNames } from '../../../shared';
import { Course } from '../../../shared-types';

interface Settings {
  itemsPerPage: number;
  pages: number[];
  recordsPerPage: Array<Partial<Course>[]>;
}

@Component({
  selector: 'app-course-carousel',
  templateUrl: './course-carousel.component.html',
})
export class CourseCarouselComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() courses: Partial<Course>[] = [];

  #settings: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(null);
  settings$: Observable<Settings> = this.#settings.asObservable();

  #itemsPerPage: BehaviorSubject<number> = new BehaviorSubject<number>(3);
  itemsPerPage$: Observable<number> = this.#itemsPerPage.asObservable();

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService
      .subscribeToLayoutChanges()
      .pipe(
        map((observerResponse) => {
          switch (true) {
            case observerResponse.includes('xl'):
              this.#itemsPerPage.next(5);
              break;
            case observerResponse.includes('lg'):
              this.#itemsPerPage.next(4);
              break;
            case observerResponse.includes('md'):
              this.#itemsPerPage.next(3);
              break;
            case observerResponse.includes('sm'):
              this.#itemsPerPage.next(2);
              break;
            case observerResponse.includes('xs'):
              this.#itemsPerPage.next(1);
              break;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.itemsPerPage$
      .pipe(
        map((itemsPerPage: number) => {
          const pages = [
            ...Array(Math.ceil(this.courses.length / itemsPerPage)).keys(),
          ];

          const recordsPerPage = pages.map((page: number) => {
            return this.courses.filter(
              (_, index) =>
                index >= page * itemsPerPage &&
                index < (page + 1) * itemsPerPage
            );
          });

          const settings = {
            itemsPerPage,
            pages,
            recordsPerPage,
          };

          this.#settings.next(settings);
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
