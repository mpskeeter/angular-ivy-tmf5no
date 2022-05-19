import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryService } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoryListComponent implements OnInit {

  // featuredPage: number = 1;
  // setFeaturedPage(page: number) {
  //   this.featuredPage = page;
  // }

  // nonFeaturedPage: number = 1;
  // setNonFeaturedPage(page: number) {
  //   this.nonFeaturedPage = page;
  // }

  constructor(public route: ActivatedRoute, public service: CategoryService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => {
          this.service.get(parseInt(params.get('id'), 10));
        })
      )
      .subscribe();
  }

  findFeatured(courses: Partial<Course>[]): Partial<Course>[] {
    return courses.filter((p) => p.isFeatured);
  }

  findNonFeatured(courses: Partial<Course>[]): Partial<Course>[] {
    return courses.filter((p) => !p.isFeatured);
  }
}
