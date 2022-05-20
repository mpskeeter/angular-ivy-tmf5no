import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CategoryService } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoryListComponent implements OnInit, OnDestroy {
  itemsPerPage: number = 3;

  destroy$: Subject<boolean> = new Subject<boolean>();

  featured: Partial<Course>[] = [];
  nonFeatured: Partial<Course>[] = [];

  constructor(public route: ActivatedRoute, public service: CategoryService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => {
          this.service.get(parseInt(params.get('id'), 10));
        })
      )
      .subscribe();

    this.service.item$
      .pipe(
        map((item) => {
          this.featured = item.courses.filter((p) => p.isFeatured);
          this.nonFeatured = item.courses.filter((p) => !p.isFeatured);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  pages(courses: Partial<Course>[]): number[] {
    const records: number = courses.length;
    return [...Array(Math.round(records / this.itemsPerPage)).keys()];
  }

  getRecords(courses: Partial<Course>[], page: number) {
    const recordsFound = courses.filter(
      (p, index) =>
        index >= page * this.itemsPerPage &&
        index < (page + 1) * this.itemsPerPage
    );
    console.log('recordsFound:', recordsFound);
    return recordsFound;
  }
}
