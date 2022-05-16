import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryService } from '../../../shared';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoryListComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public service: CategoryService
  ) {}

  ngOnInit() {
    this.route.paramMap
      // .pipe(tap((params: ParamMap) => console.log('params:', params)))
      .pipe(
        map((params: ParamMap) => {
          // const categoryStr = params.get('id');
          // if (categoryStr) {
          //   const categoryId = parseInt(categoryStr, 10);
          //   this.service.get(categoryId);
          // }

          this.service.get(parseInt(params.get('id'), 10));
        })
      )
      .subscribe();
  }
}
