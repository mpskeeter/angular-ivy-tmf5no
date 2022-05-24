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

  checks = [
    {
      size: 'xxxl',
      items: 8,
    },
    {
      size: 'xxl',
      items: 6,
    },
    {
      size: 'xl',
      items: 5,
    },
    {
      size: 'lg',
      items: 4,
    },
    {
      size: 'md',
      items: 3,
    },
    {
      size: 'sm',
      items: 2,
    },
    {
      size: 'xs',
      items: 1,
    },
  ];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService
      .subscribeToLayoutChanges()
      .pipe(
        map((sizeResponse) => {
          console.log('sizeResponse:', sizeResponse);
          const sizeFound = this.checks.find((item) =>
            sizeResponse.includes(item.size)
          );
          console.log('sizefound:', sizeFound);
          const itemsPerPage = sizeFound.items;

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

          this.#settings.next({
            itemsPerPage,
            pages,
            recordsPerPage,
          });
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
