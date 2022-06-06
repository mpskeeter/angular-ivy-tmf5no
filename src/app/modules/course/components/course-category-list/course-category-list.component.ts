import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryService, CourseService } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoryListComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public service: CategoryService,
    public courseService: CourseService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => {
          const categoryId = parseInt(params.get('id'), 10);
          this.service.get(categoryId);
          this.courseService.getAllForCategory(categoryId);
        })
      )
      .subscribe();
  }

  findFeatured(
    courses: Partial<Course>[],
    isFeatured: boolean
  ): Partial<Course>[] {
    return courses.filter((p) => p.isFeatured === isFeatured);
  }
}
