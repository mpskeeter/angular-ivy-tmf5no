import {
  // ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CategoryService, CourseService } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoryListComponent implements OnInit, OnDestroy {
  featured: Partial<Course>[] = [];
  nonFeatured: Partial<Course>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public route: ActivatedRoute,
    public service: CategoryService,
    public courseService: CourseService
  ) {}

  ngOnInit() {
    this.courseService.items$
      .pipe(
        map((courses: Partial<Course>[]) => {
          this.featured = courses?.filter((p) => p.isFeatured);
          this.nonFeatured = courses?.filter((p) => !p.isFeatured);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.route.paramMap
      .pipe(
        map((params: ParamMap) => {
          const categoryId = parseInt(params.get('id'), 10);
          this.service.getRawCategory(categoryId);
          this.courseService.getAllForCategory(categoryId);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
